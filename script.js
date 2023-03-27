// Add an event listener for the "mouseup" event
document.addEventListener('mouseup', function(event) {
    // Get the selected text
    var selectedText = window.getSelection().toString().trim();
    
    // Check if the selected text is not empty
    if (selectedText !== '') {
      // Create a new SpeechSynthesisUtterance object
      var utterance = new SpeechSynthesisUtterance(selectedText);
      
      // Set the voice and rate properties
      utterance.voice = window.speechSynthesis.getVoices()[0];
      utterance.rate = 1.0;
      
      // Speak the text
      window.speechSynthesis.speak(utterance);
    }
  });
  