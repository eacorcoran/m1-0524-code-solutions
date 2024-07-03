'use strict';
const $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  var $messageData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('$messageData: ', $messageData);
  $contactForm.reset();
});
