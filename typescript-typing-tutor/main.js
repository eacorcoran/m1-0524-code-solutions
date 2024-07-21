'use strict';
const $spanElements = document.querySelectorAll('span');
if (!$spanElements) throw new Error('span elements do not exist');
let $currentIndex = 0;
const $totalLength = $spanElements.length - 1;
document.addEventListener('keydown', (event) => {
  if (
    event.key === $spanElements[$currentIndex].textContent &&
    $currentIndex < $totalLength
  ) {
    $spanElements[$currentIndex].className = 'typed-correctly';
    $spanElements[$currentIndex + 1].className = 'next-letter';
    $currentIndex++;
  } else if (
    event.key === $spanElements[$currentIndex].textContent &&
    $currentIndex === $totalLength
  ) {
    $spanElements[$currentIndex].className = 'typed-correctly';
  } else if (
    event.key !== $spanElements[$currentIndex].textContent &&
    $currentIndex <= $totalLength
  ) {
    $spanElements[$currentIndex].className = 'typed-incorrectly';
  }
  return $currentIndex;
});
