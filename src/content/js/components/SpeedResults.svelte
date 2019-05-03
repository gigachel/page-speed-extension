<div class="speed-results__list">
  <div class="speed-results__item">
    <div class="speed-results__title">desktop</div>
    {#if $desktopLoading}
      <Loader width="70"></Loader>
    {:else}
      <div class="speed-results__score { desktopClassName }">{ desktopValue }</div>
    {/if}
  </div>
  <div class="speed-results__item">
    <div class="speed-results__title">mobile</div>
    {#if $mobileLoading}
      <Loader width="70"></Loader>
    {:else}
      <div class="speed-results__score { mobileClassName }">{ mobileValue }</div>
    {/if}
  </div>
</div>

<script>
  import { desktopScore } from './stores.js';
  import { mobileScore } from './stores.js'; 
  import { desktopLoading } from './stores.js'; 
  import { mobileLoading } from './stores.js';
  import Loader from './Loader.svelte';

  var desktopValue = 0;
  var mobileValue = 0;
  var desktopClassName = '';
  var mobileClassName = '';

  function getColorClass (score) {
    if (score >= 1 && score <= 49) return "speed-results__score_red";
    if (score >= 50 && score <= 89) return "speed-results__score_orange";
    if (score >= 90 && score <= 100) return "speed-results__score_green";
  }

  $: {
    desktopValue = Math.round($desktopScore * 100);
    desktopClassName = getColorClass(desktopValue);
  }

  $: {
    mobileValue = Math.round($mobileScore * 100);
    mobileClassName = getColorClass(mobileValue);
  }

</script>

<style lang="less">
  .speed-results__list {
    display: flex;
  }

  .speed-results__item {
    display: flex;
    flex: 0 0 50%;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    min-height: 135px;
    padding: 10px;
  }

  .speed-results__title {
    font-size: 16px;
    font-weight: 500;
  }

  .speed-results__score {
    font-size: 70px;
  }

  .speed-results__score_red {
    color: red;
  }

  .speed-results__score_orange {
    color: orange;
  }

  .speed-results__score_green {
    color: green;
  }
</style>
