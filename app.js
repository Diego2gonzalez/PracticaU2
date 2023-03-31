

function sendEmail() {
  let to = document.getElementById('to').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

    Email.send({
            Host: "smtp.elasticemail.com",
            Username: "justchape@gmail.com",
            Password: "DB10064CE0613BFA0A4BAA47967A6A48114A",
            To: to,
            From: "justchape@gmail.com",
            Subject: subject,
            Body: message,
        })
        .then(function (message) {
            alert("mail sent successfully")
        });
}
document.getElementById('send-btn').addEventListener('click', function(event) {

  sendEmail();
});