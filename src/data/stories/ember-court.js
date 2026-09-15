// The Ember Court — flagship title. Rewritten/expanded to a richer,
// more elaborate prose style (borderlands hunter setting, dark-water
// subterranean court) while preserving the exact same branch structure,
// locked flags, and choice logic as the original. Same engine contract:
// { startNode, nodes }, each node { chapter, text, choices | ending }.

export const emberCourt = {
  startNode: "n1",
  nodes: {

    n1: {
      chapter: "One — The Weight of Gold and Ash",
      text: `The wards on the ironwood door are humming, but the sound is thin — a dying vibration that matches the ache behind your ribs. It is past midnight. In the quiet of the borderlands, midnight is when the world shifts from dangerous to predatory.

You drag a whetstone down the edge of your hunting dagger, the rhythmic *shhhk, shhhk* the only anchor keeping you awake. Your fingers are stained with silver-dust from checking the threshold markers, but you know it's a placebo. If something truly wanted to get in, three grains of salt and a prayer wouldn't stop it.

Your guard is already down when the air in the room goes cold.

The candle flame doesn't flicker; it freezes, turning a rigid, unnatural blue. You drop the whetstone, your hand flying to the hilt of your blade, your eyes sweeping the shadows of your small cabin.

There is no sound of splintering wood. No breath at the window.

Instead, it simply arrives. It rests on your wooden windowsill as if it had grown there overnight — a heavy parchment envelope, sealed with wax the color of something that used to be alive. Coagulated, dark, and smelling faintly of dried brine and ancient stone.

Your heart strikes your ribs like a hammer. You know that seal. Three years hasn't dulled the memory of it pressed into skin instead of paper.

You step toward the window, the floorboards cold beneath your bare feet. Your fingers hover over the parchment. Your hunter's training — the brutal, blood-soaked years spent learning how to survive the entities of the deep — says to burn it. It commands you to salt the ash and bury it beneath a crossroads.

But your training has never once stopped you from doing the opposite of what it says where he is concerned.

You break the seal. The wax snaps like a small bone. Inside, the ink is dark, written in an elegant, sweeping script you used to watch him practice by candlelight.

*Come to the Ember Court, or the debt comes due.*

No signature. It doesn't need one.

You close your eyes, and suddenly you aren't in your cabin anymore. You are back in the dripping, subterranean halls of the lower realms. You remember him the way you remember a wound that healed wrong — a story your body tells even when your mind has moved on.

You can still feel the chill of his skin, the sharp, terrifying tilt of his head when he was deciding whether to lie to you. He was a creature born of dark water and false promises, yet you can still taste the salt of the one night he didn't lie. The night he looked at you with something terrifyingly close to human vulnerability and offered you a way out.

And you remember the morning after. The gray, suffocating dawn when you slipped out of his silk sheets and left before he woke, because staying felt like a debt your soul couldn't afford to pay.

Three years you've spent running. A hunter's oath, unbroken. You thought the distance would wash the scent of dark water from your clothes. But beneath the earth, a court is sinking into ruin, waiting for you to decide what you still owe it. Or what you still owe him.

You look down. The letter doesn't burn easily. The edges are curling in your hand, catching a stray spark from the hearth, but the parchment resists the fire, bleeding a thick, black smoke that smells of the sea.

You are out of time. He knows where you are.`,
      choices: [
        { label: "Refuse the summons — let him come to you", next: "n2a" },
        { label: "Answer the call — go to him", next: "n2b" }
      ]
    },

    n2a: {
      chapter: "Two — The Art of Refusal",
      text: `You write your refusal in four jagged, ink-splattered words and send it via the messenger-sprite before you can talk yourself out of it.

*I owe you nothing.*

It is a lie you've told yourself every single morning for three years. Writing it down on scrap parchment and watching it disappear into the midnight fog doesn't make it any truer, but it gives you a fleeting, false sense of safety.

By dusk the following day, the sky has turned the color of bruised iron, pouring a relentless, freezing rain over the borderlands. And he is standing in your doorway anyway.

The wards you spent all morning reinforcing didn't shatter; they simply parted for him, recognizing his magical signature like a dog recognizing its master. He stands on your threshold, rain dark on his heavy wool shoulders. A crown of black iron is pushed carelessly back from his temple, tilted like he forgot he was even wearing it, or like he simply didn't care. He looks exhausted. He looks like a man who has run out of options — a look that should be entirely impossible for someone who commands an entire court beneath the dark water.

"You don't get to refuse this," he says. His voice is quiet in a way that used to entirely undo you. Apparently, it still does. "Not this."

You grip the edge of the door, knuckles turning white, blocking his view of your small, warm cabin. "You don't get to show up at my door after three years and tell me what I don't get to do."

Something that might be a fleeting smile, or might be a genuine wince of pain, crosses his face. "Fair."

He doesn't try to force his way in. He stays exactly where he is, perfectly still as the rain soaks through his clothes. He is as patient as a debt collector who knows, with absolute certainty, that he will be paid eventually.

The silence between you stretches, heavy and suffocating, until the sheer proximity of him breaks your resolve. You step back from the doorway. It isn't a warm welcome. It is just a widening of the gap, but it is as close to an invitation as either of you can manage after three years of practiced distance.

He steps inside, bringing the scent of ozone, rain, and ancient, deep-water magic with him. Once the door is shut against the storm, the cabin suddenly feels entirely too small. You are standing too close, your breathing uneven, the heat of the hearth fire pushing the damp chill from his clothes.

"The debt was never gold," he says, his dark eyes locking onto yours. "It was a promise. Made before either of us truly understood what we were promising."

"Then unmake it," you snap, crossing your arms to keep your hands from shaking. "You're a king. Unmake the bargain."

"I can't." His voice drops to a rough whisper, stepping a fraction closer. "Not without you standing in front of me while I try. The magic requires both halves of the thread."

You feel the old anger rise inside you, familiar and comforting as a scar you keep forgetting to stop touching. But underneath that anger — inconveniently, infuriatingly — something else stirs too. A tiny, stubborn ember that apparently never went out, no matter how thoroughly you told yourself you had smothered it in the ash of your departure.`,
      choices: [
        { label: "Let him explain the binding", next: "n3" },
        { label: "Ask what he's not telling you", next: "n3_pressed" }
      ]
    },

    n2b: {
      chapter: "Two — The Court Beneath",
      text: `You don't write a refusal. You pack your blades instead — the hunting dagger, the silver-edged short sword, the vial of salt you've never once needed and refuse to leave behind — because some instinct older than three years of running tells you that whatever waits beneath the earth will not be moved by paper.

The borderlands are silent as you leave the cabin, the wards sighing shut behind you like a held breath finally released. You don't look back at the hearth-light in the window. You've learned, the hard way, that looking back is how the dark water finds you.

The descent begins at the black lake two miles past the tree line — a stretch of water so still it looks solid, until you remember that nothing in the lower realms is ever what it looks like. You wade in fully clothed, blades and all, and the cold that should stop your heart simply doesn't. Your lungs adjust to something that isn't quite water and isn't quite air. The surface seals over above you like a door you were never meant to walk back through.

The court reveals itself the way a wound reveals itself when the bandage finally comes off — slowly, and in colors that have no business existing under any sun.

He's waiting at the top of a staircase carved from something between coral and bone, exactly where three years of memory told you he'd be. The crown of black iron sits crooked against his temple, like he forgot he was wearing it, or stopped caring whether anyone noticed. Up close, he looks nothing like the confident, silver-tongued king the stories tell. He looks like a man who has been awake far too long, held together by will alone.

"You came," he says. His voice cracks slightly on the second word, an imperfection he'd never have allowed himself three years ago.

"I wasn't planning to." Your hand rests, out of old habit, on the hilt of your dagger. "I'm still not entirely sure I have."

Something that might be relief, might be grief, moves behind his eyes. "Then let's not waste whatever certainty you've got left standing on a staircase."

He doesn't reach for you. He turns, and you follow him down into the ritual chamber, the ancient salt-and-ozone air of the lower court closing around you both like a held breath refusing to let go.`,
      choices: [
        { label: "Let him explain the binding", next: "n3" },
        { label: "Ask what he's not telling you", next: "n3_pressed" }
      ]
    },

    n3: {
      chapter: "Three — The Price of Honesty",
      text: `The small room seems to shrink further, suddenly taking on the heavy, static air of a ritual chamber. It smells of ozone, salt, and something ancient — older than the sea itself. He explains the magic plainly, stripped of the practiced charm and silver-tongued diplomacy you remember him wielding like a weapon in the grand halls of his court.

The oath he swore three years ago, half-understood and born of a desperate midnight bargain, has been unraveling the court's protections ever since you fled. The magic of his realm demands balance. Because you left, the threads are fraying, dragging his people down into dark water. The only way to re-anchor the wards is to complete what was started.

Together. Now.

"What does that mean," you ask, your pulse fluttering against your throat. "In practice?"

"A binding." He reaches into the folds of his wet cloak and holds out his hand, palm up. An old, unpolished iron blade rests across his fingers, looking heavy and brutal in the firelight. "Blood, intent, and proximity. You don't have to love me for it to work. It only requires that you are entirely honest about what is true."

You stare at the dark metal. "And if I'm not honest?"

"Then the magic doesn't take," he says softly. "The court falls. And every ward keeping worse things out of the human world falls along with it." He steps into your space, meeting your eyes with an intensity that burns. "I'm not asking you to feel something you don't. I'm asking you to stop pretending you don't feel something you do."

The challenge hangs in the air, thick and suffocating. You take a breath, reaching out, and press your hand over his.

The iron blade is viciously cold against your palm, biting into your skin as you squeeze. But his hand, when it closes tightly around yours to complete the cut and mingle your blood, is not. It is warm, steady, and terrifyingly real.

The magic moves through the room like a held breath finally released. It isn't violent, and it isn't loud. It is just an undeniable presence, settling into the space between your joined hands like a stray animal remembering exactly where it belongs.

He goes completely still. So do you.

"There," he says. His voice is low, raspy, and much closer than he was a moment ago — though neither of you moved that you noticed. "It's done."

But it doesn't feel done. It feels like the exact opposite of done. It feels like a massive iron door that was locked tight for three long years just swung wide open on its hinges, and neither of you has decided yet whether to walk through it or slam it shut.

The blood between your palms is warm. His thumb moves once, absently, a soft and heartbreaking stroke over the back of your hand. Neither of you lets go.`,
      choices: [
        { label: "Guard yourself — pull back before this goes further", next: "n4a" },
        { label: "Lower your guard — let the moment happen", next: "n4b" }
      ]
    },

    n3_pressed: {
      chapter: "Three — What He Won't Say",
      text: `"Not so fast." You plant your feet against the current of momentum pulling you both toward whatever comes next, refusing to let three years of unanswered questions dissolve into a ritual before you've asked a single one. "You don't get to summon me back from exile and skip straight past why. Not when I nearly drowned for you once already."

He goes very still — the specific, deliberate stillness of a king deciding exactly how much truth is safe to hand a woman holding a blade. "The court's wards have been failing for longer than I let the letter admit. Months, not days. If tonight doesn't work, there may not be another chance to try it properly."

"You had months and you waited until the wards were failing to tell me?"

"I was afraid that if I told you the deadline, you'd agree out of duty instead of choice." Something raw moves through his voice, stripped of every trick you remember him using to get exactly what he wanted without ever quite lying. "I would rather you refuse me honestly than help me out of fear. I have made enough bargains built on people's fear to last several lifetimes. I won't build this one the same way."

It's not the answer you expected. It costs him something to give it to you plainly, and you find, infuriatingly, that the honesty lands harder than any of his old silver-tongued diplomacy ever did.

"Then show me," you say. "All of it. No more half-truths dressed up as mercy."

He leads you into the ritual chamber — salt, ozone, and something older than the sea itself thick in the air — and this time, when he holds out the old iron blade, there's nothing left between you but the truth you asked for.

"Blood, intent, and proximity," he says. "You don't have to love me for it to work. It only requires that you're entirely honest about what's true."

The blade is cold against your palm. His hand, when it closes around yours, is not.

The magic moves through the room like a held breath finally released — not violent, not loud, just present, settling into the space between your joined hands like something remembering exactly where it belongs.

"There," he says, quieter now, closer than he was a moment ago though neither of you moved that you noticed. "It's done."

It doesn't feel done. It feels like the opposite of done — like an iron door locked shut for three years just swung open on its hinges, and neither of you has decided yet whether to walk through it.

His thumb moves once, absently, over the back of your hand. Neither of you lets go.`,
      choices: [
        { label: "Guard yourself — pull back before this goes further", next: "n4a" },
        { label: "Lower your guard — let the moment happen", next: "n4b" }
      ]
    },

    n4a: {
      locked: true,
      chapter: "Four — The Hunter's Distance",
      text: `You pull your hand back first. It costs more than you'd like to admit — a small, tearing sensation somewhere beneath your ribs that has nothing to do with the binding's magic and everything to do with three years of carefully rebuilt walls suddenly remembering, all at once, exactly how easily he used to knock them down without even trying.

"That's enough," you say, and your voice comes out steadier than you feel, which counts as its own small victory in a night that has offered you very few of them. "The binding's done. That's what I came here for."

He doesn't argue. Somehow that's worse than if he had — it means he expected exactly this, has braced for it since the moment you stepped back into his water dripping wet and armed to the teeth. He straightens, putting the careful distance between you that you asked for without needing to ask twice, the king's composure sliding back over him like armor he'd only briefly, foolishly set down for your benefit.

"Understood." His voice has gone carefully neutral, the tone of a man closing a door gently rather than slamming it in anger, though you can see the effort it costs him in the tight line of his jaw. "The wards should hold now. You're free to return to the borderlands whenever you—"

"I'm not going anywhere yet." The words surprise you as much as they seem to surprise him. Your hunter's training — the part of you that never stops cataloguing exits and threats even when your heart is busy doing something far more complicated — refuses to leave a job half-finished, refuses to walk away from a wound without first understanding how deep it truly runs. "If I'm bound to this court now, blood and iron and all, I want to understand exactly what I'm bound to."

Something shifts behind his eyes — not hope, exactly, but its more cautious, battle-worn cousin, the look of a man who has learned the hard way not to trust good news the moment it arrives. "Then let me show you what's actually failing beneath the throne room. All of it. No more careful edits."

You follow him deeper into the drowned halls, past archways slick with black water and old salt, keeping careful, deliberate distance the entire way, keeping your training close around you like a second blade sheathed against your spine. It's easier this way, you tell yourself, over and over, until it almost sounds convincing. Duty first. Whatever this thing is between you, it can wait — it's waited three years already, patient as rot, and it can wait a while longer while you decide whether this king, and this drowning court he rules, can be trusted with anything at all.

He doesn't try to close the distance again. He walks a full pace ahead of you, spine straight, crown crooked, every inch the ruler he's supposed to be. You almost wish, infuriatingly, treacherously, that he would turn around and close it anyway.`,
      choices: [
        { label: "Follow him into the deeper truth", next: "n5", setFlag: { name: "guarded", value: true } },
        { label: "Question his intentions before going further", next: "n5_pressed", setFlag: { name: "guarded", value: true } }
      ]
    },

    n4b: {
      locked: true,
      chapter: "Four — What the Dark Water Doesn't Take",
      text: `You don't pull away.

It's the only decision you make on purpose. After that, there is only the warmth of his hand still wrapped around yours, blood drying tacky between your joined palms, the closeness neither of you retreats from as three years of carefully rebuilt distance collapse into the space of a single unsteady breath.

"I should hate you," you murmur, close enough now that the words land against the line of his jaw instead of the ancient, salt-thick air between you.

"You should." His voice is rough in a way you feel low in your chest more than you hear it, vibrating through the small distance still left between your bodies. "I've given you every reason to, and I never once stopped you from finding every last one of them."

"That's not an apology."

"No." His free hand finds your jaw, tilts your face up to his with a slowness that feels deliberate — like a man who has spent three long years imagining this exact moment in the dark and refuses to rush through it now that it's finally, impossibly real. "It's an explanation. The apology comes after."

"After what?"

"After I've stopped being afraid that the moment I let go of you, you'll disappear back into the borderlands and I'll spend another three years memorizing the exact shape of your absence in every empty room of this court."

You don't have a steady answer for that, not one you trust yourself to say aloud without your voice betraying exactly how deep that stubborn ember still burns beneath three years of carefully packed ash. So instead you close the last of the distance between you, letting the ritual chamber's guttering torchlight be the only witness, and let that be the only answer either of you needs tonight.

What happens next belongs to the two of you alone — the failing wards forgotten, the eastern threat forgotten, three years of silence finally, thoroughly answered in a language that has never once needed words to make itself understood. The black water beyond the chamber's edge stills to glass. Somewhere above you, impossibly far away, the borderlands sleep on without you.

When you surface again — breathless, unhurried, entirely undone — the torches have burned low and neither of you has said a single practical thing in what might have been minutes or might have been hours. Your hand still hasn't left his.

"We should talk about the court," you say eventually, not moving.

"We should," he agrees, and doesn't move either.`,
      choices: [
        { label: "Talk about the court anyway — follow him into the deeper truth", next: "n5", setFlag: { name: "guarded", value: false } },
        { label: "Ask what this means before it goes further", next: "n5_pressed", setFlag: { name: "guarded", value: false } }
      ]
    },

    n5: {
      locked: true,
      chapter: "Five — The Truth Beneath the Throne",
      text: `He leads you down through the oldest halls of the drowned court, past wards that flicker and gutter like dying candle flames caught in a draft, to a chamber where black water seeps steadily up through cracks in ancient stone, pooling dark and patient around your boots.

"It was never only my failing oath," he admits, and for the first time since you stepped back into his water, something that sounds almost like fear moves through his voice, raw beneath the practiced calm. "The dragon-blooded house to the east has spent a decade bleeding this court's protections dry — feeding on the instability, waiting patiently for the wards to fail completely so they can claim what's left of us for their own. My oath was the last thread holding the breach shut. It's why I needed you specifically, and no one else. A hunter's blood carries old protections theirs can never touch, no matter how much fire they throw at it."

"You used me to shore up a war you never told me you were losing." The words come out sharper than you intend, cutting through the chamber's heavy, ancient air.

"I used everything I had left, because the alternative was losing this entire court to people who would use it far worse than I ever have." He holds your gaze, unflinching, letting you see exactly how much that admission costs a king who has spent his whole life never once admitting weakness to anyone, least of all himself. "I should have told you the truth the moment I sent that letter, sealed in wax and cowardice both. I didn't, because I was afraid you would say no, and I needed you too badly to risk it. That failure is entirely mine to carry. Not yours."

The black water churns at the edges of the chamber, restless, reflecting torchlight in patterns that don't quite obey the laws of anything you learned during your training — spirals that fold back on themselves, light that bends the wrong direction, like something ancient stirring closer to the surface than it has any right to be.

"There's a way to end this properly," he continues, voice dropping lower, more urgent. "Not merely patch the wards for another season of borrowed time — sever the eastern house's claim on this court entirely, root and branch. But it requires both of us standing against them together, publicly, as a bound pair with absolutely nothing hidden between us. If either of us is still holding something back, however small—"

"It won't work."

"It won't work." He exhales, long and unsteady, and for a moment looks less like a king and more like a man who has been carrying this alone in the dark for far longer than anyone ever should. "So. Whatever is true for you — I need to hear it now, standing here in the water that first brought us together. Not the version you think is safest to say out loud."`,
      choices: [
        { label: "Open your heart completely", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary", next: "n6_final_hold" }
      ]
    },

    n5_pressed: {
      locked: true,
      chapter: "Five — What Binds Us",
      text: `Before he leads you anywhere else, you stop him, placing a hand flat against his chest — an old habit, the way a hunter checks a heartbeat before deciding whether a threat is truly stilled or merely playing dead. Beneath your palm, his heart is racing. "Before we go further — what does this actually mean? The binding. Us. I refuse to walk into another decision only half-informed, not after everything tonight has already cost me."

He considers that longer than you expect from a king usually so quick with a practiced answer, his eyes searching your face like he's trying to memorize the exact expression you're wearing right now. "It means I am bound to you the way I was always going to end up, oath or no oath, blade or no blade. What you choose to do with that is entirely yours to decide. I won't pretend otherwise simply to get what I need from you tonight. I've done enough of that already."

It isn't a complete answer. It is an honest one, and tonight, standing ankle-deep in water that shouldn't exist under any sun, that counts for considerably more than completeness ever could.

He leads you down through the court's oldest halls, past wards that flicker and gutter like dying candle flames caught in a draft, to a chamber where black water seeps steadily up through cracks in ancient stone — the true source of why this entire court is drowning, in every sense the word can carry.

"It was never only my failing oath," he admits, voice low, the confession dragged out of him one careful word at a time. "The dragon-blooded house to the east has spent a decade bleeding this court's protections dry, waiting patiently for the wards to fail completely so they can claim what's left of us for their own. My oath was the last thread holding the breach shut. It's why I needed you specifically — a hunter's blood carries old protections theirs can never touch."

"You used me to shore up a war you never told me you were losing." Your voice cracks slightly on the last word, and you hate that it does.

"I used everything I had left, because the alternative was losing this court to people who would use it far worse than I ever have." He holds your gaze, unflinching, refusing to look away from whatever he sees in your face. "I should have told you the truth from the letter itself. I didn't, because I was afraid you would say no, and I needed you too much to risk hearing it."

"There's a way to end this properly," he continues, urgency creeping back into his voice. "Not merely patch the wards — sever the eastern house's claim entirely. It requires both of us standing against them together, as a bound pair with nothing left hidden between us. Whatever is true for you — I need to hear it now, before the water decides for us."`,
      choices: [
        { label: "Open your heart completely", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary", next: "n6_final_hold" }
      ]
    },

    n6_final_hold: {
      locked: true,
      chapter: "Six — What You're Willing to Risk",
      text: `"What's necessary," you say, and you make yourself hold his gaze while you say it, "is that the wards hold and this court survives the night. That's what's true. Whatever else might exist between us isn't relevant to winning this fight."

He studies you for a long moment, and something in his face — the cautious, battle-worn hope that had been quietly building since the binding — closes like a door someone decided, finally, not to walk through.

"Understood," he says quietly. "Then let's finish what we came here to do, on exactly those terms."`,
      choices: [
        { label: "Stand together and end it, on those terms", branchOn: { flag: "guarded", ifTrue: "n6_severance", ifFalse: "n6_reckoning" } },
        { label: "Walk away instead", next: "n6_unbound" }
      ]
    },

    n6_surrender: {
      locked: true,
      chapter: "Six — Surrender",
      text: `"The truth," you say, and the words come scraped raw from somewhere beneath three years of carefully maintained ash, "is that I have spent every one of those years lying to myself, not to you. I told myself I left because I felt nothing. I left because I felt too much, and I had no training, no oath, nothing in my entire hunter's arsenal that taught me what to do with a king I was supposed to end, not love. So I ran. And I have been running ever since, right up until a letter I couldn't burn landed on my windowsill."

He crosses the space between you in two strides, and this time there is no ritual demanding it, no failing oath, no excuse required — just his hands framing your face like he is memorizing every line of it against the possibility of losing it again, thumbs tracing your cheekbones like he still can't quite believe you're solid beneath his hands.

"Say that again," he murmurs, forehead dropping to rest against yours, breath unsteady. "Somewhere the whole drowned court can hear it."

You do. Standing at the black water's edge, hands bound together in drying blood and something far more permanent, the two of you speak the truth aloud — not a spell, not a ritual, simply honesty, finally, after three years of its absence. The water around you stills entirely, glass-smooth and silent, and the old wards flare bright and catch, not because of blood or oath, but because there is nothing left hidden between you for the eastern house's claim to exploit, no seam left for the rot to find.

Their decade of patient scheming shatters like something that was never nearly as strong as it pretended to be — a crown built on other people's silence, undone the moment two people stopped keeping any.

Later — much later, the torches burned down to embers, the court quiet and whole around you for the first time in a decade — he pulls you back against his chest, unhurried, certain, like a man who has finally, finally stopped bracing for the sound of you leaving in the night.

"Stay," he says. Not a command this time. A genuine question, voice rough with something that isn't fear anymore.

"Try and stop me," you answer, and let the rest of the night belong to no one but the two of you and the dark water that first brought you together three years ago and refused, all this time, to let you go.`,
      ending: true,
      tag: "Ending: Surrender"
    },

    n6_reckoning: {
      locked: true,
      chapter: "Six — Reckoning",
      text: `"What's true," you say, choosing each word with a hunter's deliberate care, testing the weight of it before you let it leave your mouth, "is that I came back because some stubborn part of me never fully left this court, or you. I won't pretend that's nothing. But I also won't pretend it's simple, not after everything tonight has cost us both, and not after three years of running from exactly this conversation."

It isn't the declaration he might have hoped for. You watch it land in the flicker behind his eyes, watch him absorb the shape of it. But he nods slowly, the movement of a king recalibrating rather than a man defeated, and something in his shoulders eases, just slightly.

"It's honest," he says. "That's precisely what the wards need tonight. Not a fairy tale sworn in the dark. The truth, whatever shape it happens to take, however unfinished."

Standing together at the black water's edge, hands joined, you speak your careful, complicated truth aloud, and it is enough — the old wards flare and hold, not because the moment is perfect, but because nothing between you remains hidden, even the uncertain parts, even the parts neither of you has fully named yet. The eastern house's claim breaks apart at the seams, a decade of patient scheming undone by two people who told the truth without needing it to already be a love story.

Afterward, standing in a court finally safe beneath the dark water, he doesn't reach for you the way he might have if you had said something softer, something easier.

"We don't have to decide everything tonight," he says instead, and there's something almost gentle in it. "The alliance holds either way now. Whatever exists between us can take whatever time it actually needs to become something real."

"That's unexpectedly reasonable, for a king."

"I'm told I've had three years to practice patience." A faint, genuine smile breaks through the exhaustion carved into his face. "Turns out some of it actually took, against all odds."

It isn't the ending where everything resolves itself in a single night at the water's edge. It's the one where the court survives, the truth was enough even unfinished, and whatever comes next between you gets built slowly, deliberately, on terms you actually chose — instead of forced by a debt neither of you asked to owe in the first place.`,
      ending: true,
      tag: "Ending: Reckoning"
    },

    n6_severance: {
      locked: true,
      chapter: "Six — Severance",
      text: `Standing at the black water's edge, hands joined, you say only what's necessary — careful, guarded, exactly as much truth as you've allowed yourself all night, no more. The wards flare — and falter, catching like damp kindling that refuses to properly light.

"It's not enough," he says, and you can hear him understanding it in real time, the precise moment the plan begins to fail beneath you both. "It has to be everything. You have to mean it completely, or—"

The black water surges, rising fast around your ankles, your calves. Somewhere beneath its surface, the eastern house's claim finds the gap your guarded honesty left open and drives straight into it, eager and patient after a decade of waiting.

You fight — of course you fight, a hunter's instincts don't simply switch off because a careful plan collapses around her, blade already in hand before you've consciously decided to draw it — and between the two of you, the immediate threat is beaten back, the court saved from falling tonight, at least. But the deeper binding, the one meant to end this permanently, doesn't take. Can't take, built as it was on half-truths held at careful, deliberate arm's length from the very beginning.

"The court will hold. For now." He stands the length of the chamber away from you afterward, soaked and breathing hard, voice carefully, deliberately even despite everything. "Not forever. Not the way it could have, if you'd let it."

"I did what I came here to do." Your own voice comes out steadier than you feel, steadier than the trembling in your hands.

"You did." He doesn't argue. He doesn't accuse. Somehow that makes it considerably worse than if he had raised his voice, thrown blame, given you something solid to push back against. "That was always going to be enough for the court. I think we both already know it was never going to be enough for this."

There's no anger in it, and that's the part that stays with you long after you've left the dark water behind, long after you've climbed back up into the borderlands' cold, ordinary air. No final fight. No dramatic parting words hurled across the ritual chamber. Just two people who protected what needed protecting and left the rest of it exactly where they found it three years ago — unresolved, guarded, and, this time at least, both of you choosing it with open eyes instead of running from it in the dark.

The debt is paid. The ember, carefully, deliberately, is left to burn itself out on its own terms, in its own time.`,
      ending: true,
      tag: "Ending: Severance"
    },

    n6_unbound: {
      locked: true,
      chapter: "Six — Unbound",
      text: `"No," you say, and the word surprises you with how steady it comes out, even here, even now, standing ankle-deep in water that could still take everything from you. "I refuse to stand at this water's edge and perform a certainty I don't actually feel, not even to save an entire court. Not even this one. Not even for you."

He doesn't reach for you. Doesn't argue. For a long moment he simply looks at you like a king recalculating something he was entirely certain he already understood about how tonight would end.

"Then don't," he says finally, quietly. "I would rather lose this court honestly than win it on a lie you told standing next to me at the water's edge, blood still drying on both our hands."

You leave before the ritual completes. The binding holds just enough to keep the worst of the immediate threat contained — a temporary patch, not a true solution, bought by the sheer honesty of your refusal rather than the strength of a bond neither of you finished building. It won't hold forever. You both know that with absolute, uncomfortable certainty.

At the threshold, where the black water gives way to the tunnel back toward the borderlands, he stops you — not with a hand, just with your name, spoken plainly, entirely without performance for what feels like the first time all night.

"For what it's worth," he says, "I would rather have three more years of you telling me the truth from a careful distance than one single night of you lying to me up close, however badly I want the alternative."

You don't have a ready answer for that either. You leave anyway — the debt unpaid, the court standing on borrowed time beneath the dark water, and, for the first time in three long years, nothing unsaid weighing down the road stretching back toward the borderlands behind you. Your cabin is waiting, cold and ordinary and yours, whetstone still resting where you dropped it on the floor.

Whatever happens to the Ember Court next, it happens without either of you pretending to be something neither of you was ready to be tonight.`,
      ending: true,
      tag: "Ending: Unbound"
    }
  }
};
