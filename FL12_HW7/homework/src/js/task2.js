if(confirm('Do you want to play a game?')) {
    let rightBound; 
    let num;
    let prize;
    let possiblePrize;
    let input;
    let found;
    let check = 1;
    let check1 = 1;
    let eight = 8;
    let three = 3;
    let four = 4;
    while(check){
        prize = 0;
        possiblePrize = { 1: 100,
                          2: 50,
                          3: 25 };
        rightBound = eight;
        while(check1) {
            num = Math.floor(Math.random() * (rightBound + 1));
            found = 0;
            for(let i = 0; i < three && !found; ++i){
                input = prompt('Choose a roulette pocket number from 0 to ' + rightBound + '\n' +
                                    'Attempts left: ' + (three - i) + '\n' +
                                    'Total prize: ' + prize + '$\n' +
                                    'Possible prize on current attempt: ' + possiblePrize[1 + i] + '$');
                if(num === input) {
                    found = 1;
                    prize += possiblePrize[1 + i];
                    if(confirm('Congratulation, you won!   Your prize is: ' + prize + '$. Do you want to continue?')){
                        rightBound += four;
                        for(let j = 0; j < three; ++j) {
                            possiblePrize[j] *= 2;
                        }
                    } else{
                        alert('Thank you for your participation. Your prize is: ' + prize + '$');
                        check = check1 = 0;
                        break;
                    }
                }
            }
            if(!found){
                alert('Thank you for your participation. Your prize is: ' + prize + '$');
                if(!confirm('Do you want to play again?')){
                    check = check1 = 0;
                }
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}