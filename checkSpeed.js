let speed=80;
let output=checkSpeed(speed);
console.log(output);

function checkSpeed(speed){
    const speedLimit=70;
    const points=Math.floor((speed-speedLimit)/5);

    if (points>=12) return 'Licence suspended'
    return (points<=0) ? 'OK' :points
}