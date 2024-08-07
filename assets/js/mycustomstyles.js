function whatsapp(){
    // event.preventDefault();
    var name = document.getElementById("name").value;
    var phoneno = document.getElementById("phoneno").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var select2 = document.getElementById("select2").value;

    var whatsappurl="https://wa.me/919605741041?text="
    + "Name of the Patient : " + name +"%0a"
    + "Phone-no. : " + phoneno +"%0a"
    + "Date  : " + date + "%0a"
    + "Email-id : " + email + "%0a"
    + "Doctor : " + select2;

    if (name === "" || phoneno === "" || date === "" || select2 === "Select Doctor") {
        alert("Please fill the name , phone-no , date and doctor fields.");
        return false;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters long");
        return false;
    }

    if (phoneno.length !== 10) {
        alert("Phone-number must be 10 digits");
        return false;
    }

    // console.log(whatsappurl);
    window.open(whatsappurl,"_blank").focus();
}

