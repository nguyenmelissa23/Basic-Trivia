// Display 1: Start Button
// Display 2: When click on button, button disappear and the questions show and timer starts counting down
//User has to answer all the questions and can only pick one answer
// Has the options to submit or submit when time is up
// Display 3: Next page show the number of answers correct, incorrect or unanswered

//check if the answer is correct
	//array for answer options

var ans1 = [$("#a1"), $("#b1"), $("#c1"), $("#d1")];
var ans2 = [$("#a2"), $("#b2"), $("#c2"), $("#d2")];
var allAns = [ans1, ans2];
var timeCount= 0;
//var ans3 = [$("#a1"), $("#b1"), $("#c1"), $("#d1")];
// var ans4 = [$("#a2"), $("#b2"), $("#c2"), $("#d2")];
// var ans5 = [$("#a1"), $("#b1"), $("#c1"), $("#d1")];
// var ans6 = [$("#a2"), $("#b2"), $("#c2"), $("#d2")];
// var ans7 = [$("#a1"), $("#b1"), $("#c1"), $("#d1")];
// var ans8 = [$("#a2"), $("#b2"), $("#c2"), $("#d2")];
var timeLeft = 03 + " minute(s) : " + 00 + "second(s)";
var trivia = {
	wrong: 0,
	right: 0,
	unanswered:0,
	// checkOneQuest: function(x) {
	// 	console.log(x);
	// 	for ( var i = 0; i < x.length; i++){
	// 		if ( x[i].attr("data-boolean") === true){
	// 			if (x[i].value ==="correct"){
	// 				this.right++;
	// 				console.log(this.right);
	// 			}
	// 			else if (x[i].value ==="wrong"){
	// 				this.wrong = allAns.length - this.right;
	// 				console.log(this.wrong);	
	// 			}
	// 		}
	// 		else if ( x[i].attr("data-boolean") === false){
	// 			this.unanswered= ;
	// 			console.log(this.unanswered);
	// 		}
	// 	}	
	// }
			
		//check all array in Q1 
		// if this chosen answer is === "correct"
			//then do this right++;
		//else if the chosen answer is === "wrong" 
			//then do this wrong++;
		//else 
			//then do this unanswered++;
};

// HTML DISPLAY
function display1(){
	//booleanAll();
	$("#allQuest").addClass("hidden");
	$("#timerText").addClass("hidden");
	$("#resultText").addClass("hidden");
	$("#submit").addClass("hidden");
}

function display2() {
	$("#startBtn").on("click", function(){
		timeUp();
		$(this).addClass("hidden");
		$("#allQuest").removeClass("hidden");
		$("#timerText").removeClass("hidden");	
		$("#submit").removeClass("hidden");
		$("#timer").html(timeLeft);
		//to display the updated timeLeft, every 1 second
		
		setInterval(function(){printTimer()}, 1000);
	})
}

function display3() {
	$("#allQuest").addClass("hidden");
	$("#submit").addClass("hidden");
	$("#result").removeClass("hidden");
	$("#timerText").addClass("hidden");
	$("#submit").addClass("hidden");
	$("#resultText").removeClass("hidden");
	//display results
	$("#correct").html(trivia.wrong);
	$("#incorrect").html(trivia.right);
	$("#unanswered").html(trivia.unanswered);

}

function submitQuiz() {
	$("#submit").on("click", function(){
		display3();
	})
}

function printTimer(){
	timeCount =  timeCount + 1000;
	timeMin = Math.floor((180*1000-timeCount)/60000);
	console.log(timeMin);
	timeSec = Math.floor((180*1000-timeCount) % 60000 /1000);
	console.log(timeSec);
	timeLeft = timeMin + " minute(s) : " + timeSec + " second(s)";
	console.log(timeLeft);
	$("#timer").html(timeLeft);
	console.log($("#timer").html(timeLeft));
}

function timeUp(){
	var Timeout = setTimeout(display3, 180 * 1000);
}


// CHECK ANSWERS


//check answers for all questions
// function checkAll(){
// 	for ( var i = 0; i < allAns.length; i++){
// 		var array = allAns[i];
// 		console.log(array);
// 		trivia.check(array);
// 	}
// }

// //assign boolean= false for all answer choices
// //call up all answer choices of each question
// function boolean(x){
// 	for ( var i = 0; i < x.length; i++){
// 		boolean = x[i].attr("data-boolean", false);
// 		console.log(boolean);
// 	}
// }

// // call up all questions
// function booleanAll(){
// 	for ( var i = 0; i < allAns.length; i++){
// 		var array = allAns[i];
// 		console.log(array);
// 		boolean.(array);
// 	}	
// }

// //if answer is checked, turn boolean to true 

// function checkedAns(){
// 	$()
// }

//MAYBE if the checked one is the same with the correct answer


$(document).ready(function(){
	display1();
	display2();
	submitQuiz();
	//checkAll();
});