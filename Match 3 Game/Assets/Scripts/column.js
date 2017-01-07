#pragma strict

public var numberOfColumns: int;
static var setNumberOfColumns: int;
public var numberOfItems: int;
public var spacing: int;
public var startPos: Vector2;
public var initStartPos: Vector2;
public var tile: GameObject;
static var currentColumn: int;
static var finishedSpawning: boolean;
public var columns: Vector2[];

function Start () 
{
//so we know what to set the current column to in the meal script
setNumberOfColumns = numberOfColumns;
initStartPos = startPos;


for (var x = 0; x < numberOfItems; x++)
{
	for (var i = 0; i < numberOfColumns; i++)
	{
	//var z = Random.Range(0,tiles.length);
		Instantiate (tile, startPos, transform.rotation);
		columns[i] = startPos;
	yield WaitForSeconds(0.5);
		
		startPos.x += spacing;

	
	}	
	startPos = initStartPos;
	yield WaitForSeconds(0.5);
}
finishedSpawning = true;
}

function Update () 
{
	
}
public function Spawn()
{
for (var i = 0; i < 3; i++)
	{
	Instantiate (tile, columns[currentColumn], transform.rotation);
	}
	

	
	Debug.Log ("spawn new stuff");
}