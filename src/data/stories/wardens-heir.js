// The Last Warden's Heir — fourth title. Rewritten/expanded to match
// Ember Court's density and prose style while preserving the exact same
// branch structure, locked flags, and choice logic as the original.
// Same engine contract: { startNode, nodes }, each node
// { chapter, text, choices | ending }.

export const wardensHeir = {
  startNode: "n1",
  nodes: {

    n1: {
      chapter: "One — The Last Rite",
      text: `Your mother dies the way every Warden before her did: mid-sentence, passing the order's last rite to you before she's finished explaining what it actually means, her voice already fading beneath the sound of her own blood on the flagstones of the hall she was born in. "The bond renews at your hand now," she manages, blood-slick fingers gripping yours hard enough to bruise, like she's trying to press three centuries of certainty through your skin by force alone, before the strength for anything gentler leaves her entirely. "He'll come to you within the week. Don't be afraid of what he is. Be afraid of what happens if the bond breaks, and it will, if you let fear make the choice instead of you."

She's gone before you can ask which *he* she means, her hand going slack in yours in the space between one heartbeat and the next, leaving you kneeling in a silence that feels older than the stones beneath you.

You bury her under the old wardstones, alone, the way Wardens have always buried their dead — a line of women stretching back three centuries, each one bound from birth to guard the seal between this world and the thing on the other side of it, each name carved somewhere into the standing stones ringing the burial ground. You grew up on the stories, told at bedsides and over kitchen tables in careful, reverent tones. The demon your bloodline was founded to destroy, contained instead of killed because killing it would have broken something worse open, something no single generation could have survived cleaning up after.

You did not grow up expecting to inherit a bond with it. You grew up expecting decades more of your mother's steady, exhausted competence standing between you and that particular inheritance, buying you time you no longer have.

Six nights after the funeral, something knocks on your door with a fist that sounds entirely, unnervingly human — three measured knocks, unhurried, like whatever's standing on your porch has all the patience in the world and intends to use every last drop of it before you answer.

You've spent those six nights doing the only thing you know how to do with grief this large: preparing. Sharpening blades that haven't needed sharpening in years. Reading through your mother's careful, cramped handwriting in journals that only ever mention *him* in the vaguest possible terms, like even in private she was reluctant to commit more than that to paper, page after page of careful evasion. You know almost nothing beyond the shape of the debt you've inherited, and that particular ignorance sits heavier in your chest than the grief does, most nights, heavier even than the wardstones outside pressing their old weight into the dark.

The knock comes again, patient, unhurried, exactly on schedule with whatever internal clock has been counting down the six days since you buried her under those same stones.`,
      choices: [
        { label: "Open the door with a blade already drawn — Meet whatever this is exactly the way three centuries of training prepared you to.", next: "n2a" },
        { label: "Open the door with nothing but your bare hands — Trust the instinct that says a weapon would answer the wrong question first.", next: "n2b" }
      ]
    },

    n2a: {
      chapter: "Two — What Answers the Door",
      text: `You open the door with the blade already moving, three centuries of training doing exactly what it was built to do, muscle memory carrying you through the motion before conscious thought catches up to it at all.

He catches your wrist before the edge finds him — not with demonic speed exactly, something older and stranger than that, like the blade simply forgot what it was doing halfway through the swing and let itself be stopped without argument. Up close he looks nothing like the stories: no horns, no smoke, just a tired-looking man with eyes the wrong color for a human and an expression that suggests he expected exactly this greeting, has perhaps rehearsed his response to it more than once across however many doorways came before yours, generation after generation of them.

"Your mother usually offered tea first," he says, releasing your wrist the moment you stop pulling against it, careful in a way that feels deliberate rather than merely cautious. "But I suppose the blade is more honest, given the circumstances tonight. I imagine you have questions the tea would only delay answering."

"You're the thing my family has guarded a seal against for three hundred years." Your voice comes out steadier than you feel, the blade still raised between you like it might still prove useful.

"I'm the thing your family has been *bound to*, which isn't quite the same accusation, though I understand entirely why it feels like it should be tonight." He doesn't step closer. Doesn't try to disarm you further, hands open and visible at his sides, weight settled like a man who has learned exactly how still to stand in doorways like this one. "The bond passed to you the moment she died — I felt it happen, actually, which is not a sensation I have ever found pleasant no matter how many times I've felt it before. I'm not here by choice any more than you are. I'm here because the alternative is the seal failing, and neither of us wants to find out what that actually looks like, three centuries into holding it shut between us."`,
      choices: [
        { label: "Demand he explain the bond fully — Make him lay out every term before you agree to anything at all.", next: "n3" },
        { label: "Ask what happened the last time a Warden refused him — Learn the cost of saying no before you decide whether to say it.", next: "n3_pressed" }
      ]
    },

    n2b: {
      chapter: "Two — Bare Hands",
      text: `You open the door with nothing but your bare hands, some instinct telling you that meeting whatever this is with a weapon already drawn would answer a question you haven't asked yet, would decide something before you'd had the chance to actually think it through properly.

He's nothing like the stories: no horns, no smoke, just a tired-looking man with eyes the wrong color for a human, standing on your porch like he's genuinely uncertain of his welcome despite three centuries of blood-right guaranteeing it, hands loose at his sides, weight balanced like he half expects to need to step back quickly if you change your mind.

"You didn't bring a blade," he says, something careful threading through his voice, like he's recalibrating an expectation built up over generations of doorways just like this one. "Your mother always led with one, the first several decades, anyway. It took her a long while to stop reaching for it first."

"Should I have?"

"That depends entirely on what you decide about me in the next few minutes, I'd imagine." He studies you, unhurried, patient in a way that feels older than the porch light between you both. "I'm the thing your bloodline was founded to guard against. I'm also the thing your bloodline has been bound to for three centuries, which your mother eventually understood isn't quite the contradiction it first sounds like standing here in the dark. The bond passed to you the moment she died. I didn't choose the timing any more than you did, and I'm sorry for the roughness of it, for what little that's worth to you tonight, six days into your grief."

Somewhere behind you, in the dark of the house, you can still smell the last of the funeral candles, wax and dried herbs and the particular staleness of a room too many people have stood in and cried. He doesn't look past you into it. Whatever he is, he seems to understand exactly how much of that grief is not his to intrude on uninvited.

"And if I refuse the bond entirely?"

"Then we should discuss that somewhere less exposed than your doorway," he says, glancing once at the dark tree line beyond your garden, "because the honest answer isn't a short one, and I'd rather not give it standing where anything else might overhear us discussing it."`,
      choices: [
        { label: "Demand he explain the bond fully — Make him lay out every term before you agree to anything at all.", next: "n3" },
        { label: "Ask what happened the last time a Warden refused him — Learn the cost of saying no before you decide whether to say it.", next: "n3_pressed" }
      ]
    },

    n3: {
      chapter: "Three — The Shape of the Bond",
      text: `He explains it at your kitchen table, of all places, hands wrapped around a cup of tea he clearly has no need to drink but accepts anyway, like a courtesy older than either of you, one he's performed at this same table for longer than you've been alive to witness it.

"The seal between this world and mine isn't a wall. It's a held breath — something actively maintained, not passively fixed in place like stone or steel would be." His eyes, wrong-colored and steady, don't leave yours across the table. "Three centuries ago, your bloodline's founder discovered that binding me to a Warden, generation after generation, was the only way to keep that breath held without either destroying me outright or letting what's behind the seal through entirely, into a world that has no idea what it would actually be facing if it came loose. I don't love this arrangement. I don't hate it either, most days. It simply is, the way weather is — something to be managed rather than resolved once and for all."

"That's not an explanation. That's a history lesson dressed up as one."

"Fair." Something almost wry moves through his expression. "The practical shape of the bond is considerably simpler: proximity, mostly, and honesty about it. You don't have to like me. You don't even have to trust me, not really, not at first. You have to allow the bond to exist — refuse it entirely, outright, and the seal starts to fail within days, not centuries, whatever the old stories imply about how much time you'd have to reconsider. Your mother spent thirty years despising the arrangement, by her own frequent admission at this exact table, and it held perfectly well regardless of how she felt about sharing tea with me."

"So I don't actually have a choice in any of this, not really."

"You have every choice in how you carry it," he says, quiet, something almost gentle beneath the words. "Just not whether it exists at all. That much was decided three centuries before either of us was born into it, carved into the stones outside long before your name or mine mattered to anyone."

You turn your teacup slowly on the table, not drinking it either, watching the steam curl up between you like something that hasn't yet decided which of you it belongs to. "You make it sound almost reasonable, put that plainly."

"I've had three centuries to practice making it sound reasonable. That doesn't mean it always feels that way from where you're sitting tonight, and I'd rather not pretend otherwise to make this easier on either of us."`,
      choices: [
        { label: "Guard yourself — Treat this as duty and nothing else. Don't let three centuries of history soften into something personal.", next: "n4a" },
        { label: "Let yourself actually see him as more than the seal's terms — Set the old stories down and look at the man across the table instead.", next: "n4b" }
      ]
    },

    n3_pressed: {
      chapter: "Three — The One Who Refused",
      text: `"Tell me what happens," you say, watching his expression carefully across the table, "if I refuse. Has anyone, in three hundred years of this arrangement, actually done it?"

Something in his expression goes carefully still, the stillness of a man deliberately setting down an old weight he'd rather not touch again tonight. "Once. Four generations back. She refused the bond outright — barred me from the grounds entirely, tried to hold the seal through will alone, convinced she was strong enough to manage it without me standing anywhere near her." He doesn't look away from you while he says it, though it visibly costs him something to hold your gaze steady. "It took eleven days. The seal doesn't fail cleanly, whatever the old stories imply about a quick and merciful end. It frays, thread by thread, and what comes through the fraying isn't whole, isn't sane, and isn't easily put back once it's loose in the world. She died closing it herself, alone, because there was no one left bound to help her do it safely by then, and her name is carved into the stones outside same as every other Warden's, right where I put it myself."

"You're telling me that to scare me into accepting the bond tonight."

"I'm telling you because you deserve the whole truth before you decide anything at all, and because I would rather you resent me for honesty than thank me for a comforting lie that gets you killed the same way she was killed." He meets your eyes, unflinching, letting the weight of it sit between you both at this small table. "The bond isn't a cage, whatever the old stories tell impressionable children at bedtime to keep them from wandering near the stones. It's proximity, allowance, nothing more demanding than that on its surface. You don't have to like me. You don't even have to trust me, not at first. You have to let the bond exist, and let me stay close enough to help you carry it properly."

"And if I do agree to that much?"

"Then we find out together what three centuries of this arrangement actually looks like, carried for once by someone who isn't performing hatred for a demon she's never actually taken the time to meet properly, the way you're doing right now, tea untouched between us."`,
      choices: [
        { label: "Guard yourself — Treat this as duty and nothing else. Don't let three centuries of history soften into something personal.", next: "n4a" },
        { label: "Let yourself actually see him as more than the seal's terms — Set the old stories down and look at the man across the table instead.", next: "n4b" }
      ]
    },

    n4a: {
      locked: true,
      chapter: "Four — Duty, Nothing Else",
      text: `"Fine," you say, pushing your untouched tea aside with more force than necessary. "The bond exists. Proximity, allowance, whatever you need it to be called in whatever old text first wrote it down centuries before either of us. That doesn't make us anything to each other beyond the arrangement itself, and I'd rather we both remember that."

Something flickers behind his wrong-colored eyes — not hurt exactly, something older and more practiced than that, the particular look of someone long since resigned to being kept at exactly this distance by every woman who's ever sat across this same table from him, generation after generation of the same careful wall. "Understood. I won't ask for more than the bond strictly requires of either of us."

"I mean it. I didn't ask for this inheritance, and I certainly didn't ask for you along with it, whatever your intentions."

"You don't have to pretend anything with me. I'd actually prefer you didn't." His voice goes carefully even, practiced smooth from centuries of exactly this conversation. "I've done three centuries of this with women who felt exactly as you do, more of them than you'd probably like to know about. I know precisely how to exist at the edge of a life without demanding the center of it, however that arrangement might feel to occupy from where I actually stand in it."

He doesn't push past the line you've drawn between you. Keeps precisely the distance the bond requires and not a hair closer, present at the grounds each dusk like the seal demands, the wardstones humming low as he crosses the boundary line, gone again before you'd ever have to acknowledge him as anything more than an obligation etched into your bloodline's stone.

You tell yourself that's exactly what you wanted from this arrangement.

Some nights, watching his careful shape retreat back toward the tree line right on schedule, the newest line still settling faint on the stone where the wardwork tracks his crossing, you almost believe it.

You find yourself, more often than you'd like to admit, watching the exact moment he leaves each dusk — the particular economy of his departure, no lingering, no testing the boundary you've drawn between you. It should feel like victory. Mostly it feels like something else entirely, something you don't have a tidy name for yet and aren't especially eager to find one for.

"You're doing that thing again," he says one evening, not quite looking at you as he says it, already half turned toward the tree line and the stones beyond it.

"What thing."

"Watching me leave like you're cataloguing it for later." A ghost of something wry in his voice. "I'm not going to read anything into it, if that's what worries you tonight."

"Good," you say, and mean it, and don't entirely believe yourself either, watching the stone settle quiet behind him.`,
      choices: [
        { label: "Learn what the seal is actually protecting against — Face the real threat directly instead of managing it from a careful distance.", next: "n5", setFlag: { name: "guarded", value: true } },
        { label: "Ask what three centuries of this has actually cost him — Press past his composure. Find out what the arrangement has taken from him.", next: "n5_pressed", setFlag: { name: "guarded", value: true } }
      ]
    },

    n4b: {
      locked: true,
      chapter: "Four — More Than the Terms",
      text: `You don't hold him at the distance duty would allow. It surprises you as much as it seems to surprise him — some part of you deciding, somewhere over cooling tea at your own kitchen table, that a demon who told you the hardest truth instead of the comfortable one had earned more than wary tolerance, more than the careful suspicion three centuries of stories primed you to offer any stranger wearing his face.

"You don't have to perform this as easier than it actually is," he says, quiet, watching you with something careful and unfamiliar moving through his expression — like a man genuinely unused to being looked at as anything other than an arrangement to be managed, an obligation to be endured until it isn't anymore.

"I know what I'm supposed to feel about you. Three centuries of my bloodline felt it before me, wrote it down carefully enough that I inherited the feeling along with the wardstones themselves."

"You're not obligated to inherit their feelings along with the bond itself. Those are separable things, whatever the old texts might suggest about how a Warden's meant to feel." Something almost raw moves through his voice now, stripped of its usual careful polish. "I'd rather you felt whatever's actually true for you, even if that's still wariness. Especially if it's wariness, honestly — at least that would be genuinely yours, and not a stone's worth of inherited certainty. I just don't want you performing hatred you don't actually feel simply because it seems like what a Warden is supposed to do at this particular table."

His hand, when it finds yours across the table, is warmer than you expect from something the stories call monstrous, warmer than your own after weeks of grief and cold nights alone in this house. Neither of you pulls back from it.

"My mother never mentioned this part," you say, quiet, not moving your hand away. "The tea, the kitchen table, any of it. Just the warnings."

"She wouldn't have. It isn't the part a mother tells her daughter before handing her an inheritance like this one. I imagine she wanted you steady, not soft, walking into it." Something almost fond moves through his voice at the memory of her, whatever complicated shape it takes. "I don't think she was wrong to choose that. I only think you're allowed both, now that the choosing belongs to you instead of her."

"Tell me everything the bond actually requires," you say eventually, not moving your hand from beneath his. "Not the version my mother might have simplified for me, kindly or otherwise, to spare me the weight of it. All of it, however difficult it turns out to be to hear."

"You'll have it," he promises, voice steady. "Every piece, whatever it costs either of us to say aloud tonight."`,
      choices: [
        { label: "Learn what the seal is actually protecting against — Face the real threat directly instead of managing it from a careful distance.", next: "n5", setFlag: { name: "guarded", value: false } },
        { label: "Ask what three centuries of this has actually cost him — Press past his composure. Find out what the arrangement has taken from him.", next: "n5_pressed", setFlag: { name: "guarded", value: false } }
      ]
    },

    n5: {
      locked: true,
      chapter: "Five — What's Actually Behind the Seal",
      text: `He takes you to the wardstones at dusk, where the seal itself hums beneath the ground like something breathing in its sleep, a low vibration you feel more in your teeth than hear with your ears. The standing stones ring the clearing exactly as they always have, every prior Warden's name etched somewhere into their weathered faces, your mother's newest and rawest of all of them.

"It was never really me the seal was built against," he admits, and for the first time since your doorway, something like old grief moves through his voice, worn smooth by three centuries of carrying it alone, stone by silent stone. "I'm the keeper of it, not the threat, whatever the old stories conveniently simplify for easier telling around a fire. What's actually behind the seal is something I helped your bloodline's founder trap there three centuries ago — something I couldn't destroy alone, not then and not now, and could only hold shut by binding myself to a human line willing to renew the working generation after generation, indefinitely, name after name added to the stone."

"So the stories about you are wrong. All of them."

"The stories about me being the danger, yes, those are wrong. The stories about the cost being real — those, unfortunately, are entirely accurate, every one of them." He holds your gaze, steady, unflinching despite the weight of what he's admitting. "Every generation, the bond needs to be renewed by genuine choice, not mere obligation, and the stones themselves are how the renewal is kept — they carve the new Warden's name into their own faces the instant the working truly takes, and they refuse to, no matter how long you stand here, if the choice underneath it isn't real. That's the part your mother's generation stopped telling clearly, because 'choice' sounded too much like something a Warden might actually refuse if given the option plainly stated. I need you to understand this fully: if you renew this only because you feel cornered into it, the stone will know the difference, and it will simply stay blank."

The wardstones pulse beneath your feet, patient, ancient, listening to every word passing between you both tonight.

"So tell me plainly," he says, voice low. "Whatever's actually true for you, standing here where three centuries of your bloodline stood before you, waiting for the same stone to answer. Not the version that sounds like what a Warden's supposed to say to satisfy the working."`,
      choices: [
        { label: "Open your heart completely — Give the seal what it's actually asking for. Stop guarding and start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the working only the truth it requires, nothing more.", next: "n6_final_hold" }
      ]
    },

    n5_pressed: {
      locked: true,
      chapter: "Five — Three Centuries",
      text: `"What has this actually cost you?" you ask, before he leads you to the wardstones, stopping him with the question alone. "Three hundred years of this arrangement. Truthfully, not the polished version you give at that kitchen table."

He's quiet long enough that you genuinely think he won't answer at all. "Every generation, I watch a woman I've come to know — sometimes to care for, more than the arrangement strictly requires of either of us — die, and I begin again with someone who's inherited every reason to fear me and none of the context that might soften it. That's the true cost. Not the binding itself, not the proximity or the duty of it. The losing, over and over, of the only people who ever genuinely saw past what the old stories insist I am, and then watching their name join all the others carved into that stone."

"That's not an answer about the seal. That's an answer about you specifically, and what it's cost you personally."

"You asked what it cost me. I gave you the honest ledger, not the tidy, comfortable one I usually offer at this exact point in the conversation, at this exact table." Something raw moves through his voice now, unguarded in a way you suspect doesn't happen often for him. He leads you to the wardstones, where the ground hums like something breathing in its sleep beneath your feet, every prior Warden's name catching faint moonlight along the weathered stone. "The seal was never built against me. I'm the keeper, not the threat — what's actually trapped there is something I helped your bloodline's founder contain three centuries ago, and can only keep shut by a bond renewed on genuine will, never on obligation alone. The stones themselves carve the new name in when the choice is real. If you only renew this because you feel cornered tonight, they'll know instantly, and stay bare."

"So tell me plainly," he says, quiet and steady despite everything he's just admitted. "Whatever's true for you, standing where three centuries of women before you have stood, waiting on the same stone. Not the version that sounds like duty dressed up as devotion."

The wardstone nearest your hand feels warmer than the night air has any right to make it, as though it's already listening for whatever you decide to say next.`,
      choices: [
        { label: "Open your heart completely — Give the seal what it's actually asking for. Stop guarding and start choosing.", next: "n6_surrender" },
        { label: "Hold the line — say only what's necessary — Protect what's left of yourself. Give the working only the truth it requires, nothing more.", next: "n6_final_hold" }
      ]
    },

    n6_final_hold: {
      locked: true,
      chapter: "Six — What Duty Doesn't Require",
      text: `"What's necessary," you say, holding his gaze steady in the wardstones' pulsing dark, "is that the seal holds and whatever's behind it stays behind it, whatever that costs either of us personally tonight. That's what's true. I'm not going to manufacture more than that simply to satisfy the working, or the stone, or you."

He studies you a long moment, something behind his wrong-colored eyes settling into quiet resignation rather than genuine surprise, like a man who half expected exactly this answer and had already made his peace with it on the walk out here.

"Understood," he says, voice even. "Then let's see if duty alone is enough to hold three centuries of this together, one more time, and whether the stone accepts it at all."`,
      choices: [
        { label: "Renew the bond on those exact terms — Finish this on exactly the terms you already gave. No more, no less than that.", branchOn: { flag: "guarded", ifTrue: "n6_severance", ifFalse: "n6_reckoning" } },
        { label: "Refuse the inheritance and find another way to seal it — Walk away from three centuries of obligation rather than renew it on a lie.", next: "n6_unbound" }
      ]
    },

    n6_surrender: {
      locked: true,
      chapter: "Six — Surrender",
      text: `"The truth," you say, "is that I stopped seeing this as an inheritance somewhere around the moment you told me the honest cost instead of the comfortable version, sitting at my own mother's kitchen table with tea neither of us needed. I'm not renewing this bond out of duty. I'm choosing you, plainly, the way the seal apparently needs someone to, finally, after three centuries of it settling for less than this."

He crosses the space between you in two steps, and this time there's no seal requiring it, no wardstones demanding proximity — just his hands finding your face like a man memorizing something he never let himself expect to keep, fingers gentle against your jaw like you might disappear if he moved too quickly.

"Say that again," he murmurs, "where the stone can carve it into itself properly, the way it's supposed to."

You do — standing where three centuries of your bloodline stood before you, nothing held back, and the ground beneath you settles into something entirely different from mere containment: not a held breath anymore, but something chosen, willingly renewed by genuine will rather than inherited obligation. The nearest stone catches the moonlight strangely, and your name begins etching itself into the weathered face beside your mother's, letter by letter, without any hand guiding the work. The seal doesn't just hold. It deepens, certain in a way three centuries of grudging duty never once managed to make it.

"Stay," he says. Not the bond's requirement this time. His own question, entirely his to ask of you.

"Try and make me leave," you answer, and mean every unbound word of it, the wardstones humming warm and settled beneath you both for what feels like the first time in three hundred years of this arrangement.

Later, walking back toward the house that's now entirely yours, he laces his fingers through yours like he's still testing whether the gesture is actually permitted. "Three centuries," he says, quiet. "And not once did I expect to end up here, standing in this particular garden, holding this particular hand, watching a stone finish carving your name into itself."

"Do you regret it? Any of the centuries that led here?"

"Not the ones that led to you," he says, and for once there's nothing careful or rehearsed in the way he says it, just plain, unguarded truth, offered freely for the first time since your doorway.`,
      ending: true,
      tag: "Ending: Surrender"
    },

    n6_reckoning: {
      locked: true,
      chapter: "Six — Reckoning",
      text: `"The truth," you say, "is that I don't see you as the threat my bloodline was built against anymore, and I'm not going to pretend that's nothing after everything you've told me tonight. But I'm also not going to pretend I understand yet what three centuries of this actually makes us, standing here in the dark among all these older names."

It's not the surrender the working might have hoped for from you tonight. You watch him brace, visibly, for the stone to stay bare, for the working to reject it as insufficient.

Instead, the nearest stone warms slowly under your palm, and your name begins to etch itself in regardless — slower, more careful than it might have, but genuine, the stone accepting complicated honesty in place of a cleaner declaration you're not yet ready to make tonight. The bond renews, held now on real will rather than inherited duty, however uncertain that will still feels standing here.

"That shouldn't have been enough to satisfy it," he admits afterward, something like real wonder moving through his voice as he watches the last letter settle into the stone.

"Maybe the working prefers honesty to theater, whatever shape the honesty happens to take when it's actually given."

"Maybe." A faint, real almost-smile crosses his face. "We don't have to decide the rest of it tonight, out here among stones older than both our families combined. The bond holds either way now. Whatever's between us can take whatever time it actually needs to become something neither of us has to force before it's ready to be named."

It isn't the ending where three centuries of complicated history resolves itself in a single dusk. It's the one where the seal holds, the truth was genuinely enough even unfinished, and whatever comes next gets built slowly, on terms you actually chose for yourself instead of simply inherited from a stone.

He walks you back toward the house, keeping a companionable distance that no longer feels quite like the wary boundary it once was between you. "For what it's worth," he says at your door, "I'd rather have this — honest, unfinished, entirely uncertain — than three more centuries of the version my kind usually settles for."

"That's not exactly romantic."

"No," he agrees, something warm threading through his voice despite the plain words. "But it's true, and I find I'd rather offer you that than anything prettier and false carved onto a stone that didn't mean it."`,
      ending: true,
      tag: "Ending: Reckoning"
    },

    n6_severance: {
      locked: true,
      chapter: "Six — Severance",
      text: `You renew the bond on guarded terms, careful and plain, exactly as much truth as you've allowed yourself all night, and the wardstones test it the way old magic tests anything half-offered rather than fully given, the nearest stone's surface staying stubbornly, uncomfortably bare.

"It's not enough," he says, understanding it a moment before the ground does, urgency sharpening his voice. "The working needs genuine will, not obligation dressed carefully as one—"

The seal strains beneath you both. Something on the other side of it presses hard against the fraying edge, testing it, and you fight — Warden training finding uses your mother never got the chance to teach you fully, instinct filling the gaps her early death left behind — until between the two of you, the immediate breach is beaten back and sealed again, holding, if only barely, if only for now, the stone beside you still bare where a name should have settled.

"It'll hold," he says afterward, the full length of the wardstones between you now. "For your lifetime, probably, maybe longer. Not the way it could have carved itself, though, if you'd meant it fully tonight."

"I did what the inheritance required of me. I held the line."

"You did." No accusation in it whatsoever, which somehow makes it worse than if there had been one. "That was always going to be enough to hold the seal tonight. I think we both already know it was never going to be enough for anything past that, whatever that anything might have become between us, stone or no stone."

No dramatic final argument between you — just two people who did the necessary thing and left everything else exactly where three centuries of duty left it: unresolved, guarded, chosen with open eyes this time instead of simply avoided in the dark, the stone's bare face the only record either of you gets of tonight.

You bury the memory of tonight the way your mother buried everything that didn't fit neatly into duty — carefully, without ceremony, and without ever quite managing to forget it entirely. The seal holds. The house stands. Some nights, that has to be enough on its own.`,
      ending: true,
      tag: "Ending: Severance"
    },

    n6_unbound: {
      locked: true,
      chapter: "Six — Unbound",
      text: `"No," you say, steadier than you expect your own voice to sound standing among these ancient stones. "I'm not renewing a three-century bond I don't actually mean, not even for the seal, not even for whatever waits on the other side of it. There has to be another way to hold this, and I'm going to find one instead of simply inheriting yours unquestioned, or waiting on a stone to decide for me."

He doesn't argue. Doesn't try to talk you back into the working the way you half expected. Just watches you with something that might be respect, might be quiet grief at a door closing that's been standing open three hundred years, waiting for exactly this refusal to finally come.

"There might be another way," he admits finally, thoughtful. "Older, harder, considerably less certain — a different kind of containment that doesn't require a Warden's bond at all, doesn't require binding you to anything you didn't choose freely, or carving your name into a stone you never agreed to stand beside. I'll help you find it, if you'll let me. Not because the seal demands it of me tonight. Because I'd rather see you choose an entirely different path than watch you renew this one out of obligation alone, the way three centuries of women before you did, name after name."

You don't have a ready answer beyond simply accepting the offer. The two of you begin the harder, uncertain work of finding a containment that doesn't cost you your whole life to something you never actually chose — the wardstones quiet behind you now, unresolved, and for the first time in your bloodline's three centuries, entirely a choice made freely instead of inherited without question, no stone waiting to record it either way.

"For what it's worth," he says, walking beside you into the dark beyond the stones, "I'd rather help you find a harder freedom than watch you settle for an easier chain, whatever that search costs either of us before it's through."

Behind you, the wardstones stand exactly as they always have, three centuries of names catching what little moonlight makes it through the trees, waiting to see whether yours ever joins them, or whether tonight is the night a Warden's line finally writes its own ending instead of inheriting one.`,
      ending: true,
      tag: "Ending: Unbound"
    }
  }
};
