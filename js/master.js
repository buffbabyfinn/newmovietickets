function Ticket(titlee,time,age) {
  this.titlee = titlee;
  this.time = time;
  this.age = age;
}

var setTicketPrice = 10
Ticket.prototype.price = function() {
    if (this.time < 16 && this.time > 6 || this.age >= 65) {
      return (setTicketPrice * 0.8);
    }
}
