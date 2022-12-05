using backend.Models;

namespace backend.Services;

public static class CalculatorService{
    static List<Calculation> History {get;}

    static CalculatorService(){
        History = new List<Calculation> {
            new Calculation { num1 =1,num2 =2, result=3, time = DateTime.Now},
            new Calculation { num1 =132,num2 =223, result=355, time = DateTime.Now}
        };
    }

    public static List <Calculation> GetAll() => History;

    public static void Add(Calculation calculation){
        History.Add(calculation);
    }
}
