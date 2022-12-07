using backend.Models;

namespace backend.Services;

public static class CalculatorService{
    static List<Calculation> History {get;}

    static CalculatorService(){
        History = new List<Calculation> {
            new Calculation(1,2, 3, DateTime.Now)};
    }

    public static List <Calculation> GetAll() => History;

    public static void Add(Calculation calculation){
        History.Add(calculation);
    }
}
