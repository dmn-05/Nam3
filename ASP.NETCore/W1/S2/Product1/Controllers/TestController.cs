using Microsoft.AspNetCore.Mvc;

namespace Product1.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.Messenge = "Chao Mung Ban Den Voi Cua Hang The Thao! Day La Trang Web Test";
            return View();
        }
        public IActionResult HelloWorld()
        {
            return Content("Xin Chao The Gioi");
        }
        public IActionResult Welcome(string name = "Khach")
        {
            return Content($"Chao mung {name} den voi trang web");
        }
    }
}
