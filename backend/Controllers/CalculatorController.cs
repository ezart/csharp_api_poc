using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class CalculatorController : ControllerBase{
    public CalculatorController(){

    }

    [HttpGet]
    public ActionResult<List<Calculation>> GetAll() => CalculatorService.GetAll();

    [HttpGet]
    public IActionResult Create(int num1, int num2){
        Calculation c = new Calculation(num1, num2, num1 + num1, DateTime.Now);
        CalculatorService.Add(c);
        return CreateAtAction(nameof(Create), new {id= 1}, c);
    }
}
