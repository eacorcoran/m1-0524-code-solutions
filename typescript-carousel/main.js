'use strict';
/* Right Arrow Function */
const $rightArrow = document.querySelector('.right-arrow');
if (!$rightArrow) throw new Error('!$rightArrow is null');
function rightArrowFunction() {
  let nextImage = 0;
  const $activeImage = document.querySelector('.image-active');
  if (!$activeImage) throw new Error('!$activeImage is null');
  $activeImage.className = 'image';
  const currentImage = Number($activeImage.dataset.view);
  if (currentImage === 5) {
    nextImage = 1;
  } else {
    nextImage = currentImage + 1;
  }
  const nextImageSelector = `.image[data-view="${nextImage}"]`;
  const $nextImage = document.querySelector(nextImageSelector);
  if (!$nextImage) throw new Error('!$nextImage is null');
  $nextImage.className = 'image-active';
  const currentCircleSelector = `.fa-solid.fa-circle[data-view="${currentImage}"]`;
  const $currentCircle = document.querySelector(currentCircleSelector);
  if (!$currentCircle) throw new Error('!$currentCircle is null');
  $currentCircle.className = 'fa-regular fa-circle';
  const nextCircleSelector = `.fa-regular.fa-circle[data-view="${nextImage}"]`;
  const $nextCircle = document.querySelector(nextCircleSelector);
  if (!$nextCircle) throw new Error('!$nextCircle is null');
  $nextCircle.className = 'fa-solid fa-circle';
  clearInterval(setIntervalConst);
  setIntervalConst = setInterval(rightArrowFunction, 3000);
}
$rightArrow.addEventListener('click', rightArrowFunction);
/* Left Arrow Function */
const $leftArrow = document.querySelector('.left-arrow');
if (!$leftArrow) throw new Error('!$leftArrow is null');
function leftArrowFunction() {
  let nextImage = 0;
  const $activeImage = document.querySelector('.image-active');
  if (!$activeImage) throw new Error('!$activeImage is null');
  $activeImage.className = 'image';
  const currentImage = Number($activeImage.dataset.view);
  if (currentImage === 1) {
    nextImage = 5;
  } else {
    nextImage = currentImage - 1;
  }
  const nextImageSelector = `.image[data-view="${nextImage}"]`;
  const $nextImage = document.querySelector(nextImageSelector);
  if (!$nextImage) throw new Error('!$nextImage is null');
  $nextImage.className = 'image-active';
  const currentCircleSelector = `.fa-solid.fa-circle[data-view="${currentImage}"]`;
  const $currentCircle = document.querySelector(currentCircleSelector);
  if (!$currentCircle) throw new Error('!$currentCircle is null');
  $currentCircle.className = 'fa-regular fa-circle';
  const nextCircleSelector = `.fa-regular.fa-circle[data-view="${nextImage}"]`;
  const $nextCircle = document.querySelector(nextCircleSelector);
  if (!$nextCircle) throw new Error('!$nextCircle is null');
  $nextCircle.className = 'fa-solid fa-circle';
  clearInterval(setIntervalConst);
  setIntervalConst = setInterval(rightArrowFunction, 3000);
}
$leftArrow.addEventListener('click', leftArrowFunction);
/* Click on Circle */
const $selectedCircle = document.querySelectorAll('.fa-regular.fa-circle');
if (!$selectedCircle) throw new Error('$selectedCircle is null');
console.log($selectedCircle);
const $selectedCircleBold = document.querySelector('.fa-solid.fa-circle');
if (!$selectedCircleBold) throw new Error('$selectedCircleBold is null');
console.log($selectedCircleBold);
function selectCircleFunction(event) {
  const $eventTarget = event.target;
  const selectedNewCircle = Number($eventTarget.dataset.view);
  console.log(selectedNewCircle);
  const solidSelector = `.fa-regular.fa-circle[data-view="${selectedNewCircle}"]`;
  const imageSelector = `.image[data-view="${selectedNewCircle}"]`;
  const $unselectedImage = document.querySelector('.image-active');
  if (!$unselectedImage) throw new Error('$unselectedImage is null');
  $unselectedImage.className = 'image';
  const $nextImage = document.querySelector(imageSelector);
  if (!$nextImage) throw new Error('$nextImage is null');
  $nextImage.className = 'image-active';
  const $unselectedCircle = document.querySelector('.fa-solid.fa-circle');
  if (!$unselectedCircle) throw new Error('$unselectedCircle is null');
  $unselectedCircle.className = 'fa-regular fa-circle';
  const $newSolidCircle = document.querySelector(solidSelector);
  if (!$newSolidCircle) throw new Error('$newSolidCircle is null');
  $newSolidCircle.className = 'fa-solid fa-circle';
  clearInterval(setIntervalConst);
  setIntervalConst = setInterval(rightArrowFunction, 3000);
}
for (let i = 0; i < $selectedCircle.length; i++) {
  $selectedCircle[i].addEventListener('click', selectCircleFunction);
}
$selectedCircleBold.addEventListener('click', selectCircleFunction);
/*Setting Interval*/
let setIntervalConst = setInterval(rightArrowFunction, 3000);
