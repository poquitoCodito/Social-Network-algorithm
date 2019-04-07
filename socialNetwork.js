var data = require( "./data.json" );

function getSocialNetwork(name){
	var person;

  for (var i = 0; i < data.length; i++) {
	if (data[i].firstName === name) {
		 person = data[i];
		}
	}
   if (person === undefined) {
   	return("Please try some other name");
   }


var friendsFullData = [];
var friendsNames = []; 
person.friends.forEach(function(id) {
   data.forEach(function(friend) {
     if (friend.id === id) {
      friendsFullData.push(friend);
      friendsNames.push(friend.firstName + ' ' + friend.surname);    
     }
   });
 });

var ids = [];
friendsFullData.forEach(function(friend) {
    friend.friends.forEach(function(id) {
       if(id !== person.id && !person.friends.includes(id)) {
       	ids.push(id);
       }
    });
});

var friendOfFriendsIds = [];
var suggestedFriendsIds = [];

ids.forEach(function(id){
	if (!friendOfFriendsIds.includes(id)) {
    friendOfFriendsIds.push(id);
  } else {
  	suggestedFriendsIds.push(id);
  }

 });

var friendOfFriends = [];

friendOfFriendsIds.forEach(function(id) {
   data.forEach(function(friend) {
     if (friend.id === id) {
      friendOfFriends.push(friend.firstName + ' ' + friend.surname);    
     }
   });
 });


var suggestedFriends = [];
suggestedFriendsIds.forEach(function(id) {
   data.forEach(function(friend) {
     if (friend.id === id) {
      suggestedFriends.push(friend.firstName + ' ' + friend.surname);    
     }
   });
 });

var personNetwork = {
	friends: friendsNames,
	friendOfFriends: friendOfFriends,
	suggestedFriends: suggestedFriends,
};

return personNetwork;
}

console.log(getSocialNetwork('Katy'));




