d// Code your solutions in this file
function writeCards(arr) {
  let thankYou = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    thankYou[i] = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
  }
  return thankYou;
}

function countDown(int) {
  for (let i = int; i >= 0; i--) {
    console.log(i);
    }
}
