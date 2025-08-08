document.getElementById('speak').onclick = speak

function speak(){
    console.log('clicked')
    const text = document.getElementById('text').value.trim()
    if(!text){
        alert('Please enter some Text!')
        return
    }

    const voices = speechSynthesis.getVoices()
    const pitch = parseFloat(document.getElementById('pitch').value);

    const tts = new SpeechSynthesisUtterance(text)
    tts.voice = voices[2]
    tts.pitch = pitch

    speechSynthesis.speak(tts)
}

const textArea = document.querySelector('.text-to-speech #text')

// trigger when user presses enter
textArea.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        e.preventDefault()
        speak()
    }
})

// change btn color when input has text
const sendBtn = document.querySelector('.text-to-speech #speak')

textArea.addEventListener('input', ()=>{
    if(textArea.value.trim() !== ''){
        sendBtn.classList.add('active')
    } else {
        sendBtn.classList.remove('active')
    }
})
