# Phishing Module: Mixed Inbox Training

## Purpose

Teach users to distinguish phishing attempts from legitimate emails
and text messages through investigation, decision-making and feedback.

Users work through a realistic inbox containing both legitimate
messages and phishing attempts. They must report phishing messages
and accept legitimate ones.

The module is not tied to one company or a single scenario.
Messages cover varied fictional personal, educational and workplace
situations.

## Learning objectives

Users will practise:

- Checking actual sender details rather than trusting display names.
- Inspecting link destinations before deciding whether to trust them.
- Comparing messages with expected events and previous conversations.
- Verifying unusual requests through an independent trusted channel.
- Recognising convincing phishing attempts with few obvious clues.
- Accepting legitimate messages without reporting everything.
- Explaining decisions using relevant evidence.

The project will evaluate whether these activities improve recognition.
Completing the module does not guarantee protection against phishing.

## User experience

### 1. Enter the inbox

The user receives a short fictional context briefing.

For example, they may be expecting a delivery, using an online service,
studying at a university or working on a shared document.

Their inbox contains a mixture of legitimate and phishing messages.

An initial session contains approximately 10 messages.
Both message types appear, but their proportions and order vary.
The user is not told how many phishing messages are present.

### 2. Open and investigate messages

The user can open messages in any order.

For emails, they can:

- Expand the sender details to see the full email address.
- Check the reply-to address where relevant.
- Inspect a link's destination without opening it.
- Read previous messages in the conversation.
- Compare the request with information in the context panel.
- Verify the request using a simulated trusted contact directory.

For text messages, they can:

- Inspect the sender name or number.
- Read the conversation history.
- Inspect link destinations.
- Compare the request with the supplied context.
- Use independent verification when available.

Link inspection must work through a visible button or control.
It must not depend only on hovering, so keyboard and mobile users
can access the same information.

### 3. Make a decision

For each message, the user chooses:

- Report phishing.
- Accept as legitimate.

The user can temporarily select "Review later" before making
a final decision.

Accepting a message only classifies it as legitimate.
It does not automatically open links, submit information,
approve payments or download attachments.

The user can revise their choice before confirming it.
After confirmation, that attempt is locked.

### 4. Identify supporting evidence

Before confirming a decision, the user selects the reasons
that support it.

Possible reasons include:

- The sender address does not match the expected organisation.
- The link destination does not match the claimed service.
- The request conflicts with the previous conversation.
- An independent trusted contact confirmed or denied the request.
- The message matches an expected event and verified details.

Evidence choices are specific to each message.
Some choices are weak or misleading.

For example, professional wording alone does not establish
that a message is legitimate.

### 5. Receive feedback

In practice mode, feedback appears after each confirmed decision.

It explains:

- Whether the classification was correct.
- Which evidence mattered.
- What the user inspected.
- What the user missed or misunderstood.
- Why their selected reasons were strong or weak.
- What to do differently next time.

Feedback is also provided when legitimate messages are
incorrectly reported.

In assessment mode, correctness feedback is withheld until
the session ends.

### 6. Review progress

At the end of a session, the user sees:

- Phishing messages correctly reported.
- Phishing messages mistakenly accepted.
- Legitimate messages correctly accepted.
- Legitimate messages incorrectly reported.
- The quality of their supporting evidence.
- Skills requiring further practice.

## Difficulty levels

Difficulty labels are not displayed beside individual messages
during a session.

### Easy

Phishing messages contain several clear warning signs.

Examples:

- An unexpected prize with an unrelated sender.
- A request for account details from an obviously incorrect address.
- A link destination unrelated to the claimed service.

Legitimate messages are relatively straightforward to verify
against the supplied context.

### Medium

Phishing messages are plausible and professionally written.
The warning signs require closer inspection.

Examples:

- A delivery notification with a subtly incorrect destination.
- A university document request with a mismatched reply-to address.
- A subscription warning that conflicts with the user's context.

Legitimate messages can also contain urgency or unusual wording.
The user must assess evidence rather than appearance alone.

### Hard / Expert

Phishing messages contain few obvious visual clues.

Examples:

- A message continuing an existing conversation.
- A request referring to an expected document or event.
- A message from a simulated compromised familiar account.

A correct sender address does not automatically establish
legitimacy in these scenarios.

The user may need to compare the request with previous arrangements
or verify it through an independent trusted contact.

Every hard message must contain enough accessible evidence
for a defensible decision.

Users must not be penalised for failing to discover facts
that the simulator never makes available.

These difficulty levels are provisional design categories.
They will be reviewed and calibrated during evaluation.

## Message variety

Messages may cover:

- Deliveries and collection notices.
- Receipts, refunds and subscription renewals.
- University announcements and coursework.
- Account alerts and password-reset notifications.
- Shared documents and meeting invitations.
- Invoices and payment requests.
- Personal invitations and ordinary conversations.

Where appropriate, each topic includes both legitimate
and phishing examples.

Names, organisations and contexts vary between sessions.
The topic itself must not reveal whether a message is phishing.

## Scoring

Application rules determine scores and correct answers.

No points are awarded simply for:

- Opening a message.
- Expanding sender details.
- Inspecting a link.
- Opening the context panel.

These actions are recorded to support feedback, but clicking
through the interface does not demonstrate understanding.

Assess classification and evidence quality separately.

### Classification results

Record:

- Correct phishing reports.
- Missed threats: phishing accepted as legitimate.
- Correct acceptance of legitimate messages.
- False alarms: legitimate messages reported as phishing.
- Unanswered messages.

Show both counts and percentages.
Do not rely on a single overall score that hides false alarms.

Reporting every message must not produce a perfect result.
Accepting every message must not produce a perfect result.

### Evidence quality

Use a predefined rubric for each message:

- 0: Incorrect evidence or no supporting evidence.
- 1: Relevant but incomplete evidence.
- 2: Sufficient evidence without contradictory selections.

Selecting every evidence option must not earn full credit.

A correct classification with weak reasoning should receive
different feedback from a well-supported correct classification.

Do not award points for speed in the initial version.

## AI-generated scenarios

The backend selects:

- A reviewed message template.
- The legitimate or phishing label.
- The target skill.
- The intended difficulty.
- The relevant fictional context.

AI generates variations within those constraints.

It may vary wording, fictional identities and contextual details,
but must preserve the evidence needed to solve the message.

Generated content must be checked for:

- Required fields.
- Internal consistency.
- Preservation of intended clues.
- Sufficient evidence for the correct decision.
- Agreement with the predefined scoring rubric.

Valid formatting alone does not prove that a scenario is correct.

If generation fails or produces unsuitable content,
use a reviewed fallback message.

Store the exact message version shown to the user.

## Personalised training and feedback

Track performance across skills such as:

- Sender inspection and interpretation.
- Link destination interpretation.
- Context and conversation checking.
- Independent verification.
- Evidence-based classification.

Use repeated performance patterns to adjust practice.

For example:

- Repeatedly missing misleading destinations leads to
  more practice involving link inspection.
- Repeatedly trusting familiar display names leads to
  more sender-verification practice.
- Strong performance leads to more difficult messages.

Continue including legitimate messages and a range of skills.
Do not make every personalised follow-up message phishing.

AI feedback uses the recorded actions, evidence selections
and rule-based result.

It must not invent actions or change scores.

Use reviewed feedback if AI feedback is unavailable or unsuitable.

## Assessment and evaluation

Keep assessment separate from adaptive practice.

Pre-training and post-training assessments should use different
but comparable reviewed messages.

During assessment:

- Do not adapt difficulty based on answers.
- Do not reveal correctness until the session ends.
- Record classifications and evidence selections.
- Include both legitimate and phishing messages.

Evaluate improvement, false alarms, missed threats,
feedback quality and usability.

Follow university ethics procedures before recruiting
participants or collecting evaluation data.

## Data to record

- Session identifier and practice or assessment mode.
- Message identifier and template version.
- Exact message and context displayed.
- Message channel, difficulty and target skills.
- Ordered inspection and verification actions.
- Final classification and evidence selections.
- Rule-based results.
- Feedback shown.
- AI generation and fallback information where applicable.

Store answer labels and scoring rules on the server.
Do not expose them to the browser before submission.

## Safety and simulation boundaries

All messages, contacts, links and consequences are fictional.

The application must not:

- Send real emails or text messages.
- Access a user's real inbox.
- Collect real passwords or payment details through scenarios.
- Execute attachments or generated scripts.
- Navigate users to real phishing destinations.

Use fictional reserved domains such as .example.
Any destination page or verification response stays inside
the simulator.

Keep AI API keys on the backend.
Treat generated content as untrusted display data.

## Acceptance checks

- The inbox contains legitimate and phishing messages.
- Message order and proportions can vary between sessions.
- Users can inspect sender details and link destinations.
- Email and text views expose appropriate information.
- Users can consult context and verify relevant requests.
- Every hard message has enough accessible evidence.
- Users can report phishing or accept legitimate messages.
- Review later does not count as a final answer.
- Inspection clicks alone do not increase scores.
- Duplicate actions cannot award duplicate credit.
- Reporting everything produces visible false alarms.
- Accepting everything produces visible missed threats.
- Evidence selections are scored consistently.
- Feedback reflects the user's recorded actions.
- Assessment answers remain hidden until completion.
- AI failure does not prevent the session from working.
- No scenario action opens a real external destination.
- Essential controls work with keyboard and touch input.

## Implementation stages

1. Build an email inbox with reviewed fixed messages containing
   legitimate examples and phishing at all three difficulty levels.

2. Add message inspection, supporting context, verification,
   report/accept decisions and evidence selection.

3. Implement deterministic scoring and rule-based feedback.

4. Add database storage, progress tracking and the text-message view.

5. Add validated AI-generated variations and personalised feedback.

6. Add adaptive practice and separate assessment sessions.

Build the module incrementally while retaining the full design
as the intended outcome.