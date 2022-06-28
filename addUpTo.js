function addUpTo(x)
{
    return x * (x+1)/2;
}
function addUpToo(x)
{
    let total = 0;
    for(let i=1;i<=x;i++)
    {
        total+=i;
    }
    return total;
}
console.log(addUpToo(10000000000));
console.log(addUpTo(10000000000));
