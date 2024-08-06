"use strict";
let count = 0;
function setIntervalFunction() {
    count++;
    const $countdownDisplay = document.querySelector('.countdown-display');
    if (!$countdownDisplay)
        throw new Error('$countdownDisplay is null');
    if (count < 4) {
        let message = 4 - count;
        $countdownDisplay.textContent = message.toString();
    }
    else if (count === 4) {
        $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    }
}
setInterval(setIntervalFunction, 1000);
