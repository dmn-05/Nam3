using System.Diagnostics;
using _01_DI.Models;
using Microsoft.AspNetCore.Mvc;

namespace _01_DI.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DepencyInjection _di;
        private readonly DepencyInjection _di2;
    public HomeController(ILogger<HomeController> logger, DepencyInjection di, DepencyInjection di2)
        {
            _logger = logger;
            _di = di;
            _di2 = di2;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
