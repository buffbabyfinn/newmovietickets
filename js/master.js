function Ticket(movieName, time, age, quantity) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
  this.movieYear = movieYear;
}

Ticket.prototype.price = function() {
    var setTicketPrice = 10;
    if (this.time < "6:00" || this.age >= 65 || this.movieYear < 2000) {
      return (setTicketPrice * 0.8 * this.quantity);
    } else {
      return setTicketPrice * this.quantity;
    }
}
//
// Ticket.prototype.movieYears = function() {
//   var starWars = { name: "Star Wars", year: 1979 };
//   var superman = { name: "Superman", year: 2001 };
//   var spiritedAway = { name: "Spirited Away", year: 1995 };
//
//   var movies = { movieList: [starWars, superman, spiritedAway] };
//
//   movies.movieList.forEach(function(movie) {
//         var movieYear = movie.year;
//         return movieYear;
//   });
// }
//
// $(function() {
//   $("#buyButton").click(function(event) {
//     event.preventDefault();
//     var age = parseInt($("input#age").val());
//     var movies = $('select#movieTitles').val();
//     var time = $('select#time').val();
//     var quantity = parseInt($('input#quantity').val());
//     var newTicket = new Ticket (movies,time,age,quantity);
//     $('#ticketInfo').empty();
//     $('#ticketPrice').empty();
//     $("#ticketInfo").append("<li>Your age: " + age + "</li>" + "<li>Movie Title: " + movies + "</li>" + "<li>Time: " + time + "</li>");
//
//     $("#ticketPrice").append("<li>$" + newTicket.price() + ".00</li>");
//
//   });
// });
