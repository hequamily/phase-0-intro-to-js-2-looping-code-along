const names = ['Alice', 'Bob', 'Charlie'];
const occasion = 'birthday';
const messages = writeCards(names, occasion);


function writeCards(names, occasion){
  let messeges = []
  for (let i = 0; i < names.length; i++ ){
    messeges.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
return messeges
}
console.log(messages)

function countDown(number){
  for (let i = number; i >= 0; i--){
    console.log(i)
  }
}


// function countDown(number) {
//   for (let i = number; i >= 0; i--) {
//     console.log(i);

// function writeCards(names, occasion) {
//     const messages = [];
  
//     for (let i = 0; i < names.length; i++) {
//       messages.push(`Thank you, ${names[i]}, for the ${occasion} gift!`);
//     }
  
//     return messages;
//   }
//   console.log(messages);

// function writeCards(names, eventName) {
//     const thankYouMessages = [];
  
//     for (let i = 0; i < names.length; i++) {
//       thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
//     }
  
//     return thankYouMessages;
//   }



  
  //   }
  // }
  
