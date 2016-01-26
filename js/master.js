function Ticket(titlee,time,age) {
  this.titlee = titlee;
  this.time = time;
  this.age = age;
}


Ticket.prototype.price = function() {
    var setTicketPrice = 10
    if (this.time < "6:00" || this.age >= 65 || this.titlee === "12 Angry Men") {
      return (setTicketPrice * 0.8);
    } else {
      return 10;
    }
}

$(function() {
  $("#buyButton").click(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var movies = $('select#movieTitles').val();
    var time = $('select#time').val();
    var newTicket = new Ticket (movies,time,age);
    $("#ticketInfo").append("<li>Your age: " + age + "</li>" + "<li>Movie Title: " + movies + "</li>" + "<li>Time: " + time + "</li>");
    $("#ticketPrice").append("<li>$" + newTicket.price() + ".00</li>");



  });
});
