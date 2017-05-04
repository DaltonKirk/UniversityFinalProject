#pragma strict
//Spawns customers
import UnityEngine.UI;

public var spawnPoints: GameObject[];
public var customerObj: GameObject;
public var nextCustomerTimer: float;
public var customerSpawnInterval: float;
public var maxCustomers: int;
public var maxConcurrentCustomers: int;
public var customersSpawned: int;
public var concurrentCustomersSpawned: int;
public var gridSpawner: column;
public var bottomCollider: GameObject;
public var queNumber: int;
public var spawnPoint: Vector3;
public var customers: GameObject[];
public var customerSatisfaction: CustomerSatisfaction;
private var reputation: float;
//if no one has been served we dont update rep otherwise it breaks and becomes NaN
public var aCustomerHasBeenServed: boolean;
public var moneyEarned: float;




function Start () {
//Set this to 0 each time we load this scene so we can start the count from 0.
	PlayerPrefs.SetFloat("moneyEarned", 0);

	gridSpawner.SpawnGrid();
	reputation = PlayerPrefs.GetFloat("reputation");
	maxCustomers = (reputation/100)*30;
	if (maxCustomers < 3){
	maxCustomers = 3;
	}
}

function Update () 
{
	spawnPoint = spawnPoints[queNumber].transform.position;
	nextCustomerTimer += 1 * Time.deltaTime;
	if	(nextCustomerTimer > customerSpawnInterval && concurrentCustomersSpawned < maxConcurrentCustomers && customersSpawned < maxCustomers)
	{
		SpawnCustomer();
		nextCustomerTimer = 0;
	}
	if(concurrentCustomersSpawned == 0 && customersSpawned == maxCustomers)
	{
		CloseShop();
	}
}
function SpawnCustomer()
{
	customersSpawned ++;
	concurrentCustomersSpawned ++;
	Instantiate(customerObj,spawnPoint,transform.rotation);
	if (queNumber == 1){
		queNumber = 0;
		} else {
			queNumber = 1;
		}
}
function CloseShop()
{
//saves stock left over
		//Stock.stock = gridSpawner.numberOfMealsInStock;

//gets rid of left over stock
		Stock.stock = 0;

//only update rep if we have served someone
		if(aCustomerHasBeenServed)
		{
			customerSatisfaction.UpdateReputation();
		}
		Debug.Log("load scene");
		PlayerPrefs.SetFloat("money", money.money);
		PlayerPrefs.SetInt("stock", Stock.stock);
		Application.LoadLevel("managementScene");
}

function CustomerServed()
{
	aCustomerHasBeenServed = true;
	concurrentCustomersSpawned --;
	customers = gameObject.FindGameObjectsWithTag("customer");
	for (var customerObj: GameObject in customers)
	{
		customerObj.GetComponent.<Customer>().speed = -1;
	}

}
