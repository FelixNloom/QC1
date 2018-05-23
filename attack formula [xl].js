//player attack formula then mon hp minus final atk calc
$gameVariables.setValue(15, (($gameVariables.value(11) + $gameVariables.value(12) + $gameVariables.value(13)) * 2) - $gameVariables.value(14));
$gameVariables.setValue(17,($gameVariables.value(17) - $gameVariables.value(15)));

		if ($gameVariables.value(17) <= 0) 
		{
			$gameMessage.add("Mon is ded! Congratz!!");
			$gameSwitches.setValue(4, false);
		}
		
//There's an external (in RMMV) check for a living mon	
//IF mon still alive.		
		
		$gameVariables.setValue(15, (($gameVariables.value(16) + $gameVariables.value(18)) * 1.75) - $gameVariables.value(10));
		$gameVariables.setValue(19,($gameVariables.value(19) - $gameVariables.value(15)));



