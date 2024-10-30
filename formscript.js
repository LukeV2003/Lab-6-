// Handle form submission and store data in local storage
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value),
      comments: document.getElementById("comments").value
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved!");
  });