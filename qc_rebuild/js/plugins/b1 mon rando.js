//game rolls game var #6 for between 0 and 6000
function b1()
{
if ($gameVariables.value(6) == 1)
	{
		$gameVariables.setValue(4,10); //xilef
		$gameVariables.setValue(17,10); //xilef hp
		$gameVariables.setValue(16,10); //xilef atk
		$gameVariables.setValue(14,10); //xilef def
		
	} 
else if ($gameVariables.value(6) == 1000)
	{
		$gameVariables.setValue(4,12); //capdoc
		$gameVariables.setValue(17,1000000); //capdoc hp
		$gameVariables.setValue(16,10); //capdoc atk
		$gameVariables.setValue(14,45); //capdoc def

	}
else if ($gameVariables.value(6) < 100)
	{
		$gameVariables.setValue(4,9); //raging fungi
		$gameVariables.setValue(17,82); //fungi hp
		$gameVariables.setValue(16,8); //fungi atk
		$gameVariables.setValue(14,12); //fungi def

	}
else if ($gameVariables.value(6) < 200)
	{
		$gameVariables.setValue(4,8); //giant-cave tick
		$gameVariables.setValue(17,222); //chimera hp
		$gameVariables.setValue(16,28); //chimera atk
		$gameVariables.setValue(14,14); //chimera def

	}
else if ($gameVariables.value(6) < 300)
	{
		$gameVariables.setValue(4,7); //meatless
		$gameVariables.setValue(17,50); //meatless hp
		$gameVariables.setValue(16,18); //meatless atk
		$gameVariables.setValue(14,8); //meatless def

	}
else if ($gameVariables.value(6) < 400)
	{
		$gameVariables.setValue(4,6); //Hammmond
		$gameVariables.setValue(17,63); //hammond hp
		$gameVariables.setValue(16,10); //hammond atk
		$gameVariables.setValue(14,14); //hammond def

	}
else if ($gameVariables.value(6) < 600)
	{
		$gameVariables.setValue(4,5); //ashura
		$gameVariables.setValue(17,300); //ashura hp
		$gameVariables.setValue(16,22); //ashura atk
		$gameVariables.setValue(14,12); //ashura def

	}
else if ($gameVariables.value(6) < 1000)
	{
		$gameVariables.setValue(4,4); //gobchef
		$gameVariables.setValue(17,49); //gobchef hp
		$gameVariables.setValue(16,10); //gobchef atk
		$gameVariables.setValue(14,4); //gobchef def

	}
else if ($gameVariables.value(6) < 2000)
	{
		$gameVariables.setValue(4,3); //gkc
		$gameVariables.setValue(17,49); //gkc hp
		$gameVariables.setValue(16,4); //gkc atk
		$gameVariables.setValue(14,4); //gkc def

	}
else if ($gameVariables.value(6) < 3000)
	{
		$gameVariables.setValue(4,2); //snek
		$gameVariables.setValue(17,44); //snek hp
		$gameVariables.setValue(16,8); //snek atk
		$gameVariables.setValue(14,4); //snek def

	}
else if ($gameVariables.value(6) < 4000)
	{
		$gameVariables.setValue(4,1); //rat
		$gameVariables.setValue(17,36); //rat hp
		$gameVariables.setValue(16,4); //rat atk
		$gameVariables.setValue(14,4); //rat def

	}
else 
	{
		$gameVariables.setValue(4,0); //no monster
	}
}