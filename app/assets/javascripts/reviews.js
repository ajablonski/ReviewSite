jQuery(function () {

  var offset = 100;

  $('#reviews-summary').scrollspy({
    offset: offset,
    target: '#review-categories'
  });

  $('#review-categories li a.jump').click(function(event) {
    window.location.hash = $(this).attr('href');

    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();

    scrollBy(0, -offset);
  });

  $('.send_email_link').click(function() {
    $(this).text("Sent").addClass('improvement_text');
  });

  $( document ).tooltip({
    position: {
      my: "middle top",
      at: "middle bottom+15"
    },

    show: {
      duration: 100
    },

    hide: {
      duration: 100
    },

    open: function(event, ui) {
      ui.tooltip.prepend("<div class='tooltip-arrow'></div>");
    }
  });

  $("#review_review_date").change(function() {
    var date = new Date( $("#review_review_date").val() );
    var dayInMs = 24 * 60 * 60 * 1000;
    var weekAgo = new Date( date - 7 * dayInMs);
    var weekAgoDateString =
      weekAgo.getUTCFullYear() + "-" +
      (weekAgo.getUTCMonth() + 1) + "-" + // JS months are 0-indexed :(
      weekAgo.getUTCDate();

    $("#review_feedback_deadline").val( weekAgoDateString );
  });
});
