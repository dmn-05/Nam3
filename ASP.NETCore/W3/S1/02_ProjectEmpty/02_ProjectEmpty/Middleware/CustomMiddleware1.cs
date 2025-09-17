namespace _02_ProjectEmpty.Middleware
{

    public class CustomMiddleware1
    {
       private readonly RequestDelegate _next;
        public CustomMiddleware1(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            Console.WriteLine("CustomMiddleware1: "+context.Request.Path);
            await _next(context);
            Console.WriteLine("CustomMiddleware1: Response completed");
        }
    }
}
