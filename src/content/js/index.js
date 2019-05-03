import mount from './utils/mount.js';
import { url } from './components/stores.js';
import InputUrl from './components/InputUrl.svelte';
import ButtonSubmit from './components/ButtonSubmit.svelte';
import SpeedResults from './components/SpeedResults.svelte';
import '../css/style.less';

chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tab) {
  url.set(tab[0].url); // записываем в $url адрес текущей страницы по-умолчанию
});

mount('input-url', InputUrl);
mount('button-submit', ButtonSubmit);
mount('speed-results', SpeedResults);
