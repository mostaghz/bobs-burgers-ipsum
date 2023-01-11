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
    `Everybody, serpentine. Yes! We're a unit. Dad, you should know if anything happens, I am in full attack mode right now. Me, too. I'm hungry for blood. And also candy.`,
    // S1 E4
    `Tina, if you're gonna lay on the floor, at least roll around so I don't have to mop up later.`,
    `They take off their shoes so when they open the door, the whole block smells like feet. Feet that have been cooked in feet. Oh! Ooh. Ooh. That smells exotic, like ranch dressing.`,
    `Capoeira is the most seductive form of self-defence. It combines peacefulness, fighting, and cardio in perfect harmony. Capoeira is breathtaking, but it is also breath-giving.`,
    `Jairo knows a lot about life. Hmm. Jairo says he can hypnotise animals. Shh. But only if they want to be hypnotised... which they almost always do.`,
    `It's time for my afternoon meeting, you know, in the bathroom. Your 4:30 meeting? Yeah, my 4:30.`,
    `Let me show you some very convenient sphincter-tightening exercises. No, thank you. Tight. Relax. I don't want... Tight. Relax. Stop it! Tight. Don't do sphincter-tightening exercises in my restaurant.`,
    `I just looked up troca de cordoes. It's Portuguese for "exchange of strands." Sounds momentous. This very day, she's becoming a woman, exchanging her strands.`,
    // S1 E5
    `What are you gonna do with quarters, Lin? I'll plop them in their g-strings. You'll plop quarters in their g-strings. Plop them right in. Flippity flop.`,
    `Good evening, ladies. Please enter and be tained.`,
    `We might have overdone it a little on the gore. Well, no harm done. Except for the people being treated for shock. Yeah, and the people who demanded their money back. Eh.`,
    `♪ The murderer was me ♪ ha ha! What? You explicitly told us at the beginning of the show you weren't the murderer. That's right. It's a twist. No. It's a lie. A lie is not a twist.`,
    `Shut up, greaseball. Don't call me greaseball... Uh, mask face.`,
    `"The chemistry between the robber character and the lonely morgue operator was sparktastic." Did anyone mention the food? Uh... No. Great. So the robbery got rave reviews. Bob, we're a hit. No, Linda. We were hit.`,
    `Does this mean you're in a gang now? That is correct. Our gang is called the broken glass kids. We'll cut you.`,
    // S1 E6 - +3 quotes because I couldn't decide
    `Why is everyone reading her diary? It's well-written. She's better on the page than in person.`,
    `Dad, you won't regret this. When I kiss Jimmy Jr. Under the disco ball, it'll be like we're all kissing Jimmy Jr.`,
    `Guess who learned a lot about transvestites last night. I was only on that web site for, like, two seconds. What? No. I was talking about me.`,
    `Is this drool or sweat? It's both. Your father is a very moist sleeper.`,
    `If you want a bag of hair so bad, why don't you just pick it out of the food you serve here? Ka-boom! How dare you. No 'stache, no bash.`,
    `Why didn't you wake me up? I tried. That was not the first pickle I dropped on your face.`,
    `So, marshmallow, how'd you get your name? 'Cause if you show me a sweet potato pie, I am on top of it.`,
    `Tina, I know you're upset because Jimmy Jr.'s not here, and that there are more transvestites than you imagined, but...`,
    `It's like I always say. When life gives you lemons... Tuck em'!`,
    `He's a regular over at the desire dungeon. He's what's known as a diaper-lover. You know what that is? It's nasty.`,
    // S1 E7
    `Wait, you had a three-way with Ray, the guy who wears the sales suit down on the pier? Yeah. I mean I wasn't involved, I just watched. But... yeah.`,
    `Myfungal beetles feed on fungus, and this town has a very, very high potency of fungus. Uh, that's actually our town motto.`,
    `Remember the time you asked me to check your prostate and you made a poopie?`,
    `Our guests are such party poopers. All of 'em! No one has any b&b spirit at all!`,
    `What are you doing? Oh, hi, Louise. I was just... Oh, hi, mom. Hello. You're holding my stuff. Hello, my little lady. Hello, mom. What are you doing with my stuff?`,
    `See you in a little... bit at the wine-and- cheese mixer, Teddy. Sounds good, Linda. And I'll see you in hell, Teddy. I'm sorry, Teddy. I will see you in hell!`,
    `Will you please help me get Javed and the Samuels out of their rooms? I locked them in and I... I kind of lost the key.`,
    // S1 E8
    `Yeah, I heard she ate her lipstick once because she wanted to feel red inside. And she made a dress out of live shrimp and wore it to mass. Oh, and she shaved her cat.`,
    `There are some poorly supervised children amongst the art.`,
    `Linda, there are animal anuses all over our walls. Just think of 'em as cute little rumps. Lin, they're anuses.`,
    `But if you're going artsy, then you're going all the way. Someone's cutting off an ear. I need both of mine. I wear glasses. Welp, what's your excuse? Don't got one. Have at it.`,
    `Tina, what do you got? It's our dentist. Dr. Yap? Why is he nude? Wait, has he been nude with you, Tina?! I exercised some artistic license. Uh, I... we're switching dentists.`,
    `What's it going to take to get you into this rhino anus today? You are in direct violation of my wife, Bob.`,
    `You were the one who said we had to support your sister. I did support her, until I figured out a way to destroy her art while preserving her feelings and blaming someone else.`,
    // S1 E9
    `Ugh. Mr. Frond? He's a tall drink of... annoying. That may be true, but you're gonna drink that drink, mister!`,
    `You don't say the punch lines to other people's jokes anymore!`,
    `Everyone laughed. Well, one kid laughed. Peter Pescadero. He has a learning disability. Yeah, but he knows what's funny.`,
    `If you ever gossip about me to Jimmy Jr. outside of a conflict resolution skit, I'll punch you in the face.`,
    `When you say “this is dumb”... it makes me feel like pinching you in the eye.`,
    `Tina, you're supposed to be watching the restaurant! I'm too upset to serve food. Wh-What'd you do? Did you lock up? Yes. Were there customers inside? I don't know.`,
    `Let me tell you about that ziti. That sauce was store-bought, and you know it!`
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