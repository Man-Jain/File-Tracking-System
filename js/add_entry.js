// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyB1u2L-c0tXKwkQ-lQ5ptir15PN11CbF1s",
    authDomain: "cafej-635ad.firebaseapp.com",
    databaseURL: "https://cafej-635ad.firebaseio.com",
    projectId: "cafej-635ad",
    storageBucket: "cafej-635ad.appspot.com",
    messagingSenderId: "354466862788"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('movement');

// Listen for form submit
document.getElementById('file_record').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var file_id = getInputVal('file_id');
  var dest_dept = getInputVal('dest_dept');
  var leav_date = getInputVal('leav_date');
  var crr_dept = getInputVal('crr_dept');
  var message = getInputVal('message');

  // Save message
  saveMessage(file_id, dest_dept, leav_date, crr_dept, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(file_id, dest_dept, leav_date, crr_dept, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    file_id: file_id,
    dest_dept:dest_dept,
    leav_date:leav_date,
    crr_dept:crr_dept,
    message:message
  });
}