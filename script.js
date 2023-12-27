const swiper = new Swiper('.swiper', {
  //オプションの設定
  loop: true, //最後までスライドしたら最初の画像に戻る
  effect:"fade",
  //ページネーション表示の設定

  autoplay: {
    delay:1000,
    disableOnInteraction:false,
  },

  speed:2000,


});