// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern
let randomNumber = Math.floor(Math.random() * 100 + 1);

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.

let trialNumber = 7;

/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */

$(".btn-primary").on("click", function()
{	trialNumber = 7;
	$("#versuche").text(trialNumber);

  $("#resultat").text("");
  $(".list-group").text("");
  $("#user-input").val(""); 

}
);
 

/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */

$(".btn-success").on("click", function()
{
  let user_input = $("#user-input").val(); 

if (user_input > randomNumber)
{
	$("#resultat").text("Du musst niedriger raten!");
	$(".list-group").append('<li class="list-group-item">' + 'Du musst niedriger raten!' + '<span class="badge">' + '</span>' + '</li>');
	$(".badge").text(user_input);
}

else if (user_input < randomNumber)	
{
	$("#resultat").text("Du musst höher raten!");
	$(".list-group").append('<li class="list-group-item">' + 'Du musst höher raten!' + '<span class="badge">' + '</span>' + '</li>');
	$(".badge").text(user_input);		
}

else if (user_input == randomNumber)	
{	
	$("#resultat").text("Du hast gewonnen! Wenn du noch eine Runde spielen möchtest, klicke den Start-Button!");
	$(".list-group").append('<li class="list-group-item">' + 'Du hast gewonnen! Wenn du noch eine Runde spielen möchtest, klicke den Start-Button!' + '<span class="badge">' + '</span>' + '</li>');
	$(".badge").text(user_input);
}

	trialNumber = trialNumber - 1;
	$("#versuche").text(trialNumber);
	

	if (trialNumber <= 0)
	{
		$("#resultat").text("Du hast das Spiel leider verloren. Wenn du noch eine Runde spielen möchtest, klicke den Start-Button!");
		$(".list-group").append('<li class="list-group-item">' + 'Du musst höher raten!' + '<span class="badge">' + '</span>' + '</li>');
		$(".badge").text(user_input);
	}

});