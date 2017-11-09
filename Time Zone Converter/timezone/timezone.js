
function timeConvert(){

	document.getElementById("output-time").value=document.getElementById("input-time").value;
}

var toggle = 0;

function timeSwitch(){
	if (toggle%2 ==0){
		document.getElementById("switch-time").innerHTML="12 Hours Mode";
		toggle++;
	}
	else{
		document.getElementById("switch-time").innerHTML="24 Hours Mode";
		toggle++;
	}	
}