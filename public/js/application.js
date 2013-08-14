$(document).ready(function() {
  $('form').on('submit', function(e){
    // alert("it worked!");
    e.preventDefault();
    var data = $(this).serialize();

    var request = $.ajax({
      type: "POST",
      url: '/grandma',
      data: data
    });

    request.done(function(response){
      var result = response;
      $('p').last().remove()
      $('h1').after(response);
    });
  });


  // });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
