#pragma strict
import UnityEngine.UI;

static var money: float;
public var moneyDisplay: Text;

function Start()
{
//load money, give money if player has none
	money = PlayerPrefs.GetFloat("money");
	if(money <= 0)
	{
	MoneyToGetYouStarted();
	}
}

function Update()
{
//display money
	moneyDisplay.text = money.ToString("f2");
	
	if(Input.GetKeyDown(KeyCode.M))
	{
		money += 100;
	}
	
	
}

function MoneyToGetYouStarted()
{
//TODO add a messgae to player
	money = 40;
}