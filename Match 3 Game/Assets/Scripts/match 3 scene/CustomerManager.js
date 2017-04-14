#pragma strict
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




function Start () {
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
		bottomCollider.SetActive(false);
		DeleteObjs();
		Stock.stock = gridSpawner.numberOfMealsInStock;
		if(aCustomerHasBeenServed)
		{
		customerSatisfaction.UpdateReputation();
		}
		Debug.Log("load scene");
		PlayerPrefs.SetFloat("money", money.money);
		PlayerPrefs.SetInt("stock", Stock.stock);
		Application.LoadLevel("managementScene");
}
function DeleteObjs()
{
		yield WaitForSeconds (2);
		//Delete Meals
		var objs: GameObject[] = gameObject.FindGameObjectsWithTag("obj");
		for(var i = 0; i < objs.length; i ++)
		{
			Destroy (objs[i]); 
		}
		//Delete ReadyMeals
		var readyMeals: GameObject[] = gameObject.FindGameObjectsWithTag("readymeal");
		for(var x = 0; x < readyMeals.length; x ++)
		{
			Destroy (readyMeals[x]); 
		}
		//Delete Customers
		var customers: GameObject[] = gameObject.FindGameObjectsWithTag("customer");
		for(var t = 0; t < customers.length; t ++)
		{
			Destroy (customers[t]); 
		}
}
function CustomerServed()
{
aCustomerHasBeenServed = true;
	concurrentCustomersSpawned --;
	customers = gameObject.FindGameObjectsWithTag("customer");
	for (var customerObj: GameObject in customers){
		customerObj.GetComponent.<Customer>().speed = -1;

	}

}
