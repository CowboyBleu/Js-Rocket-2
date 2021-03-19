var timer = null;
var countdownNumber = 10;


var changeState = function (state) {
	document.body.className = 'body-state'+
			state;
		clearInterval(timer);
		countdownNumber = 10;
		document.getElementById('countdown').innerHTML = countdownNumber;
			countdownNumber = countdownNumber

		// countdown
	if (state == 2) {
		timer = setInterval(function () {
		countdownNumber = countdownNumber
			-1;
		document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber > 4 && countdownNumber <= 7) {
				// be nervous
				document.getElementById('binary').className = 'binary show';
			} else{
				document.getElementById('binary').className = 'binary';
			}

				if (countdownNumber > 1 && countdownNumber <= 4) {
				// preparing for launch
				document.getElementById('preparing').className = 'preparing show';
			} else{
				document.getElementById('preparing').className = 'preparing';
			}
			
			
			if (countdownNumber <= 0) {
				changeState(3);
			};
		}, 500);
}	else if (state ==3){
		var success = setTimeout(function ()
			{
				var randomNumber = Math.round
				(Math.random()*10);

				console.log('randomNumber:',
					randomNumber)

				// succes
				if (randomNumber > 5) {
					changeState(4);
						// do something
					} else {
						changeState(5); // oh no
					}
			}, 2000);
		};
	}
