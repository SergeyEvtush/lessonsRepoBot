"use strict";

const isNumber = function (num) {

	return !isNaN(parseFloat(num))&&isFinite(num);
};

function bot(number) {
	let att=10;
	function player(attempt) {
		let playerNumber = +prompt('Угадай число от 1 до 100');
		if (playerNumber === 0||playerNumber === null) { 
			playerNumber=alert("Good buy");
		}
		if (!isNumber(playerNumber)) { 
			--attempt;
			alert(`введи число а не буквы,осталось попыток ${attempt}`);
			player(attempt);
		}
		if (attempt === 0) { 
			playerNumber=alert("Good buy");
		}
		if (playerNumber === number) {
			alert('вы угадали');
		} else { 
			if (playerNumber > number) {
				console.log(attempt);
				--attempt;
				console.log(playerNumber);
				playerNumber = alert(`Ваше число больше загаданного,осталось попыток ${attempt}`);
				console.log(playerNumber);
				if (playerNumber === false) {
					playerNumber=alert('да, не поиграли');
				} else { 
					player(attempt);
				}
				
			}
			if (playerNumber < number) { 
				--attempt;
				console.log(playerNumber);
				playerNumber = alert(`Ваше число меньше загаданного,осталось попыток ${attempt}`);
				console.log(playerNumber);
				if (playerNumber === false) {
					playerNumber=alert('да, не поиграли');
				} else { 
					player();
				}
			}
		}
		
	}
	player(att);
}
const player1 = bot(5);
