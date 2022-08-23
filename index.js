console.log("-----1. Lowest to Highest-----");

const array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6,];

array.sort((a,b) => 
a - b)
console.log(array);

console.log("-----2. Alphabetical Order-----");

const alpha = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

alpha.sort()

console.log(alpha);

console.log("-----**Bonuses** #2-----");

const nameLength = ["Sandra", "Danny", "Frenchy",]

nameLength.sort(function(a,b) {
    return a.length - b.length
});

console.log(nameLength);