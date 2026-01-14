function insertToDisplay(data){
    console.log(data)
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = ''
}