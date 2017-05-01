#pragma strict

public var numberOfColumns: int;
static var setNumberOfColumns: int;
public var numberOfRows: int;
public var numberOfMealsInStock: int;
public var spacing: int;
public var startPos: Vector2;
public var initStartPos: Vector2;
public var tile: GameObject;
static var finishedSpawning: boolean;
public var columns: Vector2[];

function Start()
{
	numberOfMealsInStock = Stock.stock;
}

function SpawnGrid () 
{
//so we know what to set the current column to in the meal script
	setNumberOfColumns = numberOfColumns;
	initStartPos = startPos;


for (var x = 0; x < numberOfRows; x++)
	{
		for (var i = 0; i < numberOfColumns; i++)
		{
			if(numberOfMealsInStock > 0)
			{
				//spawn a meal in the grid if there is any in stock
				Instantiate (tile, startPos, transform.rotation);
				numberOfMealsInStock --;
			}
			columns[i] = startPos;
			yield WaitForSeconds(0.1);
			startPos.x += spacing;
		}	
		startPos = initStartPos;
		yield WaitForSeconds(0.1);
	}
	finishedSpawning = true;
}
