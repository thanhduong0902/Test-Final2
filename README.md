let inputArray=[2,3,-5,-2,4]
function adjacentElementsProduct(inputArray) {
    let max = inputArray[0]*inputArray[1];
    for(let i=1;i<inputArray.length;i++) if(inputArray[i]*inputArray[i+1]>max) max = inputArray[i]*inputArray[i+1];
    return max;
}

//ex2
 a = [60, 40, 55, 75, 64]
function alternatingSums(a) {
    let value1 =0, value2=0;
    let b= [];
    for(let i=0;i<a.length;i++) (i%2==0 ? value1+=a[i]: value2+=a[i])
    b.push(value1);
    b.push(value2);
    return b;
}
