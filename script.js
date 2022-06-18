const container = document.querySelector('#container')


const button = document.querySelector('.btn')
button.addEventListener('click', function () {
const boxes = document.querySelectorAll('.div')
const boxRow = document.querySelectorAll('.divContainer')
boxes.forEach(box => {
    box.remove();
})
boxRow.forEach(row => {
    row.remove();
})
let number = prompt("How many boxes (max 100)")
createGrid(number)
gridDesign()
})
let createGrid = (num) => {
    for(let i = 0; i < num; i++){
        const content = document.createElement('div')
        content.classList.add('divContainer')
        container.appendChild(content);
        for(let i = 0; i < num; i++){
            const div = document.createElement('div')
            div.classList.add('div')
            content.appendChild(div);
        }
    }
}
let gridDesign = () => {
const bigContainer = document.querySelector('#container')
bigContainer.setAttribute('style', 'display: flex;flex-direction: row;flex-grow: 1;height: 960px;width: 960px;')
const boxes = document.querySelectorAll('.div')
boxes.forEach(box => {
let num1 = Math.floor((Math.random() * 256));
let num2 = Math.floor((Math.random() * 256));
let num3 = Math.floor((Math.random() * 256));
    box.setAttribute('style', 'display: flex; flex-direction: column; flex-grow: 1; height: auto; width: auto;')
    box.addEventListener('mouseover', () =>{
        box.setAttribute('style', `display: flex; flex-direction: column; flex-grow: 1; background-color: rgb(${num1}, ${num2}, ${num3}); height: auto; width: auto;`)
    })
});
const boxRow = document.querySelectorAll('.divContainer')
boxRow.forEach(row => {
    row.setAttribute('style', 'display: flex; flex-direction: column; flex-grow: 1; background-color: white; height: auto; width: auto;')
})
}
