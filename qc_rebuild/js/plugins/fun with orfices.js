function unequip(){
		$gameSwitches.setValue(13, false);
		$gameSwitches.setValue(14, false);
		$gameSwitches.setValue(15, false);
		$gameSwitches.setValue(16, false);
	}

function printMonName(mon){
		$gameMessage.setPositionType(1);
		$gameMessage.add("OH GLOB THERE IS " + mon +" HERE!");
	}
	
	
function printLoot(item){
		$gameMessage.setPositionType(1);
		$gameMessage.add("You found a" + item +"!");
	}
	
	
function textBox(message){
	$gameMessage.setPositionType(1);
	$gameMessage.add(message);
}

function dsCheck(){
		if ($gameVariables.value(1) == $gameVariables.value(37)){
			if ($gameVariables.value(2) == $gameVariables.value(38)){
				textBox("There's a stairway down here...");
				$gameSwitches.setValue(5, true);
			} 
		} 
	}
	
function keyCheck(){
		if ($gameVariables.value(1) == $gameVariables.value(39)){
			if ($gameVariables.value(2) == $gameVariables.value(40)){
				textBox("Hey, there's a key here!");
				AudioManager.playSe({name: "found something", volume: 30, pitch: 100, pan: 0});
				$gameSwitches.setValue(6, true);
			} 
		} 
	}
	
function seItemget(){	
		AudioManager.playSe({name: "found something", volume: 30, pitch: 100, pan: 0});
	}
	
function step3(){
$gameTemp.reserveCommonEvent(82);
}

function searchLeave(){
$gameTemp.reserveCommonEvent(83);
}

function xilefStats(){
		$gameVariables.setValue(4,10); //xilef
		$gameVariables.setValue(17,10); //xilef hp
		$gameVariables.setValue(16,10); //xilef atk
		$gameVariables.setValue(14,10); //xilef def
}

function capdocStats(){
		$gameVariables.setValue(4,12); //capdoc
		$gameVariables.setValue(17,1000000); //capdoc hp
		$gameVariables.setValue(16,10); //capdoc atk
		$gameVariables.setValue(14,45); //capdoc def
}

function fungiStats(){
		$gameVariables.setValue(4,9); //raging fungi
		$gameVariables.setValue(17,82); //fungi hp
		$gameVariables.setValue(16,8); //fungi atk
		$gameVariables.setValue(14,12); //fungi def
}

function tickStats(){
		$gameVariables.setValue(4,8); //giant-cave tick
		$gameVariables.setValue(17,222); //tick hp
		$gameVariables.setValue(16,28); //tick atk
		$gameVariables.setValue(14,14); //tick def
}

function jeffStats(){
		$gameVariables.setValue(4,7); //jeff
		$gameVariables.setValue(17,50); //jeff hp
		$gameVariables.setValue(16,18); //jeff atk
		$gameVariables.setValue(14,8); //jeff def

}

function hammondStats(){
		$gameVariables.setValue(4,6); //Hammmond
		$gameVariables.setValue(17,63); //hammond hp
		$gameVariables.setValue(16,10); //hammond atk
		$gameVariables.setValue(14,14); //hammond def
}

function ashuraStats(){
		$gameVariables.setValue(4,5); //ashura
		$gameVariables.setValue(17,300); //ashura hp
		$gameVariables.setValue(16,22); //ashura atk
		$gameVariables.setValue(14,12); //ashura def
}

function kikiStats(){
		$gameVariables.setValue(4,4); //kiki
		$gameVariables.setValue(17,49); //kiki hp
		$gameVariables.setValue(16,10); //kiki atk
		$gameVariables.setValue(14,4); //kiki def
}

function gckStats(){
		$gameVariables.setValue(4,3); //gkc
		$gameVariables.setValue(17,49); //gkc hp
		$gameVariables.setValue(16,4); //gkc atk
		$gameVariables.setValue(14,4); //gkc def
}

function snekStats(){
		$gameVariables.setValue(4,2); //snek
		$gameVariables.setValue(17,44); //snek hp
		$gameVariables.setValue(16,8); //snek atk
		$gameVariables.setValue(14,4); //snek def
}

function ratStats(){
		$gameVariables.setValue(4,1); //rat
		$gameVariables.setValue(17,36); //rat hp
		$gameVariables.setValue(16,4); //rat atk
		$gameVariables.setValue(14,4); //rat def
}

function mfqStats(){
		
}

function whiteyefStats(){
		
}
