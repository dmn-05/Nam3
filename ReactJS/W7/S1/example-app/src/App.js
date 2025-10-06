import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([
    { id: 1, name: "Ôn bài", done: true },
    { id: 2, name: "Làm bài", done: false },
    { id: 3, name: "Làm bài kiểm tra", done: false },
    { id: 4, name: "Thi", done: true },
  ]);

  const [newTask, setNewTask] = useState("");

  // ➕ Thêm công việc
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newId = task.length > 0 ? Math.max(...task.map(t => t.id)) + 1 : 1;
      const newTaskObj = { id: newId, name: newTask.trim(), done: false };
      setTask([...task, newTaskObj]);
      setNewTask("");
    } else {
      alert("Vui lòng nhập tên công việc!");
    }
  };

  // ✏️ Sửa công việc
  const handleEditTask = (id) => {
    const editedName = prompt("Nhập tên công việc mới:");
    if (editedName && editedName.trim() !== "") {
      setTask(task.map(t => t.id === id ? { ...t, name: editedName.trim() } : t));
    }
  };

  // ❌ Xóa công việc
  const handleDeleteTask = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa công việc này không?")) {
      setTask(task.filter(t => t.id !== id));
    }
  };

  return (
    <div className="App" style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>📋 Danh sách công việc</h2>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập công việc..."
          style={{ padding: "5px 10px", marginRight: 10 }}
        />
        <button onClick={handleAddTask}>Thêm</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {task.map((t) => (
          <li
            key={t.id}
            style={{
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <input
              type="checkbox"
              checked={t.done}
              onChange={() =>
                setTask(task.map(item =>
                  item.id === t.id ? { ...item, done: !item.done } : item
                ))
              }
            />
            <span
              style={{
                flex: 1,
                textDecoration: t.done ? "line-through" : "none",
                color: t.done ? "gray" : "black",
              }}
            >
              {t.name}
            </span>
            <button onClick={() => handleEditTask(t.id)}>✏️ Sửa</button>
            <button onClick={() => handleDeleteTask(t.id)}>🗑️ Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}