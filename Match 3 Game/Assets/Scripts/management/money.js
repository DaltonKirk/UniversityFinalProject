#pragma strict
import UnityEngine.UI;

static var money: float;
public var moneyDisplay: Text;

function Update()
{
	moneyDisplay.text = "£" + money.ToString("f2");
	
	if(Input.GetKeyDown(KeyCode.M))
	{
		money += 100;
	}
	
	
}