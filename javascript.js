
function btn(){

	const getInput = document.getElementById("check").value;

	document.getElementById("show-me").innerHTML = document.getElementById("check").value;
	document.getElementById("demo-on").innerHTML = "Hii, I am " + document.getElementById("check").value;
	document.getElementById("show-me").style.color = "red";
	document.getElementById("show-me").style.marginLeft = "16px";
	

}