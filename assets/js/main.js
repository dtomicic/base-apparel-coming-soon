//Function to remove default error message box

document.addEventListener('invalid', (function(){
  return function(e) {
    e.preventDefault();
  };
})(), true);

var errorimg = document.getElementById('errorimg');
var errormsg = document.getElementById('errormsg');
var input = document.getElementById('input');



function validate(enteredEmail){

  var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if(enteredEmail.value.match(mail_format)){

    document.form1.text1.focus();

    return true;
  }

  else{
    errorimg.classList.toggle('showblock');
    errormsg.classList.toggle('showblock');
    input.classList.toggle('showborder');

    document.form1.text1.focus();

   return false;
  }
}