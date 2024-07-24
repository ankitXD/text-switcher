// JavaScript Code (script.js)

const testimonials = [
  {
      text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
      name: "Miyah Myles",
      role: "Marketing",
      photo: "https://randomuser.me/api/portraits/women/46.jpg"
  },
  {
      text: "This guy is an amazing front-end developer that delivered the task exactly how we need it, do not hesitate to work with him.",
      name: "June Cha",
      role: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
      text: "This guy is a great developer, he delivered a stable product on time. We worked well together and communicated effectively throughout the project.",
      name: "Iida Niskanen",
      role: "Data Analyst",
      photo: "https://randomuser.me/api/portraits/women/48.jpg"
  },
  {
      text: "This guy is a skilled developer who produces high quality work, I highly recommend working with him.",
      name: "Renee Sims",
      role: "Product Manager",
      photo: "https://randomuser.me/api/portraits/women/49.jpg"
  }
];

let currentTestimonialIndex = 0;
const testimonialContainer = document.querySelector('.testimonial-container');
const progressBar = document.querySelector('.progress-bar');
const testimonialText = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

function updateTestimonial() {
  const { text, name, role: userRole, photo } = testimonials[currentTestimonialIndex];
  
  testimonialText.textContent = text;
  userImage.src = photo;
  username.textContent = name;
  role.textContent = userRole;
  
  currentTestimonialIndex++;
  if (currentTestimonialIndex >= testimonials.length) {
      currentTestimonialIndex = 0;
  }
}

setInterval(() => {
  progressBar.style.animation = 'none';
  updateTestimonial();
  setTimeout(() => {
      progressBar.style.animation = '';
  }, 10);
}, 10000);

document.addEventListener('DOMContentLoaded', updateTestimonial);