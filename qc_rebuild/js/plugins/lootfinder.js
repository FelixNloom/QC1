//will this work if we put it in the script box? lootFinder($gameVariables.value(X));
//game should roll a number between 1-900 or something like that.

function lootFinder(loot)
{
if (loot === 0)
	{
	$gameMessage.add("There's nothing to loot here.");
	}
	
else if (loot === 1)
	{
	$gameMessage.add("Holy crum! You found some rocket fuel!");
	$gameVariables.setValue(5,0);
	}
else if (loot < 100)
	{
	$gameMessage.add("You found an Unholy Hand Grenade!");
	$gameParty.gainItem($dataItems[2], 1);
	$gameVariables.setValue(5,0);
	}
else if (loot < 300)
	{
	$gameMessage.add("You found a health potion!");
	$gameParty.gainItem($dataItems[1], 1);
	$gameVariables.setValue(5,0);
	}
else if (loot < 600)
	{
	$gameMessage.add("You found 500 floops!");
	$gameParty.gainGold(500);
	$gameVariables.setValue(5,0);
	}
else
	{
	$gameMessage.add("There's nothing to loot here.");
	}
}


