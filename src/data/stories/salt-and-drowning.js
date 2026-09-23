// Court of Salt and Drowning — full-length edition, rebuilt 2026-09:
// 22 scenes, 8–9 chapters per read-through, 7 endings.
//
// Node ids are new (s*/e*): the seed script only upserts, so readers
// partway through the original version keep its n* nodes and can finish
// it undisturbed, while new readers start at s1.
//
// Engine contract: { startNode, nodes }, each node { chapter, text,
// choices | ending }, chapters 4+ locked. Flags: `guarded` (set in
// chapter four). The sea takes the memory you hold dearest, so in s8
// "Pay the sea its price" reads `guarded`: if you let yourself love Lir,
// the dearest memory is him.
//
// Names: Prince Lir (exiled sea-fae prince), Wren (your sister), Queen
// Nerys (the Tide Queen), Old Bess (the harbour charm-seller).

export const saltAndDrowning = {
  startNode: "s1",
  nodes: {

    s1: {
      chapter: "One — What the Tide Gave Back",
      text: `Your sister has been missing three days when the tide gives her back.

You find her at dawn on the shingle below the harbour wall, lying on her back with her hair spread round her head like weed. She isn't drowned. She isn't quite alive, either. Her skin has gone the pale blue-grey of something that lives underwater, and when you kneel beside her and lift her head, water runs out of her mouth — and then she breathes it back in again, as easily as air, and doesn't wake.

Wren is seventeen. She's afraid of the sea. She has been since she was six, when she fell off the harbour wall and you went in after her and dragged her out by the hair. She wouldn't have gone near the tide-line on her own. Not for anything.

You carry her home. You're a healer; you've carried worse. You lay her in her own bed and do everything you know. Warm stones. Mustard poultice. Willow bark. Your hands are steady. Steadiness is the only thing you've ever had to offer anyone.

While you work, you sing to her. You don't decide to; you never do. It's the fever-song, the one your mother used to sing over you when you were small and burning up — low and tuneless and full of words that don't quite make sense. She died when you were twelve. You've sung it over a hundred sick children since. It's the last piece of her you have, and you always reach for it when you're frightened.

None of it touches Wren. Her pulse doesn't match her heartbeat. It rises and falls with the tide outside your window, and it's getting slower.

By evening, the other healers in the village won't come through your door. They stand on the step and say careful things about sea-sickness and God's will, and you watch them decide how to say *I won't* without actually saying it.

It's Old Bess who tells you the truth.

She sells charms from a salt-stained stall at the end of the harbour, and everyone calls her mad, and everyone buys from her when the ordinary remedies fail. She doesn't need to see Wren. She takes one look at your face and says, "She was taken by the Salt Court."

"The sea-fae are a story."

"The sea-fae," says Old Bess, "are a great deal older than stories, girl." She pours you something that burns. "They take what wanders too close to the tide at dusk. Young ones, mostly, chasing something pretty in the shallows. Most never come back. The ones that do come back like your sister: half-claimed. The sea keeps a thread on them, and pulls, a little every tide, until there's nothing left above the water."

"How do I stop it?"

Old Bess looks at you for a long time. "You go under," she says. "You find the Tide Queen, and you ask her to name her price. And you pay it. Whatever it is."

"What kind of price?"

"The kind you can't get back." She taps the side of her head. "The Salt Court doesn't want gold. It trades in *memories*, girl. A life for a memory. That's the old rate." Her face softens, for Old Bess. "Nobody sane makes that bargain."

You stand on the shingle at midnight with the black water hissing at your feet and your sister's slow, wrong breathing still in your ears.

You've never felt less sane in your life.`,
      choices: [
        { label: "Walk into the water — Go under before you can think better of it. Wren doesn't have time for caution.", next: "s2_under" },
        { label: "Wait at the tide-line — Make the sea come to you. Meet whatever's out there on ground you partly control.", next: "s2_shore" }
      ]
    },

    s2_under: {
      chapter: "Two — Under",
      text: `The water doesn't feel cold once it's past your knees. It feels like being expected — like walking into a room where every candle was lit hours ago, for you.

You go under at the fourth step. The drowning that should happen doesn't. You breathe in salt, cold and heavy as syrup, and your lungs take it without a fight, which frightens you more than drowning would have. The surface closes over your head like a lid.

And the Salt Court opens up below you.

It's built on the sea floor out of things the sea has taken. Wrecked ships, turned upside down into halls. Bridges of ship's rope and whalebone. Towers made of anchors, and a thousand lost lanterns burning cold green light with no flame inside them. Everything is beautiful, and everything was stolen, and the whole city hums with something you can almost hear — a low, endless murmur, like a crowd of people talking in the next room.

He's waiting at the edge of it.

He's tall and very pale, with long dark hair that moves in the current like smoke. He's dressed in grey, like mourning, and his eyes are the flat colour of a winter sea. There's a thin circlet of black pearl on his brow, and a crack running through the middle of it.

"You shouldn't have come here whole," he says. His voice is low and very calm. "Most people who walk in are half-claimed already. Grief does most of the sea's work for it."

"My sister isn't half-claimed. She's dying."

"I know. I felt her come ashore." He studies you. It's the way you'd study a wound — patiently, trying to see how deep it goes. "You're the healer. The one who went into the harbour after her, when she was small."

You stare at him. "How do you know that?"

"Because the sea remembers it," he says. "It took that memory from her, when it took her. It was the brightest thing she had."

The murmuring of the city seems to grow louder. You understand, suddenly, what it is. Not voices. *Memories.* Thousands of them. Stolen, and kept, and whispering.

"Who are you?"

"Lir." A pause, as if he's deciding how much of the rest to give you. "Once, a prince of this court. Now its exile. I live on the edge of it, where the Queen doesn't have to look at me." His mouth moves, not quite a smile. "Which makes me the only person in the Salt Court who'll tell you the truth before you start bargaining. Everything here has a price. If you're not careful, you'll pay it without noticing. So you'll want to decide, quickly, where to start."

Behind him, the lanterns of the city flicker, green and cold.

"You can go to the Tide Queen now," he says. "Nerys. She'll see you — she likes people who come in whole. She'll name a price, and it'll be a terrible one. Or you can come with me to the Drowned Library first, and learn how the sea's bargains really work. Before you're sitting across from her."

"Why would you help me?"

"Because the last time someone came down here to bargain for a sister," Lir says quietly, "nobody helped her. And I've had a very long time to regret that."`,
      choices: [
        { label: "Go straight to the Tide Queen — Wren doesn't have time for lessons. Face Nerys now.", next: "s3_queen" },
        { label: "Go to the Drowned Library with Lir — Learn the rules before you play the game.", next: "s3_library" }
      ]
    },

    s2_shore: {
      chapter: "Two — He Comes to the Shallows",
      text: `You don't go in.

You stand at the tide-line with your arms wrapped round yourself, feet bare in the freezing shallows, and you wait. Some instinct older than fear tells you that walking blind into a bargain is exactly how sisters end up half-drowned in the first place. You won't make it worse by being stupid.

It's past midnight when the sea answers.

The water in front of you goes very flat, like glass. And then a man walks up out of it, as if the seabed were a staircase, with the water sheeting off him and the moon catching him properly for the first time.

He's tall and very pale, with long dark hair that moves as though it's still underwater. He's dressed in grey, like mourning, and his eyes are the flat colour of a winter sea. There's a thin circlet of black pearl on his brow, with a crack running through the middle of it.

"Careful," he says, and there's an odd note of approval in it. "Most people don't think to wait at the edge. They wade in without asking a single useful question, and pay for it later."

"I have a lot of questions."

"I imagine so." He stops where the water meets your ankles. He doesn't come any further, and you get the feeling he can't. "I'm Lir. Once a prince of the Salt Court. Now its exile. I felt your sister come ashore."

"What did they do to her?"

"The sea took her. Not out of cruelty — the tide takes what wanders into it at dusk, the way rot takes fruit left out too long. It kept a thread on her. It'll pull a little more every tide." His voice doesn't soften. You find you're grateful for that. "Three more tides, perhaps four, and there'll be nothing left of her above the water."

"Old Bess said it takes memories. That you trade them."

"Old Bess is right. The Salt Court doesn't want gold. It wants what you remember. When it took your sister, it took the brightest thing she had." He looks at you. "Do you know what that was?"

You don't need to think. "The harbour wall. When she was six. I went in after her."

"Yes," he says quietly. "That one. It's in the Queen's vaults now, with a great many others."

The sea hisses at your feet. Far out, beyond the harbour, the water is glowing very faintly green.

"I can't undo it from here," Lir says. "You'll have to come under. You'll have to face the Tide Queen, Nerys, and she'll name a price. Or I can take you to the Drowned Library first, and show you how the sea's bargains really work. So that when you sit down across from her, you know what she's doing."

"Why would you help me?"

"Because the last time someone came down to bargain for a sister," Lir says, "nobody helped her. I've had a long time to regret that."

He holds out his hand.

You look at it for a long moment — pale and cold and wet, with salt drying in the lines of his palm. Then you take it, and he walks you into the sea.

You don't drown. You breathe the heavy salt again, easier this time, and below you, out of the dark, the Salt Court opens up like a flower: wrecked ships turned into halls, towers of anchors, a thousand lost lanterns burning cold and green. And the whole city murmuring, endlessly, like voices in the next room.

Not voices, Lir tells you. Memories. All of them stolen. All of them whispering.

"So," he says, as your feet touch the sea floor. "Where would you like to start?"`,
      choices: [
        { label: "Go straight to the Tide Queen — Wren doesn't have time for lessons. Face Nerys now.", next: "s3_queen" },
        { label: "Go to the Drowned Library with Lir — Learn the rules before you play the game.", next: "s3_library" }
      ]
    },

    s3_queen: {
      chapter: "Three — The Tide Queen",
      text: `The Tide Queen holds court in the hull of a great warship, turned upside down on the sea floor so that its ribs arch overhead like a cathedral. Her throne is carved from a single enormous shell. The whole court is there — sea-fae in silver and grey and green, with pearls in their hair and fins at their wrists — and they all turn to look at you as Lir brings you in.

Some of them look at him with open contempt. He doesn't seem to notice.

Queen Nerys is beautiful the way a storm is beautiful: all at once, and dangerously. Her hair is white as foam and moves in a current you can't feel. Her eyes are black from edge to edge. Round her neck, on a chain, hangs a small glass vial, and inside it something bright is turning — gold and warm, like a summer afternoon trapped in a bottle.

You know what it is before she speaks. You can feel it. It's Wren's memory. The harbour wall.

"The healer," Nerys says, and her voice is sweet as honey. "Come to buy back her sister. How touching. And brought to me by my disgraced cousin, of all people." Her black eyes slide to Lir. "Still collecting strays, cousin?"

"She came to bargain, Majesty," Lir says evenly. "I brought her to the one person who can."

"So I can." Nerys leans forward. "Your sister is mine, healer. The tide took her fairly. But I'm not unreasonable. The old rate is a memory for a life. Give me one of yours, and she'll wake in her bed tomorrow with her own breath in her lungs."

"Which memory?"

Nerys smiles. It's the most frightening thing you've seen tonight.

"Oh, you don't choose," she says. "The sea chooses. It always takes the one you hold dearest. Whatever you love most, whatever you'd least want to lose — that's the price. That's what makes it worth a life."

You go cold. You think of your mother, who died when you were twelve. Her voice singing in the kitchen. Her hands. It's all you have left of her.

"And if I won't pay?"

"Then your sister drowns in her bed, three tides from now. Or perhaps four." Nerys shrugs. "It's all the same to the sea."

"There's a second way," Lir says quietly. "The old law. Majesty, you know it. A season in her place."

The court murmurs. Nerys's black eyes narrow.

"A season," she says, "bound to my court. Under the water. Unable to surface, unable to leave. And every day of it, the sea takes a little. Not the dearest memory — just memories. Small ones. Whatever it likes." She sits back. "Most people who stay a season go home not quite knowing who they are. But their sister lives. It's a very old bargain. Very few people choose it."

You look at Lir. His face is carefully blank. Too carefully.

"Three tides, healer," says the Tide Queen. "Decide how you'll pay. Or don't, and let the sea decide for you."

She waves a hand. You're dismissed.

Outside the great ship, in the cold green light, you turn on Lir.

"You knew," you say. "About the price. The dearest memory."

"Yes."

"Why didn't you tell me?"

"Because you'd have come anyway." He looks at you with those winter eyes. "And because I hoped there might be a third way. There usually is, down here, if you know where to look. There are rules even Nerys can't break."

"Then where do I look?"

"Two places," Lir says. "The Queen's Archive, where she keeps every memory the sea has ever taken — including your sister's. Or you can test the bargain first. Give the sea something small, and see exactly what it costs you. Before you give it something that matters."`,
      choices: [
        { label: "Break into the Archive — Find Wren's stolen memory, and whatever else Nerys is hiding.", next: "s4_archive" },
        { label: "Test the bargain — Give the sea something small. Find out what it really costs.", next: "s4_test" }
      ]
    },

    s3_library: {
      chapter: "Three — The Drowned Library",
      text: `The Drowned Library is the wreck of a great galleon, sunk so long ago that its timbers have turned to stone. Lir leads you through a hole in its side into a hall of shelves that go up and up into darkness, and every shelf is lined with glass.

Bottles. Jars. Vials, thousands upon thousands of them, each one glowing faintly, each one with something turning slowly inside. A child's birthday. A first kiss. A mother's face. A dog that died. The murmuring you've heard all through the city is loudest here, a soft endless whisper, like a crowd of people all remembering at once.

"Every memory the sea has ever taken," Lir says. "Or copies of them. The Queen keeps the originals in her Archive." He runs his fingers along a shelf, not quite touching the glass. "This is how the Salt Court lives. We don't have warmth down here, or sunlight, or seasons. We have *these*. We live on other people's summers."

You pick up a jar, very carefully. Inside, you can see a girl on a swing, and a man pushing her, and a blue sky. You can almost feel the sun.

"Put it back," Lir says gently. "They're addictive."

You put it back.

"Tell me the rules," you say.

"The old rate is a memory for a life." He leans against a stone shelf. "But you don't choose which memory. The sea does. It always takes the one you hold dearest. Whatever you'd least want to lose. That's what makes it worth a life."

You go very still. You think of your mother, who died when you were twelve. Her voice singing in the kitchen. Her hands. It's all you have left of her.

"There's a second way," he goes on. "A season in her place. Bound to the court. Every day of it, the sea takes a little — not the dearest, just whatever it likes. Most people come home not quite sure who they are. But the sister lives."

"And a third way?"

He's quiet for a moment.

"There might be," he says. "There usually is, down here. The rules are older than the Queen. But I've never found it."

"You've looked."

"Once. For someone else." He doesn't say who. "The Queen is Nerys. My cousin. She wears your sister's memory round her neck — the harbour wall. It's the brightest thing in her collection this year, and she won't give it up easily."

"How do you know about the harbour wall?"

"Because the sea remembers it." He looks at you. "Your sister, six years old, falling off the wall. And you going in after her without a second's thought, and dragging her out by the hair. It's a very bright memory. It's full of you."

You don't know what to say to that. You look away, at the endless shelves of stolen summers.

"Why were you exiled?" you ask.

He's silent for so long you think he won't answer. Then: "A girl came down here once. Like you. For her brother. Nerys named the price, and I told her — the girl — that there was no other way. I was wrong. I found out afterwards. There was a way, and I'd been too lazy, or too loyal, to look for it." His voice is very even. "When I found out, I said so. Loudly. In front of the whole court. So now I live at the edge, and the Queen pretends I'm not there."

"What happened to the girl?"

"She paid," Lir says. "She forgot her brother. He lived. He never knew why she looked at him like a stranger."

The library whispers around you.

"I won't let that happen twice," he says. "So. Two places to start. The Queen's Archive, where the originals are kept — including your sister's. Or you can test the bargain first. Give the sea something small, and see exactly what it costs. Before you give it anything that matters."`,
      choices: [
        { label: "Break into the Archive — Find Wren's stolen memory, and whatever else Nerys is hiding.", next: "s4_archive" },
        { label: "Test the bargain — Give the sea something small. Find out what it really costs.", next: "s4_test" }
      ]
    },

    s4_archive: {
      locked: true,
      chapter: "Four — The Queen's Archive",
      text: `The Archive lies beneath the Queen's own warship, down a spiral of barnacled stairs, behind a door that only opens for the royal blood of the Salt Court.

"Royal blood," you say. "Exiled or not?"

"We're about to find out," says Lir, and presses his palm to the door.

It opens. He lets out a breath he clearly hadn't expected to be holding.

Inside, the Archive is nothing like the library. It's small and cold and very dark, and the memories here don't whisper. They *sing*. Each one hangs in its own globe of water, suspended in the dark like a star, and each one is bright and whole and alive. The oldest, dearest memories the sea has ever taken. Hundreds of them. Maybe thousands.

"This is what she lives on," Lir murmurs. "The dearest ones. She sits down here at night and drinks them."

You find Wren's almost at once. It's hanging near the door, newest of all, glowing warm and gold. You can see yourself in it, younger, soaking wet, hauling a small screaming girl up onto the shingle by her hair. You can feel how Wren felt, in that moment. Not frightened any more. Safe. Absolutely safe, because you were there.

You reach for it.

Lir catches your wrist. "Don't," he says quietly. "Take it without paying, and the sea will take something from you instead. Something worse. That's the one rule even I can't break."

You let your hand fall. You're shaking. He doesn't let go of your wrist. His fingers are cold, but his grip is careful and steady.

That's when you see the other one.

It's hanging in the far corner, dimmer than the rest, as if it's been there a very long time. A tall woman, with dark hair like Lir's, holding a child on her hip in some bright place with a window and a sky. She's laughing. The child is reaching for her face.

"Lir," you say. "Who's that?"

He goes very still.

"My mother," he says after a moment. "She died when I was small. That's the only memory I had of her."

"The sea took it."

"No." His voice is quite calm. "I gave it. It was the price of speaking against the Queen, the night I was exiled. I could have kept my title, if I'd kept quiet. The only way to say what I'd seen — to say it where the court would hear — was to pay for the right." He looks at the dim globe in the corner. "She took the dearest thing I had. And then she exiled me anyway."

You stand in the singing dark with his cold hand on your wrist, and you look at a woman laughing in a window you'll never see, and you understand exactly what he's risking by helping you.

"You could have told me," you say.

"You'd have felt sorry for me." The corner of his mouth moves. "I find I'd rather you didn't."

"I don't feel sorry for you," you say. "I feel—"

You stop. You don't know how that sentence ends. He's looking at you in the dark, very close, the Archive's cold light catching in his eyes.

Somewhere above, a door slams. Footsteps on the barnacled stair. Many of them.

"The Queen's guard," Lir says. "They'll have felt the door open."

And there's no time to decide what you feel, or what to do about it. Only a moment — his hand on your wrist, your heart going too fast, the dim memory of his mother singing in the corner.`,
      choices: [
        { label: "Pull your hand back — Keep your head. You're here for Wren, not for him.", next: "s5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Hold on to him — Take his hand properly, and run.", next: "s5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    s4_test: {
      locked: true,
      chapter: "Four — A Small Thing",
      text: `Lir takes you to the Memory Pool, in a cave at the edge of the Salt Court where hardly anyone goes.

It's very still. The water in it doesn't move with the current. It's darker than the rest of the sea, and when you look into it you see nothing at all — not your reflection, not the bottom. Only dark.

"Give it something small," Lir says. "Something you won't miss. Put your hand in, and think of it, and let it go."

You kneel on the rock. You choose carefully. Something trivial. The taste of the apple tart the baker makes on market days — good, but you've had better. You hold it in your mind and put your hand into the pool.

The water is warm. Warmer than blood. You feel the memory go out of you, gently, like a thread being drawn out of cloth.

And then you feel the sea reach for something else.

It happens so fast. The pool doesn't just take the tart. It reaches past it, deeper, curious, like a hand rummaging in a drawer. It brushes against your mother singing in the kitchen. It *tugs*.

You yank your hand out with a cry. You're shaking all over. Lir is beside you in an instant, his hands on your shoulders.

"What happened?"

"It tried to take more." Your teeth are chattering. "It went looking. For the thing I — the thing I care about."

"It always does." His voice is very gentle. "That's why I brought you here. So you'd know. The sea doesn't bargain fairly. Even when you give it something small, it's always looking for the thing you love most."

You try to remember the baker's apple tart. You can't. You know you used to like it — you can remember *that* you liked it — but when you reach for the taste, there's just a gap. A small, neat hole where something used to be.

You start to cry. You don't mean to. It's not the tart. It's everything — Wren's slow breathing, the Queen's black eyes, three tides, the sea's hand brushing against your mother's voice.

Lir doesn't say anything. He just sits down on the cold rock beside you and puts his arm round you, and lets you cry into the grey silk of his shoulder. He's cold all the way through. But he doesn't let go.

When you finally stop, he says quietly: "I gave it my mother."

You lift your head.

"The night I was exiled. She died when I was small, and I had one memory of her — laughing, in a window, holding me. It was the price of speaking against the Queen in open court. I paid it so that the court would hear me." His winter eyes are fixed on the pool. "I don't know what she looked like any more. I know I loved her. That's all that's left. The shape of it."

"I'm sorry."

"Don't be. I chose it." He looks at you. "I'd rather you went in with your eyes open than paid the way I did, not knowing what I'd lose until it was gone."

You're very close to him. His arm is still round you. There's salt drying on his cheek, and you can't tell if it's the sea or something else.

Voices echo from somewhere outside the cave. The Queen's guard, patrolling. They mustn't find you here.

He doesn't move. Neither do you. And there's a moment — just one — where you could lean into him, or away.`,
      choices: [
        { label: "Pull away — Keep your head. You're here for Wren, not for him.", next: "s5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Lean into him — Stay, just for a moment longer, and let him hold on.", next: "s5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    s5_guarded: {
      locked: true,
      chapter: "Five — What You Won't Give Away",
      text: `You pull away.

He lets you. He always lets you; you're beginning to understand that about him. He steps back without a word, and when the guard's footsteps have faded, he leads you out through the back ways of the Salt Court to his tidehouse at the very edge of the city.

It's small. A wrecked fishing boat, turned on its side, half-buried in white sand. Inside there's a hammock, a table made from a ship's door, and hundreds of shells arranged on the shelves in careful, colourful rows. It's the only place in the whole court that doesn't feel stolen.

"You collect shells," you say.

"They're the only things down here nobody misses." He sets a kettle of something over a lamp. It doesn't boil, exactly. It begins to smell of seaweed and honey. "Everything else in this city once belonged to someone."

You sit at the table and make yourself think like a healer. Symptoms. Causes. Treatments. The sea has a thread on Wren. The Queen holds the thread. There are three ways to cut it, and every one costs something terrible.

"I need to think it through," you say. "Properly. Not with — whatever this is — getting in the way."

He doesn't pretend not to understand. "Of course."

"I mean it. I'm here for my sister."

"I know you are." He sets a cup in front of you. His voice is carefully even. "I've spent a long time at the edge of things, healer. I know how to be useful without being in the way."

You drink. It's warm and sweet and faintly salty. You find yourself watching him move around the small room — the careful way he takes up no more space than he needs. The way he turns a shell over in his long pale fingers before he puts it back, exactly where it was.

It's a lonely way to live. You recognise it. You've lived a smaller version of it yourself, in a village that needs you and never quite wants you, a healer with blood under her fingernails and no one to go home to but a sister who's now drowning in her sleep.

"Tell me the options again," you say, because it's easier than the thing you were thinking.

He tells you. Three tides — two, now. There are two ways left to try before the price has to be paid.

"You can go before the Queen again, openly, in front of the court," he says. "Challenge her terms. There are laws even she has to respect in public, and she hates being made to look ungenerous. Or—" he hesitates.

"Or?"

"Or you go back up. To the surface. To your sister." He turns a shell in his fingers. "You're a healer. The best I've seen in a long time — I can tell from how you look at a wound. The sea's thread on her is magic, but it's working through her body. Salt in the lungs. Tide in the blood. If anyone could draw it out without paying the Queen at all, it'd be someone who knows bodies as well as the sea knows memories."

"You think it's possible?"

"I think nobody's ever tried," he says. "Nobody who comes down here thinks of themselves as anything but a beggar. You don't."

He says it without flattery. As a fact. You look at him across the table and feel something warm and dangerous move in your chest, and you set it very firmly aside.

"If I go back up," you say, "will you come?"

"If you want me to." His winter eyes meet yours. "I can walk in the shallows for a night, perhaps two. Not longer."

"Then that's two options," you say. "The Queen's court, or my sister's bedside."`,
      choices: [
        { label: "Challenge the Queen in open court — Make Nerys name her terms in front of everyone.", next: "s6_court" },
        { label: "Go back to Wren — Take Lir to the surface and try to cure her as a healer, without the sea.", next: "s6_cure" }
      ]
    },

    s5_close: {
      locked: true,
      chapter: "Five — The Tidehouse",
      text: `You don't let go.

His hand is cold in yours, and then it isn't. You're running, through the back ways of the Salt Court, past towers of anchors and bridges of whalebone, until the guards' voices fade behind you and he pulls you through a gap in a wall of white sand, and you're inside.

His tidehouse is a wrecked fishing boat, turned on its side and half-buried in the sand. Inside there's a hammock, a table made from a ship's door, and hundreds of shells arranged on the shelves in careful, colourful rows.

You're both breathing hard. You haven't let go of his hand.

"You collect shells," you say. It's a ridiculous thing to say.

"They're the only things down here nobody misses." His voice is not quite steady. "Everything else in this city once belonged to someone."

You look at him. He looks at you. Somewhere outside, the sea murmurs its thousand stolen memories.

"I'm going to do something," you say, "and I want you to know it's not because I'm frightened, or grateful, or — any of it. It's because I want to."

"All right," he says, very softly.

Kissing him underwater is strange. His mouth is cool and tastes of salt, and there's no breath between you, only the thick not-quite-water that fills both your lungs. His hair drifts round your face like smoke. His hands come up and cup your jaw as if you're something fragile he's afraid of breaking — and then you pull him closer, and he stops being afraid.

When you finally break apart, he rests his forehead against yours.

"I've spent a very long time," he says, "being careful not to want things."

"How's that going?"

He laughs — a real laugh, startled out of him. It's the first time you've heard it. It sounds like it's been a long time since he's heard it either.

You stay in the tidehouse through the slow green hours the Salt Court has instead of night. He makes something warm that smells of seaweed and honey. You lie in his hammock with your head on his chest, and he tells you about the sea — the whales that sing in the deep, the lost ships that still ring their bells at the equinox, the cold currents that come all the way from the ice. You tell him about Wren. About your mother singing in the kitchen. About being a healer in a village that needs you and never quite wants you.

"I know that feeling," he says quietly, into your hair.

At some point, you fall asleep. When you wake, he's watching you, and his face is soft in a way you don't think anyone else in the Salt Court has ever seen.

"Two tides," he says gently. "We have to decide."

You sit up. He tells you the two options he's been turning over while you slept.

"You can go before the Queen again, in open court. Challenge her terms. There are laws even she has to respect in public, and she hates to look ungenerous." He hesitates. "Or you go back to the surface. To Wren. You're a healer — the sea's thread is working through her body, salt in her lungs and tide in her blood. If anyone could draw it out without paying the Queen at all, it'd be someone who knows bodies as well as the sea knows memories."

"Would you come?"

"I can walk in the shallows for a night. Perhaps two." He takes your hand. "I'd come."

You look at your joined hands — his pale and cold, yours warm and scarred from your work. And you feel a small, cold thread of fear go through you that has nothing to do with Wren.

The sea takes the memory you hold dearest.

You're very afraid you know what that is now.`,
      choices: [
        { label: "Challenge the Queen in open court — Make Nerys name her terms in front of everyone.", next: "s6_court" },
        { label: "Go back to Wren — Take Lir to the surface and try to cure her as a healer, without the sea.", next: "s6_cure" }
      ]
    },

    s6_court: {
      locked: true,
      chapter: "Six — Before the Throne",
      text: `The great hall of the upturned warship is full. Word has gone round the Salt Court that the healer has come back to challenge the Queen, and the exile is standing beside her, and nobody wants to miss it.

Nerys sits on her shell throne with Wren's memory glowing at her throat. She's smiling.

"Healer," she says. "You've decided how to pay."

At her throat, the vial turns. You can see yourself inside it, very small, dragging a screaming six-year-old up the shingle. The court sees you looking. A few of them smile. It's the brightest thing in the Queen's collection this year, and everyone knows it.

"I've come to question the price." You make your voice carry, the way you do when you're telling a family something they don't want to hear. "The old law says a memory for a life. It doesn't say the dearest memory. You added that. The sea doesn't choose — *you* choose, and you always choose the dearest, because the dearest ones are the ones you like to drink."

The court goes very quiet.

Lir, beside you, doesn't move. But you feel him go still.

Nerys's smile doesn't change. Her black eyes do.

"What a clever little healer," she says. "Who told you that? My cousin? He always did like to talk." She rises from her throne. "Very well. Let us say — for argument's sake — that I *do* choose. What of it? I am the Tide Queen. The sea is mine. Its bargains are mine."

"Then change them," you say. "In front of your court. Show them you're generous."

For a long moment, the Queen looks at you. Then she laughs, delighted, and claps her hands.

"Oh, I *like* you," she says. "Very well. Let's be generous. Let's be very generous." She comes down the steps of the throne, slowly, until she's standing in front of you. She smells of cold water and something sweet. "I'll let you keep every memory you have. Every single one. Your mother. Your sister. All of it."

"And the price?"

Nerys looks past you, at Lir.

"Him," she says softly. "My cousin comes home. Properly. Not an exile on the edge of things — back in the palace, at my side, as my consort. Bound to me. His voice mine, his loyalty mine, his memories mine to drink as I please. He's been a thorn in my court for a very long time. I'd like him back where I can keep him."

The court murmurs. Lir doesn't say a word.

"Give me my cousin," says the Tide Queen, "and your sister wakes tomorrow, and you keep everything you are. That's generous, don't you think? Everyone will say so."

You turn. Lir is looking at you. His face is perfectly calm, and his eyes are not.

"Or," Nerys adds lightly, "you could invoke the Law of the Tide. You're entitled to, having challenged me. Stand against me, here, in my own court, will against will. Whoever breaks first loses everything." She smiles. "Nobody's won in four hundred years. But you're very welcome to try."

She gestures to a side chamber, curtained with kelp.

"Or come and talk it over with me in private," she says. "Just you and me. Without all these people watching. I find these things are always easier to decide when no one's looking."`,
      choices: [
        { label: "Hear her private terms — Go into the side chamber with the Tide Queen, alone.", next: "s7_nerys" },
        { label: "Invoke the Law of the Tide — Stand against Nerys, will against will, in front of her whole court.", next: "s7_challenge" }
      ]
    },

    s6_cure: {
      locked: true,
      chapter: "Six — The Healer's Way",
      text: `You walk up out of the sea at dawn with Lir beside you, and the whole village sees.

They stand in their doorways as you come up the shingle — the healer who went into the water, and the pale sea-fae prince walking beside her with the sea still running off his hair. Nobody speaks. Nobody comes near. Old Bess, at her stall, takes one look and starts laughing, and doesn't stop until you're out of sight.

Wren is worse. Much worse. Her skin is grey-blue all the way to her fingertips now. The water in her lungs is rising and falling with the tide outside, and each breath is longer and slower than the last. Two tides left, perhaps less.

Lir stops in the doorway of her room. He's never been inside a human house. He looks at the patched blankets, the herbs hanging from the beams, the little painted boat on the windowsill that Wren made when she was nine. Then he looks at Wren, and something moves across his face.

"She's so young," he says quietly.

"Seventeen."

"The sea doesn't care how old they are." He comes and kneels by the bed, on the other side from you. "Tell me what you need."

So you work. You work the way you've never worked in your life.

You treat it like a drowning. You tip her on her side and help the water out of her lungs, and Lir lays a cold hand on her chest and *pulls*, somehow, and the water comes up out of her in a long glittering stream and vanishes in the air like mist. For a moment she breathes air — real air, ragged and harsh — and then the tide turns outside and her lungs fill again.

You treat it like a fever. You pack her in warm stones and brew willow bark and foxglove, and Lir sits at the window and sings to the tide, very low, in a language you don't know. Her pulse falters. Steadies. Falls into time with your heartbeat for three long minutes before the sea drags it back.

You treat it like a poison. You salt her skin. You bleed a little from her wrist, and the blood is pale as seawater, and Lir catches it in a shell and pours it into the sea.

By midday you're both exhausted. Wren is no better. But she's no worse, either — and once, briefly, just after noon, her eyes open, and she looks straight at you, and says your name.

Then they close again.

You sit on the floor by her bed with your head against the mattress, and Lir sits beside you, close enough that your shoulders touch. His skin is starting to crack at the edges, dry and white with salt. He's been out of the water too long.

"It's working," he says. "A little. Everything you do loosens the thread. But the sea pulls it tight again with every tide." He looks at the window, at the grey water beyond the harbour. "You'd need the whole of one tide. Every minute of it, without stopping. Pulling her back faster than the sea can pull her down."

"Then that's what I'll do."

"It might kill you," he says. "Healers have died of less. And I don't know if I can stay out of the water long enough to help."

"And the other way?"

He's quiet. "Go back under. Face the Queen. Pay what she asks." He looks at you. "It'd be easier. Much easier. You wouldn't have to fight for every breath she takes."

Wren sighs in her sleep. Water trickles from the corner of her mouth.

"I've spent my whole life doing things the hard way," you say. "I don't know how to do anything else."`,
      choices: [
        { label: "Keep fighting — your way — Stay at her bedside through the whole tide. Heal her without the sea.", next: "s7_shore" },
        { label: "Go back under — It isn't working fast enough. Take Lir home and face the Queen.", next: "s7_nerys" }
      ]
    },

    s7_nerys: {
      locked: true,
      chapter: "Seven — The Queen's Terms",
      text: `The Tide Queen's private chamber is hung with kelp and lit by a single lantern, and it smells of cold water and something sweet, like rot.

Nerys sits on a low couch with Wren's memory glowing at her throat. She doesn't offer you a seat. Somewhere beyond the kelp curtain, you know Lir is waiting. You can almost feel him.

"Let's not waste time, healer," she says. "You've seen how it goes. The sea takes what you love most — or you stay a season and lose yourself a little every day. Neither of those is what you want. So let me offer a third."

"Go on."

"My cousin." Nerys smiles. "He's been at the edge of my court for a very long time, making speeches, turning my people's heads with his conscience. I want him back where I can keep him. At my side. As my consort. Bound to me — his voice mine, his loyalty mine, his memories mine to drink as I please."

"He'd never agree."

"He won't have to." Her black eyes glitter. "He's in love with you. I saw it the moment you walked into my hall. If *you* give him to me — if you say the words, *I give you Lir* — the sea will take it as a true bargain. A life for a life. His freedom for your sister's breath." She leans back. "And you keep everything. Every memory. Your mother. Your sister. Him, even — you'll remember him perfectly. You just won't have him."

You stand very still in the cold room.

"Why would I do that?"

"Because it's the only bargain on the table that doesn't cost *you* anything." Nerys shrugs. "Think about it. What do you owe him? He's a stranger. Fae. You've known him barely two days. He'll be well kept. I'm not cruel to my own blood, whatever he tells you." She smiles. "Your sister will wake in her bed tomorrow. And you'll go home whole. It's really very simple."

You think about it. You make yourself. You think about Wren, grey-blue and drowning. About your mother singing in the kitchen, a memory you'd give almost anything to keep.

And you think about Lir. A tidehouse full of shells, the only things nobody misses. A man who gave away his mother to say one true thing out loud. Who has done nothing, since the moment you met him, but put himself between you and the sea.

"He gave you his mother," you say slowly. "The night he was exiled. He paid you the dearest thing he had so the court would hear him. And you exiled him anyway."

Nerys's smile goes a little thin. "He broke the court's peace. He paid for it."

"And now you want the rest of him."

"I want what's mine." She stands. Her white hair moves in a current you can't feel. "Choose, healer. Give me Lir, and walk out of here with everything you love. Or refuse, and go back to paying the sea's price. I promise you, it will not be generous."

Through the kelp curtain, faint and steady, you hear something. It's Lir, humming. The same low, wordless song he sang to the tide. You don't think he knows he's doing it.

He's not asking you to choose him. He never would.`,
      choices: [
        { label: "Give her Lir — Your sister lives. You keep every memory. Just not him.", next: "e_drowned" },
        { label: "Refuse the Queen — Walk out through the curtain, take his hand, and go to the Memory Pool to pay the sea's price.", next: "s8" }
      ]
    },

    s7_challenge: {
      locked: true,
      chapter: "Seven — The Law of the Tide",
      text: `"I invoke the Law of the Tide," you say.

The court gasps. Nerys's smile vanishes.

"Very well," she says softly. "You'll regret it."

They clear the centre of the hall. You stand on one side, and the Tide Queen on the other, and the whole court of the sea draws back against the walls to watch. Lir tries to step forward with you. Two guards hold him back.

"The law is simple," Nerys says. "We each reach into the sea. We each pull. Whoever holds on longest wins. The loser forfeits everything."

"Everything?"

"Everything." Her black eyes gleam. "If I lose, I give up my throne and every memory in my Archive. If you lose, you give me every memory you have. Every single one. You'll walk out of here as empty as a shell."

She lifts her hand. The water of the hall *moves*.

It's not a current. It's weight. The whole ocean pressing down on you at once, cold and endless and old. You feel it reaching into you — not for your body. For your mind. Your mother's voice. Wren on the harbour wall. The smell of willow bark and your own kitchen. The sea pulls on all of it at once, and it's so much stronger than you, so much older, and you feel yourself starting to come apart at the seams.

You hold on.

You hold on the way you hold on to a patient who's bleeding out. The way you held on to Wren's hair when she was six and the harbour was trying to take her. You hold on to your mother singing in the kitchen. You hold on to every face you've ever saved and every one you couldn't.

And you hold on to him.

You don't mean to. But he's there, suddenly, in the middle of it — a tall pale figure in grey, turning a shell over in his long fingers — and the sea pulls on that memory hardest of all. It's the brightest thing in you. You didn't know until this moment.

You hold on to it with everything you have.

Across the hall, Nerys cries out.

You open your eyes. The Tide Queen is on her knees. Her white hair is floating round her face. The glass vial at her throat has cracked, and Wren's memory is spilling out of it, warm and gold, like sunlight.

The court is silent. Nobody has won the Law of the Tide in four hundred years.

"Take it," Nerys whispers. "Take it, then. The throne. The Archive. All of it. It's yours."

You stand in the middle of the hall, shaking, with your sister's memory drifting towards you like a warm golden fish. The whole court of the sea is looking at you — the healer from the village, who just beat their Queen.

Lir breaks free of the guards and comes to you. He takes your face in his hands.

"You won," he says. His voice is wondering. "Do you understand? You *won*. The Salt Court is yours, if you want it."

"I don't want a court," you say. "I want my sister."

"You can have both." He glances at the silent crowd. "Or you can take her memory and go home, and leave them to choose a new queen. But you'll need to decide. And either way—" his hands tighten slightly — "the sea still has its thread on her. Beating Nerys doesn't cut it. Only the old price does. The Memory Pool."

The court waits. Nerys kneels, broken, at your feet.`,
      choices: [
        { label: "Take the throne — Accept the Salt Court. A healer queen, who'll change the sea's bargains for good.", next: "e_saltqueen" },
        { label: "Take Wren's memory and go to the Pool — Leave the throne. Pay the sea's price for her, and be done with it.", next: "s8" }
      ]
    },

    s7_shore: {
      locked: true,
      chapter: "Seven — The Long Tide",
      text: `The tide turns at dusk, and you begin.

You don't stop. Not once, through the whole of it. Six hours of the sea coming in, and six hours going out, and you fight it for every minute.

You clear Wren's lungs every time they fill. You keep her warm, and when the stones cool you hold her against you to share your own heat. You press on the points in her wrists and throat that you learned from your mother, and you talk to her, constantly, about anything — about the harbour wall and the painted boat and the time she fell asleep in the bread oven. You don't let her go quiet. You don't let her go under.

Lir stays until he can't.

He sits at the window and sings to the sea. It's a low, wordless song, and every time he sings, the tide outside falters, and Wren's breath comes a little easier. He sings for hours. His voice cracks. His skin dries and splits at his knuckles and along his cheekbones, white with salt, and still he sings.

At midnight, he falls.

You catch him. He's grey. His lips are cracked. "Need the water," he manages. "Just for — a little while. I'll come back."

"Go," you say. "Go. I've got her."

He looks at you, and then at Wren, and then at you again. And then he kisses your forehead, once, very lightly, and goes. You hear the door. You hear him on the shingle. You hear the splash as the sea takes him back.

And then you're alone with your sister and the tide.

The second half of the night is the worst of your life. Without him singing, the sea pulls harder. Twice, Wren stops breathing. Twice, you bring her back — tipping her, pressing on her chest, breathing into her mouth, until she coughs up seawater and gasps. Your arms are shaking. Your vision is going grey at the edges. You think, very clearly, around four in the morning, *I am going to die doing this*, and you decide that's all right, as long as she doesn't.

The sky starts to lighten.

The tide is turning. You feel it through the floor, the whole weight of the sea hesitating, gathering itself to come back in. And Wren, in your arms, draws a breath.

Air. Real air. Not water.

Her skin is pink at the lips. Her pulse — you press your fingers to her wrist — her pulse has stopped keeping time with the tide. It's beating to her own heart.

But it's faint. So faint. And the sea is coming back in, and you can feel it reaching, one last time, for the thread it's still got on her.

You could hold on. One more tide. You don't know if you have one more tide in you.

Or you could go down to the shore, where the water is already rising, and call for Lir. And walk into the sea, with him, and pay the price at the Memory Pool, and know for certain.

Wren's eyelids flicker. "Is that you?" she whispers. "Did you come in after me again?"

"Always," you say, and your voice breaks. "Always."`,
      choices: [
        { label: "Hold on — one more tide — Finish it your way. Don't let the sea have her, or anything else.", next: "e_healer" },
        { label: "Go down to the shore — Call for Lir. Go to the Memory Pool and make certain.", next: "s8" }
      ]
    },

    s8: {
      locked: true,
      chapter: "Eight — The Memory Pool",
      text: `The Memory Pool is very still.

You kneel beside it on the cold rock at the edge of the Salt Court, with Lir kneeling on the other side. Above you, somewhere, your sister is fighting for every breath. Below you, the pool is dark and endless and patient, and it doesn't reflect your face.

"This is where it's paid," Lir says quietly. "Whatever you decide. Put your hand in, and the sea takes its price, and the thread on Wren is cut. She wakes in her own bed with her own breath. And she gets back the memory it took from her — the harbour wall. All of it."

"And the price is the memory I hold dearest."

"Yes."

You look into the dark water. You've been dreading this moment since the Tide Queen first spoke. Your mother singing in the kitchen, her hands, her voice — the last of her, the only thing you have. You'd been so sure the sea would take her.

But you're not sure any more.

You look up at Lir. He's watching you, pale and still, his winter eyes very dark in the dim cave. And you feel something in your chest that you've been trying very hard not to feel since the first moment you saw him.

You don't know which one it is, any more. Which memory you hold dearest. That's the terrible thing. You won't know until the sea takes it.

"There's another way," Lir says.

You look at him.

"The old law says *a* memory for a life. It doesn't say whose." He's very calm. Too calm. "If someone else offers — freely, willingly, their own dearest memory, in your place — the sea will take it. It's been done. Not often. Once or twice in all the years I know of."

"Your dearest memory," you say.

"I don't have many left." A faint smile. "Nerys has most of them. But I have one new one. It's very bright. I think it would be enough."

It takes you a moment to understand what he means. When you do, your throat closes.

"No."

"It would be my choice."

"You'd forget me."

"I'd forget meeting you," he says gently. "The shore, the library, the tidehouse — all of it. I'd wake up tomorrow at the edge of the court with a gap I couldn't explain. But you'd remember. And Wren would live. And you'd keep your mother." He looks down at the pool. "I've given the sea my dearest memory before. I know I can survive it."

"And there's the season," you say, because you can't bear to look at what he's offering. "The old way. I stay in her place. The sea takes a little every day."

"You'd come out of it not quite yourself," he says. "But you'd come out. And I'd be here. Every day of it."

You kneel between them — the dark pool, and the pale prince — and the sea murmurs its thousand stolen memories all around you.

Somewhere above you, the tide is turning. You can feel it in the rock under your knees, the whole slow weight of the sea gathering itself. Wren has one more tide in her. Perhaps less.

You think of your mother's fever-song, the one you sang over Wren the first night. You think of a tidehouse full of shells. You think of a season under the water, forgetting a little every day, and a pale prince reading your own life back to you in the evenings.

Three ways. Every one of them costs something you can't get back.`,
      choices: [
        { label: "Pay the sea its price — Put your hand in the pool. Let it take whatever you love most.", branchOn: { flag: "guarded", ifTrue: "e_mother", ifFalse: "e_seakeeps" } },
        { label: "Let Lir pay — Let him give the sea his dearest memory in your place.", next: "e_tideturns" },
        { label: "Stay a season — Take Wren's place under the water, and let the sea take its time.", next: "e_longseason" }
      ]
    },

    e_tideturns: {
      locked: true,
      chapter: "Nine — The Tide Turns",
      text: `You can't stop him. You try. He takes both your hands in his, very gently, and holds them still.

"Let me," he says. "Please. I've spent so long giving the sea things I didn't choose to give. Let me give it one I do."

He puts his hand into the pool.

You watch it happen. You watch the light go out of his eyes — not all of it, just something, just a brightness that was there a moment ago and suddenly isn't. The pool shivers. Far above, you feel it: the sea's thread on your sister, snapping like a cut line.

Lir sits back on his heels. He looks at you, puzzled and polite. The way a stranger looks at a stranger.

"I'm sorry," he says. "Have we met?"

You'd known it was coming. It still feels like drowning.

"Yes," you say. You're crying. You don't try to stop. "Yes. We have."

He studies your face for a long moment. Then he frowns, very slightly, and touches his own chest, just over his heart, as if something there hurts and he can't think why.

"How strange," he says. "I feel as though I ought to know you. As though I'd be very sad, if I didn't."

And the pool begins to glow.

It starts at the centre and spreads out, warm and gold, until the whole dark water is shining like sunlight. You've never seen anything like it. Neither, from his face, has he. The murmuring of the Salt Court falls silent all at once, every stolen memory in the city holding its breath.

Something rises out of the pool. It's a memory. Not his — not the one he gave. An old one, very dim, as if it's been lost for a long time. A tall woman with dark hair, laughing in a window, holding a child on her hip.

His mother.

"The sea gives back," you whisper. You'd never heard of it. You don't think anyone has. "When the gift is freely made. It gives back the one it took unfairly."

The memory drifts across the pool and settles into him like light settling into water. You watch him remember her. You watch it go through him — the window, the sky, the laugh. His face crumples. He puts both hands over his mouth.

And then, a moment later, he looks at you again. And it's not a stranger looking.

It's not everything. He doesn't remember the shore, or the library, or the tidehouse. But he looks at you the way he looked at you before, as if some part of him has held on to the shape of you, the way he held on to the shape of loving his mother when everything else was gone.

"I don't remember you," he says slowly. "But I know I loved you. I can feel where it was."

"That's all right," you say. "I remember enough for both of us."

You take him home. Up through the sea, to a village where your sister is sitting up in bed eating soup and asking why her hair smells of seaweed. Old Bess laughs herself sick at her stall.

You teach him about you again. It takes a whole summer. He's a very good student. By autumn he knows the name of every herb hanging from your kitchen beams, and the story of the harbour wall, and exactly how you like to be kissed.

He still touches his chest sometimes, over his heart, where the gap is.

"Does it hurt?" you ask him once.

"No," he says, and pulls you close. "It's filling up."`,
      ending: true,
      tag: "Ending: The Tide Turns"
    },

    e_seakeeps: {
      locked: true,
      chapter: "Nine — What the Sea Keeps",
      text: `You put your hand into the pool.

It's warm. Warmer than blood. You feel the sea reach into you, curious, rummaging, like a hand in a drawer. It passes over the baker's apple tart. It passes over the smell of your kitchen. It brushes against your mother singing — and you brace yourself — and it *passes her by*.

It goes looking for something brighter.

And it finds him.

You feel it take hold. A tidehouse full of shells. A pale hand holding yours. A man with winter eyes laughing, startled, as if he'd forgotten he knew how. The sea wraps itself round all of it, and pulls, gently, like drawing a thread out of cloth.

You try to hold on. You can't. It's already going.

Far above, you feel the sea's thread on your sister snap.

You sit back on your heels. You're in a cave, beside a dark pool. You don't know how you got here. Across the pool, a tall, pale sea-fae man is kneeling, looking at you with an expression you can't read.

You don't know him.

"Is it done?" you ask. "My sister — Wren. Is she all right?"

"She's all right," he says. His voice is very gentle, and very careful. "She's waking up in her own bed. She'll have her memory back — the harbour wall. You don't need to worry about her any more."

"Thank you." You look at him, puzzled. "I'm sorry. Have we met?"

For a moment, his face does something complicated. Then it's gone, so fast you almost miss it.

"Briefly," he says. "I helped you find your way. It was nothing."

He walks you to the surface himself. He doesn't say much. At the edge of the sea, where the water turns to shingle, he stops, the way the fae always stop, as if there's a line he can't cross.

"Go home," he says. "Your sister's waiting."

You go. Wren is sitting up in bed, pink-cheeked, furious at having slept for three days. Old Bess comes round with a pie and looks at you very strangely and doesn't say why.

It's a good life, after that. You're busier than ever — word gets round that the healer went into the sea and came back. Wren takes up fishing, of all things, and isn't afraid of the water any more.

But sometimes, in the evenings, you walk down to the shingle and stand at the tide-line. You don't know why. There's a feeling in your chest, there, like something that used to fit and doesn't any more. Like the shape of a shell pressed into sand after the tide's taken it.

And sometimes, far out in the harbour, you see someone. A tall, pale figure, standing in the shallows at dusk. Watching.

He never comes closer. You never wave.

One evening, you find a shell on your doorstep. Small and white and perfectly shaped, the kind of shell nobody would ever miss. There's no note.

The next week, there's another.

You keep them on your windowsill, in a careful row. You don't know why they make you want to cry.

You don't know that he remembers everything. That he stands in the shallows every dusk because he can't stand anywhere else. That he's decided, after a great deal of thought, to be patient.

He's very good at patience. He's had a lot of practice. And he's beginning, very slowly, shell by shell, to court you all over again.`,
      ending: true,
      tag: "Ending: What the Sea Keeps"
    },

    e_mother: {
      locked: true,
      chapter: "Nine — Salt and Memory",
      text: `You put your hand into the pool.

It's warm. Warmer than blood. You feel the sea reach into you, curious, rummaging, like a hand in a drawer. It passes over the baker's apple tart. It passes over a pale prince in a tidehouse — you've kept him at arm's length, and the sea can tell; it doesn't linger there. It goes looking for something older. Something you've held on to since you were twelve years old.

It finds your mother.

You feel it take hold. Her voice, singing in the kitchen. The smell of bread and willow bark. Her hands, flour to the wrist. The fever-song, the one you've sung over a hundred sick children since, the one you sang over Wren three nights ago.

You try to hold on. You can't. It's already going.

Far above, you feel the sea's thread on your sister snap.

When you open your eyes, you're kneeling by a dark pool, and your face is wet, and you don't know why.

"Healer," Lir says quietly. He's kneeling across the pool from you. "Do you know me?"

"Lir," you say. "Of course I know you." You wipe your face. "Why am I crying?"

He doesn't answer at once. Then he says, very gently: "Tell me about your mother."

You open your mouth. And there's nothing. You know you had a mother. You know she died when you were twelve. You know you loved her — you can feel the place where it was, like a room with all the furniture taken out. But her face, her voice, her hands—

Nothing. Just the shape of it.

"Oh," you say. "Oh."

He comes round the pool and sits with you. He doesn't say anything. He just lets you lean against him. He knows exactly what this is. He's the only person in either world who does.

You go home. Wren is sitting up in bed, pink-cheeked and furious at having slept three days, and she flings her arms round you and says, "You came in after me again, didn't you? I dreamed it. The harbour wall."

"Always," you say. And you mean it, and you hold her, and you're glad. So glad. It was worth it. You'd do it again.

But at night, alone, you sing your fever-song to yourself, and you don't know where it came from.

Lir visits. He comes up to the shallows at dusk, sometimes, and you walk out to meet him. It's slow, whatever this is. You kept him at arm's length for a reason, and some of those reasons are still there. But he's the only one you can talk to about the empty room in your chest, and you find, as the months go by, that you're walking down to the shingle more and more often.

One evening, he brings you a shell. Inside it, faint and dim, is a memory.

"I went to the Library," he says. "It's only a copy. The sea makes them sometimes, from the ones it takes. It isn't all of her."

You hold the shell up to your ear. And very faint, very far away, you hear a woman singing in a kitchen.

You don't remember her. But you know the song.

"Thank you," you whisper.

"I know what it is," he says quietly, "to have only the shape of someone. I didn't want you to have only that."

You take his hand. For the first time, you don't let go.`,
      ending: true,
      tag: "Ending: Salt and Memory"
    },

    e_longseason: {
      locked: true,
      chapter: "Nine — The Long Season",
      text: `"A season," you say. "I'll stay a season. In her place."

Lir closes his eyes. When he opens them, he nods. He doesn't argue. You love him a little for that.

It's done at the pool. You put your hand into the water, and instead of taking, the sea *holds*. You feel it close round you, gently, like a hand round a wrist. Far above, you feel the thread on your sister shift — from her to you. She takes a breath of real air. You take a breath of the sea.

And you stay.

A season, under the water, is a strange thing. There's no sun to count days by. There are only tides, coming and going, and the slow green hours the Salt Court has instead of night. You live in Lir's tidehouse, because Nerys can't stop you and it's the only place in the court that doesn't feel stolen. You help him arrange his shells. You learn the songs the whales sing in the deep. You become, to your own surprise, the Salt Court's healer — there are sick sea-fae too, it turns out, and nobody has ever tried to treat them.

And every day, the sea takes a little.

Small things, at first. The name of a street in your village. The colour of your front door. How you take your tea. You write things down, to keep them. Lir reads them back to you in the evenings, patiently, as many times as you need.

Then larger things. Your father's face. The first patient you lost. The words to a song you used to sing.

You're frightened, some nights. He holds you when you are. "I'm here," he says, over and over, into your hair. "I'm still here. I'll remember for you."

He does. He remembers everything. The harbour wall. Your mother in the kitchen. Old Bess and her terrible charms. When you forget, he tells you, and when you forget again, he tells you again, and he never once sounds tired of it.

And somewhere in the middle of the season, without either of you noticing exactly when, you stop being afraid.

When the season ends, the sea lets you go.

You walk up out of the water at dawn, onto the shingle below the harbour wall. You don't remember everything. Some things are gone for good. But you know your name, and you know the girl running down the shingle towards you, shouting it. Your sister. Wren. She's taller than you remember. She's alive.

She throws her arms round you. You hold on.

Behind you, a tall pale figure stands in the shallows. Waiting. He can't come any further.

You turn round. You look at him for a long moment — the dark hair moving like smoke, the winter eyes, the cracked circlet of pearl. You don't remember everything. But you remember him. You'd remember him, you think, if the sea took every other thing you've ever known.

"Go on," he calls, gently. "Go home. You've earned it."

"I'll be back," you tell him. "Tomorrow. At dusk."

He smiles. It reaches all the way to his eyes.

"I know," he says. "I'll remember."`,
      ending: true,
      tag: "Ending: The Long Season"
    },

    e_drowned: {
      locked: true,
      chapter: "Eight — The Consort",
      text: `"I give you Lir," you say.

The words are very quiet. They're the loudest thing you've ever said.

Beyond the kelp curtain, the humming stops.

Nerys smiles. She holds out her hand, and the glass vial at her throat opens, and your sister's memory — the harbour wall, warm and gold — floats free and drifts into your palms. It's lighter than you expected. It's warm as sunlight.

"A true bargain," says the Tide Queen. "The sea accepts it."

Far above, you feel the thread on Wren snap. She'll wake in her own bed tomorrow, breathing air, remembering the day her sister went into the harbour after her.

The curtain parts. Lir stands there.

He doesn't look angry. He doesn't look betrayed. He looks at you for a long moment with those winter eyes, and there's no reproach in them at all. Only a kind of quiet understanding, as if he's known, all along, that this was the likeliest end — and has decided, even now, not to blame you for it.

"Cousin," says Nerys warmly. "Welcome home."

Something happens to him then. You watch it. A circlet appears on his brow — not the cracked black pearl, but white and whole and cold. His back straightens. His eyes go very calm and very distant, like the sea on a still day, when you can't see anything beneath the surface at all.

"Majesty," he says. His voice is perfectly courteous. It's not his voice.

"Walk our guest to the shore," says Nerys. "Then come back to me."

He walks you to the shore. He doesn't speak. At the tide-line, where the water turns to shingle, he stops.

"Lir," you say. "I—"

"Your sister is waiting," he says pleasantly. "Go home, healer."

He turns and walks back into the sea. He doesn't look back. You watch until the water closes over his dark hair.

Wren wakes that morning, pink-cheeked and furious at having slept three days, and she throws her arms round you and says, "You came in after me again. I dreamed it. The harbour wall."

"Always," you say. And you hold her, and you're glad.

Old Bess comes round with a pie that evening. She puts it on the table and looks at you for a long time with her sharp, mad old eyes.

"You went under whole," she says at last. "And you came back whole. That's never happened, in all my years." She doesn't sound pleased. "What did it cost you, girl?"

You don't answer. She nods slowly, as if you have.

"The sea always gets paid," she says. "One way or another. It's just a question of who pays."

You keep every memory. That was the bargain. Your mother singing in the kitchen. Wren on the harbour wall. And him — every moment of him, perfectly. The shore. The shells. The low wordless song he sang to the tide.

That's the part the Queen didn't mention. That you'd remember him perfectly, forever, and never have him again.

Sometimes, on still nights, you walk down to the shingle. Far out, beyond the harbour, the sea glows faintly green. And sometimes — only sometimes — if the wind is right, you hear it. Very low. Very far away.

Someone humming.

You never know if it's him, or only the sea, remembering.`,
      ending: true,
      tag: "Ending: The Consort"
    },

    e_saltqueen: {
      locked: true,
      chapter: "Eight — The Salt Queen",
      text: `"I'll take it," you say.

The court goes utterly still. Then, one by one, starting at the back of the hall, the sea-fae begin to kneel.

Lir is the last. He looks at you with something that might be wonder, and then he goes down on one knee in front of you, in the middle of the great hall, and bows his head.

"Majesty," he says softly.

"Get up," you tell him. "Don't you dare."

He gets up. He's smiling.

They put the Queen's circlet on your head — white pearl, cold as the deep — and you sit on the shell throne with your sister's memory glowing warm in your cupped hands. The first thing you do as Queen is reach into the sea — it answers to you now, cold and vast and obedient — and find the thread it holds on your sister, and cut it. Far above, in a cottage by the harbour, Wren draws a breath of air and opens her eyes.

Then you make your first decree as Queen of the Salt Court, while the old Queen is led away and the whole court watches.

"The old rate stands," you say. "A memory for a life. But no one chooses which memory any more. Not the Queen. Not the sea. The person paying chooses. Freely. Or they don't pay at all."

The court murmurs. Some of them are appalled. Some of them are weeping.

"And the Archive," you go on. "Every dearest memory the Queens have ever taken. They go back."

It takes a year. It takes you and Lir and every sea-fae who'll help, diving up to the surface night after night with glowing globes of memory in their arms, finding the villages and the families they came from. Some of the people are long dead. Some are old. One is an old woman in a fishing village in the north, who opens her door to a pale sea-fae prince holding a globe of light, and weeps when she sees what's inside it: her brother, young and alive, laughing on a beach.

Lir's mother is the last one you return. He's put it off, all year. In the end, you take his hand and put the globe into it yourself, and hold him while it sinks into him like light into water.

You don't go home. Not to stay. You visit — Wren is well, and has taken up fishing, and isn't afraid of the water any more, and teases you mercilessly about your crown. But the Salt Court has sick people nobody has ever treated, and a sea full of stolen things to put right, and a prince who knows every shell and current and whale-song in it.

"You didn't want a court," Lir says one night, in the tidehouse you've never moved out of. "You said so. You only wanted your sister."

"I did," you say. "I had her the moment I won. Everything after that was just me being a healer."

"Healing a whole sea?"

"It needed it." You lean against him. "It's the worst patient I've ever had."

He laughs, and kisses you, and the sea murmurs round you both. It doesn't sound like stolen voices any more.

It sounds like a sea that's beginning, very slowly, to remember what it's like to give things back.`,
      ending: true,
      tag: "Ending: The Salt Queen"
    },

    e_healer: {
      locked: true,
      chapter: "Eight — The Healer's Way",
      text: `You hold on.

One more tide. You don't know if you have it in you. You do it anyway.

The sea comes back in at dawn, and it comes hard. It's angry now, if the sea can be angry. It pulls at Wren like an undertow, and you pull back. You clear her lungs. You warm her. You press on the points your mother taught you. You talk to her until your voice goes, and then you whisper, and then you just hold her and breathe for both of you.

Around midday, you realise you can't feel your hands.

Around mid-afternoon, you realise you can't see very well. The room is going grey at the edges.

You hold on.

And some time near evening, as the tide reaches its height and hesitates, you hear something outside the window. Low and wordless and very close. Someone singing to the sea.

He came back.

He's sitting on the doorstep, soaking wet, fresh from the water. His skin is already cracking again. He's singing anyway, his cracked voice rising and falling with the tide, and every note of it pushes the sea back a little further.

Between the two of you, the tide breaks.

You feel it happen. The sea's thread on your sister — the one it's been pulling tight for five days — goes slack, and then it frays, and then it simply isn't there any more. Wren takes a breath of air. Then another. Then she opens her eyes and says, very clearly, "Why does everything smell of seaweed?"

You start laughing. You can't stop. You're laughing and crying at once, holding her, and she's patting your back in confusion, and outside the window Lir has stopped singing and has put his head down on his knees.

You didn't pay the sea anything. Not a memory. Not a season. Not a single thing you love.

You beat it.

Afterwards, when Wren is asleep — properly asleep, breathing air — you go out and sit on the doorstep with him. His skin is white with salt. He needs to go back. He hasn't yet.

"Nobody's ever done that," he says. He sounds almost frightened. "Nobody. In all the years I know of."

"Nobody tried," you say. "You said so."

He looks at you. You look at him. You're both too tired to be careful any more.

"I'll need to go back to the water soon," he says.

"I know."

"But I could come up again. Tomorrow. At dusk." A pause. "If you wanted."

"I'd want," you say.

He comes up the next evening, and the one after. Old Bess sells you a charm she swears will keep his skin from cracking, which doesn't work at all. Wren is appalled, then curious, then insufferably pleased with herself for having been drowned by the sea into a sister's love story.

And word spreads, the way word does, through every fishing village on the coast. There's a healer, they say, who fought the sea for her sister and won. Who'll come to anyone the tide has half-claimed, and sit with them all night, and bring them back.

They come to your door from miles away. You never turn anyone away.

And some nights, when a tide is especially bad, there's a pale prince sitting on the doorstep, singing to the sea. Helping you win.`,
      ending: true,
      tag: "Ending: The Healer's Way"
    }

  }
};
