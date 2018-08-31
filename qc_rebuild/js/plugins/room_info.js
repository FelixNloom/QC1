function roomInfo ()
{
if ($gameVariables.value(1) == 8)
	{
		if ($gameVariables.value(2) == 8)//4-4
		{
			$gameVariables.setValue(156, $gameVariables.value(33)); 
		}
		else if ($gameVariables.value(2) == 7)//4-3
		{
			$gameVariables.setValue(155, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 6)//4-2
		{
			$gameVariables.setValue(154, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 5)//4-1
		{
			$gameVariables.setValue(153, $gameVariables.value(33)); 
		}
	
	}
else if ($gameVariables.value(1) == 7)
	{
		if ($gameVariables.value(2) == 8)//3-4
		{
			$gameVariables.setValue(152, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 7)//3-3
		{
			$gameVariables.setValue(151, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 6)//3-2
		{
			$gameVariables.setValue(150, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 5)//3-1
		{
			$gameVariables.setValue(149, $gameVariables.value(33)); 

		}
		
	}
else if ($gameVariables.value(1) == 6)
	{
		if ($gameVariables.value(2) == 8)//2-4
		{
			$gameVariables.setValue(148, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 7)//2-3
		{
			$gameVariables.setValue(147, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 6)//2-2
		{
			$gameVariables.setValue(146, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 5)//2-1
		{
			$gameVariables.setValue(145, $gameVariables.value(33)); 

		}
	
	}
else if ($gameVariables.value(1) == 5)
	{
		if ($gameVariables.value(2) == 8)//1-4
		{
			$gameVariables.setValue(144, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 7)//1-3
		{
			$gameVariables.setValue(143, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 6)//1-2
		{
			$gameVariables.setValue(142, $gameVariables.value(33)); 

		}
		else if ($gameVariables.value(2) == 5)//1-1
		{
			$gameVariables.setValue(141, $gameVariables.value(33)); 

		}
		
	}
}	