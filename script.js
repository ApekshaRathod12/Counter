const countValue = document.querySelector('.box2');

const increment = () => {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

function decrement(){
    let value = countValue.innerText;
    value = value - 1;
    countValue.innerText = value;
};