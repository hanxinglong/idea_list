var Ideas = new Mongo.Collection('ideas');




if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);


  Template.hello.helpers({
    counter: function () {
      return Ideas.findOne().score;
    }
    ,
all_ideas: function () {
return Ideas.find();
}
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
        //Ideas.insert({score:0});


        Ideas.update("ft5DYs2LtRBg9goRD", {$set: {score:Ideas.findOne().score+1}});

        

    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


