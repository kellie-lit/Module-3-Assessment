console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form submitted successfully =^)!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const img = document.querySelector('#rubberDuck');

img.addEventListener('mouseover', () => {
  alert('You are truly remarkable!');
});

