$(document).ready(function(){
$(".ryu").mouseenter(function(){
	$(".ryu-all").hide();
	$(".ryu-ready").show();
})
.mouseleave(function(){
	$(".ryu-all").hide();
	$(".ryu-still").show();
})
.mousedown(function(){
	playHadouken();
	$(".ryu-all").hide();
	$(".ryu-throwing").show();
	$(".hadouken").finish().show()
	.animate(
		{'left':'1020px'},
		500,
		function(){
			$(".hadouken").hide();
			$(".hadouken").css('left', '520px');
		}
);
})
.mouseup(function(){
	$(".ryu-all").hide();
	$(".ryu-ready").show();
	//ryu goes back to his ready position
});

$(document).keydown(function(key){
	if(key.keyCode == 88){
		$(".ryu-all").hide();
		$(".ryu-cool").show();
		
	}
}).keyup(function(key){
	if(key.keyCode == 88) {
		$(".ryu-all").hide();
		$(".ryu-ready").show();
	}
});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}