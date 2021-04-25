// 1. Declare variables and capture input.
var adjective = prompt("Please enter an adjective.");
var verb      = prompt("Please enter a verb.");
var noun      = prompt("Please enter a noun.");

// 2. Combine the input with other words to create a story.
var sentence = 
    `<p>There once was a ${adjective} programmer who 
    wanted to use JavaScript to ${verb} the ${noun}.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = sentence;