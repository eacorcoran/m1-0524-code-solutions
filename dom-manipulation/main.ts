let numberClicks = 0;

const $hotButton = document.querySelector('.hot-button');

if (!$hotButton) throw new Error('The $hotButton query failed');

const $clickCount = document.querySelector('.click-count');

function countClick(): void {
  numberClicks++;

  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }

  $clickCount.textContent = 'Clicks: ' + numberClicks.toString();

  if (numberClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', countClick);
