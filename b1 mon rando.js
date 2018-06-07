//game rolls game var #6 for between 0 and 6000
if ($gameVariables.value(6) == 0)
	{
		$gameVariables.setValue(4,10); //xlief
	} 
else if ($gameVariables.value(6) == 1000)
	{
		$gameVariables.setValue(4,12); //capdoc
	}
else if ($gameVariables.value(6) < 100)
	{
		$gameVariables.setValue(4,9); //raging fungi	
	}
else if ($gameVariables.value(6) < 200)
	{
		$gameVariables.setValue(4,8); //half-orchmera
	}
else if ($gameVariables.value(6) < 300)
	{
		$gameVariables.setValue(4,7); //meatless
	}
else if ($gameVariables.value(6) < 400)
	{
		$gameVariables.setValue(4,6); //Hammmond
	}
else if ($gameVariables.value(6) < 600)
	{
		$gameVariables.setValue(4,5); //ashura
	}
else if ($gameVariables.value(6) < 1000)
	{
		$gameVariables.setValue(4,4); //gobchef
	}
else if ($gameVariables.value(6) < 2000)
	{
		$gameVariables.setValue(4,3); //gkc
	}
else if ($gameVariables.value(6) < 3000)
	{
		$gameVariables.setValue(4,2); //snek
	}
else if ($gameVariables.value(6) < 4000)
	{
		$gameVariables.setValue(4,1); //rat
	}
else 
	{
	$gameVariables.setValue(4,0); //no monster
	}