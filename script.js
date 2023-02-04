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
    `Let me tell you about that ziti. That sauce was store-bought, and you know it!`,
    // S1 E10
    `Oh, no offence, Bob, but I have a policy that I don't dine at any of my tenants' establishments. Oh. But I saw you eating at juicy Sushi. That's different. That place is incredible!`,
    `Let's rub our eyes together. You can get my pink eye! Okay! Ow. Ow. Ow. Ow.`,
    `When I die, I want you to cremate me and throw my ashes in Tom Selleck's face. That's a crazy request. I get it.`,
    `Louise, what do you got? When I was young and naive, I would have said "arson," but I'm gonna go with "voodoo."`,
    `He calls it "the meatsiah." It's beef tartare inside a burger medium-well inside a burger Wellington.`,
    `They'll try the samples, and they'll love 'em, but they'll want more. More! They'll be craving these burgers, itching to get their fix! Like heroin. That's right son, like heroin!`,
    `No, no, you are an artist... a beef artist. A be-fartist! A poet! Who writes with meat and buns and pickles. Like a greasy, heterosexual Walt Whitman.`,
    // S1 E11
    `I just got mould-certified. In a month, I'll be cleared for vermin, too.`,
    `Do I have a medicine cabinet full of corpse moisturisers? Ooh! Yes. Do they make my skin soft as a baby? You decide.`,
    `The bus from speed? Yeah, the bus from speed. I didn't even know you liked that movie so much. I never saw it. I don't like to see the movie until I finish the model.`,
    `Who wants to help me glue a toupee on an old man's cadaver? Yay! This is like camp.`,
    `Long day slaving over the old embalming table. Well, let me just say that I've been embalming you with my eyes since the moment you walked in.`,
    `I'm not a zombiephile. I have a complicated relationship with zombies. They're dangerous, but I love their swagger.`,
    `You drunk enough to be any fun yet? Yeah, I guess.`,
    // S1 E12
    `It's no fun being a burger man in a seafood town.`,
    `Hey, what are you guys looking at over there? Um, nothing. Just pictures of people... Doing it. Oh. Hey, wait a minute. That's not porn. You brought a Lobsterfest brochure into this house?`,
    `Now, who here thinks the hurricane was caused by something bad they did? What about you, Nicholas? That thing you told me? In confidence? Say it. I rub my genitals on the couch. We're all gonna die because of you!`,
    `I think this might develop into a party type situation!`,
    `Lobsterfest is dead. Bobsterfest killed it! Long live Bobsterfest!`,
    `You wouldn't like it if someone messed with your precious butter! Like stuff a big, hairy toe in it!`,
    `I have finished my butter analysis. Bob's skin flakes, arm hair and fingernail dirt are all present. No! That's disgusting! Let me finish! They're present, but not at threatening levels.`,
    // S1 E13 +3 quotes because I couldn't decide
    `What, you don't want to buy burgers from a guy who smells like pee?`,
    `You know, the skadootch is just one of those pitches. When it was on, it was really on. But when it wasn't... it's like hitting candy out of a baby's hand... with a bat.`,
    `Makes you wonder about the tattoos we can't see. On their butts.`,
    `Joining your Wonder Wharf mascots today is a special guest food, a burger! A boy who is also a burger.`,
    `Gene, are you kidding me?! The name of the restaurant is Bob's Burgers! Well, I call you Dad! I think of it as Dad's Burgers! You live above it! You work in it every day!`,
    `I did many bad things to escape Cuba. Things that haunt me in the dark of the night.`,
    `Oh. My wonderdog is hanging out. Yes. Yes, it is. I got so caught up in our conversation, I forgot to zip.`,
    `Well, I'm still gluing a knife to my foot.`,
    `Boy, this microphone smells like beer. Well, let's just say AA was "A" waste of time.`,
    `You remind me of my father. He was honest, and he worked hard. You an immigrant, Bob? Um... no. Just swarthy? I guess.`,
    // S2 E1
    `I'm making a three-bean salad, but it's bring your own bean. Can I put you down for garbanzo?`,
    `I'm gonna roll. Ugh. I got "lick" "foot" again. Lick it like you like it. No. Lick it like you like it. No more lick foot. Lick it like you like it. Lick... No more lick foot. This little piggy goes all the way home.`,
    `Dear Diary, tonight we're sneaking into the dangerous taffy factory. Also, if boys had uturses they'd be called duderuses.`,
    `The treasure's in the crack of the ass, and it's close. I can smell it.`,
    `I don't understand... why is it still here? Well... I may have slipped a penis pill into your casserole.`,
    `She went to find the treasure by herself because we're "a burden." Gene, what did I tell you about finger quotes? Not to "do" them. But ironic detachment is great. Nothing means anything!`,
    `Stupid book. I'm sick of acting like a dumb, helpless girl just so a hot boy who dances his feelings will notice me. That's not who I am. I'm a smart, strong, sensual woman.`,
    // S2 E2
    `Channel six news. They'll finger anything with a pulse. I'm pretty sure their slogan is, their "finger's on the pulse," Gene. No! That can't be right. It's right.`,
    `It looks like a huge, misshapen penis. It's Bob's Burgers. It's supposed to be a fish, not a rocket, or a penis. It's a penis.`,
    `How did you first get into bank robbing? Pfft. Me and a buddy of mine, we just kind of fell into it. You know, I had a gun, I needed some money.`,
    `I understand your husband is one of the hostages inside the bank. Yes. Bobby, if you're listening, we love you, baby. If you make it out of there, I will do anything, anything you want. Except that one thing.`,
    `Are there cops on the phone? Yeah, but I'm whispering. Yeah, we can't hear anything. Go ahead. See?`,
    `Mickey! What advice would you give young people? Who's your hero? What's your favourite pig-out food? Stay in school, Superman, potato chips if I'm sad, chocolate if I'm bad.`,
    `He's splayed out like that, with his hands on his head, ass in the breeze. It's like his pants just kind of gave up. My pants are staying on.`,
    // S2 E3
    `Lin, why do you do this prenatal yoga? You're... I mean, you're not pregnant. Your youngest child is nine.`,
    `Oh, last night, I dreamt I was breast-feeding Gene again, and he had a long white beard like Santa Claus. Oh, it was freaky. That could be our next Christmas card.`,
    `Don't feed a guy a sponge, Bobby. Don't feed a guy a sponge. You put it in your mouth, Teddy.`,
    `All right, so, uh... you'll need an adult to supervise you. We know an adult. We definitely know an adult.`,
    `I now pronounce you Team Soft Serve. I made a soft serve this morning, so I should be captain.`,
    `I needed to let my baby birds fly... my bratty little baby birds fly with their crappy little wings. That was... Sometimes you just got to push 'em out the window.`,
    `You did a Caddyshack? Nice move. What's a Caddyshack? The movie... Caddyshack? Never heard of it. Wait, so you didn't just throw a candy bar in the pool? No. Oh, my God.`,
    //S2 E4 +3 quotes because I couldn't decide
    `We could buy an island. No. And then a smaller island nearby, for farting.`,
    `Oh, Bobby, is this turning into another one of your peeing races with Jimmy? It's not called a peeing race, Lin. It's called a pissing contest.`,
    `You better go easy. You could have the carpal tunnels.`,
    `I'm not leaving any stone unturned, Lin! They're all gonna be turned! All the stones!`,
    `♪ If you're not real then how come I feel this way? Little babies ♪.`,
    `I'm gonna stow away in a rope bin and fight a rat over a block of cheese. If we see any mermaids, I'm gonna ask them where their mer-ginas are. We're not taking sailing classes, you rubes.`,
    `What's your job? I have a burger restaurant. Really? Is that so you can get better at the game? It's unrelated.`,
    `I've eaten nine birthday cakes, and I still feel empty. I mean, who are these people? Who are you, who am I?`,
    `Hi, I'm here for the orphan benefit, Tots Without Yachts? I'm the orphan.`,
    `I'm so high. Okay, now, guys, just touch... touch your smiles together, okay? This is going really well.`,
    // S2 E5
    `What's so great about getting food from a truck? There's no sitting area. There's no bathroom. There's long lines. Who eats like that? Animals eat like that.`,
    `Good luck with your terrible life. Good luck with your stupid walk. I hate the way you walk. Oh, good luck with wearing that face all over the world. Good luck with your ble... your blemishy face. My what? B... B... B-what?? Good luck with your speech therapy.`,
    `It's tight quarters, but it's kind of cozy. If by "cozy," you mean it reeks. Yeah, why do your armpits smell like feet?`,
    `We need a handle online. The Cat Burger-lers. Hmm, we're not an improv group. Beef curtains.`,
    `Is this organic? Sure. Is it grass-fed? Yes. Cruelty-free? Is it bison? That one is. Do these pair well with an IPA? It goes well with all letters.`,
    `It's not a lie if you lie to vegetarians.`,
    `Talk to me, Goose.`,
    // S2 E6
    `Dr. Yap is dreamy. When he's looking at my molars, it's like he's looking right into my soul.`,
    `That's right, Bob. Your negligent flossing habits are funding my one way ticket to Pound Town.`,
    `Your tongue feels so much different than my cat's.`,
    `So, you got any plans this weekend? Well, I have a family, so I don't really make plans.`,
    `I'm not wearing anything under my snowsuit. Oh, my God! Except for my long underwear. And my socks. And my other socks. And a maxi pad.`,
    `Dr. Yap, earlier today, I fell for you. But after watching you torture my father, I think we should just be friends. With dental benefits.`,
    `Be one of the tallest guys in the bar, and brag about how long your butt-crack is.`,
    // S2 E7
    `I've been mapping the Moody Foody's patterns for months. He follows a precise ethnic sequence in restaurants: Asian, European, Latin, American. Like Larry King with his wives.`,
    `Draw a picture of my dad's moustache really giving it to a caterpillar.`,
    `Time for the charm bomb to explode.`,
    `You're like a benign tumour. With a little bit of hair and teeth.`,
    `Well, your haircut's overdone and dry! And you, your pants are overdone and dry! Look at your dumb face! It's overdone and dry!`,
    `What the hell is wrong with you? I had a nightmare, Lin. I worked in an office. I had to sign a birthday card.`,
    `Well, let's just say some of my fellow disgruntled restaurateurs have been dump sacking your house.`,
    // S2 E8 +3 quotes because I couldn't decide
    `Are there any shows or movies left in the world that you haven't perved up? No. That's why I've started writing erotic friend fiction. Using people at school and zombies.`,
    `Tina, no offence, but this tour is giving me a snore-gasm. Show me something good. Well, there's a typo on the lunch menu. It says "browie."`,
    `Detention is no big deal, Mom. Don't have a crap attack. What did you just say? A crap attack. Don't have one.`,
    `We're not skipping Cake. Okay, fine. But I'm gonna complain the whole time.`,
    `I think Tammy laugh-farted. That really smells, Tammy. What? I didn't fart, you did! Oh. Okay. Come on, if you're gonna be loud, you got to be proud!`,
    `Oh, you are drunk, Mom. No, I'm not. Yeah, 'cause you're yelling. I'm talking normal. Hm. Mommy doesn't get drunk. She just has fun.`,
    `Piercing booth! Y'all do nips or scrotes?`,
    `Oh, he's been slapping everything since we got back from that show. It's called "caking," Lin.`,
    `Let's see what happens when we lose the glasses. They kind of make your face look like math class. Thank you? No, math class is bad.`,
    `Bob? You're a patty daddy? I love cake! Want to cake with me? Oh. You know, I'm really not a fan. A patty cake, a patty cake, a baker's man! Woo!`,
    // S2 E9 +3 quotes because I couldn't decide
    `Flu season is right around the corner. So our local beauty expert will be here to show you how to look hot, even if you have a cold.`,
    `Dad's hogging the bathroom so I'm using the guest bathroom! Ugh, Gene. Come on, you've let me do it before! Fine. But move the dishes.`,
    `Is no one going to comment on my Sasquatch mask? Middle child. Anything for attention.`,
    `This is me now!`,
    `Oh, hello. Are you a little bunny? I smell fear on you. Okay. I don't like that one.`,
    `Uh, actually, these eggplants were freshly laid by the chickenplant this morning.`,
    `Okay, okay, that'll be $5. Throw in another five and he'll burp in your face.`,
    `I refuse to live in a house with low-flush toilets. I deserve the full flush, Linda.`,
    `The last time I used superglue, I accidentally glued my wiener to my remote control helicopter.`,
    `A-boobity-boobity-boobity-boo!`
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
    tempText = tempText.map(item => `<p>${item}</p>`).join("");
    result.innerHTML = tempText;
    }
});

numOfParas.addEventListener('input', syncParaNumber);