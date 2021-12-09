var firebaseConfig = {
    apiKey: "AIzaSyCtPYjgTe4sV3NhFfNSBfw18W2kWkwq86M",
    authDomain: "kwitter-bd47f.firebaseapp.com",
    databaseURL: "https://kwitter-bd47f-default-rtdb.firebaseio.com",
    projectId: "kwitter-bd47f",
    storageBucket: "kwitter-bd47f.appspot.com",
    messagingSenderId: "943512963695",
    appId: "1:943512963695:web:58ae0f3e2db20732f89b9a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
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

//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem(user_name);
  localStorage.removeItem(room_name);

  window.location = "index.html";
}