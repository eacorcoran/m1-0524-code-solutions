'use strict';
const $lightToggle = document.querySelector('.light-on');
const $lightBackGround = document.querySelector('.light-bulb');
if (!$lightToggle || !$lightBackGround) throw Error('$lightToggle is null');
$lightToggle.addEventListener('click', () => {
  if ($lightToggle.className === 'light-on') {
    $lightToggle.className = 'light-off';
    $lightBackGround.className = 'dark-light-bulb';
  } else {
    $lightToggle.className = 'light-on';
    $lightBackGround.className = 'light-bulb';
  }
});
