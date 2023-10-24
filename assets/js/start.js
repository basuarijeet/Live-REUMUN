function shouldIStartRegister() {
	// return "not yet";
	// return "open";
	return "closed";
}

window.onload = function() {
	var flag = shouldIStartRegister();
	if(flag === "not yet")
		window.location = "register-unavailable.html";
	else if(flag === "closed")
	{
		window.location = "register-closed.html";
	}
};