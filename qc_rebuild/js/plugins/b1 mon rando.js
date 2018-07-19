//game rolls game var #6 for between 0 and 6000
function b1()
{
if ($gameVariables.value(6) == 1)
	{
		xilefStats();
		
	} 
else if ($gameVariables.value(6) == 1000)
	{
		capdocStats();

	}
else if ($gameVariables.value(6) < 100)
	{
		fungiStats();

	}
else if ($gameVariables.value(6) < 200)
	{
		tickStats();

	}
else if ($gameVariables.value(6) < 300)
	{
		jeffStats();

	}
else if ($gameVariables.value(6) < 400)
	{
		hammondStats();

	}
else if ($gameVariables.value(6) < 600)
	{
		ashuraStats();

	}
else if ($gameVariables.value(6) < 1000)
	{
		kikiStats();

	}
else if ($gameVariables.value(6) < 2000)
	{
		gckStats();

	}
else if ($gameVariables.value(6) < 3000)
	{
		snekStats();

	}
else if ($gameVariables.value(6) < 4000)
	{
		ratStats();

	}
else 
	{
		$gameVariables.setValue(4,0); //no monster
	}
}