const toggleBtn = document.querySelector('#toggle');
const closeIcon = toggleBtn.querySelector('i');
const closeBtn = document.querySelector('#close');
const openBtn = document.querySelector('#open');
const modalEl = document.querySelector('#modal');
const modalBtn = document.querySelector('.submit-btn');
const navEl = document.querySelector('nav');

// Toggle Navigation
toggleBtn.addEventListener('click', () => {
   document.body.classList.toggle('show-nav');


   if (document.body.classList.contains('show-nav')) {
      closeIcon.className = 'fa fa-solid fa-xmark fa-2x';
      navEl.style.height = '100%';

   } else {
      closeIcon.className = 'fa-solid fa-bars fa-2x';
   }
});

// Modal
openBtn.addEventListener('click', () => {
   modalEl.classList.add('show-modal');

   modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) {
         modalEl.classList.remove('show-modal');
      }
   })
});

// Close modal
closeBtn.addEventListener('click', () => {
   modalEl.classList.remove('show-modal');
});


// Submit FORM button
modalBtn.addEventListener('click', (e) => {
   e.preventDefault();
   alert('Just a testing purpose :) ');
   etTimeout(function () {
      modalEl.classList.remove('show-modal');

   }, 1000);
});