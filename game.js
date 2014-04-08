
    alert('Welcome to Barringers Snake Pit!');
    alert('You are about to have your strength, both physical and mental, challenged!');
    confirm('Do you have what it takes?');
    alert('Be brave and lets begin!')
	alert('Look out ');
	var snake charm = prompt("A venomous snake is loose in the land! Think fast, What do you do? FREEZE in terror, SPEAR him, or RUN?").toUpperCase();

switch(snake){
	case 'FREEZE':
		var smart = prompt("You're scared stiff! Is this a smart move(YES or NO)?").toUpperCase();
	if(smart === 'YES'){
		console.log("You lucky dog ...he just wanted a lift to the port to catch a boat back to his exotic home! Way to give him some good southern charm");
    } else {
        console.log("You thought you should run? Bad idea, you're the swimmer, not the runner. You lose.");
    }
	break;
case 'SPEAR':
	var not the brightest = prompt("Did you really think you could SPEAR him?  You don't even have a SPEAR.  Sorry, you lose.");

	break;
case 'RUN':
	var fast = prompt("Are you fast (YES or NO)?").toUpperCase();
				var trackstar = prompt("You had a track scholarship right (YES or NO)?").toUpperCase();
		if(fast==='YES' || trackstar === 'YES'){
		console.log("Nicely Done! Done and Dusted!");
		} else{
		console.log("You're not fast nor did you even run track, next time, just try some southern charm. HA!");
		}
    break; 
default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FREEZE, SPEAR, or RUN!");
}