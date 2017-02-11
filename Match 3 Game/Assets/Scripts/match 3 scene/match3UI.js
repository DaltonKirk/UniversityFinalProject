#pragma strict
import UnityEngine.UI;
public var moneyDisplayObj: Text;
public var stockDisplayObj: Text;

function Start () 
{
	
}

function Update () 
{
moneyDisplayObj.text = "£" + money.money.ToString("f2");
stockDisplayObj.text = "Stock: " + Stock.stock.ToString();
	
}
