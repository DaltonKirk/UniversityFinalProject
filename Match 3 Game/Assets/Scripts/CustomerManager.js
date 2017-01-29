#pragma strict
import UnityEngine.UI;

public var spawnPoint: Vector2;
public var customerObj: GameObject;
public var nextCustomerTimer: float;
public var customerSpawnInterval: float;
public var getSpawnPointObj: GameObject;
public var maxCustomers: int;
public var maxConcurrentCustomers: int;
public var customersSpawned: int;
public var concurrentCustomersSpawned: int;
public var shopOpen: boolean;
public var openSignText: Text;
public var gridSpawner: column;
public var bottomCollider: GameObject;




function Start () {
	
}

function Update () 
{
	spawnPoint = getSpawnPointObj.transform.position;
	nextCustomerTimer += 1 * Time.deltaTime;
	if	(nextCustomerTimer > customerSpawnInterval && concurrentCustomersSpawned < maxConcurrentCustomers && customersSpawned < maxCustomers && shopOpen)
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
function OpenShop()
{
	shopOpen = !shopOpen;
	
	if(shopOpen)
	{
		openSignText.text = "Close";
		gridSpawner.SpawnGrid();
		bottomCollider.SetActive(true);
	}
	else
	{
		openSignText.text = "Open";
		bottomCollider.SetActive(false);
		DeleteObjs();
	}
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
