let displayvalue="";

function appendtodisplay(value){
    displayvalue +=value;
    document.getElementById('display').value=displayvalue
}
function cleardisplay(){
    displayvalue ="";
    document.getElementById('display').value=displayvalue;
}

function calculator(){
    try {
        let result= eval(displayvalue)
        document.getElementById('display'). value =result;
    } catch (error) {
        document.getElementById('display').value ='Error';
    }
}







