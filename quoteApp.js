// Store our json object url in one short variable for cleaner code
// jsonUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
jsonUrl = "https://wisdomapi.herokuapp.com/v1/random?jsonp=?";

// Factor out the getQuote action so we can automatically call it on page load, and manually on clicking the new quote button
var getQuote = function(json) {
  // console.log(json);
  $("#quoteText").hide();
  $("#author").hide();

  var quote = json.content;
  var author = json.author.name;
  if (author === '') {
    author = 'Unknown';
  }

  // Update the quote and author fields by id
  $('#quoteMark').fadeIn();
  $("#quoteText").text(quote).fadeIn();
  $("#author").text("-" + author).fadeIn();

  // update href in the twitter button to have url including this quote
  var twitterUrl = 'https://twitter.com/intent/tweet?text="' + quote + '" - ' + author;
  $("#twitter-share").attr("href", twitterUrl);
};

// On load, get an initial quote
$(document).ready(function() {
  $.getJSON(jsonUrl, getQuote);
  $('#quoteMark').hide();
  $('#quoteText').text("Loading quotes...");

  // Load a quote if the quote button is clicked
  $("#quoteBtn").click(function() {
    $.getJSON(jsonUrl, getQuote);
  });

  // Remove focus from buttons after they are clicked (looks ugly)
  $('.btn').mouseup(function() {
    this.blur();
  });
});
