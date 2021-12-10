/**
 * メニューの開閉
 */
function initMenu () {
    $('.js-tc-target').aemToggleClass();
}

/**
 * スムーススクロール
 */
function initSmoothScroll () {
    $.fn.aemSmoothScroll();
}

/**
 * 画像のプロテクト
 */
function initProtectImage () {
    $(".aem-post").find("img").wrap('<span class="js-protect">');
    $('.js-protect').aemProtectImage();
}

/**
 * ヘッダーの大きさを画面の高さに揃える
 */
function initHeaderCoverSize () {
    var elHeader = document.querySelector('.header');
    var defaultWidth;
    
    /** 高さをセットする */
    var setHeight = function () {
      elHeader.style.height = window.innerHeight + 'px';
      defaultWidth = window.innerWidth;
    };
    
    /** 横幅が変わった時のリサイズのみ高さを書き換える */
    var resizeHandle = function () {
      if (defaultWidth !== window.innerWidth) {
        setHeight();
      }
    };

    setHeight();
    window.addEventListener('resize', resizeHandle);
}

$(function () {
    inView();
    initMenu();
    initSmoothScroll();
    initProtectImage();
    initHeaderCoverSize();
})


// inview
function inView() {
  $('.box').aemInview({
    addClassName: 'active'
  });

  return;



  var nodes = document.querySelectorAll('.box')
  var className = 'active'

  if(IntersectionObserver) {
    var options = {
      root: null,
      rootMargin: 0,
      threshold: 0
    }

    var observer = new IntersectionObserver(inview, options)

    function inview(entries) {
      
      entries.forEach(function(entry){
        if(entry.isIntersecting) {
          entry.target.classList.add(className)
        }
      })
    }

    Array.prototype.forEach.call(
      nodes,
      function(e) {
        observer.observe(e);
      }
    )
    
  } else {
    Array.prototype.forEach.call(
      nodes,
      function(e) {
        e.classList.add(className)
      }
    )
  }
};