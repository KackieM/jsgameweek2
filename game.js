function startGame() {
    
    alert('Welcome to Barringers Snake Pit!');
    alert('You are about to have your strength, both physical and mental, challenged!');
    confirm('Do you have what it takes?');
    alert('Be brave and lets begin!');
	var snakecharm = prompt("A venomous snake is loose in the land! Think fast, What do you do? FREEZE in terror, SPEAR him, or RUN?");

	switch(snakecharm.toUpperCase()){
		case 'FREEZE':
			var smart = prompt("You're scared stiff! Is this a smart move(YES or NO)?");
			if(smart.toUpperCase() === 'YES'){
				alert("You lucky dog ...he just wanted a lift to the port to catch a boat back to his exotic home! Way to give him some good southern charm");
		    } else {
		        alert("You thought you should run? Bad idea, you're the swimmer, not the runner. You lose.");
		    }
			break;
		
		case 'SPEAR':
			var notthebrightest = prompt("Did you really think you could SPEAR him?  You don't even have a SPEAR.  Sorry, you lose.");

			break;
		
		case 'RUN':
			var fast = prompt("Are you fast (YES or NO)?");
					var trackstar = prompt("You had a track scholarship right (YES or NO)?").toUpperCase();
			if(fast==='YES' || trackstar === 'YES'){
				alert("Nicely Done! Done and Dusted!");
			} else{
				alert("You're not fast nor did you even run track, next time, just try some southern charm. HA!");
			}
	    	break; 
	
		default:
		    alert("I didn't understand your choice. Hit Run and try again, this time picking FREEZE, SPEAR, or RUN!");
		    startGame();

	}

}

function sayHiKat() {
	return alert("hello Kat");
}