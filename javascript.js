// Arrays for random selection
const subjects = ['The cat', 'A pirate', 'The astronaut', 'The princess', 'A robot'];
const verbs = ['jumped over', 'discovered', 'saved', 'stole', 'ran through'];
const adjectives = ['gigantic', 'mysterious', 'colorful', 'dangerous', 'magical'];
const objects = ['a treasure chest', 'a spaceship', 'an ancient book', 'a golden crown', 'a sword'];
const places = ['in the forest', 'on the moon', 'under the sea', 'in the castle', 'in a hidden cave'];

// Variables to store chosen words
let chosenSubject = '';
let chosenVerb = '';
let chosenAdjective = '';
let chosenObject = '';
let chosenPlace = '';
let story = '';

// Function to pick a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners for buttons
document.getElementById('subjectBtn').addEventListener('click', () => {
    chosenSubject = getRandomItem(subjects);
    updateStory();
});
document.getElementById('verbBtn').addEventListener('click', () => {
    chosenVerb = getRandomItem(verbs);
    updateStory();
});
document.getElementById('adjectiveBtn').addEventListener('click', () => {
    chosenAdjective = getRandomItem(adjectives);
    updateStory();
});
document.getElementById('objectBtn').addEventListener('click', () => {
    chosenObject = getRandomItem(objects);
    updateStory();
});
document.getElementById('placeBtn').addEventListener('click', () => {
    chosenPlace = getRandomItem(places);
    updateStory();
});

// Function to update and display the story
function updateStory() {
    story = `${chosenSubject} ${chosenVerb} ${chosenAdjective} ${chosenObject} ${chosenPlace}.`;
    document.getElementById('story').textContent = story;
}

// Text-to-speech function
document.getElementById('generateStoryBtn').addEventListener('click', () => {
    if (story !== '') {
        const speech = new SpeechSynthesisUtterance(story);
        window.speechSynthesis.speak(speech);
    } else {
        alert('Please select all parts of the story first.');
    }
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', () => {
    chosenSubject = '';
    chosenVerb = '';
    chosenAdjective = '';
    chosenObject = '';
    chosenPlace = '';
    story = '';
    document.getElementById('story').textContent = '';
});
