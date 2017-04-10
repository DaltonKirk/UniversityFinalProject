#pragma strict

public var speed: float;
public var fadeSpeed: float;
public var textObj: GameObject;
public var rating: float;
public var face: SpriteRenderer;
public var angryFace: Sprite;
public var mildFace: Sprite;
public var happyFace: Sprite;

function FixedUpdate()
{
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
