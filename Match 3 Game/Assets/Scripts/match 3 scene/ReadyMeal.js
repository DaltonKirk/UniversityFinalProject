#pragma strict
public var worldPoint: Vector2;
public var currentWorldPoint: Vector2;
public var pickedUpObj: GameObject;
public var hit: RaycastHit2D;
public var mealName: String;
public var isPickedUp: boolean;
public var readyMealSpawnPos: GameObject;
public var sprites: Sprite[];
public var spritesBakery: Sprite[];
public var customerManager: CustomerManager;
public var customerServedEffectPrefab: GameObject;
private var mealPrice: float;
public var MealPrice: float;
public var amountMatched: int;
public var pEffectPrefabMatch4: GameObject;
public var pEffectPrefabMatch5: GameObject;
public var perfectMeal: boolean;
public var swapScript: Swap;


function Start()
{
	swapScript = GameObject.FindGameObjectWithTag("swap").GetComponent(Swap);
//Set the private var with the public var that you can change in the inspector
	mealPrice = MealPrice;
// if the match contain 4 or more, create particle effect to make shiny
	if(amountMatched == 4)
	{
		var  pEffectMatch4 = Instantiate(pEffectPrefabMatch4, transform.position, transform.rotation);
		pEffectMatch4.transform.SetParent (gameObject.transform, false);
		// Setting as parent, to make the obj follow this obj takes too long and ends up being offset so ill have to set pos again
		pEffectMatch4.transform.position = transform.position;
		//set mealPrice to give a bonus to the player
		mealPrice = 20;

	} else if(amountMatched == 5) {

		var  pEffectMatch5 = Instantiate(pEffectPrefabMatch5, transform.position, transform.rotation);
		pEffectMatch5.transform.SetParent (gameObject.transform, false);
		// Setting as parent, to make the obj follow this obj takes too long and ends up being offset so ill have to set pos again
		pEffectMatch5.transform.position = transform.position;
		//set mealPrice to give a bonus to the player
		mealPrice = 25;
		perfectMeal = true;
		
	}

	customerManager = gameObject.FindGameObjectWithTag("CustomerManager").GetComponent.<CustomerManager>();
	readyMealSpawnPos = gameObject.FindGameObjectWithTag ("readyMealSpawnPos");

	//set sprite depending on meal name and what business is open
	var i: int; 
	switch(mealName)
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
	switch(PlayerPrefs.GetString ("currentBusiness"))
		{
		case "FastFood": gameObject.GetComponent.<SpriteRenderer>().sprite = sprites[i];
		break;
		case "Bakery": gameObject.GetComponent.<SpriteRenderer>().sprite = spritesBakery[i];
		break;
		}
	
}

function Update() 
{
	if(pickedUpObj != null)
	{
		pickedUpObj.transform.position = currentWorldPoint;
		isPickedUp = true;
	}
	currentWorldPoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	//when you click send raycast at that point
    if (Input.GetMouseButtonDown(0)) 
	{
		//Get the mouse position on the screen and send a raycast into the game world from that position.
        worldPoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        hit = Physics2D.Raycast(worldPoint, Vector2.zero);
		//if you clicked an obj and has tag readmeal set it to pickedupOBj so it can be moved
        if (hit.collider != null && hit.collider.gameObject.tag == "readymeal") 
		{
			pickedUpObj = hit.collider.gameObject;
        }
    }
	
	//if you let go of the mouse unassign the var pickedupobj to stop it moving
       if (Input.GetMouseButtonUp(0)) 
	   {
        
        if (pickedUpObj != null) 
		{
            pickedUpObj = null;
			isPickedUp = false;
			transform.position = readyMealSpawnPos.transform.position;

        }
    }
}
function OnCollisionStay2D(other:Collision2D)
{
	if (other.gameObject.tag == "customer") 
	{
		if (mealName == other.gameObject.GetComponent.<Customer>().order)
		{
			other.gameObject.GetComponent.<Customer>().rating += 1;
		} else {
			other.gameObject.GetComponent.<Customer>().rating = 0;
		}
			other.gameObject.GetComponent.<Customer>().SendRating(perfectMeal);
			customerManager.CustomerServed();
			money.money += mealPrice;
			var moneyEarned:float = PlayerPrefs.GetFloat("moneyEarned");
			moneyEarned += mealPrice;
			PlayerPrefs.SetFloat("moneyEarned", moneyEarned);
			Debug.Log("served");
			var effect = Instantiate(customerServedEffectPrefab,other.transform.position,transform.rotation);
			effect.GetComponent(MoveUpAndFade).rating = other.gameObject.GetComponent.<Customer>().rating;
			Destroy (other.gameObject);
			Destroy (this.gameObject);
		
		Debug.Log ("colliding");
	}

	if(other.gameObject.tag == "bin")
	{
		swapScript.binned = true;
		Destroy(gameObject);
	}
}
