function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
    const inputValue = inputString.slice(0,1)
    const yourAge = (inputValue) => {
        if (inputValue<10) {
            inputValue
        }
        else ('You are too old')
    }
    const someText = () => ' years old'
    const sumOfText = yourAge + someText
    console.log(sumOfText)
}

getAge(4)