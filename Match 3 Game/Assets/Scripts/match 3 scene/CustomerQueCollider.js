#pragma strict
//This script is on a child obj of the child that detect collisions infront of the customer
public var customer: Customer;

function OnCollisionStay2D()
{
	customer.speed = 0;
}
