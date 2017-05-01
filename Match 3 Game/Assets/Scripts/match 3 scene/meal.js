#pragma strict

public var sprites: Sprite[];
public var spritesBakery: Sprite[];
public var names: String[];
public var generator: GameObject;
public var objRB: Rigidbody2D;
public var matching: boolean;
public var settleTime: float;
public var settled: boolean;


function Start () 
{
	var currentBusiness = PlayerPrefs.GetString("currentBusiness");
	objRB = GetComponent.<Rigidbody2D>();
	//generator = gameObject.FindGameObjectWithTag ("gen");
//	myColumn = column.currentColumn;
	column.currentColumn ++;
		if(column.currentColumn == column.setNumberOfColumns)
		{
			column.currentColumn = 0;
		}
//Set sprite depending on business loaded
	switch (currentBusiness)
	{
	case "FastFood": 
		var f = Random.Range(0, names.length);
		name =  names[f];
		GetComponent.<SpriteRenderer>().sprite = sprites[f];
	break;

	case "Bakery":
		var b = Random.Range(0, names.length);
		name =  names[b];
		GetComponent.<SpriteRenderer>().sprite = spritesBakery[b];
	break;

	}
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
}