#pragma strict
public var order: String;
public var meals: String[];
public var stopPoint: Vector2;
public var speed: float;
public var mealSprites: Sprite[];
public var mealSpritesBakery: Sprite[];
public var orderSpriteObj: GameObject;
public var speechBubbleObj: GameObject;
public var rating: float;
public var customerSatisfaction: CustomerSatisfaction;
public var ratingDecreaseSpeed: float;
public var timeWaited: float;
public var timeToWaitUntilOrder: float;
public var ordered: boolean; 





function Start () 
{
		customerSatisfaction = gameObject.FindGameObjectWithTag("CustomerSatisfaction").GetComponent.<CustomerSatisfaction>();

		//rating start at 10 and decreases over time
		rating = 10;

		//make a random order
		var rand = Random.Range (0,5);
		order = meals[rand];

		var i: int; 
		switch(order)
		{
			case "blue": i = 0;
			break;
			case "green": i = 1;
			break;
			case "white": i = 2;
			break;
			case "red": i = 3;
			break;
			case "black": i = 4;
			break;
		}

		//change the array of sprites we use depending on business active
		switch(PlayerPrefs.GetString ("currentBusiness"))
		{
		case "FastFood": orderSpriteObj.GetComponent.<SpriteRenderer>().sprite = mealSprites[i];
		break;
		case "Bakery": orderSpriteObj.GetComponent.<SpriteRenderer>().sprite = mealSpritesBakery[i];
		break;
		}


}

function Update () 
{
	timeWaited += 1 * Time.deltaTime;

	if(timeWaited > timeToWaitUntilOrder)
	{
		MakeOrder();
	}
		if (transform.position.x > stopPoint.x){
			transform.position.x += speed * Time.deltaTime;
		}
	if(ordered)
		rating += ratingDecreaseSpeed * Time.deltaTime;
}

function MakeOrder()
{
	speechBubbleObj.SetActive(true);
	ordered = true;
}
function SendRating(perfectMeal: boolean)
{
	//stop rating going over 10, also if served a match 5 meal make rating 10
	if(rating > 10 || perfectMeal == true)
	{
		rating = 10;
		//check perfect meals are working
		Debug.Log("perfect meal");
	}

	customerSatisfaction.customerRatingsTotal += rating;
	customerSatisfaction.numberOfRatings ++;
}