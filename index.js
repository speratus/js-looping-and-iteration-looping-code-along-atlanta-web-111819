function writeCards(names) {
    const thanks = [];
    for (let i = 0; i < names.length; i ++) {
        thanks[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        console.log(thanks[i]);
    }
    return thanks;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        --num;
    }
}
