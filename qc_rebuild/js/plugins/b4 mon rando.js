//game rolls game var #6 for between 0 and 6000

function b4()
{
if ($gameVariables.value(6) == 1)
	{
		xilefStats();
	} 
else if ($gameVariables.value(6) == 1000)
	{
		capdocStats();
	}
else if ($gameVariables.value(6) < 100) // 1/60 chance
	{
		ratStats();
	}
else if ($gameVariables.value(6) < 200) // 1/60 chance
	{
		snekStats();
	}
else if ($gameVariables.value(6) < 300) // 1/60 chance
	{
		gckStats();
	}
else if ($gameVariables.value(6) < 400) // 1/60 chance
	{
		kikiStats();
	}
else if ($gameVariables.value(6) < 600) // 1/30 chance
	{
		fungiStats();
	}
else if ($gameVariables.value(6) < 1000) // 1/15 chance
	{
		ashuraStats();
	}
else if ($gameVariables.value(6) < 2000) // 1/6 chance
	{
		hammondStats();
	}
else if ($gameVariables.value(6) < 3000) // 1/6 chance
	{
		tickStats();
	}
else if ($gameVariables.value(6) < 4000) // 1/6 chance
	{
		jeffStats();
	}
else 
	{
	$gameVariables.setValue(4,0); // 1/3 chance no momnster
	}
}	