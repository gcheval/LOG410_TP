window.onload=function(){
	$("#ajouter").click(function() {ajouterAmi();});
}

function ajouterAmi() {
	$("#ajoutAmi").append("<div class='col-md-12'><div class='col-md-9'>"+$(".email").val()+"</div><div class='col-md-2'>I</div><div class='col-md-1'>X</div></div>");
	$(".email").val('');

}