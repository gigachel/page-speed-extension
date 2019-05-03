<button
  class="page-speed__button"
  on:click={ getSpeed }
  disabled={ $desktopLoading || $mobileLoading }>
  Start
</button>

<script>
  import { url } from './stores.js';
  import { desktopScore } from './stores.js';
  import { mobileScore } from './stores.js';
  import { desktopLoading } from './stores.js'; 
  import { mobileLoading } from './stores.js'; 
  
  var pageSpeedUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  async function getSpeed () {
    $desktopLoading = true;
    $mobileLoading = true;
    var desktopResult = await (await fetch(pageSpeedUrl + '?url=' + encodeURIComponent($url) + '&strategy=desktop')).json();
    $desktopLoading = false;
    $desktopScore = desktopResult.lighthouseResult.categories.performance.score;
    
    var mobileResult = await (await fetch(pageSpeedUrl + '?url=' + encodeURIComponent($url) + '&strategy=mobile')).json();
    $mobileLoading = false;
    $mobileScore = mobileResult.lighthouseResult.categories.performance.score;    
  }
</script>

<style lang="less">
  .page-speed__button {
    padding: 3px 10px;
  }
</style>
