$(function() {
	$("#add_user").click(function() {
		var div = document.createElement("div");
		var	h1 = document.createElement("h1");
		var	p = document.createElement("p");
		$(h1).text($("#first_name").val() + " " + $("#last_name").val());
		$(p).text("Click for description!");
		div.appendChild(h1);
		div.appendChild(p);
		$(div).addClass("cards");
		$(div).data("description", $("#description").val());
		$("#cards_area").append(div);
		$(".text").val("");
		$("textarea").val("");
	});
	$(document).on("click", ".cards", function() {
		$(this).html($(this).data("description"));
	});
})