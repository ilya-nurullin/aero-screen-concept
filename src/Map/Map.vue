<template lang="pug">
  div
    template(v-if="type == 'google'")
      iframe(
        width="600",
        height="450",
        frameborder="0", style="border:0; width: 100%; width: 100%",
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBCUAbZ8ZcMDkhyJA-nQsTDcRAeN1tTwCY&q=Juan+Santamaria+International", allowfullscreen)
    template(v-if="type == '2gis'")
      iframe(frameborder='no', style='border: 0; box-sizing: border-box;', width='100%', height='450', src='https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A55.75192184713456%2C%22lon%22%3A37.61390447616578%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22moscow%22%7D%2C%22org%22%3A%224504128908445240%22%7D')
    template(v-if="type == 'photo'")
      
</template>

<script>
  function resizeIframe() {
    $('iframe').height($(window).height() - $('nav').outerHeight());
  }
  if (typeof window.isResizeable === 'undefined' || !window.isResizeable)
    window.addEventListener('resize', resizeIframe);

  window.isResizeable = true;

  export default {
    props: ["type"],
    mounted() {
      resizeIframe();
    }
  }
</script>