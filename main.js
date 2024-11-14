const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});



emailjs.init("MqPLlLlRK-l_MaV0y");

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
   
  // Disable the button to prevent multiple submissions
  button.disabled = true;
 
 emailjs.sendForm('service_u66in2u', 'template_79i1sjg', form)
    .then(function(response) {
      console.log('Success:', response);
     alert('Votre message a été envoyé avec succès!');
      form.reset();  // Reset form only after successful submission
      button.disabled = false;   // Re-enable the button
    }, function(error) {
      console.error('Error:', error);
     alert('Une erreur est survenue, veuillez réessayer.');
      button.disabled = false;   //Re-enable the button in case of an error
  });
});




const testimonials = document.querySelectorAll('.testimonial');
  const testimonialVideo = document.querySelector('.testimonial-video');
  
  // Ajouter la classe show pour afficher les éléments
  testimonials.forEach((testimonial) => {
    testimonial.classList.add('show');
  });
  
  testimonialVideo.classList.add('show');
  
  // Créer une fonction pour faire défiler les témoignages
  function slideTestimonials() {
    const currentTestimonial = document.querySelector('.testimonial .show');
    const nextTestimonial = currentTestimonial.nextElementSibling;
  
    if (nextTestimonial) {
      currentTestimonial.classList.remove('show');
      nextTestimonial.classList.add('show');
    } else {
      testimonials[0].classList.add('show');
    }
  }
  
 


 