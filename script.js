var wakeuptime = 7;
var noon = 12;
var lunchtime = 15;
var naptime = lunchtime + 2;
var partytime= false;
var evening = 18;

var events={
  "wake": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg",
    "text": "Wake up!"
  },
  "party": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg",
    "text": "Let's party!"
  },
  "lunch": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg",
    "text": "Let's have some lunch!"
  },
  "naptime": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg",
    "text": "Sleep tight!"
  },
  "morning": {
    "image": "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    "text": "Good morning!"
  },
  "evening": {
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg",
    "text": "Good evening!"
  },
  "afternoon": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg",
    "text": "Good afternoon!"
  }
}

var showCurrentTime= function(){
var clock = document.getElementById('clock');
var currentDate= new Date();
var hours= currentDate.getHours();
var minutes= currentDate.getMinutes();
var seconds= currentDate.getSeconds();
var meridian= hours>= noon? 'PM' : 'AM';
clock.innerText = hours+':' +minutes+ ':' +seconds+ meridian;
var lolcatImage= document.getElementById('lolcatImage');
var timeEvent= document.getElementById('timeEvent');

  //Party Time

if(partytime){
  var {party}= events.party;
  lolcatImage.src= party.image;
  timeEvent= party.text;
  var partyButton= document.getElementById('partyTimeButton');
  partyButton.innerText = 'End Party';
}

//wakeup
else if(hours == wakeuptime){
  var {image,text}= events.wake;
  lolcatImage.src=image;
  timeEvent.innerText= text;
}

//lunch
else if(hours == lunchtime){
  var {image,text}= events.lunch;
  lolcatImage.src= image;
  timeEvent.innerText= text;
}

//nap
else if(hours == naptime){
  var {image,text} = events.naptime;
  lolcatImage.src=image;
  timeEvent.innerText= text;
}
}




window.onload= function(){
  setInterval( function() {
    showCurrentTime();
  },1000);
   eventTriggers();
}

function eventTriggers(){
  var wakeSelector = document.getElementById('wakeUpTimeSelector');
  var lunchSelector = document.getElementById('lunchTimeSelector');
  var napSelector = document.getElementById('napTimeSelector');
  var partyButton = document.getElementById('partyTimeButton');

  wakeSelector.addEventListener('change',function(){
    wakeuptime= wakeSelector.value;
    partyTime= false;
  });
  
  lunchSelector.addEventListener('change',function(){
    lunchtime= lunchSelector.value;
    partyTime= false;
  });

  napSelector.addEventListener('change',function(){
    naptime= napSelector.value;
    partyTime= false;
  });

  partyTimeButton.addEventListener('click', function(){
    partytime= !partytime;
    console.log(partytime);
  });
  
   
}