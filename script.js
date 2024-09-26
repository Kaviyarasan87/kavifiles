function sendEmail() {
   // Get form values
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const projectDescription = document.getElementById('projectDescription').value;

   // Get the message div for showing response
   const messageDiv = document.getElementById('message');

   // Reset previous message
   messageDiv.style.display = 'none';
   messageDiv.className = '';
   messageDiv.textContent = '';

   // Send email using EmailJS
   emailjs.send('service_xth1rp7', 'template_f0olwms', {
       name: name,
       email: email,
       phone: phone,
       project_description: projectDescription // Ensure this matches your template variable name
   }).then(function(response) {
       // Show success message
       messageDiv.textContent = 'Mail sent successfully!';
       messageDiv.className = 'success';
       messageDiv.style.display = 'block';
   }, function(error) {
       // Show error message
       messageDiv.textContent = 'Error sending mail. Please try again.';
       messageDiv.className = 'error';
       messageDiv.style.display = 'block';
   });
}
