    function show(){
        alert('button is clicked')
    }
    var head=document.getElementById('head1');
    head.addEventListener('mouseover',()=>{
        head.style.color='red';
    })

    function leave(){
        head.style.color='green';
    }
    function display(event){
        console.log(event.target.value);
    }

// function display(event) {
//     console.log(event.type);
//     console.log(event.key);
// }

var text = document.getElementById('text');

function focusn() {
    text.style.backgroundColor = 'lightblue';
}

function blurfn() {
    text.style.backgroundColor = 'green';
}

function submitted(){
    alert('submitted successfully');
}

// Regular expression
let email = document.getElementById('email');
let error = document.getElementById('error');

let regex = /^([a-zA-Z0-9\.\-_#]+)@([a-zA-Z0-9]+)\.([a-z]{2,3}(\.[a-z]{2,3}))?$/;

function validate() {
    if (regex.test(email.value)) {
        error.textContent = 'Email is valid';
        error.style.color = 'green';
        return true;
    }
    else {
        error.textContent = 'Email is invalid';
        error.style.color = 'red';
        return false;
    }
}

function verify(){
    let num=document.getElementById('num');
    let errmsg=document.getElementById('errmsg');
    // let x=num.value;

    try{
        let x=num.value;
        if(x<5) throw 'number is too low';
        if(x>10) throw 'number is too long';
    }catch (error){
        // console.log(`the error is &{error}`);
        errmsg.textContent=`the error is ${error}`;
    }
}