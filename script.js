var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent



var recognition = new SpeechRecognition();

//recognition.continuous = false;
recognition.lang = 'en-En';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}
//!!!\\
recognition.onresult = function(event) {
	document.body.style.backgroundColor = "red";
  console.log(event.results[event.results.length - 1][0].transcript);

}
//!!!\\
recognition.onspeechend = function() {
  recognition.stop();
    setTimeout(function(){
    recognition.start();
    }, 400);
  
}

// recognition.onnomatch = function(event) {
//   diagnostic.textContent = "I didn't recognise that color.";
// }

// recognition.onerror = function(event) {
//   diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
// }
