namespace _02_ProjectEmpty.Middleware
{
    public class CustomMiddleware2
    {
        private readonly RequestDelegate _next;
        public CustomMiddleware2(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            Console.WriteLine("CustomMiddleware2: " + context.Request.Path);
            await _next(context);
            Console.WriteLine("CustomMiddleware2: Response completed");
        }
    }
}
