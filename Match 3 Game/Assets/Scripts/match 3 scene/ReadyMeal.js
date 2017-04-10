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


function Start()
{
	customerManager = gameObject.FindGameObjectWithTag("CustomerManager").GetComponent.<CustomerManager>();
	readyMealSpawnPos = gameObject.FindGameObjectWithTag ("readyMealSpawnPos");
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
		//gameObject.GetComponent.<BoxCollider2D>().isTrigger = true;
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
			//gameObject.GetComponent.<BoxCollider2D>().isTrigger = false;
			transform.position = readyMealSpawnPos.transform.position;

        }
    }
}
function OnCollisionStay2D(other:Collision2D)
{
	if (other.gameObject.tag == "customer") //!isPickedUp && 
	{
		if (mealName == other.gameObject.GetComponent.<Customer>().order)
		{
			other.gameObject.GetComponent.<Customer>().rating += 1;
		} else {
			other.gameObject.GetComponent.<Customer>().rating = 0;
		}
			other.gameObject.GetComponent.<Customer>().SendRating();
			customerManager.CustomerServed();
			money.money += 15;
			Debug.Log("served");
			var effect = Instantiate(customerServedEffectPrefab,other.transform.position,transform.rotation);
			effect.GetComponent(MoveUpAndFade).rating = other.gameObject.GetComponent.<Customer>().rating;
			Destroy (other.gameObject);
			Destroy (this.gameObject);
		
		Debug.Log ("colliding");
	}
}
