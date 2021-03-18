var gewonnen = false;
	var anzahlFalschGeraten = 0;
	var richtigerVersuch = false;
	var anzahlRateVersuche = 5;
	
	// Lass den Spielleiter ein Ratewort eingeben
	var wort = window.prompt("Bitte das geheime Wort eingeben");
	wort = wort.toUpperCase();
	// Richte das Antwort-Array ein
	var antwortArray = [];
	for (var i = 0; i < wort.length; i++) {
		antwortArray[i] = "_";
	}
	var verbleibendeBuchstaben = wort.length;
	// Vor Beginn wird das mit "_" verschleierte Wort angezeigt
	alert("Du musst das folgende Wort erraten: " + antwortArray.join(" "));
	// Die Spielschleife
	while (verbleibendeBuchstaben > 0 && anzahlFalschGeraten < anzahlRateVersuche) {
		 
		// Fordere den Spieler zu einem Rateversuch auf
		var rateversuch = prompt("Rate einen Buchstaben oder klicke auf Abbrechen, um das Spiel zu beenden.");
		if (rateversuch === null) {	// Spieler hat auf "Abbrechen" geklickt
			break;	// Verlasse die Spielschleife
		} 
		else if (rateversuch.length !== 1) {	// Spieler hat mehrere Zeichen eingegeben
			alert("Gib bitte einen einzelnen Buchstaben ein.");
		} 
		else {
			// Aktualisiere das Spiel mit dem Rateversuch
			richtigerVersuch=false;
			rateversuch = rateversuch.toUpperCase();
			// Durchlaufe das Ratewort und prüfe auf Treffer
			for (var j = 0; j < wort.length; j++) {
				if (wort[j] === rateversuch && antwortArray[j] === "_") {	// BUG repariert! 2. Bedingung!
					antwortArray[j] = rateversuch;
					verbleibendeBuchstaben--;
					richtigerVersuch = true;
				}
			}
			if (!richtigerVersuch){
				anzahlFalschGeraten++;
			}
		}
			alert(antwortArray.join(" "));
		// Ende der Spielschleife
	}
	// Zeige die Antwort und werte das Spiel aus
	// alert(antwortArray.join(" "));
	if (anzahlFalschGeraten < anzahlRateVersuche){
		alert("Gut gemacht! Die Antwort lautet " + wort);
	}
	else {
		alert("Du hast mehr als " + anzahlRateVersuche + " Versuche gebraucht! Das war leider nichts!");
	}