function iOnline() {
	const myStatus = document.getElementById('myStatus');
	myStatus.className = 'users-profile online';
}
function iOffline() {
	const myStatus = document.getElementById('myStatus');
	myStatus.className = 'users-profile offline';
}
function modalClose() {
	const myStory = document.getElementById('myModal');
	myStory.style.display = 'none';
}
function showMyStory() {
	const myStory = document.getElementById('myModal');
	myStory.style.backgroundImage = "url('./images/myProfilePhoto.jpg')";
	myStory.style.display = 'block';
	myStory.style.backgroundSize = '100% 100%';
}
function showNicoleStory() {
	const nicoleStory = document.getElementById('myModal');
	nicoleStory.style.backgroundImage = "url('./images/status-2.png')";
	nicoleStory.style.display = 'block';
	nicoleStory.style.backgroundSize = '100% 100%';
}
function showAliStory() {
	const aliStory = document.getElementById('myModal');
	aliStory.style.backgroundImage = "url('./images/status-3.png')";
	aliStory.style.display = 'block';
	aliStory.style.backgroundSize = '100% 100%';
}
function showSaraStory() {
	const saraStory = document.getElementById('myModal');
	saraStory.style.backgroundImage = "url('./images/status-4.png')";
	saraStory.style.display = 'block';
	saraStory.style.backgroundSize = '100% 100%';
}
function nicoleOnline() {
	const status = document.getElementById('nicoleStatus');
	status.className = 'story s2 online';
}
function nicoleOffline() {
	const status = document.getElementById('nicoleStatus');
	status.className = 'story s2 offline';
}
function aliOnline() {
	const status = document.getElementById('aliStatus');
	status.className = 'story s3 online';
}
function aliOffline() {
	const status = document.getElementById('aliStatus');
	status.className = 'story s3 offline';
}
function saraOnline() {
	const status = document.getElementById('saraStatus');
	status.className = 'story s4 online';
}
function saraOffline() {
	const status = document.getElementById('saraStatus');
	status.className = 'story s4 offline';
}
