const form = document.querySelector(".login-form");

const completeForm = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  } 
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    event.currentTarget.reset();
  
};
form.addEventListener("submit", completeForm);
