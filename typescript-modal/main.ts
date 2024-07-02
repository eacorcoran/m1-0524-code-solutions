const $dialog = document.querySelector('dialog');
if (!$dialog) throw Error('$dialog does not exist');

const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw Error('$openModal does not exist');

const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw Error('$dismissModal does not exist');

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
