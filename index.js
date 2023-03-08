const fullName = document.getElementById('fullName_id');
const email = document.getElementById('email_id');
const messageId = document.getElementById('message_id');
console.log(fullName.value);

function SendMail() {
    let params = {
        from_name : fullName.value,
        email_id : email.value,
        message : messageId.value
    }
    emailjs.send("service_38cnv5u", "template_onn3gz1", params).then(function(res) {
        alert("Success! " + res.status);
    })
}