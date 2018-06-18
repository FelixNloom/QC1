//will this work if we put it in the script box? lootFinder($gameVariables.value(X));
//game should roll a number between 1-900 or something like that.

function lootFinder(loot)
{
if (loot === 1)
	{
	$gameMessage.add("Holy crum! You found some rocket fuel!");
	}
else if (loot < 100)
	{
	$gameMessage.add("You found an Unholy Hand grenade!");
	}
else if (loot < 300)
	{
	$gameMessage.add("You found a health potion!");
	}
else if (loot < 600)
	{
	$gameMessage.add("You found some gold!");
	}
else
	{
	$gameMessage.add("You searched but found nothing.");
	}
}


