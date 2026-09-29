// The Hollow House — gothic horror romance, the Halloween title
// (release Friday 24 October 2026). Same standard as the rebuilt books:
// 8–9 chapters per read-through, 7 endings, chapters 4+ locked, UK
// spelling, fade to black.
//
// 22 scenes. The story runs over the last days of October and comes to a
// head at midnight on All Hallows' Eve, the anniversary of Edmund's death.
//
// The engine at the heart of it: the house keeps what a Hollow loves.
// Edmund Thorne loved Eleanor Hollow in 1893 and died in the house the
// night before their wedding, and it has kept him ever since. Now it
// wants you, and it will happily use him to do it.
//
// Cast (approved by Liam 2026-09-29): Edmund Thorne (the ghost),
// Gabriel Ashworth (the groundskeeper's son), Agatha Hollow (the late
// great-aunt, seen through her letter and diaries), Mr Pryce (the
// solicitor). Setting: Hollow House, on the moor above the village of
// Harrowgill, Yorkshire.
//
// Endings: The Last Hollow (you burn the ledger and Edmund goes free at
// dawn), Ever After, Upstairs (you stay with Edmund, and the house keeps
// you both), The Keeper's Son (the ledger burns, the house with it, and
// you leave with Gabriel), The Room Kept Ready (the house keeps you,
// alone), The Ashworth Bargain (Gabriel gives you to it), Mistress of
// Hollow House (you sign the ledger on your own terms), and Dawn on the
// Moor (you run, and live).
//
// Flags: `invited` (set in chapter four: true if you invited Edmund
// across the threshold). Read in chapter eight: burning the ledger frees
// the man you let in, or leaves you with the one who stayed with you; and
// staying keeps you with Edmund only if he can reach you.

const CH2_CHOICES = [
  { label: "Read Agatha's diaries — Find out what happened to the last heir before the candles light themselves again.", next: "h3_diaries" },
  { label: "Open the east wing — Take the thorn-marked key and see the one room she told you never to enter.", next: "h3_wing" }
];

const CH3_CHOICES = [
  { label: "Trust Edmund — Wait for him tonight, alone, and hear his side of 1893.", next: "h4_edmund" },
  { label: "Trust Gabriel — Go down to the farm with him and make him tell you what the Ashworths promised.", next: "h4_gabriel" }
];

export const hollowHouse = {
  startNode: "h1",
  nodes: {

    h1: {
      chapter: "One — The Inheritance",
      text: `Mr Pryce drives the last mile with both hands on the wheel and his eyes on the clock on the dashboard, as if the car might get away from him.

The moor road is a single lane of cracked tarmac between drystone walls, and the rain has been coming sideways since Harrowgill. Beyond the walls there is nothing but heather gone brown and a sky the colour of wet slate. Then the road bends, and the house is there.

Hollow House sits on the rise like something that has been waiting a long time for company. Three storeys of black stone, a tower at one end with a spire like a raised finger, and a wing at the other that seems to lean away from the rest. Every window is dark, except one on the first floor, where a light is burning.

"I thought it had been empty since the funeral," you say.

"It has." Mr Pryce doesn't look at the window. He pulls up at the gate, not the door, and leaves the engine running. "The keys." An iron ring, heavy as a horseshoe, with nine keys on it. One is smaller than the rest, black, with a thorn stamped into the bow. "And this. Your great-aunt was very particular that it be given to you by hand."

An envelope, cream and thick, your name on the front in a spidery copperplate you've never seen before. You never met Agatha Hollow. Until the solicitor's letter came, you didn't know she existed.

"You're not coming in?"

"I'll be back in Harrowgill before dark, if it's all the same to you." He manages a smile. "The house has been... well kept. You'll find everything you need."

You watch his tail lights go all the way down the hill before you turn to the gate.

The front door is unlocked. The hall is warm.

Not aired-out warm, not radiator warm: fire warm, the smell of burning apple wood and beeswax. In the small sitting room off the hall a fire is going in the grate, freshly banked. The table is laid for one, with a bowl of soup still steaming under a cover. Upstairs, in the room with the lit window, the bed has been turned down. There's a hot-water bottle under the quilt. It's still hot.

You call out. Your voice goes up the stairwell and doesn't come back.

You open the letter by the fire, because the fire is the only thing in the house that feels like it might be on your side.

*My dear,*

*If you are reading this, I am dead, and the house has chosen you. I am sorry for both. You will want to leave. I would, in your place. But understand this first: you cannot sell Hollow House, and you cannot give it away, and it will not let you go easily. So you must live with it, as I did, and you must keep three rules.*

*Never open the east wing.*

*Never answer him after midnight.*

*And never, whatever happens, love anything in this house.*

*With more affection than you would believe, Agatha.*

You read it three times. Then you go up to bed, because there is nowhere else to go and the road back to Harrowgill is four miles of dark moor.

You don't mean to sleep. You do.

When you wake, the fire in your bedroom has gone out, and the candles along the corridor are going out too, one at a time, as if someone is walking towards your door and pinching each wick as he passes.

The footsteps stop outside.

A knock. Two soft raps, polite as a butler's.

"Forgive the hour," says a man's voice, low and warm and entirely calm. "I believe you're in my room."

The clock in the hall begins to strike twelve.`,
      choices: [
        { label: "Open the door — Whoever he is, you'd rather see him than lie here listening to him breathe.", next: "h2_open" },
        { label: "Stay silent — Agatha's second rule. Don't answer him after midnight.", next: "h2_silent" }
      ]
    },

    h2_open: {
      chapter: "Two — The Gentleman at the Door",
      text: `You open the door before you can think better of it.

He is standing exactly where the voice was, one step back from the threshold, as if he knows precisely how far a stranger should stand at midnight. He's tall and dark-haired and younger than his voice, perhaps thirty, in a long black coat cut for another century, with a white stock at his throat. His hair is wet. Water beads on his shoulders. There isn't a single drop on the floorboards beneath him.

"Ah," he says, and smiles, and it's a real smile, a little rueful, the smile of a man caught in a small social disaster. "You're not Agatha."

"She's dead."

"Yes. I know. I was there." The smile goes. "I'm sorry. That was clumsy. I've had no one to talk to for a fortnight, and I've lost the knack." He inclines his head. "Edmund Thorne. I'd offer you my hand, but I don't think you'd like it."

The candle you're holding lights the corridor behind him. It doesn't light him. He has no shadow on the wallpaper. When he breathes out, the air doesn't fog, though your own breath is clouding in front of your face.

"This was your room," you say.

"It was going to be. Our room." He glances past you at the bed, and something tired and very old moves behind his eyes. "It doesn't matter. Keep it. I only wanted to see who the house had chosen." He studies you, openly, the way people used to look at portraits. "You have her chin. Eleanor's. Did anyone ever tell you that?"

"Who's Eleanor?"

He doesn't answer. He looks down at the threshold between you, at the brass strip where the carpet ends, and you understand that he isn't standing back out of manners. He can't come in.

"You won't invite me," he says. It isn't a question. "Good. She'll have told you not to. She told everyone that, for fifty years, and then sat up with me every night until two playing cribbage." He almost laughs. "Listen to me, cousin. One thing, and then I'll go. When the Ashworth boy comes up in the morning, be kind to him, he means well, but don't go down to the cellar with him. Whatever he says is down there."

The clock downstairs strikes one. Between one chime and the next, the corridor is empty.

You don't sleep again.

He comes at nine, a knock at the kitchen door, and when you open it there's a man in a waxed jacket with a box of groceries on his hip and mud to his knees. Mid-thirties, broad, unshaven, with a quiet Yorkshire voice and the watchful eyes of someone used to animals that bite.

"Gabriel Ashworth," he says. "My dad kept the grounds for Miss Hollow, and now I do. Pryce said you'd come." He sets the box down. Milk, bread, eggs, a bottle of whisky. "Thought you'd need that last one."

"Thank you for last night," you say. "The fires. The soup."

He goes still. "I wasn't up here last night."

"Someone was."

"Nobody comes up after dark. Not me, not anyone in Harrowgill." He looks at you properly then, at your face and the shadows under your eyes, and something in his own face closes like a door. "You opened it. Didn't you. When he knocked."

"He said I was in his room."

Gabriel sits down heavily at the kitchen table. He is quiet for a long time.

"Right," he says at last. "Then you need to know what you've inherited, and you need to know it before tonight. Miss Hollow kept diaries, fifty years of them, in the library. And she kept the east wing locked." He looks at the iron ring of keys on the table, at the small black one with the thorn. "She had her reasons for both."`,
      choices: CH2_CHOICES
    },

    h2_silent: {
      chapter: "Two — What the Morning Kept",
      text: `You stay where you are, flat under the quilt with your heart going like a trapped bird, and you say nothing at all.

"Cousin?" the voice says. Gentle. A little amused. "I know you're awake. The house told me." A pause. "Of course. She'll have given you the rules. She gave everyone the rules."

The doorknob doesn't turn. Nothing tries the lock. But the cold comes under the door like water, and you watch it frost the brass strip at the threshold, a white line spreading and stopping exactly there, as if it has reached the edge of a map.

"As you like," he says. "Goodnight, then. Sleep well."

The clock finishes striking. The footsteps go away down the corridor, unhurried, and one by one the candles light themselves again in his wake.

You don't sleep. At some point the window turns from black to grey, and you get up and dress with your back to the wall, and you open your bedroom door on a corridor you have never seen before.

Last night the door opened onto the landing at the top of the main stairs. Now it opens onto a long gallery, panelled in dark wood, lined with portraits. Hollows, you assume, going back and back, the same long jaw on a dozen faces. You walk the length of it with your pulse in your ears. There's no staircase at the end. There's no window. There's only a last portrait, larger than the others, of a young man in a black coat with a white stock at his throat, dark-haired, half smiling, looking out of the frame as if he's just recognised you.

The brass plate beneath it reads *Edmund Thorne, 1863–1893*.

"Hello?"

You spin round. At the far end of the gallery there's a door that wasn't there a moment ago, and in it a man in a waxed jacket with a box of groceries on his hip and mud to his knees.

"Sorry," he says. "Didn't mean to make you jump. Gabriel Ashworth. I keep the grounds." He looks up and down the gallery and lets out a long breath through his nose. "It's done this, then. Moved you."

"Moved me?"

"It rearranges when it's cross. Or when it wants you to see something." He glances at the portrait and away again, quickly, the way you'd look away from a dog you don't trust. "Took me twenty minutes to find the kitchen once. Come on. I'll get you out."

He does. Three turns, a servants' stair you'd swear wasn't there last night, and suddenly you're in a warm kitchen with a kettle on and daylight in the windows. He puts milk and bread and eggs on the table, and a bottle of whisky.

"Thought you'd need that last one."

You tell him about the knock. The voice. The frost that stopped at the threshold.

"Good," he says quietly. "You didn't answer. Keep not answering." He turns the kettle off before it whistles, and his hands aren't quite steady. "Miss Hollow answered him once. Nineteen seventy-four. She never left this house again, not for one night, till the day they carried her out of it."

"Who is he?"

Gabriel doesn't reply. He's looking past you, at the mirror above the kitchen dresser. You turn.

In the mirror, behind your own reflection, just over your shoulder, Edmund Thorne is leaning in the doorway with his arms folded, perfectly at ease. He catches your eye in the glass. He smiles, and lays one finger against his lips.

The doorway behind you is empty.

"You need to know what you've inherited," Gabriel says, very low, as if the house might be listening. "Before tonight. She kept diaries, fifty years of them, in the library. And she kept the east wing locked." He nods at the ring of keys on the table, at the small black one with the thorn. "She had her reasons for both."`,
      choices: CH2_CHOICES
    },

    h3_diaries: {
      chapter: "Three — Agatha's Diaries",
      text: `The library smells of damp paper and pipe smoke, though no one has smoked a pipe in this house in fifty years. The diaries fill two whole shelves, cheap black notebooks with the year inked on each spine, 1971 to this one, and a single older volume bound in faded green leather at the very end.

Gabriel lights the lamps and builds up the fire and then stands at the window with his back to you, watching the moor, as if he'd rather not see what you find.

You start with the green book. It isn't Agatha's. The handwriting is older, rounder, a girl's.

*Eleanor Hollow, her book. 1893.*

It's a diary of an engagement. Dress fittings, a ball in Harrogate, the price of silk. And Edmund, on every page: Edmund, who is a surveyor for the railway and has no money and makes her laugh; Edmund, whom her father doesn't like; Edmund, who kissed her in the orchard and asked her to marry him with a ring he'd bought with a year's wages. The wedding is set for the first of November, All Saints' Day. The last entry is dated the thirty-first of October.

*He's staying in the east wing tonight so that he won't see me before the church. Father has been strange all week. He says the house has been asking for something, and that I'm to be a good girl and not ask what.*

After that, the pages are blank.

You find the rest in Agatha's diaries. It takes you the whole afternoon and most of the whisky.

Edmund Thorne was found dead at the foot of the east stair on the morning of his wedding. A fall, the coroner said. Eleanor never married. She never left the house again, and she died in it, and every Hollow heir since has done the same. Not quickly, not all at once. They simply stayed, and stayed, and were buried in the churchyard at Harrowgill having never spent another night anywhere else.

*The house keeps what a Hollow loves,* Agatha writes in 1974, in a hand that shakes. *That is the whole of it. It took Edmund because she loved him, and it kept her because she loved him still. And now I have been fool enough to sit up with him, and talk with him, and I feel the doors of this place closing on me one by one.*

And later, over and over, as if she's reminding herself: *He is kind to me. That is how it begins.*

The last entry is dated nine days before her death.

*The next heir must not love him. The next heir must not love anything in this house. Gabriel knows what the Ashworths promised. Make him tell you. He won't want to. His father didn't, and his grandfather didn't, and that is the other half of the story.*

You look up. Gabriel has turned from the window. He's seen your face.

"What did the Ashworths promise?"

He doesn't answer straight away. Outside, the light is going, the moor turning blue and then grey. "That we'd keep the house," he says at last. "That's all. Keep it in good repair. Keep people away from it."

"That isn't all."

"No." He picks up his jacket. "Not up here. I'll tell you, but not with it listening. Come down to the farm."

He's gone before you can stop him, the kitchen door banging, his torch bobbing away down the hill much faster than a man should walk on a moor at dusk.

The fire burns low. And in the corridor outside the library door, one by one, the candles begin to light themselves.

"She was frightened at the end," says Edmund's voice, very softly, just the other side of the door. "Frightened people get things wrong. Let me tell you what really happened in 1893. It's my story, after all. I'm the only one left who was there."`,
      choices: CH3_CHOICES
    },

    h3_wing: {
      chapter: "Three — The East Wing",
      text: `You wait until Gabriel has gone home. You tell yourself it's because you don't want an audience. It's really because you know he'd stop you.

The door to the east wing is at the end of the first-floor corridor, behind a heavy velvet curtain that smells of mothballs. The thorn-marked key turns as if the lock has been oiled that morning. On the other side, the air is ten degrees colder, and it's very quiet. Not silent. The house is never silent. Quiet the way a room goes quiet when someone in it is listening.

Dust sheets over everything. A long corridor of shrouded furniture, shapes like crouching animals, and your candle making them move. You count the doors. The fourth one is ajar, and there's light behind it.

It's a bedroom, and it's perfect.

No dust. No sheets. A fire in the grate, a four-poster made up with white linen, a man's dark wedding suit laid out on the bed with a white stock folded on top of it, as if someone is expected to dress for church in the morning. On the dressing table, in a glass vase, a dozen red roses, fresh, beaded with water. It's October on the moor. There isn't a rose within fifty miles.

On the writing desk under the window there's a ledger, bound in black calf, open.

Names. A column of names in a dozen different hands, going back two hundred years. Beside each one, a date, and two words: *came home*. Hollows. You recognise some of them from the portraits in the gallery. *Eleanor Hollow, came home 31st October 1893.* Which is wrong, because Eleanor lived another fifty years, and then you understand. It doesn't mean the day they died. It means the day they stopped leaving.

At the bottom of the column, in fresh ink: *Agatha Hollow, came home 3rd March 1974.*

And beneath that, in the same fresh ink, in a hand you don't know, your own name. The date beside it is blank. Waiting.

"You weren't supposed to see that yet."

He's by the fire. You didn't hear him come in. You didn't hear the door. He isn't smiling now; he looks tired and sad and very young, a man standing in the room he should have spent his wedding night in, looking at a suit he never got to wear.

"Did you write it?" Your voice comes out thin.

"No." He looks at the ledger as though it's something that has bitten him. "The house writes it. It always has. It wrote Eleanor's name the night I died, and hers the day she first took my hand in the gallery, and it'll write the date by yours the day you..." He stops.

"The day I what?"

The door slams. Every candle in the room goes out at once, and the fire goes with them, and in the pitch dark something cold closes round your wrist. Not a grip. A hold. Almost gentle.

"I'm sorry," Edmund says, close, so close, "I'm not doing this, I swear to you, it isn't me—"

Then a white beam of torchlight cuts across the room and the door crashes open, splinters flying from the frame, and Gabriel is there with a crowbar in one hand and a torch in the other and a face like thunder.

"Out," he says. "Now."

He hauls you through the doorway. Behind you the whole wing makes a sound you'll hear for the rest of your life: every floorboard at once, groaning, like a ship turning in heavy seas. He doesn't stop until you're back through the velvet curtain and the east wing door is locked and he's leaning against it, breathing hard.

"Your name's in the book," he says. "Isn't it."

You nod.

"Then it's already chosen you." He slides down the door until he's sitting on the floor. "And it's time you knew what the Ashworths promised it. Because my family's been keeping this house for a hundred and thirty years, and it wasn't for the wages."

From the other side of the locked door, very quietly, Edmund says your name.`,
      choices: CH3_CHOICES
    },

    h4_edmund: {
      locked: true,
      chapter: "Four — Edmund's Story",
      text: `You sit on the floor with your back against the door, because it feels safer than opening it, and he sits on the other side. You know he does. You hear the whisper of his coat on the boards.

"Her father was called Josiah," he says. "He was a gambler, and not a lucky one. By the summer of 1893 he'd lost the mill, the London house, the carriage horses. The bank was coming for this place next. And the house..." A pause. "The house made him an offer. It had made one before, to the first Hollow who built it, a hundred years earlier. The same one it's made every Hollow since."

"What offer?"

"That a Hollow will never want for anything. Money comes. Luck comes. Illness passes you by. And in return, a Hollow stays at home, always. One of the family, under this roof, for ever." His voice goes dry. "It seemed cheap to Josiah. What's a daughter who never travels, set against a fortune? But the house had learnt something in its first hundred years. People who are merely told to stay find ways to leave. People who love something here don't. So it keeps what the Hollow loves as well. It keeps it as bait."

The fire in the library has died to embers. You don't get up to mend it.

"Eleanor loved me," he says, very simply. "So it needed me kept. And for a thing to be kept here, it has to die here."

"The stairs."

"The east stair. Half past eleven, the night before the wedding. I went down for a glass of water." Something like a laugh. "Thomas Ashworth was waiting at the turn. The groundskeeper. He'd been promised the farm at Low Harrow, rent free, for as long as there were Ashworths to farm it, if he made sure I didn't reach the church. He was a big man. It didn't take long."

You press your palm flat to the door. The wood is cold as a gravestone.

"I woke up at the bottom of the stairs and walked back up them, and I've been walking them ever since. I watched her grow old. I watched her stop going to the gate, then stop going to the garden, then stop coming downstairs. She'd sit up with me every night, like Agatha did. Kind to me." His voice cracks for the first time. "It's the kindness that does it. Every kind thing you do for me is a nail in your coffin. That's what I'm for."

"Then why are you telling me?"

"Because I'm tired," he says. "Because I've been bait for a hundred and thirty years, and I've watched it work on six of you, and I'd like, just once, for it not to work. Go home. Sell nothing, sign nothing. Just go, tomorrow, while the road still lets you, and don't ever be kind to me."

You don't answer for a long time. You listen to him not breathing on the other side of the door.

"And if I'm kind to you anyway?"

"Then you're a fool," he says softly, "and I'll be glad of it, and I'll hate myself."

The clock downstairs strikes two. He doesn't go. Neither do you. And you understand, with a cold clarity, that this is the moment the house has been waiting for: a door, a threshold, a man on the other side of it who has been alone for a very long time, and you with your hand on the latch.`,
      choices: [
        { label: "Let him in — Say the words Agatha never said, and invite him across the threshold.", next: "h5_invited", setFlag: { name: "invited", value: true } },
        { label: "Keep the threshold between you — He asked you not to be kind to him. Take him at his word.", next: "h5_rules", setFlag: { name: "invited", value: false } }
      ]
    },

    h4_gabriel: {
      locked: true,
      chapter: "Four — The Ashworth Promise",
      text: `Low Harrow farm sits in a fold of the hill half a mile below the house, out of sight of it, which you suspect is the point. The kitchen is warm and cluttered and smells of wet dog. There are crayon drawings on the fridge, a lopsided house, a lopsided sheep, a lopsided girl holding a man's hand. *MOLLY AND DAD.*

"She's seven," Gabriel says, following your eyes. "She's at her gran's in Skipton this week. I sent her." He doesn't say why. He doesn't have to.

He makes tea because it gives his hands something to do. Then he sits across the table from you and tells you.

In the summer of 1893 his great-great-grandfather Thomas Ashworth was groundskeeper at Hollow House, with a sick wife and four children in a two-room cottage. Josiah Hollow, who had gambled away everything but the house, came to him with an offer. Low Harrow farm, rent free, for as long as there were Ashworths to work it. A farm that would never have a bad harvest, a flock that would never take the rot. In return, on the night of the thirty-first of October, Thomas was to wait at the turn of the east stair.

"Edmund," you say.

"Edmund." Gabriel looks at his tea. "It's in Thomas's own hand, in the family Bible. Like he wanted it written down somewhere. He did it, and the farm came, and it's never had a bad year since. Not one. Foot-and-mouth took every farm in the dale in 2001 and walked straight past ours." He laughs, and it isn't a laugh. "And the price was that the Ashworths keep the house. Keep it standing, keep strangers off it. And keep a Hollow in it."

"Keep."

"My dad fetched Miss Hollow back from Skipton station in March 1974. She'd bought a ticket to London. He told her there'd been a fire at the house, and she came back to see, and she never got as far as the gate again." He finally meets your eyes. "I was told the same would be my job, when the time came. Told it at twelve, by my dad, at this table."

The kitchen clock ticks. Outside, a dog barks once and stops.

"I won't do it," Gabriel says. "I want you to know that. I'll not fetch you back from anywhere. Miss Hollow knew. She spent her last year working out how to end it, and she found it, and she was too frail to do it herself." He takes a folded page from his pocket, Agatha's spidery hand. "The ledger in the east wing is the bargain. Burn it in the room where the house last killed, on the night it last killed, and every promise in it's broken. The Hollows, the Ashworths, all of it."

"All Hallows' Eve."

"Midnight. Tomorrow night." He puts the paper in your hand and holds it there a moment. "But listen. Everything the house has kept goes when the book burns. Everything. So he'll not want you doing it, whatever he says. He'll be charming about it. He's had a long time to practise."

You walk back up the hill in the dark, with Gabriel's torch lighting the way until the gate, where he stops as if at a wall.

Later, back in your room, the candles go out along the corridor one at a time, and the footsteps stop outside your door, and the two soft knocks come.

"I heard you went down to the farm," Edmund says. "I suppose he told you what his family did to me." A pause. "Did he tell you what they've done since?"`,
      choices: [
        { label: "Let him in — Whatever the Ashworths say, he's the one they murdered. Invite him across the threshold.", next: "h5_invited", setFlag: { name: "invited", value: true } },
        { label: "Keep the rules — Gabriel warned you he'd be charming. Keep him on the other side of the door.", next: "h5_rules", setFlag: { name: "invited", value: false } }
      ]
    },

    h5_invited: {
      locked: true,
      chapter: "Five — Across the Threshold",
      text: `"Come in, Edmund."

The words are barely out of your mouth before something in the house changes. You feel it through the soles of your feet, the way you feel a train coming before you hear it: a long, deep settling, like an old dog that has finally been let in by the fire.

He steps over the brass strip.

For a moment he just stands there, in your room, looking down at his own feet on the carpet as if they belong to someone else. Then he looks at you, and his face does something complicated, and he laughs. It's a startled, boyish, entirely human sound.

"A hundred and thirty-three years," he says. "Do you know, I'd forgotten what this room smells like? Lavender. She kept lavender in the drawers."

He's more real on this side of the door. You can see it. His coat is dry now. The candle throws his shadow up the wall, faint, but there. When you reach out and touch his sleeve, you meet cloth instead of cold air, and under it an arm, and he goes very still.

"You shouldn't have done that," he says quietly. He doesn't move away.

Somewhere downstairs, a gramophone begins to play.

You both hear it. A waltz, thin and scratchy, the kind of tune that was new when he was alive. He closes his eyes.

"That was ours," he says. "The Harrogate ball. She trod on my feet the whole way through."

You go down together, because it seems ridiculous not to. The long gallery has been swept and the dust sheets are gone and every candle in every sconce is lit. The portraits look down at you, a hundred Hollows with the same long jaw, and you'd swear some of them are smiling. The gramophone sits on a table at the far end with nobody to wind it.

"It wants us to dance," you say.

"It wants a great many things." He holds out his hand anyway. "I've spent a century and more saying no to it. I'd like to say yes to one small thing, if you'll let me."

He dances the way people did then, properly, one hand at your waist and the other holding yours at shoulder height, and he doesn't let you tread on his feet once. His hand is cool, not cold. Cool the way a stone is cool in the shade. By the end of the second waltz it's barely cool at all.

When the music stops, neither of you moves.

"I told you not to be kind to me," he says.

"I know."

"This is how it begins."

"I know that too."

He kisses you in the long gallery with a hundred Hollows watching, slowly, as if he's trying to remember how, and then not slowly at all. The candles gutter. The gramophone, unwound and untouched, starts the waltz again from the beginning. What happens after that belongs to the two of you and the dark, and the house keeps its own counsel about it.

In the morning there's a red rose on the pillow beside you, and he's gone, and you're alone.

You go downstairs in your dressing gown to make tea, and try the front door on your way past, the way you'd pat your pocket for your keys. It doesn't open.

It isn't locked. The key turns. The bolts are drawn. It simply won't open, as if the whole weight of the house is leaning on the other side of it.

You stand in the hall with your hand on the knob and your heart thudding, and then, because some part of you already understands the rules of this place, you say out loud: "I'll be back before dark."

The door swings open onto a bright, cold morning.

Your coat, on its hook beside the door, is grey with dust, as though no one has touched it in years.`,
      choices: [
        { label: "Go down to Harrowgill — Find Eleanor's grave while it's daylight and the road still lets you.", next: "h6_village" },
        { label: "Stay with Edmund — One more day. It's All Hallows' Eve, and whatever happens tonight, you want to be here for it.", next: "h6_kept" }
      ]
    },

    h5_rules: {
      locked: true,
      chapter: "Five — The Rules",
      text: `"Goodnight, Edmund," you say through the door, and nothing else.

There's a long silence on the other side.

"Good," he says at last, very quietly. "That's right. Keep doing that." And then, lower, as if he can't help it: "It was nice. For a while. Having someone to talk to."

His footsteps go away down the corridor. The candles don't relight behind him this time. They stay out.

The house doesn't take it well.

It starts with the wind. There wasn't any, and then there is: a gale out of nowhere, howling across the moor, flinging rain at the windows like handfuls of gravel. Then the doors. Every door in the house, opening and closing in turn, from the cellar to the attic, bang, bang, bang, like someone walking through the house slamming each one on their way to find you. Then the clocks, all striking at once, and none of them striking the same hour.

You pull on your boots and your coat, and you're halfway down the stairs, with no plan beyond *out*, when you see torchlight at the kitchen window.

Gabriel is standing in the yard in the rain with a torch in one hand and a shotgun broken over his arm and his face white as paper.

"Nobody comes up after dark," you say, when you've got the back door open.

"Aye, well." He steps inside, dripping. "I heard it from the farm. Whole dale'll have heard it. Thought you might want company." He looks up at the ceiling, where something heavy is being dragged slowly from one end of the house to the other. "You told him no, then."

"How can you tell?"

"Because it's throwing a tantrum."

He stays the night. Neither of you pretends it's for any reason but that you'd both go mad alone. He builds up the fire in the kitchen range and puts the kettle on, and the two of you sit at the scrubbed table with your backs to the wall while the house rages overhead.

At two o'clock every portrait in the gallery turns to face the wall. You hear it happen, a long rattle of frames down the length of the house. At three, the kitchen tap runs red for a full minute and then clear again. At half past three, the dog Gabriel has left in his van starts howling and doesn't stop.

You talk because the alternative is listening. He tells you about Molly, who's seven and wants to be a vet, or possibly a dinosaur. About his wife, who left six years ago and was right to. About being twelve at this table, with his father telling him what the Ashworths owed.

"I'm not going to be him," Gabriel says. "My dad. I swore it. Whatever it costs the farm."

"It might cost you everything."

"Might." He turns his mug round and round in his big hands. "Might be worth it."

Around four the noise stops, all at once, the way a child stops crying when it's exhausted itself. The silence afterwards is so complete you can hear the fire tick.

You don't remember falling asleep. When you wake, grey light is coming in at the window, and your head is on Gabriel's shoulder, and his jacket is over you both. He's awake. He's been awake a while, by the look of him, keeping watch on the kitchen door and not moving in case he woke you.

"Morning," he says. His voice is rough. He doesn't move away, and neither do you, and for a long moment the only thing in the house is the two of you and the sound of rain easing off the windows.

"It's the thirty-first," he says finally. "All Hallows' Eve."

The date in the ledger. The night Edmund died. Midnight is sixteen hours away.`,
      choices: [
        { label: "Go down to Harrowgill — Find Eleanor's grave while it's daylight and the road still lets you.", next: "h6_village" },
        { label: "Stay and hold your ground — Learn the house's tricks before midnight. It's your house now, whatever it thinks.", next: "h6_kept" }
      ]
    },

    h6_village: {
      locked: true,
      chapter: "Six — Harrowgill",
      text: `The road down to Harrowgill lets you go. You half expected it not to.

It's a bright, hard morning, the kind the moor keeps for the end of October, all blue sky and cold wind and every drystone wall picked out sharp as a pencil line. The village is one street of grey stone houses, a pub called the Drover's Rest, a shop with a Halloween display of plastic pumpkins in the window, and a squat church with a square tower. A man scraping moss off his step watches you all the way past. A woman pulls her small son inside.

The churchyard is on the slope behind the church. The Hollows are along the north wall, where the sun never quite reaches: a row of tall dark headstones, all the same shape, going back two hundred years. You walk along them reading the names, and your skin starts to crawl before you understand why.

Every stone has three dates on it. Born. Died. And between them, cut in smaller letters, a third. *Came home.*

*Eleanor Hollow. Born 1871. Came home 31st October 1893. Died 1941.*

Forty-eight years between the second date and the third. Forty-eight years of never passing the gate.

At the end of the row there's a newer stone, the earth in front of it still raw. *Agatha Hollow. Came home 3rd March 1974.* The flowers on her grave are dead. And a little apart from the Hollows, under a yew, there's one small, plain stone. *Edmund Thorne, surveyor, who fell. 1863–1893.* On it lies a dozen red roses, fresh, beaded with dew.

"You'll be the new one."

The rector is a small, sharp woman in her sixties with a Barbour over her cassock and a pair of secateurs in her hand. She introduces herself as Anne Whitlock and doesn't offer to shake hands.

"Agatha came to see me in April," she says. "First time she'd been further than the gate in fifty years. It nearly killed her. She wanted the parish chest."

The parish chest is an iron-bound box in the vestry, and in it, among two centuries of baptisms and burials, is a book of the vicars' own notes. The page Agatha wanted is dated 1791, written in brown ink by a curate whose hand shakes worse than hers did.

*This day Nathaniel Hollow came to me and confessed that he had made a covenant with the thing beneath the hill, for fortune and long life for his house, and in exchange had promised that a Hollow shall ever be at home. He says the covenant is written in a book, in his house, and signed with his blood, and that the thing holds him to it. I asked him might it be broken. He said only by fire: the book burned by a Hollow's hand, in the room of the last death, upon the night of it.*

"The room of the last death," the rector says. "Agatha worked it out. The east wing, where the poor man died. Midnight on All Hallows' Eve." She closes the book. "Tonight."

"What happens if I burn it?"

"Everything the house has kept, it lets go. The living walk out. The dead..." She looks out of the vestry window at the small stone under the yew, at the roses on it. "The dead go on to wherever they should have gone."

You stay too long. You mean to leave at three, to catch the bus to Skipton, but the bus doesn't come, and when you set off walking down the valley road at four, the road bends and bends and brings you back up the hill until you can see the tower of Hollow House against the sky.

"It won't let you go by the road after dark," says the rector, who has been watching from the lychgate. "There's the old packhorse track over the tops. It might not think to watch that. Agatha tried it once." She pauses. "She came back."`,
      choices: [
        { label: "Go back and end it — Take the thorn key and a box of matches back up the hill before midnight.", next: "h7_eve" },
        { label: "Run — Don't go back. Take the packhorse track over the tops tonight and don't stop until the sun comes up.", next: "h7_moor" }
      ]
    },

    h6_kept: {
      locked: true,
      chapter: "Six — The House Closes",
      text: `The house is very good to you on the last day of October.

Breakfast is laid when you come down: eggs and bacon, toast in a silver rack, a pot of coffee still too hot to drink. There's a room off the hall you're sure wasn't there yesterday, a little morning room with a window seat full of sunlight and a bookcase of books you loved as a child. Not the same stories. The same copies. Your name in the front of one in your own seven-year-old handwriting.

In the wardrobe upstairs, beside your own clothes, there are dresses that must have been Eleanor's, and a wool coat that fits you as if it were cut for you. The piano in the drawing room is open, and when you pass it, it plays the first few bars of a song your grandmother used to sing, and stops.

It's the easiest morning of your life. That's what frightens you, when you finally notice.

You haven't thought about your flat all morning. Or your job, or your friends, or the life you left in a hurry to come and look at an inheritance. You try to picture your own front door and it takes you a long time. Your phone, when you find it, has no signal, and the screen shows a date: 31st October. You stare at it and think *that's soon*, and then think *soon for what*, and can't remember.

Twice you catch sight of a dark coat at the far end of a corridor, just turning a corner. Once, a voice in the next room, laughing softly, the way people laugh at a good dog.

Gabriel comes at noon. He's been down to the farm to see to the animals, and he's walked back up with his jaw set, like a man walking into weather. He finds you in the morning room, curled in the window seat with a book, and he stands in the doorway and looks at you for a long moment.

"How long have you been sitting there?"

You don't know. The light has moved right across the floor.

He crosses the room, takes the book out of your hands and closes it. "Listen to me. It's doing to you what it did to her. Nice things. Easy things. Until one day you just don't bother going to the gate." He sits down on the window seat opposite you and makes you look at him. "Miss Hollow found a way out. The ledger in the east wing is the bargain. If a Hollow burns it, in the room where the house last killed, at midnight on the night it killed, it's finished. All of it. The Hollows, the Ashworths, everything it's kept."

"Tonight."

"Tonight."

You take the thorn-marked key from your pocket and go up to the east wing with him to look, in daylight, because the thought of doing it for the first time at midnight is unbearable.

The perfect room is waiting. The fire lit, the roses fresh, the wedding suit laid on the bed. The ledger is open on the desk: two hundred years of Hollows, and at the bottom, in fresh ink, your own name. Beside it, someone has pencilled, faintly, in a neat hand: *31st October*.

Tonight is not only the night the house can be broken. It's the night it means to have you.

Gabriel sees it too. He's very quiet on the way back down.

"Give me the key," he says at the foot of the stairs. "Just till tonight. If it knows you've got it, it'll find a way to take it off you. It's cleverer with you than with me. It doesn't care about me." He holds out his hand. "I'll bring it back at dusk. I swear it on Molly."`,
      choices: [
        { label: "Give Gabriel the key — He's kept this house all his life. Let him keep the key safe until dusk.", next: "h7_gabriel" },
        { label: "Keep the key yourself — Trust no one with it. You'll go into the east wing tonight on your own.", next: "h7_eve" }
      ]
    },

    h7_eve: {
      locked: true,
      chapter: "Seven — All Hallows' Eve",
      text: `At dusk you put the box of matches in one pocket and the thorn-marked key in the other and you go to end it.

The house knows. Of course it does.

The corridor from your room to the east wing is forty paces long. You counted it on the first morning. Tonight you walk for five minutes and the velvet curtain at the end is no nearer. You walk faster. The wallpaper repeats, and repeats, the same bunch of faded roses going past you again and again like the background of a cartoon. You start to run, and you run until your lungs burn, and when you stop, gasping, the door beside you is your own bedroom door, and the curtain is exactly forty paces away.

You try another way, through the gallery. Every door you open lets you out into the front hall. Every stair you climb brings you down to the kitchen. The clocks are all striking, and the hour they strike is getting later.

In the long gallery the portraits have turned back round to face the room. You walk down the middle of it with your eyes on the floor, because the first time you look up, every face in every frame is the same face, an old woman with a long jaw and a cardigan, and every one of them is watching you.

"You've not been keeping my rules," says Agatha Hollow.

She's standing at the far end of the gallery, small and upright, in a grey cardigan and sensible shoes, with her hands folded in front of her. She's as solid as you are. She looks exactly like her photograph at the funeral, except that she's cross.

"You're dead," you say stupidly.

"A fortnight before you came. Came home, the house would say. It keeps what it has." She looks you up and down. "I told you three things, and you've broken at least one of them, and I dare say you've been kind to him. Everyone is. I was." Her face softens very slightly. "Well. It can't be helped. Have you got the matches?"

You show her.

"Good girl. Good lad. Good whatever you are, I'm too old and too dead to keep up." She turns and walks away from you down the gallery, and says over her shoulder: "Walk backwards."

"What?"

"It hates that. It can't work out where you're going. Took me thirty years to find out, and it's the only trick I ever beat it with. Backwards, and don't look round, and I'll tell you where to turn."

So you walk backwards through Hollow House on All Hallows' Eve, with your great-aunt's voice in your ear saying *left, now, three steps, mind the rug*, and the house groaning round you like a ship in a storm because it can't find you. Doors slam where you've just been. A candle gutters out in front of your face. Once, something cold brushes past you in the dark and you hear the rustle of silk and smell lavender. Agatha says, "Leave her be, Eleanor, she's busy," quite calmly, and it goes.

Then there's velvet at your back, and mothballs, and you're at the curtain before the east wing door.

Agatha stops. She doesn't come any closer.

"This is as far as I go," she says. "As far as I ever went. Eleanor too." She looks at the door for a long moment, and then at you, with an expression that you realise, far too late, is love. "It's twenty to midnight. It'll be waiting. So will he."

The hall clock begins to chime the three-quarter hour. You have the key in your hand. And behind you, down the stairs and across the hall, the front door of Hollow House, which hasn't opened unasked in two hundred years, swings silently open onto the dark moor, and stays open.

An invitation, or a trick, or the last kindness the house will ever offer you.`,
      choices: [
        { label: "Go into the east wing — Turn the key. Whatever is waiting for you in that room, meet it.", next: "h8" },
        { label: "Run — Leave the key on the hall table and walk out through the open door onto the moor, before midnight.", next: "e_dawn" }
      ]
    },

    h7_moor: {
      locked: true,
      chapter: "Seven — The Moor at Night",
      text: `The packhorse track leaves Harrowgill behind the pub and climbs straight up the side of the dale, a narrow ribbon of stones between the heather. By the time you reach the top, the sun is a red line on the far hills and the wind has teeth in it.

You walk south, away from the house. That's the whole plan. South, over the tops, down into the next valley, to a town with a railway station and street lights and people who've never heard the name Hollow. Twelve miles. You can walk twelve miles. You tell yourself so every time a grouse bursts out of the heather under your feet and nearly stops your heart.

It gets dark the way it only gets dark on a moor, completely. Your phone's torch lights a circle of stones and nothing else. There's no moon. The wind drops, and in the silence you can hear the heather ticking and creaking, and far off, a sheep coughing like an old man.

After an hour, there's a light ahead of you. A single warm window, low on the horizon.

You're relieved for about a minute. A farm. People. Then you get closer and see the tower, and the spire, and the long wing leaning away from the rest.

You stand very still. Then you turn round, deliberately, and walk the other way, keeping the wind on your left cheek, and for an hour you walk with the house behind you.

And then the light is ahead of you again.

You try three times. The track bends. Or the moor does. Every way you walk, in the end, you're walking home.

The voices start after the third time. Not words, at first. Just the sense of company on the track, people walking just behind you, just out of the torchlight, keeping pace. Then your name, very softly, in a lot of different voices. Some of them are young. One of them sounds like your grandmother.

"Don't answer them."

He's standing on the track in front of you, in the rain that's just started, his coat soaked black, his hair plastered to his forehead. Edmund. The whole moor belongs to the house, and so does he.

"Please," he says. "Please don't answer them, and don't stop walking, and don't lie down, however tired you get. That's how it takes you out here. You get tired, and you lie down in the heather for a minute, and in the morning there's a new stone in Harrowgill churchyard with two dates on it." His voice is shaking. "It took Nathaniel's brother on this track. 1792. He was trying to leave too."

"Then how do I get off it?"

"You don't. Not tonight. Not unless you're still walking when the sun comes up. Seven hours." He looks at you, rain running down his face. "Or you go back. You go back to the house, and you go into the east wing, and you burn the damned book. Tonight. Before midnight. And then it can't touch you. Or anyone. Ever again."

"And you?"

He doesn't answer that. He doesn't need to. You've both read the rector's page.

"I'm not asking you to do it for me," he says. "I'd much rather you lived. I'm only telling you there are two ways off this hill, and one of them is seven hours long and the other one is two miles."

Behind him, low on the horizon, the house is waiting with its one lit window. Behind you, the voices are saying your name.`,
      choices: [
        { label: "Keep walking — Seven hours until sunrise. Put your head down, don't answer, and don't stop.", next: "e_dawn" },
        { label: "Go back with him — Two miles to the house. Burn the ledger before midnight, whatever it costs.", next: "h8" }
      ]
    },

    h7_gabriel: {
      locked: true,
      chapter: "Seven — The Keeper",
      text: `Gabriel comes back at dusk, like he promised.

You hear the van in the yard, and his boots on the flags, and the kitchen door. You come down with the matches in your pocket and your heart going, ready. He's standing by the range with his back to you. He doesn't turn round when you come in. He locks the kitchen door behind him, and puts the key in his pocket, along with the thorn-marked key, and then he turns.

He looks like a man who hasn't slept in a year.

"Sit down," he says. "Please."

You don't sit. "Give me the key, Gabriel."

"I will. I will. Just hear me first." His voice cracks. "I went down to the farm this afternoon. There was a drawing on the kitchen table. One of Molly's. She's been in Skipton all week, at her gran's. She can't have done it. But it's her hand. I know her hand." He takes a folded sheet of paper out of his jacket and lays it on the table between you. It's a child's crayon drawing of a big dark house on a hill. A long stair. A little girl at the top of the stair, lopsided, smiling. Across the bottom, in careful capitals: *MOLLY COMES HOME.*

"I rang my mum," Gabriel says. "Molly got up in her sleep at four this morning. They found her at Skipton station in her nightie, asking the man at the barrier for a ticket home. She doesn't remember." He puts both hands flat on the table, as if to stop them shaking. "It's talking to me. It never talked to me before. It talked to my dad. And it's telling me that if a Hollow comes home tonight, the Ashworths are done. Free. Molly never keeps this house. Never gets told at twelve what she has to do. Never has to fetch anyone back from anywhere."

"And if I burn the book?"

"Then maybe we're all free. Maybe. Or maybe it's lying about that too, and it gets angry, and it takes the one thing it can still reach." He looks at the drawing. "It showed me. Last night. What it'll do."

The kitchen is very quiet. The clock on the wall says half past ten. The house is quiet too, listening.

"You'd be all right," he says, and he's crying now, openly, the way big quiet men cry, like something breaking. "That's what I keep telling myself. You'd never want for anything. Nothing would hurt you. Miss Hollow was happy, some of the time. You'd just have to write the date yourself. That's all. Just write it in the book, in your own hand, and it's done. Nobody has to fall down any stairs." He wipes his face with the back of his hand. "I'm not like my dad. I'm asking. I'm not making you. I'm asking."

You look at him, and at the drawing, and at the pocket where he's put both keys.

The thorn key is in his jacket, on the left, where you can see the shape of it. He's not watching the jacket. He's watching your face, begging.

And there's the other way to the east wing. The one no one uses. Through the scullery, up the back stairs to the first floor, along the servants' passage to the east stair, the steep dark stair where a man called Edmund Thorne went down for a glass of water in 1893 and never reached the bottom alive. The east wing door is locked at the front. The door at the top of the east stair has no lock at all.`,
      choices: [
        { label: "Take the key from him — He's not watching his pocket. Get the thorn key and go through the front, the way you came.", next: "h8" },
        { label: "Run for the east stair — Don't fight him. Go the back way, up the old servants' stair, before he can stop you.", next: "e_bargain" }
      ]
    },

    h8: {
      locked: true,
      chapter: "Eight — The Ledger",
      text: `It's a quarter to midnight when you reach the room in the east wing.

The fire is burning high in the grate, far too high, roaring up the chimney like a furnace. The roses on the dressing table have opened wide, blown and heavy, dropping petals on the polished wood. The wedding suit is still laid out on the bed, and the white stock is folded on top of it, waiting for a bridegroom to put it on in the morning.

The ledger is open on the desk. You don't want to look at it. You look at it.

Beside your name, the pencilled date is being gone over in ink. You can see it happening. A dark wet line crawling along the pencil marks, letter by letter, the way a stain spreads through cloth. It's finished *31st*. It's working on the *O*.

"You came."

Edmund is standing by the window. He looks more real than he's ever looked, standing in the room where he should have slept on the last night of his life. He looks at the matches in your hand, and at your face, and he doesn't smile.

"I know what it costs," you say.

"Do you?" He comes to stand on the other side of the desk. "Then I'll say it anyway, so it's said. If that book burns, everything it's kept goes free. Agatha. Eleanor. All the Hollows in that gallery. Me." He looks down at the ledger, at the crawling ink. "I don't know where we go. I've been here too long to remember what I believed. But I won't be here. That's the price. I want you to know I think it's a fair one."

The fire roars. And then it speaks.

It isn't one voice. It's every voice you've heard in this house, all at once, layered like a choir. Agatha's dry voice, Eleanor's young one, your grandmother's, and under all of them something else, something very old that has learnt to talk by listening at doors for two hundred years.

*Stay,* it says. *Why would you go? Out there you'll grow old and poor and frightened. Out there people leave. Here, nothing ever leaves you. Here you'll never want, never be ill, never be alone. He'll never be alone. Isn't that what you want? Isn't that what everyone wants?*

The ink reaches the *c*.

Somewhere below you, a long way down, a door bangs, and someone is shouting your name.

You look at Edmund. He's looking back at you. His face is perfectly steady and his hands are shaking.

You strike a match. The flame is small and yellow and ordinary, the most ordinary thing in the whole house. It shows you three things.

The ledger, with its column of names, two hundred years of Hollows who came home and never left.

The pen beside it, black and old, its nib wet with the same ink that's crawling towards the end of the date by your name. Nathaniel Hollow signed his covenant with that pen. Anyone could sign with it. Anyone could write anything, in a book the house has to obey.

And Edmund, on the other side of the desk, in the room where he died, waiting to see what you'll choose. Not asking. He's never once asked.

The ink reaches the *t*. Midnight is ten minutes away.`,
      choices: [
        { label: "Burn the ledger — Touch the match to the page and free everything this house has ever kept.", branchOn: { flag: "invited", ifTrue: "e_lasthollow", ifFalse: "e_keeper" } },
        { label: "Sign it yourself — Pick up Nathaniel's pen and write your own terms into the house's book.", next: "e_mistress" },
        { label: "Stay — Blow out the match. Let the ink reach the end of the date, and let the house keep you.", branchOn: { flag: "invited", ifTrue: "e_upstairs", ifFalse: "e_roomready" } }
      ]
    },

    e_lasthollow: {
      locked: true,
      chapter: "Nine — The Last Hollow",
      text: `You touch the match to the corner of the page.

It won't catch. The flame licks at the paper and slides off it as if the book were made of wet slate. The fire in the grate howls. The ink by your name reaches the *o* and keeps going.

Then Edmund's hand closes over yours.

It's warm. For the first time since you met him, his hand is warm, and you realise it's because you let him in, because you've been kind to him, because the house made him real enough to keep you, and it never once thought he might use it. Together you hold the match to the page, and this time it catches.

The ledger burns like a thing that's been waiting to.

Page after page goes up, curling and blackening, and as each name burns you hear it. Not a scream. A sigh. A long, grateful breath going out of the house, over and over, two hundred years of breaths. The portraits in the gallery empty one by one: you hear the frames rattle as whatever was in them goes. Somewhere, a woman laughs out loud, young and delighted. *Eleanor.* And close by your ear, dry and brisk: *Well done, my dear. About time.* Then Agatha is gone too.

The fire in the grate dies. The roses drop the last of their petals. The room goes cold and dim and smells of damp and old soot and nothing else, and all at once it is only a room. A shabby bedroom in a draughty house on a moor, with dust sheets on the furniture and a stain on the ceiling where the gutter leaks.

The clock in the hall strikes midnight. It's just a clock.

Edmund is still there.

He's standing by the window, looking down at his own hands. You can see the curtains through them, faintly, the way you can see a fire through a sheet of paper.

"I've till dawn, I think," he says. "It's letting go of me slowly. Or I'm letting go of it." He looks up, and his smile is the rueful one from the first night. "Would you sit with me? I'd like to see the sun come up over the moor. I never did. Not once, in all that time. It was always the house's sun."

You sit with him on the window seat. You hold his hand while you still can.

He tells you about the railway line he was surveying, the one that never got built, across the tops to the coast. About the sea at Whitby, which he saw once as a boy. About the places he meant to go with Eleanor: Paris, Venice, somewhere hot. You tell him about aeroplanes, and he laughs until he has to wipe his eyes.

"She'll be waiting, I expect," he says, near the end. "Eleanor. She always was annoyingly punctual." He looks at you. "I'm glad it was you. I'm glad I got to dance once more."

The sky over the moor goes grey, then pink, then gold. The first sunlight comes in through the window and falls across both your hands, and his hand is warm, and then it's warmer, and then it's sunlight.

The window seat is empty. On it lies one red rose.

It wilts by noon, the way roses do. You press it in Eleanor's diary anyway.

You sell Hollow House in the spring. It turns out you can, now. A couple from Leeds buy it and turn it into a guest house, and the reviews are very good, though one of them mentions a smell of lavender on the east stair. Mr Pryce sends you the cheque with a note that says only *Thank you*.

On the first of November every year, you drive up to Harrowgill and put roses on a small stone under a yew. It's the only time you go back.

It's enough.`,
      ending: true,
      tag: "Ending: The Last Hollow"
    },

    e_keeper: {
      locked: true,
      chapter: "Nine — The Keeper's Son",
      text: `You touch the match to the corner of the page, and the ledger goes up like paper soaked in oil.

It doesn't just burn. It *roars*. The flame leaps off the desk and up the curtains and across the ceiling in a single sheet, and the fire in the grate bursts out into the room to meet it, and in a heartbeat the whole east wing is burning. The house isn't letting go. It's taking itself down with the book, like a drowning man grabbing whoever's nearest.

The smoke is black and thick and it tastes of two hundred years. You can't see the door. You can't find the floor. You're on your knees, coughing, and the heat is on your back like a hand pushing you down.

"Go," says Edmund, somewhere in the smoke. He's calm. He sounds almost happy. "Go on. It's all right. It's over."

Then the door crashes in, and there's a torch beam in the smoke, and a big hand gets hold of your collar.

"Up," says Gabriel. "Up. Come on. I've got you."

He came back. Of course he came back.

You go down the east stair together, because it's the only way that isn't burning, half falling, half running, the stairwell full of smoke and noise. At the turn of the stair Gabriel's foot goes out from under him, on the very step where his great-great-grandfather stood waiting in 1893, and for one terrible second he's going over the rail.

You catch him. You don't know how. You get both hands in his jacket and you pull, and he comes back onto the stair, and the two of you stumble down the last steps together and through the scullery and out into the cold.

Hollow House burns until dawn.

You watch it from the moor, sitting in the wet heather with Gabriel's jacket round you both. The fire brigade comes from Skipton and can't get up the track and in the end just stands and watches with you. The tower goes at about three in the morning. The spire falls in with a sound like a bell.

Near the end, just for a moment, you see him. A figure in the one upstairs window that isn't burning yet, tall, dark-haired, in a black coat. And beside him a young woman in a pale dress, holding his hand. He raises the other hand, to you, or to the moor, or to the morning. Then the roof comes down.

When the sun comes up, there's nothing on the hill but black stone and smoke.

Gabriel is covered in soot from his hair to his boots. He looks at the ruin for a long time.

"Farm'll have a bad harvest next year," he says.

"Probably."

"Might lose some sheep. Might get the rot." He starts to laugh, hoarse and cracked and helpless, with tears cutting white lines through the soot on his face. "God, I hope so. I hope we have a terrible year. I hope it's the worst year any Ashworth ever had."

You kiss him on the burnt hillside with the sun coming up over the moor, and he tastes of smoke and whisky, and he kisses you back as if he's been waiting a long time to be allowed.

Molly comes home from Skipton on the Sunday. She's seven, and wants to be a vet, or possibly a dinosaur, and she decides within the hour that you can stay.

The next year the farm has a terrible harvest. The year after that, a middling one. Nobody at Low Harrow has ever been so glad of ordinary bad luck.

The site of Hollow House grows back to heather in ten years. Walkers on the tops say it's the quietest place on the moor.`,
      ending: true,
      tag: "Ending: The Keeper's Son"
    },

    e_mistress: {
      locked: true,
      chapter: "Nine — Mistress of Hollow House",
      text: `You blow the match out. You pick up the pen.

It's heavier than it looks, and cold, and it fits your hand the way a key fits a lock it was cut for. The house goes very still. Even the fire stops roaring. It's watching you the way a cat watches a hand coming towards it, not sure yet whether it means to stroke or strike.

The ink by your name has nearly finished the date. You draw a line through it. Then, underneath, in the steadiest hand you've ever written in, you write your own terms.

*I will stay. I choose to. But on these conditions.*

*No other Hollow comes home after me. No Ashworth keeps this house again, or owes it anything. Gabriel Ashworth is free, and his children, and theirs.*

*Every soul this house has kept may go, if they wish it. None of them is bait any more.*

*The house answers to me. Not I to it.*

You sign your name. The ink comes out red.

For a long moment nothing happens. Then the fire in the grate sinks to a low, steady glow, as tame as a hearth in a farmhouse kitchen. Along the corridor outside, one by one, every candle lights itself. Every door in the house swings open, all at once, a long soft sound of hinges from cellar to attic.

Not a trap. A bow.

"Oh," says Edmund, very quietly. He's staring at you as if he's never seen you before. "Oh, that's clever. Nobody ever thought of that. Two hundred years, and none of them ever thought to *argue*."

"You can go," you tell him. "It's in the book. Anywhere you want."

He looks at the window, at the dark moor, at the world he's been kept from since before anyone alive was born. Then he looks at you.

"Perhaps later," he says. "I think I'd like to see what you do with the place first."

What you do with it, over the years, is live in it.

Harrowgill never quite gets used to you. The house is lit from top to bottom every night now, and the lights can be seen for miles across the tops, and people say the lady up at Hollow House never seems to get any older. Your post arrives. Your shopping arrives. Money arrives, in the unlikely, steady way it used to arrive for the Hollows, and you give most of it to the village school and the mountain rescue and the farm at Low Harrow, whether Gabriel likes it or not.

You never leave. But you chose that, with your eyes open, and it turns out that makes all the difference. The house doesn't keep you. You keep it.

The portraits in the gallery are empty frames now; you took the Hollows down and burned them in the orchard and every one of them went gladly. Agatha stayed a week longer than the rest, to see you'd got the knack of it, and then went off one morning without saying goodbye, which you'd expect.

Edmund is still here. Some nights he says he'll go soon. Some nights he doesn't mention it. Most nights, at midnight, he knocks twice on your door, soft as a butler.

"Forgive the hour," he says.

You always let him in.`,
      ending: true,
      tag: "Ending: Mistress of Hollow House"
    },

    e_upstairs: {
      locked: true,
      chapter: "Nine — Ever After, Upstairs",
      text: `You blow the match out.

The house lets out a long breath, the way a crowd does when the tightrope walker reaches the far side. The ink by your name crawls on, unhurried now, and reaches the last letter, and stops. *Came home*, it writes beside it, in a hand like copperplate. *31st October.*

It doesn't hurt. You'd braced yourself for it to hurt.

It feels like pulling on a heavy coat on a cold night. Like the moment you get into a warm bed. The house settles round you, every beam and stone and floorboard, and you feel it the way you'd feel a blanket tucked in round your shoulders. Somewhere far away, in another life, there's a flat and a job and people who'll wonder where you went. You can't quite picture them. You find you don't mind.

Edmund is looking at you across the desk with an expression you can't read.

"You shouldn't have," he says. His voice is thick. "You should have burned it. You should have gone. I wanted you to go."

"I know. You told me not to be kind to you."

"I did." He comes round the desk. "And you never once listened."

The gramophone starts downstairs. You both hear it. The waltz from the Harrogate ball.

He looks at the wedding suit on the bed. He's been looking at it for a hundred and thirty-three years, you realise. Laid out, waiting for a morning that never came.

"Well," he says, and his mouth twitches. "It seems a shame to waste it."

You go down to the long gallery at midnight on All Hallows' Eve, and every candle is lit, and every Hollow in every frame is watching: Nathaniel with his sharp eyes, Eleanor young and smiling, Agatha in her cardigan with her arms folded, looking resigned. Edmund is in the black suit and the white stock, and he's the most beautiful thing you've ever seen, and he's warm. He's completely warm now. There's no minister and no church and no one alive to see it, and it doesn't matter at all.

"I will," he says, when it's his turn, and you say it too.

What happens after belongs to the two of you, and the house keeps it very safe.

Mr Pryce's letters come for a while, and then stop. The solicitors in Leeds write to the family, and the family write to the police, and a very young constable walks up from Harrowgill one bright spring morning and knocks at the door of Hollow House and gets no answer, and walks back down again, faster than he walked up.

The house stands. It's always kept well. Nobody ever sees who keeps it.

But walkers crossing the tops at dusk sometimes see a light in one upstairs window, and two figures in it, close together, looking out at the moor. And some years, on the last night of October, the people in Harrowgill swear they can hear a waltz coming down the hill on the wind, thin and scratchy and very old, playing over and over, as if someone up there is dancing and never means to stop.`,
      ending: true,
      tag: "Ending: Ever After, Upstairs"
    },

    e_roomready: {
      locked: true,
      chapter: "Nine — The Room Kept Ready",
      text: `You blow the match out.

The house lets out a long breath. The ink crawls on to the end of the date and stops, and beside it, in that neat, patient hand, it writes: *came home*.

It doesn't hurt. It feels like a coat being settled on your shoulders. It feels like being tucked in.

You look up, and Edmund isn't there.

Or he is, and you can't see him. There's the faintest cold in the air by the window where he stood, and a voice, very far away, as if through a thick wall, saying your name. But you never let him in. You kept Agatha's rules. You never gave the house anything it could use to reach you through him, and so it has kept you the only way it has left.

Alone.

The first year isn't so bad. The house is very good to you. Your meals are laid. Your fires are lit. The morning room is full of sun and the books you loved as a child. You tell yourself you'll walk down to Harrowgill next week, and the week after, and it's never quite the right day. Gabriel comes up every morning, until you stop answering the door. Then he leaves the groceries on the step. Then, one spring, someone else leaves them, and you never find out why.

At night, sometimes, the candles along the corridor go out one by one, and the footsteps stop outside your door, and two soft knocks come.

"Forgive the hour," says the voice from the other side, faint as a voice in a shell. "I only wanted to hear someone."

You never open it. You sit on the floor with your back against the wood, the way you did once, and you talk to him through the door until two in the morning. Sometimes you play cribbage, calling out the cards. He's very bad at cribbage. You never let him in, because you learnt the rules too well, and by the time you understand that the rules were never going to save you, you've forgotten how to break them.

The years go by like that. You stop going to the gate. Then you stop going into the garden. Then you stop coming downstairs. The house doesn't mind. It brings everything to you.

Your hand, when you look at it one day, has become an old woman's hand: thin, spotted, shaking a little. The date on the newspaper on your breakfast tray is a year you don't remember arriving at.

That evening you sit down at the writing desk in the morning room with a sheet of cream paper and a pen. It takes you a long time to begin. The hand you write in is spidery now, a thin copperplate you don't remember learning.

*My dear,*

*If you are reading this, I am dead, and the house has chosen you. I am sorry for both.*

You stop. You look out at the moor, grey and brown and endless, where you haven't walked in forty years. Then you go on writing, because someone must, and because nobody wrote this letter well enough for you.

*Never open the east wing.*

*Never answer him after midnight.*

*And never, whatever happens, love anything in this house.*

You seal it, and address it to a name you've never heard of, and leave it on the hall table for Mr Pryce's successor to find.

Then you go upstairs, and turn down the bed in the room with the lit window, and fill a hot-water bottle, and put it under the quilt.

Somebody ought to have a warm bed, their first night.`,
      ending: true,
      tag: "Ending: The Room Kept Ready"
    },

    e_bargain: {
      locked: true,
      chapter: "Eight — The Ashworth Bargain",
      text: `You don't fight him. You run.

Through the scullery, past the old stone sink, up the back stairs two at a time in the dark. Along the servants' passage, narrow and low, your shoulder brushing damp plaster. You can hear him behind you, calling your name, not angry, just desperate. *Wait. Please. Just wait.* You don't wait.

The door at the end of the passage opens onto the head of the east stair, and it's darker than anywhere you've ever been.

You can't see the steps. You can feel them, just, with your foot: steep, narrow, worn into dips in the middle by two hundred years of feet. You grip the rail and start down, because the east wing door is at the bottom and to the right, and you'll be there in thirty seconds, and it'll be over.

At the turn of the stair, something is waiting.

Not Gabriel. He's still behind you, in the passage, still calling. Not Edmund. Something that has been standing on this step since 1893, patient as a stone, the way a man once stood here in the dark with a promise and a farm and a sick wife at home. Something that knows exactly where your foot is going to go.

The step isn't there.

You fall.

It's quick. There's the rail slipping out of your hand, and the dark tilting, and the edge of a stair, and then nothing, a long soft nothing like sinking into deep water.

You wake up at the bottom of the east stair.

It doesn't hurt. That's the first thing you notice. You'd have thought it would hurt. You get up, carefully, and you feel fine. Better than fine. Light. Warm. The house is warm all round you, closer than a coat.

Then you look down and see the rest of you still lying on the flagstones at the foot of the stairs, one arm flung out, very still.

A torch comes down the stair, slowly. Gabriel. He stops on the last step and looks down at what's lying there, and his face crumples, and he sits down on the step as though his legs have gone. He's saying something over and over. *I'm sorry. I'm sorry. I'm sorry.* He doesn't see you standing right beside him. He never will.

Upstairs, in the east wing, you can hear the ledger's pen scratching on its own. You know what it's writing. *Came home. 31st October.*

"I'm so sorry."

Edmund is at the foot of the stair, where he's always been. He looks at you with such grief in his face that you can't bear it.

"I tried to warn you," he says. "About the stairs. I never found the words in time. I never have." He holds out his hand. It's quite warm now, or you're quite cold; it's hard to say which. "Come on. It's not so bad, after the first hundred years. I'll show you the way up."

You take his hand. You go up the east stair together.

Low Harrow farm has a bad harvest the next year, for the first time in a century and more, and a worse one the year after. The Ashworths sell up in the end and move to Leeds. Molly becomes a vet. She never goes back to the dale. She has a feeling about it she can't explain, and she's wise enough to trust it.

The Ashworth bargain is finished. It's the only one of the house's promises that's ever been kept to the letter.

And sometimes, walking the tops at dusk, people see two figures at the window at the top of the east stair, looking out across the moor, waiting, very patiently, for the next heir to come home.`,
      ending: true,
      tag: "Ending: The Ashworth Bargain"
    },

    e_dawn: {
      locked: true,
      chapter: "Eight — Dawn on the Moor",
      text: `You don't look back. You walk, and when the house is a single lit window behind you, you keep walking.

The moor at night is the house's, every inch of it, and it knows you're trying to leave. The wind gets up and comes at you from every direction at once. The rain comes sideways and then straight up. The track you're following turns into a stream, and then into a bog, and then into a track again, pointing back the way you came. You turn it round. You put the wind on your left cheek. You keep going.

The voices come at midnight.

You feel midnight arrive before you hear any clock: a sharp tug under your breastbone, like a fish-hook set in your chest, pulling you back towards the hill. You stagger with it. Somewhere behind you, in a cold room in the east wing, a pen is trying to finish a date and can't, because the one it's writing about is out here on the moor, walking the wrong way.

Then your name. Over and over, in a hundred voices. Your grandmother. Agatha. Eleanor, young and wretched. And under them all, gentle and warm and very close, a man's voice you'd know anywhere: *Come home. It's cold. I'm here. Please come home.*

You don't answer. You put your head down and you walk.

At three in the morning you're so tired you can't feel your feet, and there's a hollow in the heather beside the track, soft and dry and sheltered from the wind, exactly the size and shape of a person lying down. It would be so easy. Just for a minute. Just to get your breath.

You remember what he told you, or what you were told. *That's how it takes you out here.* You walk past it. It's the hardest thing you've ever done.

At four, a light on the horizon. A warm lit window. You walk straight past that too, with your eyes shut.

At half past six, the sky over the tops turns grey. Then silver. Then a thin pink line along the eastern hills, and the wind drops all at once, and the voices stop mid-word, and the only sound on the moor is a curlew somewhere, calling, and your own breath.

The sun comes up. You're standing on a hilltop you've never seen before, looking down into a green valley with a road in it and a milk lorry going along the road, and there's nothing behind you but heather.

The milk lorry stops for you. The driver takes one look at you and gives you his flask and doesn't ask a single question all the way to Skipton.

You never go back.

Mr Pryce writes. The house can't be sold, he says, apologetically. It can't be let. It stands empty, well kept by nobody, on its hill above Harrowgill. You never answer his letters. You move to a city with bright lights and neighbours through the wall and noise all night, and you never once sleep with the landing light off.

You're alive. You get old in the ordinary way, in the ordinary world, and on most days, that's a kind of victory nobody else would understand.

But every year, on the last day of October, a letter comes. No stamp, no postmark. Cream envelope, thick paper, your name in a spidery copperplate hand. You've never opened one. You burn them in the kitchen sink, unopened, and salt the ash, and run the tap.

The last one, you held up to the light first. You couldn't help it.

Four words, in an elegant, sweeping hand you'd know anywhere.

*Your room is ready.*`,
      ending: true,
      tag: "Ending: Dawn on the Moor"
    }
  }
};
