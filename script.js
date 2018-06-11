var age = Number(prompt('What is your age?'));

if (Number.isNaN(age)) {
    console.log('Input is not a valid number, only numbers 0-9 allowed');
}
else if (age < 0) {
    console.log('Error');
}
else if (age == 21) {
    console.log('Happy 21st birthday!!');
}
// If age is odd (not evenly divisible by two)
else if (age % 2 !== 0) {
    console.log('Your age is odd!');
}
// If age is a perfect square
else if (age % Math.sqrt(age) === 0) {
    console.log('Perfect square!')
} else {
    console.log('You are ' + age + ' ' + 'years old!');
}
