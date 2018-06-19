//player attack formula then mon hp minus final atk calc
//v#7 rando 0-9
//v#8 final ATK dmg
//((player atk + weapon atk + atk roll) * 2) - m.def = final ATK dmg
//p.HP - final ATK dmg = p.HP
$gameVariables.setValue(8, (($gameVariables.value(21) + $gameVariables.value(22) + $gameVariables.value(7)) * 2) - $gameVariables.value(14));
$gameVariables.setValue(17,($gameVariables.value(17) - $gameVariables.value(8)));

		if ($gameVariables.value(17) <= 0) 
		{
			$gameMessage.add("Mon is ded! Congratz!!");
			$gameSwitches.setValue(4, false);
		}
		
//There's an external (in RMMV) check for a living mon	
//IF mon still alive.		
		
		$gameVariables.setValue(8, (($gameVariables.value(16) + $gameVariables.value(7)) * 1.75) - ($gameVariables.value(24) + $gameVariables.value(28)));
		$gameVariables.setValue(23,($gameVariables.value(23) - $gameVariables.value(8)));



