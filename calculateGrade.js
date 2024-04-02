const marks=[43,65,35,67,35,65,89,88,99,50,88,77,23,78,59,99,99,99,99,99,35,7,87,56,98,90];
console.log(calculateGrade(marks))
function calculateGrade(marks){
    let average=calculateAverage(marks);
    if (average<60) return 'F'
    if (average<70) return 'D'
    if (average<80) return 'C'
    if (average<90) return 'B'
    return 'A'
}
function calculateAverage(marks){
    let sum=0;
    for (let val of marks) sum+=val
    return sum/marks.length;
}