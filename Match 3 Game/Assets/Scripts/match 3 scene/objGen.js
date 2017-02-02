#pragma strict
public var slots: Vector2[];
public var slotFilled: GameObject[];
public var colourSlot: String[];
public var pos: Vector2;
public var blueObj: GameObject;
public var greenObj: GameObject;
public var redObj: GameObject;
public var gridHeight: int;
public var gridWidth: int;


function Start () 
{

	for (var i = 0; i < slots.length; i ++)
	 	{
		 	pos = slots[i];
		 	var car:int;
		 	car = Random.Range(1,4);
		 	Debug.Log("this has run");


			switch(car)
			{
			case 1: 
				var blue = Instantiate(blueObj,pos,transform.rotation);
				blue.transform.parent = transform;
				colourSlot[i] = "blue";

			break;
			case 2:
				var green = Instantiate(greenObj,pos,transform.rotation);
				green.transform.parent = transform;
				colourSlot[i] = "green";
				
				

			break;
			case 3: 
				var red	= Instantiate(redObj,pos,transform.rotation);
				red.transform.parent = transform;
				colourSlot[i] = "red";
				
				

			break;
			}
		}

	transform.position.x = -14;
	transform.position.y = -2;

 

}


function Update () 
{

}

function Checker()
{
	for (var i = 0; i < slots.length; i++)
	{
		
	}
}