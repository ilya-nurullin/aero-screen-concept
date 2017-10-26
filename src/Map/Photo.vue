<template lang="pug">
  .card
    .card-header Галерея
    .card-content
      #links
        a(href='assets/photos/1.jpg', data-gallery)
          img(src='assets/photos/1.jpg')
        a(href='assets/photos/2.jpg', data-gallery)
          img(src='assets/photos/2.jpg')
        a(href='assets/photos/3.jpg', data-gallery)
          img(src='assets/photos/3.jpg')
        a(href='assets/photos/4.jpg', data-gallery)
          img(src='assets/photos/4.jpg')
</template>

<style lang="scss" scoped>
  .card {
    margin: 1rem;
  }
  .card-content {
    overflow-y: auto;

    img{
      width: 400px;
      margin: 1rem;
    }
  }
</style>

<script>
  function resizeCard() {
    $('.card').height($(window).height() - $('nav').outerHeight() - 14 * 2);
  }
  if (typeof window.isResizeableCard === 'undefined' || !window.isResizeableCard)
    window.addEventListener('resize', resizeCard);

  window.isResizeableCard = true;

  export default {
    props: ["type"],
    mounted() {
      resizeCard();
    }
  }
</script>