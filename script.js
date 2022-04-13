function makeCard(data){
	let name = document.querySelector("#name");
	let profilePhoto = document.querySelector("#profile-photo");
	let followers = document.querySelector("#followers p");
	let following = document.querySelector("#following p");
	let repositories = document.querySelector("#repositories p");
	let company = document.querySelector("#company p");
	let location = document.querySelector("#location p");

	name.innerHTML = data.login;
	data.avatar_url == null ? profilePhoto.src = "assets/logo.svg" : profilePhoto.src = data.avatar_url;
	data.company == null ? company.innerHTML = "Independente" : company.innerHTML = data.company;
	data.location == null ? document.querySelector("#location").innerHTML = "" : location.innerHTML = data.location;
	followers.innerHTML = data.followers + " Seguidores";
	following.innerHTML = data.following + " Seguindo";
	repositories.innerHTML = data.public_repos + " Repositórios";
}


function getUserData(user){
	let request = new XMLHttpRequest();
	request.open('get', 'https://api.github.com/users/' + user, true);

	request.onload = function() {
		const data = JSON.parse(this.response);
		makeCard(data);
	}

	request.send();
}

function changeBackground(){
	let rgb = [0, 0, 0];

	for (i = 0; i < rgb.length; i++) {
		rgb[i] = Math.floor(Math.random() * 255);
	}

	document.getElementsByClassName("frame")[0].style.backgroundColor = `rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`;
}

getUserData("joao-ifsuldeminas")