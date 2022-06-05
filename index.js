// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}
function writeCards( names, event ) {
    let thanks = []
    for ( let i = 0; i < names.length; i++ ) {
      thanks.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return thanks
}

wrapGifts(gifts);
  function countDown (){
    let i = 10;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
countDown();