"use strict";
function updateMessage() {
    const $message = document.querySelector('.message');
    if (!$message)
        throw new Error('$message is null');
    $message.textContent = 'Hello There';
}
setTimeout(updateMessage, 2000);
