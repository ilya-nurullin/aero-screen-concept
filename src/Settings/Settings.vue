<template lang="pug">
  div
    h3 Выбор фона
    .row
      .col
        img(src="assets/wallpapers/1.jpg", @click="check(1)")
      .col
        img(src="assets/wallpapers/2.jpg", @click="check(2)")
      .col
        img(src="assets/wallpapers/3.jpg", @click="check(3)")
</template>

<script>
  export default {
    mounted() {
      $('body').css({ background: "#fff" });
    },
    methods: {
      check: (id) => {
        $('body').css({ background: "url('assets/wallpapers/"+id+".jpg') no-repeat", backgroundSize: "cover" });
        localStorage.setItem('bg', id);
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>