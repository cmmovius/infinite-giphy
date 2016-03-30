// initial API call
$(document).ready( function() {
  $(".search").click(function(event){
    event.preventDefault();
    apiCall();
  })
});


var apiCall = function() {
  console.log('clicked');
  // add code here to make the AJAX request!
  var keyword = $("input[name='keyword']").val();
  console.log(keyword);
  var url = "http://api.giphy.com/v1/gifs/search?q="+keyword+"&api_key=dc6zaTOxFJmzC";
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    console.log(response);
    // call giphy function below to append gif's
    giphy(response);
  }).fail ( function (){
    console.log("fail");
  }).always( function(){
    console.log("Something happens");
  })

}


var giphy = function(response) {
  for (var i = 0; i < response.data.length; i++) {
    // add code here to append data to the body!
    $('body').append("<div class = giphy-url></div>")
    // $('.giphy-url').append("<p>"+response.data[0].url+"</p>")
    $('.giphy-url').append("<img src = '"+response.data[i].images.fixed_height_small.url+"'>")

  }
}
