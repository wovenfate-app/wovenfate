// Ashbound — full-length edition, rebuilt 2026-09: 22 scenes, 8–9
// chapters per read-through, 7 endings.
//
// Node ids are new (a*/e*): the seed script only upserts, so readers
// partway through the original version keep its n* nodes and can finish
// it undisturbed, while new readers start at a1.
//
// Engine contract: { startNode, nodes }, each node { chapter, text,
// choices | ending }, chapters 4+ locked. Flags: `kindled` (set when you
// let your mother unbind your fire, in a6_mother). In a8, "Go after him"
// reads it: only a kindled heir can shift and catch him in the air.
//
// Names: Lucan Vire (heir of House Vire), Lady Rowena Ashcombe (your
// mother), Lord Garrick Vire (Lucan's father), Aldric (Lucan's late
// brother). Places: Duskwatch fortress, the Cinder March.

export const ashbound = {
  startNode: "a1",
  nodes: {

    a1: {
      chapter: "One — The Terms of Peace",
      text: `Two hundred years of war between your house and his ends, apparently, with a single sheet of treaty vellum and your name at the bottom of it, delivered to your rooms on a council courier's silver tray as if it were an invitation to dinner.

"An alliance marriage," your mother says. She says it the way she'd announce that the harvest ledgers are down a percentage this quarter, without looking up from the columns of figures across her desk. Two centuries of border dead, reduced to numbers in Lady Rowena Ashcombe's careful hand, the way they've always been reduced in this house. "Both bloodlines have bled themselves down to embers. The council has decided it ends now, with a marriage neither side can politely refuse. Or it ends in another fifty years, with nobody left standing to sign anything at all."

"And *ends now* means marrying the heir of the house that burned three of our border towns."

"It means marrying the heir of the house whose granaries *your* grandfather burned the winter before that, if you'd like to compare which ash is older." She still doesn't look up. "You've spent your whole life being told what Lucan Vire is by people who have never been in a room with him. I suggest you meet him before you decide."

You don't argue. You never win arguments with your mother. You go to your room and stand at the window and look out at the Cinder March, the scorched border country that has been burning, on and off, for two hundred years.

You think about the other thing. The thing nobody in either house will say out loud at the signing.

Every heir of House Ashcombe and House Vire can shift. It's in the blood — the old dragon-fire, handed down for a thousand years. When they come of age, the heirs take wing: great grey dragons for Ashcombe, bronze-red for Vire. Your cousins shifted at fourteen. Your mother at twelve.

You're twenty-four. You've never shifted once.

Ashbound, they call people like you. The fire's in you, but it's banked, buried, bound in ash. It happens, now and then, in the old families. It's a quiet shame. Your mother has never once spoken of it. And now you're going to be married to the heir of House Vire, who everyone says was flying before he could walk.

You meet him three days later, on the scorched neutral ground between your territories. Ash-grey grass crunches under your boots. Both of you are flanked by guards who would clearly rather be anywhere else.

He's exactly what two hundred years of stories promised, and somehow nothing like it. Tall. Sharp-eyed. Dragon-marked down the length of one forearm in scales the bronze-red of his house's banners. He carries himself with the particular ease of someone who has never once had to apologise for existing.

He looks you over, unhurried, the way you imagine he'd look over a treaty clause he hasn't decided whether to accept.

"So," says Lucan Vire. "You're the one I'm supposed to save two centuries of bloodshed by marrying."

"Try not to sound thrilled about it."

Something that might be the beginning of a real smile pulls at one corner of his mouth, there and gone again. "Wouldn't dream of it. I'm told enthusiasm reads as suspicious, in a house like yours."`,
      choices: [
        { label: "Refuse to play nice — Make him work for basic civility. Charm won't carry this afternoon.", next: "a2_blunt" },
        { label: "Be disarmingly polite — Offer your hand properly. See how badly two centuries of expected hostility unbalances him.", next: "a2_polite" }
      ]
    },

    a2_blunt: {
      chapter: "Two — Making Him Work For It",
      text: `"Let's be honest," you say, folding your arms against the ash-laden wind. "This is a transaction. Your house gets an alliance. Mine gets to stop burying its children along your border every third spring. Let's not perform anything warmer than that for an audience neither of us invited."

He doesn't look remotely offended. If anything, something in his shoulders loosens, as if bluntness is a language he's been starving for after weeks of council diplomats.

"Honestly," he says, "that's a relief. I came prepared for two hours of forced pleasantries and compliments about your house's ancestral tapestries. Which, for the record, three separate advisors have described to me at length, and which I still haven't seen."

"You're not going to argue that we ought to try liking each other? For appearances?"

"I didn't say that." His eyes glint. "I said liking each other isn't in the contract. Whether it happens anyway, I intend to leave entirely up to you and whatever considerable stubbornness got you through the last ten minutes of this conversation."

"That's insufferably confident of you, for a man I've known six minutes."

"So I've been told. Usually by people who've known me considerably longer than six minutes." He offers a mock-bow that somehow manages to be both mocking and genuinely respectful. "I didn't burn your border towns personally, by the way. I was eleven, and mostly busy avoiding my tutors. I'd rather you judged me by what I do from here, not by what my father did before I had any say."

"That's a fine speech for a man who's had three days to prepare it."

"Four, actually. I wanted it exactly right before I risked it on you."

You almost laugh. You catch it just in time.

That's when you see the glint on the ridge.

It's nothing. A flash of light, high on the black rocks above the neutral ground, where nobody should be. A second later you understand what it is — the sun catching steel — and you're already moving, because you've grown up on a border where you learn what a crossbow looks like before you learn to read.

"Down!"

You hit him in the chest with both hands. He's heavier than he looks, but he's not expecting it, and you both go down hard onto the ash-grey grass. Something hisses through the air where his head was a heartbeat ago and buries itself in the ground with a *thunk*.

For one moment, nothing happens. Then everything does.

The guards are shouting. Both honour guards have their swords out, and every one of them is looking at the other side, and you can see it in their faces — two hundred years of war, about to start again right here, over one crossbow bolt.

Lucan is lying on his back in the ash, staring up at you. You're on top of him. Your hand is still flat against his chest. You can feel his heart hammering.

"You," he says, a little breathlessly, "have very good eyes."

"Your guards are about to kill mine."

"Right. Yes." He doesn't move for one more second. Then he rolls you both upright in a single fluid motion and is on his feet between the two honour guards, one arm raised, his voice cracking out across the neutral ground like a whip. "*Hold!* Nobody draws on anybody! That bolt came from the ridge!"

The bolt is still quivering in the grass. The fletching is grey. Ashcombe grey. Your house's colour.

Up on the ridge, you catch a glimpse of someone running.`,
      choices: [
        { label: "Chase the assassin — You know these hills. Go after whoever fired before they vanish.", next: "a3_ridge" },
        { label: "Stay with Lucan — Get him somewhere safe and find out who wants him dead.", next: "a3_pavilion" }
      ]
    },

    a2_polite: {
      chapter: "Two — Disarming Politeness",
      text: `You hold out your hand. Properly, the way the old treaties require and nobody from either house has bothered doing in living memory.

"I'm not going to waste two centuries of inherited grudge on a man who wasn't born for most of it," you say. "I'd rather start from somewhere closer to even ground."

He blinks. Actually blinks, visibly recalibrating, as if plain decency wasn't anywhere on the list of things he'd braced for.

"That's unexpectedly generous," he says slowly, "given what my house's banners must mean to someone raised on the stories I imagine you were raised on."

"It's practical, more than generous. Two hundred years of hating you on principle hasn't saved a single border town. I'm willing to try something else, if only because nothing else has worked."

"Careful." He takes your hand. Something warmer than diplomacy moves through his grip before he catches himself. "Keep being this reasonable and you'll ruin my entire understanding of how today was supposed to go."

"How was it supposed to go?"

"Badly. Loudly. Ideally with some minor, forgivable property damage to the neutral pavilion, so the councils could tell each other it was always going to be difficult." A real smile breaks through, unguarded for exactly a moment. "I don't know what to do with someone from your house choosing decency first. I'll need a moment to rethink my entire strategy for the afternoon."

"Take your time," you say. "We have, apparently, the rest of our lives for you to catch up."

"A generous head start. I intend to use every day of it."

He's still holding your hand. Neither of you seems to have noticed.

That's when you see the glint on the ridge.

A flash of light, high on the black rocks above the neutral ground, where nobody should be. You understand it a heartbeat later — sun on steel — and you're already moving, because you grew up on a border where you learn what a crossbow looks like before you learn to read.

You yank his hand hard, pulling him off balance and into you, and you both stumble sideways. Something hisses through the air where he was standing and buries itself in the grass with a *thunk*.

For one moment, nothing happens. Then everything does.

Both honour guards have their swords out. Every one of them is looking at the other side. You can see it in their faces — two hundred years of war, about to start again, here, over one crossbow bolt.

Lucan is staring at you. You're pressed against his chest. His arm has come round you, instinctively, protective, and he doesn't seem to have noticed that either.

"You," he says, a little breathlessly, "have very good eyes."

"Your guards are about to kill mine."

"Right. Yes." He lets you go and is between the two honour guards in two strides, one arm raised, his voice cracking out across the neutral ground like a whip. "*Hold!* Nobody draws on anybody! That bolt came from the ridge!"

The bolt is still quivering in the grass. The fletching is grey. Ashcombe grey. Your house's colour.

Up on the ridge, you catch a glimpse of someone running.`,
      choices: [
        { label: "Chase the assassin — You know these hills. Go after whoever fired before they vanish.", next: "a3_ridge" },
        { label: "Stay with Lucan — Get him somewhere safe and find out who wants him dead.", next: "a3_pavilion" }
      ]
    },

    a3_ridge: {
      chapter: "Three — The Ridge",
      text: `You run.

You know these hills. You grew up on them — the black rocks, the ash-choked gullies, the goat paths that wind up the ridge like threads. The assassin doesn't. You can tell from the noise he's making, scrambling and slipping on the loose scree above you.

You hear wings behind you.

You don't have to look. The sound is unmistakable: a great leathery *whump*, and then another, and a hot wind that flattens the ash-grass round your ankles. A shadow passes over you, huge and bronze-red, and lands on the rocks above the assassin in a scrape of claws and a shower of stones.

Lucan. He's shifted.

You've seen dragons all your life. Your mother, your cousins, your whole house. You've never seen one this close, this fast, this *bright* — every scale the colour of hot copper, eyes gold as a forge. He's cut the assassin off. The man stumbles back, crossbow raised, shaking.

You reach them just as the man turns to run the other way. You bring him down with a tackle that knocks the wind out of both of you.

He's no one. That's the first thing you notice. A thin, frightened man in a plain brown coat, the kind of hire you can buy in any border tavern for a handful of silver. The second thing you notice is his boots.

Good boots. Too good. Red leather, stitched with a tiny flame at the heel.

Vire boots. From a Vire cobbler, in a Vire city.

Behind you, there's a sound like a bonfire settling, and when you look round, Lucan is a man again, crouched on the rocks, breathing hard. His shirt is torn at the shoulders where the wings came through. He's looking at the boots too.

"Who paid you?" you ask the assassin.

The man looks from you to Lucan. His lips are moving. You realise he's praying.

"Who paid you?" Lucan says, very quietly. There's still a little fire in his voice, an ember glow at the back of his throat.

"The Lord," the man whispers. "The Lord said—"

And then he convulses. His eyes roll back. There's a bitter smell, like burnt almonds, and a crushed glass vial falls from between his teeth.

He's dead before either of you can move.

You sit back on your heels on the black rock, breathing hard. The ridge is very quiet. Below you, the two honour guards are still facing each other across the neutral ground, swords drawn, waiting.

"*The Lord*," you say. "Which lord?"

Lucan doesn't answer. He's looking at the boots.

"Grey fletching on the bolt," you say slowly. "So everyone down there thinks my house tried to kill you. And Vire boots on the man who fired it. Somebody wanted this treaty dead before the ink was dry, and wanted my family blamed for it."

"Yes," Lucan says. His voice is very flat.

You look at him properly. His shirt is torn and his hands are scraped and there's ash on his face, and he looks, for one moment, younger than he did on the neutral ground, and much more tired.

"You know who it was," you say.

"I know who it might have been." He stands, and holds out a hand to pull you up. "I'll tell you. But not here. And not until I'm sure."

He shifted for you, you think. He went after an assassin in front of both honour guards, when he could have let his own men do it. You don't know what to make of that.

You take his hand. His palm is still hot from the fire.`,
      choices: [
        { label: "Tell him your secret — You're betrothed to a man who can fly. He should know you can't.", next: "a4_secret" },
        { label: "Ask about his father — Keep your own secret. Find out who *the Lord* is.", next: "a4_father" }
      ]
    },

    a3_pavilion: {
      chapter: "Three — The Practical Matters",
      text: `You get him into the neutral pavilion's smaller council room, with a guard from each house on the door, and you bar it behind you.

He sits down hard on a bench. His hands are shaking, very slightly. He notices you noticing, and folds them.

"That," he says, "was the fourth time this year."

You stare at him. "Someone's tried to kill you four times?"

"Three before today. Poison at a feast in the spring. A rockfall on the mountain road that wasn't quite an accident. A horse that someone had been feeding something." He says it lightly, the way people talk about the weather. "Today's the first time anyone's tried to make it look like your family did it."

"Grey fletching."

"Grey fletching." He looks at you. "I don't think it was you. I don't think it was anyone in your house. You'd have done it better."

"That's the nicest thing anyone's said to me all week."

The ghost of a smile. Then it fades. He looks down at the treaty lying on the table between you — a thick sheaf of vellum, both houses' seals at the bottom.

"Have you read it?" he asks. "The whole thing?"

"Not all of it."

He turns to the last page and puts his finger on a clause. You read it twice, then a third time, hunting for a softer interpretation. There isn't one.

*If the marriage fails within its first decade, for any reason, the war resumes. No grace period. No second treaty.*

"For any reason," you say slowly. "Including one of us dying."

"Especially one of us dying." His voice is quiet. "Whoever wants the war back doesn't have to fight it. They only have to make sure one of us doesn't reach the altar. Or the tenth anniversary."

"Who would want the war back? Everyone's exhausted. Both houses are bleeding."

He's silent for a long moment.

"I had a brother," he says. "Aldric. Older than me. He was supposed to be the heir." He looks at the window, at the scorched grass outside. "My father sent him to the front when he was nineteen. There was no need. The border had been quiet a year. But my father's never believed in quiet. He says a house that stops fighting starts to rot." His jaw tightens. "Aldric died at the Battle of the Cinder Ford. A skirmish that a functioning peace would have made unnecessary."

"I'm sorry."

"So am I." He turns back to you. "My father was against this treaty. Loudly. Then, a month ago, he suddenly wasn't. He came round to it all at once. Signed his name without a word." He holds your gaze. "I've been wondering why ever since."

The room is very quiet. Through the barred door you can hear the two honour guards, still arguing.

"You think your own father—"

"I don't know what I think." He runs a hand over his face. "I know that today, a man tried to kill me with an Ashcombe bolt, and my father's riders will be telling the whole Cinder March about it by nightfall. I know that if I died, the war comes back, and he'd have his house the way he wants it."

You look at him — the heir of the house your family has hated for two hundred years, sitting on a hard bench in a borrowed room, telling you he thinks his father wants him dead.

He shouldn't have told you. It's the most dangerous thing he could have handed an Ashcombe. And he's done it anyway, without being asked, and he's watching you now as though he's just put a knife in your hand and is waiting to see what you'll do with it.

You find yourself wanting to hand him something back.`,
      choices: [
        { label: "Tell him your secret — He trusted you with his. You're betrothed to a man who can fly. He should know you can't.", next: "a4_secret" },
        { label: "Ask about his father — Keep your own secret for now. Find out everything you can about Lord Garrick.", next: "a4_father" }
      ]
    },

    a4_secret: {
      locked: true,
      chapter: "Four — Ashbound",
      text: `"I can't shift," you say.

He goes still.

"I've never done it. Not once." You make yourself hold his gaze. "Everyone in my family shifted by fourteen. My mother was twelve. I'm twenty-four. The fire's there — I can feel it, sometimes, when I'm angry, like something turning over in its sleep — but it's never come out. Ashbound. That's what they call it." You swallow. "Nobody at the signing will say it. But everybody knows. You're marrying the one Ashcombe who can't fly."

You wait for it. The flicker of disappointment. The polite recalculation of how much this alliance is actually worth.

It doesn't come.

He's looking at you as though you've handed him a map with half the country missing. Then he says, very quietly: "Does it hurt?"

It's so far from anything you expected that for a moment you can't answer.

"Sometimes," you say at last. "When the others fly. It's like — standing at the bottom of a well, watching everyone else climb out."

He nods slowly. Then he gets up and walks to the window and looks out, and says, without turning round, "Aldric couldn't either. My brother. Not until he was nineteen."

You stare at his back.

"My father thought he was broken. Made him train with the ground troops, as if that would shame the fire out of him. And then, on the morning of the Cinder Ford, with the enemy — your house — coming across the river, he shifted." Lucan's voice is very even. "First time in his life. In the middle of a battle. He was magnificent. He lasted about four minutes."

"Lucan—"

"I'm not telling you that to frighten you." He turns round. His eyes are very bright. "I'm telling you because my father spent nineteen years making my brother feel like half a person, and I watched it, and I swore I'd never do that to anyone. I don't care if you can fly. I care that you saw a crossbow on a ridge before anyone else did, and moved before anyone else did, without thinking about it."

You don't know what to say.

"Can I show you something?" he asks.

He takes you up onto the flat roof of the pavilion at dusk. The whole Cinder March is spread out below, ash-grey and gold in the last light. He steps back from you, and back again, and then — with a sound like a bonfire catching — he *changes*.

Up close, a dragon is enormous. Bronze-red scales like overlapping coins. Wings folded along his back like sails. His great head lowers until one gold eye is level with yours, very close, and you can feel the heat coming off him, the way you'd feel it from an open forge.

He doesn't move. He just waits. Watching you.

You put your hand out, slowly, and lay it flat against the scales of his jaw.

They're warm. And under your palm, deep in your own chest, something stirs. The banked fire you've carried all your life turns over, and for one astonishing second you feel it answer him — a flicker of heat that rises up your arm and into your hand.

The great gold eye widens.

Then he's a man again, standing in front of you on the roof, and your hand is on his jaw, and neither of you has moved it.

"You felt that," he says.

"I felt it."

He's very close. The sun has gone down behind him. You can still feel the heat under your palm.`,
      choices: [
        { label: "Step back — This is a treaty. Keep your head, and your heart, out of it.", next: "a5_guarded" },
        { label: "Don't move — Leave your hand where it is. Let him be the one to decide.", next: "a5_close" }
      ]
    },

    a4_father: {
      locked: true,
      chapter: "Four — Lord Garrick",
      text: `Lord Garrick Vire arrives at the neutral pavilion that evening, with twenty riders and no warning.

He's an enormous man, broad as a door, with iron-grey hair and a face like weathered rock. Bronze scales run up both his forearms and across the backs of his hands. He walks into the council room without knocking and looks at his son, and then at you, and then at the empty space where the assassin's bolt was laid out on the table as evidence.

"I heard," he says, "that an Ashcombe tried to kill my son today."

"Someone tried to make it look that way," Lucan says evenly. "Father."

"Someone." Garrick's eyes move to you. They're gold, like his son's, but there's nothing warm in them at all. "And you'd be the bride. Rowena's daughter. The ashbound one."

The word lands like a slap. Lucan goes very still beside you.

"I am," you say. You don't let your voice shake. "It's an honour to meet you, my lord."

"Is it." He walks round the table, slowly, looking you up and down the way a man looks at a horse he's been sold and suspects is lame. "They tell me you have very good eyes. That you saw the bolt before anyone else. Quick, for someone who can't fly."

"You don't need wings to see a crossbow, my lord."

"No." He stops in front of you. He's so tall you have to tilt your head back. "But it helps to know where to look."

The room goes very quiet.

"Father," says Lucan, and there's something in his voice you haven't heard before. Something with fire in it. "That's enough."

Garrick turns his head and looks at his son for a long moment. Then he laughs — a big, easy, booming laugh — and claps Lucan on the shoulder hard enough to stagger him.

"Protective. Good. A man should be protective of his wife." He turns back to you, still smiling. "I've brought a gift for the wedding, my dear. My war-dragon, Scorch, and twenty of my best riders. An honour guard, for the ceremony flight at dawn. To keep you both *safe*." He heads for the door, and stops there with one hand on the frame, not turning round.

"My eldest had good eyes, too," he says. "Much good they did him." Then, briskly: "I'll see you at the feast."

The door closes behind him. Lucan lets out a long, slow breath.

"He knew about the bolt," you say quietly. "Before anyone told him. He said *an Ashcombe tried to kill my son*. Nobody outside this room knew about the grey fletching yet."

"I know." Lucan sits down heavily. "I heard."

"And the ceremony flight. At dawn, after the wedding. What's that?"

"The old tradition." He rubs his eyes. "When two dragon houses marry, the couple flies together over the border at dawn. Both houses watch from the walls. It's meant to show the whole Cinder March that the war is over." A bitter laugh. "Of course, the bride has to be able to fly. So I suppose it'll just be me. With my father's war-dragon and twenty riders right behind me."

You look at him. The heir of the house your family has hated for two hundred years, sitting on a hard bench with his head in his hands, because his own father might be planning to kill him in front of both your families.

"He called you ashbound," Lucan says, without looking up. "In front of me. I'm sorry."

"It's true."

"It's cruel." He finally raises his head. His eyes are gold and furious. "He said it the same way he used to say it to my brother. Aldric couldn't shift either, until he was nineteen. My father made him feel like half a person every day of his life." His voice cracks. "I swore I'd never let anyone talk to someone I cared about like that again."

The words hang in the air. *Someone I cared about.* He hears himself say it. You watch him hear it.

Neither of you looks away.`,
      choices: [
        { label: "Look away — This is a treaty. Keep your head, and your heart, out of it.", next: "a5_guarded" },
        { label: "Hold his gaze — Let him see that you heard it. Let him see you don't mind.", next: "a5_close" }
      ]
    },

    a5_guarded: {
      locked: true,
      chapter: "Five — Strictly Business",
      text: `You step back. It's the sensible thing, and you've always been sensible. It's what your mother raised you to be.

"We should be practical," you say. "Someone's trying to kill you. Someone wants my house blamed for it. That's what matters. Not—" you gesture vaguely between you. "This."

The fire in his eyes banks down. You watch it happen, like a lamp being turned low. "Of course," he says. "Practical."

The wedding is set for the next new moon, eleven days away, at the shared fortress of Duskwatch that stands on the border between your lands. The two households move into it together, which means eleven days of formal suppers and council meetings and the two of you being unfailingly courteous to each other in public.

It goes surprisingly well. He's easy to work with. He reads every document you hand him, all the way through, which almost nobody on either council does. He asks good questions. He notices things. He makes you laugh in a meeting once, at the expense of a particularly pompous councillor, and you have to pretend it was a cough.

He never once comes closer than you've asked him to.

You tell yourself that's exactly what you want. You find yourself, more than once, timing your arrival at council suppers to whatever hour he's likely to already be there.

"You could simply sit next to him," your mother observes dryly, one evening, catching you watching him across a crowded hall. "Instead of arranging your entire social calendar around not quite running into the man you're marrying in a week."

"I don't know what you mean."

"No," she says, entirely unconvinced, not looking up from her ledger. "Of course you don't."

Meanwhile, there's work to do. You and Lucan meet in the fortress library every night after supper, going through everything you can find. The treaty. Border records. Old letters.

"My father's been writing to someone," Lucan says on the fourth night. "Every week since the treaty was agreed. His secretary takes the letters out himself — never trusts them to a courier. I've never managed to see who they're going to."

"His rooms are in the east tower," you say. "He'll be at the council feast tomorrow night. All night."

He looks up at you across the lamp.

"You want to break into my father's rooms."

"I want to know who *the Lord* is," you say. "Don't you?"

He's quiet for a moment.

"There's something else we could try instead," he says slowly. "Or as well. Your mother. She was the one who pushed hardest for this treaty on your side. She's been on the council thirty years. If anyone knows what my father's really up to, she does." He hesitates. "And there's something else she might know. About why you can't shift."

"She's never spoken of it. Not once."

"Maybe it's time she did," says Lucan gently.

You look at the lamp, and the treaty on the table between you, and the week left before a wedding flight you can't take part in.

"You're very good at this," you say. "Practical."

"I've had an excellent teacher." He doesn't smile. But his eyes do, briefly, before he looks back down at the treaty.`,
      choices: [
        { label: "Search Lord Garrick's rooms — Break in during the feast. Find the letters.", next: "a6_spy" },
        { label: "Confront your mother — Make her tell you what she knows. About Garrick, and about your fire.", next: "a6_mother" }
      ]
    },

    a5_close: {
      locked: true,
      chapter: "Five — Choosing It",
      text: `You don't move. Neither does he.

"I might actually want this to work," you say. It's out before caution can stop it. "Not just the treaty. This."

Something shifts in his face — hope, visibly reined in, like a man unused to being handed anything worth keeping. "That's either very brave or very foolish."

"Probably both."

"Good," he says. "I'd rather both."

He kisses you like someone who's been thinking about it since the neutral ground. Unhurried at first, careful, giving you every chance to step back. You don't take it. You pull him closer instead, and he makes a low sound against your mouth, and there's heat under your hands — actual heat, rising off his skin like a banked fire. And deep in your own chest, something stirs to meet it.

When you finally break apart, he's breathing hard.

"I've wanted to do that," he says, "since you saw that crossbow before I did."

"That's a very specific moment."

"It was a very specific feeling."

The wedding is set for the next new moon, eleven days away, at the shared fortress of Duskwatch on the border. The two households move into it together, and for eleven days you're unfailingly proper with each other in public, and then, every night, you're not.

On the third night, he takes you flying.

You meet him on the highest tower after midnight. He shifts, and lowers one great bronze wing to the stones like a ramp, and you climb up onto his back, between his shoulders, where the scales are warm as sun-baked stone. You hold on. He leaps.

You've watched dragons fly your whole life. You've never *been* in the air. The wind hits you like a wall, and then the ground drops away, and the fortress shrinks to a toy below you, and the whole Cinder March spreads out under the stars — ash-grey and silver in the moonlight, the river a ribbon of black glass, the watchfires of both houses glowing like scattered coals.

You're laughing. You don't know when you started. Under you, he makes a deep rumbling sound that you realise, after a moment, is him laughing too.

And somewhere in the middle of it, pressed against his back with the wind in your face, you feel it. The fire in your chest, turning over, waking up, *reaching*. As if it's been waiting your whole life to feel the air under it.

When he lands back on the tower and shifts back, you're both breathless. You're shaking.

"It moved," you tell him. "My fire. Up there. It *moved*."

He catches both your wrists and holds them against his chest. His eyes are blazing gold.

"Then it isn't gone," he says. "It's only buried. Something's holding it down."

You meet in the library the next night, and the next, going through everything you can find about his father. "He's been writing to someone," Lucan says. "Every week since the treaty. His secretary takes the letters himself. His rooms are in the east tower, and he'll be at the council feast tomorrow, all night."

"You want to break into your father's rooms."

"I want to know who *the Lord* is." He hesitates. "Or — your mother. She pushed hardest for this treaty on your side. She might know what my father's doing. And she might know what's holding your fire down."

"She's never spoken of it. Not once."

"Maybe it's time she did," says Lucan gently, and kisses your knuckles, one by one, as if he has all the time in the world.`,
      choices: [
        { label: "Search Lord Garrick's rooms — Break in during the feast. Find the letters.", next: "a6_spy" },
        { label: "Confront your mother — Make her tell you what she knows. About Garrick, and about your fire.", next: "a6_mother" }
      ]
    },

    a6_spy: {
      locked: true,
      chapter: "Six — The East Tower",
      text: `The council feast is loud and long and full of toasts, and Lord Garrick is at the centre of it, laughing his big booming laugh, filling everyone's cup. You make your excuses after the third course. Lucan follows ten minutes later.

The east tower is dark. You pick the lock on Garrick's door in less than a minute — a skill your mother would be appalled to know you have — and slip inside.

His rooms are like him: large, plain, and full of weapons. There's a desk by the window. The drawers are locked. You pick those too.

The letters are in the bottom drawer, under a false panel. Dozens of them. Lucan reads the first one over your shoulder and goes white.

They're not *from* Garrick. They're copies of what he sent — he kept them, meticulous as a merchant — and every one of them is addressed to the same man. Commander Holt. The captain of your own mother's household guard.

*The bolt will be grey,* one says. *Make sure it's grey. The council must believe it was Ashcombe.*

And another, dated only four days ago: *The first attempt failed. The ceremony flight is certain. My son will be in the air, alone, with Scorch and my riders behind him. Your men will be on the Ashcombe walls with the great bows, as agreed. When he falls, it must be an Ashcombe arrow they find in him.*

You read it twice. Your hands are shaking.

"He's going to kill you at the wedding," you say. "In the air. In front of everyone. And blame my house."

"And the treaty dies," Lucan says quietly. "And the war comes back. And my father has his house the way he wants it — fighting, forever." He sits down on the edge of his father's bed as if his legs have gone. "And your mother's own guard captain is helping him."

"Holt," you whisper. "He taught me to ride. He's been with us twenty years."

"My father pays better than anyone." Lucan stares at the letters. "He always has."

You look at him. His father, his own father, is going to have him shot out of the sky on his wedding day. And he's sitting here, in that father's room, looking not angry but grieving. As if he's lost the last of something he didn't know he still had.

You kneel in front of him and take his hands.

"We have the letters," you say. "That's proof. We can stop this."

"How?" He looks at you. "Take them to the council? My father has half of them in his pocket. He'll say they're forged. And Holt will vanish before morning."

"Then we take them to the council at the feast. Tomorrow night, the eve of the wedding. In front of both houses, with everyone watching. Where he can't make them disappear."

He's quiet for a long moment.

"Or," he says slowly, "you go and talk to him. Alone. He's always underestimated you — you saw it, *the ashbound one*. He'll want to know what you've found. He'll try to buy you." His mouth twists. "He tries to buy everyone. If you let him think you can be bought, you might find out things the letters don't say."

"Like what?"

"Like who else is in on it." He looks at the letters in your lap. "And whether there's any version of this where my father walks away."

Footsteps on the stairs below. Heavy ones.

You stuff the letters inside your coat. Lucan pulls you into the shadow behind the door. You hold your breath together, pressed against the wall, his heart hammering against your shoulder, as someone stops on the landing outside — and then, after an endless moment, walks on.`,
      choices: [
        { label: "Take the letters to the feast — Expose Garrick tomorrow night, in front of both houses.", next: "a7_feast" },
        { label: "Face Garrick alone — Let him think you can be bought. Find out how deep this goes.", next: "a7_garrick" }
      ]
    },

    a6_mother: {
      locked: true,
      chapter: "Six — What Your Mother Buried",
      text: `You find your mother in her rooms at Duskwatch, late at night, with her ledgers spread across the desk. She doesn't look up when you come in.

"I want to know why I can't shift," you say.

Her pen stops.

For a long moment, Lady Rowena Ashcombe doesn't move at all. Then, very slowly, she puts the pen down, and closes the ledger, and looks at you. You've never seen her look like this. She looks old.

"Sit down," she says.

You sit.

"You were six," she says. "The first time. We were in the garden. You were chasing the dog, and you fell, and you were so angry — you always had a temper — and you *sparked*. Just for a second. Fire along your arms, like your grandmother's. You were going to be strong, love. Very strong. Stronger than me."

"Then why—"

"Because it was the worst year of the war." Her voice doesn't change, but her hands have folded tightly on the desk. "The winter the Vires burned three of our border towns. The council had just passed a law — every heir who could shift was to be sent to the front at sixteen. No exceptions. They needed dragons." She looks at the window. "I'd already buried your father. I'd buried my brother. I sat in that garden with you screaming in my arms and fire running up your wrists, and I did the only thing I could think of."

"You bound it."

"There's an old working. A mother's working. My grandmother taught it to me." Her mouth twists. "It banks the fire. Buries it in ash. It can't come out unless the one who bound it lets it go. The council never knew. They thought you were simply ashbound. A quiet shame. They left you alone."

You sit very still. Twenty-four years. Watching your cousins take wing at fourteen. Standing at the bottom of the well.

"You let me think I was broken."

"I let you think you were broken," your mother says, "because the alternative was letting you die on the Cinder Ford, like that Vire boy did. Like Lucan's brother." Her eyes are very bright. "I'm not sorry. I'd do it again. I'd do it every day of your life."

You can't speak.

"There's more," she says, after a moment. "You'll want to know the rest, since you're here. About Garrick Vire." She opens a drawer and takes out a folded paper. "My own spies have been watching him since he came round to the treaty. It was too sudden. He's been writing to Commander Holt — my own guard captain, God help me. I have copies. He means to kill his son at the ceremony flight and blame us."

She hands you the letters. You read them in silence. *The ceremony flight is certain. My son will be in the air, alone. Your men will be on the Ashcombe walls with the great bows. When he falls, it must be an Ashcombe arrow they find in him.*

"I was going to take them to the council tomorrow night," she says. "At the feast. On the eve of the wedding." She pauses. "But you should decide. It's your wedding. And it's your fire."

"My fire?"

"I can let it go." She reaches across the desk and, for the first time in years, takes your hand. "Tonight, if you want. I'll unbind it. You'll shift — I don't know when. The first time is never gentle. But you'll have wings when you walk up to that altar." Her grip tightens. "Or you can stay as you are. Ashbound. Nobody would ever send you to war. Nobody would ever ask you to fight. I'd understand. Truly."

You look down at your joined hands. You think of Lucan on the tower, lowering his wing like a ramp. You think of standing at the bottom of the well your whole life.

You think of a war-dragon and twenty riders and a sky with Lucan alone in it.`,
      choices: [
        { label: "Unbind your fire — Let her set it free. Whatever it costs, you want your wings.", next: "a7_fire", setFlag: { name: "kindled", value: true } },
        { label: "Stay as you are — You've lived your whole life ashbound. Face the wedding as yourself.", next: "a7_feast" }
      ]
    },

    a7_feast: {
      locked: true,
      chapter: "Seven — The Eve of the Wedding",
      text: `The feast on the eve of the wedding fills the great hall of Duskwatch to the rafters. Both households, side by side at the long tables for the first time in two hundred years, pretending very hard to enjoy each other's company.

You sit at the high table beside Lucan. Lord Garrick is three seats down, toasting everyone, his laugh booming off the stone. Commander Holt stands behind your mother's chair, where he's stood for twenty years, and smiles at you when you catch his eye.

The letters are inside your coat. You can feel them against your ribs.

"You don't have to do this," Lucan murmurs under the noise. "Not tonight. Not like this. We could say nothing. Be ready at dawn. I'll fly the ceremony and watch the walls, and if anyone raises a bow—"

"You'll be in the air," you say. "Alone. With his dragon behind you."

"I know."

"You'd be a target."

"I've been a target my whole life." He almost smiles. "At least this time I'll know where it's coming from."

At the end of the table, Garrick rises with his cup held high, and the hall falls quiet for him. He's good at this. The whole room turns to him like flowers to the sun.

"To my son," he booms, "and his bride! To the end of two hundred years of war! And to tomorrow's dawn, when they fly together over the Cinder March, and the whole world sees that the fire between our houses has gone out at last!"

He looks straight at you as he says it. *Fly together.* In front of everyone, as if he's forgotten. As if he hasn't made sure the whole March knows the Ashcombe bride can't fly.

The hall roars and drinks.

You think of the letters. You could stand up now. Walk to the centre of the hall. Read them out loud, every word, with both houses listening and Holt standing behind your mother's chair. The council would have to act. Garrick couldn't make it vanish, not with two hundred witnesses.

But Garrick has half the Vire council in his pocket. He'd deny it. He'd call it forgery, an Ashcombe plot, a bride trying to wriggle out of her own wedding. It could start the war right here, over the soup.

Or you could say nothing. Let him think the plan is safe. Be on the walls at dawn, watching the archers, ready for whatever comes.

Garrick sits down, smiling. He raises his cup to you, very slightly, across the table.

Under the table, Lucan takes your hand. His palm is hot as a coal.

"Whatever you decide," he says quietly, "I'm with you."

Your mother is watching you from down the table. So is Holt.

The letters are warm against your ribs.`,
      choices: [
        { label: "Expose Garrick now — Stand up in front of both houses and read the letters aloud.", next: "e_queenofash" },
        { label: "Say nothing — be ready at dawn — Let him think he's safe. Stop him when he moves.", next: "a8" }
      ]
    },

    a7_garrick: {
      locked: true,
      chapter: "Seven — The Lord of House Vire",
      text: `You find Lord Garrick alone, late, in the fortress armoury, sharpening a sword that doesn't need sharpening.

He doesn't look surprised to see you. He looks pleased.

"Rowena's daughter," he says. "The clever one. Sit, sit." He waves the whetstone at a bench. "You've been in my rooms."

You don't deny it. There's no point.

"I thought so. My secretary noticed the lock." He tests the edge with his thumb. "So. You know. The question is what you're going to do about it."

"I could take the letters to the council."

"You could." He sets the sword down. "And they'd call them forged, and your mother would be accused of plotting against her own daughter's wedding, and Holt would disappear. Nobody would believe an ashbound girl over the Lord of House Vire." He leans back. "Or you could be sensible. I'm told you're very sensible."

"I'm listening."

"You don't want this marriage. Nobody asked you. You're being traded like a sack of grain to a house your family has hated for two hundred years." His voice is almost kind. "And my son — well. He's a good boy. Soft. Like his brother. Neither of them ever understood that a house is only as strong as the war it's willing to fight."

"You're going to kill him."

"I'm going to let the Cinder March be what it's always been." He shrugs his enormous shoulders. "And you — you'll be free. No marriage, no alliance. I'll see to it that your house gets the three border towns back, the ones we burned. Rebuilt. As a gift. Your mother will never know you had anything to do with it."

"And what do you need from me?"

"Very little." He smiles. "Tomorrow at dawn, when my son flies, you'll be on the Ashcombe wall. When the arrow's loosed, you'll be the one who cries out that it came from a Vire archer. That the Vires shot their own heir to break the treaty. Your word will split the blame down the middle. Both houses at each other's throats, and neither sure who started it." He spreads his hands. "It's much neater that way. Nobody has to hang."

You stare at him.

"He trusts you," Garrick says softly. "That's what makes it work. He'd never believe you'd betray him. He'll look for you on the wall, when he's in the air. And you'll be there."

"Why?" It comes out rougher than you mean it to. "He's your *son*."

For the first time, the whetstone stops.

"I signed a truce once," Garrick says. "Twelve years ago. At the Cinder Ford. Spring, the river high. I took my eldest to stand beside me when I signed it — because he couldn't fly, and I was ashamed of him, and I thought if the March saw him at a peace table beside me, they'd stop whispering." His voice doesn't change. His hands have gone white on the stone. "Your house's riders came across the ford under a white flag and put a spear through my herald before the ink was wet. And my son, who had never shifted once in nineteen years, shifted in front of me. First time in his life. He flew straight at thirty of them, to give me time to get back across the river." He looks at you. "Four minutes. Lucan was a boy. He was told it was a skirmish. I never told him otherwise."

You can't speak.

"Do you know who led those riders?" Garrick asks. "Commander Holt. Your mother's man. Twenty years her loyal captain." He smiles, and there's nothing in it at all. "When my son falls tomorrow with an Ashcombe arrow in him, it's Holt they'll hang for it. I've waited twelve years for that rope."

"You'd kill Lucan to hang Holt?"

"I'd kill a *peace*." For one moment, his voice cracks down the middle. "Peace is what killed Aldric. It'll kill Lucan too, in the end — a soft boy at a soft table, waiting for someone to cross the river under a white flag. I'd rather it was quick. And meant something."

You think of Lucan on the neutral ground, that almost-smile pulling at the corner of his mouth, there and gone. Lucan telling you about his brother. Lucan in his father's room, grieving a man who was still alive.

And you think of three border towns rebuilt. Your family's lost lands returned. Your own freedom, handed to you on a plate, by the one man in the Cinder March who could actually give it.

"What's your answer?" asks the Lord of House Vire.

Somewhere in the fortress above you, Lucan is waiting for you to come back from what he thinks is a walk.`,
      choices: [
        { label: "Take Garrick's offer — Your house restored, your freedom won. It's only one voice, on one wall.", next: "e_burning" },
        { label: "Refuse him — and warn Lucan — Walk out of the armoury and be ready at dawn.", next: "a8" },
        { label: "Tell him what Lucan told you — He's grieving, not only cruel. Make him hear what his son swore.", next: "e_olddragon" }
      ]
    },

    a7_fire: {
      locked: true,
      chapter: "Seven — Kindling",
      text: `Your mother unbinds it in the garden at Duskwatch, at midnight, the way she bound it.

She kneels in front of you on the cold grass and puts both her hands on your chest, just below your collarbone, and whispers something in the old tongue. For a moment nothing happens.

Then it's like a door being kicked open inside you.

The fire comes up out of you all at once — twenty-four years of it, banked and buried and furious — roaring up your spine and out along your arms and into your fingertips, and you scream. You can't help it. It doesn't hurt, exactly. It's too big to hurt. It's like being struck by lightning from the inside.

Your mother holds on. You feel her hands on your chest, steady, the whole time. Then she lets go, and steps back, and says, "*Go.*"

You go.

You don't know where. Up. Anywhere. You run out of the garden and up the fortress stairs to the highest tower, fire pouring off your skin, and when you reach the top you don't stop. You throw yourself off the edge, into the dark, because every part of you is screaming that it's the only thing to do—

And you *change*.

It's not graceful. You don't know how. Your bones pull and your skin burns and something enormous tears out of your back, and for a terrifying second you're falling, tumbling end over end towards the black ground. Then your wings — *your wings* — snap open, and catch the air, and you're *flying*.

Ash-grey. Your house's colour. Great grey wings, spread wide against the stars.

You fly badly. You fly wildly, like a drunk bird, veering and dipping and nearly hitting the fortress wall twice. You fly anyway. You fly out over the whole Cinder March, higher than the watchfires, higher than you've ever been, the wind roaring past your head, and you are *laughing*, a great rumbling dragon's laugh, and you can't stop.

You hear wings behind you. Bronze-red. He's found you.

He falls in beside you in the dark, matching your clumsy wingbeats with his steady ones, his great gold eye fixed on you. Then he dips a wing, and you understand, and you follow — and he teaches you. Just like that, in the air, over the sleeping border. How to catch a thermal. How to bank. How to glide without flapping.

You fly together until the sky starts to grey in the east.

You land on a ridge far out in the March, miles from Duskwatch, and shift back. You're shaking. You're naked and burning hot and the frost is melting in a circle round your bare feet. He throws his coat round you, and then his arms, and holds on.

"You're *beautiful*," he says into your hair. "You're so — I've never seen anything—"

"I can fly," you say. "Lucan. I can *fly*."

He laughs, and kisses you, and you can feel your fire and his, both awake, leaning towards each other like flames in a draught.

Then he goes quiet. He's looking east, at the brightening sky. At Duskwatch, far away on the horizon, where both your houses are waking up for a wedding. Where his father's war-dragon and twenty riders and a wall full of archers are waiting.

"We could keep going," he says, very softly. "Right now. You and me. East, over the mountains. There are places nobody's ever heard of House Vire or House Ashcombe. We could just — not go back."

"The treaty—"

"Would fail. Or my father would find another way to break it." His arms tighten round you. "Or maybe, without us, both houses would be too frightened to start again. I don't know." He looks down at you. "I only know I'd rather be anywhere with you than in that sky with his dragon behind me."

The sun is coming up. Far away, at Duskwatch, a bell starts to ring for the wedding.`,
      choices: [
        { label: "Fly east with him — Leave both houses behind. Just the two of you, and the sky.", next: "e_runaway" },
        { label: "Go back for the wedding — You have wings now. Fly back, and face Garrick's plot together.", next: "a8" }
      ]
    },

    a8: {
      locked: true,
      chapter: "Eight — The Wedding Flight",
      text: `You're married at dawn, on the battlements of Duskwatch, with both houses watching from the walls.

It's quick. Traditional. You say the old words; he says them back. Your mother is dry-eyed and very straight. Lord Garrick smiles his big easy smile from the Vire side. The council priest binds your wrists together with a red cord and a grey one, and then cuts them apart again, the way it's always been done. *Two houses. One fire.*

The old words are finished. Then Lucan says something that isn't in them.

"I know what this was meant to be," he says, low, so only you and the priest can hear. "A signature. A way to stop the burning." His thumb moves over the red mark the cord left on your wrist. "It isn't that for me. I'd have chosen you on the neutral ground if nobody had made me. I wanted you to hear that before I go up there. In case."

"Don't say *in case*."

"Then I'll say it again tonight," he says, "properly," and the priest coughs, and both walls cheer, and he kisses you quickly, like a promise he fully intends to keep.

Your mother catches your eye over his shoulder. For the first time you can remember, she looks frightened.

Then it's time for the flight.

Lucan steps to the edge of the battlements. He looks back at you, once. Then he shifts — bronze-red, brilliant in the rising sun — and launches himself into the sky. The crowd on both walls roars.

Behind him, with a sound like a thunderclap, Garrick's war-dragon, Scorch, lifts off the Vire tower. Huge and old and dark as a bruise, with twenty riders on dragons of their own falling in behind.

An honour guard. To keep him *safe*.

You're watching the Ashcombe walls. The archers are there, with the great bows, as they are at every ceremony. You see Commander Holt moving along the line, bending to speak to one of them.

You see the archer nock an arrow.

It all happens very fast.

The arrow flies. You shout. Lucan twists in the air — he's been watching for it — and it only takes him in the wing, not the heart. But it's enough. He falters. And in that instant Scorch is on him, the old war-dragon slamming into him from above, claws raking, and they're falling together, tangled, towards the black rocks below the fortress.

Garrick is watching from the Vire tower. He isn't shouting. He isn't moving. He's just watching his son fall.

The whole world has gone silent. You can hear your own heart.

He's falling. There's no one else close enough. No one else fast enough. Every dragon on both walls is too far away, and in three seconds he'll hit the rocks.

You run to the edge of the battlements.

Behind you, your mother screams your name.`,
      choices: [
        { label: "Go after him — however you can — Throw yourself off the wall. Catch him.", branchOn: { flag: "kindled", ifTrue: "e_wings", ifFalse: "e_ashbound" } },
        { label: "Stop the archers — Save the treaty. Get Holt and his bowmen before they fire again.", next: "e_inkandash" }
      ]
    },

    e_wings: {
      locked: true,
      chapter: "Nine — Wings over the March",
      text: `You jump.

And you change in the air, the way you did on the tower last night — but this time you know how. Your wings snap open, ash-grey and enormous, and you dive.

You've never flown so fast. You tuck your wings and drop like a stone, and the wind screams past you, and below you Lucan and Scorch are tumbling towards the rocks in a tangle of bronze and black. Scorch sees you coming. The old dragon's eyes go wide.

You hit him like a thunderbolt.

It's not skill. You don't have any yet. It's just weight, and speed, and twenty-four years of banked fire all coming out of you at once. You slam into Scorch's side and knock him clean off Lucan, and the old dragon goes spinning away, screaming, into the rocks.

And then you have Lucan.

You catch him the only way you can — you get under him, beneath his torn wing, and take his weight on your back. He's heavy. Heavier than anything you've ever lifted. Your wings are burning. The rocks are rushing up.

*Beat*, you think. *Beat. Beat.*

You beat your wings. Once. Twice. And somehow — with the whole of both houses watching, and the rocks a dragon's length below — you climb.

You carry him up. Up past the rocks, past the walls, past the faces staring down at you from both sides. You carry him up into the full blazing gold of the sunrise, and you fly with him on your back, once round the whole fortress of Duskwatch, so that every single person on every wall can see.

An Ashcombe dragon, carrying the Vire heir. Grey wings and bronze. Two houses. One fire.

The crowd goes absolutely wild.

You land on the battlements and shift back, and he shifts too, and he's bleeding from his wing — his arm, now — and you're naked and shaking and on fire, and neither of you cares. He pulls you in with his good arm and presses his forehead to yours.

"You flew," he says. He's laughing. He's crying. "You flew *for me*."

"You're heavy," you tell him. "You're really very heavy."

He kisses you. In front of everyone. Both houses. Two hundred years of war. The whole Cinder March.

Behind you, it's chaos. Your mother, very calmly, has handed the letters to the council — all of them, in front of everyone, while every eye was on the sky. Holt is being dragged off the Ashcombe wall. And on the Vire tower, three councillors and a dozen of his own riders have surrounded Lord Garrick. He isn't smiling any more. He doesn't fight. He just stands there, looking at his son, alive, on the Ashcombe side of the battlements, with an ashbound girl's arms round him.

Later, much later, when the council's done shouting and the physicians have stitched Lucan's arm, you sit together on the highest tower of Duskwatch and watch the sun go down over the March.

"My father said the fire between our houses had gone out," Lucan says quietly.

"He was wrong."

"He was very wrong." He leans his head on your shoulder. "It's just started."

That night, you fly together again. Over the whole of the Cinder March, from one end to the other, grey wings and bronze side by side, while below you both houses light every watchfire on the border — not for war.

For you.`,
      ending: true,
      tag: "Ending: Wings over the March"
    },

    e_ashbound: {
      locked: true,
      chapter: "Nine — Ashbound",
      text: `You don't have wings. You never have.

You run anyway.

Not off the wall — along it. Down the battlements, three steps at a time, towards the siege-crane at the corner of the tower. The old one they use to lift supplies up from the rocks, with its great hook and its coil of iron chain. You grew up on a border. You know what everything in a fortress is for.

You slam the release lever with your whole body.

The chain screams out. The great iron hook swings wide from the tower, out over the rocks, right into the path of the falling dragons. It catches Scorch across the throat. The old war-dragon is torn off Lucan with a shriek and slams into the fortress wall.

Lucan hits the chain.

He catches it with his good claw, twisting in the air, and hangs there, swinging above the rocks — bleeding, torn, *alive*. The crane groans under his weight. You throw yourself onto the winch and haul.

You can't lift a dragon. Nobody can. But you haul anyway, with everything you have, until your hands are torn and bleeding on the handle and your shoulders are screaming, and then — suddenly — someone's beside you, hauling too. Your mother. And then Ashcombe guards, and then Vire riders, two houses' worth of soldiers on one winch, pulling the heir of House Vire up out of the sky.

He shifts back as he comes over the wall, and falls onto the battlements at your feet, a man again, bleeding from his arm. He looks up at you.

"A *crane*," he says.

"I don't have wings," you say. "I had to improvise."

He starts laughing. He laughs so hard he can't breathe, and then he pulls you down onto the stones beside him and holds you, and he's shaking, and so are you.

Behind you, it's chaos. The letters have reached the council — all of them, in front of everyone, while every eye was on the sky. Holt is being dragged off the Ashcombe wall. And on the Vire tower, three councillors and a dozen of his own riders have surrounded Lord Garrick. He isn't smiling any more. He doesn't fight.

Later, on the tower, as the sun goes down over the March, Lucan finds you sitting alone.

"Do you mind?" he asks, sitting beside you. "That it was a crane, and not wings?"

"I've been ashbound my whole life," you say. "I didn't want to find out who I was by becoming someone else. I wanted to find out as me. And it turns out I'm someone who knows where the crane is."

He's quiet for a long time.

"My father thought wings were everything," he says at last. "He made my brother feel like half a person, because he couldn't fly. And today his son was saved by a woman who can't, with a crane, while every dragon on two walls was too slow." He looks at you. "I don't think I'll ever forget that. I don't think anyone on the March will."

"You'll never be able to take me flying."

"I'll take you flying every night of your life," he says, "if you'll let me. On my back. The way I did on the tower." He takes your torn, bandaged hand very gently. "You don't need your own wings. You never did. You only needed someone to lower one to the ground for you."

The fire in your chest turns over, warm and sleepy, and settles. Banked. Content.

You lean your head on his shoulder and watch the watchfires come out along the border, one by one.`,
      ending: true,
      tag: "Ending: Ashbound"
    },

    e_inkandash: {
      locked: true,
      chapter: "Nine — Ink and Ash",
      text: `You turn away from the edge.

Turning your back on him is like tearing something. Every part of you is screaming to jump. But if the next arrow flies, it won't matter who catches him. Somebody has to stop the archers, and you're the only one on this wall who knows they need stopping.

You run for the Ashcombe wall.

"Holt!" Your voice cracks across the battlements. "*Commander Holt is a traitor! Seize the archers!*"

Everyone freezes. Then your mother is beside you, and she's shouting too, in the voice that's made councillors weep for thirty years, and the Ashcombe guards are turning, and Holt is running — and they catch him before he reaches the stairs.

Behind you, a sound like the whole sky breaking.

You turn round.

Lucan didn't hit the rocks. At the last moment, the Vire riders — his father's own honour guard — broke formation. You'll learn later that it was the youngest of them, a girl of seventeen, who dived first. She knocked Scorch off him. The rest followed her. Between them, they caught him, a few feet from the rocks, and carried him back up to the Vire tower, bleeding and torn, but alive.

You didn't save him. Someone else did.

But you stopped the second arrow. You stopped the war. By nightfall, the council has the letters, Holt is in chains, and Lord Garrick has been stripped of his lordship by his own house.

The treaty holds.

You go to see Lucan that night. He's in the infirmary on the Vire side, his arm bound in bandages. He smiles when you come in. It's a tired, careful smile.

"You went for the archers," he says.

"Someone had to."

"I know." He doesn't sound angry. "It was the right thing. It saved the treaty. It probably saved a lot of lives." He's quiet for a moment. "I looked for you. When I was falling. On the wall."

"I know," you say. "I'm sorry."

"Don't be. You did your duty." He looks at the ceiling. "We both did."

It's a good marriage, in its way. Respectful. Careful. You run Duskwatch together, and you're very good at it. The border stays quiet. The councils call it the most successful alliance in two hundred years. Your mother is quietly, enormously proud.

He's always kind to you. He takes whatever you offer and doesn't reach for more. And you never quite let yourself offer it.

Some nights you see him on the highest tower, alone, looking out over the March. You don't go up.

But one night, a year later, you do. He's standing at the edge, the way he stood before the ceremony flight. He turns when he hears you.

"Will you come flying?" he asks. As if he's asked a hundred times in his head and never out loud.

You look at him for a long moment.

"Lower your wing," you say.

He stares at you. And then, slowly, he shifts, and lowers one great bronze wing to the stones like a ramp.

You climb up.

It isn't everything, yet. It's a year late and very careful. But the wind hits you, and the ground drops away, and somewhere under your ribs something stirs, and turns, and — for the first time in a very long time — reaches.`,
      ending: true,
      tag: "Ending: Ink and Ash"
    },

    e_queenofash: {
      locked: true,
      chapter: "Eight — The Queen of Ash",
      text: `You stand up.

The hall goes quiet — slowly, then all at once, as people realise the bride is on her feet. Lord Garrick's smile doesn't change. His eyes do.

You walk to the centre of the hall. Your legs are shaking. You take out the letters.

"Lord Garrick Vire," you say, and your voice rings off the stone, "has been paying my mother's guard captain to murder his own son at tomorrow's ceremony flight. And to make it look like my house did it."

Silence. Then uproar.

You read the letters aloud. All of them. Every word. *The bolt will be grey. When he falls, it must be an Ashcombe arrow they find in him.* You read them over the shouting, and the shouting gets quieter, and by the last letter the only sound in the hall is your voice and Commander Holt's boots, backing very slowly towards the door.

Your mother says, without raising her voice, "Seize him." And the Ashcombe guards do.

Garrick is on his feet. "Forgeries," he booms. "Ashcombe lies, to wriggle out of a wedding—"

"Then let the council examine the seals," you say. "Your seal, my lord. On every copy. In your own secretary's hand."

He opens his mouth. Nothing comes out. And for the first time in your life, you watch a room full of powerful people turn away from Lord Garrick Vire.

It's his own council who take him. Three grey-haired Vire lords, who've sat beside him for thirty years. Lucan doesn't move to stop them. He doesn't move at all. He stands at the high table and watches his father led out of the hall, and his face is perfectly still.

There's no wedding the next morning.

Instead, there's a council. Both houses, together, in the great hall of Duskwatch. It goes on for three days. And at the end of it, to everyone's astonishment — most of all yours — the council offers you something nobody in two hundred years has held.

The chair of the joint council of the Cinder March. Both houses. One voice.

"You saw it first," says the oldest Vire lord, gruffly. "The bolt on the ridge. The plot. You stood up in a hall full of dragons and read it out, and you can't even fly." He almost smiles. "We'd rather have someone like that than another warlord."

You accept. You don't know why. Perhaps because nobody else would have stood up.

The marriage is postponed. Not cancelled. Lucan comes to find you on the tower the night after the council ends. He looks exhausted.

"My father's in the tower cells," he says. "He won't speak to me."

"I'm sorry."

"Don't be. You saved my life." He leans on the parapet beside you. "And the treaty. And possibly the whole March." He looks at you sideways. "And now you run it. I'm not sure what that makes me."

"My betrothed," you say. "Still. If you want to be."

He's quiet for a long moment.

"The treaty says we have to marry within the year," he says. "I thought — perhaps we could take the year. Properly. Without anyone trying to kill either of us. Get to know each other. Find out if we'd have chosen this, if nobody had made us."

"I'd like that," you say. "I'd like that very much."

He takes your hand. You stand together on the tower of Duskwatch, the new chair of the Cinder March and the heir of a house in disgrace, and watch the watchfires come out along the border — every one of them lit, for the first time in two hundred years, for peace.`,
      ending: true,
      tag: "Ending: The Queen of Ash"
    },

    e_burning: {
      locked: true,
      chapter: "Eight — The Burning March",
      text: `"Yes," you say.

Garrick smiles, and it's the warmest smile you've ever seen on him. "I knew you were sensible."

You go back upstairs. Lucan is waiting for you in the library, the lamp turned low, the treaty open on the table where you left it.

"Good walk?" he asks.

"Cold," you say.

He gets up and puts his coat round your shoulders without a word, and his hands linger there a moment, warm through the wool. "Tomorrow," he says, "when I'm up there — I'll look for you. On the wall. It'll help, knowing where you are."

You can't answer. He takes it for nerves, and kisses your forehead, and tells you to sleep.

You don't.

At dawn, you stand on the Ashcombe wall in your wedding clothes. You're married. You don't remember the words. Lucan launches himself into the sky, bronze-red in the sunrise, and the crowd roars, and behind him Scorch lifts off the Vire tower like a thunderclap.

Lucan looks back once, circling. His great gold eye finds the Ashcombe wall. Finds you.

The arrow flies.

It takes him in the chest.

You're supposed to cry out now. That it was a Vire archer. You open your mouth, and nothing comes. You're watching him fall.

He doesn't try to catch himself. He just falls, and falls, a long bronze streak against the sunrise, and the whole world has gone silent except for the sound of your own heart. He hits the rocks below the fortress.

And then you scream. Not the words Garrick gave you. Just his name.

Nobody hears it. Both walls are already screaming at each other. *Ashcombe arrow. Ashcombe murder.* The Vire riders are wheeling in the air, and the Ashcombe dragons are lifting off the walls to meet them, and someone throws the first spear, and it's begun. Two hundred years of war, back in a single morning, as if it had never stopped.

Garrick keeps his word. He always does. In the chaos, no one ever learns who loosed the arrow. By the time the burning's over, three border towns have been returned to House Ashcombe, rebuilt in a single season by Vire gold, as part of a peace that lasts exactly one year.

Your mother never knows. She thinks you're grieving. She's gentle with you, and you can't bear it.

You're free. No marriage. No alliance. No husband. You get everything Garrick promised.

The war comes back the next spring. It always does.

You watch from the walls of your rebuilt border town as the dragons go over, bronze and grey, the way they've gone over every spring of your life. You never did learn to fly. You never will.

Some nights, on the wall, you think about the neutral ground. *Try not to sound thrilled about it.* The smile that pulled at the corner of his mouth, there and gone again.

You wish, more than anything, that you'd given it a reason to stay.`,
      ending: true,
      tag: "Ending: The Burning March"
    },

    e_olddragon: {
      locked: true,
      chapter: "Eight — The Old Dragon",
      text: `You don't answer him. Not the way he wants.

"He told me about Aldric," you say instead. "Lucan. Not the way you've just told me — the way he remembers it. He said you made his brother feel like half a person every day of his life. And that he watched it, and swore he'd never do that to anyone." You make yourself hold those gold eyes. "He said it to *me*. The ashbound one. The first day he met me."

Garrick doesn't move.

"You didn't lose one son at the Cinder Ford," you say. "You're about to lose both. And this time nobody crossed a river. This time it's you." You stand up. "And Holt broke a truce once for his own reasons. He's taken your money now. What makes you think he'll stop at one arrow?"

You leave him there, with the sword across his knees. You don't know if a single word of it reached him. You tell Lucan everything, that night, and he holds you and says nothing for a very long time.

At dawn you're married on the battlements of Duskwatch, with both houses on the walls. Garrick isn't on the Vire tower. His place is empty. Nobody knows where he's gone.

Lucan steps to the edge and shifts, bronze-red in the sunrise, and launches himself into the sky. Scorch lifts off behind him, riderless and obedient, with the twenty riders in formation. You're watching the Ashcombe wall. You see Holt, moving along the line of archers. You see one of them nock an arrow.

You're already shouting when it flies.

And out of the rocks below the fortress, where nobody was watching, something enormous rises. Bronze, like Lucan. But old — so old — its scales dulled to the colour of a worn coin, its wings ragged and scarred. It climbs faster than anything that size should be able to climb, and puts itself between the arrow and the heir of House Vire.

The arrow takes Lord Garrick Vire in the chest.

He hasn't shifted in twelve years. Everyone on both walls knows it. They watch him fold in the air, and fall — and they watch his son turn, and dive, and catch him, a bronze dragon carrying a bronze dragon, and bring him down onto the battlements as gently as anything that size has ever been carried.

Garrick shifts back on the stones, a big grey-haired man with an arrow in him, bleeding onto the wedding flowers. The physicians are already running. He waves them off with one hand long enough to speak, and he speaks to the whole of Duskwatch.

He names Holt. He names himself. Every letter, every coin, every word. He doesn't leave anything out.

Then he looks up at his son.

"Four minutes," he says. "I thought — if I could give you four minutes—"

"You gave me all of them," Lucan says, and he's crying, and he doesn't care who sees.

Garrick lives. Nobody expects it. He never flies again; the arrow took something in his wing that doesn't mend. The council strips him of his lordship, and he goes without argument to a small stone house on the Vire bank of the Cinder Ford, where he can see the water.

Lucan visits him once a month. You go too.

The first few times, Garrick barely speaks to you. By the spring, he's teaching you to play the old Vire board game, and cheating badly, and not minding when you catch him. And one evening in summer, sitting on his step with the ford running gold in front of you, he says, without looking round:

"Aldric would have liked you."

"I think I'd have liked him."

"Yes," says the old dragon, and watches the river. "He'd have seen the bolt, too."`,
      ending: true,
      tag: "Ending: The Old Dragon"
    },

    e_runaway: {
      locked: true,
      chapter: "Eight — East of Everything",
      text: `"East," you say.

He looks at you. For a long moment, neither of you speaks. Then he laughs — a wild, disbelieving laugh — and shifts, right there on the ridge, and you shift beside him, grey and bronze, and you take off together into the sunrise.

You don't look back at Duskwatch. Neither does he.

You fly all day, over the black mountains at the edge of the Cinder March, higher than either house has ever been. The air is thin and cold and it doesn't matter. You land at dusk in a valley neither of you has ever seen, green and wild and full of streams, where no one has ever heard of House Vire or House Ashcombe or a war that's lasted two hundred years.

You build a life there. It isn't easy. You're a noblewoman and a lord's son, and you know nothing about farming or building or feeding yourselves. You learn. You burn your first loaf of bread. He burns his first three. You build a house of stone and timber at the edge of a lake, and at night you fly together over the valley, just because you can.

You're happy. You're truly, wildly happy, in a way you never knew was possible.

News comes, sometimes, over the mountains. Carried by traders, by travelling tinkers, by the occasional lost dragon.

The treaty failed, of course. When the heirs of both houses vanished on the morning of their wedding, each side blamed the other. Lord Garrick called it an Ashcombe kidnapping. Your mother called it Vire treachery. For a month, the Cinder March held its breath.

And then — strangely — it didn't go to war.

It was your mother, the traders say. Lady Rowena Ashcombe walked across the neutral ground alone, without a guard, and sat down at a table with the Vire council, and put a letter on it. A letter in your own handwriting, carried back over the mountains by a tinker you paid with the last of your silver.

*Don't let them fight over us. We chose this. Please.*

And somehow — nobody knows quite how — it held. Not a treaty. Not a marriage. Just two exhausted houses, sitting on opposite sides of a table, both having lost their heirs to the same sky, and neither quite able to bring themselves to start again.

Lord Garrick lost the vote. He left the council. They say he flies alone over the border every dawn, looking east.

"Do you regret it?" Lucan asks you once, lying beside you in the dark in the stone house by the lake. "Leaving? We might have stopped him. Saved the treaty ourselves."

You think about it.

"We might have," you say. "Or we might both be dead." You turn to face him. "I spent twenty-four years at the bottom of a well, doing what everyone else needed. I don't regret choosing, once, what I needed."

He pulls you close.

"Neither do I," he says, into your hair.

Outside, over the lake, the stars are very bright. And somewhere far to the west, on the other side of the mountains, a border that's burned for two hundred years is — for now, at least — quiet.`,
      ending: true,
      tag: "Ending: East of Everything"
    }

  }
};
