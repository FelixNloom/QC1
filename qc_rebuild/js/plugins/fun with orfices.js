function printMonName(mon) 
	{
		$gameMessage.add("OH GOD THERE IS " + mon +" HERE!");
	}
	
function dsCheck()
	{
		if ($gameVariables.value(1) == $gameVariables.value(37))
		{
			if ($gameVariables.value(2) == $gameVariables.value(38))
			{
				$gameMessage.add("There's a stairway down here...");
				$gameSwitches.setValue(5, true);
			} 
		} 
	}
	
function keyCheck()
	{
		if ($gameVariables.value(1) == $gameVariables.value(39))
		{
			if ($gameVariables.value(2) == $gameVariables.value(40))
			{
				$gameMessage.add("Hey, there's a key here!");
				$gameSwitches.setValue(6, true);
			} 
		} 
	}
	
