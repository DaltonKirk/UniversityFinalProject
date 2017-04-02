#pragma strict
import UnityEngine.UI;

public var repDisplay: Image;
public var repChangeText: Text;
public var avgRatingText: Text;
public var moneyMadeText: Text;
public var summaryPanel: GameObject;
public var businessManager: BusinessManager;

public var bakeryPriceText: Text;

function Start()
{
	repDisplay.fillAmount = PlayerPrefs.GetFloat("reputation")/100;
	repChangeText.text = "Reputation Change: " + PlayerPrefs.GetFloat("repChange").ToString("f2");
	avgRatingText.text = "Average Rating: " + (PlayerPrefs.GetFloat("customerRatingsAveragePercentage")*10).ToString("f1")+"/10";
	moneyMadeText.text = "Money Made: ";
	UpdateBusinessesOwnedText();

}
function GoToRestaurant()
{
	Application.LoadLevel("main");
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