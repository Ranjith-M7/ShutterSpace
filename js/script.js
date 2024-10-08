document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  if (firstName === "" || lastName === "") {
    alert("First Name and Last Name are required");
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (phone.length !== 10) {
    alert("Please enter a valid phone number");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  console.log({
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone_number: phone,
    password: password,
  });
});
