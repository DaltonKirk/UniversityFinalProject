#pragma strict
import UnityEngine.UI;


public var lowOnStockPanel: GameObject;
public var puchaseNewBusinessPanel: GameObject;
public var playedBefore: boolean;
public var anim: Animator;
public var startPressed: Sprite;
public var startButtonImage: Image;
public var audioSource: AudioSource;
public var clip: AudioClip;
public var summaryPanel: GameObject;

function Start () {

	playedBefore = (PlayerPrefs.GetInt("PlayedBefore") != 0);

	if(!playedBefore)
	{
		
		summaryPanel.SetActive (false);
	} else {
		summaryPanel.SetActive (true);
	}

	
}

function StartButton()
{
	audioSource.PlayOneShot(clip);
	startButtonImage.sprite = startPressed;
	anim.Play("PanelSlideLeft");
}

function Update () {
	
}


// how to set		PlayerPrefs.SetInt("bakeryPurchased", (bakeryPurchased ? 1 : 0));
