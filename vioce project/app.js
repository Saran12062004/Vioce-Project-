if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();

    recognition.continuous = false; // Set to true if you want continuous recognition
    recognition.interimResults = false; // Set to true if you want interim results
    recognition.lang = 'en-US'; // Set the language

    const startBtn = document.getElementById('start-btn');
    const resultText = document.getElementById('result-text');

    startBtn.addEventListener('click', () => {
        recognition.start(); // Start voice recognition
    });

    recognition.onstart = () => {
        startBtn.textContent = 'Ketunu   Erukan...';
    };

    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        resultText.value = transcript; // Display the recognized text in the textarea
    };

    recognition.onspeechend = () => {
        recognition.stop(); // Stop recognition when user stops speaking
        startBtn.textContent = 'Ketu   mudichitan';
    };

    recognition.onerror = (e) => {
        console.error('Error occurred in recognition:', e.error);
        startBtn.textContent = '';
    };
} else {
    alert('Your browser does not support the Web Speech API');
}
  

