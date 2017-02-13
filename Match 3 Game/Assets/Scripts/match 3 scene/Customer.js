#pragma strict
public var order: String;
public var meals: String[];
public var orderText: TextMesh;
public var stopPoint: Vector2;
public var speed: float;
public var mealSprites: Sprite[];
public var orderSpriteObj: GameObject;
public var speechBubbleObj: GameObject;
public var rating: float;
public var customerSatisfaction: CustomerSatisfaction;
public var ratingDecreaseSpeed: float;



function Start () 
{
		customerSatisfaction = gameObject.FindGameObjectWithTag("CustomerSatisfaction").GetComponent.<CustomerSatisfaction>();
		rating = 10;

		var rand = Random.Range (0,4);
		order = meals[rand];
		orderText.text = order;
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
		orderSpriteObj.GetComponent.<SpriteRenderer>().sprite = mealSprites[i];

}

function Update () 
{
		if (transform.position.x > stopPoint.x){
			transform.position.x += speed * Time.deltaTime;
		} else {
			MakeOrder();
		}
		rating += ratingDecreaseSpeed * Time.deltaTime;
}
function OnCollisionStay2D()
{
	speed = 0;
}
function MakeOrder()
{
	speechBubbleObj.SetActive(true);
}
function SendRating()
{
	customerSatisfaction.customerRatingsTotal += rating;
	customerSatisfaction.numberOfRatings ++;
}