function fnValidateSignUpForm(e) {
    e.preventDefault();
    console.log(e);

    let formData = e.target;

    let fname = formData.fname.value;
    let lname = formData.lname.value;
    let email = formData.email.value;
    let pass = formData.pass.value;
    let cpass = formData.cpass.value;

    EmailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    PasswordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let validateFname = fname.length >= 4 ? true : false;
    let validateLname = lname.length >= 1 ? true : false;
    let validateEmail = EmailPattern.test(email);
    let validatePass = PasswordPattern.test(pass);
    let validateCpass = PasswordPattern.test(cpass);
    // let pTest = validatePass && validateCpass ? true : false;

    if( validateFname &&
        validateLname &&
        validateEmail &&
        (validatePass === validateCpass)) {
        console.log("Validation Successful");
    } else {
        console.log("Validation Unsuccessful")
    }


    console.log("============================================================");
}