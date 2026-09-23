// The Last Warden's Heir — full-length edition, rebuilt 2026-09:
// 22 scenes, 8–9 chapters per read-through, 7 endings.
//
// Node ids are new (w*/e*): the seed script only upserts, so readers
// partway through the original version keep its n* nodes and can finish
// it undisturbed, while new readers start at w1.
//
// Engine contract: { startNode, nodes }, each node { chapter, text,
// choices | ending }, chapters 4+ locked. Flags: `guarded` (set in
// chapter four). In w8, "Share the keeping" reads it: sharing only takes
// if you let Morrow close.
//
// Names: Morrow (the keeper, once human, betrothed to the first Warden,
// Isolde), Warden Elspeth (your mother), Brother Aldous (witch-hunter of
// the Order of the Lantern), the Hollow (what lies behind the seal).
// Village: Thornwick.

export const wardensHeir = {
  startNode: "w1",
  nodes: {

    w1: {
      chapter: "One — The Last Rite",
      text: `Your mother dies the way every Warden before her has died: in the middle of a sentence.

You find her on the flagstones of the great hall at midnight, in the circle of chalk and salt where she's been working the rite for three nights without sleep. There's blood on her lips. There's blood on the chalk. Outside, the wardstones on the hill are humming so loud you can feel it in your teeth.

"The rite," she says, gripping your hands hard enough to bruise. "I didn't finish. The seal is — it's cracked, love. It'll hold nine nights. Perhaps ten. You have to finish it. At the dark of the moon."

"I don't know how."

"He'll come." Her eyes are going unfocused. "He'll come to you within the week. Don't be afraid of what he is. Be afraid of what happens if the bond breaks. And it will, if you let fear make the choice instead of you." Her grip tightens. "He isn't—"

She's gone before she finishes. Her hand goes slack in yours between one heartbeat and the next, and you're left kneeling in a circle of chalk, in a silence that feels older than the stones outside.

*He isn't* what?

You bury her under the wardstones, alone, the way Wardens have always buried their dead. The stones ring the burial ground on the hill above Thornwick, grey and leaning, and every one of them is carved with names. Three hundred years of women, mothers and daughters, each bound from birth to guard the seal between this world and the thing on the other side of it. Your mother's name is the newest. You carve it yourself.

You grew up on the stories, told at bedsides in careful, reverent voices. The Hollow, the hungry dark that lies under the hill. The first Warden, Isolde, who sealed it away. And the demon she bound to guard the seal — bound to her blood, forever — because the Hollow could only be held shut by something as old and terrible as itself.

You didn't grow up expecting to inherit a bond with that demon. You grew up expecting decades more of your mother's steady, exhausted competence standing between you and all of it.

You spend six nights after the funeral doing the only thing you know how to do with grief this large: preparing. You sharpen blades that haven't needed sharpening in years. You read your mother's journals until your eyes ache. Hundreds of pages in her small, cramped hand, and she only ever mentions *him* in the vaguest possible terms. *He came at dusk. He took tea. The stones were quiet after.* As if even in private she didn't want to commit more than that to paper.

The village doesn't come near the house. They never have, not really. People are grateful to Wardens the way they're grateful to wells: from a respectful distance.

On the seventh night, something knocks on your door.

Three knocks. Unhurried. The fist sounds entirely, unnervingly human.

The wardstones on the hill have gone silent. You didn't notice when. They're never silent.

The knock comes again. Patient. As if whatever's standing on your step has all the time in the world, and intends to spend it waiting for you.`,
      choices: [
        { label: "Open the door with a blade drawn — Meet whatever this is the way three centuries of Wardens trained you to.", next: "w2_blade" },
        { label: "Open the door with empty hands — Your mother said don't be afraid of what he is. Trust her, this once.", next: "w2_bare" }
      ]
    },

    w2_blade: {
      chapter: "Two — What Answers the Door",
      text: `You open the door with the blade already moving.

Three centuries of training do exactly what they were built to do. Your body is swinging before your mind catches up, the edge aimed for the throat of whatever's on your step.

He catches your wrist.

Not with any great speed. It's stranger than that — as if the blade simply forgot what it was doing halfway through the swing and let itself be stopped. His hand is warm. His grip is careful. He holds your wrist exactly as long as it takes you to stop pulling, and then he lets go.

He looks nothing like the stories. No horns. No smoke. Just a tall, tired-looking man in a long dark coat, with rain in his black hair and a face that might have been handsome, once, before it learned how to be sad. It's his eyes that are wrong. They're the grey-violet of a stormcloud at dusk, and there's a faint light moving in them, like a candle seen through a window.

"Your mother usually offered tea first," he says.

You stare at him.

"But the blade's more honest, I suppose," he goes on, "given the circumstances. I imagine you have questions the tea would only delay." He tilts his head. His voice is low and courteous and very tired. "My name is Morrow. I'm sorry about Elspeth. I felt her go."

"You're the demon."

"I'm what your family has been bound to for three hundred years." He doesn't step forward. His hands are open and visible at his sides, the way you'd approach a frightened animal. "Which isn't quite the same thing, though I understand why it feels like it should be tonight."

"She said you'd come within the week."

"She was always right about me. It was very inconvenient." The ghost of a smile, gone at once. "I'd have come sooner. I didn't want to intrude on the burying."

You're still holding the blade. He glances at it, and then back at you, without any particular concern.

"The seal is cracked," he says. "You'll have felt it. The stones are quiet — that's never a good sign. Your mother died in the middle of the renewal, and the rite has to be finished at the dark of the moon, or the crack will widen. Nine nights from tonight." He pauses. "And there's something else. There's a man in the village inn. A witch-hunter, from the Order of the Lantern. Brother Aldous. He arrived the day after the funeral, and he's been asking everyone he meets about *the demon of the stones*."

"He's come for you."

"He's come to kill me." Morrow says it quite calmly. "Which, if he manages it, will break the bond. And the seal with it. And what's behind the seal will walk out of the hill and down into Thornwick, and there won't be a Warden left to stop it." He looks at you. "I thought you should know. Before you decide what to do with that blade."

Behind you, the house is dark and cold and smells of funeral candles.

You lower the blade. You don't sheathe it.

"There's a kettle," you hear yourself say. "Or there's the hill. You can show me the crack."`,
      choices: [
        { label: "The kitchen table — Let him in. Hear everything, over the tea your mother always made.", next: "w3_table" },
        { label: "The wardstones — Go up the hill tonight. Show me what's broken.", next: "w3_stones" }
      ]
    },

    w2_bare: {
      chapter: "Two — Empty Hands",
      text: `You open the door with nothing in your hands.

It's the hardest thing you've ever done. Every instinct your mother trained into you says *blade first, questions after*. But she also said *don't be afraid of what he is*, with her last breath, and you've decided — somewhere between the funeral and this moment — that you're going to believe her.

He's standing on the step in the rain.

He looks nothing like the stories. No horns. No smoke. Just a tall, tired man in a long dark coat, with rain in his black hair and a face that might have been handsome, once, before it learned how to be sad. It's his eyes that are wrong: the grey-violet of a stormcloud at dusk, with a faint light moving in them, like a candle through a window.

He looks at your empty hands. Something in his face changes.

"You didn't bring a blade," he says quietly.

"Should I have?"

"Your mother always did. The first twenty years, anyway." He hesitates, as if he's genuinely unsure of his welcome. "It took her a long time to stop reaching for it."

"And then?"

"And then she offered me tea." A faint smile, there and gone. "My name is Morrow. I'm sorry about Elspeth. I felt her go."

"You're the demon."

"I'm what your bloodline was founded to guard against. And what it's been bound to for three hundred years." He doesn't step forward. "Your mother eventually decided those two things weren't quite the contradiction they sound like. I hope you'll come to the same conclusion. But I won't blame you if you don't."

Somewhere behind you, in the dark house, the last of the funeral candles gutters. You smell wax and dried rosemary and grief. He doesn't look past you into it. He seems to understand exactly how much of it isn't his to see.

"She was trying to tell me something," you say. "When she died. *He isn't—*" You stop. "She didn't finish."

He goes very quiet.

"No," he says at last. "She wouldn't have. She was always careful with me. Even at the end." He lifts his head. "She died in the middle of the renewal. The seal is cracked. You'll have felt it — the stones have gone quiet. It has to be finished at the dark of the moon, nine nights from now, or the crack will widen."

"And then?"

"And then the Hollow walks out of the hill." His voice is very calm. "And there's a second problem. A man arrived at the village inn the day after the funeral. A witch-hunter, from the Order of the Lantern. Brother Aldous. He's been asking about *the demon of the stones*."

"He's come to kill you."

"He's come to try. If he succeeds, the bond breaks, and the seal with it." He glances at the dark tree line beyond your garden. "I'd rather not discuss the details on a doorstep. I'm told that things in the dark have very good hearing."

The rain drips from the eaves. He waits. He doesn't ask to come in. He looks, you think, like a man who has waited on a great many doorsteps and never once assumed he'd be let through.

"There's a kettle," you say. "Or there's the hill. You can show me the crack."`,
      choices: [
        { label: "The kitchen table — Let him in. Hear everything, over the tea your mother always made.", next: "w3_table" },
        { label: "The wardstones — Go up the hill tonight. Show me what's broken.", next: "w3_stones" }
      ]
    },

    w3_table: {
      chapter: "Three — Tea at Midnight",
      text: `He sits at your kitchen table as if he's done it a thousand times. You realise, putting the kettle on, that he probably has.

You make tea the way your mother made it: strong, with honey, in the blue cups. You set one in front of him without thinking. He wraps his hands round it. He doesn't drink. He just holds it, the way you'd hold a small warm animal, and you understand that he's not doing it for the tea.

"She always used the blue cups," he says quietly.

"She told you her kitchen secrets?"

"We had a long time to talk." He looks at the table, at the knife-scars and burn-marks of three centuries of Wardens. "Thirty-one years, with her. She despised me for the first twenty. She said so, frequently, at this table."

"And after twenty?"

"After twenty, she stopped despising me and started beating me at cards." His mouth moves. "She cheated."

You laugh. You don't mean to. It comes out cracked and wet, the first time you've laughed since you found her on the flagstones. He looks at you the way people look at the first green shoot after a long winter.

"Tell me about the rite," you say, before you can cry. "All of it."

"The seal isn't a wall," he says. "It's a door. Held shut from both sides — by the Warden, out here, and by me, in there." He sets the cup down. "Every generation, the door has to be renewed. At the dark of the moon, the Warden and the keeper walk into the Between — the space inside the seal, between this world and the Hollow — and carry the lantern to its heart, and relight it. Your mother was halfway through when her heart gave out. The lantern is guttering. In nine nights, it goes out."

"And we have to walk into the Between. Together."

"Yes."

"What's in there?"

"The Hollow." He meets your eyes. "It can't reach you, as long as the lantern burns. But it will talk to you. It will offer you things. It's very good at knowing what people want." His voice is quiet. "It offered your mother her own mother back, once. She nearly took it."

You think of the blue cups, and your mother's hands, and her voice saying *he isn't—*

"Her journals," you say. "She barely mentions you. Hundreds of pages, and it's all *he came at dusk* and *the stones were quiet after*. As if she was afraid to write anything else."

"She was." He looks at you steadily. "Not of me. Of what it would mean if anyone else read it."

"Read what?"

He doesn't answer. He picks up the cup again and holds it, and you watch a man who has been alone for a very long time try to decide how much of himself to hand to a stranger.

"There's a locked chest in her room," he says at last. "Under the bed. She kept the real journals there. The ones she didn't want the Order to find if they ever came." He sets the cup down, very carefully. "I think you should read them. Before you decide anything about me."

"And Brother Aldous?"

"Is in the village inn, telling everyone who'll listen that your mother was a witch and I'm a devil, and that Thornwick will be free as soon as I'm dead." He almost smiles. "He's quite persuasive. People are starting to listen."

Outside, the wind moves in the dark. Somewhere up on the hill, a wardstone gives a single low hum, and then falls silent again.

"Nine nights," you say.

"Nine nights," he agrees.`,
      choices: [
        { label: "Read your mother's real journals — Open the locked chest. Find out what she was afraid to write down.", next: "w4_journals" },
        { label: "Go down to the village — Face Brother Aldous before he turns Thornwick against you.", next: "w4_village" }
      ]
    },

    w3_stones: {
      chapter: "Three — The Crack in the Stones",
      text: `The wardstones stand in a ring on the hill above Thornwick, grey and leaning in the rain. You've been coming up here all your life. You've never seen them like this.

They're silent. Every one of them. And in the centre of the ring, where the grass has always grown thick and green, there's a scar in the earth. A long black crack, no wider than your hand, running across the hilltop like a fault in glass.

It's breathing.

You can see it. The edges of the crack move, slowly, in and out, like the lips of something asleep. The air above it is colder than the rain. When you get close, you can hear something — not quite a sound, more a pressure, low and patient, like a voice at the very bottom of a well.

"Don't go closer," Morrow says quietly. "It's listening."

"The Hollow."

"What's left of the seal is holding it. For now." He stands at the edge of the ring, rain running off his coat. "Your mother died halfway through the renewal. At the dark of the moon, the Warden and the keeper walk into the Between — the space inside the seal — and carry a lantern to its heart, and relight it. She didn't finish. The lantern is guttering. In nine nights, it goes out, and this—" he nods at the crack — "opens."

"And we have to walk in there. Together."

"Yes."

You look at the stones. Three hundred years of names. Your mother's is the newest, the cuts still sharp and pale.

Without quite meaning to, you reach out and lay your palm on it.

The stone is warm.

And you hear her.

Not her voice, exactly. The memory of her voice, caught in the stone like water caught in a sponge. *Steady, love. Steady hands. You always had steady hands.* It's the thing she used to say when you were small and learning to carve wards, and your fingers shook.

You snatch your hand away. You're shaking.

"The stones remember," Morrow says gently. He hasn't moved. "Every Warden. That's what they're for. Every woman who's held the seal is still in them, a little. It's how the seal holds — not just the lantern. All of them, together, holding the line." He looks at your mother's name. "She's there now, too."

"You could have warned me."

"I'm sorry." And he sounds it. "I forget, sometimes, how new all this is to you. I've been standing on this hill a very long time."

You put your hand back on the stone. This time you're ready. Your mother's warmth, faint and steady. And beneath it, fainter still, older and older, a whole chorus of women, three hundred years of them, humming like the stones used to hum.

And one more thing. At the very bottom. The oldest voice of all. You can't make out words, but you can feel the shape of it: grief. A grief so old and so deep that it's worn smooth, like a stone in a river.

"Who's that?" you ask. "The oldest one?"

Morrow is very still.

"Isolde," he says. "The first Warden." He doesn't elaborate.

Down in the valley, a light is moving along the road from Thornwick. A lantern, swinging. Someone walking towards the hill.

"That will be Brother Aldous," Morrow says. "He's been coming up every night, getting a little closer each time. He hasn't found the courage to walk into the ring yet." His eyes glint in the dark. "He will."

You look at the crack, breathing in the grass. You look at the lantern on the road.

"Nine nights," you say.

"Nine nights," he agrees.`,
      choices: [
        { label: "Read your mother's real journals — There must be more than *he came at dusk*. Find out what she was afraid to write down.", next: "w4_journals" },
        { label: "Go down to the village — Face Brother Aldous before he turns Thornwick against you.", next: "w4_village" }
      ]
    },

    w4_journals: {
      locked: true,
      chapter: "Four — What She Didn't Write",
      text: `The real journals are in a locked chest under your mother's bed, wrapped in oilcloth, hidden where a Warden hides things she doesn't want the world to find. There are dozens of them. And they're full of him.

*He came at dusk. He was quiet tonight. I asked him about the old days and for once he answered.*

*He laughed today. I don't think I've heard him laugh in the twenty years I've known him. It was at one of my jokes. It wasn't a good joke.*

*I think I've been wrong about him for a very long time.*

You read through the night. Morrow sits on the other side of the fire and doesn't interrupt. Some pages make you laugh. Some make you cry. At one point you look up and find him watching you with an expression you can't read, and he looks away.

And near the end, in your mother's cramped hand, you find it.

*I went to the old archive in the chapel crypt today. Isolde's own records. I don't think any Warden has read them in two hundred years. I understand now why he never talks about her.*

*He wasn't a demon. He was never a demon. He was a man.*

*He was hers. Her betrothed. When the Hollow came, three hundred years ago, the seal needed a keeper on the other side — someone to hold the door shut from within, forever. She was going to go herself. He wouldn't let her. He walked into the Between in her place, and the dark changed him, and she spent the rest of her life on the other side of a door she couldn't open, keeping him company through it.*

*The stories made him a demon because it was easier than telling the truth: that the first Warden sealed away the man she loved, and every Warden since has been guarding him.*

*He isn't the thing we guard against. He is the door.*

The last entry is from the night she died.

*Tonight I finish the rite. I've decided to tell my daughter everything. Whatever the Order would say. Whatever it costs. She deserves to know that she's not inheriting a demon. She's inheriting a friend.*

You put the journal down. Your hands are shaking.

"Is it true?" you ask.

He doesn't look at you. He's looking into the fire.

"Isolde," he says, after a very long time. "Her name was Isolde. We were to be married at midsummer. The Hollow came at midwinter." His voice is quite steady, which is somehow worse. "I don't remember her face any more. The Between takes things, over the years. I remember that she laughed like your mother. I remember that I'd have done it a hundred times over."

"Three hundred years."

"Three hundred and six." He finally looks at you. The candle-light in his eyes is very bright. "I've watched every one of your family grow up, grow old and die. I've sat at this table with every one of them. Some of them hated me. Some of them were kind. Your mother was the only one who ever went looking for the truth." He almost smiles. "She always did want to know things."

"She was going to tell me."

"Yes."

You look at him — at a man who walked into the dark three hundred years ago so the woman he loved wouldn't have to, and has been holding the door shut ever since — and something in your chest turns over.

He's very close. You don't remember either of you moving. The fire's burning low, and his hand is resting on the table, a few inches from yours.

"Nobody's looked at me like that," he says quietly, "in a very long time."

"Like what?"

"Like I'm a person."`,
      choices: [
        { label: "Keep your distance — This is too much, too soon. You have a seal to save and a witch-hunter to face.", next: "w5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Close the distance — Put your hand over his. Let him be a person, just for tonight.", next: "w5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    w4_village: {
      locked: true,
      chapter: "Four — The Witch-Hunter",
      text: `You walk down into Thornwick at noon, alone. Morrow can't come — he stopped at the edge of the churchyard, where the consecrated ground begins, and stood there looking at it the way you'd look at a wall of fire.

"I'll wait," he said. "Be careful. Aldous is cleverer than he looks."

The village inn is full. People turn to look at you when you come in — the new Warden, in her mother's grey coat — and then look away. Nobody greets you. They never do.

Brother Aldous is sitting by the fire.

He's younger than you expected, perhaps forty, with a shaved head and a gentle face and the lantern-sigil of his Order embroidered on his grey robe. There's a sword propped against his chair: long and pale and very plain, with a hilt like a candle.

"Warden," he says warmly, and stands. "I'm so sorry for your loss. Please — sit."

"I'll stand."

"Of course." He sits back down, unoffended. "You'll have heard why I'm here. I won't insult you by pretending otherwise." He spreads his hands. "Your family has been bound to a demon for three hundred years. That's not a secret. It's in every Order record from here to the coast. I've come to set you free."

"By killing him."

"By ending him." He touches the pale sword. "This is the Lantern's Edge. It's the only blade in the world that can. The Order has kept it for three hundred years, waiting for a Warden who'd let us use it." His gentle eyes are very steady. "Your mother never would. She was too far under his influence by the end. I think you know that."

"If you kill him, the seal breaks."

"That's what he's told you." Aldous shakes his head sadly. "It's what they always say. *Kill me, and something worse gets out.* It's the oldest lie there is. There is no Hollow, Warden. There never was. There's only a demon who's kept your family in chains for three centuries by making you believe he's the only thing standing between you and the dark."

The inn has gone very quiet. Everyone is listening.

"Four generations back," Aldous goes on, "one of your ancestors refused him. Barred him from the grounds entirely. Eleven days later she was dead on the hilltop. Do you know how the Order recorded it?" He leans forward. "Killed by the demon, for daring to say no."

You feel the room turn. The villagers are looking at you now — not with fear, but with something worse. Pity. As if you're the one who needs saving.

You go back up the hill at dusk with your heart pounding. Morrow is still waiting at the edge of the churchyard. When you tell him what Aldous said, he closes his eyes.

"Her name was Margery," he says. "Four generations back. She refused the bond. She tried to hold the seal on her own, with the stones alone. It cracked. She died closing it herself, on the hilltop, alone, because I couldn't get to her through the wards she'd set against me." His voice is very quiet. "I carved her name on the stone with my own hands."

"Why didn't you tell Aldous that?"

"Because he wouldn't believe me." He opens his eyes. "And because you'd have to decide for yourself which of us is lying. I'd rather you did."

You look at him in the dusk — a man who stood all afternoon at the edge of holy ground, waiting, because he couldn't cross it to follow you. Something in you turns over.

"Show me," you say. "Everything. The real story. Whatever my mother knew."

So he tells you. In the dusk, on the hill, among the stones. That he was a man, once. That three hundred years ago he was betrothed to a woman named Isolde, the first Warden. That when the Hollow came, the seal needed a keeper on the far side, forever — and she was going to go herself, and he wouldn't let her. That he walked into the dark in her place, and it changed him, and the stories made him a demon because it was easier than the truth.

"I don't remember her face any more," he says. "The Between takes things. I remember that I'd have done it a hundred times over."

He's standing very close. The stones are silent around you both.

"Nobody's looked at me like that," he says quietly, "in a very long time."

"Like what?"

"Like I'm a person."`,
      choices: [
        { label: "Keep your distance — This is too much, too soon. You have a seal to save and a witch-hunter to face.", next: "w5_guarded", setFlag: { name: "guarded", value: true } },
        { label: "Close the distance — Take his hand. Let him be a person, just for tonight.", next: "w5_close", setFlag: { name: "guarded", value: false } }
      ]
    },

    w5_guarded: {
      locked: true,
      chapter: "Five — Duty, Nothing Else",
      text: `You step back.

"I need to think," you say. "About all of it. I can't — I don't know what to do with this yet."

"Of course." He steps back too, at once, as if he's been expecting it. As if every Warden for three hundred years has done exactly this. "Take all the time you need. Well. Eight nights of it."

The days go by like that. He keeps precisely the distance you've asked for. He comes at dusk, the way the journals say he always did. He takes tea — he still never drinks it — and he answers every question you ask him, carefully and completely, and he leaves again before the moon is fully up.

You learn the rite together. He teaches you the words and the steps and the lantern-song, the way your mother should have. And he tells you the thing the stories never mention: that the wardstones remember. Every Warden who has ever held the seal is still in them, a little, like warmth left in a chair. It's how the seal really holds — not the lantern alone, but all of them, together, holding the line. You practise in the great hall, in the circle of chalk where she died, and every night you get a little steadier.

You learn other things, too, without meaning to. That he can't cross consecrated ground. That he hums when he thinks nobody's listening. That he knows the name of every Warden on every stone, and something about each of them — who was brave, who was funny, who sang out of tune.

"You loved them," you say one night. "All of them."

"I knew them." He turns his cup slowly on the table. "It's much the same thing, over three hundred years."

"Even the ones who hated you?"

"Especially those." A faint smile. "They were usually the most interesting."

You find yourself watching him at the table, the way the candlelight catches in his strange eyes, and you make yourself look away. You don't know what you'd do with this feeling if you let it in. You have eight nights to save the seal, and a witch-hunter in the village who gets bolder every day, and a mother barely two weeks in the ground. There's no room for anything else.

He doesn't push. He never once pushes.

On the fourth night, the stones on the hill start to scream.

Not hum. Scream — a high, thin, terrible sound that brings you running out into the garden in your nightgown. Up on the hill, the crack has widened. You can see it from here, a black line across the hilltop, breathing.

Morrow is already there when you get to the top. He's standing at the edge of the crack with his hands spread, and the air around him is shimmering, and you realise he's *holding it*. Holding the crack shut with nothing but his own will, the way he's done for three hundred years.

"It's getting stronger," he says through his teeth. "Aldous — he's been up here. He's been salting the stones. Order salt. It's weakening the seal."

"He's trying to prove there's no Hollow."

"He's going to prove there is." His face is grey with effort. "Four nights. Perhaps less. We can't wait for the dark of the moon."

You stand beside him in the screaming dark, and for the first time you see him properly: not a demon, not a door. A man, alone on a hill, holding back the dark with his bare hands.

"What do we do?"

"Two choices." He doesn't look away from the crack. "We start the rite early. Tonight, or tomorrow. Walk into the Between before the lantern's ready, and hope it's enough." He takes a ragged breath. "Or we stop Aldous first. Before he salts the stones again. Before he convinces the whole village to come up here with torches."`,
      choices: [
        { label: "Prepare the rite — Ready yourself to walk into the Between. Learn everything the stones can teach you.", next: "w6_rite" },
        { label: "Stop Brother Aldous — Deal with the witch-hunter before he breaks the seal himself.", next: "w6_aldous" }
      ]
    },

    w5_close: {
      locked: true,
      chapter: "Five — More Than the Terms",
      text: `You put your hand over his.

He goes very still. His hand is warm — warmer than you expected, warmer than your own after a week of cold nights alone in this house.

"Is this all right?" you ask.

"I don't know," he says honestly. "Nobody's done it in three hundred years."

You turn his hand over, slowly, and lace your fingers through his. He looks down at your joined hands as if he's never seen hands before.

"You don't have to," he says. "I don't want you to think you owe me anything. Because of the journals. Because of what I did."

"I don't think I owe you anything," you say. "I think I want to."

He looks up at you. The candlelight in his eyes flares, and for a moment you see him as he must have been — a young man, three centuries ago, standing on a hill in midwinter, about to do the bravest and most terrible thing he'll ever do.

You kiss him.

It's clumsy at first. He's out of practice by three hundred years, and you're shaking with grief and nerves and something else. But then his free hand comes up to your face, gentle as if you're made of frost, and he kisses you back — slowly, and then not slowly at all, as if he's been starving for a very long time and has only just remembered what food is.

When you break apart, he keeps his hand at your jaw, as if he isn't sure yet that you're solid. He's breathing hard.

"I'd forgotten," he says, sounding dazed. "I'd genuinely forgotten what that was like."

"And?"

"And I'm not going to forget again." His thumb traces your cheekbone. "Whatever happens at the dark of the moon."

The days go by differently, after that.

He still comes at dusk. But he doesn't leave before moonrise any more. You learn the rite together in the great hall — the words, the steps, the lantern-song. He tells you the stones remember: every Warden who ever held the seal is still in them, a little, and that's how it really holds — all of them together. When you get the song wrong he doesn't correct you, he just laughs and takes your hand and shows you again. You learn that he can't cross consecrated ground, and hums when he thinks nobody's listening, and knows the name and a story for every Warden on every stone.

One night you fall asleep against his shoulder by the fire, and wake at dawn with his coat over you and his arm round you, and him watching the window with an expression of such quiet happiness that you pretend to be asleep a little longer, so as not to spoil it.

On the fourth night, the stones on the hill start to scream.

Not hum. Scream — high and thin and terrible. You both run. Up on the hill, the crack has widened into a black gash across the grass, breathing, and Morrow goes straight to its edge and spreads his hands. The air shimmers. He's holding it shut with nothing but his own will.

"Aldous," he says through his teeth. "He's been up here salting the stones. Order salt. It's weakening the seal."

"He's trying to prove there's no Hollow."

"He's going to prove there is." His face is grey with effort. "We can't wait for the dark of the moon. Four nights. Perhaps less."

You put your hands over his, and push with him. You don't know how. You just do. And the crack stops widening. Holds.

He looks at you, astonished.

"You're a Warden," he says. "Of course. Of course you can."

"What do we do?"

"Two choices." He's still holding your hands. "We start the rite early — ready or not. Or we stop Aldous first, before he salts the stones again. Before he brings the whole village up here with torches."`,
      choices: [
        { label: "Prepare the rite — Ready yourself to walk into the Between. Learn everything the stones can teach you.", next: "w6_rite" },
        { label: "Stop Brother Aldous — Deal with the witch-hunter before he breaks the seal himself.", next: "w6_aldous" }
      ]
    },

    w6_rite: {
      locked: true,
      chapter: "Six — The Voices in the Stones",
      text: `You spend the next two nights among the wardstones.

Morrow shows you how to listen to them. You lay your palms flat on the grey rock, one stone after another, and let the old Wardens come to you. It's like walking through a crowded house full of people talking in other rooms. Snatches of voices. A woman laughing. A song you almost know. A sharp, impatient voice that says *hold your wrist higher, girl, for heaven's sake*.

"That's Agnes," Morrow says, with something almost like fondness. "Seven generations back. She was terrifying."

They teach you. All of them, a little each. How to hold the lantern so the Between can't blow it out. How to walk without looking back. How to hear the Hollow speak and not answer. You learn more in two nights than your mother managed to teach you in twenty years, and you understand — slowly, with a strange, aching gratitude — that she's there among them, helping.

On the second night, you lay your hand on her stone, and she speaks to you clearly for the first time.

*You've been brave,* she says. The voice is warm and tired and exactly hers. *Braver than I was, at your age. I spent twenty years hating him before I let myself see him. Don't you waste twenty years.*

"Mum," you whisper. "I don't know if I can do this."

*You can. You've got steady hands. You always did.* A pause. *When you go into the Between, the Hollow will speak to you. It'll find what you want most and offer it to you. It offered me my mother, once, in there. I nearly took it.* Her voice is very gentle. *It'll offer you me.*

You go cold.

*Don't take it, love. Whatever I sound like. Whatever it promises. It isn't me. I'm here, in the stone, where I'm meant to be.*

And then she's gone, and it's just cold rock under your palm, and you're crying.

Morrow is beside you. He doesn't say anything. He just stays.

"There are three ways the rite can end," he says eventually, very quietly. "Your mother wrote them down, in the real journals. I've never told a Warden all three. It seemed cruel, to give them choices they couldn't bear."

"Tell me."

"When we reach the heart of the Between, the lantern has to be relit by the Warden and the keeper together. That's the renewal. It holds for a generation." He looks at the crack in the grass, breathing. "Or the Warden can share the keeping. Stand on both sides of the door with me. It's never been done — Isolde wanted to, and couldn't. It would mean you'd never be entirely in this world again."

"And the third?"

"The Warden can set the keeper free." His voice doesn't change at all. "Take the whole of the keeping onto herself. I'd walk out of the Between as a man, mortal, for whatever years I had left. And you'd hold the door alone. Forever, or until another Warden takes it from you."

You stare at him.

"You've never told anyone that," you say.

"No."

"Why tell me?"

He looks at you with those strange, lamp-lit eyes. "Because I think you'd want to know. And because I've decided, whatever you choose, I'd rather you chose it knowing."

Down in the crack, something stirs. And you hear it, for the first time: a voice. Low and soft and very, very patient. And it sounds like your mother.

*Come in, love,* it says. *I've been waiting. Come in, and I'll give you back everything you lost.*`,
      choices: [
        { label: "Listen to the Hollow — Just for a moment. Just to hear her voice again.", next: "w7_hollow" },
        { label: "Walk into the Between — Take the lantern, take his hand, and go in. Tonight.", next: "w7_between" }
      ]
    },

    w6_aldous: {
      locked: true,
      chapter: "Six — Torches on the Hill",
      text: `You go down to stop Aldous. You're too late.

He's already coming up the hill. Half the village is behind him, carrying torches and pitchforks and pale, frightened faces. At the front, in his grey robe, Aldous carries the Lantern's Edge unsheathed, and it glows in the dark like a candle.

They stop at the edge of the wardstones. Morrow is standing in the centre of the ring, beside the breathing crack. He doesn't move.

"Warden," Aldous calls. His voice is warm, kind, perfectly reasonable. "Step away from him. I know you're afraid. I know he's told you that the world will end if he dies. Let me show you it won't."

"You've been salting the stones," you say. "You're the one breaking the seal."

"There is no seal." He says it gently, as if to a child. "There is no Hollow. There's a demon on that hill who's kept your family in chains for three hundred years, and tonight the people of Thornwick are going to be free of him." He turns to the villagers. "Aren't you tired of it? Of living beneath a hill with a devil on it? Of the Wardens who never come to market, who never marry, who die young and alone, all to feed him?"

A murmur runs through the crowd. You recognise faces. The baker. The blacksmith's wife. Old Tom from the mill, who used to give you sweets when you were small. They look at you with pity, and fear, and hope.

"Morrow," you say quietly. "Tell them."

"They won't believe me," he says, just as quietly. "Not from my mouth. They've had three hundred years of stories. The only person they might believe is you."

Aldous steps into the ring. The Lantern's Edge flares in his hand, and Morrow flinches — actually flinches, as if from a burn — though the blade is still ten feet away.

"Last chance, Warden," Aldous says. "Stand with your village, or stand with your devil."

The crack in the grass breathes. Colder now. Wider. You can hear something at the bottom of it, patient and low.

And you make yourself think. Because Aldous isn't stupid, and he isn't cruel. He believes every word. And a small cold part of you whispers: *how do you know?* You've known Morrow a handful of days. You have journals, and his word, and a voice in a stone. Aldous has three hundred years of the Order's records, and a village full of people who've lived in fear under this hill their whole lives.

What if your mother was wrong? What if the kindest, saddest face you've ever seen is the best lie the dark has ever told?

Morrow is watching you. He doesn't plead. He doesn't move. He just stands in the centre of the ring, with the torches all around him and the crack breathing at his feet, and waits for you to decide what he is.

"Aldous," you say. "Wait."

The witch-hunter pauses, the blade held high.

"I'll listen," you say. "Show me your proof. And if you're wrong—"

"I'm not wrong," Aldous says softly. "But I'll show you. Come here. Look."

Or you could walk into the ring, and stand beside the man he means to kill.`,
      choices: [
        { label: "Hear Aldous out — Look at his proof. Find out if everything you've believed is a lie.", next: "w7_aldous" },
        { label: "Stand beside Morrow — Walk into the ring and put yourself between the blade and him.", next: "w7_between" }
      ]
    },

    w7_hollow: {
      locked: true,
      chapter: "Seven — The Hollow's Gift",
      text: `You kneel at the edge of the crack. Morrow says your name, once, sharply. You don't look round.

"Mum?"

*I'm here, love.* The voice from the dark is warm and tired and exactly, exactly hers. *I'm so sorry. I'm so sorry I didn't finish. I'm so sorry I left you with all of this.*

"You're in the stones," you whisper. "You told me. You're in the stones."

*That's what's left of me in the stones. An echo. A memory.* The voice is so gentle. *But I'm here too. The rest of me. The Hollow took me when my heart gave out in the rite — I was halfway into the Between, love, and it caught me as I fell. It's been keeping me safe. Waiting for you.*

You're shaking.

*Do you remember the winter you had the fever?* the voice says. *You were nine. I sat up with you four nights. I sang you the lantern-song over and over, because it was the only song I knew all the way through, and you said I sang it out of tune. You were right. I did.*

You do remember. You'd forgotten until this moment, and now it's there, bright and whole: the smell of the fire, her cool hand on your forehead, her voice cracking on the high note. Nobody else in the world knows that. Nobody else was there.

*It wants so little,* your mother's voice says. *It's been locked away so long. It only wants to breathe. A crack. Just a crack in the door, a little wider than it is now. Not all the way. Just enough.* A pause. *And in return, it'll give me back to you. All of me. Not an echo in a stone. Me. At your kitchen table. Beating you at cards.*

Behind you, Morrow is very still.

"Don't," he says quietly. "Please. I know what she sounds like. I know how badly you want it. But I've heard it do this a hundred times. It's not her."

*He would say that,* the voice says sadly. *He's been the door for three hundred years. If the door opens even a little, he's free. Did he tell you that? He doesn't want to be free. He wants to be needed. It's the only thing he has.*

You look at Morrow. He doesn't defend himself. He just looks back at you with those strange lamp-lit eyes, and you can see that some of it is true — and that it doesn't matter, and that he'd never say so.

*Just a crack, love,* your mother's voice whispers. *Just a little wider. And then I'll come home.*

You think of her hands, flour to the wrists. Her voice saying *steady, love*. The blue cups. The way she cheated at cards and never admitted it. You think of the kitchen table, with her sitting at it again, and something in your chest cracks open so wide you can hardly breathe.

And you think of the stone. Her voice in it, warm and clear: *Don't take it, love. Whatever it promises. It isn't me.*

Two voices. Both hers. Both begging.

One of them is lying.

Morrow kneels beside you. He doesn't touch you. He doesn't try to pull you away.

"Whatever you choose," he says, so quietly only you can hear, "I'll stay beside you. Even if it's this."`,
      choices: [
        { label: "Take the Hollow's bargain — Open the door a crack. Bring her home.", next: "e_hollow" },
        { label: "Believe the stone — Refuse the voice in the dark. Take the lantern and walk into the Between.", next: "w8" }
      ]
    },

    w7_between: {
      locked: true,
      chapter: "Seven — Into the Between",
      text: `You take the lantern. You take his hand. And you walk into the crack in the hill.

It isn't a hole. You don't fall. It's like stepping through a doorway into a house you've never seen — a long, grey corridor with no walls, and no floor, and no ceiling, only a dim grey light that comes from everywhere and nowhere. Behind you, the wardstones, the hill, the torches, whatever was happening — all of it is gone. There's only the grey, and the lantern in your hand, and Morrow beside you.

He's different in here. You can see it at once. The tiredness has gone out of his face. He looks younger, and sharper, and there's a light in him — not just in his eyes, but all through him, faint and steady, like a lamp through paper.

"This is where I've been," he says. "Three hundred years."

It's so quiet. So empty.

"Alone?"

"Mostly." He squeezes your hand. "The Wardens came, once a generation. Isolde came every night, for as long as she lived. She'd stand on the other side of the door and talk to me, and I'd talk back, and neither of us could see the other. She did that for fifty years." He looks down the endless grey corridor. "After she died, it was very quiet for a long time."

You walk. The lantern glows, small and gold, and the grey parts round it like water.

And the Hollow comes.

You feel it before you see it. A coldness at the edge of the light. A pressure, patient and vast. The grey darkens, all round you, like a storm coming in, and out of the dark come voices. Your mother's. Your father's, whom you never knew. Your own, as a child, crying. All of them saying *come here, come here, let go of his hand and come here*.

"Don't answer," Morrow says. "Don't look. Keep walking."

You keep walking. Your hand is shaking so badly the lantern swings. He tightens his grip.

Then the voices change.

*Wardens,* they say. *Three hundred years of Wardens, all dead, all mine eventually. I'll have you too. I'll have all of you. I only have to wait.*

And in your head, suddenly, clear and cold, you remember what he told you while you learned the rite. *Every Warden is still in the stones, a little. It's how the seal holds. All of them, together, holding the line.*

"Morrow," you say. "The stones. The Wardens. They're still in there. All of them."

"Yes."

"Could they—" You swallow. "If I called them. Here, in the Between. Could they fight it?"

He stops walking. He stares at you.

"Nobody's ever tried," he says slowly. "Nobody's ever — it would take everything they have left. They'd be gone. All of them. The stones would be just stones." His face is very strange. "But the Hollow might be gone too. Forever. No more seal. No more keeper."

The dark presses closer. The lantern flickers.

Ahead of you, at the end of the grey corridor, you can see it now: a small, dim glow. The heart of the seal. Where the lantern has to be relit.`,
      choices: [
        { label: "Keep walking to the heart — Relight the lantern the way it was always meant to be done.", next: "w8" },
        { label: "Call the dead Wardens — Summon every voice in the stones, your mother's too, and end the Hollow forever.", next: "e_lastwarden" }
      ]
    },

    w7_aldous: {
      locked: true,
      chapter: "Seven — The Witch-Hunter's Proof",
      text: `Aldous lowers the blade and opens a leather satchel. Inside are papers — old, yellow, stamped with the Order's lantern seal.

"The Order's records," he says. "Three hundred years of them. Look."

You look. Every page is a Warden. Every Warden died young. Every Warden's death is recorded in the same neat hand: *Taken by the demon of the stones.* Fever. Falls. Heart failure in the middle of a rite. Margery, four generations back, *dead on the hilltop eleven days after refusing the demon's bond*.

"Every one," Aldous says softly. "Every one of your family, for three hundred years. Thirty, forty years old. Never older. He feeds on them, Warden. That's what the rite really is. He takes a little of each Warden's life, every generation, to keep himself alive." He looks at you with real compassion. "Your mother was fifty-one. Did you ever wonder why?"

You did. You always did.

You turn to Morrow. He's standing very still in the centre of the ring.

"Is it true?"

He's quiet for a long moment. When he speaks, his voice is very even.

"The rite costs the Warden," he says. "Every renewal takes a little of her life. It's the price of holding the door shut from this side. I've never taken any of it. It goes into the seal." He meets your eyes. "But yes. Every Warden I've ever known has died young. Because of the seal. Because of me. I've never once pretended otherwise."

The villagers murmur. Aldous nods slowly, sadly, as if Morrow has confessed.

"You see," he says. "He admits it."

"He didn't say he took it. He said the seal did."

"And what's the difference, Warden?" Aldous steps closer. "If he dies, the seal breaks, and nobody in your family has to die young ever again. You could live. You could marry. You could grow old. Isn't that worth something?" He holds out the Lantern's Edge, hilt first. "I'm not asking you to trust me. I'm asking you to trust your own family's graves. Thirty-one of them, on that hill. Do it yourself, if you like. It should be your hand."

The blade glows between you, pale and cold.

Behind Aldous, the villagers are silent. Then Old Tom from the mill steps forward, twisting his cap in his hands.

"Your gran was forty-four," he says. His voice shakes. "I carried her coffin up this hill. And her mother before that. I don't want to carry yours, lass. That's all. I don't want to carry yours."

You can't answer him. Behind you, the crack breathes. Colder. Wider.

And Morrow says nothing at all. He doesn't plead. He doesn't argue. He only looks at you — a man who has watched every one of your family die young, and sat with them at the end, and carved their names on the stone with his own hands — and waits.

You understand, suddenly, that he's always known it might end like this. That some Warden, some generation, would take the blade. He's been waiting three hundred years for it.

He isn't going to stop you.

"Whatever you choose," he says quietly. "I'd rather it was you."`,
      choices: [
        { label: "Take the blade — Aldous is right. End this. End him. Set your family free.", next: "e_broken" },
        { label: "Refuse the blade — Give it back. Take the lantern and Morrow's hand, and walk into the Between.", next: "w8" }
      ]
    },

    w8: {
      locked: true,
      chapter: "Eight — The Heart of the Seal",
      text: `The Between is a long grey nothing with no walls and no floor, and you walk it with your lantern in one hand and his hand in the other, while the Hollow whispers at the edges of the light in every voice you've ever loved. You don't answer it. You don't look. You keep walking until you reach its heart.

The heart of the seal is a small, grey room, and in the centre of it, on a plinth of old stone, a lantern.

It's the twin of the one in your hand — iron and glass, very old — and its flame has gone out. There's only a single ember left in it, red and dying. Your mother's ember. The last of her renewal.

Behind you, the Hollow presses at the edges of the light. You can feel it waiting. Hungry. Patient.

"This is where it's done," Morrow says. He's standing beside you. In here, in the Between, he's all light — faint and steady, lamp-lit from the inside. "Whatever you decide, it's decided here."

You look at the dead lantern. Then at the one in your hand. Then at him.

"Tell me again," you say. "The choices."

"You can renew the seal," he says. "Light her lantern from yours, the way it's always been done. I stay the keeper on this side. You go home. It holds for a generation — your lifetime. And the next Warden comes, and does it again." His voice is very steady. "That's the rite. That's all it's ever been."

"Or."

"Or you can share it with me." He says it carefully, as if the words might break. "Both of us, keepers together. Your lantern and mine, one flame. You'd live on both sides of the door — here, and out there. You'd age slowly, like me. You'd never be entirely in the world again." A pause. "It only works if you mean it. The flame won't take from someone who's holding back. Isolde wanted to, three hundred years ago. She couldn't. She was too afraid of losing herself."

"And the last."

"You set me free." He doesn't look away. "You take the whole keeping onto yourself. I walk out of the Between as a man — mortal, for whatever years I have. And you hold the door alone, from both sides, for as long as you can bear it." His mouth moves, almost a smile. "It's the choice I made for Isolde. I've always wondered what it would be like to be on the other side of it."

"Is there a way to end it?" you ask. "All of it. Not for a generation. For good."

He goes very still.

"Once," he says at last. "It's in the oldest journal. The first Warden's. Nobody's tried it." He looks at the two lanterns. "Both flames into the seal at once, yours and mine, all the way down. The door stops being a door. It becomes a wall. No more rite. No more Wardens. No more women on the hill dying young to hold it shut."

"And you?"

"Somebody has to be on the far side of a wall to keep it a wall." He says it lightly, the way he says everything that costs him. "Not the Between. Past it. Where nobody comes."

The Hollow presses closer. The ember in your mother's lantern flickers, very weak.

You think of her. Her hands. Her voice saying *steady, love*. The blue cups, and the cheating at cards, and the last line of her journal: *she's not inheriting a demon. She's inheriting a friend.*

You think of three hundred years of women on the hill. Thirty-one names. Every one of them dying young to hold this door.

And you think of him. Standing in the rain on your doorstep, with his hands open. Sitting at your kitchen table, holding a cup of tea he never drinks, because your mother always poured one. Holding back the dark with his bare hands on a hilltop in the middle of the night, because it was there to be held.

Three hundred years of walking into the dark so someone else wouldn't have to.

He's watching you. Waiting. The lantern is warm in your hand.

"Whatever you choose," he says softly, "thank you. For coming in here with me. Nobody has, in a very long time."`,
      choices: [
        { label: "Share the keeping — Your lantern and his, one flame. Stand on both sides of the door with him.", branchOn: { flag: "guarded", ifTrue: "e_duty", ifFalse: "e_lantern" } },
        { label: "Set him free — Take the keeping onto yourself, and let him walk out a man.", next: "e_morrow" },
        { label: "End it for good — Both flames into the seal. No more Wardens, and no way back for him.", next: "e_threeknocks" }
      ]
    },

    e_threeknocks: {
      locked: true,
      chapter: "Nine — Three Knocks",
      text: `"End it," you say.

He looks at you for a long moment. Then something goes out of his shoulders that you think has been there for three hundred years.

"Thirty-one names," he says softly. "Let there not be a thirty-second."

You lift your lantern. He lifts his hand, and the light inside him gathers into his palm, lamp-bright, steady. Together you lower both flames into your mother's dead lantern, all the way down, and don't stop.

The ember catches. Then it roars.

The grey room fills with gold. The Hollow screams — not in your mother's voice now, not in anyone's, just a long thin sound like wind through a crack that's closing — and the whole Between shudders round you, and you feel the door begin to change. Hinges going to stone. Keyhole going to stone. Wood, iron, ward and seal, all of it turning into something that will never open again.

He lets go of your hand.

You try to hold on. He doesn't let you. He steps back, into the dark beyond the gold, and he's smiling, and his hands are open the way they were on your doorstep in the rain the first night you met him.

"Go home," he says. "Live a long time. That's the whole point. Promise me."

"Morrow—"

"*Promise.*"

"I promise."

The wall closes between you.

You wake on the hill at dawn, in the wet grass, with your lantern cold beside you. The crack is gone. The stones are silent — not humming, not waiting. Just stones. You put your hand flat on the wardstone and feel nothing at all.

There's a space on it below your mother's name. You don't carve anything there. Nobody ever will.

You keep your promise. It's the hardest thing he ever asked of you.

You live a long time. Brother Aldous leaves in the spring, and the witch-hunters stop coming, because there's nothing left on the hill to hunt. You teach the lantern-song to the village children as just a song, and they sing it out of tune. Old Tom's grandchildren grow up and have children of their own, and not one of them ever has to carry a Warden's coffin up the hill. You never marry. You plant a garden. You grow old. You grow very old.

Every year, at the dark of the moon, you climb the hill and knock three times on the wardstone.

It never answers.

You're eighty-one the last time you climb it. That night, at dusk, sitting by your own fire with a cup of tea going cold in a blue cup, you hear it.

Three knocks. At your front door.

You get up. It takes a while. Your knees aren't what they were. You open the door.

He's standing on the step in the dusk, lamp-lit from the inside, exactly as he was. His hands are open.

"You took your time," Morrow says.

"I was busy living," you tell him. "You made me promise."

"I know." He's smiling. "I watched. From the other side of the wall. Every year, when you knocked." He holds out his hand. "Are you ready?"

You look back, once, at the warm kitchen, the garden, the long good life. Then you take his hand.

And you aren't old any more.`,
      ending: true,
      tag: "Ending: Three Knocks"
    },

    e_lantern: {
      locked: true,
      chapter: "Nine — The Lantern Kept",
      text: `"Together," you say.

He goes very still. "You're sure? You'd never be entirely—"

"I know." You hold out the lantern. "I've spent two weeks learning what it means to be a Warden. I don't want to be the kind who stands on the other side of a door for fifty years, talking to someone she can't see. I want to be the kind who opens it."

He puts his hand over yours on the lantern's handle.

You lower the flame together into your mother's dead lantern.

It catches.

It doesn't just catch. It *roars*. Gold light pours out of the lantern and floods the grey room, floods the corridor, floods the whole of the Between. The Hollow screams — you hear it, a vast thin shriek at the edge of everything — and draws back, and back, until it's only a shadow at the very farthest edge of the light.

The flame isn't one flame any more. It's two, twined together. His, faint and silver, three hundred years old. And yours, new and gold and steady.

You feel it take hold of you. Not a pain. A widening. As if you've been living in one small room all your life and someone's just opened a window onto a much bigger house. You can feel the Between around you, and the hill outside it, and the wardstones, and every Warden in them — humming, all together, for the first time in weeks. You can feel your mother in her stone, warm and clear and, somehow, laughing.

And you can feel him. Right beside you. On both sides of the door at once.

When you open your eyes, you're standing on the hill.

It's dawn. The crack in the grass is gone. The stones are humming — not the thin, failing hum of the last three weeks, but a deep, full, contented sound, like a hive in summer. Brother Aldous is gone, if he was ever here. The torches are out.

Morrow is standing next to you, in the grey morning light. On *this* side of the door.

He looks down at his hands. At the grass under his feet. At the sky.

"I'm out," he says. He sounds astonished. "I'm out here. It's — I'm on both sides. I can feel the seal, and I'm standing in the grass." He looks at you. "I haven't stood in daylight in three hundred years."

"How is it?"

He laughs. It's the same laugh your mother wrote about in her journal, the one she was so proud of getting out of him. And then he picks you up and swings you round, right there in the middle of the wardstones, and kisses you in the sunrise, and neither of you can stop laughing.

It's strange, after that. You age slowly. You can walk into the Between as easily as into your own kitchen. Thornwick is frightened of you both, for a while, and then — gradually, grudgingly — isn't. The baker starts sending bread. Old Tom from the mill brings his grandchildren up the hill to see the stones.

You carve a new name on the newest wardstone, beside your mother's. Not yours. Not his.

*Isolde*, it says. *Who wanted to open the door.*

He cries when he sees it. You hold him while he does.

"She'd have liked you," he says, afterwards. "She'd have liked you very much."

"Would she have minded? This?"

"No," he says, and takes your hand, and you walk down the hill together into the morning. "I think this is exactly what she wanted. She just didn't get to do it."`,
      ending: true,
      tag: "Ending: The Lantern Kept"
    },

    e_duty: {
      locked: true,
      chapter: "Nine — The Warden's Duty",
      text: `"Together," you say. "Share it."

He nods slowly. Something in his face is braced, the way a man braces for a blow he's seen coming for a while.

You lower the flame together into your mother's dead lantern.

It doesn't catch.

It flickers. It gutters. For one long terrible moment you think it's going out entirely. The flame won't take from someone who's holding back — he told you that — and you've been holding back from the moment you met him. Every time you stepped away. Every time you chose duty because it was safer. You don't know how to stop, even now.

"It's all right," Morrow says quietly. "It's all right. Just renew it. The old way. That's enough."

You lower your lantern alone, and the old rite takes — the one your mother died halfway through. Your flame catches in her lantern and burns steady and gold. Not two flames twined together. Just one. Yours.

The Hollow draws back into the dark. The seal holds.

When you open your eyes, you're standing on the hill at dawn. The crack in the grass is gone. The stones are humming again, steady and strong. A generation's worth of seal. Your lifetime.

Morrow isn't there. He's on the other side of the door, where he's always been.

You go home. You carve your name on the wardstone beside your mother's, the way every Warden does after her first renewal. Your hands are steady. They always were.

He comes at dusk, the next evening, the way he always did with your mother. He knocks three times. You let him in. You make tea in the blue cups, and he holds his and doesn't drink it, and you talk about the rite and the stones and the village, and he leaves before moonrise.

It goes on like that. For years.

It's a good life, in its way. The seal holds. Brother Aldous leaves Thornwick in the spring, having found no demon, only a Warden who's very good at her job. You take apprentices. You teach them the lantern-song. You tell them the truth about the keeper — all of it — and you make sure they read the real journals.

He's kind to you, always. Patient. He never once asks for more than you give.

And some evenings, sitting across the kitchen table from him, you catch him watching you in the candlelight with an expression you remember. From the journals. From the way he looked at your mother, near the end, when she'd finally let him be a person.

You wonder, sometimes, how long it'll take you. Twenty years, like her?

You hope not. You hope you're braver than that.

One night — years later, when your hair has started to grey — you reach across the table and put your hand over his. He goes very still.

"Is this all right?" you ask.

He looks at your hand for a long time. Then he turns his over, slowly, and laces his fingers through yours.

"Nobody's done it," he says, "in a very long time."

It isn't the dark of the moon. The lantern won't take it tonight. But next time, perhaps. In a generation.

He's very good at waiting. And for the first time, so are you.`,
      ending: true,
      tag: "Ending: The Warden's Duty"
    },

    e_morrow: {
      locked: true,
      chapter: "Nine — Morrow",
      text: `"I'm setting you free," you say.

He stares at you. "No. You don't understand what it — you'd hold it alone. Forever. The way I have."

"I understand."

"You've known me a fortnight."

"And you walked into the dark for someone you'd have married at midsummer." You take his hand and put it on the handle of your lantern, over yours. "Three hundred years, Morrow. It's somebody else's turn."

He's shaking. You've never seen him shake.

"Isolde asked me not to," he says, very quietly. "Three hundred years ago. On the hill. She begged me. And I did it anyway, because I loved her and I couldn't bear to let her go in." He looks at you. "I always wondered how she felt. Standing on the other side of that door."

"Now you'll know," you say, and lower the lantern.

The flame catches in your mother's lantern. And it takes the keeping out of him — you watch it go. The light that runs all through him, faint and silver, three hundred years of it. It flows out of him and into the lantern and into you, and it's so heavy. So much heavier than you imagined. Three centuries of holding the door shut from the inside, all at once, pressing down on your shoulders.

You hold it. You have steady hands.

And he changes.

The light goes out of his eyes. They're just grey now — ordinary grey, a little violet in the right light. His face is tired and lined and young, all at once, the face of a man about thirty who has lived for a very long time. He takes a breath, and it's shaky and ragged and human.

"I can feel my heart," he says, astonished. "I haven't felt my heart in—"

He doesn't finish. He doesn't need to.

When you open your eyes, you're both standing on the hill in the grey dawn. The crack is gone. The stones are humming. And you can feel the door — all of it, the whole weight of the seal, resting on you now. Not painful. Just there. Like a lantern you'll always be carrying.

He's standing in the grass in the rain, and the rain is falling on him, and he's laughing and crying at once, holding his hands up to catch it.

"It's cold," he says. "It's *cold*. I'd forgotten cold."

You go down the hill together. He has no idea how to be a person. He's forgotten how to eat. He's forgotten how to sleep. He stands in the kitchen staring at bread as if it's a miracle. The first night, he wakes up screaming, and you hold him until dawn.

The second night, he sleeps.

He learns. Slowly, then quickly. He gets a job at the mill with Old Tom, who asks no questions. The village starts calling him *the Warden's man*, and then just *Morrow*. He tries tea, properly, for the first time in three hundred years, and makes a face, and drinks the whole cup anyway.

And every night at dusk, you go up the hill alone, and walk into the Between, and hold the door.

It's heavy. It's always heavy. But at the end of the grey corridor, where the Hollow presses at the light, there's a voice on the other side of the door now, every single night, talking to you through it.

He never misses a night. Not once, in all the years.

"Isolde did this," he says once, through the door. "Every night for fifty years. I used to wonder how she stood it."

"And now?"

"And now I know," he says. "You stand it because the person on the other side is worth it."

When you come home, he's always waiting. He's always made the tea.

It's terrible tea. You drink every drop.`,
      ending: true,
      tag: "Ending: Morrow"
    },

    e_lastwarden: {
      locked: true,
      chapter: "Eight — The Last Warden",
      text: `You set the lantern down in the grey, and you close your eyes, and you call them.

All of them.

You call the way the stones taught you — not out loud, but inwards, down, into the place where the seal lives. Agnes, seven generations back, who was terrifying. Margery, who refused. The ones who hated him. The ones who were kind. Thirty-one women. Three hundred years.

And your mother.

They come.

You feel them before you see them — a warmth rising round you in the grey, like a hearth being lit in a cold house. And then they're there. Shapes of light. Women in the clothes of every century, old and young, standing round you in a ring the way the stones stand on the hill.

Your mother is beside you. She looks exactly the way she did before she got sick. She takes your hand.

*Steady, love,* she says.

The Hollow sees them, and for the first time in three hundred years, it's afraid.

You feel it. The vast, patient pressure at the edge of the light flinches. The voices in the dark stutter and go silent. And the Wardens — all of them, together, holding hands in a ring round you and Morrow — begin to sing.

It's the lantern-song. The one you learned in the great hall. Thirty-one voices, then thirty-two, as you join in, and your voice is shaking but it doesn't matter, because they're carrying it.

The Hollow shrieks. The grey around you blazes gold. And the light pushes outward from the ring, further and further, into every corner of the Between, filling it, until there's nowhere left for the dark to hide.

It doesn't go quietly. It goes like a storm going out to sea, with a great tearing roar. And then there's only light, and silence, and then there's nothing at all.

It's gone.

The Wardens are fading. You can see it — the light going out of them, one by one, like candles at the end of a long night. It took everything they had. You knew it would.

Your mother is the last. She holds your face in both her hands.

*You did it,* she says. *Nobody's ever done it. Three hundred years, and it was you.*

"Don't go," you whisper. "Please."

*I have to, love. We all do. We've been holding this door for three hundred years. We're allowed to rest now.* She kisses your forehead. *Don't waste twenty years. Promise me.*

"I promise."

And she's gone.

When you open your eyes, you're lying on the hilltop in the rain, at dawn. Morrow is holding you. The crack in the grass is gone — not sealed, but *gone*, as if it was never there. And the wardstones are silent. Truly silent. Just old grey stones on a hill, carved with names.

Morrow is looking at his hands. The light has gone out of them. His eyes are grey — ordinary grey. He's breathing hard.

"There's no door," he says, stunned. "There's nothing to keep. I'm—"

"Free," you say.

He looks at you as if he's never seen you before. As if he's never seen anything.

"So are you," he says.

You get up. It takes a while. You walk down the hill together, soaked and shaking and alive, into a village that doesn't need a Warden any more.

You'll never hear your mother's voice again. You'll never hear any of them again. That hurts more than anything ever has. But you think — walking down the hill in the rain, with his hand in yours — that she'd forgive you.

She told you not to waste twenty years.

You don't intend to waste a single day.`,
      ending: true,
      tag: "Ending: The Last Warden"
    },

    e_hollow: {
      locked: true,
      chapter: "Eight — What the Hollow Gave",
      text: `"Yes," you whisper. "Yes. Come home."

The crack in the grass opens. Just a little. Just a hand's width wider.

Behind you, Morrow makes a sound like something tearing.

And your mother climbs out of the dark.

She's exactly as she was. Grey coat, flour on her cuffs, her hair coming loose from its pins. She stands on the hilltop in the moonlight and looks round at the stones as if she's never seen them before, and then she looks at you, and smiles.

"Hello, love," she says.

You run to her. You throw your arms round her. She's cold. She's very cold. You don't care.

You take her home. She sits at the kitchen table. She takes a blue cup. She holds it, the way Morrow always did, and doesn't drink.

It's a week before you notice she never eats. Two weeks before you notice she doesn't sleep. She sits at the kitchen table all night, very still, looking at the door.

It's three weeks before the first child in Thornwick goes missing.

By then the crack on the hill is as wide as a road, and something cold is breathing out of it all night long, and the stones have stopped humming entirely. Brother Aldous is dead — they found him at the edge of the ring, still holding his pale sword, with his eyes open and all the warmth gone out of him. The village is emptying. People leave in the night with their children and their carts and don't come back.

Morrow is holding the door alone. You can feel him, every night, on the other side — straining, grey with effort, holding the Hollow back with everything he has. He's losing. Slowly. A little more each night.

He never once comes to the house. He never once says *I told you so*.

On the thirtieth night, you sit across the kitchen table from the thing that looks like your mother.

"You're not her," you say.

It smiles. It has her smile exactly.

"No," it says pleasantly. "But I remember everything she remembered. The blue cups. The cards. The way you used to cry when you cut your fingers learning wards. Isn't that enough? Isn't that what you wanted?"

You think of the stone on the hill. *Don't take it, love. Whatever I sound like.*

You go up the hill that night with a lantern in one hand and your mother's old blade in the other. The crack is enormous now, breathing like a wound. Morrow is at its edge, holding it with his bare hands, and he's so faint he's almost transparent.

"I'm sorry," you say. "I'm so sorry."

He looks at you. He doesn't blame you. You can see that. He never will.

"I know," he says. "I know you are. Help me hold it."

You stand beside him at the edge of the dark, and you put your hands over his, and you push. And the thing that wears your mother's face stands at the bottom of the hill, watching you both, smiling her smile.

It's patient. It can wait.

It has, after all, all the time in the world.`,
      ending: true,
      tag: "Ending: What the Hollow Gave"
    },

    e_broken: {
      locked: true,
      chapter: "Eight — The Broken Seal",
      text: `You take the blade.

It's cold. Colder than anything you've ever held. The villagers draw a breath, all together, and hold it. Aldous nods slowly, with something like relief.

Morrow doesn't move.

You walk into the ring. The crack breathes at your feet. He's standing beside it, exactly where he's stood for three hundred years, and he looks at you with those strange lamp-lit eyes — not angry, not afraid. Only sad. Only very, very tired.

"I'm sorry," you say. Your voice is shaking.

"Don't be," he says gently. "Someone was always going to. I'm glad it was you. You'll do it cleanly."

"If you're lying—"

"Then you've freed your family." He almost smiles. "And if I'm not, then — hold the door, love. Hold it as long as you can. You've got steady hands."

It's what your mother used to say. *Steady, love.* You didn't know he'd heard her say it.

Your hands aren't steady. But the blade goes in anyway.

He doesn't cry out. He just looks down at the pale sword in his chest, and then up at you, and something that might be relief crosses his face. And then the light goes out of him, all at once, like a candle pinched out.

He's gone.

And the seal breaks.

You feel it. Everyone on the hill feels it. A sound like the whole world cracking open, and the crack in the grass rips wide, wide as a river, and cold pours out of it — not wind, not air, just *cold*, the absence of everything warm. The torches go out. The villagers scream and run. And out of the dark, something begins to rise.

The Hollow is real.

Brother Aldous stands at the edge of the crack with his mouth open. He's staring into the dark, and you watch his face as he understands — all at once — what he's done. What you've both done. He lifts his arms as if to hold it back, and the cold takes him before he can say a word.

You're alone on the hill with the thing that's coming out of the ground.

And you remember what Morrow said. *Hold the door, love. Hold it as long as you can.*

You drop the blade. You put your hands on the nearest wardstone — your mother's — and you *push*. The way you pushed with him, that night the stones screamed. You call every voice in the stones and you push, and they push with you, thirty-one Wardens and you, and the Hollow slows. Stops. Hangs at the lip of the crack, half out of the dark.

Held. Barely. By you.

You don't know how long you stand there. All night. All the next day. The villagers come back, eventually, and find you still standing at the stone with your hands pressed flat to it, and they bring you water and bread and hold the cup to your lips, because you can't let go.

You never can. Not really. Not ever again.

You grow old on that hill. You hold the door alone, from the wrong side, with no keeper and no lantern — just your own will, and the voices in the stone, growing fainter every year.

Sometimes, at dusk, you think you hear three knocks at the door of the empty house below the hill. Unhurried. Patient.

You never go down to answer. You know there's no one there.

You carved his name yourself, on the newest stone. The first name on it that isn't a Warden's.

*Morrow. Who kept the door.*`,
      ending: true,
      tag: "Ending: The Broken Seal"
    }

  }
};
