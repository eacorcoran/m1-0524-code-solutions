'use strict';
function handleFocus(event) {
  console.log('focus event fired');
  const $eventTarget = event.target;
  console.log('eventTarget.name', $eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  const $eventTarget = event.target;
  console.log('eventTarget.name', $eventTarget.name);
}
function handleInput(event) {
  const $eventTarget = event.target;
  console.log('eventTarget.name', $eventTarget.name);
  console.log('eventTarget.value', $eventTarget.value);
}
const $userName = document.querySelector('#user-name');
if (!$userName) throw Error('$userName is null');
const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw Error('$userEmail is null');
const $userMessage = document.querySelector('#user-message');
if (!$userMessage) throw Error('$userMessage is null');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
