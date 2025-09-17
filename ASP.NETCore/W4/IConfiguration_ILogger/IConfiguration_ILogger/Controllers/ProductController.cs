using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using Microsoft.Extensions.Configuration;

public class ProductController : Controller {
  private readonly IConfiguration _configuration;
  public ProductController(IConfiguration configuration) {
      _configuration = configuration;
  }
  public IActionResult List() {
    // Đọc một giá trị đơn lẻ
    string defaultLogLevel = _configuration["Logging:LogLevel:Default"];
    Console.WriteLine($"Default Log Level: {defaultLogLevel}"); // Output: Information

    // Đọc một phần cấu hình (section)
    var pagningSection = _configuration.GetSection("PagingSettings");
    int itemsPerPage = pagningSection.GetValue<int>("ItemsPerPage"); // Đọc giá trị từ section
    int maxPagesToShow = _configuration.GetValue<int>("PagingSettings:MaxPagesToShow"); // Đọc trực tiếp
    Console.WriteLine($"Item Per Page: {itemsPerPage}, Max Pages To Show: {maxPagesToShow}"); // Output: Items per page: 4, Max pages: 5
    // Hoặc có thể ánh xạ một phần cấu hình vào một class POCO (Plain Old CLR Object)
    // (Cần cấu hình AddOptions trong Program.cs và tạo class PagingSettings)
    return View();
  }

  //public IActionResult Index() {
  //  return View();
  //}
}
