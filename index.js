// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

// wrapGifts(gifts);


function writeCards(names, event){
    let arr = [];
    for (let i = 0; i < names.length; i++){
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(arr[i]);
    }
    return arr;
}
// writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(int){
    while (int > -1){
        console.log(int);
        int--;
        debugger;
    }
}

countDown(10);