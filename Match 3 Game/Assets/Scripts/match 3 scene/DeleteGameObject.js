#pragma strict
//Deletes obj after set time
public var timeUntilDelete: float;

function Start () 
{
	yield WaitForSeconds(timeUntilDelete);
	Destroy(gameObject);	
}
