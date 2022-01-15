const firebaseConfig = {
    apiKey: "AIzaSyDGoPDV09QDcNUS_clsuqYa7J997U8RWG8",
    authDomain: "kwitter-7d79f.firebaseapp.com",
    databaseURL: "https://kwitter-7d79f-default-rtdb.firebaseio.com",
    projectId: "kwitter-7d79f",
    storageBucket: "kwitter-7d79f.appspot.com",
    messagingSenderId: "655055270355",
    appId: "1:655055270355:web:16c10b1b82768ace0f3f26",
    measurementId: "G-D0WGCJ028K"
  };
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  });
  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

//Start code

//End code
    } });  }); }
getData();
