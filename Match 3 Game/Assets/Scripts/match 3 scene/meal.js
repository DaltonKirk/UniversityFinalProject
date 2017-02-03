#pragma strict

public var sprite: Sprite[];
public var names: String[];
public var topFeeler: String;
public var bottomFeeler: String;
public var leftFeeler: String;
public var rightFeeler: String;
public var topFeelerObj: GameObject;
public var leftObj: GameObject;
public var topObj: GameObject;
public var bottomObj: GameObject;
public var rightObj: GameObject;
public var myColumn: int;
public var generator: GameObject;
public var objRB: Rigidbody2D;
public var matching: boolean;
public var settleTime: float;
public var settled: boolean;


function Start () 
{
	objRB = GetComponent.<Rigidbody2D>();
	generator = gameObject.FindGameObjectWithTag ("gen");
	myColumn = column.currentColumn;
	column.currentColumn ++;
		if(column.currentColumn == column.setNumberOfColumns)
		{
			column.currentColumn = 0;
		}
	
	var i = Random.Range(0, names.length);
	name =  names[i];
	GetComponent.<SpriteRenderer>().sprite = sprite[i];
}

function Update () 
{
	if (gameObject.GetComponent.<Rigidbody2D>().velocity.y == 0 && !settled)
	{
		settleTime += 1 * Time.deltaTime;
		if (settleTime > 0.3)
		{
		gameObject.tag = "obj";
		settled = true;
		}
	}
/*
	if (topFeeler == gameObject.name && topFeeler == bottomFeeler && objRB.velocity.y == 0 && column.finishedSpawning && !matching) //if 3 in a row vertically
	{
	matching = true;
		Debug.Log ("3 in a row!!");
		//delete the matching objects
		Destroy(topObj);
		Destroy(bottomObj);
		Destroy (this.gameObject);
		generator.GetComponent.<column>().currentColumn = myColumn;
		generator.GetComponent.<column>().Spawn();
	matching = false;
		
	}
	if (leftFeeler == gameObject.name && leftFeeler == rightFeeler && objRB.velocity.y == 0 && column.finishedSpawning && !matching)// if 3 in a row horizontally
	{
	matching = true;
	Debug.Log ("3 in a row!!");
	//delete the matching objects
	Destroy(leftObj);
	Destroy(rightObj);
	Destroy (this.gameObject);
	generator.GetComponent.<column>().currentColumn = myColumn;
	generator.GetComponent.<column>().SpawnV();
	matching = false;
	
	}
	*/
}
/*

	if (topFeeler == gameObject.name)
	{
		topMatches ++;
		if (topObj1.name == gameObject.name)
		{
		topMatches ++;
			if (topFeeler3 == name)
			{
			topMatches ++;
			if (topFeeler4 == name)
			topMatches++;
			}
		}
	}


	*/