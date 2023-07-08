const inputEl = document.getElementById('result');
const buttonsEl = document.querySelectorAll('button');

for (let i = 0; i < buttonsEl.length; i++) {
    const element = buttonsEl[i];
    element.addEventListener("click", function(){
        const buttonValue = element.textContent;
       if (buttonValue === 'C') {
         clearAll();
       }else if(buttonValue === "="){
         calculateResult();
       }else{
        appendValue(buttonValue)  
       }
    })
}


const clearAll = () => {
    inputEl.value = ''; 
}
const calculateResult = () => {
    inputEl.value = eval(inputEl.value)
}
const appendValue = (buttonValue) => {
    inputEl.value += buttonValue
}