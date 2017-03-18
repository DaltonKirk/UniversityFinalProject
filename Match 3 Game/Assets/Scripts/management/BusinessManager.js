#pragma strict

public var bakeryPurchased: boolean;
public var bakeryPrice: float;
public var managementSceneUI: ManagementSceneUI;

public var currentBusiness: String;

function Start()
{
	//if a business is not selected select fast food
	var savedBusiness = PlayerPrefs.GetString("currentBusiness");
	if (savedBusiness== "")
	{
		savedBusiness = "FastFood";
		PlayerPrefs.SetString("currentBusiness", savedBusiness);
	}
	//Load purchases
	bakeryPurchased = (PlayerPrefs.GetInt("bakeryPurchased") != 0);
	managementSceneUI.UpdateBusinessesOwnedText();
}
//select fast food and save
function FastFood()
{
		currentBusiness = "FastFood";
		PlayerPrefs.SetString("currentBusiness", currentBusiness);
}
//Buy Bakery and save
function BakeryButton()
{
	if(money.money >= bakeryPrice)
	{
		money.money -= bakeryPrice;
		bakeryPurchased = true;
		PlayerPrefs.SetInt("bakeryPurchased", (bakeryPurchased ? 1 : 0));
		managementSceneUI.UpdateBusinessesOwnedText();
		currentBusiness = "Bakery";
		PlayerPrefs.SetString("currentBusiness", currentBusiness);
	}
}
