// conditional statement

let temperature = 50;

if (temperature > 90) {
    console.log("It's too hot outside!");
}
else if (temperature > 80) {
    console.log("It's not too hot outside.");
}
else if (temperature < 20) {
    console.log("It's too cold outside.");
}
else {
    console.log("It's a comfortable temperature.");
}

// tenary operator
let weather = (temperature > 80) ? "It's hot outside." : "It's not too hot outside.";
console.log(weather);

// for loops

for (x=1; x<=10; x++) {
    console.log("Number: " + x);
}

// while loops

let y = 1;
while (y <= 5) {
    console.log("while loop: " + y);
    y++;
}
let fruits = ["apple", "banana", "orange"]; for (let fruit of fruits) { 
 console.log("Fruit: " + fruit); 
}

