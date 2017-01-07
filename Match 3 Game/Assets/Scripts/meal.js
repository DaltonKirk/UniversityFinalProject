#pragma strict

public var colour: Color[];
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

function Start () 
{
	generator = gameObject.FindGameObjectWithTag ("gen");
	myColumn = column.currentColumn;
	column.currentColumn ++;
		if(column.currentColumn == column.setNumberOfColumns)
		{
			column.currentColumn = 0;
		}
	
	var i = Random.Range(0, names.length);
	name =  names[i];
	GetComponent.<SpriteRenderer>().color = colour[i];
}

function Update () 
{

	if (topFeeler == gameObject.name && topFeeler == bottomFeeler && column.finishedSpawning)
	{
		Debug.Log ("3 in a row!!");
		Destroy(topObj);
		Destroy(bottomObj);
		Destroy (this.gameObject);
		generator.GetComponent.<column>().currentColumn = myColumn;
		generator.GetComponent.<column>().Spawn();
	}
	if (leftFeeler == gameObject.name && leftFeeler == rightFeeler && column.finishedSpawning)
	{
	Debug.Log ("3 in a row!!");
	Destroy(leftObj);
	Destroy(rightObj);
	Destroy (this.gameObject);
	//Spawn123();
	}

}
