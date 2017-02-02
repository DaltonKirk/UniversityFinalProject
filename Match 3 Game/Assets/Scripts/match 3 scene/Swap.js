#pragma strict
//Attach this script to an empty gameobject.
//When you click on a sprite with a collider it will tell you it's name.
public var worldPoint: Vector2;
public var firstObjColumn: int;
public var secondObjColumn: int;
public var pos1: Vector2;
public var hit: RaycastHit2D;
public var worldPoint2: Vector2;
public var pos2: Vector2;
public var hit2: RaycastHit2D;
public var checkScript: runChecker;
static var lastObjMoved: GameObject;
function Update() {
    //If the left mouse button is clicked.
    if (Input.GetMouseButtonDown(0)) {
        //Get the mouse position on the screen and send a raycast into the game world from that position.
        worldPoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        hit = Physics2D.Raycast(worldPoint, Vector2.zero);
        //If something was hit, the RaycastHit2D.collider will not be null.
        if (hit.collider != null && hit.collider.gameObject.tag == "obj") {
			
            pos1 = hit.collider.gameObject.transform.position; //Get Position of first obj
			firstObjColumn = hit.collider.gameObject.GetComponent.<meal>().myColumn; //Get column number of first obj
        }
    }

       if (Input.GetMouseButtonUp(0)) {
        //Get the mouse position on the screen and send a raycast into the game world from that position.
        worldPoint2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        hit2 = Physics2D.Raycast(worldPoint2, Vector2.zero);
        //If something was hit, the RaycastHit2D.collider will not be null.
        if (hit2.collider != null  && hit.collider.gameObject.tag == "obj") {
			
            pos2 = hit2.collider.gameObject.transform.position; // Get position of secong obj
			secondObjColumn = hit2.collider.gameObject.GetComponent.<meal>().myColumn; //Get 2nd obj column number
            hit.collider.gameObject.transform.position = pos2; //swap the objs position
            hit2.collider.gameObject.transform.position = pos1;//swap the objs postion
			hit.collider.gameObject.GetComponent.<meal>().myColumn = secondObjColumn; //swap column number
			hit2.collider.gameObject.GetComponent.<meal>().myColumn = firstObjColumn; //swap column number
			lastObjMoved = hit.collider.gameObject;
			
			Check();
			
        }
    }
}
function Check()
{
	checkScript.Scan();
	yield WaitForSeconds(0.5);
	checkScript.RunAllChecks();
}