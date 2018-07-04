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
var messagesRef = firebase.database().ref('employee');

// Listen for form submit
document.getElementById('emp_form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var pass = getInputVal('pass');
  var emp_id = getInputVal('emp_id');
  var dept = getInputVal('dept');

  // Save message
  saveMessage(email, pass, emp_id, dept);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('emp_form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, pass, emp_id, dept){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    pass:pass,
    emp_id:emp_id,
    dept:dept,
  });
}