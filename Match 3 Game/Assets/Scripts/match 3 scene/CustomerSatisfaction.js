#pragma strict

public var customerRatingsTotal: float;
public var numberOfRatings: int;
public var oldNumberOfRatings: int;
public var customerRatingsAverage: float;

function Update () 
{
	if (numberOfRatings != oldNumberOfRatings)
	{
		customerRatingsAverage = customerRatingsTotal/numberOfRatings;
		oldNumberOfRatings = numberOfRatings;
	}
}
