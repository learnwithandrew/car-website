// let newElement = document.createElement('p');
// newElement.textContent = "I am learning DOM manipulation in Javascript";
// document.querySelector('body').appendChild(newElement)

// let secondLi = document.getElementById('second-li').textContent='thank you DOm manipulation'
// console.log(secondLi)

let clickButton = document.getElementById('button');
clickButton.addEventListener('click', () => {
    const message = 'Yea!!, I am learning DOM manipulation';
    alert(message);
    console.log(message);
})



           