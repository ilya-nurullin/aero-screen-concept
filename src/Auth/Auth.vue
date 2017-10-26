<template lang="pug">
  .row.justify-content-center.align-items-center
    .col-md-4
      .card
        .card-header Требуется вход
        .card-block
          .form-group(:class="{ 'has-danger': hasDanger }")
            label(for="ticket") Номер вашего билета или номер постоянного клиента
            input.form-control#ticket(type="text", v-model="ticket", :class="{ 'form-control-danger': hasDanger }", @input="hasDanger = false")
          button.btn.btn-primary(type="button", @click="auth") Войти
          button.btn.btn-secondary(type="button", @click="authAnon") Войти как гость
</template>

<script>
  function _auth(ticket){
    localStorage.setItem('ticket', ticket);
    router.push({ path: '/' });
  }
  export default {
    data: function() {
      return {
        ticket: null,
        hasDanger: false
      }
    },
    methods: {
      auth: function() {
        if (this.ticket == null || this.ticket == "") {
          this.hasDanger = true;
          return;
        }
        _auth(this.ticket);
      },
      authAnon: function() {
        _auth("anon");
      },
    },
    created() {
      $('body').css({ background: "url('assets/wallpapers/1.jpg') no-repeat", backgroundSize: "cover" });
    }
  }
</script>

<style lang="scss" scoped>
  body {
    background-image: url('~/assets/wallpapers/1.jpg') !important;
  }
  .row {
    margin-top: 1rem;
  }
  .btn {
    margin-right: 1rem;
  }
</style>