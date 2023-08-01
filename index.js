
const names = ["Andrew", "Mark", "Connor"]
const day = "birthday"

function writeCards(names, day) {
    let messages = []
    for(let i=0; i < names.length; i++) {   
    messages =[...messages, `Thank you, ${names[i]}, for the wonderful ${day} gift!`]
    }
    return (messages);
}

console.log(writeCards(names, day));

function countDown (number) {
    while (number >=0) {
    console.log(number--);
    }
}
countDown(10);