#pragma strict
import UnityEngine.UI;

public var repDisplay: Text;
public var repChangeText: Text;
public var avgRatingText: Text;
public var moneyMadeText: Text;
public var summaryPanel: GameObject;

function Start()
{
	repDisplay.text = "Reputation: " + PlayerPrefs.GetFloat("reputation").ToString("f2");
	repChangeText.text = "Reputation Change: " + PlayerPrefs.GetFloat("repChange").ToString("f2");
	avgRatingText.text = "Average Rating: " + (PlayerPrefs.GetFloat("customerRatingsAveragePercentage")*10).ToString("f1")+"/10";
	moneyMadeText.text = "Money Made: ";
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