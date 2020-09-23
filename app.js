// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const myButton = document.getElementById("button")
const myInput = document.getElementById("input")
const myName = document.getElementById("name")
const myHello = document.getElementById("hello")
const myMyName = document.getElementById("my-name-is")


button.addEventListener('click', () => {
       const input = myInput.value;
       myName.textContent = 'Are you proud of yourself ' + input + '?';
       myHello.textContent = 'wow!'
       myMyName.textContent = 'You pressed a button!'
       document.body.style.backgroundImage = "url('https://d.newsweek.com/en/full/1625454/supernova.jpg?w=1600&h=1600&q=88&f=4c2b28421691a02b4cdf8be2f66b08a8')";
       myInput.value = '';
    });
