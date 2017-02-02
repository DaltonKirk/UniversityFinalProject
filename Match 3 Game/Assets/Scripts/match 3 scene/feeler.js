#pragma strict
public var isTouching: String;
public var feelerName: String;
public var parent: GameObject;

function Start ()
{
	feelerName = gameObject.transform.name;
	parent = gameObject.transform.parent.gameObject;
}

function Update () {
	
}

function OnTriggerEnter2D(other: Collider2D)
{
Debug.Log("collided");
	if (other.tag == "obj")
	{
Debug.Log("hit tag obj");
		isTouching = other.GetComponent.<meal>().name;

		switch (feelerName)
		{
		case "topFeeler":
			parent.GetComponent.<meal>().topFeeler = isTouching;
			parent.GetComponent.<meal>().topObj = other.gameObject;
		break;
		case "bottomFeeler":
			parent.GetComponent.<meal>().bottomObj = other.gameObject;
			parent.GetComponent.<meal>().bottomFeeler = isTouching;
		break;
		case "leftFeeler":
			parent.GetComponent.<meal>().leftObj = other.gameObject;
			parent.GetComponent.<meal>().leftFeeler = isTouching;
		break;
		case "rightFeeler":
			parent.GetComponent.<meal>().rightObj = other.gameObject;
			parent.GetComponent.<meal>().rightFeeler = isTouching;
			break;
		}

	}

} 

