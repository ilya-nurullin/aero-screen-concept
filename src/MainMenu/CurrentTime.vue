<template lang="pug">
span
  span {{ currentTime }}
  br
  span {{ currentDate }}
</template>

<script>
  export default {
    data: function() {
      return {
        currentTime: new Date().toLocaleTimeString('ru', { hour: "numeric", minute: "numeric", second: "numeric"}),
        currentDate: new Date().toLocaleDateString('ru', { year: "numeric", month: "numeric", day: "numeric"})
      }
    },
    mounted() {
      setInterval(() => this.currentTime = new Date().toLocaleTimeString('ru', { hour: "numeric", minute: "numeric", second: "numeric"}), 1000);
    }
  }
</script>