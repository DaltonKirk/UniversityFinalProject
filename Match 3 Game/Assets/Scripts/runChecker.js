#pragma strict
public var HChecker1Script: Checker;
public var HChecker2Script: Checker;
public var HChecker3Script: Checker;
public var HChecker4Script: Checker;
public var HChecker5Script: Checker;
public var VChecker1Script: Checker;
public var VChecker2Script: Checker;
public var VChecker3Script: Checker;
public var VChecker4Script: Checker;
public var VChecker5Script: Checker;
public var timer: float;

function Start () {
	
}

function Update () 
{
if(Input.GetKeyDown (KeyCode.K))
	{
		RunAllChecks();
		Debug.Log("Checking ALL");
	}
}
function RunAllChecks()
{
	HChecker1Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	HChecker2Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	HChecker3Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	HChecker4Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	HChecker5Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	VChecker1Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	VChecker2Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	VChecker3Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	VChecker4Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
	VChecker5Script.CheckMatches();
	yield WaitForSeconds(2);
	Scan();
}
function Scan()
{
	HChecker1Script.isChecking = true;
	HChecker2Script.isChecking = true;
	HChecker3Script.isChecking = true;
	HChecker4Script.isChecking = true;
	HChecker5Script.isChecking = true;
	VChecker1Script.isChecking = true;
	VChecker2Script.isChecking = true;
	VChecker3Script.isChecking = true;
	VChecker4Script.isChecking = true;
	VChecker5Script.isChecking = true;
}

