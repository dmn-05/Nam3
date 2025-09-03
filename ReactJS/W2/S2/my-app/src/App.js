import './App.css';
import { useState } from 'react';

function App() {
    const [Arr, setArr] = useState([
        'CDTH23A',
        'CDTH23B',
        'CDTH23C',
        'CDTH23D',
        'CDTH23E',
        'CDTH23F',
        'CDTH23H',
    ]);
    const [addStr, setAddStr] = useState('');
    const [oldStr, setOldStr] = useState('');
    const [newStr, setNewStr] = useState('');
    const handleAdd = function () {
        setArr([...Arr, addStr]);
        setAddStr('');
    };
    const handleDelete = function (del) {
        setArr(Arr.filter((s) => s !== del));
    };
    const handleUpdate = function () {
        setArr(Arr.map((s) => (s === oldStr ? newStr : s)));
        setNewStr('');
        setOldStr('');
    };
    return (
        <>
            <h1>Danh sách các lớp:</h1>
            <ul>
                {Arr.map((x) => {
                    return (
                        <li key={x}>
                            {x === oldStr ? (
                                <>
                                    <input
                                        value={newStr}
                                        onChange={(e) =>
                                            setNewStr(e.target.value)
                                        }
                                    />
                                    <button onClick={handleUpdate}>Lưu</button>
                                    <button
                                        onClick={() => {
                                            setOldStr('');
                                        }}
                                    >
                                        Hủy
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p>{x}</p>
                                    <button
                                        onClick={() => {
                                            setOldStr(x);
                                            setNewStr(x);
                                        }}
                                    >
                                        Sửa
                                    </button>
                                    <button onClick={() => handleDelete(x)}>
                                        Xóa
                                    </button>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
            <input
                type="text"
                value={addStr}
                onChange={(e) => setAddStr(e.target.value)}
            />
            <button disabled={!addStr.trim()} onClick={handleAdd}>
                Thêm
            </button>
        </>
    );
}

export default App;
