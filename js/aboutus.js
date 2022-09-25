$(document).ready(function() {
	let url = "https://jsonplaceholder.typicode.com/users";
	let xhr = new XMLHttpRequest();

	xhr.open("GET", url, true);

	xhr.onreadystatechange = function(ev) {
		console.log(xhr.readyState);

		if(xhr.readyState == 4) {
			switch(xhr.status) {
				case 200:
				case 304:
					console.log("OK or Not Moıdified (cached)", xhr.status);
					outputUsers(xhr.responseText);
					break;
				case 201:
					console.log("Created", xhr.status);
					break;
				case 403:
				case 401:
					console.log("Not Authorized", xhr.status);
					break;
				case 404:
					console.log("Not Found", xhr.status);
					break;
				case 500:
					console.log("Server Side Error", xhr.status);
					break;
				default:
					console.log("Some other code: ", xhr.status, xhr.status);
			}
		}
	};

	xhr.onerror = function(err) {
		console.warn(err);
	};

	xhr.send(null);

});

function outputUsers(str) {
	let data = JSON.parse(str);
	document.getElementById("heading1").innerHTML = data[0].username + ", CEO";
	document.getElementById("heading2").innerHTML = data[1].username + ", FOUNDER";
	document.getElementById("heading3").innerHTML = data[2].username + ", MANAGER";

	document.getElementById("description1").innerHTML = data[0].name + "<br>" + data[0].email;
	document.getElementById("description2").innerHTML = data[1].name + "<br>" + data[1].email;
	document.getElementById("description3").innerHTML = data[2].name + "<br>" + data[2].email;
}