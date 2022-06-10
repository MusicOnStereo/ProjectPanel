var infoboxes = {};

function toggleInfobox(id) {
	infoboxes[id] = (infoboxes.login === "block") ? "none" : "block";
}

document.getElementById("loginSubmit").onclick = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	console.log(await response.json())
}

document.getElementById("loginInfobutton").onclick = async () => {
	toggleInfobox("login");
	document.getElementById("loginInfopanel").style.display = infoboxes.login;
};