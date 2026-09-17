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
      text: `Two hundred years of war between your house and his ends, apparently, with a single sheet of treaty vellum and your signature at the bottom of it, delivered to your rooms on a council courier's silver tray as though it were an invitation to dinner rather than the end of the only life you've ever planned for yourself.

"An alliance marriage," your mother says, the way she might announce that the harvest ledgers are down a percentage this quarter, not looking up from the columns of ash-tallies spread across her writing desk. Two centuries of border dead reduced to figures in her careful hand, the way they've always been reduced, in this house. "Both bloodlines have bled themselves down to embers over this. The council has decided it ends now, with a marriage neither side can politely refuse, or it ends in another fifty years the same way it very nearly ended last generation — with nobody left standing to sign anything at all."

"And 'ends now' means marrying the heir of the house that put three of our border towns to the torch."

"It means marrying the heir of the house whose granaries *your* grandfather burned first, the winter before that, if you'd like to compare which ash is older." She doesn't soften her voice, doesn't so much as glance up from the numbers that have plainly mattered more than you for most of your life spent learning to read her silences instead of her attention. "You've spent your whole life being told what he is by people who have never once stood in a room with him. I'd suggest doing that yourself before you finish deciding what you already believe you know."

You meet him three days later on the scorched neutral ground between territories, ash-grey grass crunching underfoot, both of you flanked by guards who would clearly rather be doing anything else with their afternoon than watching two heirs decide the fate of six border provinces over polite conversation. He is exactly what two hundred years of border-town propaganda promised and somehow also nothing like it: sharp-eyed, dragon-marked down the length of one forearm in scales the deep bronze-red of his house's banners, radiating the particular ease of someone who has never once had to apologize for existing, in his entire charmed and burning life.

"So," he says, looking you over with unhurried, infuriating thoroughness, the way you imagine he looks over a treaty clause he hasn't decided yet whether to accept. "You're the one I'm meant to save two centuries of bloodshed by marrying."

"Try not to sound thrilled about it."

Something that might be the beginning of a real smile pulls at one corner of his mouth, there and gone again before you can be entirely certain you saw it happen at all. "Wouldn't dream of it. I'm told enthusiasm reads as suspicious, in a house like yours."`,
      choices: [
        { label: "Refuse to play nice — Make him work for basic civility instead of assuming charm will carry the day.", next: "n2a" },
        { label: "Decide to be genuinely, disarmingly polite — See how badly it unbalances two centuries of expected hostility.", next: "n2b" }
      ]
    },

    n2a: {
      chapter: "Two — Making Him Work For It",
      text: `"I'm not going to pretend this is anything other than a transaction," you say, arms crossed against the scorched-grass wind, holding his gaze without flinching from it. "You get an alliance and a bloodline heir to show the council you take this seriously. I get to stop watching my people bury their children along your border every third spring. Let's not perform anything warmer than that for an audience neither of us actually invited."

"Fair enough." He doesn't seem remotely offended by it — if anything, something in his posture loosens visibly, like bluntness is a language he genuinely prefers to whatever diplomacy he's been drowning in for weeks of council preparation. "Honestly, it's something of a relief. I came prepared for two hours of forced pleasantries and compliments about your house's ancestral tapestries, which, for the record, I have heard described at length by three separate advisors and still haven't actually seen."

"You're not going to argue that we ought to try liking each other, for appearances if nothing else?"

"I didn't say that." His eyes glint at you, entirely too pleased with himself for a man standing on disputed, ash-grey ground with a bored honor guard watching his every gesture. "I said I wasn't going to pretend liking each other is written into the contract as a requirement. Whether it happens regardless is a separate matter I intend to leave entirely up to you and whatever considerable stubbornness got you through the last ten minutes of this conversation."

"That's insufferably confident of you, for a man I've known exactly six minutes."

"I've been told, usually by people who knew me for considerably longer than six minutes and still hadn't warmed to the confidence." He offers a mock-bow, somehow managing to make it both mocking and genuinely respectful in the same motion, a small trick you find yourself grudgingly admiring despite every intention not to. "For what it's worth — I didn't put your border towns to the torch personally. I was eleven, and considerably more occupied avoiding my tutors than plotting incendiary strategy. I'd rather you judge me by what I actually do from this point forward, not by what my father did before I had any say whatsoever in any of it."

"That's a fine speech for a man who's had three days to prepare it."

"Four, actually. I wanted it exactly right before I risked it on you."`,
      choices: [
        { label: "Accept the terms and move to practical matters — Stop circling the point and start planning what comes next.", next: "n3" },
        { label: "Press him on what he actually wants from this — Push past the easy charm and find out what's underneath it.", next: "n3_pressed" }
      ]
    },

    n2b: {
      chapter: "Two — Disarming Politeness",
      text: `"I'm not going to spend two centuries of inherited grudge on a man who wasn't even born for most of it," you say, offering your hand properly, the way the old treaties technically require and no one from either house has actually bothered doing in living memory. "I'd rather start from somewhere closer to even ground than two centuries of ash and burnt granaries."

He blinks — actually blinks, visibly recalibrating, as though genuine civility wasn't remotely on the list of things he'd braced himself for this particular afternoon. "That's unexpectedly generous, given what my house's banners probably mean to someone raised on the stories I imagine you were raised on, at your mother's own dinner table."

"It's practical, more than generous. Two hundred years of hating you on principle hasn't spared a single border town from either side's torches. I'm willing to try something else, if only because nothing else has actually worked in two centuries of trying."

"Careful," he says, taking your offered hand, something warmer than diplomacy moving briefly through his grip before he seems to catch himself doing it. "Keep being this reasonable and you'll ruin my entire understanding of how today was supposed to go."

"How was it supposed to go, exactly?"

"Badly. Loudly. Ideally with some minor, forgivable property damage to the neutral pavilion, so the councils could tell each other it was always going to be difficult." A real smile breaks through now, unguarded for exactly a moment before he visibly reins it back in, as though he's caught himself doing something forbidden in front of witnesses. "I confess I don't entirely know what to do with someone from your house choosing plain decency first, unprompted, before either of us has anything to gain from it yet. I'll need a moment to recalibrate my entire strategy for the rest of this meeting."

"Take your time," you say, and find, somewhat to your own surprise, that you almost mean it. "We have, apparently, the rest of both our lives for you to catch up to where I'm already standing."

"A generous head start. I intend to make use of every day of it."

He studies you a moment longer, something in his expression shifting from performance into a plainer, more careful curiosity, like a man recalculating not just his strategy for the afternoon but something closer to his expectations for the whole arrangement. "For what it's worth, I don't think either council prepared you for someone from my house choosing decency first either. I imagine you'll have some explaining to do at your own dinner table tonight."

"Considerably less than you'd think. My mother's already decided she approves of whatever gets our people out of the ground faster, however it happens to arrive."

"A pragmatist, then. I begin to see where you learned it from."`,
      choices: [
        { label: "Accept the terms and move to practical matters — Stop circling the point and start planning what comes next.", next: "n3" },
        { label: "Press him on what he actually wants from this — Push past the easy charm and find out what's underneath it.", next: "n3_pressed" }
      ]
    },

    n3: {
      chapter: "Three — The Practical Matters",
      text: `The practical matters, once you finally sit down to them in the neutral pavilion's smaller council room, prove considerable: a shared border fortress neither house trusts the other to hold alone, a wedding date fixed by council decree rather than either of you, and a treaty clause stating plainly, in language with no room left for ambiguity, that if the marriage fails within its first decade, the war resumes exactly where it left off — no grace period, no fresh negotiation, no second treaty drafted more carefully than this one.

You read the clause twice, then a third time, hunting for some softer interpretation the drafting council might have buried in the margins out of mercy. There isn't one. Two hundred years of careful, bloody legal precedent apparently leaves no room for softness, however either of you might come to feel about the arrangement in private, behind closed doors neither council will ever see inside.

"No pressure," he says dryly, reading the clause over your shoulder, close enough that you can feel the warmth of him at your back despite the room's chill stone walls.

"Whoever drafted this clearly never expected either of us to survive the wedding night, let alone two more centuries of careful politics after it."

"Small mercies — at least they're honest about the stakes, unlike most council paperwork I've had the misfortune of signing this year." He leans back, studying you with something more genuinely assessing now than the earlier performance of easy arrogance out on the scorched ground. "I meant what I said out there. I'm willing to actually try this properly, not merely tolerate it for the cameras and the assembled advisors watching us sign. But I'd rather know now, plainly, whether you're here because your mother left you no real choice in any of it, or because some part of you actually wants to see if this holds."

"Isn't that true of both of us, if we're honest about how each of us ended up sitting in this exact room?"

"Probably." Something almost unguarded flickers through the usual practiced sharpness of his expression, there and then carefully smoothed away again. "I'd still rather know which one of us is choosing this freely, now that the choosing's finally allowed to matter, once the ink's actually dry and the councils have gone home satisfied."

Outside the pavilion's narrow window, the scorched ground where you first met him has already gone the color of dusk, and somewhere beyond it, unseen from here, both your houses' border towers are standing down from whatever half-readiness two centuries of habit still keeps them in. It occurs to you, watching him wait patiently for an answer he clearly isn't going to force out of you, that this is the first conversation either of you has had all week that wasn't being recorded for a council record somewhere.

"Ask me again after the wedding," you say finally. "I suspect the honest answer will have changed by then, one way or the other."

"Fair enough." Something almost like relief moves through his expression, quickly smoothed away again. "I find I'd rather wait for a true answer than collect a convenient one now."`,
      choices: [
        { label: "Guard yourself — Treat this strictly as duty. Keep the arrangement clean and uncomplicated by feeling.", next: "n4a" },
        { label: "Admit you might actually want this to work — Say the honest thing out loud before caution talks you out of it.", next: "n4b" }
      ]
    },

    n3_pressed: {
      chapter: "Three — What He Actually Wants",
      text: `"What do you actually want from this?" you ask, watching his expression carefully across the pavilion's narrow table. "Beyond the treaty requiring it of both of us on pain of resumed war."

He considers the question far longer than you expect from someone so quick with everything else, the easy banter falling away for the first time since the scorched ground outside. "Peace that outlasts both of us, honestly, more than anything else the treaty itself demands. I grew up watching my father treat this war as inheritance rather than tragedy — something to be carefully managed, passed down intact from father to son like the family sigil, never actually ended because ending it would mean admitting aloud that it never needed to start in the first place. I don't want that particular legacy handed to whatever comes after us, whoever that turns out to be."

"That's a very diplomatic answer for a man who claims not to prefer diplomacy."

"It's also entirely true, which I realize doesn't automatically follow from diplomatic, in most people's experience of my house's usual answers." A flicker of real irritation crosses his face, quickly smoothed back over into practiced ease before it can properly land. "You asked me something genuine. I gave you something genuine back, instead of the polished non-answer your advisors probably briefed you to expect from a man wearing my house's colors."

The practical matters, once you finally move to them together, prove considerable in exactly the way you'd feared: a shared border fortress, a council-fixed wedding date neither of you had any real say in, a treaty clause stating plainly that if the marriage fails within its first decade, the war resumes precisely where it left off.

"No pressure," he says dryly, reading it over your shoulder in the narrow, candlelit room.

"I'd rather know now," you say, holding his gaze steady across the table, "whether you're actually choosing this, or simply performing acceptance because the alternative is your father's war continuing under your own name instead of his, for another forty years of ash."

"Both, probably, if I'm being fully honest with you about it. I'd like the chance to find out which of the two actually wins, now the choosing's finally allowed to matter to anyone but the council."

"That's the most honest thing anyone from your house has said to anyone from mine in two hundred years, as far as I know."

"Then let's see if it holds up past the wedding," he says, "before either of us gets too comfortable congratulating ourselves for saying it out loud once."`,
      choices: [
        { label: "Guard yourself — Treat this strictly as duty. Keep the arrangement clean and uncomplicated by feeling.", next: "n4a" },
        { label: "Admit you might actually want this to work — Say the honest thing out loud before caution talks you out of it.", next: "n4b" }
      ]
    },

    n4a: {
      locked: true,
      chapter: "Four — Strictly Business",
      text: `"Duty," you say, folding your hands in your lap with deliberate composure, the pavilion's cold stone pressing through your sleeves. "That's what this is, and I'd rather we both stay honest about it instead of performing something warmer for the assembled councils and their careful, watching secretaries."

The dragon-mark along his forearm — usually a quiet, banked bronze-red, easy to forget entirely once you've stopped noticing it — dims further still at the words, the scales along his wrist going the color of cooling embers rather than live fire, though you can't have said, if pressed, exactly how you know that dimming means something. "Understood. Duty, then. I won't ask more of it than the arrangement itself strictly requires of either of us."

"I mean it. I'm not going to pretend an arranged peace between two warring houses is somehow also a love match, for anyone's convenience."

"I never asked you to pretend anything of the sort." His voice goes carefully light, diplomatic in a way that feels newly distant after the plainer honesty out on the scorched ground three days ago. "I'll hold up my end of the treaty fully, in full view of both councils. You won't find me demanding more warmth than the contract itself strictly allows for."

He keeps precisely that promise across the following weeks — courteous at every council function, present exactly as duty requires and gone the moment it technically permits him to leave, never lingering a single unnecessary minute in any room you're also standing in. You tell yourself the distance is a relief, exactly what you asked of him at that pavilion table.

Some evenings, watching the mark on his forearm bank down to embers as he takes his leave without lingering even once, you find yourself considerably less certain that relief is the honest word for what you're actually feeling.

You catch yourself, more than once, timing your own arrival at council functions to whatever hour he's likely already there — not seeking him out exactly, you tell yourself, simply efficient scheduling, nothing more deliberate than good household management. He never comments on the pattern. You suspect, from the careful way his eyes find you the instant you enter a room, that he's noticed it regardless.

"You could simply say something to him," your mother observes dryly, catching you watching his mark from across a crowded hall one evening, "instead of orchestrating your entire social calendar around not quite running into the man you're set to marry in a fortnight."

"I don't know what you mean."

"No," she says, entirely unconvinced, not looking up from her own ledgers even now. "Of course you don't."`,
      choices: [
        { label: "Learn what's actually at stake if the fortress falls — Face the real danger directly instead of managing it from a distance.", next: "n5", setFlag: { name: "guarded", value: true } },
        { label: "Ask what his father's war actually cost him personally — Press past the diplomacy and find the grief underneath it.", next: "n5_pressed", setFlag: { name: "guarded", value: true } }
      ]
    },

    n4b: {
      locked: true,
      chapter: "Four — Choosing It",
      text: `"I might actually want this to work," you admit, surprising yourself nearly as much as him, the words out before caution can properly stop them. "Beyond the treaty's requirements. Beyond whatever either council expects to see performed for their careful secretaries."

Something shifts in his expression — guarded hope, visibly reined in, like a man unused to being handed anything worth keeping without immediately bracing to lose it again by morning. The mark along his forearm warms, bronze-red deepening toward something closer to live coal, and you find you're watching it happen with a kind of fascination you don't examine too closely. "That's either very brave of you to say aloud, or very foolish. Possibly both, depending entirely on how this particular week ends up going for the two of us."

"Probably both, if I'm honest with myself about any of it."

"I'd rather both, genuinely, than the polite fiction we're apparently meant to perform for the councils instead." He crosses the narrow space between you, unhurried, giving you every reasonable chance to step back if you want one. You don't take it. "For what it's worth — I want this to actually work too. Not merely the treaty's minimum requirements. This, specifically, between the two of us, whatever shape that ends up taking."

His hand, when it finds yours, carries none of the earlier practiced performance from the scorched ground, just something steadier and considerably more real than either of you quite expected from a marriage neither of you chose the timing of, or, initially, each other.

"Tell me what's actually at stake in all of this," you say eventually, not moving away from him. "Everything. Not the treaty's carefully sanitized version, drafted for council comfort."

"You'll have it," he promises, voice steady and low. "All of it, whatever that costs either of us to say plainly aloud."

He doesn't let go of your hand while he says it, thumb tracing an idle, unconscious pattern against your knuckles, right over the faint warmth where his own mark sits banked beneath his sleeve. "For what it's worth," he adds, quieter now, "I don't believe either council expected this particular outcome when they drafted the treaty. I'm fairly certain we've already broken several of their most careful predictions before the wedding's even happened."

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
      text: `He takes you to the shared border fortress at dusk, where the old wards between the two houses' territories still hum faintly beneath the stone underfoot, decades of accumulated grudge worked deep into the mortar itself, and where the treaty ledger — three centuries thick, bound in dragonhide gone brittle with age — waits open on an iron stand at the fortress's exact center, the way it has waited for every heir of both houses before either of you was born.

"It was never just a border post, whatever the treaty implies to outsiders," he admits, and for the first time since the scorched ground, something like real fear moves through his voice, raw beneath the usual practiced ease. "The fortress sits directly on the old fracture line between our two houses' founding territories — the exact fault our ancestors first fought over, three centuries back, before either house even had the proper name it carries now. If the alliance fails and the fortress falls back into open conflict, it won't merely restart our own two houses' war. It wakes every old claim buried beneath it. Six houses, not two, every one of them holding scores nobody's properly settled in three hundred years of pretending otherwise."

"That's not remotely what the treaty said, when I read it in the pavilion."

"The treaty simplified it deliberately, because the full truth paralyzes council members with fear rather than moving them toward actual cooperation, when they hear it plainly stated." He holds your gaze, unflinching despite the weight of what he's admitting to you now, alone. "I should have told you the full stakes at the border meeting itself. I didn't, because I was afraid the true scale of it would make you refuse before you'd had any real chance to actually know me first, beyond the stories."

The old wards pulse beneath the fortress stone, and the dragonhide ledger's pages stir faintly on their iron stand, as though listening to every word passing between you both.

"There's still a way to hold this properly," he says, voice dropping lower, more urgent now. "The ledger records genuine oaths, not merely signed ones — it's part of how the founding treaty was first bound, three centuries ago, and it still knows the difference between ink and truth. But it requires both of us genuinely, fully committed, not merely performing alliance for the councils and their cameras. Whatever's true for you, standing here where the fracture actually runs beneath both our feet — I need to hear it plainly, before the ledger decides for us whether we meant any of this at all."`,
      choices: [
        { label: "Open your heart completely — Give the alliance what it's actually asking for. Stop guarding and start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the fortress only the truth it needs.", next: "n6_final_hold" }
      ]
    },

    n5_pressed: {
      locked: true,
      chapter: "Five — What His Father's War Cost",
      text: `"Tell me honestly," you say, stopping him before he can lead you any further into the fortress's older halls. "What did growing up inside his war actually cost you, personally? Not the version fit for a council record."

He's quiet long enough that you genuinely think he won't answer at all. "My brother. Not to your house's blade, whatever the old border stories might have led you to expect growing up — to my father's obsession with making sure this war outlasted even him. He pushed my brother into a border skirmish two years back that a functioning peace would have made entirely unnecessary to fight at all. I've spent every day since trying to become the version of heir who actually ends it, instead of simply inheriting it the way my father inherited it from his own father before him, generation after generation of the same ash."

"You've never told a council any of that."

"Councils want strategy from me, not grief laid bare on their table for the secretaries to record." Something raw moves through his voice now, entirely unguarded. He leads you deeper into the fortress at dusk, to where the treaty ledger waits open on its iron stand, old wards humming with decades of accumulated grudge beneath your feet. "This place sits directly on the fracture line our houses first fought over, three centuries back. If the alliance fails now, it won't just restart our war — it wakes six houses' worth of buried claims all at once. The treaty simplified that particular truth because it paralyzes councils rather than uniting them toward anything useful to either side."

"So what actually holds all of it together, if not the treaty's careful language?"

"The ledger. Genuine oath, not performance for an audience — it's bound the same way since the founding, and it still knows the difference between ink signed under duty and ink signed meaning it." He meets your eyes, steady despite everything he's just admitted to you alone, in the fortress's oldest hall. "Whatever's true for you, standing here with me — I need it now. Plainly, without the diplomatic softening either of us has been trained since birth to reach for first."

The dragon-mark along his forearm has gone dim and still while he speaks, banked down to something close to cold ash, as though even his own body is bracing for whichever answer you give him next.`,
      choices: [
        { label: "Open your heart completely — Give the alliance what it's actually asking for. Stop guarding and start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the fortress only the truth it needs.", next: "n6_final_hold" }
      ]
    },

    n6_final_hold: {
      locked: true,
      chapter: "Six — What Duty Doesn't Cover",
      text: `"What's necessary," you say, holding his gaze steady despite the old wards humming beneath your feet and the ledger waiting open between you, "is that the fortress holds and six houses' worth of buried war stays buried where it belongs. That's what's true tonight. I'm not going to manufacture more than that simply to satisfy the wards, or the councils, or you."

He studies you a long moment, the mark along his forearm banking down to a dull, resigned ember, matching whatever settles behind his eyes — not surprise exactly, something closer to a man who half expected precisely this and made his peace with the possibility already, on the ride out to the fortress.

"Understood," he says, voice even. "Then let's see if duty alone is enough to hold three centuries of fracture together, one more time, and for however long that turns out to last."`,
      choices: [
        { label: "Commit to the alliance on exactly those terms — Finish this on exactly the terms you already gave. No more, no less.", branchOn: { flag: "guarded", ifTrue: "n6_severance", ifFalse: "n6_reckoning" } },
        { label: "Refuse the marriage and seek another peace entirely — Walk away rather than commit to an alliance built on half-truths.", next: "n6_unbound" }
      ]
    },

    n6_surrender: {
      locked: true,
      chapter: "Six — Surrender",
      text: `"The truth," you say, "is that somewhere between the scorched ground and this fortress, this stopped feeling like a treaty I was trapped inside and started feeling like something I'd have chosen regardless, given the chance. I'm not committing to this alliance out of duty. I'm choosing you, plainly, the way six houses' worth of old fracture apparently needs someone finally to, after three centuries of half-measures and careful ink."

He crosses the space between you in two steps, and this time there's no council requiring it, no treaty demanding proximity — just his hands finding your face like a man who spent two years grieving a brother and never once let himself expect to be handed something worth keeping instead of merely enduring what duty left him.

The mark along his forearm catches first, bronze scales flaring bright as struck flint against the dusk. Then, impossibly, warmth answers it beneath your own skin, at your wrist, where no mark has ever lived before tonight — the ledger's old magic reaching for the truth in the room rather than waiting for it to be written down first, the treaty's ancient binding recognizing something it hasn't recognized freely offered in three hundred years.

The dragonhide pages on the iron stand turn themselves, one by one, without either of you touching them, ink rewriting itself in real time across three centuries of careful, grudging entries — until the newest line settles, glowing faint gold, recording not a marriage of alliance but a marriage of choice. The fortress doesn't just hold. It deepens, certain in a way two centuries of grudging treaty never once managed to make it.

"Stay," he says. Not the treaty's requirement this time. His own question, entirely his to ask of you.

"Try and make me leave," you answer, and mean every unbound word of it, the new mark warm and settled at your wrist like something finally, after three centuries, allowed to rest.

Later, walking the fortress ramparts together as the last of the dusk light fades over both territories at once, he laces his fingers through yours without any of the careful hesitation from the pavilion. "Two centuries of war," he says, "and it took a ledger neither of us wrote to finally bring both houses to the same table, meaning it. I'm not sure whether to thank the councils or be furious it took them this long to force our hand."

"Both, probably. I've found that's usually the honest answer, with us."`,
      ending: true,
      tag: "Ending: Surrender"
    },

    n6_reckoning: {
      locked: true,
      chapter: "Six — Reckoning",
      text: `"The truth," you say, "is that I don't see you as my house's enemy anymore, and I'm not going to pretend that's nothing after everything you've told me tonight, standing here where the fracture actually runs. But I'm also not going to pretend I fully understand yet what this makes us, beyond whatever the treaty's careful language allows for."

It's not the surrender the old ledger might have hoped to record from you. You watch him brace, visibly, for the pages to stay blank, for the ink to refuse an answer this unfinished.

Instead, the mark along his forearm warms slowly rather than flaring — a careful, deliberate kindling rather than a struck flame — and the dragonhide ledger accepts it anyway, ink settling into a plainer, more cautious line than the one written for certainty. The alliance holds, six houses' worth of buried claims settling back into dormancy for however long this particular, unfinished peace manages to last between two people still finding their footing.

"That shouldn't have satisfied it," he admits afterward, something like real wonder moving through his voice as he watches the ledger's ink finish drying.

"Maybe three centuries of grudging entries taught it to recognize honesty even when it isn't finished yet."

"Maybe." A faint, real almost-smile crosses his face, the first genuine one you've seen since the scorched ground. "We don't have to decide the rest of it tonight, standing here among mortar older than either of our houses. The alliance holds either way now. Whatever's between us can take whatever time it actually needs to become something neither of us has to force for the councils' benefit."

It isn't the ending where two centuries of war resolves itself in a single dusk. It's the one where the fortress holds, the ledger accepted an honest, unfinished truth in place of a tidy declaration, and whatever comes next gets built slowly, on terms the two of you actually choose for yourselves this time, instead of a council's contract.

He walks you back toward the fortress gate himself, close enough that you can feel the mark's returning warmth against your sleeve without either of you commenting on it. "For what it's worth," he says at the threshold, "I'd rather have an honest, unfinished peace with you than a finished one I had to talk you into believing."

"That's a fairly low bar for either of our houses, historically."

"Then we'll simply have to keep clearing it," he says, "one dusk at a time, until it stops feeling like a bar at all."`,
      ending: true,
      tag: "Ending: Reckoning"
    },

    n6_severance: {
      locked: true,
      chapter: "Six — Severance",
      text: `You commit to the alliance on guarded terms, careful and plain, exactly as much as you've allowed yourself all evening, and the dragonhide ledger tests the offering the way three centuries of old magic tests anything half-given rather than fully meant.

"It's not enough," he says, understanding it a breath before the pages do, urgency sharpening his voice as the ink on the newest line refuses to fully settle. "It needs genuine commitment, not duty dressed carefully as one—"

The fracture strains beneath you both. Something in the old stone presses hard against decades of accumulated grudge, testing the seam the ledger's uncertain ink has left open, and you fight — both of you, his dragon-fire and your own house's old training finding uses neither of you expected to need quite so soon — until between the two of you, the immediate breach is beaten back and resealed, holding, if only barely, if only for tonight.

The ledger's newest line dries at last, but pale, half-formed, recording an alliance rather than the deeper binding it was clearly reaching for and didn't receive.

"It'll hold," he says afterward, the full length of the fortress between you now, the mark on his forearm banked all the way down to cold ash-grey. "For our lifetimes, probably, maybe longer than that. Not the way it could have, though, if we'd meant it fully tonight, standing right where the fracture runs."

"I did what the treaty required of me."

"You did." No accusation in it whatsoever, which somehow makes the moment considerably worse than if there had been one. "That was always going to be enough to hold the fortress tonight. I imagine we both already know it was never going to be enough for anything past that."

No dramatic final argument between the two of you — just an alliance that holds exactly as far as it was asked to, and nothing further, the ledger's pale ink drying between you like a door left carefully, deliberately ajar rather than shut.

The councils, when they hear of it, will call the treaty a success regardless — a fortress held, a wedding kept, two centuries of war formally, officially over. Neither of you corrects the record. Some peace, you're beginning to learn, is simply the shape a war takes when it finally runs out of reasons to keep going, whether or not the two people signing for it ever meant the deeper vow the ledger was actually built to record.`,
      ending: true,
      tag: "Ending: Severance"
    },

    n6_unbound: {
      locked: true,
      chapter: "Six — Unbound",
      text: `"No," you say, steadier than you expect your own voice to sound standing on ground that's swallowed three centuries of grudges already. "I'm not committing to an alliance I don't actually mean, not even to hold six houses' worth of fracture shut for another generation of pretending. There has to be another way to find real peace, and I intend to look for it instead of letting a ledger record something neither of us is ready to mean yet."

He doesn't argue. Doesn't try to talk you back into the treaty the way you half expected him to, standing here with the fortress's oldest wards humming around you both. Instead, the mark along his forearm simply dims, quiet rather than resentful, and he watches you with something that might be respect, might be a private kind of grief at a door two centuries of war built brick by careful brick finally, deliberately closing.

"There might be another way," he admits finally, thoughtful, turning the possibility over like he hasn't quite let himself consider it seriously before tonight. "Harder, slower, considerably less certain — a peace that doesn't require either of us to sign a ledger we don't fully mean, or marry into an obligation neither of us chose freely. I'll help you find it, if you'll let me. Not because the councils demand it of either of us. Because I'd rather see you choose an honest, difficult peace than watch you settle for a convenient, hollow one recorded in someone else's ink."

You don't have a ready answer beyond simply accepting the offer he's made. The two of you begin the harder, uncertain work of finding an ending to two centuries of war that doesn't cost either of you a marriage neither of you actually chose — the old fortress quiet at your backs now, its ledger closed for the first time in living memory, and for the first time in either house's long history, the choosing genuinely left open instead of inherited without question.

"For what it's worth," he says, walking beside you out into the dark beyond the fortress walls, the last of the ledger's pale glow fading behind you both, "I'd rather help you find a harder truth than watch us both settle for an easier lie, whatever the councils would have preferred to record instead."`,
      ending: true,
      tag: "Ending: Unbound"
    }
  }
};
