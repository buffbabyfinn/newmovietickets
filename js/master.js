function Ticket(titlee,time,age) {
  this.titlee = titlee;
  this.time = time;
  this.age = age;
}

var setTicketPrice = 10
Ticket.prototype.price = function() {
    if (this.age >= 65) {
      return (setTicketPrice * 0.8);
    }
  }
