const inputField = document.querySelector("#passwordDisplay");
const rangeValue = document.querySelector("#inputSlider");
const sliderValue = document.querySelector(".sliderValue");
const lowerCase = document.querySelector("#lowercase")
const upperCase = document.querySelector("#uppercase")
const numbers = document.querySelector("#numbers")
const symbols = document.querySelector("#symbols")
const generateBtn = document.querySelector(".generateBtn");
const copyIcon = document.querySelector("#copyIcon")


sliderValue.textContent = rangeValue.value;
rangeValue.addEventListener("input", () => {
    sliderValue.textContent = rangeValue.value;
})

let length = 0;
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "0123456789";
let symbolChars = "~!@#$%^&*";

generateBtn.addEventListener("click", () => {
    inputField.value = generatePassword();
})

function generatePassword() {
    let genPwsd = "";
    let allChars = "";
    length = rangeValue.value;

    allChars += lowerCase.checked ? lowerCaseChars : "";
    allChars += upperCase.checked ? upperCaseChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += symbols.checked ? symbolChars : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 0;
    while (i <= length) {
        genPwsd += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPwsd;
}

copyIcon.addEventListener("click", () => {
    if (inputField.value != "" || inputField.value.length >= 1) {
        navigator.clipboard.writeText(inputField.value)
        copyIcon.innerText = "check";
        copyIcon.title = "Password copied"
        // console.log(inputField.value)

    }

    setTimeout(() => {
        copyIcon.textContent = "content_copy"
        copyIcon.title = "";
        inputField.value = "";
    }, 3000)
})

