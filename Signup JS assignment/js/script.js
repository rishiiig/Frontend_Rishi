var username = "rishi";
var password = "123";

function fnValidate(fname) {
    return fname === username ? false : true;
}

function fnValidatePass(pass, cpass) {
    return pass === cpass ? true : false;
}

function fnValidateNameLength(name) {
    return name.length >= 5 ? true : false;
}

function fnSignup() {
    console.log("Validating");

    let ipfirst = document.getElementById("input_firstname").value;
    let iplast = document.getElementById("input_lastname").value;
    let ipemail = document.getElementById("input_email").value;
    let ippass = document.getElementById("input_password").value;
    let ipcpass = document.getElementById("input_confirm_password").value;

    console.log(ipfirst, iplast, ipemail, ippass, ipcpass);

    let validateFnameExists = fnValidate(ipfirst);

    if(validateFnameExists == false) {
        console.log("Username Already Exists");
    }
    else {
        console.log("Good Username");
    }

    let validatePasswordSame = fnValidatePass(ippass, ipcpass);

    if(validatePasswordSame) {
        console.log("Password Correct");
    } else {
        console.log("Password Missmatch");
    }

    let validateFNameLength = fnValidateNameLength(ipfirst);
    let validateLNameLength = fnValidateNameLength(iplast);

    if(validateFNameLength) {
        console.log("First name Correct");
    } else {
        console.log("First name not correct");
    }

    if(validateLNameLength) {
        console.log("Last name Correct");
    } else {
        console.log("Last name not correct");
    }
}