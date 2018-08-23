function onchangeEmailFeild(e){

    console.log("loaded file.");
    console.log(e);

    // get the target that was changed 

    const $field = e.target;
    console.log($field);

    // get the value of the field

    const value = $field.value;
    console.log(value);

    //  check if the email address is valid

    const isValid = value.includes('@');
    console.log(isValid);

    // get the parent element
    
    const $parent = $field.parentElement;
    console.log({$parent});

    if (isValid){
        $parent.classList.remove('invalid');
    }  else {
        $parent.classList.add('invalid');
    }
}
document.querySelector('#email-field').addEventListener("change", onchangeEmailFeild);
