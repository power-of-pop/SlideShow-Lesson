const swiper = new Swiper('.swiper', {
  //オプションの設定
  loop: true, //最後までスライドしたら最初の画像に戻る
 
  //ページネーション表示
  pagination: { 
    el: '.swiper-pagination', //ページネーション
  },
 
  //ナビゲーションボタン（矢印）表示
  navigation: { 
    nextEl: '.swiper-button-next', //次へボタン
    prevEl: '.swiper-button-prev', //前へボタン
  }
});