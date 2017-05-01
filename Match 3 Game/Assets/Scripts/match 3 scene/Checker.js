#pragma strict
import System.Collections.Generic;

public var obj1: GameObject;
public var obj2: GameObject;
public var obj3: GameObject;
public var obj4: GameObject;
public var obj5: GameObject;
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
//public var foundObjs: GameObject[];
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
public var lastAmountObjsFound: int;
public var foundObjs: List.<GameObject>;
public var lastName: String;
public var amountFound: int;
public var matchedObjs: List.<GameObject>;
public var swap: Swap;
public var starsParticlePrefab: GameObject;
public var starsParticlePrefabMatch4: GameObject;
public var starsParticlePrefabMatch5: GameObject;

function Start()
{
	// get reference to swap script
	//swap = gameObject.FindGameObjectWithTag("swap").GetComponent(Swap);
}

function Update () 
{
//move collider over meals to see whats in the grid
//if checked means it will go in the reverse direction as its already moved to the other side of the grid. a more suitable name is needed
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
		lastAmountObjsFound = objectsHit;
	}
	else
	{
		//reset this to 0 after checking, so next check works properly
		objectsHit = 0;
	}
}

//for each meal that we collide with set the obj variables
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
		}
	}
}

//now we have found the objects its time to check if theres a match
function CheckMatches()
{
if(objectsHit > 0)
{
//for each object found add it too a list so we can loop through it
	matchedObjs.Clear();
	amountFound = 0;
	foundObjs.Clear();
	if (obj1 != null)
	foundObjs.Add (obj1);
	if (obj2 != null)
	foundObjs.Add (obj2);
	if (obj3 != null)
	foundObjs.Add (obj3); 
	if (obj4 != null)
	foundObjs.Add (obj4);
	if (obj5 != null)
	foundObjs.Add (obj5); 
	lastName = foundObjs[0].name;

	// for the amount of objs the checker has found, loop through them
	for(var i = 0; i < (lastAmountObjsFound); i++)
	{
	//if names are the same then its the same meal
		if(foundObjs[i].name == lastName)
		{
			//amoount found is the amount of meals in a row found
			amountFound ++;
			//matchobjs is a list of the objects that are a match
			matchedObjs.Add(foundObjs[i]);
		}
		else
		{
			if (amountFound == 3)
			{
				Debug.Log(gameObject.name + " new match 3");
				ExecuteMatch();
				return;
			}
			if (amountFound == 4)
			{	
				Debug.Log(gameObject.name + " new match 4");
				ExecuteMatch();
				return;
				
			}
			if (amountFound == 5)
			{
				Debug.Log(gameObject.name + " new match 5");
				ExecuteMatch();
				return;
				
			}
			//if this obj dont match the one before
			lastName = foundObjs[i].name;
			amountFound = 1;
			matchedObjs.Clear();
			matchedObjs.Add(foundObjs[i]);
			
		}
	}
	if (amountFound == 3)
	{
		Debug.Log(gameObject.name + " new match 3");
		ExecuteMatch();
				return;
		
	}
	if (amountFound == 4)
	{	
		Debug.Log(gameObject.name + " new match 4");
		ExecuteMatch();
				return;
		
	}
	if (amountFound == 5)
	{
		Debug.Log(gameObject.name + " new match 5");
		ExecuteMatch();
				return;
		
	}
	}
}
function ExecuteMatch()
{
	var validMatch: boolean;
	//if we matched more than two objects in this row or colomn
	if (matchedObjs.Count > 2)
	{
		for(var matchObj: GameObject in matchedObjs)
		{
		//check each one to see if it contains the meal the player moved, this causes an error i have found at a later date. if you swap a meal with the meal you want to make at match with it wont work. you have to drag in the meal that makes the match.
			if( matchObj == Swap.lastObjMoved)
			{
				validMatch = true;
				swap.matchFoundInChecker = true;
				Debug.Log("bool set");
			}
		}
		//if it contains the meal the user moved its valid so we get a ready meal ready to serve and replace the meals with new meals
		if (validMatch)
		{
		var  madeMeal = Instantiate(readyMealObj, readyMealSpawnPoint, transform.rotation);
		madeMeal.GetComponent.<ReadyMeal>().mealName =  matchedObjs[0].name;
		madeMeal.GetComponent.<ReadyMeal>().amountMatched = amountFound;
		for(var matchObj: GameObject in matchedObjs)
		{
			var pos: Vector2;
			pos.x = matchObj.transform.position.x;
			pos.y = 8;
			if (columnScript.numberOfMealsInStock > 0)
			{
			Instantiate(tile, pos, transform.rotation);
			columnScript.numberOfMealsInStock --;
			}
			switch (amountFound)
			{
			case 3:Instantiate(starsParticlePrefab, matchObj.transform.position, transform.rotation);
			break;
			case 4:Instantiate(starsParticlePrefabMatch4, matchObj.transform.position, transform.rotation);
			break;
			case 5:Instantiate(starsParticlePrefabMatch5, matchObj.transform.position, transform.rotation);
			break;
			
			}
			Destroy(matchObj);
		}
		matchedObjs.Clear();
		}
	}
}
//check if the match contains the meal that the player moved
function CheckForLastObj()
{
	for(var matchObj: GameObject in matchedObjs)
		{
			if( matchObj == Swap.lastObjMoved)
			{
				swap.SwapBack();
				Debug.Log("swapback");
			}
		}
}