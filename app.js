let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function () {
 if (tg.MainButton.isVisible) {
     tg.MainButton.hide();
 }
 else {
     tg.MainButton.setText("Вывести информацию о Chanel No. 5");
     item = "Классический цветочный аромат, который включает в себя ноты бергамота, розы, жасмина и сандала. Считается одним из самых узнаваемых и элегантных женских ароматов.";
     tg.MainButton.show();
 }
});


btn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Dior Miss Dior");
      item = "Свежий и романтичный цветочный аромат, который включает в себя ноты пиона, розы, жасмина и мускуса. Он яркий, но нежный и идеально подходит для дневного использования.";
      tg.MainButton.show();
  }
 });

 btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Dior Sauvage");
      item = "Свежий и древесный аромат, который включает в себя ноты бергамота, перца, амбры и древесины. Он идеально подходит для дневного использования и создает ощущение чистоты и энергии.";
      tg.MainButton.show();
  }
 });


 btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Hugo Boss Bottled");
      item = " Свежий и древесный аромат, который включает в себя ноты яблока, корицы, ветивера и амбры. Он идеально подходит для дневного использования и создает ощущение чистоты и энергии.";
      tg.MainButton.show();
  }
 });


 btn5.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о Tom Ford Tobacco Vanille");
        item = " Сладкий и пряный аромат, который включает в себя ноты табака, ваниль, корицы и амбры. Он создает ощущение роскоши и уверенности в себе.";
        tg.MainButton.show();
    }
   });


   btn6.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о Creed Aventus");
        item = " Свежий и фруктовый аромат, который включает в себя ноты ананаса, черной смородины, ветивера и амбры. Он создает ощущение успеха и уверенности в себе.";
        tg.MainButton.show();
    }
   });


Telegram.WebApp.onEvent("mainButtonClicked", function () {
 tg.sendData(JSON.stringify(item));
});