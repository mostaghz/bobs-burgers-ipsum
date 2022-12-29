const text = [
    // S1 E1
    'My crotch is itchy. Okay...are you telling me as my daughter or as my grill cook? Um...as... Because my grill cook would never tell me that.',
    `I'm just saying it's easy to remember; our anniversary. It's September 3rd. 9/3. Nine is divisible by three. What? That's not...well, a lot of numbers are divisible by three.`,
    `Hmm. He looks like a child molester. Louise don't serve him; let Gene bring it. Why do I have to get molested? Because he's not gonna molest you. Why? Because you're heavy. Heavy kids can get molested.`,
    `We're investigating a very disturbing rumor. There's a rumor you make your burgers with human remains from the crematorium next door! Hmm, I wonder how a rumor like that get started... It's made with human remains from the crematorium next door.`,
    `You’re on a sinking ship, lady. And you better get off before the ship sinks! Hello, the media!`,
    `Now you listen to me. I would rather be married to a suspected cannibal with a dream, like you, than a soft-lipped guy who never had a dream in the first place.`,
    `We have kind of an adventurous eaters club. We like to try new things. Can you seat 25 people? Oh, uh, well, we might have some more human meat, but it’s, uh, $50 a burger. That’s a deal. Real– What? Really? Great. Let’s do it. Hello. Welcome. Human flesh right this way.`,
    // S1 E2
    `You know how I know they're coming? Because you go into a crazy cleaning frenzy every time. It's like the way animals freak out before an earthquake.`,
    `I have to go check the bathroom for stray hairs. No one sheds like this family. It's like a bunch of Chewbaccas.`,
    `I think my subconscious fears and my budding sexuality are getting all mixed up. So I think I'm being attacked by zombies, and I start screaming, "do you wanna make out?" And I make out with it.`,
    `There's nothing wrong with a man enjoying his crawl space til his in-laws leave.`,
    `They are attempting to bring an outside protein into the situation. An outside protein? Tuna. Tuna?!`,
    `Your husband is not dead? No, just aggravating. Okay, why would Louise let me think that he was dead? Oh, she just likes messing with people she thinks are stup...`,
    `Linda, I'm sorry I called you Nagatha Christie. It was in the heat of the moment, and it was really dumb. Aww. Thank you, Bobby. I mean, I can do better, like Spiro Nagnew. Heh. All right, quit while you're ahead. Naggedy Ann? Secretary of Nagriculture?`,
    // S1 E3
    `Here in this box is the beef That will make our 100,000th burger. Wow. Can I touch it? I wanna touch it, too. I wanna feel it between my toes. Mmm.`,
    `Turns out dad's been putting murdered cows in our hamburgers. And you made us a part of it! You make me sick.`,
    `You think the cow is texting you an emoticon with its butt. Very interesting. Maybe this cow is trying to communicate with us the only way it knows how, with its feces. Like gram-gram used to do.`,
    `There's no such thing as bad publicity. This could be huge for us. Like a sex tape.`,
    `I call to the stand Moolissa. Objection! That cow's faking his injuries! And I can prove it. Think fast. Overruled. Moolissa, is the man who killed you in the courtroom today?`,
    `Well, I had a crazy dream that there wouldn't be a cow's a-s-s in my face when I'm eating my breakfast. I know what that spells.`,
    `Everybody, serpentine. Yes! We're a unit. Dad, you should know if anything happens, I am in full attack mode right now. Me, too. I'm hungry for blood. And also candy.`
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
    // randomizes generated order... works but no idea if this is in the right place
    for (let i = text.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = text[i];
        text[i] = text[j];
        text[j] = temp;
    let value = parseInt(numOfParas.value, 10);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
    }
});

numOfParas.addEventListener('input', syncParaNumber);