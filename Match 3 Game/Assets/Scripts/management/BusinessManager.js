#pragma strict

public var bakeryPurchased: boolean;
public var bakeryPrice: float;
public var managementSceneUI: ManagementSceneUI;

function Start()
{
	//Load purchases
	bakeryPurchased = (PlayerPrefs.GetInt("bakeryPurchased") != 0);
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
	}
}
