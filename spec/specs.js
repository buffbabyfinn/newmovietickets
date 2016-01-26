describe("Ticket",function(){
  it("creates a ticket that specifies movie title, time, and user's age based on input", function() {
    var testTicket = new Ticket("Trainspotting", 3, 34)
    expect(testTicket.titlee).to.equal("Trainspotting");
    expect(testTicket.time).to.equal(3);
    expect(testTicket.age).to.equal(34);
  });
});


// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });
