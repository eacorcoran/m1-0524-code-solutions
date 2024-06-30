const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('$taskList does not exist');

$taskList.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLInputElement;
  console.log('event.target: ', $eventTarget);
  console.log('event.target.tagName: ', $eventTarget.tagName);

  if ($eventTarget.tagName === 'BUTTON') {
    const $tasklistItem = $eventTarget.closest('.task-list-item');
    console.log('closest .task-list-item: ', $tasklistItem);
    $tasklistItem?.remove();
  }
});
