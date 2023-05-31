let question={
	Title:'What is JavaScript?',
	alternatives:['Game','Programing Language','an Extension','Operating System'],
	correctAnswer: 1

}
function showQuestion(q){
let titleDiv=document.getElementById('Title');
titleDiv.textContent=q.Title;
let alts=document.querySelectorAll('.alternatives');
alts.forEach(function(element,index){
	element.textContent=q.alternatives[index];
	element.addEventListener('click',function(){
		if(q.correctAnswer==index){
			console.log('You\'re Right');
		}
		else{
			console.log('Wrong Answer Selected. Try again');
		}
	});
});
}
showQuestion(question);


