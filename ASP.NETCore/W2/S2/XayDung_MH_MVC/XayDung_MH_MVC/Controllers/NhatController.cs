using Microsoft.AspNetCore.Mvc;

namespace XayDung_MH_MVC.Controllers
{
    public class NhatController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.TenTrang = "Trang Chu";
            return View();
        }
        public IActionResult Detail(string id) {
            return View();
        }

    }
}
