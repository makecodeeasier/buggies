// add new test buggy setting
newBuggy = 1;
// init controller
buggyController = new BuggyController(".buggies");

/**
 * Just adding some test buggies to get things started.
 *
 * @param {BuggyController} buggyController
 */
function newTestBuggies(buggyController) {
	buggyController.addModel("Żuk", `Opracowana w 1956 roku na bazie samochodu FSO Warszawa, miała wspólne z nim podwozie, silniki i układ jezdny.

	Charakterystyka:

	• niska trwałość elementów zawieszenia przedniego,
	• wysoko położona skrzynia ładunkowa,
	• wysoko położony środek ciężkości,
	• zbyt mały rozstaw kół,
	• ograniczone możliwości w zakresie wzrostu parametrów samochodu (szczególnie ładowności).
	`);

	buggyController.addModel("Tarpan", "Polski samochód pick-up i dostawczy (określany jako rolniczy), produkowany w latach 1973–1991 w Poznaniu.");
}

if (newBuggy) {
	newTestBuggies(buggyController);
}
