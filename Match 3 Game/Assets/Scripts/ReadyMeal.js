#pragma strict
public var worldPoint: Vector2;
public var currentWorldPoint: Vector2;
public var pickedUpObj: GameObject;
public var hit: RaycastHit2D;
public var mealName: String;
public var isPickedUp: boolean;


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
        }
    }
}
function OnTriggerStay2D(other:Collider2D)
{
	if (!isPickedUp && other.gameObject.tag == "customer")
	{
		if (mealName == other.GetComponent.<Customer>().order)
		{
			Debug.Log("served");
			Destroy (other.gameObject);
			Destroy (this.gameObject);
		}
		Debug.Log ("colliding");
	}
}
