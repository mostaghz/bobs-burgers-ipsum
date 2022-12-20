const text = [
    // S1 E1
    'My crotch is itchy. Okay...are you telling me as my daughter or as my grill cook? Um...as... Because my grill cook would never tell me that.',
    `I'm just saying it's easy to remember; our anniversary. It's September 3rd. 9/3. Nine is divisible by three. What? That's not...well, a lot of numbers are divisible by three.`,
    `Hmm. He looks like a child molester. Louise don't serve him; let Gene bring it. Why do I have to get molested? Because he's not gonna molest you. Why? Because you're heavy. Heavy kids can get molested.`,
    `We're investigating a very disturbing rumor. There's a rumor you make your burgers with human remains from the crematorium next door! Hmm, I wonder how a rumor like that get started... It's made with human remains from the crematorium next door.`
];

let form = document.querySelector(".ipsumForm");
let numOfParas = document.getElementById("numOfParas");
let result = document.querySelector(".ipsumText");

function syncParaNumber(e) {
    let value = e.target.value;
    numOfParas.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let value = parseInt(numOfParas.value, 5);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
});

numOfParas.addEventListener('input', syncParaNumber);