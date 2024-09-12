//写真なし

window.onload = function() {
  setTimeout(function() {
    var loading = document.getElementById('showloading');
    var contents = document.getElementById('contents');

    // フェードアウトを開始
    loading.classList.add('fade-out');

    // フェードアウトが終わったらローディング画面を非表示にし、コンテンツを表示
    loading.addEventListener('transitionend', function() {
      loading.style.display = 'none'; // ローディング画面を非表示
      contents.style.display = 'block'; // コンテンツを表示
    });
  }, 1000); // 2秒後にフェードアウトを開始
};


// window.onload = function(){
//   setTimeout(function(){
//       var contents = document.getElementById("contents");
//       var loading = document.getElementById("showloading");
//       loading.style.display = "none";
//       contents.style.display = "block";
//   },2000);
// };
// window.onload = function() {
//   setTimeout(function() {
//       document.getElementById('showloading').classList.add('fade-out');
//   }, 2000); // 2秒後にフェードアウトを開始
// };


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    // ここでヘッダーの高さを取得する
    const headerHeight = header.offsetHeight;
    const scrollY = window.pageYOffset;
    
    if (scrollY >= 100) {
      // 100pxスクロール後にheader-fixedを付与する
      header.classList.add('header-fixed');
      // ヘッダーと同じ高さ分の余白をbodyに設置
      //document.body.style.marginTop = headerHeight + 'px';
    } else {
      header.classList.remove('header-fixed');
      // 先ほど入れた余白をリセットする
      document.body.style.marginTop = '0';
    }
  });
