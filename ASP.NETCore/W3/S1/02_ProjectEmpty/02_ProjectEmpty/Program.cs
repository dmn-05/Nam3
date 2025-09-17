using _02_ProjectEmpty.Middleware;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseMiddleware<CustomMiddleware2>();
app.UseMiddleware<CustomMiddleware1>();
// Enable serving static files from wwwroot folder
app.UseStaticFiles();
app.MapGet("/", () => Results.Content(@"<!DOCTYPE HTML>
<html>
    <head>
        <meta charset=""utf-8"">
        <title>Home</title>
    </head>
    <body>
        <h1>Trang chủ</h1>
        <p>Chào mừng @name đến với ứng dụng web ASP.NET Core trống!</p>
    </body>
</html>".Replace("@name","Tâm"), "text/html"));
// Map a route to serve the TrangChu.html file
app.MapGet("/test", () => Results.Content(File.ReadAllText("wwwroot/TrangChu.html"), "text/html"));

app.Run();
