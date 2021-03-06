#pragma strict
//simple script to make the objs move up and fade then delete
public var speed: float;
public var fadeSpeed: float;
public var textObj: GameObject;
public var rating: float;
public var face: SpriteRenderer;
public var angryFace: Sprite;
public var mildFace: Sprite;
public var happyFace: Sprite;
//actual lifetime
private var lifetime: float;
//lifetime dev can set in inspector
public var Lifetime: float;
public var moneyText: TextMesh;

function FixedUpdate()
{
	lifetime += 1 * Time.deltaTime;
	//if actual lifetime is more than inspector liftime then delete
	if(lifetime > Lifetime)
	{
		Destroy(gameObject);
	}

	if (rating < 4)
		face.sprite = angryFace;

	if (rating >= 4 && rating <= 7)
		face.sprite = mildFace;

	if (rating > 7)
		face.sprite = happyFace;

	transform.position.y += speed * Time.deltaTime;
	GetComponent(SpriteRenderer).color.a -= fadeSpeed * Time.deltaTime;
	textObj.GetComponent(TextMesh).color.a -= fadeSpeed * Time.deltaTime;
	face.color.a -= fadeSpeed * Time.deltaTime;


}
