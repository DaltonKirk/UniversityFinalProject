#pragma strict

public var customer: Customer;

function OnCollisionStay2D()
{
	customer.speed = 0;
}
