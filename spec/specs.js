describe("Ticket",function(){
  it("creates a ticket that specifies movie title, time, and user's age based on input", function() {
    var testTicket = new Ticket("Trainspotting", "5:00", 34, 1)
    expect(testTicket.titlee).to.equal("Trainspotting");
    expect(testTicket.time).to.equal("5:00");
    expect(testTicket.age).to.equal(34);
    expect(testTicket.quantity).to.equal(1)
  });

  it("creates ticket that calculates twenty percent price discount if user age is over 65",function() {
    var testTicket = new Ticket("Trainspotting", "5:00", 70, 1)
    expect(testTicket.price()).to.equal(8);
  });

  it("creates ticket that calculates twenty percent price discount if user attends before 4:00",function() {
    var testTicket = new Ticket("Trainspotting", "2:00", 34, 1)
    expect(testTicket.price()).to.equal(8);
  });

  it("creates ticket that calculates twenty percent price discount if user attends older movie",function() {
    var testTicket = new Ticket("12 Angry Men", "5:00", 34, 1)
    expect(testTicket.price()).to.equal(8);
  });
  
  it("creates ticket that calculates total price based on quantity",function() {
    var testTicket = new Ticket("12 Angry Men", "5:00", 34, 2)
    expect(testTicket.price()).to.equal(16);
  });
});
