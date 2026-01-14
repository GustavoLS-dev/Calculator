function insertToDisplay(data){
    console.log(data)
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = ''
}

function back(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0 , -1)
}

function result(){
    const display = document.querySelector('#display')
    try{
        display.value = eval (display.value).toFixed(2)
    }catch{
        display.value = 'Error'
    }
}

const clickSound = document.getElementById("clickSound");
const buttons = document.querySelectorAll(".box-buttons button");

buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
