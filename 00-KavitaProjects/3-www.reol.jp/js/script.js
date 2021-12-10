// メニュー
$(function() {
    var $toggleMenu = $('.toggle-menu');
    var $spMenu = $('.nav-sp-menu');
    var $layer = $('.js-Layer-t');
    var $menu = $spMenu.children('nav');
    var $closeBtn = $('.close-btn');
    var className = 'js-active';
    var classLayer = 'js-Layer';

    $toggleMenu.on('click', function() {
        if ($spMenu.hasClass(className)) {
            close();
        } else {
            open();
        }
    });

    function open() {
        $spMenu.addClass(className);
        $menu.fadeIn(200);
        $layer.addClass(classLayer);
    }

    function close() {
        $spMenu.removeClass(className);
        $menu.fadeOut(200);
        $layer.removeClass(classLayer);
    }

    $(document).click(function(event) {
        if(!$(event.target).closest('.nav-sp-menu').length) {
            close();
        }
    });

    $closeBtn.on('click', function() {
        close();
    });
});

// バナーエリア
$(function(){
    //slick
    $(window).on('load',function(){
        $('.bnr_slide').slick({
            // options
            autoplay: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: 4000,
            speed: 600,
            pauseOnFocus: true,
            dots: true
        });
    });
})

// youtube
$(function() {
    var $iframe = $('iframe');
    $iframe.parent().addClass('youtube');
});

// prof
$(function() {
    var $profImg = $('.profile-img');
    var $profImgThum = $('.profile-img-thum');
    var className = 'current';

    $profImgThum.on('click', function() {
        var $this = $(this);

        if ($this.hasClass(className)) {
            return false;
        }

        var targetClassName = $this.data('num');

        $profImg.removeClass(className);
        $profImgThum.removeClass(className);

        $this.addClass(className);

        $profImg.each(function() {
            var $this = $(this);
            if ($this.hasClass(targetClassName)) {
                $this.addClass(className);
            }
        })
    })
});

//disco
$(function(){

    var item = $('.js-disco-vi li').length;

    // 見た目を調整するために、表示件数を６件にしている
    // 画像の枚数がそれ以下だとうまく動かないので少ない場合には追加する
    var itemPlus = item;
    if (item <= 6) {
        for (var i = 0; itemPlus<8; i++) {
            var copy = $('.js-disco-vi li').eq(i).clone().addClass('js-none');
            $('.js-disco-vi').append(copy);
            itemPlus++;
        }
    }

    //slick
    $('.js-disco-vi').slick({
        // options
        draggable: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        appendArrows: $('.js-disco-vi'),
        prevArrow: '<span class="disco-prev disco-arrow"><img src="../images/disco/prev.png"></span>',
        nextArrow: '<span class="disco-next disco-arrow"><img src="../images/disco/next.png"></span>',
        arrows: false,
        infinite: false,
        speed: 600,
    });

    //SP
    $('.sp-js-disco-vi').slick({
        // options
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        cssEase: 'ease-in-out',
        speed: 400,
        infinite: false,
        centerPadding: '14%',
        appendArrows: $('.sp-js-disco-vi'),
        prevArrow: '<span class="disco-prev sp-disco-arrow"><img src="../images/disco/arw_left.png"></span>',
        nextArrow: '<span class="disco-next sp-disco-arrow"><img src="../images/disco/arw_right.png"></span>',
        arrows: true,
        responsive: [
            {
                breakpoint: 400,     // ~768px
                settings: {
                    centerPadding: '12%',
                }
            }
        ],
    });


    //set
    var clflag = 0;
    var hvspeed = 300;
    var opa = 0.6;
    var arwflag = false;
    SetClass();
    spSetclass();
    $('.slick-current').addClass('current');

    //スクロール時カレントを付与
    $('.js-disco-vi').on('afterChange', function(slick, currentSlide){
        var w = $(window).width();
        if (w > 768) {
            clflag = 0;
            SetClass();
            arwflag = false;
        }
    });

    $('.sp-js-disco-vi').on('afterChange', function(slick, currentSlide){
        var w = $(window).width();
        if (w < 768) {
            $('.sp-js-vi-item').find('.sp-overlay-disco').animate({opacity:0.6},0);
            $('.sp .slick-current').find('.sp-overlay-disco').animate({opacity:0},0);
            spSetclass();
        }
    });

    //帯を選択でスクロール
    $('.js-vi-item').click(function(){
        $('.slick-current').removeClass('current');
        var index = $(this).attr('data-slick-index');
        $('.js-disco-vi').slick('slickGoTo', index);
        clflag = 1;
        poyon_c($(this));
    });

    //サムネイルクリックでスクロール
    $('.js-disco-nav li').click(function(){
        $('.slick-current').removeClass('current');
        var index = $(this).index();
        $('.sp-js-disco-vi').slick('slickGoTo', index);
        clflag = 1;
        var w = $(window).width();
        if (w > 768) {
            $('.pc .slick-current').find('.overlay-disco').stop().animate({opacity:opa},hvspeed);
            $('.pc .slick-current').stop().animate({'width':'120px'},hvspeed);
            $('.pc .slick-current').find('img').stop().animate({'width':'120px'},hvspeed);

            $('[data-num="'+index+'"]').find('.overlay-disco').stop().animate({opacity:0},hvspeed);
            $('[data-num="'+index+'"]').stop().animate({'width':'520px'},hvspeed,function(){
                $('[data-num="'+index+'"]').stop().animate({'width':'500px'},hvspeed);
            });
            $('[data-num="'+index+'"]').find('img').stop().animate({'width':'520px'},hvspeed,function(){
                $('[data-num="'+index+'"]').find('img').stop().animate({'width':'500px'},hvspeed);
                $('.js-disco-vi').slick('slickGoTo', index);
            });
        }

    });

    //左右矢印をクリック
    $('.disco-arrow').click(function(){
        if (!arwflag) {
            if($(this).hasClass('disco-prev')){
                poyon_l($('.to-prev'));
            }else{
                var index = $('.to-next').attr('data-slick-index');
                poyon_r($('.to-next'),index);
            }
            arwflag = true;
            clflag = 1;
        }
    });

    //hoverしたものをカレント表示
    $('.js-vi-item').hover(
        function(){
            //hover時
            if (clflag == 0) {
                poyon_o($(this));
            }
        },
        function(){
            //hoverが外れたとき
            if (clflag == 0) {
                poyon_c($(this));
            }
        }
    );

    //class付け替え
    function SetClass(){
        // $('.to-cl').removeAttr('style');
        $('.to-next').removeClass('to-next');
        $('.to-prev').removeClass('to-prev');
        $('.js-vi-item').removeClass('current'); //メイン画像
        $('.js-vi-item').removeClass('disabled'); //端2つ
        $('.js-discoText').removeClass('current'); //説明文
        $('.js-disco-nav li').removeClass('current'); //サムネイル
        $('.js-vi-item').addClass('disabled');
        $('.slick-current').next().removeClass('disabled');
        $('.slick-current').next().addClass('to-next');
        $('.slick-current').prev().removeClass('disabled');
        $('.slick-current').prev().addClass('to-prev');
        $('.slick-current').prev().prev().addClass('disabled');

        var i = $('.slick-current').attr('data-num');
        $('.js-discoText').eq(i).addClass('current');
        $('.js-disco-nav li').eq(i).addClass('current');
        $('.slick-current').addClass('current');

        var noneBtnClass = 'js-btn-none';
        var non = $('.slick-current').attr('data-slick-index');
        var trueItemCount = item;

        if (non == 0) {
            // 戻るボタンを非表示に
            $('.disco-prev').addClass(noneBtnClass);
        }else{
            $('.disco-prev').removeClass(noneBtnClass);
        }
        if (i >= (trueItemCount-1)) {
            // 次へボタンを非表示に
            $('.disco-next').addClass(noneBtnClass);
        }else{
            $('.disco-next').removeClass(noneBtnClass);
        }
    }

    function spSetclass(){
        $('.sp-js-vi-item').removeClass('current'); //メイン画像
        $('.js-discoText').removeClass('current'); //説明文
        $('.js-disco-nav li').removeClass('current'); //サムネイル

        var x = $('.sp .slick-current').attr('data-spnum');
        $('.js-discoText').eq(x).addClass('current');
        $('.js-disco-nav li').eq(x).addClass('current');
        $('.slick-current').addClass('current');
        var noneBtnClass = 'js-btn-none';
        var non = $('.sp .slick-current').attr('data-slick-index');
        var trueItemCount = item;
        if (non == 0) {
            // 戻るボタンを非表示に
            $('.disco-prev').addClass(noneBtnClass);
        }else{
            $('.disco-prev').removeClass(noneBtnClass);
        }
        if (x >= (trueItemCount-1)) {
            // 次へボタンを非表示に
            $('.disco-next').addClass(noneBtnClass);
        }else{
            $('.disco-next').removeClass(noneBtnClass);
        }
    }

    //広がるアニメーション
    function poyon_o($this){
        $('.slick-current').find('.overlay-disco').stop().animate({opacity:opa},hvspeed);
        $('.slick-current').stop().animate({'width':'120px'},hvspeed);
        $('.slick-current img').stop().animate({'width':'120px'},hvspeed);

        $this.find('.overlay-disco').stop().animate({opacity:0},hvspeed);
        $this.stop().animate({'width':'520px'},hvspeed,function(){
            $this.stop().animate({'width':'500px'},hvspeed);
        });
        $this.find('img').stop().animate({'width':'520px'},hvspeed,function(){
            $this.find('img').stop().animate({'width':'500px'},hvspeed);
        });
    }

    //閉じるときのアニメーション
    function poyon_c($this){
        $this.find('.overlay-disco').stop().animate({opacity:opa},hvspeed);
        $this.stop().animate({'width':'120px'},hvspeed*2);
        $this.find('img').stop().animate({'width':'120px'},hvspeed*2);

        $('.slick-current').find('.overlay-disco').stop().animate({opacity:0},hvspeed);
        $('.slick-current').stop().animate({'width':'520px'},hvspeed,function(){
            $('.slick-current').stop().animate({'width':'500px'},hvspeed);
        });
        $('.slick-current').find('img').stop().animate({'width':'520px'},hvspeed,function(){
            $('.slick-current').find('img').stop().animate({'width':'500px'},hvspeed);
        });
    }

    function poyon_l($this,next){
        $('.slick-current').find('.overlay-disco').stop().animate({opacity:opa},hvspeed);
        $('.slick-current').stop().animate({'width':'120px'},hvspeed*2,function(){
        });
        $('.slick-current').find('img').stop().animate({'width':'120px'},hvspeed*2);

        $this.find('.overlay-disco').stop().animate({opacity:0},hvspeed);
        $this.stop().animate({'width':'520px'},hvspeed/2,function(){
            $this.stop().animate({'width':'500px'},hvspeed);
        });
        $this.find('img').stop().animate({'width':'520px'},hvspeed/2,function(){
            $this.find('img').stop().animate({'width':'500px'},hvspeed);
            $('.js-disco-vi').slick('slickPrev');
        });
    }

    function poyon_r($this,index){
        $('.slick-current').find('.overlay-disco').stop().animate({opacity:opa},hvspeed);
        $('.slick-current').stop().animate({'width':'120px'},hvspeed*2,function(){
        });
        $('.slick-current').find('img').stop().animate({'width':'120px'},hvspeed*2);

        $this.find('.overlay-disco').stop().animate({opacity:0},hvspeed);
        $this.stop().animate({'width':'520px'},hvspeed,function(){
            $this.stop().animate({'width':'500px'},hvspeed);
        });
        $this.find('img').stop().animate({'width':'520px'},hvspeed,function(){
            $this.find('img').stop().animate({'width':'500px'},hvspeed);
            $('.js-disco-vi').slick('slickNext');
        });
    }

    //カテゴリ選択
    var $categoryList = $('.category-list li.js-category');
    var $thumList = $('.js-disco-nav li');
    $categoryList.find('a').click(function(){
        $categoryList.find('a').removeClass('category_current');
        $(this).addClass('category_current');
        var num = $(this).parent().data('cateid');
        console.log(num);
        if (num == 0) {
            $thumList.find('.overlay-thum').removeClass('selected_none');
            $thumList.find('img').removeClass('selected_none--img');
            return false;
        }
        $thumList.find('.overlay-thum').removeClass('selected_none');
        $thumList.find('img').removeClass('selected_none--img');
        $thumList.not('[data-category='+num+']').find('.overlay-thum').addClass('selected_none');
        $thumList.not('[data-category='+num+']').find('img').addClass('selected_none--img');
    });


    //もっとみる
    var thumnum = $('.js-disco-nav li').length;
    if (thumnum >= 8) {
        for (var i = 8; i < thumnum; i++) {
            $('.js-disco-nav li').eq(i).addClass('js-more-none');
        }
        $('.more-thum').css('display','block');
    }else{
        $('.more-thum').css('display','none');
    }

    $('.more-thum').click(function(){
        moredisco();
    });
    function moredisco(){
        $('.js-more-none').css('display','inline-block');
        var delay = 100;
        var fade = 200;
        var x = 1;
        for (var i = 8; i < thumnum; i++) {
            $('.js-disco-nav li').eq(i).delay(delay*x).animate({opacity:1},fade);
            x++;
        }
        $('.more-thum').css('display','none');
    }
});

// 翻訳
$(function() {
    var $transition = $('.js-transition');

    //翻訳されてる画面かどうかを判断
    setTimeout(function(){
        transMode();
    },600);


    // 翻訳されたら
    $("body").on("change", "#google_translate_element select", function () {
        transition();
    });

    // 画像を切り替える
    function transition() {
        $transition.each(function() {
            var $this = $(this);
            var en = $this.data('en');
            var jp = $this.data('jp');
            var current = $this.attr('src');

            if (en == current) {
                $this.attr('src', jp);
            } else {
                $this.attr('src', en);
            }
        });
    }

    //翻訳中か確認
    function transMode(){
        var Tx = $('p.transMode').text();

        $transition.each(function() {
            var $this = $(this);
            var en = $this.data('en');
            var jp = $this.data('jp');
            var current = $this.attr('src');

            if (Tx.match(/^[a-zA-Z]+$/)) {
                $this.attr('src', en);
            } else {
                $this.attr('src', jp);
            }
        });
    }
});


// 要素のフェードイン
$(function() {
    $('.mainVisual img').each(function(i,e){
        $(this).delay(200 * (i+1)).queue(function(next) {
            $(this).addClass('js-anime-top03');
            next();
        });
    });

    $('.js-anime-news').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var $self = $(this);
        if (isInView) {
            $self.addClass('js-anime-fade js-anime-Rslide');
        }
    });

    $('.js-anime-live').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var $self = $(this);
        if (isInView) {
            $self.addClass('js-anime-fade js-anime-Lslide');
        }
    });

    $('#sns').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var $self = $('.js-anime-twi');
        if (isInView) {
             $self.addClass('js-anime-fade js-anime-Rslide');
        }
    });

    $('#sns').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var $self = $('.js-anime-insta');
        if (isInView) {
             $self.addClass('js-anime-fade js-anime-Lslide');
        }
    });

    // $('#movie').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    //     var $self = $('#movie');
    //     if (isInView) {
    //          $self.addClass('js-comming-soon-hirari');
    //     }
    // });

});

//SPのときInsta４件
$(function(){
    var pcflag = false;
    var spflag = false;
    $(window).on('resize load',function(){
        var w = $(window).width();

        if (w < 768 && !spflag) {
            insta('sp');
        }else if (w > 768 && !pcflag) {
            insta('pc');
        }
    });

    function insta(ua){
        var igLength = $('.inst-card').length;

        if (igLength > 5 && ua == 'sp') {
            $('.inst-card').filter(':last').addClass('none');
            spflag = true;
            pcflag = false;
        }else{
            $('.inst-card').filter(':last').removeClass('none');
            spflag = false;
            pcflag = true;
        }
    }
});

//twitterの文字数切り捨て
$(function(){
    $('.twi-card').each(function(){
        //文字数カウント
        var cnt = $(this).find('.js-twit').text().replace(/\s+/g,'').length;
        var twiTx = $(this).find('.js-twit').text();

        //95文字より多ければ三点リーダに変更
        if(cnt > 115){
            $(this).find('.js-twit').text(twiTx.slice(0,112));
            $(this).find('.js-twit').append('...');
        }
    });

    $('.twi-card').click(function(){
        var tl = $(this).find('.twi_link').data('twi');
        window.open(tl);
    });
});


//movie_area
$(function(){
    $('.movie_list').slick({
        // options
      touchMove: false,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      cssEase: 'ease-in-out',
      speed: 1000,
      arrows: false,
      infinite: true
    });
    // imgChange($('.pc .slick-current'),false);

    //画像切り替え
    function imgChange($this,onhover){
        if (onhover) {
            var limg = $this.attr('data-l');
            $this.find('img').attr('src',limg);
            var simg = $('#movie .slick-current').attr('data-s');
            $('#movie .slick-current').find('img').attr('src',simg);
            $this.find('.movie_title').css('display','none');
            $('#movie .slick-current').find('.movie_title').css('display','block');
        }else{
            var simg = $this.attr('data-s');
            $this.find('img').attr('src',simg);
            var limg = $('.current').attr('data-l');
            $('#movie .slick-current').find('img').attr('src',limg);
            $this.find('.movie_title').css('display','block');
            $('#movie .slick-current').find('.movie_title').css('display','none');
        }
    }

    //hoverしたものをカレント表示
    var $item = $('.pc .movie_item');
    var hvspeed = 300;
    var itemw = 600;
    var itemh = 683;
    $item.hover(
        function(){
            //hover時
            if (!$(this).hasClass('current')) {
            // if ($(this).hasClass('current')) {
                imgChange($(this),true);
                $('.movie_item').removeClass('hover-current');
                $('#movie .current').stop().animate({'width':'200px'},hvspeed);
                $('#movie .current img').stop().animate({'width':'200px'},hvspeed);
                $(this).stop().animate({'width':itemw + 20 + 'px',height:itemh+20+'px'},hvspeed,function () {
                    $(this).stop().animate({'width':itemw + 'px',height:itemh + 'px'},hvspeed);
                });
                $(this).find('img').stop().animate({'width':itemw + 20 + 'px',height:itemh+20+'px',bottom:'20px'},hvspeed,function(){
                    $(this).stop().animate({'width':itemw + 'px',height:itemh + 'px',bottom:'0px'},hvspeed);
                });
                $(this).find('.movie_title').stop().animate({opacity:0},hvspeed);
                $('#movie .current').find('.movie_title').stop().animate({opacity:0.6},hvspeed);
                $(this).addClass('hover-current');
            }
        },
        function(){
            //hoverが外れたとき
            if (!$(this).hasClass('current')) {
            // if ($(this).hasClass('current')) {
                imgChange($(this),false);
                $('.hover-current').stop().animate({'width':'200px'},hvspeed);
                $('.hover-current img').stop().animate({'width':'200px'},hvspeed);
                $('#movie .current').stop().animate({'width':itemw + 20 + 'px',height:itemh+20+'px'},hvspeed,function () {
                    $('#movie .current').stop().animate({'width':itemw + 'px',height:itemh + 'px'},hvspeed);
                });
                $('#movie .current').find('img').stop().animate({'width':itemw + 20 + 'px',height:itemh+20+'px',bottom:'20px'},hvspeed,function(){
                    $(this).stop().animate({'width':itemw + 'px',height:itemh + 'px',bottom:'0px'},hvspeed);
                });
                $(this).stop().animate({'width':'200px'},hvspeed);
                $(this).find('img').stop().animate({'width':'200px'},hvspeed);
                $(this).find('.movie_title').stop().animate({opacity:0.6},hvspeed);
                $('#movie .current').find('.movie_title').stop().animate({opacity:0},hvspeed);
                $('.movie_item').removeClass('hover-current');
                $('#movie .current').addClass('hover-current');
            }
        }
    );

    //画面サイズに合わせてulを移動
    var timer = false;
    var oldw = $(window).width();
    $(window).resize(function(){
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            //リサイズが終わったら処理
            var neww = $(window).width();
            if (oldw !== neww && neww < 1400) {
                var rw = (1400 - neww)/2;
                $('.movie_area').css('transform','translateX(-'+ rw +'px)');
            }else if (neww > 1400) {
                $('.movie_area').css('transform','translateX(0px)');
            }
        }, 200);
    });
    $(window).load(function(){
        var neww = $(window).width();
        if (neww < 1400) {
            var rw = (1400 - neww)/2;
            $('.movie_area').css('transform','translateX(-'+ rw +'px)');
        }else if (neww > 1400) {
            $('.movie_area').css('transform','translateX(0px)');
        }
    });

    //sp
    $sp_slider = $('.sp-movie_list')
    $sp_slider.slick({
        // options
      swipe: true, //1件しか表示しないときのみ
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      cssEase: 'ease-in-out',
      speed: 400,
      infinite: true,
      centerPadding: '12%',
      arrows: false
    });

    //set
    $('.slick-current').find('.sp-overlay').animate({opacity:0},100);
    $('.slick-current').next().addClass('currentNext subCurrent');
    $('.slick-current').prev().addClass('currentPrev subCurrent');
    var slideFlag = 0;

    //スライド時
    $sp_slider.on('beforeChange', function(slick, currentSlide){
        $('.movie_item').find('.sp-overlay').css({opacity:0.6});
    });
    $sp_slider.on('afterChange', function(slick, currentSlide){
        $('.slick-current').find('.sp-overlay').css({opacity:0});
        SetClass();
    });

    $('.movie_item').on('touchstart', onTouchStart); //指が触れたか検知
    $('.movie_item').on('touchend', onTouchEnd); //指が離れたか検知
    function onTouchStart(event){
        $('.movie_item').find('.sp-overlay').css({opacity:0.6});
    }
    function onTouchEnd(event){
        $('.slick-current').find('.sp-overlay').css({opacity:0});
    }

    //カレントの左右選択で移動
    $(document).on('click','.currentNext',function(){
        $sp_slider.slick('slickNext');
        slideFlag = 1;
    });
    $(document).on('click','.currentPrev',function(){
        $sp_slider.slick('slickPrev');
        slideFlag = 1;
    });

    function SetClass(){
        $('.movie_item').removeClass('currentNext currentPrev')
        $('.slick-current').next().addClass('currentNext subCurrent');
        $('.slick-current').prev().addClass('currentPrev subCurrent');
        slideFlag = 0;
    }

    //youtubeをモーダルで開く
    $(document).on('click','.movie_area li',function(){
        var movieID = $(this).find('a').data('movieid');
        var url = 'https://www.youtube.com/embed/'+movieID+'?rel=0';
        var iframe = '<iframe width="560" height="315" src="'+url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        $('.overlay-movie-item').html(iframe);
        $('.overlay-movie').addClass('open');
        $('.modal-bk').stop().animate({opacity:0.8},300);
    });
    $(document).on('click','.sp-movie_area .slick-current',function(){
        var movieID = $(this).find('a').data('mid');
        var url = 'https://www.youtube.com/embed/'+movieID+'?rel=0';
        var iframe = '<iframe width="560" height="315" src="'+url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        $('.overlay-movie-item').html(iframe);
        $('.overlay-movie').addClass('open');
        $('.modal-bk').stop().animate({opacity:0.8},300);
    });

    $('.overlay-movie').click(function(){
        $('.modal-bk').stop().animate({opacity:0},300,function(){
            $('.overlay-movie-item').html('');
            $('.overlay-movie').removeClass('open');
        });
    });


    // fewPattern() //表示件数少ない場合(PC共通)
    //3件だけ表示
    function fewPattern() {
        //複数ホバーさせたい場合は'pointer-events':'auto'に切り替え
        $('.pc').find('.movie_item').css('pointer-events','none');
        $('#movie .slick-current').css({
            'opacity':1,
            'pointer-events':'auto'
        });
        $('#movie .slick-current').next().css({
            'opacity':1,
            'pointer-events':'auto'
        });
        $('#movie .slick-current').prev().css({
            'opacity':1,
            'pointer-events':'auto'
        });
    }
});
