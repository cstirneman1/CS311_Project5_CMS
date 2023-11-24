function showMadLib() {
    console.log("Button clicked");

    // Get all input elements with class "mad-lib-input"
    var inputElements = document.getElementsByClassName("mad-lib-input");

    // Create an array to store the words
    var words = [];

    // Iterate through the input elements and store the values in the array
    for (var i = 0; i < inputElements.length; i++) {
        words.push(inputElements[i].value);
    }

    // Create the Mad Lib using the captured words
    var madLibContent = "Our school cafeteria has really <span class='user-input'>" + words[0] + "</span> food. Just thinking about it makes " +
        "my stomach <span class='user-input'>" + words[1] + "</span>. The spaghetti is <span class='user-input'>" + words[2] + "</span> and tastes like <span class='user-input'>" + words[3] +
        "</span>. One day, I swear one of my meatballs started to <span class='user-input'>" + words[4] + "</span>! The tacos are totally <span class='user-input'>" + words[5] +
        "</span> and kind of look like <span class='user-input'>" + words[6] + "</span>. My friend Corey actually likes the meatloaf, even though it is <span class='user-input'>" +
        words[7] + "</span> and <span class='user-input'>" + words[8] + "</span>. I call it 'mystery meatloaf', but I really think it is made out of <span class='user-input'>" +
        words[9] + "</span>. My dad said he would make my lunches, but I'd rather take my chances with the cafeteria!";

    // Display the Mad Lib content and show the reset button within it
    var madLibElement = document.getElementById("mad-lib");
    madLibElement.style.display = "block";
    madLibElement.innerHTML = madLibContent + '<div class="input"><button onclick="resetMadLib()">Reset Mad Lib</button></div>';
    
    // Hide the data collection
    var dataCollectionElement = document.getElementById("data-collection");
    dataCollectionElement.style.display = "none";
}

function resetMadLib() {
    // Show the data collection div
    var dataCollectionElement = document.getElementById("data-collection");
    dataCollectionElement.style.display = "flex"; // Change to "flex" to maintain the column layout

    // Hide the Mad Lib div
    var madLibElement = document.getElementById("mad-lib");
    madLibElement.style.display = "none";

    // Clear input values
    var inputElements = document.getElementsByClassName("mad-lib-input");
    for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }

    // Hide the reset button
    var resetButton = document.getElementById("reset-button");
    resetButton.style.display = "none";
}
