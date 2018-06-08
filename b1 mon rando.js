//game rolls game var #6 for between 0 and 6000
if ($gameVariables.value(6) == 0)
	{
		$gameVariables.setValue(4,10); //xlief
		$gameTemp.reserveCommonEvent(52);
	} 
else if ($gameVariables.value(6) == 1000)
	{
		$gameVariables.setValue(4,12); //capdoc
		$gameTemp.reserveCommonEvent(51);
	}
else if ($gameVariables.value(6) < 100)
	{
		$gameVariables.setValue(4,9); //raging fungi
		$gameTemp.reserveCommonEvent(46);
	}
else if ($gameVariables.value(6) < 200)
	{
		$gameVariables.setValue(4,8); //half-orchmera
		$gameTemp.reserveCommonEvent(48);
	}
else if ($gameVariables.value(6) < 300)
	{
		$gameVariables.setValue(4,7); //meatless
		$gameTemp.reserveCommonEvent(47);
	}
else if ($gameVariables.value(6) < 400)
	{
		$gameVariables.setValue(4,6); //Hammmond
		$gameTemp.reserveCommonEvent(45);
	}
else if ($gameVariables.value(6) < 600)
	{
		$gameVariables.setValue(4,5); //ashura
		$gameTemp.reserveCommonEvent(44);
	}
else if ($gameVariables.value(6) < 1000)
	{
		$gameVariables.setValue(4,4); //gobchef
		$gameTemp.reserveCommonEvent(43);
	}
else if ($gameVariables.value(6) < 2000)
	{
		$gameVariables.setValue(4,3); //gkc
		$gameTemp.reserveCommonEvent(42);
	}
else if ($gameVariables.value(6) < 3000)
	{
		$gameVariables.setValue(4,2); //snek
		$gameTemp.reserveCommonEvent(41);
	}
else if ($gameVariables.value(6) < 4000)
	{
		$gameVariables.setValue(4,1); //rat
		$gameTemp.reserveCommonEvent(40);
	}
else 
	{
	$gameVariables.setValue(4,0); //no monster
	}