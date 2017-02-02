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
	HChecker2Script.CheckMatches(); 
	HChecker3Script.CheckMatches();  
	HChecker4Script.CheckMatches();  
	HChecker5Script.CheckMatches();  
	VChecker1Script.CheckMatches();  
	VChecker2Script.CheckMatches();  
	VChecker3Script.CheckMatches();  
	VChecker4Script.CheckMatches(); 
	VChecker5Script.CheckMatches(); 
	
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

