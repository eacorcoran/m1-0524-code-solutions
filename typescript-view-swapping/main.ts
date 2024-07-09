const $tabContainer = document.querySelector('.tab-container');
const $tab = document.getElementsByClassName('tab');
const $view = document.getElementsByClassName('view');

if (!$tabContainer || !$tab || !$view) throw Error('variable is null');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($eventTarget === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    const $dataView = $eventTarget.getAttribute('data-view');

    for (let i = 0; i < $view.length; i++) {
      if ($dataView === $view[i].getAttribute('data-view')) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
});
