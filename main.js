$(function() {
	$("#add_user").click(function() {
		var div = document.createElement("div");
		$(div).addClass("cards");
		var	h1 = document.createElement("h1");
		var	p = document.createElement("p");
		var back = document.createElement("p");
		$(h1).text($("#first_name").val() + " " + $("#last_name").val());
		$(p).text("Click for description!");
		$(back).text($("textarea").val());
		$(back).addClass("back");
		div.appendChild(h1);
		div.appendChild(p);
		div.appendChild(back);
		// $(div).data("description", $("#description").val());
		$("#cards_area").append(div);
		$(".text").val("");
		$("textarea").val("");

	});
	$(document).on("click", ".cards", function() {
		// $(this).html($(this).data("description"));
		$(this).children().toggle();
	});
})