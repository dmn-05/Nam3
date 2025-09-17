namespace _01_DI {
  public class DepencyInjection {
    int Result { get; }
  }
  public class DepencyInjection1 : DepencyInjection {
    public int Result => 1;
    public DepencyInjection1() {
      Console.WriteLine("Create DI 1");
    }
  } 
}
