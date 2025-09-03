namespace XayDung_MH_MVC
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllersWithViews(); //Khoi dong services
            var app = builder.Build();

            app.UseRouting(); // tao routing

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Nhat}/{action=Index}/{id?}");

            app.Run();

        }
    }

}

