document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-btn');

  // Show the popup on page load
  popup.classList.add('show');

  // Close the popup when the close button is clicked
  closeBtn.addEventListener('click', function () {
    popup.classList.remove('show');
  });

  const form = document.getElementById('register-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const title = document.getElementById('title').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const buyTime = document.getElementById('buy-time').value;
    const newsletter = document.getElementById('newsletter').checked;
    const privacyPolicy = document.getElementById('privacy-policy').checked;

    // Store the data (e.g., in localStorage or send it to a server)
    const formData = {
      title,
      firstName,
      lastName,
      email,
      phone,
      interest,
      buyTime,
      newsletter,
      privacyPolicy,
    };

    localStorage.setItem('userRegistration', JSON.stringify(formData));

    // Hide the popup after form submission
    popup.classList.remove('show');

    alert('Form submitted successfully!');
  });
});
