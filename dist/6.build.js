webpackJsonp([6],{35:function(t,i,e){"use strict";function s(t){e(57)}Object.defineProperty(i,"__esModule",{value:!0});var n=e(59),a=e(60),c=e(0),r=s,o=c(n.a,a.a,!1,r,"data-v-b9d0e0e4",null);i.default=o.exports},57:function(t,i,e){var s=e(58);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(5)("e202b842",s,!0)},58:function(t,i,e){i=t.exports=e(1)(void 0),i.push([t.i,".row[data-v-b9d0e0e4]{margin-top:1rem;padding:0 1rem}section[data-v-b9d0e0e4]{display:none}",""])},59:function(t,i,e){"use strict";i.a={mounted:function(){$("li.list-group-item.list-group-item-action").click(function(){$("li.list-group-item.list-group-item-action").removeClass("active"),$(this).addClass("active")}),this.currentId="start"},data:function(){return{currentId:null}},computed:{title:function(){return $("section#"+this.currentId).data("title")},body:function(){return $("section#"+this.currentId).html()}},methods:{show:function(t){this.currentId=t}}}},60:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item list-group-item-action",on:{click:function(i){t.show("maps")}}},[t._v("Карты")]),e("li",{staticClass:"list-group-item list-group-item-action",on:{click:function(i){t.show("aboutFlight")}}},[t._v("О полёте")]),e("li",{staticClass:"list-group-item list-group-item-action",on:{click:function(i){t.show("entertainment")}}},[t._v("Развлечения")]),e("li",{staticClass:"list-group-item list-group-item-action",on:{click:function(i){t.show("settings")}}},[t._v("Настройки")]),e("li",{staticClass:"list-group-item list-group-item-action",on:{click:function(i){t.show("steward")}}},[t._v("Вызов бортпроводника")])])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(t._s(t.title))]),e("div",{staticClass:"card-block",domProps:{innerHTML:t._s(t.body)}})])]),e("section",{attrs:{id:"start","data-title":"Начало"}},[t._v("Для начала выберите пункт в левом меню.")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{attrs:{id:"maps","data-title":"Карты"}},[e("b",[t._v("Найти место")]),e("p",[t._v("Чтобы отыскать необходимое Вам место, необходимо воспользоваться 2ГИС или Картыми Гугл. 2ГИС лучше всего поможет Вам ориентироваться по городу, в который Вы направляетесь. С помощью 2ГИС можно отыскать не. Только улицу, но и определеную организацию или магазин. Карты Гугл понадобятся Вам, если вы хотите ориентировать не только по городу назначения, но и проложить дальнейший маршрут. Также Карты Гугл помогут Вам определить Ваше текущее местоположение")]),e("b",[t._v("Проложить маршрут")]),e("p",[t._v("Чтобы проложить маршрут в городе назначения и его окрестностях, рекомендуем воспользоваться 2ГИС. Для начала необходимо отметить пункт отправления, а затем пункт прибытия. 2ГИС сам проложит необходимый маршрут. Для более продолжительных маршрутов советуем воспользоваться Картами Гугл. Вам так же необходимо отметить пункт отправления и пункт прибытия. Карты помогут Вам ориентироваться не только по городу, но и по всему миру.")]),e("b",[t._v("Фотографии мест")]),e("p",[t._v("Фотографии мест предлагают Вам фото тех мест, над которыми будет происходить полет. Если видимость хорошая, то Вы можете завести будильник. Будильник даст Вам сигнал, когда самолёт будет пролетать над этим местом.")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{attrs:{id:"aboutFlight","data-title":"О полёте"}},[e("b",[t._v("Где я нахожусь?")]),e("p",[t._v("О полёте позволяет Вам отслеживать пройденный маршрут. Положение самолета на картах указывает Вам количество пройденного пути, а также Ваше текущее положение.")]),e("b",[t._v("Полная информация о полёте")]),e("p",[t._v("Помимо Вашего текущего положения О полёте указывает Вам количество оставшегося времени до конца полёта. Эта информация отображается в левом верхнем углу в течение всего полёта. Также О полёте предоставляет Вам информацию о погоде в пункте прибытия.")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{attrs:{id:"entertainment","data-title":"Развлечения"}},[e("b",[t._v("Выбор музыки")]),e("p",[t._v("Чтобы выбрать необходимый альбом, трек или исполнителя выберите предложенный вариант. Если вы не можете найти необходимую музыку, Вы можете воспользоваться поиском.")]),e("b",[t._v("Выбор фильма")]),e("p",[t._v("Чтобы выбрать необходимый фильм выберите предложенный варианты. Если вы не можете найти необходимый фильм, Вы можете воспользоваться поиском.")]),e("b",[t._v("Лента новостей")]),e("p",[t._v("Вашему вниманию предоставляются текущие новости, которые регулярно обновляются. Чтобы подробнее ознакомиться с новостью, щёлкните на неё.")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{attrs:{id:"settings","data-title":"Настройки"}},[e("b",[t._v("Выбор фона")]),e("p",[t._v("Чтобы выбрать необходимый фон рабочей области, нажмите на картинке. Фон сразу же изменится и сохранится.")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{attrs:{id:"steward","data-title":"Вызов бортпроводника"}},[e("b",[t._v("Вызов бортпроводника")]),e("p",[t._v("Чтобы выбрать вызвать бортпроводника, нажмите на кнопку Бортпроводник.")])])}],a={render:s,staticRenderFns:n};i.a=a}});
//# sourceMappingURL=6.build.js.map