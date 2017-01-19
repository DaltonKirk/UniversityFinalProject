#pragma strict
public var order: String;
public var meals: String[];
public var orderText: TextMesh;
public var stopPoint: Vector2;
public var speed: float;



function Start () 
{
		var rand = Random.Range (0,4);
		order = meals[rand];
		orderText.text = order;
}

function Update () 
{
		if (transform.position.x > stopPoint.x)
			transform.position.x += speed * Time.deltaTime;
}
function OnCollisionEnter2D()
{
	speed = 0;
}