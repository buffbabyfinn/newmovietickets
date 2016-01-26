describe("Ticket",function(){
  it("creates a ticket that specifies movie title, time, and user's age based on input", function() {
    var testTicket = new Ticket("Trainspotting", 5, 34)
    expect(testTicket.titlee).to.equal("Trainspotting");
    expect(testTicket.time).to.equal(5);
    expect(testTicket.age).to.equal(34);
  });
  it("creates ticket that calculates twenty percent price discount if user age is over 65",function() {
    var testTicket = new Ticket("Trainspotting", 5, 70)
    expect(testTicket.price()).to.equal(8);
  });
});


// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });
