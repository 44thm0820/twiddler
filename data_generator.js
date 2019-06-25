/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
// users is an array of strings -- all the usernames that you're following
// streams is an object with two properties, users and home.
/* streams= {
      users = {
        shawndrost: []; // contains all shawndrost's tweets
        sharksforcheap: [];
        mracus: [];
        douglascalhoun: [];
      },
      home: []; //contains all tweets from all users
    }

   users = ['shawndrost', 'sharksforcheap', 'mracus', 'douglascalhoun'];
   window.users === users; // true;
   window.streams === streams; // true;
  */
// window.streams = {}; // is the same as var streams = {};
// 
var streams = {}; 
streams.home = []; 
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
var users = Object.keys(streams.users);
// window.users = Object.keys(streams.users); // is the same as var users = Object.keys(streams.users);


// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user; // a string assigned to a variable
  streams.users[username].push(newTweet); //pushes string tweet to first array
  streams.home.push(newTweet); //pushes string tweet to second array
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date(); // need to display this
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};
