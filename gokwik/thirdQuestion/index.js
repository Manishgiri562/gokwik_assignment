document.addEventListener('DOMContentLoaded', () => {
      const heading = document.querySelector('h1');
      heading.textContent = 'Hello, JavaScript!';
});

const inputButton = document.querySelector('#input2');
const textInput = document.querySelector('#input1');


const eventListerCallBack = () => {
      const validation = validateTextInput(textInput.value);
      console.log(textInput);
      if(!validation){
            textInput.style.borderColor = 'red';
            inputButton.style.backgroundColor = 'grey';
            inputButton.disabled = true;
            textInput.style.color = 'red';
      }else{
            resetValidation();
      }
}

textInput.addEventListener('input', eventListerCallBack);
textInput.addEventListener('focus', eventListerCallBack);
textInput.addEventListener('blur', eventListerCallBack);

textInput.addEventListener('blur', (event) => {
      if(!textInput.value || textInput.value == '' || textInput.value == ' '){
            resetValidation();
      }
});
inputButton.addEventListener('click', (event) => {
      if(validateTextInput(textInput.value)) {
            alert('All Good!');
            textInput.value = '';
      }
});


function validateTextInput(value) {
      const mobileRegex = /^\d{10}$/;
      const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
      return mobileRegex.test(value) || emailRegex.test(value);
}

function resetValidation() {
      textInput.style.borderColor = 'black';
      inputButton.style.backgroundColor = '#1b1b52';
      inputButton.disabled = false;
      textInput.style.color = 'black';
}