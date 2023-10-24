window.onLoad = red();
function red() {
	var d = new Date();
	var endDate = new Date(2019, 6, 5, 23, 59);
	if(endDate-d<0)
	{
		window.location = "register-closed.html";
	}
	else if(new Date(2019, 5, 3, 8)-d > 0)
	{
		window.location = "register-unavailable.html";
	}
}