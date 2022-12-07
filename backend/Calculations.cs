namespace backend.Models;

public class Calculation{
    public int num1 {get; set;}
    public int num2 {get; set;}
    public int result {get; set;}
    public DateTime time {get; set;}

    public Calculation(int num1, int num2, int result, DateTime time){
        this.num1 = num1;
        this.num2 = num2;
        this.result = num1 + num2;
        this.time = time;
    }
}