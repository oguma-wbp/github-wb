const swiper = new Swiper(".swiper", {
    loop: true, //画像をループさせる
    speed: 2000, //1000で1秒 今回は2000なので2秒かけながら次の画像へ移動 デフォルトは300(0.3秒)
    effect: "slide", //エフェクト 切り替わるときの効果
    autoplay: {
        delay: 4000, //４秒後に次の画像へ　デフォルトは3000
        disableOnInteraction: false, //マウスやスマホなどでスライダーを触ったあと、自動再生を止めない デフォルトはtrue
    },
    allowTouchMove: true, //スワイプやドラッグで画像(スライド)を切り替えない
    //矢印ボタン
    navigation: {
        prevEl: ".swiper-button-prev",   //前へボタン
        nextEl: ".swiper-button-next"  //次へボタン
    }
});

/*slide：次のスライドが流れてくるアニメーション
fade：次のスライドがふわっと浮かびあがるアニメーション
cube：スライドが立方体になり、3D回転を繰り返すアニメーション
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：トランプのカードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します*/