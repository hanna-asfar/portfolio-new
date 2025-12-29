function loadSection(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadSection("home", "sections/home.html");
loadSection("about", "sections/about.html");
loadSection("skills", "sections/skills.html");
loadSection("projects", "sections/projects.html");
loadSection("contact", "sections/contact.html");

const formHandler = () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("msg");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      msg.textContent = "Message sent successfully!";
      form.reset();
    });
  }
};

setTimeout(formHandler, 1000);

