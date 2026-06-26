rollDicebtn.onclick = function() {
    const diceResults = document.getElementById("diceResults");
    const numDice = Number(document.getElementById("numDice").value);
    const diceImages = document.getElementById("diceImages");
    const values =[];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceResults.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");

    }