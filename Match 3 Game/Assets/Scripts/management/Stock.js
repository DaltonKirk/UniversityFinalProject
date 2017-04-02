#pragma strict
import UnityEngine.UI;

static var stock: int;
public var stockPrice: float;
public var stockDisplay: Text;

function Start()
{
	stock = PlayerPrefs.GetInt("stock");
	
	stockDisplay.text = stock.ToString();
}

function Buy1Stock()
{
	if(money.money >= stockPrice)
	{
		money.money -= stockPrice;
	stock ++;
	stockDisplay.text = stock.ToString();
	}
}
function Buy10Stock()
{
	if(money.money >= (stockPrice * 10))
	{
	money.money -= (stockPrice * 10);
	stock += 10;
	stockDisplay.text = stock.ToString();
	}
}
