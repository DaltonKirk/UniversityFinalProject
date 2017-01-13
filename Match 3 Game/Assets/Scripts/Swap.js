#pragma strict
//Attach this script to an empty gameobject.
//When you click on a sprite with a collider it will tell you it's name.
public var worldPoint: Vector2;
public var pos1: Vector2;
public var hit: RaycastHit2D;
public var worldPoint2: Vector2;
public var pos2: Vector2;
public var hit2: RaycastHit2D;
function Update() {
    //If the left mouse button is clicked.
    if (Input.GetMouseButtonDown(0)) {
        //Get the mouse position on the screen and send a raycast into the game world from that position.
        worldPoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        hit = Physics2D.Raycast(worldPoint, Vector2.zero);
        //If something was hit, the RaycastHit2D.collider will not be null.
        if (hit.collider != null) {
            Debug.Log(hit.collider.name);
            pos1 = hit.collider.gameObject.transform.position;
        }
    }

       if (Input.GetMouseButtonUp(0)) {
        //Get the mouse position on the screen and send a raycast into the game world from that position.
        worldPoint2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        hit2 = Physics2D.Raycast(worldPoint2, Vector2.zero);
        //If something was hit, the RaycastHit2D.collider will not be null.
        if (hit2.collider != null) {
            Debug.Log(hit2.collider.name);
            pos2 = hit2.collider.gameObject.transform.position;
            Debug.Log(pos2);
            hit.collider.gameObject.transform.position = pos2;
            hit2.collider.gameObject.transform.position = pos1;
        }
    }
}