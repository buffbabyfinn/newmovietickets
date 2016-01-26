describe("Ticket",function(){
  it("creates a ticket that specifies movie title, time, and user's age based on input", function() {
    var testTicket = new Ticket("Trainspotting", 17, 34)
    expect(testTicket.titlee).to.equal("Trainspotting");
    expect(testTicket.time).to.equal(17);
    expect(testTicket.age).to.equal(34);
  });
  it("creates ticket that calculates twenty percent price discount if user age is over 65",function() {
    var testTicket = new Ticket("Trainspotting", 17, 70)
    expect(testTicket.price()).to.equal(8);
  });
  it("creates ticket that calculates twenty percent price discount if user attends before 4:00",function() {
    var testTicket = new Ticket("Trainspotting", "2:00", 34)
    expect(testTicket.price()).to.equal(8);
  });
  it("creates ticket that calculates twenty percent price discount if user attends older movie",function() {
    var testTicket = new Ticket("12 Angry Men", 5, 34)
    expect(testTicket.price()).to.equal(8);
  });
});
