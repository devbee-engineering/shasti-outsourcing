// var db = firebase.firestore();

function submitData() {
	var name = document.getElementById("h_name").value;
	var mobile = document.getElementById("h_mobile").value;
	var email = document.getElementById("h_email").value;
	var message = document.getElementById("h_message").value;
	
	if(name == ''){
		window.alert("Please enter your name!");
	} else if(mobile == ''){
		window.alert("Please enter your mobile!");
	} else if(email == ''){
		window.alert("Please enter your email!");
	} else if(message == ''){
		window.alert("Please enter your message!");
	}
	
	if(name != '' && mobile != '' && email != '' && message != '' ){
		db.collection("formdata").doc().set({
			name: name,
			mobile: mobile,
			email: email,
			message : message,
			timestamp : firebase.firestore.FieldValue.serverTimestamp()
		})
		.then(() => {
			console.log("Document successfully written!");
			document.getElementById("h_name").value = '';
			document.getElementById("h_mobile").value = '';
			document.getElementById("h_email").value = '';
			document.getElementById("h_message").value = '';
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
			window.alert("Error: " +error);
		});
	}
}