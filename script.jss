document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseEl = document.getElementById('response-message');

  if (!name || !email) {
    responseEl.textContent = 'Please provide your name & email.';
    responseEl.style.color = 'red';
    return;
  }

  // simulate sending...
  responseEl.textContent = 'Thanks, your message is sent!';
  responseEl.style.color = 'green';

  // Clear form
  e.target.reset();

  // Optionally integrate API (e.g., EmailJS, server endpoint)
});
