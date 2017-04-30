#pragma strict
public var timeUntilDelete: float;

function Start () 
{
	yield WaitForSeconds(timeUntilDelete);
	Destroy(gameObject);	
}
