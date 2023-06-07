// Dom elements
const subFormEl = document.getElementById('submitForm');
const resultEl = document.getElementById('result');
const textEl = document.getElementById('text');

// Get the value from text and populate text
let text = "";
const getVal = (el) => {
    text = el.value;
}

// Get the source language and setting default as english
let source = "en";
const getSource = (el) => {
    source = el.value;
}

// Get the target language and setting default as bangla
let target = "bn";
const getTarget = (el) => {
    target = el.value;
}

// handlesubmit - to handle form submission
const handleSubmit = async (e) => {

    e.preventDefault();

    if(!text) return;

    console.log(source, target, text)

    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'd682c2eb0fmsh57f8aa27d27b912p15727ajsna611a76b0400',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: source,
            target_language: target,
            text
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        resultEl.innerHTML = `<pre class="result"> ${(target == 'bn') ? "অনুবাদ:" : "Translation: "} <br> ${result.data.translatedText}</pre>`;
    } catch (error) {
        console.error(error);
    }

}

subFormEl.addEventListener('submit', handleSubmit)