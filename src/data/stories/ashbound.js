// Ashbound — fifth title. Rewritten/expanded to match Ember Court's
// density and prose style while preserving the exact same branch
// structure, locked flags, and choice logic as the original. Same
// engine contract: { startNode, nodes }, each node
// { chapter, text, choices | ending }.

export const ashbound = {
  startNode: "n1",
  nodes: {

    n1: {
      chapter: "One — The Terms of Peace",
      text: `Two hundred years of war between your house and his ends, apparently, with a piece of paper and your signature on it, delivered to your rooms on a council courier's silver tray like it's an invitation to dinner rather than the end of the only life you've ever known.

"An alliance marriage," your mother says, like she's announcing the weather rather than your entire future, not looking up from the ledgers spread across her desk. "Both houses have bled themselves nearly to ash over two centuries of this. The councils agree it ends now, or it ends both bloodlines entirely, and there won't be anyone left to argue about which was the more honorable way to go extinct."

"And 'ends now' means marrying the heir of the house that burned three of our border towns."

"It means marrying the heir of the house whose towns *your* father burned in return, before you get sanctimonious about who started what." Her voice doesn't soften, doesn't so much as glance up from the columns of numbers that have apparently mattered more than you for most of your life. "You've spent your whole life being told what he is by people who've never met him. I'd suggest meeting him before you finish deciding what you already believe."

You meet him three days later, in the scorched neutral ground between territories, both of you flanked by guards who'd clearly rather be doing anything else with their afternoon. He's exactly what two hundred years of propaganda promised: sharp-eyed, dragon-marked down one forearm in scales the color of his house's banners, radiating the particular arrogance of someone who's never once had to apologize for anything in his entire charmed life.

"So," he says, looking you over with unhurried, infuriating thoroughness, like you're a treaty clause he's deciding whether to accept. "You're the one I'm supposed to save two centuries of bloodshed by marrying."

"Try not to sound thrilled about it."

Something that might be the ghost of a real smile crosses his face, there and gone before you can be entirely certain you saw it. "Wouldn't dream of it."`,
      choices: [
        { label: "Refuse to play nice — Make him work for basic civility instead of assuming charm will carry the day.", next: "n2a" },
        { label: "Decide to be genuinely, disarmingly polite — See how badly it unbalances two centuries of expected hostility.", next: "n2b" }
      ]
    },

    n2a: {
      chapter: "Two — Making Him Work For It",
      text: `"I'm not going to pretend this is anything other than a transaction," you say, arms crossed, holding his gaze without flinching. "You get an alliance. I get to stop watching my people die on your border. Let's not perform anything warmer than that for an audience neither of us asked for."

"Fair enough." He doesn't seem remotely offended — if anything, something in his posture eases visibly, like bluntness is a language he actually prefers to the diplomacy he's clearly been drowning in for weeks. "Honestly, it's something of a relief. I was fully prepared for two hours of forced pleasantries and complimenting your house's ancestral tapestries."

"You're not going to argue that we should try to like each other, for the sake of appearances if nothing else?"

"I didn't say that." His eyes glint, entirely too pleased with himself for someone standing on scorched, disputed ground. "I said I wasn't going to pretend liking each other is required by the contract. Whether it happens anyway is a separate matter I intend to leave entirely up to you and your own considerable stubbornness."

"That's insufferably confident of you, for a man I've known for exactly four minutes."

"I've been told." He offers a mock-bow, somehow managing to make it both mocking and genuinely respectful at once, a neat trick you find yourself grudgingly admiring. "For what it's worth — I didn't burn your border towns personally. I was eleven, and considerably more interested in avoiding my tutors than strategic incendiary warfare. I'd rather you judge me on what I actually do from here forward, not what my father did before I had any say in any of it."`,
      choices: [
        { label: "Accept the terms and move to practical matters — Stop circling the point and start planning what comes next.", next: "n3" },
        { label: "Press him on what he actually wants from this — Push past the easy charm and find out what's underneath it.", next: "n3_pressed" }
      ]
    },

    n2b: {
      chapter: "Two — Disarming Politeness",
      text: `"I'm not going to spend two centuries of inherited grudge on someone who wasn't even born for most of it," you say, offering your hand properly, the way the old treaties technically require but no one from either house has bothered to actually do in living memory. "I'd rather start from something closer to even ground than two centuries of ash."

He blinks — actually blinks, visibly recalibrating, like genuine civility wasn't remotely on the list of things he'd braced himself for this afternoon. "That's unexpectedly generous, given what my house's banners probably mean to you, growing up on the stories I imagine you grew up on."

"It's practical, more than generous. Two hundred years of hating you on principle hasn't saved a single border town from either side. I'm willing to try something else, if only because nothing else has actually worked."

"Careful," he says, taking your hand, something warmer than diplomacy moving through his grip. "Keep being reasonable like that and you'll ruin my entire understanding of how this particular afternoon was supposed to go."

"How was it supposed to go, exactly?"

"Badly. Loudly. With significantly more shouting, possibly some minor property damage." A real smile breaks through now, unguarded for exactly a moment before he visibly reins it back in, like he's caught himself doing something forbidden. "I confess I don't entirely know what to do with someone from your house choosing decency first, unprompted. I'll need a moment to recalibrate my entire strategy for this meeting."

"Take your time," you say, and find you almost mean it. "We have, apparently, the rest of our lives for you to catch up to where I'm already standing."`,
      choices: [
        { label: "Accept the terms and move to practical matters — Stop circling the point and start planning what comes next.", next: "n3" },
        { label: "Press him on what he actually wants from this — Push past the easy charm and find out what's underneath it.", next: "n3_pressed" }
      ]
    },

    n3: {
      chapter: "Three — The Practical Matters",
      text: `The practical matters, it turns out, are considerable: a shared border fortress neither house trusts the other to hold alone, a wedding date set by council decree rather than either of you, and a treaty clause stating plainly, in language with no room for ambiguity, that if the marriage fails, the war resumes exactly where it left off, no grace period, no negotiation.

You read the document twice, then a third time, looking for some softer interpretation the councils might have buried in the margins. There isn't one. Two hundred years of careful, bloody legal precedent apparently doesn't leave room for softness, however either of you might feel about the arrangement privately.

"No pressure," he says dryly, reading the clause over your shoulder, close enough that you can feel the warmth of him at your back.

"Whoever wrote this clearly never expected either of us to survive the honeymoon, let alone two centuries of careful politics afterward."

"Small mercies — at least they're honest about the stakes involved, unlike most council documents I've had the misfortune of reading." He leans back, studying you with something more genuinely assessing now than the earlier performance of arrogance at the border. "I meant what I said out there. I'm willing to actually try this properly, not just tolerate it for the cameras and the assembled councils. But I'd rather know now, plainly, if you're only here because your mother left you no real choice in any of it."

"Isn't that true of both of us, if we're being honest about how we each ended up standing here?"

"Probably." Something almost vulnerable flickers through the usual practiced sharpness, there and gone quickly. "I'd still rather know which one of us is actually choosing this freely, once the choosing's finally allowed to matter beyond the treaty's fine print."`,
      choices: [
        { label: "Guard yourself — Treat this strictly as duty. Keep the arrangement clean and uncomplicated by feeling.", next: "n4a" },
        { label: "Admit you might actually want this to work — Say the honest thing out loud before caution talks you out of it.", next: "n4b" }
      ]
    },

    n3_pressed: {
      chapter: "Three — What He Actually Wants",
      text: `"What do you actually want from this?" you ask, watching his expression carefully. "Beyond the treaty requiring it of both of us, on pain of resumed warfare."

He considers the question longer than you expect from someone so quick with everything else, banter falling away entirely for the first time since the border. "Peace that outlasts both of us, honestly, more than anything else. I grew up watching my father treat this war as inheritance rather than tragedy — something to be managed carefully, passed down intact, never actually ended because ending it would have meant admitting it never needed to start. I don't want that particular legacy for whatever comes after us."

"That's a very diplomatic answer for a man who claims not to prefer diplomacy."

"It's also true, which I realize doesn't automatically follow from diplomatic in most people's experience of my house." A flicker of real irritation crosses his face, quickly smoothed back over into practiced ease. "You asked me a genuine question. I answered it honestly, instead of performing whatever polished response you probably expected my house to produce on command."

The practical matters, once you finally move to them, prove considerable: a shared border fortress, a council-set wedding date neither of you had any say in, a treaty clause stating plainly that if the marriage fails, the war resumes exactly where it left off.

"No pressure," he says dryly, reading it over your shoulder.

"I'd rather know now," you say, holding his gaze, "whether you're actually choosing this, or simply performing acceptance because the alternative is your father's war continuing under your own name instead of his."

"Both, probably, if I'm being fully honest with you. I'd like the chance to find out which one actually wins, now that the choosing's finally allowed to matter."`,
      choices: [
        { label: "Guard yourself — Treat this strictly as duty. Keep the arrangement clean and uncomplicated by feeling.", next: "n4a" },
        { label: "Admit you might actually want this to work — Say the honest thing out loud before caution talks you out of it.", next: "n4b" }
      ]
    },

    n4a: {
      locked: true,
      chapter: "Four — Strictly Business",
      text: `"Duty," you say, folding your hands in your lap with deliberate composure. "That's what this is, and I'd rather we both stay honest about it instead of performing something warmer for the assembled councils and their careful observers."

Something shutters behind his eyes — not hurt exactly, something more practiced than that, the look of a man who expected exactly this answer and prepared himself for it in advance regardless. "Understood. Duty, then. I won't ask for more than that particular arrangement requires of either of us."

"I mean it. I'm not going to pretend an arranged peace between warring houses is somehow also a love match, for anyone's convenience."

"I never asked you to pretend anything of the sort." His voice goes carefully light, diplomatic in a way that feels newly distant after the honesty at the border ground. "I'll hold up my end of the treaty fully. You won't find me demanding more warmth than the contract itself strictly requires."

He keeps precisely that promise over the following weeks — courteous at council meetings, present at every required function, gone the moment duty technically allows it, never lingering a single unnecessary minute. You tell yourself the distance is a relief, exactly what you asked him for at that fortress table.

Some evenings, watching him leave without lingering even once, you're considerably less certain that's actually true.

You catch yourself, more than once, timing your own arrival at council functions to whatever hour he's likely to already be there — not to seek him out exactly, you tell yourself, just efficient scheduling, nothing more deliberate than that. He never comments on it. You suspect he's noticed anyway.

"You could simply say something," your mother observes dryly, catching you watching him across a crowded hall one evening, "instead of orchestrating your entire social calendar around not quite running into him."

"I don't know what you mean."

"No," she says, entirely unconvinced. "Of course you don't."`,
      choices: [
        { label: "Learn what's actually at stake if the fortress falls — Face the real danger directly instead of managing it from a distance.", next: "n5", setFlag: { name: "guarded", value: true } },
        { label: "Ask what his father's war actually cost him personally — Press past the diplomacy and find the grief underneath it.", next: "n5_pressed", setFlag: { name: "guarded", value: true } }
      ]
    },

    n4b: {
      locked: true,
      chapter: "Four — Choosing It",
      text: `"I might actually want this to work," you admit, surprising yourself nearly as much as him. "Beyond the treaty's requirements. Beyond whatever either council expects to see performed in front of them."

Something shifts in his expression — guarded hope, carefully controlled, like a man unused to being handed something worth keeping without immediately bracing to lose it again. "That's either very brave of you to say plainly, or very foolish. Possibly both, depending on how this particular week ends up going."

"Probably both, if I'm honest with myself about it."

"I'd rather both, genuinely, than the polite fiction we're apparently supposed to perform for the councils instead." He crosses the space between you, unhurried, giving you every reasonable chance to step back if you want to. You don't. "For what it's worth — I want this to actually work too. Not merely the treaty's requirements. This, specifically, between the two of us."

His hand, when it finds yours, carries none of the earlier practiced performance, just something steadier and considerably more real than either of you quite expected from a marriage neither of you chose the timing of, or each other, initially.

"Tell me what's actually at stake in all of this," you say eventually, not moving away. "Everything. Not the treaty's carefully sanitized version of events."

"You'll have it," he promises, voice steady and low. "All of it, whatever that costs either of us to say aloud."

He doesn't let go of your hand while he says it, thumb tracing an idle, unconscious pattern against your knuckles like he's still testing whether the gesture is actually welcome. "For what it's worth," he adds, quieter now, "I don't think either council expected this particular outcome when they drafted the treaty. I'm fairly certain we've already broken several of their carefully worded predictions."

"Good," you say. "Their predictions weren't especially flattering to either of us."

"No," he agrees, something warm threading through the single word. "They really weren't."`,
      choices: [
        { label: "Learn what's actually at stake if the fortress falls — Face the real danger directly instead of managing it from a distance.", next: "n5", setFlag: { name: "guarded", value: false } },
        { label: "Ask what his father's war actually cost him personally — Press past the diplomacy and find the grief underneath it.", next: "n5_pressed", setFlag: { name: "guarded", value: false } }
      ]
    },

    n5: {
      locked: true,
      chapter: "Five — What the Fortress Actually Guards",
      text: `He takes you to the shared border fortress at dusk, where the old wards between the two houses' territories still hum faintly beneath your feet, decades of accumulated grudge worked deep into the very stone itself.

"It was never just a border post, whatever the treaty implies," he admits, and for the first time since the neutral ground, something like real fear moves through his voice, raw beneath the usual practiced ease. "The fortress sits directly on the old fracture line between our houses' founding territories — the exact same fault our ancestors first fought over, three centuries back, before either of our houses even had proper names. If the alliance fails and the fortress falls back to open conflict, it won't just restart our two houses' war. It'll wake every old claim buried beneath it. Six houses, not merely two, all of them with old scores nobody's settled properly in three hundred years."

"That's not remotely what the treaty said, when I read it."

"The treaty simplified it deliberately, because the full truth terrifies council members into paralysis rather than actual cooperation when they hear it plainly." He holds your gaze, unflinching despite the weight of what he's admitting. "I should have told you the full stakes from the border meeting itself. I didn't, because I was afraid the true scale of it would make you refuse before you'd had any real chance to actually know me first."

The old wards pulse beneath the fortress stone, ancient, patient, listening to every word passing between you.

"There's still a way to hold this properly," he says, voice dropping lower, more urgent. "But it requires both of us genuinely, fully committed — not merely performing alliance for the assembled cameras and councils. Whatever's true for you, standing here where the fracture actually runs — I need to hear it plainly now, before we go any further."`,
      choices: [
        { label: "Open your heart completely — Give the alliance what it's actually asking for. Stop guarding and start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the fortress only the truth it needs.", next: "n6_final_hold" }
      ]
    },

    n5_pressed: {
      locked: true,
      chapter: "Five — What His Father's War Cost",
      text: `"Tell me honestly," you say, stopping him before he can lead you anywhere else. "What did growing up inside his war actually cost you personally? Not the version fit for council record."

He's quiet long enough that you genuinely think he won't answer at all. "My brother. Not to your house's blade, whatever the old stories might have led you to expect — to my father's obsession with this war outlasting even him. He pushed my brother into a border skirmish two years back that a functioning peace would have made entirely unnecessary. I've spent every single day since trying to become the version of heir who actually ends this, instead of simply inheriting it the way my father inherited it from his own father before him."

"You've never told a council that. Any of it."

"Councils want strategy from me, not grief laid bare on the table." Something raw moves through his voice now, unguarded. He leads you to the fortress at dusk, where old wards hum with decades of accumulated grudge beneath your feet. "This place sits directly on the fracture line our houses first fought over, three centuries back. If the alliance fails now, it won't just restart our war — it wakes six houses' worth of buried claims all at once. The treaty simplified that particular truth because it paralyzes councils rather than uniting them toward anything useful."

"So what actually holds all of it together, if not the treaty's careful language?"

"Genuine commitment. Not performance for an audience." He meets your eyes, steady despite everything he's just admitted. "Whatever's true for you, standing here with me — I need it now. Plainly, without the diplomatic softening either of us has been trained since birth to reach for."`,
      choices: [
        { label: "Open your heart completely — Give the alliance what it's actually asking for. Stop guarding and start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the fortress only the truth it needs.", next: "n6_final_hold" }
      ]
    },

    n6_final_hold: {
      locked: true,
      chapter: "Six — What Duty Doesn't Cover",
      text: `"What's necessary," you say, holding his gaze steady despite the old wards humming beneath your feet, "is that the fortress holds and six houses' worth of buried war stays buried where it belongs. That's what's true tonight. I'm not going to manufacture more than that simply to satisfy the wards, or the councils, or you."

He studies you a long moment, something behind his sharp eyes settling into quiet resignation rather than genuine surprise, like a man who half expected exactly this and made his peace with the possibility already.

"Understood," he says, voice even. "Then let's see if duty alone is enough to hold three centuries of fracture together, one more time, for however long it lasts."`,
      choices: [
        { label: "Commit to the alliance on exactly those terms — Finish this on exactly the terms you already gave. No more, no less.", branchOn: { flag: "guarded", ifTrue: "n6_severance", ifFalse: "n6_reckoning" } },
        { label: "Refuse the marriage and seek another peace entirely — Walk away rather than commit to an alliance built on half-truths.", next: "n6_unbound" }
      ]
    },

    n6_surrender: {
      locked: true,
      chapter: "Six — Surrender",
      text: `"The truth," you say, "is that somewhere between the border meeting and this fortress, this stopped feeling like a treaty I was trapped inside and started feeling like something I'd have chosen regardless. I'm not committing to this alliance out of duty. I'm choosing you, plainly, the way six houses' worth of old fracture apparently needs someone to, finally, after three centuries of half-measures."

He crosses the space between you in two steps, and this time there's no council requiring it, no treaty demanding proximity — just his hands finding your face like a man who spent two years grieving a brother and never once let himself expect to be handed something worth keeping instead of merely enduring.

"Say that again," he murmurs, "where every old ward on this fortress can hear it clearly, so none of them can pretend the fracture isn't finally healing."

You do — standing where three centuries of fracture nearly reopened tonight, nothing held back between you, and the old wards settle into something entirely different from mere containment: not a held breath anymore, but something chosen, willingly renewed by genuine will. The fortress doesn't just hold. It deepens, certain in a way two centuries of grudging treaty never once managed to make it.

"Stay," he says. Not the treaty's requirement this time. His own question, entirely his to ask of you.

"Try and make me leave," you answer, and mean every unbound word of it, the old stone settling warm and certain around you both like something finally, after three centuries, allowed to rest.

Later, walking the fortress ramparts together as the last of the dusk light fades, he laces his fingers through yours without any of the careful hesitation from earlier. "Two centuries of war," he says, "and it took a treaty neither of us wrote to finally bring the two houses to the same table. I'm not sure whether to be grateful to the councils or furious it took them this long."

"Both, probably. I've found that's usually the honest answer, with us."

"It usually is," he agrees, and pulls you closer against the cooling evening air, like he intends to keep proving it for considerably longer than one dusk.`,
      ending: true,
      tag: "Ending: Surrender"
    },

    n6_reckoning: {
      locked: true,
      chapter: "Six — Reckoning",
      text: `"The truth," you say, "is that I don't see you as my house's enemy anymore, and I'm not going to pretend that's nothing after everything you've told me tonight. But I'm also not going to pretend I fully understand yet what this actually makes us, beyond the treaty's careful language."

It's not the surrender the old wards might have hoped for from you. You watch him brace, visibly, for it to be refused as insufficient after everything he's just admitted.

Instead, the fortress settles anyway — slower, more careful than it might have, but genuine, accepting complicated honesty in place of a cleaner declaration. The alliance holds, six houses' worth of buried claims settling back into dormancy for however long this particular peace manages to last.

"That shouldn't have been enough," he admits afterward, something like real wonder moving through his voice.

"Maybe old wards prefer honesty to theater, whatever shape the honesty happens to take between two people still figuring this out."

"Maybe." A faint, real almost-smile crosses his face, the first genuine one you've seen since the border. "We don't have to decide the rest of it tonight, standing here among stones older than either of our houses. The alliance holds either way now. Whatever's between us can take whatever time it actually needs to become something neither of us has to force for the councils' benefit."

It isn't the ending where two centuries of war resolves itself in a single dusk. It's the one where the fortress holds, the truth was genuinely enough even unfinished, and whatever comes next gets built slowly, on terms you actually chose for yourselves instead of a council's contract.`,
      ending: true,
      tag: "Ending: Reckoning"
    },

    n6_severance: {
      locked: true,
      chapter: "Six — Severance",
      text: `You commit to the alliance on guarded terms, careful and plain, exactly as much as you've allowed yourself all evening, and the old wards test it the way ancient magic tests anything half-offered rather than fully given.

"It's not enough," he says, understanding it a moment before the fortress itself does, urgency sharpening his voice. "It needs genuine commitment, not duty carefully dressed as one—"

The fracture strains beneath you both. Something in the old stone presses hard against decades of accumulated grudge, testing the seam, and you fight — both of you, dragon-fire and old training finding uses neither of you expected to need quite this soon — until between the two of you, the immediate breach is beaten back and resealed, holding, if only barely, if only for tonight.

But the alliance itself doesn't settle into what it could genuinely have been. Can't, built as it was on duty held at careful arm's length instead of true, freely given commitment.

"It'll hold," he says afterward, the full length of the fortress between you now. "For our lifetimes, probably, maybe longer. Not the way it could have, though, if we'd meant it fully tonight."

"I did what the treaty required of me."

"You did." No accusation in it whatsoever, which somehow makes it considerably worse than if there had been one. "That was always going to be enough to hold the fortress tonight. I think we both already know it was never going to be enough for anything past that, whatever that anything might have become between us."

No dramatic final argument between you — just two people who did the necessary thing and left everything else exactly where two centuries of war left it: unresolved, guarded, chosen with open eyes this time instead of simply avoided.`,
      ending: true,
      tag: "Ending: Severance"
    },

    n6_unbound: {
      locked: true,
      chapter: "Six — Unbound",
      text: `"No," you say, steadier than you expect your own voice to sound standing on ground that's swallowed three centuries of grudges already. "I'm not committing to an alliance I don't actually mean, not even to hold six houses' worth of fracture shut for another generation. There has to be another way to find real peace, and I'm going to look for it instead of performing this particular version of it."

He doesn't argue. Doesn't try to talk you back into the treaty the way you half expected him to. Just watches you with something that might be respect, might be quiet grief at a door closing that two centuries of war built brick by careful brick.

"There might be another way," he admits finally, thoughtful, turning the possibility over like he hasn't quite let himself consider it before now. "Harder, slower, considerably less certain — a peace that doesn't require either of us to marry into it out of obligation. I'll help you find it, if you'll let me. Not because the councils demand it of me tonight. Because I'd rather see you choose an honest, difficult peace than watch you settle for a convenient, hollow one."

You don't have a ready answer beyond simply accepting the offer. The two of you begin the harder, uncertain work of finding an ending to two centuries of war that doesn't cost either of you a marriage neither of you actually chose — the old fortress quiet behind you now, unresolved, and for the first time in either house's long history, entirely a choice made freely instead of inherited without question.

"For what it's worth," he says, walking beside you into the dark beyond the fortress walls, "I'd rather help you find a harder truth than watch us both settle for an easier lie, whatever the councils would have preferred instead."`,
      ending: true,
      tag: "Ending: Unbound"
    }
  }
};
