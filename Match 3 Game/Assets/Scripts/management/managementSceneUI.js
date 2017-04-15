#pragma strict
import UnityEngine.UI;

public var repDisplay: Image;
public var repChangeText: Text;
public var avgRatingText: Text;
public var moneyMadeText: Text;
public var stockDisplay: Text;
public var stockDisplayColour: Color;
public var summaryPanel: GameObject;
public var businessManager: BusinessManager;
public var lowOnStockPanel: GameObject;

public var bakeryPriceText: Text;

function Start()
{
	repDisplay.fillAmount = PlayerPrefs.GetFloat("reputation")/100;
	//repChangeText.text = "Reputation Change: " + PlayerPrefs.GetFloat("repChange").ToString("f2");
	//avgRatingText.text = "Average Rating: " + (PlayerPrefs.GetFloat("customerRatingsAveragePercentage")*10).ToString("f1")+"/10";
	//moneyMadeText.text = "Money Made: ";
	UpdateBusinessesOwnedText();

}
function GoToRestaurant()
{
	if(Stock.stock > 0)
	{
	OpenShop();
	} else if (Stock.stock < 30) {
	lowOnStockPanel.SetActive (true);
	TextFlash();
	}
}
function HideSummary()
{
	summaryPanel.SetActive(false);
}
function DeleteSave()
{
	PlayerPrefs.DeleteAll();
}
function UpdateBusinessesOwnedText()
{
	//if bakeryPurchased then show it as owned
	if(businessManager.bakeryPurchased)
	{
		bakeryPriceText.text = "Owned";
	}
}
function TextFlash()
{
stockDisplay.color = Color.red;
yield WaitForSeconds(0.2);
stockDisplay.color = stockDisplayColour;
yield WaitForSeconds(0.2);
stockDisplay.color = Color.red;
yield WaitForSeconds(0.2);
stockDisplay.color = stockDisplayColour;
yield WaitForSeconds(0.2);
}

function LowStockNoButton()
{
	lowOnStockPanel.SetActive (false);
}

function OpenShop()
{
	var playedBefore: boolean = true;
	PlayerPrefs.SetInt("PlayedBefore", (playedBefore ? 1 : 0));
	Debug.Log("saved: " + (PlayerPrefs.GetInt("PlayedBefore") != 0));
	Application.LoadLevel("main");
}