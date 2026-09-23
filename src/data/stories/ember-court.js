// The Ember Court — flagship title, rebuilt 2026-09 for the full-length
// edition: 22 scenes, 8–9 chapters per read-through, 7 endings.
//
// Node ids are new (c*/e*) rather than reusing the original n* ids: the
// seed script only upserts, so readers partway through the original
// version keep their old nodes and can finish that version undisturbed,
// while new readers start at c1.
//
// Engine contract: { startNode, nodes }, each node { chapter, text,
// choices | ending }, chapters 4+ locked. Flags: `guarded` (set in
// chapter four, read by the "Give back what you owe" choice in c8).

// Scenes reachable at two different chapter numbers share their text,
// so the chapter heading always matches the reader's actual progress.
const OFFER_TEXT = `The guest wing of the Ember Court is the warmest place you've been since you arrived, and it isn't because of the Ember. Esker has made it his own. Brass braziers burn in every corner, their flames impossibly bright under the water, and the whole room smells faintly of cinnamon and smoke.

He's alone. No guards, no servants. He pours two cups of something dark and hands you one. You don't drink it. He doesn't seem offended.

"You're wondering why a dragon-blooded lord cares so much about a fire at the bottom of a lake," he says, settling into a chair. "Everyone wonders. Let me save you the trouble. It's the only fire in the world that can't be put out by water. Do you know what that's worth, to people like me? To a house whose whole strength is fire, surrounded by rivers and rain and enemies with buckets?" He smiles. "It's worth a war. Luckily for everyone, I'd rather not have one."

"You've been asking about me since before I arrived. Why?"

"Because I've been waiting to meet you for a very long time." He leans forward. "I felt you the day you took it. Three years ago. Half the Ember walking out of the lake and into the borderlands. I've been able to feel you ever since, a little red light on the edge of my senses. Some nights, when you were cold, I could feel you holding it." His gold eyes are very steady. "I know it better than you do, hunter. I know what it's doing to you."

"It's keeping me alive."

"It's burning you out." He says it gently, which is worse. "Mortal hearts aren't made to hold that kind of fire. It's why the last one who carried it died. Not when she gave it back — before. She'd been burning for years. She just hadn't noticed. You've felt it, haven't you? The nights you can't sleep. The fevers. The way you can walk through snow without a coat and never feel the cold."

You have. You've told yourself it was nothing.

"Corvin didn't tell you that," Esker says. "I wonder why."

"What's your offer?"

"Simple. My blood can draw fire out of anything. Out of iron, out of stone." He holds out his scaled wrist, and the braziers in the room lean towards him. "Out of a mortal heart, slowly and gently, without taking the heart along with it. I can take the Ember out of you and leave you alive. Free. No debt, no binding, no drowned king with a claim on your life. You could go back to the borderlands tomorrow and never think of this place again."

"And the fire goes to Varr."

"The fire goes where it will be *valued*." He sits back. "This court is dying, hunter. It's been dying for a century. Your king split its heart for a woman he'd known an hour. Is that a keeper you want to trust with something this precious?"

You think of the children in the cold halls at the edge of the drowned city. You think of the eleven the court has buried this year.

"If I say no?"

"Then I take it the hard way." He says it with real regret. "Not tonight. I'm a guest, and I have manners. But soon. And the hard way is much less gentle, for you and for them."

He rises and goes to the door, and holds it open.

"Take the night to think," he says. "Or take my hand now, and be home by morning. I promise you, I have never broken a bargain in my life. That's more than your king can say."`;

const C7_VARR_TEXT = `You take his hand. His skin is hot as a hearthstone.

"Good," Esker says, and for a moment he simply looks relieved, the way a man looks when a long gamble finally pays. "But not here. A fire this old won't come out of you for a brazier in a guest room. It needs a forge, and the only forge in the world that can hold it is in Varr. Two days' ride." He's already reaching for his cloak. "We leave tonight, through the water-gate, before your king feels you go."

"Tonight."

"Tonight. Unless you'd like to explain yourself to him first." His gold eyes are amused. "I thought not."

You follow him down through the sleeping court. The halls are dim and cold, the lanterns turned low, the carved faces on the walls watching you pass with their shut stone eyes. Nobody stops you. Nobody's awake to. The Ember is a slow pulse under your feet, and the half of it in your chest pulls towards it with every step you take away, the way a dog pulls at a lead.

The water-gate is at the very bottom of the drowned city: an arch of black stone where the lake meets the air in a wall of silver, and beyond it, a stair cut into the cliff, climbing up to the reeds and the borderlands and the dark.

Maren is standing in front of it.

She isn't armed. She has her ring of keys at her belt and a lantern in her hand and two horses' bridles over her arm, and she doesn't look surprised to see you.

"Lord Esker," she says politely. "Your horse is saddled at the top of the stair. Go on up. I need a word with the hunter."

Esker looks from her to you. Then, with a small shrug, he steps through the silver wall and is gone.

Maren waits until the ripples settle.

"He knew," she says. "Corvin. He's known since the envoy's first letter that Varr could take it out of you. He was going to tell you tomorrow. He asked me to have horses ready, in case you chose to go." She holds up the bridles. "So. Here I am. Doing as I'm told."

You can't speak.

"Do you know what he does every night?" she asks. "After the court's asleep? He goes down to the Ember and he puts his hands on it. Bare. He's been feeding it his own fire, a little at a time, ever since you left, to keep it alive while half of it was walking round the borderlands in you." She says it flatly, without accusation, as if she's reporting the price of grain. "Look at his hands, next time. If there is a next time. You never did."

"Why didn't he tell me?"

"Because the moment he told you, you'd owe him. And he'd rather lose you than own you." Her mouth twists. "He's a fool. I've told him so. He agrees with me."

Above you, through the silver, you can hear horses stamping. Esker waiting.

"The gate's open," Maren says, and steps aside. "It's always been open for you. That's the whole trouble with him."`;

const TRAITOR_TEXT = `You take his hand.

Esker smiles — a real smile this time, warm and pleased — and draws you gently to sit in the chair across from him. "You won't regret this," he says. "Close your eyes. Breathe slowly. It will feel like sunlight leaving a room."

It does. It's almost pleasant. His scaled fingers rest over your heart, and the warmth that's lived there so long begins to flow out through your chest and into his palm, a long thread of red-gold light, and you feel lighter with every breath. The fevers. The sleepless nights. The ache you'd stopped noticing. All of it going, going—

Then gone.

You open your eyes. Esker is holding a ball of fire in his cupped hands, no bigger than an apple, burning red and gold. He's looking at it the way people look at their newborn children.

"There," he says softly. "Home at last."

Your chest is cold. You press your hand to it, and feel only your own heartbeat. Small. Mortal. Free.

Far below you, something breaks.

You feel it through the floor, through the water. A low, deep tremor, like the whole drowned city drawing breath and not letting it out. Down in the Ember chamber, the other half of the fire has just felt its twin carried out of reach, and it has stopped trying.

"What's happening?"

"The water's coming in," Esker says calmly, tucking the fire into a brass lantern at his belt. "The Ember held it back. Without its other half, it can't. They'll have an hour, perhaps two, to get their people up to the surface. Most of them will make it." He looks at you kindly. "I did tell you it was dying anyway."

You're out of the guest wing before he finishes the sentence.

The drowned city is chaos. Lanterns going out one by one. Water turning black and cold. People streaming up the great stair, carrying children, carrying the old and the sick. You fight against the current of them, down, down, towards the Ember chamber, and you're halfway there when you meet Maren coming up.

She doesn't stop. She doesn't speak. She looks at you once, at the cold place on your chest where the fire used to be, and then she spits at your feet and keeps climbing, a child on each hand.

You find him in the Ember chamber. He's kneeling by the empty pedestal. The last coal of the Ember is cupped in his burned hands, and he's pouring every scrap of his own fire into it, trying to keep it alive long enough for his people to reach the surface.

He doesn't turn around. He knows you're there. He always knew.

"Go," he says. His voice is very quiet. "You're free. That's what you wanted. Go and be free."

"Corvin—"

"*Go.*"

You go.

You surface into the grey borderlands dawn with the last of the court. You stand in the frozen reeds and watch the black lake freeze over behind you. Not with ordinary ice. With something deeper and darker, a cold that goes all the way down.

He doesn't come up.

You walk home through the frost. Your cabin is cold. You build up the fire, and it's just a fire.

You are free. No debt. No binding. No drowned king with a claim on your life. Esker kept his word exactly.

You never feel warm again.`;

export const emberCourt = {
  startNode: "c1",
  nodes: {

    c1: {
      chapter: "One — The Summons",
      text: `The wards on the ironwood door are humming, but the sound is thin, like old magic running out of breath. It is past midnight. In the borderlands, midnight is when the dark stops being empty.

You sit by the hearth with your hunting dagger across your knees and draw the whetstone down its edge. *Shhhk. Shhhk.* The rhythm is the only thing keeping you awake. Your fingertips are grey with silver-dust from checking the threshold markers, though you know they're mostly for your own comfort. If something truly wanted to come in, three grains of salt and a prayer would not stop it.

The air in the room goes cold.

The candle flame doesn't flicker; it freezes, turning a rigid, unnatural blue. You're on your feet before the whetstone hits the floor, blade up, eyes sweeping the corners of your small cabin.

No splintering wood. No breath at the window.

It simply arrives. A heavy envelope rests on your windowsill as if it had grown there, sealed with wax the colour of something that used to be alive. It smells of brine and cold stone, and pressed into the wax is a sigil you would know in the dark: a flame, burning inside a ring of water.

The Ember Court.

Your heart strikes your ribs like a hammer, and beneath it, just under your breastbone, the other thing stirs — the small, stubborn warmth that has lived in your chest for three years. On the coldest nights it is the only warm thing in the borderlands. Tonight it flares, bright as a coal someone has breathed on.

You remember how it got there. You were hunting a drowner in the lower realms, and the black lake took you. You remember the cold closing over your head, your lungs filling, the light going out. And then a hand flat against your chest, and fire — actual fire, burning under the water — pouring into you until your heart remembered how to beat.

You remember his voice in the dark. *What I give, you return when I call.*

You remember weeks in his drowned court while you healed. You remember one night, and his hands, and the way he said your name as though it were a secret he'd been keeping for you. And you remember the grey morning after, slipping out of his bed before he woke, because staying felt like a debt you could never afford to pay.

Your training says to burn the letter unopened, salt the ash and bury it at a crossroads. Your training has never once stopped you from doing the opposite where he is concerned.

You break the seal. The wax snaps like a small bone. Inside, in the elegant, sweeping hand you used to watch him practise by candlelight:

*Come to the Ember Court, or the debt comes due.*

No signature. It doesn't need one.

You hold the corner to the hearth. The parchment curls but will not catch. It bleeds a thin black smoke that smells of the sea, and the warmth in your chest pulses in answer, as if something far below the earth has just remembered where you are.

Three years you've spent running. You are out of time. He knows where you are.`,
      choices: [
        { label: "Refuse the summons — Send back four words: you owe him nothing. If he wants the debt, let him come and collect it.", next: "c2_refuse" },
        { label: "Answer the call — Pack your blades and go down to the black lake before he comes to you.", next: "c2_answer" }
      ]
    },

    c2_refuse: {
      chapter: "Two — The Refusal",
      text: `You turn the letter over and write on the back with a charred stick from the hearth. *I owe you nothing.* You leave it on the windowsill. By the time the sky greys, it's gone.

It is a lie you've told yourself every morning for three years. Seeing it in your own handwriting does not make it any truer.

By dusk the next day, a storm has rolled off the hills and the rain comes down like it has a grudge. You are banking the fire when the wards on your door stop humming — not failing, not shattering, simply falling quiet, the way a dog falls quiet when it recognises the footsteps on the path.

He knocks once.

You open the door with your dagger in your hand, and there he is. Corvin, King of the Ember Court, standing in the mud of the borderlands with the rain running off him. He is taller than you let yourself remember, and paler. A crown of black iron sits crooked on his temple, as though he put it on without looking and forgot it was there. Behind his eyes, where anyone else's would simply be dark, there is a low red light, like coals under ash.

He looks exhausted. He looks like a man who has run out of other options.

"You don't get to refuse this," he says. His voice is quiet, and it still does exactly what it used to do to you. "Not this."

"You don't get to stand on my step after three years and tell me what I get to do."

Something crosses his face — a flinch, or the ghost of a smile, or both. "Fair."

He does not try to come in. He stands in the rain as it soaks through his coat, perfectly still, and waits. It's the stillness that undoes you in the end. You step back from the doorway. It's not a welcome. It's barely an inch. He takes it.

The moment he crosses the threshold, your hearth fire leans towards him like a flower towards the sun. The warmth in your chest flares so hard you have to put a hand over it.

He sees. Of course he sees. "It still burns," he says softly. "Good. I was afraid it had gone out."

"What did you put in me, Corvin?"

"Half the Ember." He says it plainly, the way he always said the worst things. "The fire at the heart of my court. It keeps the drowned halls warm and the water from closing over us, and the night you drowned it was the only thing I had that could restart a dead woman's heart. So I split it. Half stayed with the court. Half went into you."

You stare at him. The rain drums on the roof.

"And now you want it back."

"Now the half I kept is dying." For the first time, his composure slips. "It was never meant to burn alone. It's been going out, a little at a time, since the morning you left, and I have perhaps nine days before there's nothing left for your half to return to. I didn't write to take anything from you. I wrote because I have no one else to ask."

"And if giving it back kills me?"

He doesn't answer quickly. That, more than anything, tells you he's thought about it. "Then we find another way. I didn't save your life to take it back."

You should send him away. Instead, an hour later, you are walking beside him into the black lake two miles past the tree line, blades strapped to your back, the water climbing your legs, your waist, your chest. When it closes over your head you don't drown. The fire in you won't allow it. His hand finds the small of your back in the dark and stays there.

Below, the Ember Court opens its gates the way your wards did: as though it has been waiting for you all along.`,
      choices: [
        { label: "Let him lead you in — Leave your blade sheathed. Let him show you the Ember and tell you the rest.", next: "c3_open" },
        { label: "Go in as a hunter — Keep your blade drawn and make him answer every question before you take another step.", next: "c3_blade" }
      ]
    },

    c2_answer: {
      chapter: "Two — The Black Lake",
      text: `You don't write a refusal. You pack instead: the hunting dagger, the silver-edged short sword, a vial of salt you have never once needed and refuse to leave behind. Whatever waits beneath the earth will not be moved by paper, and you would rather walk in on your own feet than be collected like a parcel.

You leave at first light. The wards sigh shut behind you. You don't look back at the cabin. You learned a long time ago that looking back is how the dark water finds you.

The black lake lies two miles past the tree line, so still it looks solid. The reeds around it are brittle with frost, though it's nowhere near winter. As you walk down to the edge, the warmth in your chest grows heavier, the way a lodestone pulls towards north.

You wade in fully clothed. The cold should stop your heart. It doesn't. At your waist the water turns strange and thick. At your chest it is almost warm. And when it closes over your head, your lungs take in something that isn't quite water and isn't quite air, and your body accepts it far too easily.

The court reveals itself slowly, the way eyes adjust to the dark. Towers of pale coral and bone. Bridges of black glass. Lanterns that burn without flame, their light green and gold and drowned. And beneath it all, so faint you feel it more than see it, a red glow at the city's heart, like a coal smouldering under ash.

It is dimmer than you remember. Much dimmer.

A woman is waiting for you on the lowest step of the great stair. She is older than you, silver-haired, dressed in the court's grey, with a steward's chain of keys at her belt and a face like a closed door.

"Hunter," she says. Not a greeting. An identification.

"Maren." You remember her. The seneschal. She nursed you through the fever after the lake and never once pretended to like you. "I've come about the debt."

"I know why you've come." She looks at the place on your chest where the warmth lives, as if she can see it through your coat. Perhaps she can. "Do you know what it is you're carrying?"

"Something he gave me."

"Half of everything we have." Her voice is flat, but her hands are clenched. "The Ember keeps the water from closing over us. It keeps our children warm and our dead remembered. He split it for you, and since you took your half away, the other half has been going out. We've buried eleven of our own this year. The cold took them in their sleep."

You didn't know. You tell yourself it wouldn't have changed anything. You aren't sure that's true.

"He should have told me."

"He should have done a great many things." For a moment something human cracks through her face. "He wouldn't send for you. Not once. I asked him every month. He said the debt was his to carry, not yours. He only wrote when I told him we had nine days left."

Footsteps on the stair above. You look up.

Corvin stands at the top, exactly where every one of your memories put him. He is taller than you let yourself remember, and paler. A crown of black iron sits crooked on his temple, as if he put it on without looking. Behind his eyes, a low red light moves, like coals under ash.

"You came," he says, and his voice cracks on the second word.

"I haven't decided what I've come for yet."

Something moves behind those ember eyes. Relief, or grief, or both. "Then come and see what's left of it, before you decide."

Maren steps aside to let you pass. As you climb, she says quietly, only for you: "If you break him again, Hunter, I will drown you myself."`,
      choices: [
        { label: "Let him lead you in — Leave your blade sheathed. Let him show you the Ember and tell you the rest.", next: "c3_open" },
        { label: "Go in as a hunter — Keep your blade drawn and make him answer every question before you take another step.", next: "c3_blade" }
      ]
    },

    c3_open: {
      chapter: "Three — The Ember Beneath",
      text: `He takes you to the heart of the court without a word, down a spiral stair that grows warmer with every turn, until the black water around you shimmers with heat like air above a summer road.

The Ember chamber is round and vast and very old. The walls are carved with a thousand drowned faces — kings and queens of the court, he told you once, every one of them a keeper of the fire. In the centre, on a pedestal of fused black glass, the Ember burns.

When you left, it was the size of a man, a pillar of red-gold flame that burned under the water as if water were nothing. Now it is a coal no bigger than a heart, pulsing slowly, each beat a little dimmer than the last.

The warmth in your chest answers it. You feel it reach for its other half like a hand reaching for a hand.

"Nine days," Corvin says. "Perhaps fewer."

"Maren said it's killing your people."

"Maren is right." He doesn't soften it. "The cold comes in first at the edges of the city, where the poorest live. We've lost eleven."

You make yourself look at him, not the fire. "Why didn't you send for me sooner?"

"Because giving it back might kill you." He says it quietly. "The fire has lived in you a long time. It's woven through your heart now, not just sitting in it. If you pour it back into the Ember, I don't know how much of you it will take with it. Maren thinks all of it. I think — I hope — less. But I don't know, and I wasn't willing to guess with your life."

"And now you are."

"Now I'm out of time." His jaw tightens. "And there's something else. House Varr has an envoy in my court. Lord Esker. The dragon-blooded houses to the east have wanted the Ember for a century — fire is the one thing they value above gold — and they can smell when it's weak. He arrived four days ago with a very polite letter and a great many guards."

He turns to face you fully.

"There are two ways to save the court. You can give back your half, and we find out together what it costs you. Or we can bind ourselves." He lifts his hand. There's an old scar across the palm. "Blood, fire and nearness. If we bind, the two halves can burn as one through both of us, as long as we stay close. It buys the court time. It buys you your life. But it ties you to me and to this place, and you would not be free to walk away again. Not easily."

"That's not a choice. That's a cage with two doors."

"I know." Something aches in his face. "I'm sorry. I'd give you a better one if I had it."

You stand between him and the dying fire, the warmth in your chest pulling towards both of them at once.

You remember the night you left. You remember lying awake beside him, listening to him breathe, and thinking: if I stay one more day, I will never leave. So you left. And the fire came with you, and all this time, you never once asked what it had cost him to let you go.

He's waiting. He doesn't push. He never did.`,
      choices: [
        { label: "Take his hand — Bind yourself to him. Save the court now, and deal with the cage later.", next: "c4_bind" },
        { label: "Refuse the binding — Face the Ember alone and find out what the fire in you can really do.", next: "c4_alone" }
      ]
    },

    c3_blade: {
      chapter: "Three — Answers at Knifepoint",
      text: `You keep your blade drawn all the way down the spiral stair. He doesn't comment on it. He doesn't look back once, which is either trust or contempt, and with Corvin you have never been able to tell the difference.

The stair ends in the Ember chamber, round and vast and warm, its walls carved with the faces of drowned kings. In the centre, on a pedestal of black glass, the Ember burns.

It used to be a pillar of flame as tall as a man. Now it is a coal no bigger than a heart, pulsing slowly, each beat dimmer than the last. The warmth in your chest lurches towards it so hard you nearly stagger.

That's when you move. Two steps, a hook of your foot behind his heel, and he's against the chamber wall with your dagger at his throat and a carved queen's face beside his ear.

He lets it happen. You both know he let it happen.

"Everything," you say. "Now. What did you put in me, what do you want back, and what happens to me when you take it?"

"Half the Ember," he says, very calmly, for a man with steel against his pulse. "It was the only thing that could restart your heart. I split the court's fire in two and gave you half. It's been burning in you ever since. And the half I kept has been dying since the morning you left, because it was never meant to burn alone."

"And if I give it back?"

A pause. It's too long. "I don't know."

"Don't lie to me."

"I'm not." The red light moves behind his eyes. "The fire has woven itself through your heart. If you pour it back, it may take some of you with it. It may take all of you. I don't know, and I won't pretend to."

"She knows," says a voice from the doorway.

Maren stands there with her ring of keys and her closed-door face. She has clearly been listening for some time. "The last person who carried a piece of the Ember was a queen, four hundred years ago. When she gave it back, she died on this floor. He knows that. He's been reading her records every night for a month."

Your blade doesn't move. Corvin doesn't take his eyes off you.

"Is that true?"

"It's true that she died," he says. "It's also true that she gave it back alone, in anger, and the records say the fire tore out of her like a flood. I don't believe it has to happen that way. There's a second way." He lifts his left hand slowly into your view. An old scar crosses the palm. "A binding. Blood, fire and nearness. The two halves burn as one, through both of us. It saves the court for as long as we stay close. It doesn't cost your life. It costs your freedom."

"That's why you waited three years."

"I waited three years because I would rather lose my court than bargain you into a cage." For the first time his voice isn't calm. "I only wrote when Maren told me we had nine days left. Ask her. She'd been begging me to send for you every month since you left."

You look at Maren. She lifts her chin and doesn't deny it.

"We've buried eleven of our own this year," she says. "The cold takes the poorest first, at the edges of the city. That's what his careful three years cost us." Then, before you can answer: "And there's one more thing. House Varr's envoy has been in this court four days. Lord Esker. Dragon-blooded, charming, and very interested in our fire. If you're going to decide, decide quickly. He's already asking why the king had visitors."

Slowly, you lower the blade.

Corvin doesn't move away from the wall. There's a nick on his throat where your dagger rested, a single bead of blood. It glows faintly red, like a spark.

"So," he says quietly. "Now you know everything I know."`,
      choices: [
        { label: "Take his hand — Bind yourself to him. Save the court now, and deal with the cage later.", next: "c4_bind" },
        { label: "Refuse the binding — Face the Ember alone and find out what the fire in you can really do.", next: "c4_alone" }
      ]
    },

    c4_bind: {
      locked: true,
      chapter: "Four — Blood and Fire",
      text: `You hold out your hand.

He looks at it for a long moment, as though it might vanish if he reaches too quickly. Then he draws a thin blade of black glass from his belt and turns your palm upward.

"It will hurt," he says.

"Everything with you hurts."

That almost makes him smile. He cuts your palm, a clean shallow line, and then his own, reopening the old scar. The water around your joined hands blooms dark, and he laces his fingers through yours and holds them out over the Ember.

The fire notices.

It rises off the pedestal in a long thread of red-gold, curling through the water towards your hands. The warmth in your chest goes to meet it, and the two halves find each other in the place where your palms press together, and for one blinding second you can't tell where your blood ends and his begins.

You feel him. Not his hand — him. The steady, stubborn heat of him, and underneath it, a long, patient cold. Nights spent in this chamber, feeding the dying fire with nothing but his own will. The morning he woke and found your side of the bed empty and still warm. He hadn't followed. He'd sat on the edge of the bed until the warmth was gone.

You gasp. He's seeing you, too, you realise. The cabin. The borderlands. Every night you put your hand over your heart and felt his fire there and told yourself it meant nothing. The winter you walked through a blizzard with your coat open and didn't feel the cold, and understood, for one frightening moment, that you were never going to be entirely free of him. The contract you turned down in the lowlands because the job was by a lake, and you couldn't bear the thought of standing at the edge of dark water and not going in.

He sees all of it. You feel him see it. And you feel what it does to him — not triumph, not satisfaction. Something closer to grief. As if he'd hoped, all this time, that you at least had been happy.

The Ember flares. It isn't the pillar it once was, but it's no longer a dying coal. It burns like a hearth fire, strong and red, and warmth rolls out across the chamber and up through the drowned city, and somewhere far above you hear something you haven't heard since you arrived: people laughing.

The thread of fire settles. The binding holds.

Neither of you lets go.

"Did you see—" you begin.

"Yes."

"You sat there until the bed went cold."

"Yes." His voice is rough. "And you kept your hand on your heart every night like you were holding something in."

You should step back. The ritual is done. Instead you find yourself close enough to feel his breath, his forehead nearly touching yours, your joined hands still warm and bleeding between you. You can hear his heart. It's going as fast as yours.

"This is the part," he murmurs, "where you tell me it was only for the court."

You don't answer. Your free hand has found his collar, and you don't quite remember deciding to put it there. The fabric is damp and warm under your fingers. He goes very still, the way he does when he's afraid that moving will break something.

His gaze drops to your mouth, and lingers, and comes back up. He doesn't close the distance. He's leaving that to you, you realise — the way he's left everything to you since the night he pulled you out of the lake. It would be so easy. An inch. Less.

A door slams somewhere above. Boots on the stair — many of them, heavy and fast.

Maren appears in the doorway, breathless. She takes in the two of you — the blood, the joined hands, how little space there is between you — and her mouth goes thin. But her eyes are wet, and she looks, for a moment, at the burning Ember the way a starving woman looks at bread.

"He felt it," she says. "Esker. The whole court felt the Ember flare, and so did he. He's demanding an audience. Tonight. He's saying the fire was stolen from House Varr's rightful claim, and he wants to see the thief."

Corvin closes his eyes. When he opens them, the man is gone and the king is looking out.

"He means you," he says.`,
      choices: [
        { label: "Keep it to duty — Let go of his hand. This was for the court, and you need a clear head for what's coming.", next: "c5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Stay close — Keep hold of him. Whatever Esker wants, he can wait one more minute.", next: "c5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    c4_alone: {
      locked: true,
      chapter: "Four — What the Debt Was",
      text: `"No," you say. "No binding. Not yet."

He nods as though he expected it. He probably did.

"Then what will you do?"

You don't know. So you do what you always do when you don't know: you walk towards the dangerous thing.

The Ember is warmer the closer you get. At arm's length it's like standing beside a forge. At a hand's breadth, the warmth in your chest is pulling so hard that it aches, and when you finally lay your palm on the black glass beside the dying coal, the world goes red.

You are not in the chamber any more.

You are underwater, and dying. You feel the lake in your lungs, the dark closing in. And you feel him — not as you saw him then, but as he felt. Corvin, kneeling on the lakebed with your body in his arms, the Ember burning in his other hand. You feel his fear. Not fear of losing a stranger. Fear of losing *you* — though at that moment he had known you for less than an hour.

And you feel the bargain as he made it. *What I give, you return when I call.* But the words underneath the words, the ones the fire remembers, are different. The fire remembers what he actually promised it, in the silence of his own head, to make it agree to leave its home and burn inside a mortal.

*She is worth half my court. If she is not, take the rest of me as well.*

You rip your hand away and stagger back. He catches you before you fall.

"What did you see?" he asks.

"You bet your court on me." Your voice is shaking. "Before you even knew my name."

He doesn't deny it. He looks away, and it's the first time in your memory that Corvin has looked away from anything.

"You weren't supposed to see that," he says.

"You should have told me. Back then. You should have told me what it cost."

"And you'd have stayed out of guilt." He finally meets your eyes, and the red light behind his is very bright. "I didn't want a debtor in my bed. I wanted you, or nothing."

The warmth in your chest has settled. It feels different now. Heavier. It's not just fire any more; it's a promise you didn't know you were carrying, and you can't put it down.

The Ember pulses once, weakly. On the pedestal, a thin flake of ash breaks away from it and drifts up through the water.

"It took a little," Corvin says, watching it go. "When you touched it. Just a little of your half, to steady itself. It hasn't done that since you left."

"So it can take it from me."

"It can. The question has always been how much."

Boots on the stair above — many of them, heavy and fast. Maren appears in the doorway, breathless.

"The court felt that," she says. "So did Esker. House Varr's envoy is demanding an audience tonight. He says the Ember's other half was stolen from Varr's rightful claim, and he wants to see the thief."

Corvin's hand is still on your arm. He takes it away slowly, and the king comes back into his face like a visor dropping shut.

"He means you," he says.`,
      choices: [
        { label: "Keep it to duty — Step back. Whatever you just felt, you need a clear head for what's coming.", next: "c5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Stay close — Take his hand before he can pull it away. Whatever Esker wants, he can wait one more minute.", next: "c5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    c5_guarded: {
      locked: true,
      chapter: "Five — The Hunter's Distance",
      text: `You step back first. It costs more than you want to admit — a small tearing somewhere under your ribs that has nothing to do with the fire and everything to do with how easily he still gets under your guard.

"Tell me about Esker," you say. "Everything. If he's coming for me, I want to know how he fights."

Corvin's face goes smooth. The king, not the man. "Of course."

He tells you on the walk up through the city, keeping a careful pace's distance, exactly the space you've asked for without needing to ask twice. House Varr rules the burning hills to the east. Their bloodline carries dragon-fire — not the whole beast any more, but enough to light a forge with a breath and to feel any fire nearby the way a hound smells meat. They've wanted the Ember for a hundred years. Every generation they send an envoy with a treaty in one hand and a threat in the other.

"And this one?"

"Esker is cleverer than most." Corvin's mouth thins. "He doesn't threaten. He offers. He's been in my court four days and half my council already thinks he's charming."

"Do you?"

"I think he's the most dangerous man I've ever let through my gates." He glances at you. "Present company excepted."

The drowned city is warmer than it was when you arrived. You can feel it in the water, see it in the lanterns burning a little brighter. At the edge of a coral bridge, a child is pressing her hands to a lantern-post and laughing at the heat in it. Her mother catches your eye and bows, very low. You don't know what to do with that, so you keep walking.

"They know who I am," you say.

"They know the Ember flared tonight for the first time since you left, and that you walked in the same day." He pauses. "They've been cold for a long time. Let them be grateful."

"I haven't done anything yet."

"You came back," he says. "For some of them, that's everything."

You reach a wide balcony overlooking the city, and he stops. From here you can see the whole of the Ember Court spread out below, pale towers and black bridges and a thousand drowned lanterns, and at the very centre the red glow of the fire.

"The audience is in an hour," he says. "The Hall of Tides. Esker will speak first. He'll call you a thief, politely. He'll say Varr's treaty gives them first claim on any fire that leaves this court. It's nonsense, but it's old nonsense, and my council respects old nonsense."

"And what do you want me to do?"

"Whatever you choose." He says it simply. "You've never taken orders from me. I'd be a fool to start giving them now."

You look at him properly for the first time since you stepped back. The crooked crown. The exhaustion in the set of his shoulders. The way he keeps his hands clasped behind his back, as if he doesn't trust them not to reach for you.

The question comes out before you can stop it. "Did you ever come up? After I left?"

He's quiet for so long you think he won't answer. Below you, the lanterns flicker in some slow current.

"Twice," he says at last. "The first winter. I walked up out of the lake and as far as the tree line, and I could see the smoke from your chimney. I stood there until dawn." He doesn't look at you. "The second time was the night the Ember first guttered. I got as far as your door. I could hear you inside, sharpening something. I didn't knock."

"Why not?"

"Because you'd have answered it." A faint, tired smile. "And then I'd have asked for something, and you'd have given it, and neither of us would ever have known if you meant it."

You don't have anything to say to that. You look out at the city instead, and feel him not looking at you, carefully, beside you.

A bell rings somewhere below, low and slow. The first summons to the Hall of Tides.

"There's a guest wing on the east side," Corvin says quietly. "Esker is lodged there. If you wanted to meet him before the audience — take his measure without the whole court watching — the guards would let you through. I wouldn't stop you."

"You'd trust me alone with him?"

"I'd trust you alone with anyone," he says. "It's everyone else I worry about."`,
      choices: [
        { label: "Walk into the audience at his side — Face Esker in front of the whole court, with Corvin next to you.", next: "c6" },
        { label: "Meet Esker alone first — Go to the guest wing and take the envoy's measure before he takes yours.", next: "c6_rooms" }
      ]
    },

    c5_close: {
      locked: true,
      chapter: "Five — What the Water Keeps",
      text: `You don't let go.

He goes very still when your fingers close around his. Maren looks from your joined hands to his face, sighs like a woman who has seen this coming for a very long time, and says, "One minute. Not a second more," and closes the door behind her.

The chamber is quiet. The Ember burns low and red on its pedestal, and the warm water moves around you both like a slow tide.

"Esker's waiting," he says. He doesn't move.

"Let him."

You're not sure who closes the distance. You think it might be you. You think it might have been decided long ago, on a grey morning, when you walked out of his room and spent every day since pretending you hadn't left anything behind.

His mouth is warm. Everything about him is warm down here, the one heat in a cold, drowned world, and he kisses you the way he does everything — carefully at first, as if asking permission, and then not carefully at all. His hand slides into your hair. Yours is fisted in the front of his coat. The fire in your chest leaps to meet the fire in his, and you feel the Ember flare behind you, a pulse of red light across the carved faces of four hundred years of kings.

When you break apart, you're both breathing hard. His forehead rests against yours.

"I told myself," he says, "that if you ever came back, I'd be dignified about it."

"How's that going?"

"Badly." He laughs, low and unsteady, and it's the first time you've heard him laugh since you arrived. You'd forgotten the sound of it. You hadn't let yourself remember.

"I should hate you," you say. "You put half your court in my chest and let me walk away with it."

"You should." His thumb traces your jaw. "I never stopped you. I'd let you walk away again, if you asked. I'd hate it. But I would."

"That's a terrible thing to say to someone you've just kissed."

"It's a true thing." The red light in his eyes is very bright. "I don't want you here because a fire makes you stay. I want you here because you choose to be. Otherwise it's just another bargain, and I'm tired of bargains."

You don't have a steady answer for that. So you kiss him again instead, slower this time, and let it answer for you.

The door opens exactly one minute later.

"Lord Esker," says Maren, with the precise lack of expression of a woman who knocked first and was ignored, "is in the Hall of Tides. He's been telling the council that the Ember's other half was stolen from House Varr's rightful claim. He's asked, very politely, to see the thief."

Corvin straightens, and the king comes back into his face, though his hand is still in yours. "Let him wait."

"He's been waiting. He's also," Maren adds, "sent word that if the thief would prefer to speak privately first, he'll receive her in the guest wing. No guards. Just a conversation." She looks at you. "I'd advise against it. I'd also advise against most of what you've done since you arrived, so take that as you like."

Corvin turns to you.

"Your choice," he says. "It always has been."`,
      choices: [
        { label: "Walk into the audience at his side — Face Esker in front of the whole court, with Corvin next to you.", next: "c6" },
        { label: "Meet Esker alone first — Go to the guest wing and take the envoy's measure before he takes yours.", next: "c6_rooms" }
      ]
    },

    c6: {
      locked: true,
      chapter: "Six — The Envoy of House Varr",
      text: `The Hall of Tides is built like the inside of a shell, a great spiral of mother-of-pearl that turns the lantern-light into something soft and shifting. The whole court is here — councillors in grey and green, officers in black-glass armour, drowned nobility with pearls in their hair — and every one of them turns to look at you as you walk in at the king's side.

Lord Esker of House Varr is waiting at the centre of the spiral.

You expected someone older. He can't be much past thirty, tall and fine-boned, his hair the colour of copper wire, his coat embroidered with tiny flames in gold thread. Scales the deep red of old embers run from his left wrist up under his sleeve. He's smiling, and the smile is perfectly pleasant, and it goes nowhere near his eyes. His eyes are gold, slit-pupilled, and they have fixed on your chest the way a cat fixes on a bird.

"Your Majesty," he says, and bows to Corvin with exactly the right depth. Then he turns to you and bows again, deeper. "And the famous hunter. I have waited a long time to meet you. Longer than you know."

"I'm sure you'll tell me."

"Oh, I will." He straightens. The water around him is noticeably warmer. "You carry something that doesn't belong to you. Half the Ember of this court, taken out of it by a king who had no right to give it away."

A murmur runs through the hall.

"The Ember is mine to keep," Corvin says. His voice is quiet, but it carries to every corner of the spiral.

"The Ember is yours to *keep*," Esker agrees pleasantly. "Not to divide. Not to hand to a passing mortal like a keepsake. The Treaty of the Burning Shore is very clear. Any fire that leaves the drowned court passes under the protection of House Varr." He spreads his hands. "I'm not here to fight, Your Majesty. I'm here to collect what the treaty says is ours. The hunter's half of the Ember. Hand it over, and House Varr will help you rekindle your own. We know fire. We could save your court in a week."

"And the hunter?" Corvin asks.

Esker's gold eyes find yours. "We would, of course, take very good care of her."

The warmth in your chest goes cold for a moment, like a hand closing over a candle.

"The treaty," says a grey-haired councillor, "is four hundred years old."

"Four hundred and twelve," says Esker. "I've read it several times. Have you?"

The councillor looks away.

Corvin says nothing. You realise, with a small cold shock, that he isn't going to. He is waiting — for you.

Esker notices too. "Perhaps the hunter would like to speak for herself," he says. "She's the one carrying our fire, after all. Or perhaps she'd rather we discuss it privately, somewhere a little less…" He glances at the court, at the officers' black-glass spears. "Crowded. My door is open. I'd much rather make a friend of you than an enemy."

Every face in the hall turns to you.

The warmth in your chest has come back, stronger than before. It's pulling — not towards Esker, but away from him, the way a flame leans from a draught. You can feel the fire in him, too, now that you're close. Dragon-fire. Hungry and patient and very, very hot.

Beside you, Corvin's hand brushes yours, so lightly that no one else could see it.

"Whatever you say," he murmurs, "I'll stand behind it."`,
      choices: [
        { label: "Answer Esker yourself, here and now — Refuse him in front of the whole court. Let everyone see where you stand.", next: "c7_fire" },
        { label: "Let him make his offer in private — Walk out of the hall and hear what House Varr really wants.", next: "c7_offer" }
      ]
    },

    c6_rooms: {
      locked: true,
      chapter: "Six — The Envoy's Offer",
      text: OFFER_TEXT,
      choices: [
        { label: "Take Esker's offer — Let him draw the fire out of you. Be free, whatever it costs the court.", next: "c7_varr" },
        { label: "Refuse him before the whole court — Walk out, go to the audience, and give him your answer where everyone can hear it.", next: "c7_fire" }
      ]
    },

    c7_offer: {
      locked: true,
      chapter: "Seven — The Envoy's Offer",
      text: OFFER_TEXT,
      choices: [
        { label: "Take Esker's offer — Let him draw the fire out of you. Be free, whatever it costs the court.", next: "e_traitor" },
        { label: "Refuse him and go to Corvin — Walk out, find the king, and tell him everything Esker just told you.", next: "c8" }
      ]
    },

    c7_varr: {
      locked: true,
      chapter: "Seven — The Water-Gate",
      text: C7_VARR_TEXT,
      choices: [
        { label: "Go with Esker — You chose this. Climb the stair to Varr and be free of the fire.", next: "e_traitor_early" },
        { label: "Turn back — Go down to the Ember and look at his hands.", next: "c8" }
      ]
    },

    c7_fire: {
      locked: true,
      chapter: "Seven — Fire Under Water",
      text: `"No," you say.

The word carries around the spiral of the hall. Every face turns from you to Esker.

"The fire in me was given to me, not stolen," you go on. "If it goes anywhere, it goes back to the Ember. Not to House Varr. Not to you. Tell your masters the treaty can drown."

For a moment, Esker simply looks at you. The pleasant smile doesn't move. Then, very softly, he says: "What a pity."

And the water catches fire.

It shouldn't be possible. It's the one thing you know about the drowned court: fire can't live down here, except the Ember. But Esker opens his hand and a gout of dragon-fire roars out of his palm, white-gold and screaming, turning the water to boiling steam in a line straight towards your chest.

You're already moving. Years of hunting throw you sideways before your mind catches up. The fire misses you by a hand's breadth and hits the pearl wall behind, which cracks with a sound like a bell breaking.

The hall erupts. Councillors scatter. Officers level their spears, but the water around Esker is boiling, and none of them can get close. He isn't looking at them. He's looking at you, and his fire is gathering again in his hand.

Then the room goes red.

Corvin has stepped between you. His crown has fallen somewhere. His coat is burning at the edges. And the light that always lives behind his eyes has come out — pouring off him, deep red, the colour of the Ember itself. The water around him doesn't boil. It *burns*, slow and dark, like coals under a bellows.

*He's the reason the court fears fire.* You remember hearing that, once, from a drowned soldier in a tavern, and thinking it was a joke. It isn't a joke.

Esker's white fire hits Corvin's red, and the whole hall shakes.

You don't wait. You go low, under the clash of heat, blade out. Esker sees you too late. Your dagger opens his sleeve and the scales beneath it, and his fire gutters as he twists away, clutching his wrist.

He stares at the blood on his hand. It's glowing. For the first time, the pleasant smile is gone.

"This isn't over," he says, and throws something at the floor. There's a flash, a roar of steam, and when it clears, he's gone — out through the cracked wall, into the dark maze of the drowned halls below the city.

Corvin sinks to one knee.

You're beside him before you know you've moved. His hands are blistered. His coat is scorched through. The red light is fading from his eyes, and his face is grey.

"You idiot," you say. "You absolute idiot."

"He was aiming for your heart." His voice is hoarse. "He wants the fire. He'll take it out of your body if he has to. I wasn't going to let him."

"I had it."

"You did." A tired, crooked smile. "I just wanted to be sure."

Maren arrives at a run, keys clashing. She takes one look at the king and snaps orders at the officers. Then she turns to you. "The Ember," she says. "Something's wrong. It's fading faster. Whatever Esker's been doing these four days, he's been doing it to the fire."

From the cracked wall comes a smell of smoke and cinnamon. Somewhere down there, in the maze of dark water, Esker is running — wounded, furious, and still carrying enough dragon-fire to burn his way back.

Corvin's hand closes on yours. It's shaking.

"Go to the Ember," he says. "Or go after him. I can't choose for you. I won't."`,
      choices: [
        { label: "Stay with Corvin at the Ember — Esker can wait. The fire can't.", next: "c8" },
        { label: "Hunt Esker through the drowned halls — He's wounded and he's running. Finish this the way you know how.", next: "e_hunter" }
      ]
    },

    c8: {
      locked: true,
      chapter: "Eight — The Ember's Price",
      text: `By the time you reach the Ember chamber, the fire is nearly out.

It sits on its pedestal like a dying coal, barely larger than your fist, pulsing so slowly you hold your breath between beats. The carved faces on the walls have gone dark. The water is cold. Somewhere above, you can hear the court — not laughing now. Silent. Waiting.

Maren is on her knees by the pedestal, her ring of keys forgotten on the floor. She looks up as you come in. "He's been drawing it off," she says. "Esker. Every night since he arrived, a thread at a time, through the braziers in the guest wing. We thought it was the cold. It was him."

Corvin comes in behind you, slower. On the way down you told him everything you know now — Esker's braziers, Esker's hunger, the fever that's been living in your chest so long you stopped calling it a fever. He listened without interrupting. Now he looks at the Ember, and for a moment he looks like a man at a graveside.

"How long?" you ask.

"Hours," Maren says. "Not days. Hours."

The warmth in your chest is pulling so hard now that it hurts. It knows. Its other half is dying, and it wants to go home.

"Then there's no more time to be careful," you say. "Tell me the choices. All of them. Plainly."

Corvin turns to you. He doesn't reach for you. His hands are clasped behind his back, as if he doesn't trust them.

"There are three," he says. "You can give your half back. Pour it into the Ember, all at once. The court will live. You may not. Maren thinks it will kill you. I think it may leave you with just enough — or not. I don't know."

"And the second?"

"You can share it." He says it very quietly. "The binding, but deeper. Not just nearness — a crown. The Ember was always kept by a pair, before my father's time. Two keepers, one fire, burning through both of them. If you take the court as I have, the two halves can burn as one, and neither of us has to die for it. But you'd be bound to this place, and to me, for the rest of your life. There's no walking away from a crown."

"And the third."

"You can walk away." He meets your eyes. "Keep your half. Go home. I'll hold what's left of the Ember together as long as I can. The court will go into the dark, slowly, the way it's been going since you left. But you'll live. And I won't stop you. I told you that when you arrived, and I meant it."

"Your Majesty—" Maren begins.

"No." His voice is gentle, but it's the voice of a king. "It's her fire. It's always been her fire. It's her choice."

You stand in front of the dying Ember with the whole drowned court waiting silently above you, and the man you walked away from standing just out of reach.

You think about the cabin. The cold nights in the borderlands with your hand over your heart. You think about the children in the cold halls at the city's edge, and the eleven the court has buried this year, and the ache under your breastbone that you stopped noticing years ago because it never went away.

You think about the morning you left, and how the warmth in your chest has been reaching for this place every single day since, and how you've spent all this time calling it anything but what it was.

The Ember pulses once more. Dimmer.

Corvin says your name.

It's the first time he's said it since you came back. He says it the way he did that one night — like a secret he's been keeping for you.`,
      choices: [
        { label: "Share the fire — and yourself — Take the crown, take his hand, and let the two halves burn as one.", next: "e_queen" },
        { label: "Give back what you owe — Pour your half into the Ember. Pay the debt, whatever it costs you.", branchOn: { flag: "guarded", ifTrue: "e_coldwater", ifFalse: "e_slowfire" } },
        { label: "Keep the fire and walk away — Let the court go into the dark. Choose your own life.", next: "e_unbound" }
      ]
    },

    e_queen: {
      locked: true,
      chapter: "Nine — The Ember Queen",
      text: `You take his hand.

His fingers are shaking, and they close around yours so hard it hurts. "Are you sure?" he asks. "There's no walking out of this one. Not in the morning, not ever."

"I've spent three years walking out," you say. "I'm tired of it."

You kneel together in front of the Ember. Maren, her face wet, takes a crown from a niche in the wall — not black iron, but something older, a thin band of red-gold that you've never seen before — and sets it on your head. It's warm. It fits as though it was made for you.

"The Queen's crown," she says. "It's been waiting four hundred years. Don't make me regret this, Hunter."

"I won't."

Corvin lays your joined hands on the black glass beside the dying fire.

The warmth in your chest doesn't pour out of you. It *opens*. You feel the half you've carried all this time unfold like a flower, reaching for its other half, and the other half reaching back — and then there are no halves at all. There's one fire, and it's burning through you and through him and through the Ember, one heartbeat shared three ways.

The Ember roars up off its pedestal. It's a pillar of red-gold again, taller than a man, taller than two, and heat rolls out across the chamber and up through every stair and bridge and tower of the drowned city. The carved faces on the walls light up one by one, four hundred years of kings and queens, and you could swear some of them are smiling.

Above, the court is cheering. You can hear it through the stone.

When the light settles, you're still kneeling, still holding his hand, and you're alive. More alive than you've felt in years. The ache that's been in your chest so long you stopped noticing it — the slow burn of a fire too big for one mortal heart — is gone. The fire isn't eating you any more. It's shared.

Corvin is staring at you as though he's never seen you before.

"You're wearing a crown," he says, a little dazed.

"So are you." You reach up and straighten his, which is crooked again. "Badly."

He laughs — a real laugh, loud and unsteady, the one you remember — and then he's kissing you, there on the floor of the Ember chamber with the fire towering over you both and Maren loudly finding somewhere else to be.

House Varr will come back. Esker will come back. You both know it. But the Ember can't be drawn off a thread at a time any more, not with two keepers burning in it. And when Esker next walks into your court, he'll find a queen who used to hunt things in the dark for a living.

Later — much later, in rooms at the top of the palace where the water is warm and the lanterns burn red-gold — you lie with your head on his chest and listen to his heartbeat, which is also, strangely, a little bit yours.

"I sat on the edge of the bed," he murmurs into your hair, "the morning you left. Until the sheets went cold."

"I know. I saw."

"I'm not going to wake up to that again, am I?"

You lift your head and look at him. The crown is on the floor somewhere. His eyes are glowing, soft and red, like a hearth at midnight.

"You'd have to drown me first," you say. "And I'm told that doesn't work on me."

He laughs against your mouth, and you kiss him, and the rest of the night belongs to the two of you and the fire.`,
      ending: true,
      tag: "Ending: The Ember Queen"
    },

    e_slowfire: {
      locked: true,
      chapter: "Nine — Slow Fire",
      text: `"I'll give it back," you say. "It's the court's fire. It's their children, and their dead. I've kept it long enough."

Corvin closes his eyes. When he opens them, he doesn't argue. He only says, "Then I'm holding your hand while you do it," and kneels beside you in front of the Ember.

You lay your palm on the black glass. Maren puts her hand on your shoulder, which surprises you both.

The fire goes out of you like a tide.

It hurts — it hurts more than drowning did — a long, tearing pull from the centre of your chest, as if something has taken hold of your heart and is slowly winding it out through your palm. The chamber goes white. You hear yourself make a sound you'd be ashamed of anywhere else. And through all of it, his hand around yours, steady as stone, and his voice saying your name, over and over, like a rope thrown into dark water.

Then it's done.

The Ember roars up off its pedestal, a pillar of red-gold as tall as a man, and heat rolls out across the chamber and up through the drowned city. Far above, you hear the court begin to cheer.

You're on the floor. You don't remember falling. Your chest is cold, properly cold, for the first time since the lake. You press your hand to it, looking for the warmth, and find only an ordinary, mortal, slightly-too-fast heartbeat.

You're alive.

"You're alive," Corvin says, as if he's only just letting himself believe it. His face is wet. He doesn't seem to have noticed.

"Don't sound so surprised."

"Maren said—"

"Maren," says Maren, from somewhere above you, "has never been so happy to be wrong." She blows her nose loudly and leaves.

You stay in the Ember Court for three weeks while your strength comes back. You're weaker than you were — you tire quickly, and the cold gets into you now in a way it never did before — but every day you're a little better. He comes to see you every evening. He brings bad jokes and good wine and reports on the envoy, who slipped out of the court the night the Ember came back and is riding for House Varr with no fire to show for four days' work.

He doesn't push. Not once. Some nights he sits on the end of your bed and reads to you. Some nights you talk until the lanterns burn low. One night you fall asleep mid-sentence, and when you wake he's asleep in the chair beside you, crown on the floor, one hand resting on the blanket near yours but not quite touching.

On the last night, before you go back up to the borderlands to fetch your things, he walks you to the great stair.

"I'm not asking you to stay," he says. "I want to be clear about that. The debt's paid. You owe this court nothing. You owe me nothing."

"I know."

"But if you came back," he says, "I would be very glad. And I'd leave the gates open."

You look at him — the crown knocked askew again, the careful hands, the hope he's working very hard not to show.

"Leave them open, then," you say. "I'll be back before the next new moon. I'm told there's a lot to learn about being cold."

He smiles — properly, the first smile since you came back that reaches all the way to his eyes. "I'll teach you," he says. "I've had a great deal of practice."

You climb the great stair with the court's lanterns burning red-gold beneath you, every one of them lit. At the top, where the black water opens onto the grey borderlands sky, you look back.

The gates are open. They stay open behind you all the way to the surface.`,
      ending: true,
      tag: "Ending: Slow Fire"
    },

    e_coldwater: {
      locked: true,
      chapter: "Nine — Cold Water",
      text: `"I'll give it back," you say. "That's what I came here to do. Pay the debt, and go home."

Something in Corvin's face closes, quietly, like a door being shut rather than slammed. "Of course," he says. "Then let's finish it."

He kneels on the other side of the pedestal. Not beside you. You notice, and you tell yourself you don't mind.

You lay your palm on the black glass, and the fire goes out of you like a tide.

It hurts. It's a long, tearing pull from the centre of your chest, as though something has hold of your heart and is winding it out through your palm, and you grit your teeth and let it. Across the pedestal, you're vaguely aware of him leaning forward, his hand half-raised, as if he wants to reach for you. He doesn't. You asked for distance. He's giving it to you.

The Ember roars back to life. Heat floods the chamber. Far above, the court begins to cheer.

You're on the floor, your chest cold and ordinary and aching, your heart beating like a small mortal thing. You're alive. Barely, but alive.

Maren helps you up. Corvin stands on the other side of the pedestal with his hands clasped behind his back.

"The debt's paid," he says. His voice is very even. "Thank you."

"That's it?"

"What else would you like?" He doesn't say it cruelly. He sounds tired. "You came to pay what you owed. You've paid it. I won't pretend I hoped for anything more than that, when you've made it so clear that there isn't anything more."

You open your mouth. Nothing comes out. You made it clear. You made it clear every time you stepped back, every time you let go of his hand, every time you told yourself duty was safer.

You stay four days while your strength returns. He's courteous. He's kind. He sends physicians and food and a guard to walk you through the city. He does not come himself. Esker, you hear, slipped out of the court the night the Ember came back, empty-handed, and the fire burns higher every day.

On the fifth morning, it's Maren who walks you to the great stair. She carries your blades for you without being asked. Halfway up, she stops.

"He sat outside your door," she says. "Every night you've been here. On the floor of the corridor, with his back against the wall. He'd go in to the Ember at dawn so you wouldn't see him leave."

You stare at her. "Why are you telling me this?"

"Because he won't." She hands you your blades. Her face is the same closed door it's always been, but her voice isn't. "You did right by this court, Hunter. I won't forget it. But you'll forgive me if I think you did wrong by him."

She turns and goes back down without waiting for an answer. At the top of the stair, where the black lake opens above you, you turn back once.

He's there, at the bottom, watching. He lifts a hand. You lift one back.

Then you swim up into the grey borderlands light, and walk home through the frost.

The cabin is cold. You build up the fire, and it burns like an ordinary fire, and it doesn't lean towards you at all. That night you lie awake with your hand over your heart, the way you used to, and feel nothing there but your own pulse.

You did what you came to do. The court is saved. You're alive and free and owe nobody anything.

It should feel like winning. Some nights, it almost does.

Other nights you remember a man sitting on the edge of a bed until the sheets went cold, and you wonder which of you, this time, left first.`,
      ending: true,
      tag: "Ending: Cold Water"
    },

    e_unbound: {
      locked: true,
      chapter: "Nine — Unbound",
      text: `"No," you say.

The word is quieter than you meant it to be. It still fills the chamber.

"I'm not giving it back. And I'm not taking a crown. I'm sorry." You make yourself hold his gaze. "I didn't choose this. I didn't choose to be saved, or to be carried down here, or to have half your court burning in my chest. Everything about this has been chosen for me. This time I'm choosing."

Maren makes a small, broken sound.

Corvin doesn't. He looks at you for a long moment, and whatever he feels, he keeps it behind his eyes, where the glow has sunk very low.

"Then choose," he says. "I told you I wouldn't stop you. I meant it."

"The court—"

"Is mine to keep." He turns to the dying Ember. "I've kept it this long on my own. I'll keep it a while longer. I'm told I'm stubborn."

You want to say something. You want to say a great many things. You don't have the words for any of them, so you turn and walk up the spiral stair, and he doesn't follow.

At the great gate, you stop. The whole court is waiting on the steps — councillors and officers and ordinary people in grey, holding their children close against the cold. They part to let you through. No one says a word. No one has to.

Maren is waiting at the very top. You brace yourself for her anger. It doesn't come. Instead she takes a key from the heavy ring at her belt — small and old and red-gold, warm to the touch — and presses it into your palm.

"The lake gate," she says. "It opens from the outside. It's opened for exactly one person in four hundred years, and she was a queen." Her mouth twists. "He'd never give you this. He'd think it was asking. So I'm giving it to you. For when you decide."

"And if I never do?"

"Then throw it in the lake," Maren says, "and I'll know."

You're halfway up through the black water when you feel it.

The fire in your chest lurches. Not towards the Ember — towards *him*. And through it, for one blinding second, you feel what he's feeling, the way you did at the binding, the way you always could if you'd let yourself: not anger, not betrayal. Relief. Aching, exhausted relief that you're alive, and will stay alive, whatever it costs him.

He meant it. He always meant it. He really would rather lose his court than cage you.

You surface into the grey borderlands dawn, gasping, and stand in the frozen reeds with your hand pressed flat over your heart.

You go home. You build up your fire. You sharpen your blades and take contracts and hunt the things that crawl out of the dark, and the warmth in your chest keeps you alive through the worst winter the borderlands have seen in a generation.

But every night, lying awake, you feel it pulling. Downward. Towards a dying fire at the bottom of a black lake, and a king who is holding it together with nothing but his own will.

On the ninth night, you get up, put on your coat, and walk out to the tree line.

You don't go in. Not yet. You stand at the edge of the black water with Maren's key warm in your fist, and look down at the faint red glow deep below, fainter than it was, and you say, out loud, to no one: "I haven't decided."

The glow pulses once, as if in answer. The key pulses with it.

You'll come back tomorrow night, and the night after. You'll decide when you decide. And for the first time in your life, whatever you choose, you'll have chosen it yourself.`,
      ending: true,
      tag: "Ending: Unbound"
    },

    e_traitor: {
      locked: true,
      chapter: "Eight — The Traitor's Freedom",
      text: TRAITOR_TEXT,
      ending: true,
      tag: "Ending: The Traitor's Freedom"
    },

    e_traitor_early: {
      locked: true,
      chapter: "Eight — The Gilded Forge",
      text: `You go.

Maren doesn't try to stop you. When you look back from the top of the cliff stair, she's still standing in the arch of the water-gate with her lantern, a small gold light at the bottom of a great deal of black water, and then the reeds close behind you and she's gone.

Varr is a city of black stone and chimneys, built into the flank of a mountain, and it never rains inside its walls. The Varr make sure of that. Esker takes you to the forge-temple at its heart, a vast round hall where a fire has burned without stopping for nine hundred years, and there, on the second night, he puts his hand over your heart and draws.

It isn't like sunlight leaving a room. It's like a hook.

The fire rises from your chest and hangs in the air between you, red and gold, and then it stops. It won't come further. It has roots, you realise, grown deep down into you, and Esker looks at them for a long moment with his head on one side, the way a smith looks at a flaw in a blade.

"Ah," he says. "That's a pity. If I pull, you'll die."

"Then don't pull."

"I won't." He smiles. "I'll temper it instead."

He turns, and speaks one word to the great fire behind him, and the Ember in your chest turns with him. You feel it go taut. Not out of you. *Through* you — into the forge, a long bright thread of heat that runs from your heart to the heart of Varr and doesn't break.

"There," he says. "You'll be warm for the rest of your life. You'll live a long time. Longer than you would have. Far longer than that drowned court will." He steps back, admiring. "You'll only need to stay within sight of the forge."

"You said no binding."

"I said no binding to any *man*." He spreads his scaled hands. "A forge isn't a man. I have never broken a bargain in my life, hunter. I told you that, too."

You learn the length of the thread within a week. Three streets in any direction. Past that, it begins to hurt; past the city gate, you can't breathe. The Varr are very kind to you. You have rooms in the temple, and fine clothes, and a seat at Esker's table, and scholars who come to take notes on you as if you were a rare book. You are never cold. Not once.

News reaches you in the spring. The Ember Court didn't drown. Its king put his hands on the last of the fire and gave it everything he had, and it held — barely, and cold, and much smaller than before. They live in the upper halls now, the traders say. Nobody laughs much.

A letter comes, a year after you left. Water-stained, the seal a drowned crown. Four words, in a hand you've never seen before and know at once.

*I hope you're warm.*

You are. You always are.

You go to the edge of the three streets that evening, as far as the thread will let you, and stand at the end of it with the heat of the forge running through your chest like a chain, and look north, towards a black lake you'll never see again.

You're warm, and warm, and warm. It's the coldest thing you've ever felt.`,
      ending: true,
      tag: "Ending: The Gilded Forge"
    },

    e_hunter: {
      locked: true,
      chapter: "Eight — The Hunter's Oath",
      text: `"Keep the Ember alive," you tell Maren. "I'll be back."

Corvin grabs your wrist as you rise. "He'll burn you."

"He'll try." You bend and press your mouth to his, quick and hard, a promise more than a kiss. "I hunt things in the dark for a living, remember? Let me do my job."

You go through the cracked wall and down into the drowned halls.

It's a maze below the city — old tunnels, flooded cellars, the bones of a palace four hundred years older than the one above it. The water is black and cold. But you can follow him. You'd be able to follow him anywhere now. Esker's blood is still glowing on your dagger, and the fire in your chest can feel his fire, hot and wounded and running, the way a hound smells a trail.

You find him at the bottom of a dry well, where an old air-pocket has kept a single chamber above the waterline. He's crouched over a brass brazier, feeding it with his own blood. In the brazier, a thin thread of red-gold is burning — the fire he's been stealing from the Ember, a night at a time. He's trying to use it to heal.

He looks up as you drop into the chamber. For the first time, he looks afraid.

"We can still make a bargain," he says.

"I've had enough of bargains."

He fights like a cornered animal, fire pouring off him in white-gold sheets. But he's hurt, and he's tired, and you have spent your whole life hunting things that are faster and hungrier than any dragon-blooded lord. It's short, and it's ugly, and at the end of it Esker of House Varr lies still on the stone floor of a forgotten well, and the brazier topples over beside him.

The stolen fire spills out of it into the black water.

You expect it to go out. It doesn't. It burns across the surface of the water, a long red-gold ribbon, and then it sinks — and follows the current down, down through the tunnels, back towards the heart of the court. Back towards the Ember.

When you climb up into the Ember chamber an hour later, soaked and burned and bleeding, the fire is taller than you are.

It isn't whole. It still has a gap in it the shape of your half. But it's strong again, strong enough to last, and the whole drowned city above you is warm.

Corvin is waiting. His hands are bandaged. He takes one look at you and crosses the chamber, and then you're in his arms, and he's holding on like he's afraid you'll dissolve.

Over his shoulder, you see Maren by the pedestal. She looks at the blood on you, and the burns, and the fire burning tall behind her. Then, very slowly, the seneschal of the Ember Court bows to you — the deep, old bow the drowned court keeps for the keepers of its fire.

"Took you long enough, Hunter," she says, and goes to fetch bandages.

"Esker?"

"Gone." You rest your head against his shoulder. "His stolen fire came home. It'll keep the court alive a generation. Maybe longer."

"And your half?"

"Still mine." You lift your head. "For now. I'm not ready to give it up, and I'm not ready for a crown."

He doesn't argue. He only brushes a wet strand of hair out of your face. "Then what are you ready for?"

You think about it. You think about House Varr, who will come back when they learn what happened to their envoy. About the tunnels below the city that no one's guarded in centuries. About how good it felt to walk through a dark maze towards something dangerous, with the fire in your chest guiding you like a lantern.

"You need a hunter," you say. "Someone to watch the gates. Someone who knows the dark."

His mouth curves slowly. "Are you applying for the position?"

"I'm swearing an oath." You take his bandaged hand in yours. "Your borders, your gates, your people. I'll guard them with my life. And in return—"

"Name it."

"In return," you say, "you leave your door unlocked."

He kisses you then, slowly, as the Ember burns red-gold above you both, and it's not a crown and it's not a cage. It's a beginning.`,
      ending: true,
      tag: "Ending: The Hunter's Oath"
    }

  }
};
