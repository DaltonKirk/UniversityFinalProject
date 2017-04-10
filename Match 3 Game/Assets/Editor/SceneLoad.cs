using UnityEngine;
using UnityEditor;
using NUnit.Framework;

public class NewEditorTest {

	[MenuItem("Open Scene/Management")]
	public static void OpenBoss() {
		
		OpenScene("ManagementScene");
	}

	[MenuItem("Open Scene/match 3")]
	public static void OpenLevelSelect() {

		OpenScene("main");
	}

	public static void OpenScene(string name)
	{
		if(EditorApplication.SaveCurrentSceneIfUserWantsTo())
		{
			EditorApplication.OpenScene("Assets/Scenes/" + name + ".unity");
		}
	}
}
