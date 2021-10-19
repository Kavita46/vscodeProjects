(function() {
  $.fn.extend({
  aemTouchUtil: function(options) {
    var settings;
    settings = {
      touchClassName: 'is-touch'
    };
    settings = $.extend(settings, options);
    return this.each(function() {
      var $elem;
      $elem = $(this);
      return $elem.on('touchstart', function() {
        return $elem.addClass(settings.touchClassName);
      }).on('touchmove', function() {
        return $elem.removeClass(settings.touchClassName);
      }).on('touchend', function() {
        return $elem.removeClass(settings.touchClassName);
      });
    });
  },
  aemTouch: function(options) {
    var hasCallback, settings;
    settings = {
      touchClassName: 'is-touch'
    };
    settings = $.extend(settings, options);
    hasCallback = typeof settings.callback === 'function';
    return $(this).each(function() {
      var $elem, isMove, touchStartX, touchStartY;
      $elem = $(this);
      isMove = false;
      touchStartX = null;
      touchStartY = null;
      return $elem.on('touchend touchstart touchmove click', function(e) {
        var eventType, touches;
        eventType = e.type;
        if (eventType === 'click') {
          if (($elem.data('eventHandled')) === true) {
            $elem.data('eventHandled', false);
            return false;
          }
          if (hasCallback === true) {
            settings.callback($elem, e);
            return false;
          }
        }
        if (eventType === 'touchstart') {
          isMove = false;
          touches = e.originalEvent.touches;
          touchStartX = touches[0].pageX;
          touchStartY = touches[0].pageY;
          $elem.addClass(settings.touchClassName);
          return true;
        } else if (eventType === 'touchmove') {
          if (Math.abs(e.originalEvent.touches[0].pageX - touchStartX) > 12 || Math.abs(e.originalEvent.touches[0].pageY - touchStartY) > 12) {
            isMove = true;
            $elem.removeClass(settings.touchClassName);
          }
          return true;
        } else if (e.type === 'touchend') {
          if (isMove === true) {
            isMove = false;
            return false;
          }
          $elem.removeClass(settings.touchClassName);
          if (hasCallback === true) {
            $elem.data('eventHandled', true);
            settings.callback($elem, e);
            return false;
          }
        }
      });
    });
  }
});


  $(function() {
    var $bodys, className;
    className = 'open';
    $bodys = $('.js-accordion-body');
    $bodys.eq(0).addClass(className);
    $bodys.eq(0).parent().addClass(className);
    $bodys.not('.' + className).hide();
    $('.js-accordion-title').aemTouch({
        callback: function($elem) {
          var $body;
          $body = $elem.next('.js-accordion-body');
          $body.slideToggle();
          $elem.parent().toggleClass(className);
          $elem.toggleClass(className);
          $body.toggleClass(className);
          return false;
        }
    });
    return $bodys.find('.js-close').on('click', function() {
      $(this).closest('.js-accordion-body').slideUp();
      return false;
    });
  });

}).call(this);
