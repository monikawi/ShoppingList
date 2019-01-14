var button = document.getElementById("btn");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement() {
	//Create new list element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//Attach button to list element
	var del = document.createElement("btn");
  	var txt = document.createTextNode("\u00D7");
  	del.className = "close";
  	del.appendChild(txt);
  	li.appendChild(del);

	closeButton();	
}

//Add new list item after clicking button 
function addListAfterClick() {
	if (inputLength() > 0) { 
		createListElement();
	}
}

//Add new list item after pressing enter 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { 
		createListElement();
	}
}

//Cross an item off the list toggle
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
	}
}, false);


// Click on a close button to hide the current list item
function closeButton() {
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
  		close[i].onclick = function() {
    		var div = this.parentElement;
    		div.style.display = "none";
    	}
    }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);






