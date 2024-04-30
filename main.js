box = document.getElementById("codebox");
submitbox = document.getElementById("submitbox")


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function generateCode() {
    box.value = makeid(5)
}

function submit() {
    if(submitbox.value == box.value) {
        submitbox.value = "Code Success"
        box.value = " "
    }else{
        submitbox.value = "Wrong Code"
    }

}