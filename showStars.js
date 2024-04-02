const stars = 4;
showStars(stars);

function showStars(stars) {
    for (let row = 1; row <= stars; row++) {
        let pattern = '';

        for (let i = 0; i < row; i++) {
            pattern += '*';
        }

        console.log(pattern);
    }
}
