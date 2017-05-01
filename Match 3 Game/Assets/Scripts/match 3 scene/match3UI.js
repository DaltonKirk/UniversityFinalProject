#pragma strict
//this script just manages a couple of ui elements
import UnityEngine.UI;
public var stockDisplayObj: Text;
public var repStars: Image;
public var columnScript: column;

function Start () 
{
	repStars.fillAmount = PlayerPrefs.GetFloat("reputation")/100;
}

function Update () 
{
	stockDisplayObj.text = columnScript.numberOfMealsInStock.ToString();
}
