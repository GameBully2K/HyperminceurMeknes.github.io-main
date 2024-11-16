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



emailjs.init("QqyFjr369B0Zr8Eu5");

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
   
  // Disable the button to prevent multiple submissions
  button.disabled = true;
 
 emailjs.sendForm('service_0qf787g', 'template_n6wwvx5', form)
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
  
 
// Gestion du son de la vidéo
const video = document.getElementById("introVideo");
const soundToggle = document.getElementById("soundToggle");

soundToggle.addEventListener("click", () => {
    // Basculer entre activer et désactiver le son de la vidéo
    video.muted = !video.muted;

    // Met à jour le texte et l'icône du bouton en fonction de l'état du son
    if (video.muted) {
        soundToggle.innerHTML  = `<svg class="sound-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.12,5.12)">
                    <path d="M26.1875,2.96875c-0.3125,0.00391 -0.63281,0.05859 -0.9375,0.15625c-0.59375,0.19141 -1.16406,0.55078 -1.65625,1.0625c-0.01172,0.01172 -0.01953,0.01953 -0.03125,0.03125l-11.875,11.78125h-6.6875c-1.64453,0 -3,1.35547 -3,3v12c0,1.64453 1.35547,3 3,3h6.8125l11.6875,11.71875c1.12891,1.12891 2.57031,1.58984 3.75,1.03125c1.17969,-0.55859 1.75,-1.89453 1.75,-3.4375v-37c0,-1.49219 -0.73437,-2.76172 -1.90625,-3.1875c-0.29297,-0.10547 -0.59375,-0.16016 -0.90625,-0.15625zM26.15625,4.96875c0.09375,0 0.17969,0.00781 0.25,0.03125c0.27734,0.10156 0.59375,0.40234 0.59375,1.3125v37c0,1.05469 -0.37891,1.50781 -0.625,1.625c-0.24609,0.11719 -0.69922,0.11328 -1.46875,-0.65625l-12.59375,-12.59375c0.01563,0.01563 -0.3125,-0.58594 -0.3125,-1v-11.5c0,-0.13281 0.04688,-0.40234 0.125,-0.625c0.07813,-0.22266 0.23438,-0.39062 0.1875,-0.34375l12.6875,-12.59375c0.01172,-0.01172 0.01953,-0.01953 0.03125,-0.03125c0.45313,-0.48047 0.83984,-0.62109 1.125,-0.625zM31,8v2c8.25391,0 15,6.74609 15,15c0,8.25391 -6.74609,15 -15,15v2c9.34375,0 17,-7.65625 17,-17c0,-9.34375 -7.65625,-17 -17,-17zM31,14v2c4.95313,0 9,4.04688 9,9c0,4.95313 -4.04687,9 -9,9v2c6.04688,0 11,-4.95312 11,-11c0,-6.04687 -4.95312,-11 -11,-11zM5,18h5.21875c-0.12891,0.375 -0.21875,0.75781 -0.21875,1.1875v11.5c0,0.48047 0.07422,0.91797 0.21875,1.3125h-5.21875c-0.55469,0 -1,-0.44531 -1,-1v-12c0,-0.55469 0.44531,-1 1,-1zM31,20v2c1.65625,0 3,1.34375 3,3c0,1.65625 -1.34375,3 -3,3v2c2.74609,0 5,-2.25391 5,-5c0,-2.74609 -2.25391,-5 -5,-5z"></path>
                </g>
            </g>
        </svg>
        <span>Activer le son</span>`;
    } else {
        soundToggle.innerHTML  = `<svg class="sound-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M24.15625,3c-0.30469,0 -0.60547,0.0625 -0.90625,0.15625c-0.60547,0.19141 -1.18359,0.55078 -1.6875,1.0625l-11.75,11.75h-6.8125c-1.66797,0 -3.03125,1.36328 -3.03125,3.03125v12c0,1.66797 1.36328,3.03125 3.03125,3.03125h6.8125l11.71875,11.65625c1.11719,1.12109 2.55078,1.61328 3.71875,1.0625c1.17578,-0.55469 1.75,-1.89062 1.75,-3.4375v-37c0,-1.5 -0.76562,-2.74609 -1.9375,-3.15625c-0.29297,-0.10156 -0.60156,-0.15625 -0.90625,-0.15625zM24.1875,5c0.10156,0 0.17969,0.00781 0.25,0.03125c0.28516,0.09766 0.5625,0.35156 0.5625,1.28125v37c0,1.06641 -0.35156,1.54297 -0.59375,1.65625c-0.24219,0.11328 -0.73047,0.125 -1.5,-0.65625l-12.59375,-12.59375c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c0.07422,0.06641 -0.25,-0.56641 -0.25,-0.9375v-11.5c0,-0.37109 0.33594,-1.01172 0.25,-0.9375c0.02344,-0.01953 0.04297,-0.03906 0.0625,-0.0625l12.65625,-12.625c0.46875,-0.47266 0.91016,-0.62109 1.21875,-0.625zM3,18.03125h5.1875c-0.12891,0.38281 -0.1875,0.80078 -0.1875,1.21875v11.5c0,0.41797 0.0625,0.83203 0.1875,1.21875h-5.1875c-0.53906,0 -0.96875,-0.42969 -0.96875,-0.96875v-12c0,-0.53906 0.42969,-0.96875 0.96875,-0.96875zM31.90625,18.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.28125,4.28125l-4.28125,4.28125c-0.39844,0.39844 -0.39844,1.03906 0,1.4375c0.39844,0.39844 1.03906,0.39844 1.4375,0l4.28125,-4.28125l4.28125,4.28125c0.39844,0.39844 1.03906,0.39844 1.4375,0c0.39844,-0.39844 0.39844,-1.03906 0,-1.4375l-4.28125,-4.28125l4.28125,-4.28125c0.32422,-0.30078 0.41016,-0.77734 0.21484,-1.17187c-0.19141,-0.39844 -0.625,-0.61719 -1.05859,-0.54687c-0.22266,0.02344 -0.43359,0.125 -0.59375,0.28125l-4.28125,4.28125l-4.28125,-4.28125c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125z"></path></g></g>
</svg>
        <span>Déactiver le son</span>`;
    }
});


 