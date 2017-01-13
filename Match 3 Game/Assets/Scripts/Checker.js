#pragma strict

public var obj1: GameObject;
public var obj2: GameObject;
public var obj3: GameObject;
public var obj4: GameObject;
public var obj5: GameObject;
public var obj6: GameObject;
public var objectsHit: int;
public var isChecking: boolean;
public var checkTimer: float;
public var checkTime: float;
public var speed: float;
public var foundObjs: GameObject[];
public var columnScript: column;
public var col: int;
public var checked: boolean;
public var matchFound: boolean;
public var consec: int = 0;

function Start () 
{

}

function Update () 
{
if (objectsHit == 5)
{
objectsHit = 0;
}
	if (isChecking)
	{	
		if(gameObject.name.Contains("HChecker") && !checked)
		transform.position.x += speed * Time.deltaTime;

		if(gameObject.name.Contains("HChecker") && checked)
		transform.position.x -= speed * Time.deltaTime;

		if(gameObject.name.Contains("VChecker") && !checked)
		transform.position.y -= speed * Time.deltaTime;

		if(gameObject.name.Contains("VChecker") && checked)
		transform.position.y += speed * Time.deltaTime;

		checkTimer += 1 * Time.deltaTime;

		if(checkTimer > checkTime)
		{
		checkTimer = 0;
		isChecking = false;
		checked = !checked;
		}

	}
	if(Input.GetKeyDown (KeyCode.J))
	{
		CheckMatches();
	}
	if(Input.GetKeyDown (KeyCode.L))
	{
		isChecking = true;
	}
}

function OnTriggerEnter2D(other:Collider2D)
{
	if (other.tag == "obj")
	{
		objectsHit ++;
		switch(objectsHit)
		{
			case 1: obj1 = other.gameObject;
			break;
			case 2: obj2 = other.gameObject;
			break;
			case 3: obj3 = other.gameObject;
			break;
			case 4: obj4 = other.gameObject;
			break;
			case 5: obj5 = other.gameObject;
			break;
			case 6: obj6 = other.gameObject;
			break;
		}
	}
}
function CheckMatches()
{
	
	foundObjs[0] = obj1; foundObjs[1] = obj2; foundObjs[2] = obj3; foundObjs[3] = obj4; foundObjs[4] = obj5;
	//Check First obj
		if(foundObjs[0].name == foundObjs[0+1].name) // if 2
		{
			if(foundObjs[0].name == foundObjs[0+2].name) // if 3
			{
				consec = 3;
				matchFound = true;
				if(foundObjs[0].name == foundObjs[0+3].name) // if 4
				{	
					consec = 4;
					matchFound = true;
					if(foundObjs[0].name == foundObjs[0+4].name) // if 5
					{
						consec = 5;
						matchFound = true;
					}
				}
				Debug.Log(gameObject.name + " " + consec);
				}
			}
		//Check second obj
		if(!matchFound)
		{
			if(foundObjs[1].name == foundObjs[1+1].name) // if 2
			{
				if(foundObjs[1].name == foundObjs[1+2].name) // if 3
				{
				consec = 3;
				matchFound = true;
					if(foundObjs[1].name == foundObjs[1+3].name) // if 4
					{
						consec = 4;
						matchFound = true;
					}
					Debug.Log(gameObject.name + " " + consec);
				}
			}
		}
		//Check third obj
		if (!matchFound)
		{
			if(foundObjs[2].name == foundObjs[2+1].name) // if 2
			{
				if(foundObjs[2].name == foundObjs[2+2].name) // if 3
				{
					consec = 3;
					matchFound = true;
					Debug.Log(gameObject.name + " " + consec);
				}
			}
		}
		matchFound = false;
}




