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
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = " Welcome " + user_name + " !";

    function addRoom()
    {
        room_name = document.getElementsById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding space room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "lets-chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(" Room Name - " + Room_names);
      row = "<div class='room_name' id=''"+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets-chat_page.html"
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
