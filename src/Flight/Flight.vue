<template lang="pug">
div
  #message
    h5 Информация
    p До конца полета 8:48
    p Температура в аэропорту назначения: +25&deg; C
    p Малооблачно, без осадков
  #map
</template>

<style lang='scss' scoped>
  #map{
    width: 100%;
    height: 100%;
  }
  #message {
    position: absolute;
    z-index: 100;
    left: 1rem;
    display: inline-block;
    padding: 1rem;
    background: #fff;
    border-radius: 10px;

    p {
      margin: 0;
    }
  }
</style>

<script>

  export default {
    mounted() {
      var myMap;
      if (typeof ymaps == "undefined")
        $.getScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", () => ymaps.ready(init));
      else
        init();

      function init(){ 
        console.log("MAO LOADED");
        $('#map').css({ height: $(window).height() - $('nav').outerHeight() });
        $('#message').css({ top: $('nav').outerHeight() + 14 });

          myMap = new ymaps.Map("map", {
                //center: [55.410307, 37.902451], 
                center: [45.7147, 4.87864], 
                zoom: 4,
                controls: []
            }, {

            });
          var trackLine = new ymaps.Polyline([
                // Указываем координаты вершин ломаной.
                [55.410307, 37.902451],
                [9.998053, -84.204090]
            ], {
                // Описываем свойства геообъекта.
                // Содержимое балуна.
                balloonContent: "Маршрут"
            }, {
                // Задаем опции геообъекта.
                // Отключаем кнопку закрытия балуна.
                balloonCloseButton: false,
                // Цвет линии.
                strokeColor: "#0000ff",
                // Ширина линии.
                strokeWidth: 4,
                // Коэффициент прозрачности.
                strokeOpacity: 0.5
            });
          myMap.geoObjects.add(trackLine).add(new ymaps.Placemark([45.7147, 4.87864], {
                balloonContent: 'Франция, Лион',
                iconCaption: 'Мы находимся здесь'
            }, {
                preset: 'islands#blueDotIconWithCaption',
                iconColor: '#0095b6'
            }));
      }
    }
  }
  
</script>