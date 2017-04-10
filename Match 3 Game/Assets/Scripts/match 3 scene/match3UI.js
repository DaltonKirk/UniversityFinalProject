#pragma strict
import UnityEngine.UI;
public var moneyDisplayObj: Text;
public var stockDisplayObj: Text;
public var repStars: Image;
public var columnScript: column;

function Start () 
{
	
	repStars.fillAmount = PlayerPrefs.GetFloat("reputation")/100;
}

function Update () 
{
moneyDisplayObj.text = "£" + money.money.ToString("f2");
stockDisplayObj.text = "Stock: " + columnScript.numberOfMealsInStock.ToString();

}
