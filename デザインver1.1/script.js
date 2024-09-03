//写真なし

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
