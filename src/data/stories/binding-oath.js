// The Binding Oath — second title. Rewritten/expanded to match Ember
// Court's density and prose style while preserving the exact same
// branch structure, locked flags, and choice logic as the original.
// Same engine contract: { startNode, nodes }, each node
// { chapter, text, choices | ending }.

export const bindingOath = {
  startNode: "n1",
  nodes: {

    n1: {
      chapter: "One — The Ritual",
      text: `Three heartbeats from freedom. That's all it would have taken — three heartbeats, the reliquary vault's outer ward already peeling back beneath your fingers like old paint, the stolen ledger already tucked warm against your ribs beneath your coat, its brass corners digging into skin you've stopped noticing after three years of doing exactly this. Three heartbeats, and you'd have vanished down the tower's lower stairwell the way you'd vanished from a dozen wards before this one, leaving nothing behind but a story the mages would tell each other for years about the thief who was never quite caught, never quite named, never quite real enough to hunt properly.

Instead, cold steel finds the exact hollow of your throat before you've even registered the footsteps behind you, and dragon-marked eyes — gold-slitted, entirely too alert for this hour of the night — catch the wardlight still streaming down through the vault's shattered containment circle, illuminating a face that has clearly been waiting in this exact doorway far longer than you gave it credit for.

You do the only thing three years of training has ever actually taught your hands to do under a blade at your throat: you cast anyway, glyph-work spilling out of you faster than caution, faster than sense.

The spell wasn't built for this. It was built to repel, to throw a body backward hard enough to buy you the width of a stairwell and nothing more. Instead, something in the vault's already-ruined wardwork catches your intent mid-cast and twists it sideways, and the world goes white-hot at the wrist for one unbearable second before settling into something far stranger, far more permanent, than a shove ever could have been.

You're both still standing when the light finally clears. His sword has gone clean through the space where your chest used to be a heartbeat ago. Neither of you moves. You're staring down at your joined hands — his gauntleted, yours bare and burned faintly silver along the wrist in a pattern neither of you recognizes — like they belong to two entirely different people who wandered into this vault by pure accident and got tangled together instead.

"What," he says, very carefully, each word set down like he's testing ice for cracks before trusting his full weight to it, "did you just do?"

"Saved my own life." Your voice comes out steadier than the rest of you feels, silver light still guttering faint along your wrist. The binding-glyphs are already settling beneath your skin, matching a twin scoring now etched raw into his gauntlet-bared forearm. "Unless you'd like to try that sword arm again and find out precisely what happens the second time."

He tries to step back. Gets exactly as far as you'd expect — which is to say, barely half a stride, boots scraping stone — before something invisible snaps taut between your ribs and his like a leash pulled to the absolute limit of its give, yanking the air clean from both your lungs at once.

"Explain," he says, low, dangerous, one hand pressed flat to his own chest where the tether's pull clearly landed hardest, "before I decide this was worth losing my sword arm over after all."

The spell wasn't supposed to do this. The spell was supposed to repel him clean out of the vault, not chain the two of you together in a knot neither of you tied on purpose, in a language neither of you fully speaks yet, and may never speak fluently enough to fully undo.`,
      choices: [
        { label: "Break away in fury — Test the tether's limit. Force it to prove how far it will actually let you go.", next: "n2a" },
        { label: "Stand your ground and demand answers — Make him explain himself first. You didn't come here to be interrogated.", next: "n2b" }
      ]
    },

    n2a: {
      chapter: "Two — The Length of the Tether",
      text: `You turn on your heel and walk. It's petty, and it's satisfying for exactly nine strides before the tether snaps taut without warning and yanks you backward clean off your feet, your spine meeting stone hard enough to steal what little breath you had left in your lungs.

He catches you before you land — of course he catches you, dragon-blooded reflexes making a mockery of the half-second you'd have needed to properly brace — one gauntleted arm looping around your waist like you weigh nothing at all, like the entire violent arc of your fall was something he'd already calculated before you'd finished deciding to attempt it.

"A mile," he says, setting you upright with unnecessary gentleness, like tonight isn't already the worst night of either of your lives. "Give or take. I felt it stop giving somewhere around there, the exact instant the pull became a wall instead of a suggestion."

"Let go of me."

"With pleasure." He does, immediately, stepping back like your skin might burn him — testing the tether's exact limit with the same clinical precision he'd probably apply to a wound, one careful pace at a time until it pulls taut again and stops him cold, silver light flaring faint along both your wrists at the exact same instant. "This is a containment binding. Old work. Older than either of us, and considerably older than whatever simple repelling ward you thought you were casting tonight. You didn't build this by accident, whatever you intended when your hand moved."

"I cast a ward. A basic repelling ward, the kind every apprentice learns before they're trusted with anything sharper than kitchen wards. This is not what that spell does, and I would know, because I've cast that exact working forty times without a single incident before tonight."

"Then someone rewrote it before you ever triggered it." His jaw tightens, gaze flicking down to the glyphs still glowing faint and silver along both your wrists, then back up to your face with something sharper than suspicion, closer to genuine calculation. "Or something about you resisted the working hard enough to twist it into this instead, mid-cast, without your knowledge. Either way, this isn't the spell you believe you cast tonight, and I don't think you're lying to me about that."

Neither of you says the thing you're both clearly thinking, turning it over in the taut, humming silence stretching between you: that whatever this actually is, it has no apparent intention of undoing itself by morning, and you are both, for the foreseeable future, exactly as stuck with each other as the dull ache in your wrist keeps insisting, mile by mile, stride by careful stride.`,
      choices: [
        { label: "Accept it's real — Ask what happens now. Panic later, once there's actually time for it.", next: "n3" },
        { label: "Demand to know why a knight was hunting a mage tower alone — Refuse to move forward until he accounts for exactly why he was there, off the record, before you agree to anything shaped like trust.", next: "n3_pressed" }
      ]
    },

    n2b: {
      chapter: "Two — What You Broke",
      text: `You don't run. Running, you have learned across three years of increasingly reckless heists, tends to go very badly the instant someone else's magic gets tangled into the mix, and tonight's magic is tangled in ways you don't yet have names for. So instead you plant your boots against the stone and stand your ground, arms crossed, doing your very best impression of someone who is not currently, quietly panicking beneath a calm exterior held together mostly by spite.

"You first," you say, tilting your chin toward the sword he still hasn't fully lowered. "Dragon-blood doesn't patrol mage towers on a whim, and it certainly doesn't patrol them alone, off the record, at this exact hour. What were you actually doing here tonight, before I arrived and complicated it?"

He studies you for a long moment — the particular, cataloguing look of a trained soldier weighing weapons, exits, and weaknesses all at once, a habit that apparently doesn't switch off just because his hand is currently bound to yours by magic neither of you asked for or understand yet. "Hunting something that's been bleeding this tower dry for three months running. Ledgers, relics, old binding-work, gone one careful piece at a time, never enough missing at once to raise a proper alarm. I didn't expect it to be—" he gestures at you, vaguely, almost helplessly, "—this."

"This meaning a mage. How shocking, a mage robbing a mage tower."

"This meaning someone skilled enough to cast a ward that nearly took my arm off, and still got caught in the act regardless, mid-theft, ledger already in hand." Something that might, infuriatingly, be respect flickers behind the irritation in his expression. "That's not nothing, in my experience of this particular trade, and I've hunted more of it than you'd probably like to know."

"I'll treasure the compliment for exactly as long as it takes this tether to stop humming against my ribs." You lift your bound wrist between you, glyphs still faintly aglow in the dark, silver light pulsing faintly in time with your own hammering heartbeat. "Meanwhile, we appear to have a rather more pressing problem than my professional competence left to discuss tonight."

"Meanwhile." He exhales, long and slow, the exact sound of a man recalculating an entire evening's careful plans from the ground up, brick by collapsing brick. "We should probably not be standing in the wreckage of a warded tower when whoever actually owns it comes to investigate the noise we've just made between us."

You glance past him at the shattered containment circle, still faintly smoking at its edges, and privately agree. Whatever explanation either of you might owe the tower's actual guardians, it isn't one either of you is equipped to give convincingly tonight — not with a stranger's pulse hammering visibly at his throat, not with your own wrist still burning faint silver beneath your sleeve. "Somewhere private, then. Somewhere I can actually see what you've done to my magic without an audience watching us argue."

"Your magic did this to itself, as far as I can tell." But he's already moving toward the stairwell, testing the tether's give with each measured step, waiting — without quite admitting he's waiting — to see whether you'll follow willingly or force the leash taut between you instead.

You follow. You tell yourself it's only because you have no better option tonight, and mostly, you almost believe it.`,
      choices: [
        { label: "Accept it's real — Ask what happens now. Panic later, once there's actually time for it.", next: "n3" },
        { label: "Demand to know why a knight was hunting a mage tower alone — Refuse to move forward until he accounts for exactly why he was there, off the record, before you agree to anything shaped like trust.", next: "n3_pressed" }
      ]
    },

    n3: {
      chapter: "Three — The Truth of It",
      text: `You find an abandoned grain store two streets over, defensible enough that neither of you can fully relax, private enough to actually think without an audience cataloguing every word. He paces the length the tether allows — precisely half the room and back, over and over, boots scuffing old chaff across the floorboards, like counting his steps enough times might change whatever answer is waiting at the end of them, whichever direction he walks.

"A binding this old doesn't simply break on its own," he says finally, stopping mid-stride, torchlight catching the tension along his jaw. "It has conditions. Terms, woven into the original casting like thread through cloth, load-bearing in ways neither of us can see from the outside of it. Old magic never just stops — it resolves, one way or another, and rarely the way either party involved actually expects going in."

"Resolves how?"

"That depends entirely on what triggered it in the first place." He stops pacing altogether, close enough now that the tether goes slack between you for the first time since the tower, the silver glyphs along both your wrists dimming in unison the moment the distance between you shortens. "Wards like this typically key to survival — cast in a single moment where someone genuinely believed, all the way down to the bone, that they were about to die. Which means, as far as the magic is concerned, its work isn't finished yet, whatever either of us might personally prefer tonight."

"Its work being."

"Keeping you alive." His eyes flick briefly to the tether humming faint between you, then back to your face, something unreadable moving behind them. "Possibly by keeping me close enough to guarantee it, given that I was the most immediate threat standing in the room the instant it triggered and rewrote itself around both of us."

"You're telling me I accidentally recruited my own attacker as an unpaid, extremely well-armed bodyguard, and neither of us gets a say in the arrangement."

"I'm telling you," he says, and something almost like dry humor threads through the words despite everything, "that until we understand this properly, neither of us is getting further than a mile from the other, whether we like the company or not. So you may as well stop looking at me like I'm the single worst part of tonight. I promise you, on my house's name, that I am not even in the top three things that went wrong before midnight."

You want to argue. You find, somewhat to your own irritation, watching the tether's faint glow settle between your joined wrists, that you can't quite manage it convincingly.`,
      choices: [
        { label: "Guard yourself — Keep this strictly practical. You don't need to like him to survive this.", next: "n4a" },
        { label: "Let the forced closeness actually mean something — Stop treating the tether as a problem to manage and let it become something else entirely.", next: "n4b" }
      ]
    },

    n3_pressed: {
      chapter: "Three — Before You Accept",
      text: `"Not so fast." You plant yourself exactly where you're standing, tether or no tether, every instinct honed by three years of careful thieving refusing to let this go without real answers first, before you agree to anything shaped like acceptance. "You don't get to skip past why a knight was alone in a mage tower at midnight just because we're apparently stuck together now, by accident or otherwise."

He goes very still — the specific, deliberate stillness of a trained soldier deciding exactly how much truth is safe to hand a mage who nearly took his arm off an hour ago and might yet decide to finish the job. "I wasn't sent. I came on my own information, entirely off the record, because the official channels have been compromised for months now and I didn't trust anyone else left in my chain of command to actually catch whoever's been bleeding this tower dry, piece by careful piece, month after month."

"That's not an answer. That's a confession wearing an answer's clothes, and not especially convincingly."

"It's the truth, which is considerably more than I usually offer people who've just tried to gut me with a rewritten ward they claim they didn't recognize casting." A ghost of something like genuine respect moves through his voice now, unmistakable even in the dark of the grain store. "I don't know yet whether you're what I was actually hunting, or simply the worst timing of my entire career to date. I intend to find out. Together, apparently, whether either of us particularly likes the arrangement we've been handed without asking for it."

"And if I turn out to be exactly what you were hunting all along, tether or no tether between us?"

"Then we'll have a very different conversation than this one." He holds your gaze, steady, unflinching, close enough now that you can see the exact moment he decides to mean it fully. "But I don't think you are. Call it instinct, or call it three months of chasing someone considerably less competent than you've already proven yourself to be tonight, ward and all."

The tether pulls taut as he steps back, testing its limit again — an old habit already forming, barely an hour old and already worn smooth as a well-used blade against a whetstone, back and forth, testing and retesting.

"Three months," you say slowly, turning the number over in your mouth like a coin. "That's a long time to hunt something alone, off the record, trusting no one in your own chain of command to help you."

"It's a long time to watch your own house bleed and not know who's holding the knife against its throat." Something old and tired moves behind his eyes, there and gone before you can name it properly. "You'll forgive me if I'm not eager to discover it's you, after all this searching. I find I'd rather it wasn't, whatever that admission costs my professional pride."

"Charming. Most people just say they hope I'm not a criminal, and leave it there."

"You are, demonstrably, a criminal." A ghost of dry humor returns to his voice, easing something in his shoulders. "I said I hoped you weren't the *specific* criminal I came here to catch tonight. There's a meaningful difference, and I intend to hold onto it for as long as it stays true."`,
      choices: [
        { label: "Guard yourself — Keep this strictly practical. You don't need to like him to survive this.", next: "n4a" },
        { label: "Let the forced closeness actually mean something — Stop treating the tether as a problem to manage and let it become something else entirely.", next: "n4b" }
      ]
    },

    n4a: {
      locked: true,
      chapter: "Four — Guarded",
      text: `"Practical," you say, putting as much distance between you as the tether's mile-long leash currently allows — which, at this range, amounts to barely a full stride, but the principle matters more than the actual inches gained by trying. "We find out how to break this. We don't make it complicated by dressing it up as something it plainly isn't."

"Complicated," he repeats, turning the word over slowly, like he's testing it for a hidden blade concealed somewhere in the syllables, the way he tests everything now.

"You know precisely what I mean by it."

"I do." He doesn't argue, which somehow lands worse than if he had — steps back too, matching your careful distance like a man almost relieved to finally have permission to retreat behind old, practiced composure again. "Practical suits me perfectly well. I have a war-band waiting on a report I am now three days late delivering, and you presumably have an entire life of your own that doesn't involve permanent proximity to dragon-blood you didn't choose."

"Presumably."

"Then we find whoever rewrote this binding, we break it clean, and we go back to being strangers who once tried rather enthusiastically to kill each other in a mage tower." His voice has gone carefully, deliberately even, the tone of a man closing a door with great precision rather than slamming it in anger he'd rather not show you. "Efficient."

"Efficient," you echo, and try, with limited success, to ignore how hollow the word sounds now that it's actually been said aloud between you, hanging in the grain-dusty air like something neither of you quite meant to leave behind.

He gathers his coat, checks the tether's give with one more testing step, silver glyphs dimming to a faint, banked glow along his forearm, and says nothing further. His silence has its own particular weight to it — the silence of a soldier who has already decided the conversation is over, whatever he might privately feel about that decision costing him. You tell yourself the distance is exactly what you wanted from tonight. You almost believe it, watching the glow along your own wrist do the same slow dimming.

He doesn't try to close the gap again. You almost wish, treacherously, infuriatingly, that he would close it anyway.

You spend the next stretch of silence cataloguing exits out of old habit, the way you catalogue every room you've ever robbed — windows, weak floorboards, the single door — and find, somewhat to your own annoyance, that you're also cataloguing him instead. The set of his shoulders when he thinks you're not watching. The particular economy of his movements, nothing wasted, nothing performed for an audience. A soldier's habits, worn deep enough to survive even a night like this one, tether and all.

"You're staring," he says, without turning around, tether taut enough between you that he must feel your attention through it as clearly as sound.

"I'm assessing. There's a meaningful difference between the two."

"Is there." He finally does turn, something almost like amusement flickering at the corner of his mouth despite everything the night has cost you both already. "Do let me know what you conclude, whenever you finish concluding it."`,
      choices: [
        { label: "Follow the trail of who did this — Keep the distance you've chosen and go hunt down whoever rewrote the ward, together, out of necessity rather than trust.", next: "n5", setFlag: { name: "guarded", value: true } },
        { label: "Question whether he's really as unaffected as he claims — Press past the careful composure he's rebuilt and see what's actually underneath it.", next: "n5_pressed", setFlag: { name: "guarded", value: true } }
      ]
    },

    n4b: {
      locked: true,
      chapter: "Four — Undone",
      text: `You don't put the distance between you. It's the only decision you make entirely on purpose tonight — after that, there is only the grain store's single guttering lantern making everything feel closer than it should, and the plain, undeniable fact that neither of you has stepped back since the tether went slack between you, silver light pooling warm at both your wrists where the distance no longer pulls.

"This is a genuinely terrible idea," you say, not moving an inch, watching the glyph-light pulse slow and steady where your skin nearly meets his.

"Almost certainly." His voice has dropped, rougher now than the clipped, soldierly tone from an hour ago, closer too, though you can't quite pinpoint when that happened between one breath and the next. "You did, in fairness, just try to kill me rather thoroughly not two hours past, ward and all."

"You were hunting me first. I was well within my rights to defend myself against an armed stranger."

"Fair." His hand finds your jaw, unhurried, like a man who's spent the better part of the last hour arguing himself out of exactly this and steadily, comprehensively losing every single round of that particular argument. "For what it's worth — I don't believe you're what I actually came here to catch tonight, whatever the ward's rewriting suggests otherwise."

"That's not an apology."

"No." Something that might, in the low lantern light, almost be a smile tugs at the corner of his mouth. "It's a start. The apology comes later, once I've worked out exactly what I'm apologizing for, glyph by careful glyph."

You close what little distance the tether left between the two of you, and let that be the answer neither of you has proper words for yet. Whatever this binding truly wants from you both stops mattering for a while — just the lantern's warm, unsteady light against old grain-dust, the tether gone entirely slack and warm rather than taut, and three months of careful, patient hunting resolving into something neither of you expected to find waiting at the end of it, in a place like this, on a night like this one.

"We should still talk about the ward," you murmur eventually, still not moving, his heartbeat steady beneath your palm where the glyph-light has gone soft and low.

"We should," he agrees, and doesn't move either, tether humming content and quiet between you both.

The lantern gutters lower, throwing both your shadows long and strange across the grain store's dusty floor. Somewhere beyond these walls, the mage tower's owners are almost certainly discovering the wreckage you left behind, and somewhere beyond that, whoever rewrote your ward into this is almost certainly still watching for exactly this kind of complication to surface. None of it feels quite real enough to move for yet, not with the tether resting this easy between you.

"This changes things," he says finally, quiet, not quite a question, watching the silver glow settle warm along both your wrists.

"It does." You don't pretend otherwise, not tonight. "I don't know yet what it changes them into, or how far this particular tether actually intends to stretch."

"No," he agrees. "Neither do I. I find I'm not in any particular hurry to find out tonight, glyph or ledger or otherwise."`,
      choices: [
        { label: "Talk about the ward anyway — Follow the trail of who did this together, even with everything that just passed between you still unresolved.", next: "n5", setFlag: { name: "guarded", value: false } },
        { label: "Ask what this means before it goes further — Press him for clarity on what just happened between you before either of you moves again.", next: "n5_pressed", setFlag: { name: "guarded", value: false } }
      ]
    },

    n5: {
      locked: true,
      chapter: "Five — The Deeper Truth",
      text: `The trail leads, infuriatingly, straight back toward his own war-band's territory — and the deeper truth waiting there proves considerably worse than either of you expected to uncover tonight, tether humming taut with tension that has nothing to do with distance now.

"It wasn't random," he admits, once the pieces are finally laid bare on the table between you: old ledgers, a rewritten glyph-key, a name that makes his expression go carefully, deliberately blank in a way that tells you exactly how much it costs him to hold it still. "Someone within my own house has been selling old binding-magic to whoever's been robbing mage towers up and down this entire coastline for months now. Your ward didn't misfire by accident tonight. It was sabotaged — deliberately rewritten to bind whoever triggered it permanently to the nearest dragon-blood standing nearby, as insurance against precisely the kind of knight who might come asking inconvenient questions afterward."

"Insurance against you specifically, then."

"Against anyone within my house who might interfere with the operation." His jaw tightens, the muscle working visibly beneath old scar tissue along his throat. "Which means this binding isn't simply an accident we can dissolve the moment we locate its source. It's a weapon someone built on purpose, with real intent behind every glyph — and it's still active, which means whoever built it can very likely still see through it, in ways neither of us has found yet, watching the tether the way we're watching it now."

"So this was never only about breaking the tether between us, was it."

"No." He meets your eyes, unflinching, letting you see exactly how much this admission costs a man sworn to defend the very house that's rotting from within. "It's about whether we can end this cleanly — sever their control over the working entirely, root and branch, glyph and rune — or whether we remain stuck managing a leash someone else still holds the far end of, indefinitely. That requires both of us, genuinely aligned, nothing held back between us at all. If either of us is still protecting some piece of ourselves from the other—"

"It won't work. The tether will know."

"It won't work." He exhales, long and unsteady, the sound of a man setting down a weight he's carried alone for too long. "So. Whatever's actually true for you — I need it now, standing here over the evidence of my own house's betrayal, the tether listening whether either of us wills it to or not. The real version. Not the safe one you'd give a stranger."`,
      choices: [
        { label: "Open your heart completely — Give him everything the binding is actually asking for. Stop guarding, start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give him only the truth he needs, nothing more.", next: "n6_final_hold" }
      ]
    },

    n5_pressed: {
      locked: true,
      chapter: "Five — What This Costs",
      text: `Before either of you moves toward the trail, you stop him with a hand flat against his chest, feeling his pulse jump beneath your palm despite his carefully composed expression, tether warm and quiet between you at this close a range. "Before we chase this any further — what does it actually cost you, personally, if this doesn't resolve cleanly? You said your own house is compromised. What happens to you specifically, if we expose them for what they've done?"

He's quiet long enough that you already know, before he even speaks, that the honest answer isn't a comfortable one to give. "Everything, potentially. Rank, standing, quite possibly worse, depending how deep this particular rot actually runs beneath the surface of my house. I'm asking you to help me burn down my own house from the inside, and I don't have the right to pretend that's a small thing to ask of anyone, let alone a stranger I bound to myself by accident in a stolen vault."

"Then why do it at all? Why not simply walk away and let someone else carry that particular weight instead of you?"

"Because the alternative is letting whoever orchestrated this keep using people like you as raw material for weapons exactly like this one, over and over, until someone finally stops them for good." Something steady and entirely certain settles into his voice now, no performance left in it whatsoever, no soldier's careful diplomacy softening the edges. "That matters more to me than whatever it personally costs me to say it aloud tonight. I would rather lose my house honestly than continue standing inside one built on this kind of rotten foundation."

It isn't comfortable, watching a man decide to dismantle his own life in front of you, tether steady and warm where it links you. But it is real, unmistakably real, and tonight, standing this close to him with the binding humming quiet between your ribs, that counts for considerably more than comfort ever could.

The trail leads back toward his own war-band's territory, and what's waiting there proves worse than either of you expected: old ledgers, a rewritten glyph-key, a name that makes his expression go carefully blank. Someone within his own house built this binding on purpose, as a weapon aimed at strangers exactly like you, and the tether between you is the proof of it, still humming with someone else's intent.

"Whatever's true for you," he says, once the full shape of the betrayal lies bare between you both, the tether pulled taut with the weight of it, "I need it now. Not the safe version. Not anymore, not with this much already laid open on the table."`,
      choices: [
        { label: "Open your heart completely — Give him everything the binding is actually asking for. Stop guarding, start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give him only the truth he needs, nothing more.", next: "n6_final_hold" }
      ]
    },

    n6_final_hold: {
      locked: true,
      chapter: "Six — What You're Willing to Risk",
      text: `"What's necessary," you say, and you make yourself hold his gaze while you say it, tether steady and quiet between you, "is that we sever their control over this and neither of us dies proving a point in the process. That's what's true tonight, standing over your house's own betrayal. The rest of it isn't relevant to actually winning this fight, whatever else either of us might privately feel."

He studies you a long moment, and whatever cautious hope had been quietly building behind his eyes since the grain store closes like a door pulled carefully shut rather than slammed in anger. The tether between you doesn't tighten or slacken. It simply holds, exactly where it's always held, neither closer nor further.

"Understood," he says, quiet, controlled. "Then let's finish this on exactly those terms, and nothing more than that."`,
      choices: [
        { label: "Stand together and end it, exactly as agreed — Finish this on the terms you already gave him. No more, no less.", branchOn: { flag: "guarded", ifTrue: "n6_severance", ifFalse: "n6_reckoning" } },
        { label: "Walk away instead — Refuse to finish this on a lie. Let the binding fade slowly rather than force it.", next: "n6_unbound" }
      ]
    },

    n6_surrender: {
      locked: true,
      chapter: "Six — Surrender",
      text: `"The truth," you say, "is that I stopped thinking of this as a leash somewhere around the point I started feeling disappointed whenever you stepped too far toward the edge of its reach. I don't know precisely when that happened, or which hour of this impossible night it snuck up on me. I only know I don't want to undo it now, simply because admitting it out loud is inconvenient — or because a house full of strangers is about to watch me say it plainly."

He crosses what little distance remains between you in two unhurried steps, and this time there's no tether pulling him there, no dying ritual, no convenient excuse required — just his hands framing your face like he's committing every line of it to memory against the possibility of losing it all over again, the way he very nearly did in that vault.

"Say that again," he murmurs, forehead dropping to rest against yours, breath unsteady. "Let me feel it travel the whole length of the tether this time, instead of just hearing it said."

You do. Standing over the evidence that's about to end his standing and expose a conspiracy three months in the careful making, the two of you speak the whole truth aloud, nothing held back for either of you to hide behind any longer. The tether doesn't merely go slack — it dissolves entirely where it crosses the space between your joined hands, the silver glyphs along both your wrists brightening once, fiercely, before settling into something that no longer looks like a binding at all. The rewritten glyph-key unravels between your joined hands, the sabotage undone not by force or blade but by there being nothing left in either of you for it to exploit, no seam, no guarded corner left standing.

Whatever comes next — his house, the fallout, every part of both your lives this single night upends completely — you face it having already said the truest thing either of you has managed to say aloud all week, tether or no tether left to hold you there.

"Stay," he says. Not a command this time. A genuine question, for the first time since the tower.

"Try and stop me," you answer, and mean every single word of it, the place where the tether used to be finally, quietly, feeling like something other than a chain.

Later, when the worst of tonight's fallout has settled into something more like a plan than a disaster, he traces the fading glyph along your wrist with something that looks almost like wonder. "It's healing," he says. "Not scarring like a weapon left behind. Healing like a wound that's finally allowed to close."

"Maybe it never was a weapon at all. Maybe it was just waiting for someone to actually mean what they said standing inside it, glyph and all."

He doesn't have an answer for that. He doesn't seem to need one, not tonight, not with your hand still resting warm and unbound in his.`,
      ending: true,
      tag: "Ending: Surrender"
    },

    n6_reckoning: {
      locked: true,
      chapter: "Six — Reckoning",
      text: `"What's true," you say, "is that I stopped seeing you as the enemy several days ago now, if I'm entirely honest with both of us, and I'm not going to pretend that's nothing. But I'm also not going to pretend it's simple, not with everything this particular truth is about to cost you and your house tonight."

It isn't the declaration he might have quietly hoped for, standing over evidence that's about to unmake everything he's known. You watch him recalibrate rather than deflate, shoulders squaring instead of dropping, the soldier in him rising to meet even this harder, more complicated truth.

"It's honest," he says. "That's precisely what this needs tonight — not a fairy tale sworn over stolen ledgers, but the truth, whatever imperfect shape it actually takes standing here between us."

Standing over the evidence together, you speak your complicated, careful truth aloud, and it proves enough — the tether loosens by degrees rather than all at once, the sabotage unraveling at the seams as his house's conspiracy is laid bare for exactly what it is, undone by two people who told the truth without needing it to already be a love story to matter.

Afterward, in the wreckage of everything his house is about to lose, he doesn't reach for you the way he might have if you'd said something softer, something easier to hear in this exact moment.

"We don't have to decide the rest of it tonight," he says instead, voice careful, the tether resting slack and quiet between you like something neither of you needs to test anymore. "The binding's broken either way now. Whatever exists between us can take whatever time it actually needs to become something real, rather than something rushed to satisfy a spell."

"That's unexpectedly reasonable, for a man who just watched his own house burn down in front of me."

"I'm told I've had a very educational week." A faint, entirely real almost-smile breaks through the exhaustion carved into his face. "Turns out I learn rather fast, under sufficient pressure and a well-aimed ward that wasn't even meant for me."

You spend a long moment simply looking at each other across the wreckage of ledgers and old certainties, the space where the tether used to hold you both finally, mercifully quiet. Neither of you reaches to close the remaining distance. Neither of you steps further away either.

"For what it's worth," he adds, quieter now, "I'm glad it was you who caught me tonight, and not someone with considerably less patience for the truth than you've shown."

"Give it time," you say. "My patience has limits too, tether or none."

"I'm counting on finding out exactly where those limits sit."`,
      ending: true,
      tag: "Ending: Reckoning"
    },

    n6_severance: {
      locked: true,
      chapter: "Six — Severance",
      text: `Standing over the evidence together, you say only what's necessary — careful, guarded, exactly as much truth as you've allowed yourself to speak all night. The tether flares silver and tight rather than loosening — and resists, refusing to fully unravel between you.

"It's not enough," he says, understanding it in real time, the exact moment the unraveling stalls beneath your joined hands. "It has to be everything. You have to mean it completely, or the binding leaves them a way back in through whatever's left unsaid between us—"

The sabotage fights back, hard and sudden. Whatever's left of the conspiracy's control finds the gap your guarded honesty left open and drives straight into it without hesitation. You fight — dragon-blood or not, a mage who nearly took his arm off once doesn't fight any less fiercely the second time around, glyphs sparking wild at your fingertips, tether snapping taut and slack in violent, uneven pulses — and between the two of you the immediate threat is beaten back, his house's worst secret exposed regardless of the cost either of you paid to expose it.

But the binding itself doesn't fully sever. Can't, built as it was on half-truths held at careful, deliberate arm's length from the very start of tonight.

"It'll fade eventually," he says afterward, standing the full length of the room away from you, voice carefully, deliberately even despite the blood on both your hands. "Slowly. Not the clean break it genuinely could have been, if you'd let it be fully honest tonight."

"I did what I came here to do. The conspiracy's exposed, your house can no longer hide it."

"You did." No accusation in it whatsoever, which is somehow considerably worse than if there had been. "That was always going to be enough to win tonight. I think we both already know it was never going to be enough for the rest of it, whatever the rest of it might have become between us, tether and all."

No dramatic final argument. Just two people who did the necessary thing and left everything else exactly where they found it — unresolved, guarded, chosen with open eyes this time instead of avoided in the dark of a stolen vault, the tether's faint, unfinished glow the only thing left still holding you loosely together.`,
      ending: true,
      tag: "Ending: Severance"
    },

    n6_unbound: {
      locked: true,
      chapter: "Six — Unbound",
      text: `"No," you say, and it comes out steadier than you expect it to, standing over evidence that could unmake you both. "I'm not standing here performing a certainty I don't actually have, not even to save your house from itself. Not even for this, tether or no tether."

He doesn't reach for you. Doesn't argue. Just looks at you like he's recalculating something he was entirely certain he'd already understood about how tonight would end, and finding the new arithmetic doesn't quite balance the way he'd expected.

"Then don't," he says finally. "I'd rather lose my house honestly than win it on a lie you told standing next to me over that ledger, whatever the cost of honesty turns out to be for either of us."

You walk away before the confrontation plays out fully. The binding holds just enough to keep the worst of the sabotage's immediate danger contained — a temporary reprieve, not a genuine solution, bought by the honesty of your refusal rather than the strength of a bond neither of you finished building between you. It won't hold forever. You both know that with uncomfortable, quiet certainty, the tether's faint hum the only proof it hasn't fully let go yet.

At the door, he stops you — not with a hand, just with your name, said plainly, no performance left in it for what might be the first time all night, all week, possibly longer than either of you have known each other.

"For what it's worth," he says, "I'd rather have this — you, honest, walking away from me — than a version of you that stayed for entirely the wrong reasons, built on a lie neither of us could sustain past tonight."

You don't have a ready answer for that either. You leave anyway, the conspiracy still smoldering behind you in his house's ledgers, the tether still faintly humming between you both across whatever distance now separates you — and for the first time since the tower, nothing unsaid weighing down the road stretching out ahead of you into the dark.

You don't look back at the grain store, or the lantern still burning low inside it, or the man standing very still in its doorway watching you go. You've learned, the hard way, over three careful years, that looking back is how the past decides it isn't finished with you yet.

The tether will fade eventually. You tell yourself that's the outcome you actually wanted, glyph and all, whatever quiet doubt still lingers where it used to sit warm against your ribs.`,
      ending: true,
      tag: "Ending: Unbound"
    }
  }
};
