#pragma strict

public var obj1: GameObject;
public var obj2: GameObject;
public var obj3: GameObject;
public var obj4: GameObject;
public var obj5: GameObject;
public var obj6: GameObject;
public var matchedObj1: GameObject;
public var matchedObj2: GameObject;
public var matchedObj3: GameObject;
public var matchedObj4: GameObject;
public var matchedObj5: GameObject;
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
public var tile: GameObject;
public var pos1: Vector3;
public var pos2: Vector3;
public var pos3: Vector3;
public var pos4: Vector3;
public var pos5: Vector3;
public var readyMealObj: GameObject;
public var readyMealSpawnPoint: Vector3;

function Update () 
{

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
					objectsHit = 0;
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
				matchedObj1 = foundObjs[0];
				matchedObj2 = foundObjs[1];
				matchedObj3 = foundObjs[2];
				if(foundObjs[0].name == foundObjs[0+3].name) // if 4
				{	
					consec = 4;
					matchFound = true;
					matchedObj1 = foundObjs[0];
					matchedObj2 = foundObjs[1];
					matchedObj3 = foundObjs[2];
					matchedObj4 = foundObjs[3];
					if(foundObjs[0].name == foundObjs[0+4].name) // if 5
					{
						consec = 5;
						matchFound = true;
						matchedObj1 = foundObjs[0];
						matchedObj2 = foundObjs[1];
						matchedObj3 = foundObjs[2];
						matchedObj4 = foundObjs[3];
						matchedObj5 = foundObjs[4];
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
				matchedObj1 = foundObjs[1];
				matchedObj2 = foundObjs[2];
				matchedObj3 = foundObjs[3];
					if(foundObjs[1].name == foundObjs[1+3].name) // if 4
					{
						consec = 4;
						matchFound = true;
						matchedObj1 = foundObjs[1];
						matchedObj2 = foundObjs[2];
						matchedObj3 = foundObjs[3];
						matchedObj4 = foundObjs[4];
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
					matchedObj1 = foundObjs[2];
					matchedObj2 = foundObjs[3];
					matchedObj3 = foundObjs[4];
					Debug.Log(gameObject.name + " " + consec);
				}
			}
		}
		if(matchFound)
		{
		Match();
		matchFound = false;
		}
}

function Match()
{
	switch (consec)
	{
		case 3:
				//spawn ready meal
				var  madeMeal1 = Instantiate(readyMealObj, readyMealSpawnPoint, transform.rotation);
				madeMeal1.GetComponent.<ReadyMeal>().mealName = matchedObj1.name;
				//Save Positions
				pos1.x = matchedObj1.transform.position.x;
				pos2.x = matchedObj2.transform.position.x;
				pos3.x = matchedObj3.transform.position.x;
				//Spawn New ones
				Spawn1();
				Spawn2();
				Spawn3();
				//Delete objs
				Destroy(matchedObj1);
				Destroy(matchedObj2);
				Destroy(matchedObj3);
				
				
		break;
		case 4:
				//spawn ready meal
				var  madeMeal2 = Instantiate(readyMealObj, readyMealSpawnPoint, transform.rotation);
				madeMeal2.GetComponent.<ReadyMeal>().mealName =  matchedObj1.name;
				//Save Positions
				pos1.x = matchedObj1.transform.position.x;
				pos2.x = matchedObj2.transform.position.x;
				pos3.x = matchedObj3.transform.position.x;
				pos4.x = matchedObj4.transform.position.x;
				//Spawn New ones
				Spawn1();
				Spawn2();
				Spawn3();
				Spawn4();
				//Delete objs
				Destroy(matchedObj1);
				Destroy(matchedObj2);
				Destroy(matchedObj3);
				Destroy(matchedObj4);
				
		break;
		case 5:
				//spawn ready meal
				var  madeMeal3 = Instantiate(readyMealObj, readyMealSpawnPoint, transform.rotation);
				madeMeal3.GetComponent.<ReadyMeal>().mealName =  matchedObj1.name;
				//Save Positions
				pos1.x = matchedObj1.transform.position.x;
				pos2.x = matchedObj2.transform.position.x;
				pos3.x = matchedObj3.transform.position.x;
				pos4.x = matchedObj4.transform.position.x;
				pos5.x = matchedObj5.transform.position.x;
				//Spawn New ones
				Spawn1();
				Spawn2();
				Spawn3();
				Spawn4();
				Spawn5();
				//Delete objs
				Destroy(matchedObj1);
				Destroy(matchedObj2);
				Destroy(matchedObj3);
				Destroy(matchedObj4);
				Destroy(matchedObj5);
				
		break;

	}


}
function Spawn1()
{
	Instantiate (tile, pos1, transform.rotation);
}
function Spawn2()
{
	Instantiate (tile, pos2, transform.rotation);
}
function Spawn3()
{
	Instantiate (tile, pos3, transform.rotation);
}
function Spawn4()
{
	Instantiate (tile, pos4, transform.rotation);
}
function Spawn5()
{
	Instantiate (tile, pos5, transform.rotation);
}




