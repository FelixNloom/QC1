//will this work if we put it in the script box? lootFinder($gameVariables.value(X));
//game should roll a number between 1-900 or something like that.

function lootFinder(loot){
if (loot === 0){
	textBox("There's nothing to loot here.");
	}
	
else if (loot === 1){
	textBox("Holy crum! You found some rocket fuel!");//rocketfuel
	seItemget();
	$gameVariables.setValue(5,0);
	}
else if (loot < 100){
	textBox("You found an Unholy Hand Grenade!");//unholy hand grenade
	seItemget();
	$gameParty.gainItem($dataItems[2], 1);
	$gameVariables.setValue(5,0);
	}
else if (loot < 300){
	textBox("You found a health potion!");//health potion
	seItemget();
	$gameParty.gainItem($dataItems[1], 1);
	$gameVariables.setValue(5,0);
	}
else if (loot < 600){
	textBox("You found 500 floops!");//500 floops
	seItemget();
	$gameParty.gainGold(500);
	$gameVariables.setValue(5,0);
	}

else{
	textBox("There's nothing to loot here.");
	}
}


