let INPUTE = document.getElementById('inputNo')

function values(input){
    INPUTE.value += input
}

function clearAll(){
    INPUTE.value = ""
}

function deleteOne(){
    INPUTE.value = INPUTE.value.toString().slice(0,-1)
}

function calculate(){
    INPUTE.value = eval(INPUTE.value)
}