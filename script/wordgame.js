const gameLevel1 = [
    [
        {  
            first: "peanut", 
            options: ["butter", "jelly", "shell"],
            answer: "butter", 
            hint: "Used to spread on toast or melt in cooking.!" 
        },

        {  
            first: "coffee", 
            options: ["bean", "cup", "break"],
            answer: "bean", 
            hint: "The seed of a fruit used to make your morning brew.!" 
        },

        {  
            first: "chocolate", 
            options: ["milk", "cake", "candy"],
            answer: "cake", 
            hint: "A sweet dessert often baked for celebrations, typically layered with frosting or icing.!" 
        },

        { 
            first: "sun", 
            options: ["shine", "light", "burn"], 
            answer: "light", 
            hint: "It's essential for visibility!" 
        },

        { 
            first: "wood", 
            options: ["pecker", "land", "house"], 
            answer: "pecker", 
            hint: "It's a type of bird!" 
        },

        { 
            first: "book", 
            options: ["shelf", "cover", "shop"], 
            answer: "cover", 
            hint: "It's the outer part of a book!" 
        },

        { 
            first: "post", 
            options: ["box", "man", "office"], 
            answer: "man", 
            hint: "A human being, typically an adult male.!" 
        },

        { 
            first: "sky", 
            options: ["fall", "view", "blue"], 
            answer: "view", 
            hint: "A perspective of the sky from a particular location.!" 
        },
        
        { 
            first: "rain", 
            options: ["drop", "coat", "forest"], 
            answer: "drop", 
            hint: "A small, round quantity of liquid, often falling from a height.!" 
        },

        { 
            first: "shoe", 
            options: ["lace", "heel", "sole"], 
            answer: "lace", 
            hint: "It's something you tie on your shoe!" 
        }
    ]
];

let score = 0;
let userInput;
let isGameRunning = false;

const startGame = () => {
    alert("\u{1F9D1}\u{200D}\u{1F4BB} Get ready for a Fun Word Game! \n\n Match the perfect pair with each word");

    score = 0;
    isGameRunning = true;

    for (let i = 0; i < gameLevel1.length; i++) {
        const wordPairs = [...gameLevel1[i]]; 

        while (wordPairs.length > 0) {
            const randomIndex = Math.floor(Math.random() * wordPairs.length);
            const currentPair = wordPairs[randomIndex];

            let isCorrectGuess = false;
            let isCorrectAttempt = 0; 

            do {
                userInput = prompt(
                    `What pairs with "${currentPair.first} .........."?\n\nChoose an option:\n ${currentPair.options[0]}\n ${currentPair.options[1]}\n ${currentPair.options[2]}`
                );

                if (userInput === null) {
                    exitGame();
                    isGameRunning = false;
                    return;
                }

                if (userInput === userInput.toUpperCase() && userInput !== userInput.toLowerCase()) {
                    alert("Invalid input: Please avoid using uppercase letters!");
                    continue;
                }

                if (userInput && userInput.toLowerCase() === currentPair.answer) {
                    score++;
                    alert(`\u{2705} Correct Guess! Your Score: ${score}/${getTotalPairs()}`);
                    isCorrectGuess = true; 
                }  else if (currentPair.options.some(option => option.toLowerCase() === userInput.toLowerCase())) {
                    isCorrectAttempt++;
                    if (isCorrectAttempt < 2) {
                        alert(`\u{1F641} Oops, that's not correct! \n\nHint: ${currentPair.hint}`);
                    } else {
                        alert(`\u{274C} Sorry, that's wrong. \n\n The correct answer is: "${currentPair.answer}"`);
                        isCorrectGuess = true; 
                    }
                } else {
                    alert(" \u{1F61E}Oops, That's not a valid option!");
                }
            } while (!isCorrectGuess);

            wordPairs.splice(randomIndex, 1);
        }
    }

    alert(`Game Over! Your Score: ${score}/${getTotalPairs()}\u{1F3C6}`);
    isGameRunning = false;
}

const exitGame = () => {
    alert(`Exiting the game. Your final score: ${score}/${getTotalPairs()} \u{1F3C6}`);
    isGameRunning = false;
};

const getTotalPairs = () => {
    let total = 0;
    gameLevel1.forEach(level => {
        total += level.length;
    });
    return total;
};

const addBackgroundVideo = () => {
    const video = document.createElement("video");
    video.src = "./images/wordgamevideo.mp4"; 
    video.autoplay = true;
    video.loop = true;
    video.muted = true; 
    video.playsInline = true; 

    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.zIndex = "-1";

    document.body.appendChild(video);
};

addBackgroundVideo();


