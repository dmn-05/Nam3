using _01_DI;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
//builder.Services.AddTransient<DepencyInjection, DepencyInjection1>();//Có bao nhiêu lần gọi nó sẽ tạo ra hết sẽ tạo ra
builder.Services.AddScoped<DepencyInjection, DepencyInjection1>();//Khai báo 2 biến thì nó vẫn chạy 1 lần nhưng f5 thì nó sẽ tạo ra 1 cái thôi
//builder.Services.AddSingleton<DepencyInjection, DepencyInjection1>();//nó chỉ gọi 1 lần duy nhất dù f5 hay tao ra nhiều biến  
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/Home/Error");
  app.UseHsts();
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
