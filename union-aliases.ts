type CombinedTypes = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: CombinedTypes,
    input2: CombinedTypes,
    resultType: ConversionDescriptor)
{
    let result: number | string;

    if(typeof input1 == 'number' && typeof input2 == 'number' || resultType == 'as-number')
    {
        result = +input2 + +input1;
    }
    else
    {
        result = input1.toString() + input2.toString();
    }

    return result;
}

console.log(combine(1, 2, "as-number"));
console.log(combine("One", "Two", "as-text"));
console.log(combine("1", 2, "as-number"));