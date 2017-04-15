#pragma strict

public var averageRatingText: Text;
public var moneyEarnedText: Text;
public var repLossImage: Image;
public var repGainedImage: Image;
public var repOldImage: Image;
public var reputation: float;
public var oldRep: float;
public var countUpSpeed: float;
public var averageRatingTextValue: float;
public var newAverageRatingValue: float;
public var showingAvgRating: boolean;
public var repChange: float;

function Start () 
{
	reputation = (PlayerPrefs.GetFloat("reputation"))/100;
	oldRep = (PlayerPrefs.GetFloat("oldRep"))/100;
	newAverageRatingValue = PlayerPrefs.GetFloat("customerRatingsAveragePercentage")*10;
	repChange = reputation - oldRep;
	repOldImage.fillAmount = oldRep;
	repLossImage.fillAmount = oldRep;
	showingAvgRating = true;
	
}

function Update()
{
	if(showingAvgRating == true && averageRatingTextValue < newAverageRatingValue)
	{
		averageRatingTextValue += countUpSpeed * Time.deltaTime;
		averageRatingText.text = averageRatingTextValue.ToString("f2") + "/10";
		if (averageRatingTextValue > newAverageRatingValue)
		{
			averageRatingTextValue = newAverageRatingValue;
		}
	}
	if (averageRatingTextValue == newAverageRatingValue)
	{
		if (repChange < 0 && repOldImage.fillAmount > reputation)
		{
			//show loss
			repOldImage.fillAmount -= countUpSpeed * Time.deltaTime;
		}
		if (repChange > 0 && repGainedImage.fillAmount < reputation)
		{
			//show gain
			repGainedImage.fillAmount += countUpSpeed * Time.deltaTime;
		}
	}
	/*if (rep change has been shown)
	{
		//show money earned
	}
	*/
}