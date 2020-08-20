function add(n1:number, n2:number, showResult:boolean, phrase:string)
{
    let result = n1 + n2;
    if(showResult)
    {
        console.log(phrase + result);
    }
    else
    {
        return result;
    }
}

let number1: number;
number1 = 5;
const number2 = 7;

const result = add(number1, number2, true, "The Result is ");

console.log(result);