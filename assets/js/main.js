//Function to remove default error message box

document.addEventListener('invalid', (function(){
  return function(e) {
    e.preventDefault();
  };
})(), true);

function validate(enteredEmail){

  var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if(enteredEmail.value.match(enteredEmail)){

    document.form1.text1.focus();

    return true;
  }

  else{
    document.getElementById('errorimg').style.display = 'block';
    document.getElementById('errormsg').style.display = 'block';
    document.getElementById('input').style.border = '1px solid red';

    document.form1.text1.focus();

    return false;
  }

}