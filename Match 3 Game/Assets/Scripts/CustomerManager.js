#pragma strict
public var spawnPoint: Vector2;
public var customerObj: GameObject;
public var nextCustomerTimer: float;
public var customerSpawnInterval: float;
public var getSpawnPointObj: GameObject;
public var maxCustomers: int;
public var maxConcurrentCustomers: int;
public var customersSpawned: int;
public var concurrentCustomersSpawned: int;


function Start () {
	
}

function Update () 
{
	spawnPoint = getSpawnPointObj.transform.position;
	nextCustomerTimer += 1 * Time.deltaTime;
	if	(nextCustomerTimer > customerSpawnInterval && concurrentCustomersSpawned < maxConcurrentCustomers && customersSpawned < maxCustomers)
	{
		SpawnCustomer();
		nextCustomerTimer = 0;
	}
}
function SpawnCustomer()
{
	customersSpawned ++;
	concurrentCustomersSpawned ++;
	Instantiate(customerObj,spawnPoint,transform.rotation);
}
