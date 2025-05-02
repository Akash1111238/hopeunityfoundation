document.addEventListener("DOMContentLoaded", function () {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyHw-GQ_5G7PP_OrtY1-bSg_-ol_wlN549nXlzxj0B2_G5_-tnrH_pWvYi1GbY98CMF/exec";
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Show loading state or spinner if desired
    successMessage.innerHTML = "Submitting your message...";
    successMessage.classList.remove('success', 'error', 'fadeOut'); // Remove old animation classes
    successMessage.style.display = "block";

    // Perform the fetch request
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        // On success, show the success message with animation
        successMessage.innerHTML = "✔ Thank you! Your form has been submitted successfully.";
        successMessage.classList.add('success', 'bounce'); // Add success class with bounce effect
        successMessage.style.display = "block";

        // Reset the form after submission
        form.reset();

        // Hide the success message after 5 seconds with fade-out animation
        setTimeout(() => {
          successMessage.classList.add('fadeOut');
        }, 5000);
      })
      .catch((error) => {
        // In case of an error, show the failure message with animation
        successMessage.innerHTML = "❌ Submission failed. Please try again.";
        successMessage.classList.add('error'); // Add error class
        successMessage.style.display = "block";
        console.error(error);

        // Hide the failure message after 5 seconds with fade-out animation
        setTimeout(() => {
          successMessage.classList.add('fadeOut');
        }, 5000);
      });
  });
});






