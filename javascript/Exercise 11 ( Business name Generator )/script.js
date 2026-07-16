// create ta business name generator by combining list of
// adjectives and shop name and another word.
//without using arrays.

function Fname() {
    let rand = Math.random();
    if (rand < 0.10) return "Amazing";
    else if (rand < 0.20) return "Apex";
    else if (rand < 0.30) return "Rice";
    else if (rand < 0.40) return "Prime";
    else if (rand < 0.50) return "Craft";
    else if (rand < 0.60) return "Tech";
    else if (rand < 0.70) return "Swift";
    else if (rand < 0.80) return "Zen";
    else if (rand < 0.90) return "Vibe";
    else return "Nova";
}

function Mname() {
    let rand = Math.random();
    if (rand < 0.10) return "Custom";
    else if (rand < 0.20) return "Creative";
    else if (rand < 0.30) return "Synergy";
    else if (rand < 0.40) return "Value";
    else if (rand < 0.50) return "Digital";
    else if (rand < 0.60) return "Wave";
    else if (rand < 0.70) return "Core";
    else if (rand < 0.80) return "Vista";
    else if (rand < 0.90) return "Axis";
    else return "Point";
}

function Lname() {
    let rand = Math.random();
    if (rand < 0.10) return "Labs";
    else if (rand < 0.20) return "Systems";
    else if (rand < 0.30) return "Hub";
    else if (rand < 0.40) return "Digital";
    else if (rand < 0.50) return "Limited";
    else if (rand < 0.60) return "Agency";
    else if (rand < 0.70) return "Solutions";
    else if (rand < 0.80) return "Groups";
    else if (rand < 0.90) return "Co.";
    else return "Partners";
}

 document.addEventListener('DOMContentLoaded', () => {
            const myButton = document.getElementById('generate-btn');

            if (myButton) {
                myButton.addEventListener('click', () => {
                    let first = Fname();
                    let second = Mname();
                    let third = Lname();
                    
                    alert(`${first} ${second} ${third}`);
                });
            }
        });