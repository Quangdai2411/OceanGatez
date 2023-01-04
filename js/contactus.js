function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "doquangdai21@gmail.com",
        Password : "83C2AC99D0C9D368B0478168C35449E2DBB1",
        To : 'doquangdai21@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email :" + document.getElementById('email').value
            + "<br> Phone no :" + document.getElementById("phone").value
            + "<br> Message :" + document.getElementById("message").value
    }).then(
        message => alert("message")
    );
}