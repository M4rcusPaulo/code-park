let numerosDaSorte = [37, 14, 26, 5, 94, 87];

numerosDaSorte.forEach(num => {
    if (num < 50) {
        if (num % 2 === 0) {
            console.log(${num} é par e menor que 50);
        } else {
            console.log(${num} é menor que 50);
        }
    } else {
        console.log(${num} é maior que 50);
    }
});
