const container = document.querySelector('#container');

for (let i = 0; i < 100; ++i) {
	const button = document.createElement('button');
	button.innerText = "CLICK ME";
    	container.appendChild(button);
}
