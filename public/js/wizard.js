(function($) {
    $(document).on('ready', function() {
      $('.next-step').on('click', function(evt) {
        evt.preventDefault();
        var $this = $(evt.currentTarget);
        var $currentStep = $this.closest('.step-form');
        var targetSelector = $currentStep.data('next');
        
        if (targetSelector) {
          var $target = $currentStep.closest('.steps-form').find(targetSelector);
          $currentStep.css({
            left: ($currentStep.width()*-1 - 40) + 'px',
          });
        
          $target.addClass('active').css({left: 0});
        }
        
      });
    });
  
    var $form = $('.steps-form');
    
    $('.step-form').each(function(index) {
      $(this).css({
        left: ($form.width() + 40) * index + 'px'
      })
    });
  })(jQuery);