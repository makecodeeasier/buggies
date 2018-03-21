function BuggyController(containerSelector) {
	this.container = $(containerSelector);
}

BuggyController.prototype.render = function (name, description) {
	var descriptionFormatted = description.replace(/\n/g, "<br>");
	html = `
	<h2>${name}</h2>
	${descriptionFormatted}
	`;
	return html;
};

BuggyController.prototype.append = function (buggy) {
	$(this.container).append(buggy);
};

BuggyController.prototype.addModel = function (name, description) {
	$.ajax({
		context: this,
		dataType: 'json',
		method: "POST",
		data: { name: name, description: description },
		url: "./api.php",
		success: function (data) {
			newBuggy = document.createElement("section");
			newBuggy.id = data.guid;
			newBuggy.class = "buggy";
			newBuggy.innerHTML = this.render(data.name, data.description);
			//document.body.appendChild(newBuggy);
			this.append(newBuggy);

		}
	});
};