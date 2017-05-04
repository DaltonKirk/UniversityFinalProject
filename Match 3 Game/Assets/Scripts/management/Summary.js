#pragma strict

public var averageRatingText: Text;
public var moneyEarnedText: Text;
public var moneyEarnedTextValue: float;
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
private var repRecord: float;
private var moneyEarnedRecord: float;
private var ratingRecord: float;
private var moneyEarned: float;
private var newRepRec: boolean;
private var newMoneyRec: boolean;
private var newRatingRec: boolean;
public var newMoneyRecordText: GameObject;
public var newRepRecordText: GameObject;
public var newRecordRatingText: GameObject;


function Start () 
{
//load last session for summary
	reputation = (PlayerPrefs.GetFloat("reputation"))/100;
	oldRep = (PlayerPrefs.GetFloat("oldRep"))/100;
	newAverageRatingValue = PlayerPrefs.GetFloat("customerRatingsAveragePercentage")*10;
	moneyEarned = PlayerPrefs.GetFloat("moneyEarned");
	repRecord = PlayerPrefs.GetFloat("repRecord");
	moneyEarnedRecord = PlayerPrefs.GetInt("moneyEarnedRecord");
	ratingRecord = PlayerPrefs.GetFloat("ratingRecord");
	repChange = reputation - oldRep;
	repOldImage.fillAmount = oldRep;
	repLossImage.fillAmount = oldRep;
	showingAvgRating = true;

//check for new records
	if(repChange > repRecord)
	{
		repRecord = repChange;
		PlayerPrefs.SetFloat("repRecord", repRecord);
		newRepRec = true;
	}
	if(moneyEarned > moneyEarnedRecord)
	{
		moneyEarnedRecord = moneyEarned;
		PlayerPrefs.SetInt("moneyEarnedRecord", moneyEarnedRecord);
		newMoneyRec = true;
	}
	if(newAverageRatingValue > ratingRecord)
	{
		ratingRecord = newAverageRatingValue;
		PlayerPrefs.SetFloat("ratingRecord", ratingRecord);
		newRatingRec = true;
	}
	
}

function Update()
{
	if(showingAvgRating == true && averageRatingTextValue < newAverageRatingValue)
	{
	//get % currently shown
	 var currentPercent: float = averageRatingTextValue/newAverageRatingValue;

	 //if almost done slow it down
	 if(currentPercent > 0.95)
	 {
	 	countUpSpeed = 0.1;
	 } else {
	 //if not almost done increase number quickly
		countUpSpeed = newAverageRatingValue*0.4;
		}
		//increase by set amount
		averageRatingTextValue += countUpSpeed * Time.deltaTime;
		averageRatingText.text = averageRatingTextValue.ToString("f2") + "/10";

		//value goes over slightly then set it to =
		if (averageRatingTextValue > newAverageRatingValue)
		{
			averageRatingTextValue = newAverageRatingValue;
			averageRatingText.text = averageRatingTextValue.ToString("f2") + "/10";
		}

	}

	//if we have finished counting up and there is a record show the new record text
		if(averageRatingTextValue == newAverageRatingValue && newRatingRec)
		{
			newRecordRatingText.SetActive(newRatingRec);
		}



	//if rating is finished show rep change
	if (averageRatingTextValue == newAverageRatingValue)
	{
	countUpSpeed = 0.01;
		if (repChange < 0 && repOldImage.fillAmount > reputation)
		{
			//show loss
			repOldImage.fillAmount -= countUpSpeed * Time.deltaTime;
			//if we go over set it to equal
			if(repOldImage.fillAmount < reputation)
			{
				repOldImage.fillAmount = reputation;
			}
		}
		if (repChange > 0 && repGainedImage.fillAmount < reputation)
		{
			//show gain
			repGainedImage.fillAmount += countUpSpeed * Time.deltaTime;
			//if we go over set it to equal
			if(repGainedImage.fillAmount < reputation)
			{
				repGainedImage.fillAmount = reputation;
			}
		}

	}


		//if we have finished counting up and there is a record show the new record text
		if(repGainedImage.fillAmount == reputation && newRepRec)
		{
			newRepRecordText.SetActive(newRepRec);
		}


	//if rep change shown then show money earned
	if (repOldImage.fillAmount == reputation || repGainedImage.fillAmount == reputation)
	{

	var currentPercentage: float = moneyEarnedTextValue/moneyEarned;


	 if(currentPercent > 0.9)
	 {
	 	countUpSpeed = 0.1;
	 } else {
	 //if not almost done increase number quickly
		countUpSpeed = moneyEarned*0.4;
		}


		//show money earned

			if(moneyEarnedTextValue < moneyEarned)
			{
				moneyEarnedTextValue += countUpSpeed * Time.deltaTime;
				moneyEarnedText.text = "£" + moneyEarnedTextValue.ToString("f2");
			}
			if(moneyEarnedTextValue > moneyEarned)
			{
				moneyEarnedTextValue = moneyEarned;
				moneyEarnedText.text = "£" + moneyEarnedTextValue.ToString("f2");
			}

	//if we have finished counting up and there is a record show the new record text
		if(moneyEarnedTextValue == moneyEarned && newMoneyRec)
		{
			newMoneyRecordText.SetActive(newMoneyRec);
		}

	}


}