function Ticket(titlee,time,age) {
  this.titlee = titlee;
  this.time = time;
  this.age = age;
}

var setTicketPrice = 10
Ticket.prototype.price = function() {
    if (this.time < 16 && this.time > 6 || this.age >= 65 || this.titlee === "Old Movie") {
      return (setTicketPrice * 0.8);
    }
}

$(function() {
  $("#buyButton").click(function(event) {
    var age = parseInt($("input#age").val());
    var newTicket = new Ticket(titlee,time,age);
    debugger;
    $("#ticketInfo").append("<li>" + newTicket + "</li>");
    event.preventDefault();
  });
});
