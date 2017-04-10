#pragma strict
import UnityEngine.UI;

public var bakeryPurchased: boolean;
public var bakeryPrice: float;
public var managementSceneUIScript: ManagementSceneUI;
public var fastFoodImage: Image;
public var bakeryImage: Image;
public var currentBusiness: String;

function Start()
{
	//if a business is not selected select fast food
	var savedBusiness = PlayerPrefs.GetString("currentBusiness");
	if (savedBusiness== "")
	{
		savedBusiness = "FastFood";
		PlayerPrefs.SetString("currentBusiness", savedBusiness);
		fastFoodImage.color = Color.green;
	}
	//Load purchases
	bakeryPurchased = (PlayerPrefs.GetInt("bakeryPurchased") != 0);
	managementSceneUIScript.UpdateBusinessesOwnedText();

	//colour saved selected business

	switch(savedBusiness)
	{
	case "FastFood": FastFood();
	break;
	case "Bakery": BakeryButton();
	break;
	}
}
//select fast food and save
function FastFood()
{
		currentBusiness = "FastFood";
		PlayerPrefs.SetString("currentBusiness", currentBusiness);
		ColourBusinessesWhite();
		fastFoodImage.color = Color.green;
}
//Buy Bakery and save
function BakeryButton()
{
if (!bakeryPurchased)
{
	if(money.money >= bakeryPrice)
	{
		money.money -= bakeryPrice;
		bakeryPurchased = true;
		PlayerPrefs.SetInt("bakeryPurchased", (bakeryPurchased ? 1 : 0));
		managementSceneUIScript.UpdateBusinessesOwnedText();
		currentBusiness = "Bakery";
		PlayerPrefs.SetString("currentBusiness", currentBusiness);
		ColourBusinessesWhite();
		bakeryImage.color = Color.green;
		
	}
} else {
	managementSceneUIScript.UpdateBusinessesOwnedText();
		currentBusiness = "Bakery";
		PlayerPrefs.SetString("currentBusiness", currentBusiness);
		ColourBusinessesWhite();
		bakeryImage.color = Color.green;
}
}
function ColourBusinessesWhite()
{
	fastFoodImage.color = Color.white;
	bakeryImage.color = Color.white;
}
