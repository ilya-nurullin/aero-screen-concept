<template lang="pug">
  iframe(src="http://html5game.ru", frameborder='no', style='border: 0; box-sizing: border-box;', width='100%', height='450', webkitallowfullscreen="true", mozallowfullscreen="true", allowfullscreen="true")
</template>

<script>
  function resizeIframe() {
    $('iframe').height($(window).height() - $('nav').outerHeight());
  }
  if (typeof window.isResizeable === 'undefined' || !window.isResizeable)
    window.addEventListener('resize', resizeIframe);

  window.isResizeable = true;

  $('body').css({ background: "#fff" });

  export default {
    mounted() {
      resizeIframe();
      if (location.protocol == 'https:') {
        $('iframe').attr('src', 'https://www.htmlgames.com');
      }
    }
  }
</script>