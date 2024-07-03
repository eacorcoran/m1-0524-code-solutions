interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const $messageData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('$messageData: ', $messageData);
  $contactForm.reset();
});
