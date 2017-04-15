#pragma strict

public var customerRatingsTotal: float;
public var numberOfRatings: int;
public var oldNumberOfRatings: int;
public var customerRatingsAverage: float;
public var reputation: float;

function Start()
{
	reputation = PlayerPrefs.GetFloat("reputation");
}

function Update () 
{

}
function UpdateReputation()
{
customerRatingsAverage = customerRatingsTotal/numberOfRatings;
var oldRep = reputation;
//convert to percentage
	var customerRatingsAveragePercentage: float = customerRatingsAverage/10;
	var reputationPercentage: float = reputation/100;
//get difference in percentage
	var percentDifference: float = customerRatingsAveragePercentage - reputationPercentage;
//add difference
	percentDifference = percentDifference*10;
	reputation += percentDifference;
	Debug.Log("percentDifference: " + percentDifference);
	Debug.Log("customerRatingsAveragePercentage: " + customerRatingsAveragePercentage);
//Save Rep
	PlayerPrefs.SetFloat("reputation", reputation);

//save changes to show in management scene
	PlayerPrefs.SetFloat("customerRatingsAveragePercentage", customerRatingsAveragePercentage);
	var repChange = reputation - oldRep;
	PlayerPrefs.SetFloat("repChange", repChange); 
	PlayerPrefs.SetFloat("oldRep", oldRep); 
	Debug.Log(reputation);
}
