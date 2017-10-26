<template lang="pug">
  .card
    .card-header Выбор музыки
    .card-block
      input.form-control(placeholder="Поиск по названию, автору, исполнителю, альбому, жанру (В этом прототипе не работает)")
      table.table.table-striped.table-hover
        thead
          tr
            th Название
            th Автор
            th Управление
        tbody
          tr
            td Адажио
            td Ремо Джадзотто
            td 
              button.btn.btn-primary(@click="play('adagio')")
                i.fa.fa-play 
                |  Играть
          tr
            td Концерт `Спор Гармонии с Изобретением` № 5 `La Tempesta di Mare` для скрипки, струнных и бассо континуо ми-бемоль мажор
            td Антонио Вивальди
            td  
              button.btn.btn-primary(@click="play('vivaldi')")
                i.fa.fa-play 
                |  Играть
          tr
            td Пассакалья о жизни
            td Стефано Ланди
            td  
              button.btn.btn-primary(@click="play('landi')")
                i.fa.fa-play 
                |  Играть
          tr
            td The pursuit of perfection
            td Ludovico Einaudi
            td  
              button.btn.btn-primary(@click="play('einaudi')")
                i.fa.fa-play 
                |  Играть

</template>

<style lang='scss' scoped>
  .card {
    margin: 1rem;
  }
</style>

<script>
  export default {
    methods: {
      play: (id) => {
        $('#audioSrc').attr('src', `assets/music/${id}.mp3`);
        let a = $('audio')[0];
        a.load();
        a.play();
      }
    }
  }
</script>