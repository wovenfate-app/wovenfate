// Court of Salt and Drowning — third title. Rewritten/expanded to match
// Ember Court's density and prose style while preserving the exact same
// branch structure, locked flags, and choice logic as the original.
// Same engine contract: { startNode, nodes }, each node
// { chapter, text, choices | ending }.

export const saltAndDrowning = {
  startNode: "n1",
  nodes: {

    n1: {
      chapter: "One — What the Tide Took",
      text: `Your sister has been missing three days when the tide finally gives her back — not drowned, not quite alive either, skin gone the pale blue-grey of something that belongs underwater now, hair still fanned out around her head on the sand like she hasn't quite realized she's no longer floating. The healers in the village won't touch her. They stand in the doorway of your own cottage and refuse to cross the threshold, and you watch their faces do the particular, careful work of people deciding how to say *I won't* without ever saying it aloud. They say the sickness in her isn't a sickness at all.

They're not wrong. You've treated fever, rot, poison, the ordinary cruelties of ordinary bodies, your hands steady through all of it because steadiness is the only thing you have to offer a dying stranger. You have never treated a girl who breathes salt water instead of air and doesn't seem to notice the difference, whose pulse comes in a rhythm that matches the tide outside your window rather than her own failing heart.

The old woman who sells charms at the harbor — half mad, everyone says, though everyone still buys from her when the ordinary remedies fail — tells you what no one else will say aloud, her voice dropping low even though the two of you are entirely alone. The sea-fae court took something of hers when she wandered too close to the tide-line at dusk, the way girls sometimes do, chasing something pretty in the shallows. And it's slowly taking the rest of her now, the way a debt collects interest whether or not you remember agreeing to the loan. There's only one way to stop it. Go under. Ask the court to name its price, and pay whatever it asks before it decides to simply take instead.

Nobody sane makes that bargain willingly.

You are, by the time you reach the shoreline that night — salt spray already soaking through your boots, your sister's shallow, wrong-rhythmed breathing still echoing in your ears from the room you left her in — no longer feeling especially sane, and no longer particularly interested in becoming sane again before morning.`,
      choices: [
        { label: "Walk into the water before you can think better of it — Trust your own resolve more than your fear of what waits below.", next: "n2a" },
        { label: "Wait for the court to come to you instead — Meet whatever's coming on ground you at least partly control.", next: "n2b" }
      ]
    },

    n2a: {
      chapter: "Two — Under",
      text: `The water doesn't feel cold once you're past your knees. It feels like being expected, like walking into a room where every candle was already lit for your arrival.

You go under fully at the fourth step, and the drowning that should happen doesn't — your lungs adjust to something that isn't quite water and isn't quite air, a strange, thick breathing that your body accepts far too easily for your own comfort, and the surface above you seals over like it was never there at all, like the night sky and the fishing boats and your sister's cottage belong to a story you only half remember now. The court reveals itself the way a bruise reveals itself: slowly, and in colors that shouldn't exist under any sky, deep violets and drowned golds bleeding up through water that has no business holding light at all.

He's waiting at the threshold of it, exactly like the stories warn — pale as bone, dressed like mourning, eyes the flat grey of a sea with nothing left to give anyone. Exiled, the charm-seller had said, though she hadn't said from what, or why. Cast out from his own court's favor for a crime no one above the water remembers correctly anymore, the details worn smooth by however many years of retelling.

"You shouldn't have come here whole," he says, studying you the way you imagine he studies currents — patient, assessing, faintly, infuriatingly curious. "Most who walk in do it already half-claimed. Grief does most of the court's work for it, long before anyone reaches the threshold."

"My sister isn't half-claimed. She's dying, and I don't have the luxury of your patience."

Something crosses his face — not quite sympathy, something older and warier, a caution that looks hard-won rather than natural to him. "Then you'll want to speak carefully down here. Everything has a price beneath this water, whether you ask for it or not. I'd rather you understood that plainly before you start bargaining, not after you've already lost something you didn't mean to offer."`,
      choices: [
        { label: "Demand to see whoever's responsible — Refuse vague talk of currents and tides. Someone made this choice; make him name them.", next: "n3" },
        { label: "Ask why he's the one who came to meet you — Press on his motives before his mercy. Exiles rarely act without reasons of their own.", next: "n3_pressed" }
      ]
    },

    n2b: {
      chapter: "Two — He Comes to the Shallows",
      text: `You don't go under. You stand at the tide-line instead, feet bare in the freezing shallows, arms wrapped around yourself against a cold that has nothing to do with the water — some instinct older than fear telling you that walking fully into a bargain you don't understand is exactly the kind of mistake that gets people's sisters half-drowned in the first place, and you refuse to compound one tragedy with another before the night is even through.

He surfaces just past midnight, close enough to shore that the moon catches him properly for the first time: pale as bone, dressed like mourning, eyes the flat grey of a sea with nothing left to give, water sheeting off him in a way that doesn't quite obey the laws you learned as a healer.

"Careful," he says, an odd note of approval threading through the single word. "Most who come here don't think to wait at the edge first. They go under before they've asked a single question worth asking."

"I'm not walking into anything until I understand exactly what took my sister, and why."

"Wise." He studies you the way you imagine he studies currents — assessing, patient, faintly surprised to find something worth this much careful attention standing on an ordinary beach. "The court claimed her. Not maliciously — the tide simply takes what wanders too close to it too often, the way rot quietly claims fruit left too long in the sun. I can't undo that from here, standing in the shallows making polite conversation. You'd have to come under properly, and bargain in earnest."

"Then take me under."

"That's a request you'll want to make more carefully than you just did, healer." Something almost gentle moves beneath the warning in his voice. "Everything down here has a price, and very few who ask for it understand the full weight of what they're asking."`,
      choices: [
        { label: "Demand to see whoever's responsible — Refuse vague talk of currents and tides. Someone made this choice; make him name them.", next: "n3" },
        { label: "Ask why he's the one who came to meet you — Press on his motives before his mercy. Exiles rarely act without reasons of their own.", next: "n3_pressed" }
      ]
    },

    n3: {
      chapter: "Three — The Cost of Asking",
      text: `"Responsible," he repeats, like the word tastes strange in his mouth, foreign in a way that suggests it's been a long time since anyone asked him to assign blame for anything down here. "The court doesn't have a single throat to throttle, if that's what you're picturing standing there with your hands already curling into fists. It has currents. Appetites, old and patient and entirely without malice. Your sister wandered into one of them, the same way anyone drowns — not through cruelty, just through the tide not caring one way or the other whether she lived or drowned that particular evening."

"That's not good enough. Someone has to answer for this."

"No," he agrees, quiet, almost gentle, "it isn't good enough. Which is precisely why I'm the one who met you at the threshold, rather than leaving you to whatever else might have found you first down here." He leads you deeper, through halls that seem built from something between coral and bleached bone, drowned light filtering down from nowhere obvious, no sun, no lantern, just an ambient glow that seems to come from the water itself. "I can undo what's been done to her. The court still answers to old debts, and I am owed a great many of them, accumulated over more years than you'd care to hear about. But undoing a claim requires binding something else in its place, and I won't let you offer yourself up blindly without understanding exactly what that costs a person."

"Then tell me plainly. I didn't come this far to be handled gently."

"A season, at minimum. Bound to this court, unable to surface, in exchange for her release back into air and sunlight." His eyes don't leave yours, steady, unflinching. "I've watched people pay that price without understanding what a season down here actually does to someone who isn't built for this particular dark. I'd rather you go in with your eyes fully open than not at all, whatever that costs me in convincing you to stay."`,
      choices: [
        { label: "Guard yourself — Treat this as a transaction to survive. Keep enough of yourself back that leaving stays possible.", next: "n4a" },
        { label: "Let yourself actually trust him — Set the suspicion down, if only for tonight. See what's left of you when you do.", next: "n4b" }
      ]
    },

    n3_pressed: {
      chapter: "Three — Why You",
      text: `"Why did you come yourself," you ask, studying the careful stillness that settles over him at the question, "instead of sending someone else, or no one at all? A healer washing up half-drowned on your threshold seems a small enough thing for a court to ignore."

He's quiet long enough that the silence itself becomes an answer, stretching out between you like something with its own weight. "Because I know exactly what it costs to be claimed by something that doesn't ask permission first, or explain its terms honestly before extracting its price. I was exiled from favor here for objecting too loudly to a bargain much like the one you're about to make. I'd rather stand between someone and that particular mistake than pretend I didn't recognize it happening again right in front of me."

"That's not really an answer either. That's a confession dressed up as an explanation."

"It's the truthful one, which is rarer down here than you'd think, even among exiles who've had nothing but time to practice honesty." A ghost of something wry moves through his expression, there and gone. "The court doesn't have a single throat to throttle. It has currents, appetites — your sister wandered into one, the way anyone drowns. Not malice. Just tide, indifferent and patient and entirely without cruelty."

He leads you deeper, through halls built from something between coral and bleached bone, the drowned light growing stranger the further you descend. "I can undo the claim on her. It requires binding something else in its place — a season bound to this court, unable to surface, in exchange for her release. I've watched people agree to that without understanding what it truly does to someone not built for the dark down here, the particular way it wears at a person's edges. I'd rather you understand fully before you offer anything of yourself tonight."`,
      choices: [
        { label: "Guard yourself — Treat this as a transaction to survive. Keep enough of yourself back that leaving stays possible.", next: "n4a" },
        { label: "Let yourself actually trust him — Set the suspicion down, if only for tonight. See what's left of you when you do.", next: "n4b" }
      ]
    },

    n4a: {
      locked: true,
      chapter: "Four — What You Won't Give Away",
      text: `"A season," you say, arms crossed, putting the words between you like a wall you're actively building brick by careful brick. "Fine. I'll survive a season. I don't need you managing how I feel about it while I do, or softening the edges of something I've already agreed to."

Something flickers behind his grey eyes — not hurt, exactly, something more practiced and worn than that, like a man well used to being kept at careful arm's length and mostly, resignedly, at peace with it by now. "Understood."

"I mean it. I'm here for her, not for anything else this court, or you, might be quietly offering underneath the bargain."

"I never assumed otherwise." His voice goes carefully even, the tone of someone closing a door with real precision instead of slamming it in frustration. "I'll show you the terms of the binding in full. You'll want to know exactly what a season down here genuinely requires before you agree to any of it in earnest, rather than in theory."

He doesn't push past the distance you've drawn between you. Doesn't try to close it, doesn't linger a single moment longer than the practical requires, moves through the drowned halls with the careful economy of a man who has learned not to take up more space than he's been offered. You tell yourself that's a relief, that distance is exactly the safety you came down here needing.

You almost believe it, walking half a pace behind him through corridors that seem to reshape themselves the longer you look at them, water pressing warm and strange against skin that should, by every law you know, already be drowning.

You catch yourself, more than once, watching the careful way he moves — nothing wasted, nothing performed, a man who has clearly learned to take up exactly as much space as he's been permitted and not an inch more. It's a particular kind of loneliness, you think, though you don't say so aloud. You recognize the shape of it too well from your own years spent making yourself small in rooms that never quite wanted you there.

"You're quiet," he observes, without turning around.

"I'm thinking."

"About the bargain, or about me?" There's no real teasing in it, just genuine, careful curiosity.

"Does it matter which?"

"Possibly not," he admits, and says nothing further, leading you deeper into a court that seems to grow stranger, more beautiful, and more dangerous with every hall you pass through together.`,
      choices: [
        { label: "Learn the true terms of the binding — Hear the full cost before you agree to any of it. No more surprises buried in fine print.", next: "n5", setFlag: { name: "guarded", value: true } },
        { label: "Ask what happened to him, specifically, when he was exiled — Press past his careful composure. Find out what this cost him the first time.", next: "n5_pressed", setFlag: { name: "guarded", value: true } }
      ]
    },

    n4b: {
      locked: true,
      chapter: "Four — What the Dark Doesn't Take",
      text: `You don't pull away from him. It surprises you more than it seems to surprise him — like some part of you decided, somewhere between the shoreline and this drowned chamber, that a man willing to warn you honestly about a price rather than let you walk blind into it had earned more than wary distance, more than the careful suspicion you'd rationed out to every stranger since your sister washed up wrong on the sand.

"You don't have to do this alone," he says, quiet, closer than the conversation strictly requires, his voice pitched low in a way that makes the drowned water seem to hold still around you both.

"I know how this sounds. Trusting the first thing that offered to help, three days into the worst week of my life."

"It should sound like caution earned somewhere real. I'd rather you kept some of it, even now." Something almost rueful moves through his expression. "I'm only asking you not to mistake ordinary caution for the same thing as refusing every hand offered to you down here, even the honest ones."

His hand, when it finds yours, is colder than a human hand should be and steadier than you expect from something that spends its existence claimed by exile and old grief. Neither of you pulls back, and the water around you seems to notice, currents shifting subtly closer like curious, patient animals.

Whatever this season under the water is going to cost you, it stops feeling like something you're facing entirely alone — which terrifies you almost as much as the tide itself did, and for reasons that have nothing whatsoever to do with drowning, and everything to do with how easily you've let a stranger's hand steady you.

"Tell me the terms," you say eventually, not moving, his pulse — impossibly, he has one — steady beneath your fingers. "All of them. I want to understand precisely what I'm agreeing to before I agree to it."

"You will," he promises, voice low. "Every single word of it, I swear on whatever standing I have left to swear on."`,
      choices: [
        { label: "Learn the true terms of the binding — Hear the full cost before you agree to any of it. No more surprises buried in fine print.", next: "n5", setFlag: { name: "guarded", value: false } },
        { label: "Ask what happened to him, specifically, when he was exiled — Press past his careful composure. Find out what this cost him the first time.", next: "n5_pressed", setFlag: { name: "guarded", value: false } }
      ]
    },

    n5: {
      locked: true,
      chapter: "Five — The Truth Below the Truth",
      text: `The terms, laid bare in the drowned light of the court's oldest chamber, are worse than a season, and you feel the floor of your resolve shift slightly beneath you as he lays them out one careful piece at a time.

"It was never going to be a clean trade," he admits, and for the first time since the shoreline, something like genuine guilt moves through his voice, raw beneath the careful composure he's worn since you first saw him. "The court doesn't just want a season of your presence, counted out like coins. It wants a season of your belief — genuine surrender to this place, not merely tolerance of it gritted through clenched teeth. A grudging guest doesn't satisfy the claim, however long they stay. It has to be someone who actually chooses to remain, not someone silently counting days until release."

"You didn't lead with that particular detail."

"I was afraid you'd refuse before understanding there's no version of this bargain that doesn't ask something real of you, something that can't simply be endured." He meets your eyes, unflinching, letting you see exactly what the admission costs him. "I could have let you believe it was simpler than it is. I'd rather you resent me now for the truth than thank me later for a comfortable lie that leaves you trapped down here permanently, when the court eventually decides a grudging season doesn't actually count toward the debt."

The water around the chamber stirs, patient, listening, currents curling close like something genuinely curious about what you'll say next.

"There's still a way through this," he says, voice dropping lower, more urgent now. "But it requires you to actually mean whatever you offer this place, not merely perform it for an audience. If you're only pretending to accept this, the court will know — it always knows — and it will simply take longer. Take more, in the end, than it would have asked honestly from the start. Whatever's true for you, standing here in this drowned light, I need it plainly. Not the version that sounds safest to say aloud."`,
      choices: [
        { label: "Open your heart completely — Give the court everything it's actually asking for. Stop performing certainty and simply feel it.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the court only the truth it needs, nothing more.", next: "n6_final_hold" }
      ]
    },

    n5_pressed: {
      locked: true,
      chapter: "Five — What Exile Cost Him",
      text: `"Tell me," you say, before he leads you anywhere else, planting yourself in the drowned corridor with the same stubbornness that's carried you this far already. "What actually happened. Why they truly exiled you, not the polite version you've been offering."

He's silent long enough that you genuinely think he won't answer at all, the water around you both holding its breath along with him. "There was another bargain, years ago now, though the years move strangely down here. Someone like you — desperate, unprepared, offered a season's binding without anyone bothering to explain the fine print of it to her properly. I objected. Loudly, and to entirely the wrong people, in front of an audience that mattered far more than I understood at the time. The court doesn't tolerate its currents being questioned publicly, whatever the justification. I was cast out from favor for it, left to linger at the threshold instead of the center, ever since that single loud night."

"Did it help? The person you objected for?"

"No." The word costs him something visible to say, a flicker of old grief crossing features usually schooled into careful neutrality. "That's the part I don't tell people, the part that actually matters. I made a scene, lost my standing entirely, and it changed nothing for her at all in the end. She paid the full price regardless. I've been considerably more careful about how I intervene, ever since that failure — which is precisely why I'm telling you everything now, plainly, instead of making the same performative, useless gesture a second time."

The terms, when he finally lays them bare before you, prove worse than a mere season: the court wants genuine surrender, not grudging tolerance — someone who chooses to stay of their own free will, not someone silently counting days until release.

"Whatever's true for you," he says, quiet and steady, "I need it plainly now, standing here where the water can hear every word. Not the version that sounds safest to say."`,
      choices: [
        { label: "Open your heart completely — Give the court everything it's actually asking for. Stop performing certainty and simply feel it.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the court only the truth it needs, nothing more.", next: "n6_final_hold" }
      ]
    },

    n6_final_hold: {
      locked: true,
      chapter: "Six — What You Won't Perform",
      text: `"What's necessary," you say, holding his gaze steady even as the current tugs gently at your sleeves, "is that my sister surfaces breathing air again, whole and alive. That's what's true tonight. I'm not going to manufacture something deeper than that simply to satisfy a current's particular appetite."

He studies you a long moment, something behind his grey eyes quietly settling into resignation rather than surprise, like a man watching a familiar tide pull back out to sea exactly when he expected it to.

"Understood," he says, voice even. "Then let's see if the court accepts honesty this plain, whatever the cost of testing that turns out to be."`,
      choices: [
        { label: "Offer the plain truth and see if it's enough — Finish this on exactly the terms you already gave. No more, no less than that.", branchOn: { flag: "guarded", ifTrue: "n6_severance", ifFalse: "n6_reckoning" } },
        { label: "Refuse the bargain entirely and find another way — Walk back out of the water. Let the debt go unpaid rather than surrender a lie.", next: "n6_unbound" }
      ]
    },

    n6_surrender: {
      locked: true,
      chapter: "Six — Surrender",
      text: `"The truth," you say, "is that somewhere between the shoreline and this chamber, staying stopped feeling like a sentence and started feeling like something else entirely, something I don't have a tidy word for yet. I came down here to save my sister. I'm not leaving pretending that's the only reason I'd want to stay in this drowned, impossible place."

He goes very still, the particular stillness of a man who has spent longer than he'd ever admit aloud not expecting to be chosen by anything down here, least of all willingly, least of all by a healer with salt-cracked hands and a sister waiting above the water.

"Say that again," he murmurs, voice rough in a way you haven't heard from him yet, "where the current can carry it to every corner of this court, so none of them can pretend they didn't hear it."

You do. Standing in the drowned light, nothing held back, and the water around you responds the way it never has to a grudging bargain: it stills, and settles, and releases its claim on your sister not because a debt was paid in full but because there's nothing left hidden between you for it to hold hostage against either of you. Somewhere above, in air you can no longer quite remember the exact taste of, you feel her breathe freely again, lungs finally, fully her own.

"Stay," he says. Not a term of the bargain this time. A question, entirely his own, offered with nothing behind it but himself.

"Try and make me leave," you answer, and mean it more than you've meant anything in your entire life above the water, the current settling warm and certain around you both like something finally, quietly, at rest.

Later, when the drowned light has dimmed to something softer, something closer to dusk than midnight, he traces the place on your wrist where a scar from an old bargain would have gone, if you'd let the court take you the way it takes everyone else. "You're still whole," he says, something like wonder in it. "I don't entirely know how you managed that."

"Maybe I just had a better reason to stay than most people who come down here."

"Maybe," he agrees, and doesn't let go of your hand for a long time after.`,
      ending: true,
      tag: "Ending: Surrender"
    },

    n6_reckoning: {
      locked: true,
      chapter: "Six — Reckoning",
      text: `"The truth," you say, choosing each word as carefully as you'd choose a suture, "is that I don't hate this place the way I expected to when I first walked into the water. I don't know yet if that's real, or simply relief talking after three impossible days. I'm not going to perform a certainty I don't actually have, not even to save her faster than the truth allows."

It's not the surrender he might have hoped the court would settle for. You watch him brace, visibly, for it to be refused outright.

Instead, the water stills anyway — slower, more grudging than it might have been, but genuine, accepting complicated honesty in place of a cleaner, easier declaration. Your sister surfaces breathing, somewhere far above you both, safe and whole and entirely herself again.

"That shouldn't have worked," he admits afterward, something like real wonder moving through his voice.

"Maybe the current prefers honesty to theater, whatever shape the honesty happens to take."

"Maybe." A real, careful almost-smile crosses his face, the first you've seen from him all night. "We don't have to decide the rest of this tonight, down here in the drowned dark. You're free to surface whenever you're ready. Whatever's between us can take whatever time it actually needs to become something neither of us has to perform for the other."

It isn't the ending where everything resolves itself in a single drowned night. It's the one where your sister lives, the truth was genuinely enough even unfinished, and whatever comes next between you gets built slowly, deliberately, on terms you actually chose for yourself.

He walks with you back toward the threshold, close but not touching, the current parting gently around you both like something finally satisfied rather than merely fed. "For what it's worth," he says, just before the water begins to thin toward the surface, "I don't think I've ever actually wanted someone to come back before. I find I'd like you to, whenever you're ready to."

"That's not nothing," you say, and mean it.

"No," he agrees, quiet. "It isn't."`,
      ending: true,
      tag: "Ending: Reckoning"
    },

    n6_severance: {
      locked: true,
      chapter: "Six — Severance",
      text: `You offer the plain truth, guarded and careful, exactly as much as you've allowed yourself all night, and the water studies it the way a predator studies something that hasn't quite decided whether to run yet.

"It's not enough," he says, understanding it a moment before you do, urgency sharpening his voice. "It has to be real surrender, not a transaction dressed carefully as one—"

The current surges without warning, rising fast around you both. Whatever claim still holds your sister tightens rather than releases, and you fight — genuinely fight, healer's hands finding uses they were never trained for, desperation lending you a strength you didn't know you had — until between the two of you, the immediate danger is beaten back and she's pulled free of the worst of it, breathing, alive, safe enough for tonight at least.

But the binding doesn't fully release. Can't, built as it was on guarded honesty held at careful, deliberate arm's length instead of the whole truth the court actually demanded.

"She'll live," he says afterward, the full length of the chamber between you now, voice carefully, deliberately even despite everything. "The claim will fade on its own, eventually. Slowly. Not the clean release it genuinely could have been, if you'd let it be."

"I did what I came here to do. I saved her."

"You did." No accusation in it whatsoever, which somehow makes it considerably worse than if there had been one. "That was always going to be enough to save her tonight. I think we both already know it was never going to be enough for the rest of it, whatever the rest of it might have become between us."

No dramatic parting between you — just two people who did the necessary thing and left everything else exactly where the tide found it three days ago: unresolved, guarded, chosen with open eyes this time instead of avoided in the dark water.`,
      ending: true,
      tag: "Ending: Severance"
    },

    n6_unbound: {
      locked: true,
      chapter: "Six — Unbound",
      text: `"No," you say, steadier than you expect your own voice to be standing this deep in drowned water. "I'm not offering this court a version of myself I don't actually mean, not even for her, not even to save the one person left in this world who's truly mine. There has to be another way, and I'm going to find it instead of settling for this one."

He doesn't argue. Doesn't try to talk you back into the bargain the way you half expected him to. Just watches you with something that might be respect, might be quiet grief at a door closing that he'd perhaps hoped, against his own better judgment, would open instead.

"There might be another way," he admits finally, voice thoughtful. "A harder path, older magic, considerably less certain — but it wouldn't ask you to surrender anything you don't genuinely mean to give of your own free will. I'll help you find it, if you'll let me. Not because the court asks it of me, or expects it. Because I'd rather see you leave this place whole than watch you talked into something you'll spend years regretting."

You don't have a ready answer for the offer beyond simply accepting it. The two of you begin the longer, uncertain work of finding a way to save her that doesn't cost you an entire season of pretending — the current still humming around you both, unclaimed, unresolved, and for the first time since the shoreline, entirely your own choice left to make.

"For what it's worth," he says, walking beside you into the deeper dark, "I'd rather help you find a harder truth than watch you settle for an easier lie, even one this court would have happily let you tell yourself."

You don't answer right away, listening instead to the strange, patient quiet of a court that has, for once, not gotten exactly what it wanted from a bargain. It's not victory, precisely. But it isn't defeat either, and after three impossible days, you'll take whatever middle ground you can find.

"Why help me at all," you ask eventually, "when it costs you nothing to simply let me fail and try again some other way?"

"Because I remember, very clearly, what it felt like to have no one willing to say the harder thing when I needed it most." He doesn't look at you as he says it, eyes fixed on the dark water ahead. "I'd rather be that person for someone else, even once, than keep collecting the debt this court seems determined to hand out freely."`,
      ending: true,
      tag: "Ending: Unbound"
    }
  }
};
