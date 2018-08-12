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
else if (loot < 101){
	textBox("You found an Unholy Hand Grenade!");//unholy hand grenade
	seItemget();
	$gameParty.gainItem($dataItems[2], 1);
	$gameVariables.setValue(5,0);
	}
else if (loot < 303){
	textBox("You found a health potion!");//health potion
	seItemget();
	$gameParty.gainItem($dataItems[1], 1);
	$gameVariables.setValue(5,0);
	}
else if (loot < 606){
	textBox("You found 500 floops!");//500 floops
	seItemget();
	$gameParty.gainGold(500);
	$gameVariables.setValue(5,0);
	}
else if (loot < 707){
	if ($gameVariables.value(32)===0){
		textBox("You found a machete!");//machete
		seItemget();
		$gameParty.gainItem($dataItems[6], 1);
		$gameVariables.setValue(5,0);
	}
	else{
		textBox("You found padded armor!");//padded suit
		seItemget();
		$gameParty.gainItem($dataItems[10], 1);
		$gameVariables.setValue(5,0);
	}
	
}

else if (loot < 755){
	if ($gameVariables.value(32)===0){
		textBox("You found a sword!");//sword
		seItemget();
		$gameParty.gainItem($dataItems[7], 1);
		$gameVariables.setValue(5,0);
	}
	else{
		textBox("You found a police vest!");//police vest
		seItemget();
		$gameParty.gainItem($dataItems[11], 1);
		$gameVariables.setValue(5,0);
	}
	
}
else if (loot < 777){
	if ($gameVariables.value(32)===0){
		textBox("You found a cursed polearm!!");//polearm
		seItemget();
		$gameParty.gainItem($dataItems[8], 1);
		$gameVariables.setValue(5,0);
	}
	else{
		textBox("You found chainmail!!");//chainmail
		seItemget();
		$gameParty.gainItem($dataItems[12], 1);
		$gameVariables.setValue(5,0);
	}
	
}

else{
	textBox("There's nothing to loot here.");
	}
}


