// The Binding Oath — full-length edition, rebuilt 2026-09: 22 scenes,
// 8–9 chapters per read-through, 7 endings.
//
// Node ids are new (b*/e*): the seed script only upserts, so readers
// partway through the original version keep its n* nodes and can finish
// it undisturbed, while new readers start at b1.
//
// Engine contract: { startNode, nodes }, each node { chapter, text,
// choices | ending }, chapters 4+ locked. Flags: `guarded` (set in
// chapter four, read by the "Break it clean" choice in b8).
//
// Names: Ser Rhys Ardent (dragon-blooded knight), Magister Oriel
// (archmage of the Tower of Glass), Dame Hester Ardent (Rhys's aunt and
// commander). City: Hallowmere.

export const bindingOath = {
  startNode: "b1",
  nodes: {

    b1: {
      chapter: "One — The Vault",
      text: `Three heartbeats from freedom.

The outer ward of the vault is peeling back under your fingertips like old paint. The ledger is already inside your coat, its brass corners digging into your ribs. Three more heartbeats and you'll be down the servants' stair and out into the fog of Hallowmere, and the Tower of Glass will wake up tomorrow one book lighter, with no idea who took it.

That's the job. Walk in, take the thing, leave no name behind. You've done it forty times. The anonymous letter that hired you for this one paid double, in gold, up front, and said only: *The black ledger, third shelf, before the new moon. Tell no one.*

You don't hear him. That's the part you'll replay later, furious with yourself. You never hear him.

Cold steel settles into the hollow of your throat.

"Don't," says a man's voice, very close behind you, "move."

You turn your head, slowly, as far as the blade allows. He's tall, armoured in dark steel worked with the Ardent flame, and his eyes catch the light of the wardstones like a cat's. Gold, with a slit of black down the middle. Dragon-blooded. A knight of House Ardent, alone, in a mage tower at three in the morning, where no knight has any business being.

"Put the ledger on the floor," he says.

You do the only thing your hands know how to do under a blade. You cast.

It's a repelling ward — the first one every apprentice learns, a flat shove of force meant to throw a body across a room. You've cast it a hundred times without thinking. It's never once gone wrong.

This time the vault's broken wardwork catches it halfway out of your fingers and *twists*.

The world goes white-hot at the wrist. Something whips out of your hand, not force but light, a line of burning silver that wraps once round your wrist and once round his, and pulls tight. You both cry out. For one awful second it feels like being branded.

Then the light fades, and you're both still standing.

His sword has dropped a hand's width from your throat. He's staring at his forearm, where his gauntlet has been burned half away and a line of silver glyphs is sinking into his skin like ink into paper. You look down. The same glyphs are on your wrist. They're still glowing, faintly, in time with your heartbeat.

"What," he says, very carefully, "did you just do?"

"Saved my own life." Your voice comes out steadier than you are. "Try that sword again and find out what happens the second time."

He steps back, one long pace. Then another.

On the third step, something invisible snaps taut between your ribs and his, like a rope pulled to its limit, and it drags you both forward so hard you nearly collide. He catches your shoulder. You grab his breastplate. You end up nose to nose, breathing hard, in the middle of a ruined vault.

Up close, he's younger than the armour suggests. There's soot on his cheek and a scar through one eyebrow, and he looks, for one unguarded moment, almost as frightened as you are.

"Explain," he says, low and dangerous, "before I decide I don't care what happens the second time."

Somewhere above you, a bell starts to ring. The tower's alarm. Boots on the stairs, a long way up, but coming.

The glyphs on your wrist pulse, bright and hot, as if they've been waiting for exactly this.`,
      choices: [
        { label: "Run — Break away and find out how far this leash really stretches.", next: "b2_run" },
        { label: "Stand your ground — Make him answer first. What is a knight doing alone in a mage tower at three in the morning?", next: "b2_stand" }
      ]
    },

    b2_run: {
      chapter: "Two — The Length of the Leash",
      text: `You shove him in the chest and run.

He's too surprised to stop you. You're out of the vault, down the servants' stair and through a window you left unlatched on the way in, dropping onto the wet slates of the roof below. Hallowmere spreads out beneath you, a maze of fog and chimneys, and you know every inch of it. You're three roofs away before you hear him swear behind you.

Five roofs. Ten. Your wrist is burning, but you've run on worse.

You're leaping the gap between the chandlers' guildhall and the bell tower of Saint Mercy's when the leash runs out.

It doesn't slow you. It stops you, mid-air, like a hand closing around your ribs. You're yanked backwards out of the jump. For one horrible second there's nothing beneath you but four storeys of fog.

A gauntleted arm catches you round the waist.

He's there. Of course he's there. He must have run the whole way behind you, and he's hauled you back onto the guildhall roof before your stomach has finished dropping. You land on the slates together in a heap of wet coat and armour.

"A mile," he says, breathing hard. "Near enough. I felt it stop giving." He hasn't let go of you. "That was very stupid."

"That was very *fast*," you say. "For someone in plate."

The corner of his mouth moves. It isn't quite a smile. "I'm dragon-blooded. We're good at chasing things."

Below you, lanterns are moving through the streets. The tower's guard, spreading out, calling to each other. Someone blows a whistle.

He looks at the lanterns, and then at the glyphs glowing on both your wrists, and makes a decision you can see on his face.

"This way," he says, and pulls you across the roof.

You run together this time. It's easier than it should be. The leash seems to know where you're both going; it pulls you into step. Over the tanners' yard, along a gutter, down a drainpipe into an alley that smells of fish. He's good at this. Better than a knight has any right to be.

When the whistles have faded behind you, you stop under the arch of an old bridge and lean against the wet stone, gasping.

"Who are you?" you ask.

"Ser Rhys Ardent." He says it the way people say their names when they're used to it opening doors. Then, apparently realising where he is, he adds, a little ruefully: "Knight of House Ardent. Currently fleeing my own city's guard with a thief. Who are *you*?"

You don't answer. You never give your name on a job.

He studies the glyphs on his arm. "This isn't a repelling ward," he says. "I know wardwork. This is a tether. Old, deep work — the kind they used to put on prisoners of war, so they couldn't run from their guards. Nothing an apprentice could cast by accident."

"I didn't cast it by accident. I cast a repelling ward. Something in that vault turned it into *this*."

"Something." He looks at you for a long moment. "Or someone."

The fog shifts. Somewhere a dog barks. And the thought arrives in both your heads at once, you can see it — that a vault ward doesn't rewrite itself. Somebody built this to happen.

"We can't stay here," he says. "And we can't go far from each other." He almost laughs. "Where do thieves hide?"

"Better places than knights do," you say. "But I'd bet you've got a bed somewhere with actual guards on the door."`,
      choices: [
        { label: "Take him to your den — The rooms above the bakery on Candle Street. Your ground, your rules.", next: "b3_den" },
        { label: "Let him take you to the barracks — Hide in the last place the tower will look for a thief: among the knights.", next: "b3_barracks" }
      ]
    },

    b2_stand: {
      chapter: "Two — What You Broke",
      text: `You don't run. You plant your feet in the wreckage of the vault and fold your arms, which is harder than it looks when your wrist is on fire.

"You first," you say. "Dragon-blood doesn't patrol mage towers. And it doesn't do it alone, at three in the morning, with no torch and no partner. What were you doing here, before I arrived and ruined your evening?"

He studies you. It's a soldier's look, the kind that counts your weapons and your exits and how fast you can move. It lingers a second longer than it needs to on your face.

"Ser Rhys Ardent," he says finally. "Knight of House Ardent. And I was hunting you."

"Me?"

"Whoever's been bleeding this tower dry." He sheathes his sword, slowly, as if to show he's chosen to. "Three months of it. Relics, scrolls, binding-work, a piece at a time, never enough gone at once for the Magisters to raise a proper alarm. My commander wouldn't send anyone. So I came on my own."

"Well, it isn't me. This is my first time in this tower."

"You'll forgive me if I don't take a thief's word for that."

"I'm a *good* thief," you say. "If I'd been robbing this place for three months, you'd never have caught me."

That gets you a look. Irritation, and something underneath it that might, against his will, be respect. "I caught you tonight."

"You caught me because something turned my ward into a leash." You hold up your wrist. The glyphs are still glowing. "Did you do this?"

"No." He looks genuinely offended. "I don't do magic. I'm dragon-blooded, not a Magister."

"Then someone else did." You make yourself say the next part out loud. "Someone hired me for this job. Anonymous letter, double my rate, gold up front. *The black ledger, third shelf, before the new moon.*"

His eyes narrow. "Show me the ledger."

You shouldn't. It's the only leverage you've got. But the bell is ringing overhead and the boots on the stair are getting closer, so you pull it out of your coat and flip it open.

Columns of neat, cramped writing. Dates, amounts, and a single word repeated down the margin: *tether-work*. Sold, again and again, over three months. And at the bottom of each page, in red ink, the same name. The buyer.

*House Ardent.*

He goes still. Completely still, the way only very disciplined people can.

"That's my house," he says quietly.

"I can read."

"Someone in my house has been buying binding magic from this tower." His voice is very even. "And someone rewrote your ward to tether you to the first knight who walked in the door. As insurance."

"Against what?"

"Against someone like me asking questions." He looks up at you, and the gold of his eyes has gone dark. "You weren't hired to steal that ledger. You were hired to be caught with it. To be the thief. And whoever did it made sure the thief couldn't get away from whichever knight found her."

The boots are very close now. Someone shouts orders on the landing above.

He makes a decision. You watch it happen on his face.

"We need to go," he says. "Together, apparently. Where?"`,
      choices: [
        { label: "Take him to your den — The rooms above the bakery on Candle Street. Your ground, your rules.", next: "b3_den" },
        { label: "Let him take you to the barracks — Hide in the last place the tower will look for a thief: among the knights.", next: "b3_barracks" }
      ]
    },

    b3_den: {
      chapter: "Three — Candle Street",
      text: `Your den is two rooms above a bakery on Candle Street, reached by a ladder, a trapdoor and a lock you made yourself. It smells of bread and candle wax and the herbs you hang to dry in the window. Nobody has ever been up here but you.

Rhys has to duck to get through the trapdoor. He stands in the middle of the room in his scorched armour, dripping on your rug, looking at everything — the maps on the walls, the lockpicks laid out in rows, the stacks of stolen books you're too fond of to sell.

"You read," he says, sounding surprised.

"Thieves can read."

"I didn't mean—" He stops. "I don't know what I meant. I've never been anywhere like this."

The leash lets him get as far as the window before it pulls tight. It's worse indoors. Your den is small, and a mile of invisible rope still means he can't go further than the stairwell without you following. He settles for leaning on the wall by the window, arms folded, watching the street below.

You light a lamp and spread the ledger on the table.

In the vault there was no time for more than a glance. Now, under the lamp, you go through it properly, page by page. Three months of *tether-work*, bought and paid for. And at the bottom of every page, in red, the buyer: *House Ardent.*

He reads it over your shoulder. He's very quiet for a long time.

"There's more," you say. You turn to the inside of the back cover, where someone has pressed a wax seal: a glass eye inside a circle of stars. "That's the mark of the Tower's archmage. Magister Oriel. Every sale is sealed by him personally."

"Oriel has sat on the city council for thirty years," Rhys says slowly. "He dined with my father. He gave me a wardstone when I was knighted."

"Then he knows exactly which knight would come hunting on his own." You hold up your wrist. "Look at this."

You hold your glowing wrist under the lamp and let your mage-sight open. Under the silver glyphs of the tether, faint as a watermark, is a second pattern. It's woven into your own ward like a thread of a different colour. The same glass eye, the same circle of stars.

"He signed it," Rhys says.

"He signed it. He rewrote my ward before I ever set foot in that vault. He hired me, he let me in, and he made sure that if anyone caught me, they'd be chained to me." You sit back. "The question is who he meant to catch."

Rhys doesn't answer. He doesn't need to. He's the one who came alone, off the record, because his commander wouldn't send anyone.

"My commander," he says at last, "is my aunt. Dame Hester Ardent. She's the one who told me to leave the tower alone."

Outside, the bakery's ovens are being lit for the morning. Warm air rises through the floorboards. You find you're watching his face in the lamplight — the scar through his eyebrow, the soot, the careful way he holds himself still when he's hurt — and you make yourself look away.

"So," he says quietly. "A thief and a knight, chained together, holding proof that the Tower's archmage and my own family are selling slave-magic. What do thieves do in a situation like this?"

"Usually? We run."

"And when running's not an option?"

You look at the glyphs on your wrist, glowing in time with your heart. And, you notice, in time with his.

"Then we go after whoever's holding the other end of the rope."`,
      choices: [
        { label: "Go after Oriel tonight — Break back into the tower before he knows you've worked it out.", next: "b4_tower" },
        { label: "Lie low and learn the tether first — Find out what this magic can do before you walk into its maker's house.", next: "b4_study" }
      ]
    },

    b3_barracks: {
      chapter: "Three — The Knights' Hall",
      text: `The barracks of House Ardent are a fortress of red stone on the hill above the river, and Rhys walks you through the gates as if he has every right to, which technically he does. The guards salute him. They look at you — soaked, soot-streaked, obviously not a knight — and then very carefully don't look at you.

"They'll think you're a witness," he murmurs. "Or my mistress. Try to look like one or the other."

"Which would you prefer?"

He doesn't answer that, but his ears go faintly red.

His rooms are plain and very tidy. A narrow bed. A sword rack. A shelf of books on tactics and heraldry, and one, badly hidden behind them, of poetry. You pull it out while he's unbuckling his ruined gauntlet.

"Put that back," he says, without turning round.

"*The Collected Laments of—*"

"Put it *back*."

You put it back. You're smiling. You didn't expect to smile tonight.

He's barely got his breastplate off when someone knocks. Two sharp raps, the kind that isn't asking. Rhys goes still. Then he pushes you, gently, into the shadow behind the door and opens it.

The woman in the corridor is tall and grey-haired and wears a commander's red sash across her armour. She has his eyes — gold, slit-pupilled — but hers are older and much colder.

"Aunt," Rhys says. "Commander."

"You were seen leaving the Tower of Glass." Dame Hester Ardent's voice is pleasant. "The Magisters report a theft. Something from their vault. They're very concerned." She pauses. "Magister Oriel sends his regards, and asks whether you caught the thief."

It's a small thing. The way she says *Oriel*. Too familiar. Like an old friend.

"No, Commander," Rhys says. "The thief got away."

You feel the lie through the leash. It's like a string plucked somewhere under your ribs, a single sharp note.

Hester looks at him for a long moment. Then she smiles. "Pity. Get some sleep, nephew. You look like you've been dragged through a chimney."

The door closes. Rhys stands with his hand flat against it and doesn't move.

"She's never once called Oriel by his name," he says, very quietly. "Not in thirty years. It's always *the archmage*. Always."

"You lied to your commander."

"I lied to my aunt." He turns. His face is pale under the soot. "For a thief whose name I don't even know."

You pull the ledger out of your coat and spread it on his desk. In the vault there was no time for more than a glance. Now you go through it properly, page by page. Three months of *tether-work*, bought and paid for. At the bottom of every page, in red: *House Ardent*. And inside the back cover, pressed in wax, a glass eye in a circle of stars. Oriel's personal seal.

You show him the same mark, faint as a watermark, woven into the glyphs on your wrist.

"He rewrote my ward before I ever set foot in that vault," you say. "He hired me. He let me in. And he made sure that whoever caught me would be chained to me."

"And my aunt told me to stay away from the tower." Rhys sits down heavily on the edge of the narrow bed. "So that if I went anyway, off the record—"

"You'd end up with a thief on a leash, holding proof that your family's been buying slave-magic. Nobody would ever believe a word you said."

He puts his head in his hands. You don't know what to do with a knight who's just watched his family fall apart, so you do the only useful thing you can think of. You sit down next to him, close enough that the leash goes slack, and wait.

After a while, he says: "My name's Rhys. You know that. You could tell me yours."

You think about it. Then you tell him.

He says it back to you once, quietly, as if he's putting it somewhere safe.`,
      choices: [
        { label: "Go after Oriel tonight — Break back into the tower before he knows you've worked it out.", next: "b4_tower" },
        { label: "Lie low and learn the tether first — Find out what this magic can do before you walk into its maker's house.", next: "b4_study" }
      ]
    },

    b4_tower: {
      locked: true,
      chapter: "Four — The Glass Eye",
      text: `You go back in before dawn, the way you came: the servants' stair, the unlatched window, the vault with its broken wardstones swept up into a neat pile. Rhys follows you, quieter than a man in half-armour should be able to move. The leash keeps you a few paces apart, humming faintly.

The vault is empty. The tower is silent. It's too easy, and you both know it, and neither of you says so.

Oriel is waiting in his study at the top of the tower.

He's not what you expected. He's small and neat and silver-haired, in a plain grey robe, sitting at a desk under a great dome of glass that shows the fading stars. There's a pot of tea beside him, and two extra cups. He's been expecting you.

"Ser Rhys," he says warmly. "And our clever thief. Do sit down. You must have questions."

"You hired me," you say. "You rewrote my ward."

"I did." He pours tea. "You were recommended. Very neat work, very discreet, and — forgive me — not the sort of person anyone would believe over a Magister of the Tower." He hands a cup towards Rhys, who doesn't take it. "And you, Ser Rhys. So honourable. So predictable. Your aunt said you'd come alone, and you did."

"My aunt—"

"Has been selling me House Ardent's prisoners for three years," Oriel says pleasantly. "Your family's dungeons are full of enemies of the house. My tether-work keeps them docile and useful, and hires them out to anyone who can pay. It's very profitable. Your aunt's share has rebuilt half the barracks." He sips his tea. "I simply needed a way to keep the one knight with a conscience from telling anyone. And now, if you tell the council, all they'll see is a knight chained to a thief, trying to blame an old man for his own crimes."

He sets down his cup, reaches into his robe, and brings out a small glass bead on a silver chain. Inside it, two lines of silver light twist around each other.

"This is the anchor," he says. "Every tether has one. Whoever holds it holds the leash."

He closes his fingers.

The tether *shortens*.

It's like being hit by a cart. You're thrown off your feet and across the study, and so is Rhys, and you slam into each other hard enough to knock the breath out of you both. The leash is pulled so short you can barely breathe. His arm is round you, your face is pressed into his neck, and neither of you can move more than a hand's width apart.

"Arm's length," Oriel says, turning the bead in his fingers. "It will stay that way until I say otherwise. It makes a knight easier to manage, I find, if he has something to protect." He smiles. "You'll both work for me now. There's a great deal a thief and a dragon-blooded knight can do for the Tower. Or you can walk out, and I'll tighten it a little more each day, until you can't breathe. Think it over."

Rhys moves. He's fast even pinned against you, one hand going for the dagger at his hip. Oriel lifts a finger, and the leash yanks again, and Rhys's knees buckle.

You don't think. You grab the teapot off the desk and throw it at the dome.

The glass shatters in a rain of shards and starlight. Oriel flinches, and his grip on the bead loosens for half a second. The leash gives an inch. It's enough.

You run. Together, because you can't do anything else now. Down the tower stairs, out through the kitchens, into the grey streets as the morning bells begin.

You don't stop until you're somewhere safe. Then you sit on the floor with your back against a wall, shaking, and he sits beside you, because he has to — you're still close enough to feel his heart racing against your arm.

"Arm's length," he says hoarsely. "Every day. Until we can't breathe."

"Then we steal it back," you say. "The anchor. Before he tightens it again."

He turns his head. His face is very close to yours. There's glass in his hair.

"Do you always talk like that when you're terrified?" he asks.

"Yes," you say. "Do you always look at people like that when you're about to do something stupid?"

He doesn't answer. He doesn't look away either.`,
      choices: [
        { label: "Keep it professional — Look away first. You need to be a thief right now, not whatever this is.", next: "b5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Stay where you are — Don't look away. Let it be whatever it's going to be.", next: "b5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    b4_study: {
      locked: true,
      chapter: "Four — The Shape of the Leash",
      text: `You spend the day learning the tether the way you'd learn a lock: carefully, patiently, one pin at a time.

It has rules. It lets you drift apart, slowly, up to about a mile, and then stops you like a wall. It's warm when you're close and cold when you're far, and the glyphs on your wrists glow brighter the nearer you stand. And it carries things. Not thoughts, exactly. A lie plucks at it like a harp string. Fear makes it thrum. When Rhys is hurt — he catches his hand on a nail at one point and swears — you feel a small, sharp sting in your own palm.

"Prisoner-work," he says, when you tell him. "They built it so the guard always knew what the prisoner was feeling. Whether they were planning to run."

"So it works both ways."

"It was never meant to." He's watching you across the room. "Oriel's done something to it."

You spend the afternoon trading lessons, because there's nothing else to do while you wait for dark. He shows you how to hold a sword so you won't break your own wrist with it. His hands are warm over yours, correcting your grip, and the glyphs glow very bright, and you both pretend not to notice. You show him how to open a lock with two hairpins. He's terrible at it. He's so bad at it that you laugh — really laugh, for the first time in days — and he looks at you as if you've done something extraordinary.

"What?" you say.

"Nothing." He looks back at the lock. "I've never heard you laugh."

"You've known me a day."

"I know." He bends the hairpin again, badly. "It feels longer."

It's late afternoon when the crow comes.

It lands on the windowsill, large and black and neat, with a roll of paper tied to its leg. The paper is sealed with a glass eye inside a circle of stars.

*Clever of you both to run,* it says, in a small, precise hand. *But every tether has an anchor, and I have yours. Let me show you. — O.*

You barely have time to read it.

The leash *shortens*.

It's like being hit by a cart. You're thrown off your feet and across the room, and so is he, and you slam into each other so hard it knocks the breath out of you both. The tether has shrunk so short you can barely breathe. His arm is round you. Your face is pressed into his neck. Neither of you can move more than a hand's width apart.

The crow tilts its head, watching. Then it caws once and flies away.

For a long moment neither of you moves. You can feel his heart hammering against your shoulder. You can feel yours doing the same against his chest.

"Arm's length," he says hoarsely, once he can breathe. "He can do that from across the city."

"He's got the anchor." You manage to push yourself up far enough to look at him, which isn't very far. "The glass eye. He's holding the other end of the rope, and he can pull it whenever he likes."

"Then we're his." His jaw is tight. "Whatever he wants us to do — steal for him, kill for him — he only has to squeeze."

"No," you say. "Then we steal it back."

He turns his head. His face is very close to yours. His eyes are gold and furious and frightened, and there's a smear of ink on his cheek from the ledger that you didn't notice until now.

"Do you always talk like that when you're terrified?" he asks.

"Yes," you say. "Do you always look at people like that when you're about to do something stupid?"

He doesn't answer. He doesn't look away either.`,
      choices: [
        { label: "Keep it professional — Look away first. You need to be a thief right now, not whatever this is.", next: "b5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Stay where you are — Don't look away. Let it be whatever it's going to be.", next: "b5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    b5_guarded: {
      locked: true,
      chapter: "Five — Arm's Length",
      text: `You look away first.

It's harder than any lock you've ever picked. But you do it, and you sit up as far as the tether allows, and you say, "Right. Plans," in the voice you use for difficult jobs.

He lets you. You feel him let you — a small tug in the tether, like a door being closed very gently. "Plans," he agrees.

Living at arm's length turns out to be absurd. You can't cross a room without him. You can't sleep without him lying a hand's width away, the two of you carefully back to back, both awake and both pretending otherwise. He can't put his armour on without you standing close enough to buckle it. You find out he hums when he's concentrating, badly and off-key. He finds out you steal food off other people's plates without noticing you're doing it.

"You've taken four of my olives," he says at supper.

"I have not."

"Five." He pushes the plate over to you. "Have them. It's clearly a compulsion."

It helps, in a strange way, keeping it practical. Every time the tether flares warm and your eyes catch his, you can turn it into a plan.

And the plan is coming together.

"There are two ways to beat Oriel," you say on the second evening, spreading a map of Hallowmere across the table. You have to lean against his shoulder to do it; the leash doesn't allow anything else. "The thief's way, and the knight's way."

"Go on."

"The thief's way is the anchor." You tap the Tower of Glass on the map. "In two nights the Magisters hold their Masque. The whole city's nobility in masks, drinking Oriel's wine in the great hall. He'll wear the anchor round his neck — he'd never leave it. We go in as guests. I lift it off him. We're gone before the second dance."

"And the knight's way?"

"The ledger." You tap the High Court on the other side of the river. "You're a knight of House Ardent. You have the right to lay a charge before the Justiciars. We walk in, you put the ledger on the table, and you accuse Oriel and your aunt in front of the whole court. In public. Where he can't squeeze the leash without everyone seeing."

Rhys is quiet for a while. "If I do that," he says, "I'm accusing my own family. Whatever happens to Oriel, I'll never be a knight of House Ardent again."

"I know."

"And the thief's way?"

"If it goes wrong, we both hang."

He looks down at the map. The lamplight catches the scar through his eyebrow. You find yourself wondering how he got it, and push the thought away, because that is exactly the kind of thought you're not having.

"Which would you choose?" he asks.

"I'm a thief," you say. "I always choose the thief's way."

"And yet you're asking me."

You don't have an answer for that. You roll up the map instead.

That night, lying back to back in the dark, you feel the tether hum between you — warm and steady, stronger than it's been all day. You know he's awake. You know he knows you're awake.

"Rhys," you say, very quietly.

"Mm?"

You don't know what you were going to say. So you say, "Your scar. How did you get it?"

A pause. Then, in the dark, you feel him smile. "I'll tell you," he says, "when this is over."`,
      choices: [
        { label: "The thief's way — The Masque. Steal the anchor right off Oriel's neck.", next: "b6_heist" },
        { label: "The knight's way — The High Court. Accuse Oriel and Dame Hester in public, whatever it costs Rhys.", next: "b6_court" }
      ]
    },

    b5_close: {
      locked: true,
      chapter: "Five — Arm's Length",
      text: `You don't look away.

Neither does he. And then there's no distance left to look across, because you're kissing him, or he's kissing you, and the tether flares so hot between you that for a second the whole room is lit silver.

He kisses you like a man who has spent his whole life following orders and has just, for the first time, decided not to. Clumsy for a heartbeat. Then very sure. His hand is in your hair and yours is fisted in his shirt and the leash is humming like a plucked string, and you can feel *him* through it — not his thoughts, but the shape of what he's feeling. Relief, mostly. And a kind of astonishment, as though he'd decided a long time ago that nobody would ever want him for anything but his name.

When you finally break apart, he doesn't go far. His nose brushes yours. He seems to have forgotten how to stand up straight.

"We are chained together," he says, a little breathlessly, "by a man who wants to use us as weapons."

"I noticed."

"This is a terrible time for this."

"It's always a terrible time for this," you say, "in my line of work."

He laughs. It's a good laugh, surprised out of him. You feel it through the leash as much as hear it.

Living at arm's length turns out to be absurd, and wonderful, and very difficult to plan a heist around. You can't cross a room without him. You can't sleep without him. On the first night you lie very carefully back to back, both awake, both pretending. On the second night you give up pretending. You fall asleep with your head on his chest and his heartbeat under your ear, and the glyphs on your wrists glowing soft and silver in the dark, and it's the best you've slept in years.

You wake to him watching you. The light is grey. His hand is resting on the tether-mark on your wrist, his thumb moving slowly over the glyphs.

"It's warmer," he says quietly. "When we're like this. Have you noticed? The leash. It doesn't feel like a leash."

You have noticed. You've been trying not to think about what it means.

The plan comes together over breakfast, with you sitting in his lap because the tether and the kitchen chair between them leave no other option, and he's stopped pretending to mind.

"There are two ways to beat Oriel," you say, spreading a map of Hallowmere across the table. "The thief's way, and the knight's way."

"Go on."

"The thief's way is the anchor." You tap the Tower of Glass. "In two nights the Magisters hold their Masque. Oriel will wear the anchor round his neck — he'd never leave it. We go in masked. I lift it off him. We're gone before the second dance."

"And the knight's way?"

"The ledger." You tap the High Court across the river. "You have the right to lay a charge before the Justiciars. You put the ledger on the table and accuse Oriel and your aunt in front of everyone. In public, where he can't squeeze the leash without the whole city seeing."

He's quiet for a while. His arm is round your waist, and you feel him go still through the tether.

"If I do that," he says, "I'm accusing my own family. I'll never be a knight of House Ardent again."

"I know."

"And the thief's way?"

"If it goes wrong, we both hang."

He looks at the map for a long time. Then he looks at you.

"Your choice," he says. "You've got better instincts than I have. I've just been proving it all morning."

You kiss him for that, briefly, because you can. Then you look at the two circles on the map — the tower and the court — and try to decide which one you're willing to lose him in.`,
      choices: [
        { label: "The thief's way — The Masque. Steal the anchor right off Oriel's neck.", next: "b6_heist" },
        { label: "The knight's way — The High Court. Accuse Oriel and Dame Hester in public, whatever it costs Rhys.", next: "b6_court" }
      ]
    },

    b6_heist: {
      locked: true,
      chapter: "Six — The Masque",
      text: `The Masque of the Tower of Glass is the most glittering night of Hallowmere's year, and you walk into it on the arm of a knight in borrowed silk, wearing a mask made of stolen peacock feathers.

The great hall is a forest of candles and mirrors. Musicians play from a gallery. The nobility of the city drifts between them in masks of gold and lace and bone, drinking Oriel's wine and saying nothing true to each other. It's the most dangerous room you've ever walked into, and you love it.

Rhys hates it. You can feel him hating it through the tether. He dances like a man doing drill, all precise angles.

"Relax," you murmur. "You look like you're about to arrest the orchestra."

"I'm thinking about it." His hand is warm on your back. The leash lets you go no further than his arm allows, which, it turns out, is perfect for dancing. "Where is he?"

"Third mirror. Grey robe, glass mask. He's talking to your aunt."

You'd have known her anyway. Dame Hester Ardent wears no mask at all, as if she can't imagine anyone in Hallowmere who wouldn't want to see her face. She's in dress armour, red sash, a goblet in one gloved hand. As you watch, she lays that hand on Oriel's arm and laughs at something he's said, and the sound carries across the hall. It's a warm laugh. That's the worst part.

You feel him go rigid. Across the hall, Dame Hester Ardent is laughing at something the archmage has said, one gloved hand on his arm. Round Oriel's neck, on a silver chain, the anchor glows faintly against his robe.

"Stay with me," you say. "It's a simple lift. When the music changes, you turn me into him. I'll do the rest."

"And if he feels it?"

"He won't," you say, "feel it."

The music changes. Rhys turns you, beautifully, with the precision of a sword-drill, straight into Oriel's path.

You stumble. You apologise. You catch the old man's sleeve to steady yourself, laughing behind your feathers, and your other hand goes past his collar as light as a moth and closes on the chain. One twist of the clasp. The anchor drops into your palm. You're already turning away.

It's the best lift of your life. You'll remember it forever. And it's a heartbeat too slow.

Because the anchor knows you. The moment it touches your skin, the tether flares — bright silver, blinding, lighting up every mirror in the hall.

The music stops.

Oriel turns. Behind his glass mask, his eyes find the glowing bead in your hand, and then your wrist, and then Rhys.

"Ah," he says, into the silence. "Our clever thief."

The guards are already moving. Rhys draws the sword you told him not to bring, and it catches every candle in the hall. Dame Hester is shouting orders. Nobles are scattering in a flurry of silk.

And Oriel is smiling, holding out his hand.

"Give it to me," he says quietly, "and I'll let the knight live. Keep it, and he dies here, and I take it from your body anyway. I know a great deal of tether-work, my dear. I can make the leash kill him from the other side of the room."

You look at the anchor in your hand. Inside it, two lines of silver light twist round each other — yours and his.

Across the hall, Rhys meets your eyes. He's holding off three guards at once, and he's grinning.

*Run*, he mouths.`,
      choices: [
        { label: "Grab the anchor and run — Out through the gallery window with the anchor in your fist. Rhys will have to follow.", next: "b7_run" },
        { label: "Hand it back — for Rhys's life — Give Oriel the anchor to save Rhys, and hear what he wants in return.", next: "b7_oriel" }
      ]
    },

    b6_court: {
      locked: true,
      chapter: "Six — The High Court",
      text: `The High Court of Hallowmere is a white marble hall with a ceiling painted with the faces of dead judges, and every one of them seems to be looking at you.

Rhys walks in wearing the full armour of a knight of House Ardent for what he knows might be the last time. You walk in beside him, because you have no choice, and because you'd have walked in beside him anyway. The whole gallery turns to stare at the knight and the thief chained together at arm's length.

The three Justiciars sit on their high bench in black. Below them, at the defendants' table, sit Magister Oriel in his plain grey robe and Dame Hester Ardent in her commander's sash. Oriel is smiling faintly. The anchor glows at his throat.

"Ser Rhys Ardent," says the chief Justiciar. "You have laid a charge before this court. State it."

Rhys puts the ledger on the table.

"Magister Oriel of the Tower of Glass," he says, very clearly, so that it carries to every corner of the hall, "has been selling tether-work — slave-magic — to House Ardent for three years. My commander, Dame Hester Ardent, has been buying it, and hiring out our own prisoners as bound servants. This ledger is the proof. And this—" he lifts his wrist, and the glyphs glow — "is what the archmage does to anyone who finds out."

The gallery erupts.

Oriel rises, slowly, holding up his hands for quiet. "Justiciars. I've known this young man since he was a child. He's troubled. He's been led astray." His gentle eyes turn to you. "By a common thief, who stole that ledger from my vault and has clearly forged every page of it to protect herself. And now she has him bound to her with some dark magic of her own, poor boy. Look at them."

Every eye in the hall turns to you. You feel the room turn against you. A thief's word against a Magister's. You always knew how this goes.

"The seal inside the ledger is his," you say. "Check it."

"Seals," Oriel says sadly, "can be stolen. So can reputations."

The chief Justiciar frowns. "Ser Rhys. Your own family stands accused. You understand that if this charge fails, you'll be stripped of your knighthood for bringing it?"

"I understand."

"And if it succeeds," says Dame Hester quietly, speaking for the first time, "you'll have destroyed your own house. Your name. Everything our family has built for three hundred years." She looks at her nephew with something like grief. "Is she worth that, Rhys?"

He doesn't answer her. He doesn't look at her. He looks at you.

The court recesses to examine the ledger. The Justiciars file out. The gallery buzzes. And as you and Rhys sit on the hard bench waiting, a clerk in grey slips a folded note into your hand. It's sealed with a glass eye in a circle of stars.

*You and I both know how this ends,* it says. *A thief's word against mine. He'll lose his name for nothing. But I could make it end differently. Come to the robing room. Alone, if the leash allows. I have an offer. — O.*

You look up. Across the hall, Oriel is watching you. He touches the anchor at his throat, gently, and the tether gives a warning tug.

Beside you, Rhys has read the note over your shoulder.

"Don't," he says quietly. "Whatever he offers. Let me finish this. Let me testify."`,
      choices: [
        { label: "Let Rhys testify — Trust him, and the court, and the truth. Whatever it costs him.", next: "b7_testify" },
        { label: "Hear Oriel's offer — Go to the robing room. Find out what the archmage is really willing to trade.", next: "b7_oriel" }
      ]
    },

    b7_run: {
      locked: true,
      chapter: "Seven — Over the Rooftops",
      text: `You run.

Up the gallery stairs, through the musicians, out of the great window in a shower of glass and peacock feathers, onto the wet slates of the Tower's roof. Behind you, Rhys is fighting his way up the stairs. You feel every blow he takes through the tether — a jolt in your shoulder, a sting across your ribs — and you keep running, because it's the only thing that will save him.

The anchor is burning in your fist.

The moment you're clear of the hall, it goes quiet. And you understand, suddenly, how it works. You can *feel* the leash through it now, the whole silver length of it, like holding one end of a rope in the dark. You can feel where Rhys is. You can feel how much give there is.

And you can feel that you could make it longer. Or shorter. Or cut it.

It's the most dangerous thing you've ever held. It's a man's whole life, curled up in a glass bead, and it fits in your palm like a stolen coin. For one dizzy second you understand exactly how Oriel felt, turning it in his fingers — and you hate how easy it would be to get used to.

He bursts out onto the roof behind you, sword in hand, bleeding from a cut on his cheek. "Go!" he shouts. "Don't wait for me!"

You don't wait. You run together, across the roofs of Hallowmere in the rain, the way thieves run. The leash pulls you into step. Behind you, guards spill out onto the Tower's roof with lanterns. Something white and cold flashes past your ear — Oriel's magic, reaching for you.

You drop down into the tanners' yard, and then the fish alley, and then under the arch of an old stone bridge, and there, finally, you're alone.

Rhys leans against the wall, breathing hard. He's laughing, a little wildly.

"You did it," he says. "You actually did it. Off his *neck*."

You open your hand. The anchor glows silver. Two lines of light, yours and his, turning round each other.

"I can feel it," you say. "All of it. I could cut it right now."

He goes quiet.

"I could make it a mile long again," you go on. "Or ten. Or none. I could walk out of Hallowmere tonight and never come back, and you'd never be able to follow me." You look at him. "I'm a thief. That's what thieves do, when they finally have the thing. They run."

He's still breathing hard. There's blood on his face and rain in his hair and he's looking at you as if you're the only thing in the world.

"Then run," he says quietly. "If that's what you want. I won't stop you. I couldn't anyway." He tries to smile. "You'd be the only thief in history who ever got away from me."

Through the tether, you feel what he doesn't say. It's very simple. It feels like a man standing at a door, watching someone walk away, and not calling after them.

The anchor is warm in your hand. Behind you, whistles are blowing. Oriel will be out hunting you both before the hour's out.

"And if I don't run?" you ask.

"Then we finish this," he says. "Together. However it ends."`,
      choices: [
        { label: "Keep running — alone — Take the anchor, loosen the leash, and vanish into the night. It's what you do.", next: "e_lastheist" },
        { label: "Turn back for him — You've got the anchor. Now decide, together, what the leash becomes.", next: "b8" }
      ]
    },

    b7_oriel: {
      locked: true,
      chapter: "Seven — The Archmage's Offer",
      text: `Oriel doesn't make offers in front of witnesses. The room he takes you to is small, and warm, and very quiet, and he has had tea brought. Of course he has.

The leash only just stretches this far. Through the wall, you can feel Rhys on the other side, a steady, anxious warmth. You can feel him listening.

"Sit," Oriel says. "Please. I'm too old to stand for long."

You don't sit. He doesn't seem offended. He pours himself a cup and settles back in his chair, turning the glowing anchor slowly in his fingers.

"I'll be brief," he says. "You're a practical woman. I respect that. So here are the facts. Your knight is going to lose. A thief and a knight with a grudge, against a Magister of thirty years? Whatever you try, this city will believe me. He'll be stripped of his name, his house will disown him, and the two of you will spend the rest of your lives chained together at arm's length, in some cellar, hiding from me."

"And the alternative?"

"I release you." He holds up the anchor. "The tether has two ends. I can unpick yours. You walk out of this room free. No leash, no knight, no charge. I'll even see to it that the Tower forgets your face. You can go back to Candle Street and be the best thief in Hallowmere, and no one will ever catch you again."

"And Rhys?"

"Stays bound." He says it gently. "To the anchor, rather than to you. To me. A dragon-blooded knight on a leash is a very useful thing, my dear. I'd take good care of him. He'd never be hurt. He'd simply be… mine."

Through the wall, you feel Rhys go very still.

"You're asking me to sell him," you say.

"I'm offering you your life back." Oriel sets down his cup. "You've known him a few days. You're a thief. You've sold a great deal more than a man you barely know. Tell me, honestly — what do you owe him?"

You think about it. You make yourself think about it properly, because you've always been honest with yourself, even if you're not with anyone else.

You think about Candle Street, and the rooms above the bakery, and forty jobs with no name left behind. You think about being free — really free, not on anyone's leash.

And you think about lying back to back at arm's length those first nights, both of you pretending to sleep, the tether humming warm between you. About a knight who threw away his family's good name the moment he read that ledger, because it was the right thing to do. About the way he's looked every time Oriel pulled the leash: not at the danger. At you.

Oriel is watching you with the patience of a man who has made a great many bargains and has never once lost one.

"Well?" he says softly. "Your freedom, or his. It's really very simple."

Through the wall, you feel Rhys. Not pulling. Not pleading. Just there, steady and warm, waiting to find out what you'll do.

He's not asking you to choose him. You can feel that too. He never would.`,
      choices: [
        { label: "Take Oriel's offer — Your freedom for his. You're a thief. It's what thieves do.", next: "e_sold" },
        { label: "Refuse — and take the anchor — Refuse him, then take the anchor off his neck while he's still smiling.", next: "b8" }
      ]
    },

    b7_testify: {
      locked: true,
      chapter: "Seven — The Testimony",
      text: `You tear Oriel's note in half and drop it on the floor.

Rhys lets out a breath you didn't know he was holding. Through the tether you feel it — relief, and something warmer that he doesn't say out loud.

When the court reconvenes, he stands up alone. Well — as alone as arm's length allows. You stand beside him with your chin up, and every eye in the hall on you both.

"Justiciars," he says. "The archmage says the ledger is forged. Then let me tell you what isn't."

And he tells them.

He tells them about three months of hunting a thief through the Tower's vaults, off the record, because his commander wouldn't send anyone. He tells them about the vault ward that tethered him to you. He tells them what Oriel said in his study, and what the crow's note said, and what it felt like when the leash yanked you both across a room. He tells them his aunt called the archmage by his first name, which she hadn't done in thirty years. He tells them the prisoners in House Ardent's dungeons have silver glyphs on their wrists — the same glyphs as these — and that anyone who doubts it can walk down there and look.

He doesn't raise his voice once. He doesn't look at Dame Hester once. He simply tells the truth, carefully and completely, the way he does everything.

When he's finished, the hall is silent.

The chief Justiciar turns to Dame Hester. "Commander. Will you allow this court to inspect your dungeons?"

Hester looks at her nephew for a long moment. You see her decide. You see the fight go out of her.

"No need," she says quietly. "He's telling the truth. He always does. It's the most inconvenient thing about him."

The hall erupts.

Oriel is already moving. Guards are converging on the defendants' table, but the archmage lifts a hand, and every candle in the hall goes out at once. In the darkness you hear shouting, running feet, and a single sharp crack of breaking glass. When the lamps come back, his chair is empty, and there's a hole in the window behind the bench.

But on the floor, where it slipped from his neck as he ran, is a small glass bead on a broken silver chain. Glowing.

Rhys picks it up. He turns it over in his fingers. Then he holds it out to you.

"It's yours," he says. "It was always your ward. You should decide."

Around you, the court is in uproar. Dame Hester is being led away in chains. Justiciars are shouting for the Watch. Someone is already hurrying out to fetch the knights of House Ardent, who will have to decide tonight what to do with a knight who brought down their commander.

Rhys looks tired, and bruised, and quietly, completely certain. He's just given up his name, his family and his knighthood, and he doesn't look like he regrets any of it.

"What happens to you now?" you ask.

"Now?" He almost smiles. "I suppose I'm unemployed."

The chief Justiciar is making her way down from the bench towards you both. Behind her, through the broken window, you can see the night, and the rooftops, and somewhere out there an archmage running with nothing left to bargain with.

"Stay here with me," Rhys says quietly. "Or go after the anchor's future. Either way — I'm with you."`,
      choices: [
        { label: "Stand beside him — Stay with him before the court and the city. Let the leash decide itself later.", next: "e_honour" },
        { label: "Decide the anchor now — Take it in your hand and choose, together, what the leash becomes.", next: "b8" }
      ]
    },

    b8: {
      locked: true,
      chapter: "Eight — The Anchor",
      text: `You end up, as you always seem to, somewhere high.

The bell tower of Saint Mercy's, the tallest in Hallowmere, where the city's thieves have always gone to be alone. The bells are silent. The rain has stopped. Below you, Hallowmere is waking up to the news: the archmage has fled his own tower, and the whole city is arguing about why.

The anchor sits in your palm. Two lines of silver light, yours and his, turning slowly round each other.

Rhys sits beside you on the stone ledge, closer than the leash requires. Neither of you has mentioned that.

"I can feel how it works now," you say. "The anchor doesn't just hold the leash. It *makes* it. Whoever holds it decides what the tether is." You turn it in the grey light. "Oriel made it a chain. It doesn't have to be."

"What else could it be?"

"Anything, I think." You look at the glyphs on your wrist. They're glowing softly, in time with your heart. And in time with his. "I could cut it. Clean. We'd both be free — no leash, no glyphs, no pulling. You could go your way and I could go mine."

He nods slowly. His face gives nothing away. Through the tether, you feel him bracing.

"Or?"

"Or I could leave it. But not as a leash." You swallow. "Something you choose. Something we both choose. The same magic — you'd always know where I am, I'd always know where you are, we'd always feel it when the other's hurt. But no length. No pulling. It'd go as far as we let it. It'd only hold if we both wanted it to."

He's quiet for a long time. The first light is coming up over the river.

"You're a thief," he says finally. "You said so. You said thieves run when they've got the thing."

"I did say that."

"And I'm—" he laughs, a little helplessly. "I don't know what I am any more. Not a knight of House Ardent, after this. My family will never forgive me. I've got a sword, a poetry book I'm ashamed of, and a scar I promised to tell you about."

"You never did tell me."

"A dragon," he says. "A real one, in the eastern hills, when I was fifteen. It was the only thing in my life I ever ran away from." He looks at you. "Until you tried to run from me. And I found out I'd rather follow."

The anchor is warm in your palm. It's pulsing now, slowly. Waiting.

He doesn't reach for it. He doesn't reach for you. He's waiting too.

You understand, suddenly, that he could have taken it at any point tonight. He's stronger than you, and faster, and he's dragon-blooded; he could have pried it out of your fingers before you finished blinking. He hasn't even looked at it. Every time the tether has pulled, every time the anchor has changed hands, he has left it with you, the way he's left you every real choice since the vault.

He's been giving you the other end of the rope all along. He just never said so.

You think about Candle Street. About the forty jobs and no name left behind. About how it felt, the first night, to feel the leash pull tight and know that for the first time in your life, someone was holding the other end.

It was terrifying. It still is.

Below you, the bells of Saint Mercy's start to ring for morning.`,
      choices: [
        { label: "Remake it as a bond — Turn the leash into something you both choose, and keep him.", next: "e_lifeline" },
        { label: "Break it clean — Cut the tether. Whatever comes next, you both walk into it free.", branchOn: { flag: "guarded", ifTrue: "e_roads", ifFalse: "e_cleanbreak" } },
        { label: "Put it in his hand — He's given you every choice since the vault. Give him this one.", next: "e_otherend" }
      ]
    },

    e_otherend: {
      locked: true,
      chapter: "Nine — The Other End of the Rope",
      text: `You hold the anchor out to him.

He stares at it. Then at you. Through the tether, you feel him go very still — the particular stillness of a man who's just been handed something he's afraid to drop.

"What are you doing?"

"You've given me every choice since the vault," you say. "Every single one. You could have taken this off me a dozen times tonight and you never even looked at it." Your hand is shaking. You keep it out anyway. "So this one's yours. Make it whatever you want. Cut it. Keep it. I'll live with it."

"That's not—" He stops. "You're a thief. You don't hand people the thing."

"I know. I'm very bad at this."

He laughs, a short, cracked sound, and then he takes it. His fingers close round the anchor, and round yours, and for a moment neither of you lets go.

Then he does something you don't expect.

He gets down off the ledge and kneels on the stone floor of the bell tower, the way knights kneel in the old paintings in the Hall of Oaths, one knee down and his head bowed, with the anchor held in both hands in front of him like a sword hilt. And he begins to speak the oath of House Ardent. You've heard it before. Every child in Hallowmere has, at every tournament and every funeral.

He changes the words.

*Not to a house*, he says. *Not to a crown. Not to the Order or the Court or the name I was born with.* His voice is quite steady. *To a thief of Candle Street, who never once left a name behind. My sword, my road and my word, for as long as that thief will have them. And not one day longer.*

The anchor flares white.

You feel the tether change. It doesn't break. It turns over, like a coin — and the glyphs on your wrist go cool, and fade, and are gone. You look at his. They're burning. Bright silver, all the way up to the elbow.

He's put the whole leash on himself. And given you the other end.

"That," you say, when you can speak, "is not fair."

"Knights aren't meant to be fair." He looks up at you. "We're meant to be faithful. It's the only thing I've ever been any good at."

You pull him up off the floor by his collar and kiss him, there in the bell tower, with the bells of Saint Mercy's ringing for morning all round you, until neither of you can hear them any more.

Hallowmere has never known what to make of the two of you. A thief who can go anywhere, through any window, over any roof. And a disgraced knight who always, somehow, knows exactly where you are, and turns up a minute later with a sword and a long-suffering expression, like a shadow that's had a very trying day.

A year later, you ask him to release it. He refuses. Politely.

So you steal the anchor. Out of his coat, while he's asleep. It takes you three tries, which you'll never admit to anyone.

And then, instead of breaking it, you sit on the end of the bed in the grey light and speak the oath back. The same words. His name instead of yours.

When he wakes up, there are glyphs on both your wrists. He looks at them for a long time.

"You stole it," he says.

"I'm a thief," you say. "You knew that when you knelt."`,
      ending: true,
      tag: "Ending: The Other End of the Rope"
    },

    e_lifeline: {
      locked: true,
      chapter: "Nine — Lifeline",
      text: `You close your hand round the anchor.

"I don't want a leash," you say. "But I don't want to lose this either. So we make it something else."

"Are you sure?" he asks quietly. "Once it's made, I don't think it can be unmade."

"I've never been sure of anything in my life." You hold out your other hand. "Help me anyway."

He takes it.

You open your mage-sight and look into the anchor, at the two lines of silver turning round each other, and you do what you've done to forty locks: you find the mechanism, and you change it. Not the pins. The shape. Oriel built a chain — a length, a pull, a pain. You unpick every link of it, carefully, one by one, and leave behind only what was there underneath all along.

A thread. Warm and silver. Going as far as it's allowed, and no further.

The anchor cracks in your palm like an eggshell. The light inside it flows up your arm and into the glyphs on your wrist, and into his, and for a moment the whole bell tower is lit silver.

Then it settles. The glyphs change. They're not a prisoner's marks any more. They look like writing — like your name, you realise, in a script you've never learned, curling round his wrist. And his round yours.

He stands up. You stand up. He takes a step back, testing.

Then another. And another. Right across the bell tower. Nothing pulls. Nothing stops him.

But you can feel him. Exactly where he is. How fast his heart is going. The astonished, careful joy he's trying and failing to keep off his face.

"It doesn't pull," he says.

"No."

"I could walk to the other side of the world."

"You could."

He crosses the bell tower in three strides and kisses you, hard, in the grey morning light, with the bells of Saint Mercy's ringing all around you. The new thread between you blazes so bright you can feel it in your teeth.

"I'm not going to," he says against your mouth. "Just so you know. I'm really not."

Oriel is caught a week later, trying to board a ship at the river docks. It's your old fence, Tam, who spots him, and a disgraced knight and a thief who make the arrest. Dame Hester goes to the prison ships. The prisoners in the Ardent dungeons walk free, their silver glyphs fading like old bruises.

House Ardent strips Rhys of his knighthood, as promised. He doesn't seem to mind. He moves his poetry book into the rooms above the bakery on Candle Street, and learns — very slowly — how to open a lock with two hairpins.

The city starts calling the two of you something. It takes you a while to find out what.

*The Oath and the Thief*. They say you can't be caught, because each of you always knows exactly where the other one is.

It's true. Most nights, it's the first thing you feel when you wake: a warm silver thread, going exactly as far as the man asleep beside you. And no further, because neither of you wants it to.`,
      ending: true,
      tag: "Ending: Lifeline"
    },

    e_cleanbreak: {
      locked: true,
      chapter: "Nine — A Clean Break",
      text: `"We cut it," you say. "Clean. Both ends."

He nods slowly. Through the tether, you feel something in him go quiet — not hurt, exactly. Resigned. As if he'd expected this.

"Before you do," you add, "I want to say something. So you don't misunderstand."

He waits.

"I'm not cutting it because I want to be away from you." Your voice isn't quite steady. "I'm cutting it because I want to find out what happens when I *can* be away from you. And don't go. I've never chosen anything in my life that wasn't a job or a getaway. I want to choose this. Properly. Without a spell doing it for me."

He stares at you. And then — slowly, disbelievingly — he starts to smile.

"That's the most romantic thing anyone's ever said to me," he says. "And you said it about cutting a magical leash."

"I'm a thief. We're not good at speeches."

You open your mage-sight and look into the anchor. You find the mechanism, the way you'd find it in any lock, and you take it apart. Not violently. Carefully, one link at a time, until there's nothing left but two thin silver threads. Then you let them go.

The anchor cracks. The glyphs on your wrist flare once and fade, leaving only a faint silver scar, like an old burn. On his wrist, the same.

He stands up and takes a step back. Then another. Right across the bell tower. Nothing stops him.

It's strange, not feeling him. For days there's been a warm, steady hum under your ribs, and now there's only your own heart. You feel very light, and very alone, and very free.

He comes back across the bell tower anyway. He stops a hand's width away. Exactly the distance the leash used to hold you. Neither of you mentions it.

"So," he says. "What now, thief?"

"Now," you say, "you help me catch an archmage. Then I believe you owe me a story about a dragon. And then—" you shrug, trying to look casual and failing — "I don't know. Dinner?"

"Dinner," he agrees gravely.

Oriel is caught a week later at the river docks, trying to board a ship to the south. Dame Hester goes to the prison ships. The prisoners in the Ardent dungeons walk free. House Ardent strips Rhys of his knighthood, as promised, and he takes it better than anyone expects, perhaps because he spends the evening afterwards in the rooms above the bakery, eating warm bread straight from the ovens downstairs.

It isn't quick, what happens between you. Neither of you is used to anything that isn't a fight or a job. But it's yours. Every step of it. Nothing pulls you together except that you both keep turning up.

And one night, a month later, lying in the dark, you realise you've started doing it without thinking. Reaching for the place under your ribs where the leash used to hum.

It isn't there. He is. Warm, and asleep, and exactly where he chose to be.`,
      ending: true,
      tag: "Ending: A Clean Break"
    },

    e_roads: {
      locked: true,
      chapter: "Nine — Separate Roads",
      text: `"We cut it," you say. "Clean. Both ends."

He nods. Through the tether, you feel something in him go quiet. Not surprised. He's been feeling you hold him at arm's length for days — every time you looked away, every time you turned closeness into a plan. He's not going to argue with it now.

"Of course," he says. "You should be free. You've earned it."

You open your mage-sight and look into the anchor. You find the mechanism, the way you'd find it in any lock, and you take it apart, one link at a time, until there's nothing left but two thin silver threads. Then you let them go.

The anchor cracks. The glyphs on your wrist flare once and fade, leaving a faint silver scar. On his, the same.

He stands up. He takes a step back, then another, right across the bell tower. Nothing stops him. He looks down at his wrist for a long moment. Then he looks at you, and gives you a small, formal bow. The kind a knight gives a lady at the end of a dance.

"It's been an honour," he says. "Truly. I never met anyone like you."

"Rhys—"

"Don't." He says it gently. "You don't have to explain. I understood. You kept telling me, the whole time, in every way a person can say it without words. I just didn't want to listen."

He goes down the tower stairs. At the turn of the stair he stops, just for a moment, one hand on the stone, as if he's waiting to feel something tug. Then he remembers there's nothing there to tug, and goes on down.

You don't follow him. You sit in the bell tower as the bells ring for morning, and your wrist is cold, and so is the place under your ribs where the leash used to hum.

Oriel is caught at the river docks a week later. You read about it on a broadsheet. It says the arrest was made by *a disgraced knight, formerly of House Ardent, acting alone*. Dame Hester goes to the prison ships. The prisoners in the Ardent dungeons walk free.

You go back to Candle Street. You take jobs. You're very good at them. Nobody catches you, ever again.

Sometimes, on the way home across the rooftops, you pass the bell tower of Saint Mercy's and slow down, without meaning to.

Once, a month later, you see him in the market. He's out of armour, in a plain coat, buying bread. He looks up and sees you across the square. For a moment neither of you moves.

Then he smiles — a real smile, rueful and warm — and lifts a hand. You lift one back.

He doesn't cross the square. Neither do you. That was always the thing you were best at, and the thing you'd most like to have been worse at.

You still don't know how he got the scar. You never asked him again.

Some nights, lying awake, you wish you had.`,
      ending: true,
      tag: "Ending: Separate Roads"
    },

    e_lastheist: {
      locked: true,
      chapter: "Eight — The Last Heist",
      text: `You close your hand round the anchor.

"I'm sorry," you say. And you mean it more than you've meant anything.

He doesn't argue. He only nods, slowly, and says, "I know."

You open your mage-sight and look into the anchor and make the leash long. Not cut — you don't have time to unpick it properly, and something in you doesn't want to. Just long. A mile. Ten miles. Fifty. As long as the magic will stretch, until it feels like a thread so thin you could snap it by breathing.

Then you run.

Not across the rooftops this time. Out of the city. Through the river gate before dawn, onto a barge heading south, and then a wagon, and then a road you've never seen before. By the time the sun is fully up, Hallowmere is a smudge of smoke behind you.

You can still feel him. Faintly. A warm, steady pulse at the very end of the thread, far behind you, not moving. Not following.

He's letting you go.

You make a new life in the southern cities, the way thieves do. New name, new rooms, new fences. You're good. You were always good. You steal from people who deserve it and give some of it away and never, ever get caught.

You rent rooms above a baker's, because some habits you can't break. You hang herbs in the window. You buy a poetry book at a market stall, for no reason you're willing to examine, and read it at night by candlelight, and find it very bad, and read it again.

The anchor lives on a chain round your neck, under your shirt. You tell yourself you keep it so that no one else can ever pull the leash. It's even partly true.

News drifts south sometimes, the way news does. The archmage of Hallowmere was taken at the river docks by a knight who'd been stripped of his name. The prisoners of House Ardent walked free. The knight wasn't hurt.

At night, sometimes, you close your hand round the anchor and feel for the other end of the thread. It's always there. Warm. Steady. Very far away.

One night, a year after you left, you feel it tug.

Just once. Gently. Not pulling you back — just a question, sent down fifty miles of silver thread in the dark. *Are you there?*

You lie in your bed in a strange city and hold the anchor so tightly the glass cuts your palm.

Then you tug back. Once. *Yes.*

You don't know what happens next. You don't know if you'll ever go back. But every night after that, just before you fall asleep, you feel it — one small, gentle tug from very far away.

And every night, you answer.

It's the one job you've never managed to finish. You're beginning to think you don't want to.`,
      ending: true,
      tag: "Ending: The Last Heist"
    },

    e_sold: {
      locked: true,
      chapter: "Eight — Sold",
      text: `"Yes," you say.

Through the wall, you feel Rhys go still. Not angry. Not even surprised. Just still, like a man who's heard the answer he expected and is standing very quietly in the ruins of the one he hoped for.

Oriel smiles. "A practical woman. I knew it."

He turns the anchor in his fingers and murmurs something in a language you don't know. You feel the tether move — a long, cold tug under your ribs, like a splinter being drawn out — and then, suddenly, nothing.

The glyphs on your wrist go dark. Then they're gone. There's nothing under your ribs but your own heart.

You're free.

On the other side of the wall, Rhys makes a sound. Just one. You'll hear it for the rest of your life.

"He'll be quite safe," Oriel says kindly, tucking the anchor back inside his robe. "I'll see to it. Off you go now. The Tower will forget your face, as promised. I always keep my bargains."

You walk out through a side door, into the rain. No one stops you. No one even looks at you. Behind you, you can hear Oriel's gentle voice explaining to someone that the troubled young knight has come to his senses, and would like to apologise.

And then Rhys's voice. Flat and even and nothing like his own. *The fault was mine. The ledger was forged. I apologise.*

You don't stay to hear the rest.

You go back to Candle Street. The rooms are exactly as you left them — the maps, the lockpicks, the herbs in the window. You stand in the middle of the floor for a long time, waiting to feel free.

It turns out freedom is very quiet. It turns out that for days you've been used to a warm hum under your ribs, telling you exactly where someone was and whether they were hurt, and now there's nothing there at all. You keep reaching for it, without meaning to, the way a tongue keeps finding the gap where a tooth used to be.

You take jobs. You're very good at them. Nobody ever catches you again. Nobody ever even comes close.

Sometimes, on the street, you see a knight of House Ardent in dark armour, following two paces behind the grey-robed archmage of the Tower of Glass. He's very well cared for. He's never hurt. He's always there, at Oriel's shoulder, like a shadow, carrying things.

He never looks at anyone. He never looks at you.

Once, in the market, you pass close enough to touch him. You see the silver glyphs on his wrist, glowing faintly under his cuff. You see the scar through his eyebrow. He never did tell you how he got it.

He looks straight through you, as if you're not there. And you understand, in that moment, that the last thing he chose, before the leash took everything else, was not to see you.

You're free. You got everything you wanted.

You never pick another lock without thinking of two hairpins, and a man who was terrible at it, and laughed anyway.`,
      ending: true,
      tag: "Ending: Sold"
    },

    e_honour: {
      locked: true,
      chapter: "Eight — The Knight's Honour",
      text: `"I'm staying here," you say. "With you. The anchor can wait."

He looks at you for a long moment. Then he puts the anchor in your hand and closes your fingers round it, and keeps his hand over yours.

"Then we face them together," he says.

The chief Justiciar reaches you. She's a small, fierce woman with ink on her fingers, and she looks from Rhys to you to the glowing bead in your joined hands.

"Ser Rhys Ardent," she says. "You understand what you've done here tonight."

"I brought down my own house," he says. "Yes."

"You told the truth when it cost you everything." She regards him with something that might be respect. "The law of Hallowmere says a knight who brings a true charge against his own commander is released from his oaths. You're no longer a knight of House Ardent." A pause. "The law also says that the city may offer such a man a new oath, if it chooses. The Justiciars have need of an officer who can't be bought."

Rhys goes very still. You feel it through the tether — a flare of something bright and disbelieving.

"I'd have to swear to the city," he says slowly. "Not a house. Not a name."

"You would."

He looks at you. You nod before he's even asked.

He kneels on the white marble floor of the High Court, in the armour of a house that has just disowned him, and swears a new oath to the city of Hallowmere. He does it with your hand still in his, and the tether glowing between you, and the whole gallery on its feet. It's the first time you've ever seen a room full of nobles look at a thief with something other than suspicion.

When he stands up, he's a Justiciar's officer. No house. No family name. Just Rhys.

"What do I call you now?" you ask him afterwards, on the court steps, in the rain.

"Rhys," he says. "Just Rhys. It turns out that's all I wanted to be." He looks down at the anchor, still in your hand. "And that?"

You turn it in the lamplight. Two lines of silver, twisting round each other.

"Oriel's still out there," you say. "Somewhere in the city, with nothing left to lose. You'll need someone to help you catch him. Someone who knows how thieves think."

"Are you offering?"

"I'm offering." You slip the anchor onto its chain and hang it round your neck, under your shirt, where it rests warm against your heart. "And this stays as it is until we catch him. Arm's length. You can put up with me for that long, can't you?"

He smiles at you, slowly, in the rain.

"I can put up with you," he says, "for a great deal longer than that."

You catch Oriel eleven days later. By then, neither of you can remember why you ever wanted the leash any longer than it is.`,
      ending: true,
      tag: "Ending: The Knight's Honour"
    }

  }
};
