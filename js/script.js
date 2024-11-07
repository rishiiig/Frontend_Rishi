function fnValidateSignUpForm(e) {
    e.preventDefault();

    console.log("JS start");

    let formData = e.target;
    let fname = formData.fname.value;
    let lname = formData.lname.value;
    let email = formData.email.value;
    let pass = formData.pass.value;
    let cpass = formData.cpass.value;

    let EmailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let PasswordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let validateFname = fname.length > 2;
    let validateLname = lname.length > 2;
    let validateEmail = EmailPattern.test(email);
    let validatePass = PasswordPattern.test(pass);
    let validateCPass = pass === cpass;

    console.log("validate code");

    document.getElementsByClassName("fname-empty")[0].style.display = fname ? "none" : "block";
    document.getElementsByClassName("fname-invalid")[0].style.display = validateFname || !fname ? "none" : "block";
  
    document.getElementsByClassName("lname-empty")[0].style.display = lname ? "none" : "block";
    document.getElementsByClassName("lname-invalid")[0].style.display = validateLname || !lname ? "none" : "block";
      
    document.getElementsByClassName("email-invalid")[0].style.display = validateEmail ? "none" : "block";
    document.getElementsByClassName("password-invalid")[0].style.display = validatePass ? "none" : "block";
    document.getElementsByClassName("confirm-password-invalid")[0].style.display = validateCPass ? "none" : "block";

    console.log("error display code");

    if (validateFname && validateLname && validateEmail && validatePass && validateCPass) {
        console.log("Success");
    } else {
        console.log("Failure");
    }
}