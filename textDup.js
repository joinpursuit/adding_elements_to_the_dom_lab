const duplicate = () => {
    // add .value to get the text/string
	const inputText = document.querySelector("#text-duplicator-string-input")
		.value;
	// change the string into a number using .value and the Number function
	const inputNum = Number(
		document.querySelector("#text-duplicator-number-input").value
	);
	// get the ul
	const list = document.querySelector("#text-duplicator-list");

	for (i = 0; i < inputNum; i++) {
		// create the li
		let li = document.createElement("li");
		// add the li to the ul
		list.appendChild(li);
		// give a value to li
		li.textContent = inputText;
	}
}