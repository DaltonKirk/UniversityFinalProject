#pragma strict
//fast food sprites
public var sprites: Sprite[];
public var spritesBakery: Sprite[];
//names of meals
public var names: String[];
public var generator: GameObject;
public var objRB: Rigidbody2D;
public var matching: boolean;
public var settleTime: float;
public var settled: boolean;
private var lifetime: float;


function Start () 
{
	var currentBusiness = PlayerPrefs.GetString("currentBusiness");
	objRB = GetComponent.<Rigidbody2D>();

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
//if the obj has not settled then the checkers will ignore them
	if (gameObject.GetComponent.<Rigidbody2D>().velocity.y == 0 && !settled)
	{
		settleTime += 1 * Time.deltaTime;
		if (settleTime > 0.3)
		{
		gameObject.tag = "obj";
		settled = true;
		}
	}
//if the bug occurs when two matches happen at once delete the one outside the grid(not a good fix but too late to re code how matches work)
	lifetime += 1 * Time.deltaTime;
	if(lifetime > 2 && transform.position.y > 4)
	{
		Destroy(gameObject);
	}
}