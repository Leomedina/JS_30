let audio = new Audio('/sounds')

function playSound(event) {
	const audio = document.querySelector(`audio[data-key=${event.KeyCode}]`);
	const key = document.querySelector(`div[data-key="${event.KeyCode}"]`);
	// if (!audio) return;

	console.log(event.KeyCode);

// 	key.classList.add('playing');
// 	audio.currentTime = 0;
// 	audio.play();
}


window.addEventListener("keydown", playSound);