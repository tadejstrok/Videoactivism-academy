import type { Lang } from './ui';

/** Where organisations reach the team about running the programme. */
export const contactUrl = 'mailto:info@danesjenovdan.si?subject=Videoactivism%20Academy';

export interface SiteCopy {
  hero: { kicker: string; pitch: string; facts: string[]; report: string; curriculum: string };
  forYou: { title: string; items: string[] };
  phases: {
    title: string;
    items: { label: string; title: string; when: string; text: string; points?: string[] }[];
    end: { title: string; text: string };
  };
  learn: { title: string; items: string[] };
  formats: { title: string; lead: string; items: string[] };
  modules: { title: string; lead: string; points: { title: string; text: string }[] };
  interested: {
    title: string;
    lead: string;
    options: { title: string; text: string; button: string }[];
  };
  program: {
    title: string;
    lead: string;
    description: string[];
    objectivesTitle: string;
    objectives: string[];
    targetTitle: string;
    target: string[];
    outcomesTitle: string;
    outcomesLead: string;
    outcomes: { outcome: string; content: string; methods: string; evaluation: string }[];
    featuresTitle: string;
    features: { title: string; text: string }[];
    durationTitle: string;
    duration: { activity: string; when: string }[];
    materialsTitle: string;
    materials: { name: string; form: string }[];
    evaluationTitle: string;
    evaluation: string[];
  };
  about: {
    title: string;
    lead: string;
    partners: { name: string; country: string; text: string; logo: string; url: string }[];
    peopleTitle: string;
    people: { title: string; text: string }[];
    reuseTitle: string;
    reuse: string;
  };
}

const en: SiteCopy = {
  hero: {
    kicker: 'Project report & open curriculum',
    pitch: '20 young people from Slovenia and Croatia learned to make videos that push back against hate speech, polarisation and disinformation. Here is how it happened, and how your organisation can run it too.',
    facts: ['20 participants', 'SI + HR', '4-day Boot Camp', '6 months of mentoring', 'Closing event'],
    report: 'How it happened',
    curriculum: 'Use the curriculum',
  },
  forYou: {
    title: 'Who took part',
    items: [
      '20 young people aged 18 to 30, ten from Slovenia and ten from Croatia',
      'Some already active in NGOs, civic initiatives and student groups, some just starting out',
      'From cities and rural areas, with different backgrounds, identities and experiences',
      'All of them wanting to use video for positive social change',
    ],
  },
  phases: {
    title: 'How it happened',
    items: [
      {
        label: 'Phase 1',
        title: 'Boot Camp',
        when: '4 days, in person',
        text: 'The group spent four days in workshops, lectures, discussions and hands-on work with mentors and guest influencers, and developed their first ideas for digital counter-narratives.',
        points: ['Active citizenship & European values', 'Hate speech, fact-checking, prebunking', 'Message design', 'Video & sound production'],
      },
      {
        label: 'Phase 2',
        title: 'Mentoring',
        when: '6 months, online',
        text: 'Monthly online meetings, a Discord community, guest lectures and continuous work on their own content. Participants shared drafts, got feedback, improved their videos and published them.',
        points: ['Monthly mentoring calls', 'Feedback on Discord', 'Guest lectures & good practices', 'Publishing their own videos'],
      },
      {
        label: 'Phase 3',
        title: 'Closing event',
        when: '1 day, in person',
        text: 'Participants gathered again in person for a round of closing remarks, evaluation and reflection. Motivational speeches by guest lecturers, experienced videoactivists.',
      },
    ],
    end: { title: 'Youthpass', text: 'Participants reflected on what they learned and received certificates naming the competences they gained.' },
  },
  learn: {
    title: 'What participants learned',
    items: [
      'What digital active citizenship means',
      'The core European values',
      'How to spot hate speech, polarisation and toxic narratives',
      'Narratives vs. counter-narratives vs. positive alternatives',
      'Prebunking: exposing manipulation before it lands',
      'How to shape a clear, inclusive message for an audience',
      'Recording and editing vertical video and sound',
      'How to assess their own growth',
    ],
  },
  formats: {
    title: 'Formats they tried',
    lead: 'Low-budget and DIY: a clear message, creativity and authenticity mattered more than an expensive studio.',
    items: ['Vlog', 'Podcast', 'Explainer', 'Live stream', 'Political satire', 'Vox pop', 'Dialogue', 'Rant', 'Sketch'],
  },
  modules: {
    title: 'Open curriculum',
    lead: 'The lesson plans we used at the Boot Camp, free for youth organisations, schools and NGOs to run themselves.',
    points: [
      { title: 'Ready to run', text: 'Each module is a 90-minute session with a step-by-step flow, discussion prompts and group activities.' },
      { title: 'Easy to adapt', text: 'Shorter and longer versions, and examples you can swap for cases from your own country.' },
      { title: 'Tested with young people', text: 'Developed and run with 20 participants from Slovenia and Croatia.' },
    ],
  },
  interested: {
    title: 'Interested in the programme?',
    lead: 'Run it on your own, or bring in the people who made it.',
    options: [
      { title: 'Use the curriculum yourself', text: 'Take the lesson plans, adapt them to your group and run the modules on your own. Free for non-formal education.', button: 'Browse the curriculum' },
      { title: 'Let our team run it with you', text: 'Our experienced team from Danes je nov dan and Delta can prepare, facilitate and mentor a similar programme for your organisation, from a single workshop to a full Boot Camp with mentoring.', button: 'Get in touch' },
    ],
  },
  program: {
    title: 'The programme',
    lead: 'A non-formal education programme in digital active citizenship, media literacy and video counter-narratives.',
    description: [
      'The Videoactivism Academy gives young people aged 18 to 30 the knowledge, skills and competences for active, responsible and creative participation in digital spaces. It focuses on digital active citizenship, media literacy, and the ability to create positive digital counter-narratives against hate speech, social polarisation, disinformation and exclusionary narratives.',
      'Participants get to know European values, forms of civic participation, and methods of critical and activist online communication, along with practical tools for creating content. The emphasis is on social media content, especially vertical video, and on messages that promote democracy, the rule of law, inclusion, diversity, solidarity and sustainability.',
      'The methodology combines non-formal education, experiential learning, project work, collaborative learning and mentoring.',
    ],
    objectivesTitle: 'Objectives',
    objectives: [
      'Encourage and empower young people to act actively and responsibly in the digital space',
      'Develop civic, social, digital and media competences, and connect young people with peers, mentors, influencers and civil society organisations from different contexts',
      'Introduce European values: democracy, the rule of law, human rights, inclusion, diversity, solidarity and sustainability',
      'Equip young people to recognise and respond to hate speech, polarisation, extremist narratives and disinformation through fact-checking, prebunking and responsible communication',
      'Develop practical skills in filming, video editing and sound editing for social media',
      'Encourage creative expression, public advocacy and further civic engagement',
    ],
    targetTitle: 'Who it is for',
    target: [
      'Young people aged 18 to 30 from Croatia and Slovenia who are already making, or want to make, socially critical, civic and activist digital content. That includes people active in NGOs, civic initiatives, informal, student or youth activist groups, and people with no previous experience who want to get involved.',
      'Participants are selected through a public call. We especially welcome young people from rural areas, with different educational backgrounds, of different gender identities and sexual orientations, LGBTQIA+ young people, members of minorities and young people with fewer opportunities.',
      'The programme, or parts of it, can also be adapted for school classes, existing youth groups or groups from a single country.',
    ],
    outcomesTitle: 'Learning outcomes',
    outcomesLead: 'Eight things participants can do by the end, and how we get there.',
    outcomes: [
      { outcome: 'Explain the concept of digital active citizenship', content: 'Active citizenship; digital citizenship; online and offline participation; the role of young people and civil society in a democracy', methods: 'Workshop; guided discovery; discussion; work on examples; group work', evaluation: 'Oral reflection; self-evaluation' },
      { outcome: 'Explain fundamental European values', content: 'Democracy; rule of law; human rights; inclusion; diversity; solidarity; sustainability', methods: 'Interactive lecture; group work; case analysis; discussion', evaluation: 'Quiz; group presentation; self-assessment of understanding' },
      { outcome: 'Recognise hate speech, polarisation and negative digital narratives', content: 'Hate speech; polarisation; extremist and populist narratives; online radicalisation; social network dynamics', methods: 'Analysis of social media examples; guided discussion; group work; narrative mapping', evaluation: 'Case analysis; group presentation; mentor comments' },
      { outcome: 'Distinguish narratives, counter-narratives and positive alternative narratives', content: 'Digital narratives; counter-narratives; positive narratives; socially responsible communication', methods: 'Workshop; analysis of good practices; work on examples; group work', evaluation: 'A developed counter-narrative; group feedback' },
      { outcome: 'Explain and apply prebunking', content: 'Manipulative patterns; preventive exposure of disinformation; prebunking messages', methods: 'Work on examples; guided discovery; practical task; discussion', evaluation: 'A developed prebunking message; mentor feedback' },
      { outcome: 'Shape a clear, inclusive, audience-adapted counter-narrative', content: 'Target audience; key message; tone; storytelling; humour; emotions; argumentation; call to action; topic and problem; objective; format; script; publishing plan', methods: 'Brainstorming; workshop; pair work; campaign analysis; peer feedback; mentored individual and group work', evaluation: 'Message outline; content concept; idea presentation; group and mentor feedback' },
      { outcome: 'Record and edit basic video and audiovisual content', content: 'Vertical video; framing; lighting; sound; basic editing; subtitles; rhythm; adapting to platforms', methods: 'Practical workshop; demonstration; work with equipment; individual and group work', evaluation: 'A trial piece of content; technical and content feedback' },
      { outcome: 'Assess your own development and competences', content: 'Self-assessment; the Youthpass process; a personal plan for further engagement; reflection on learning', methods: 'Reflective conversation; evaluation questionnaire; individual self-assessment', evaluation: 'Youthpass reflection; final self-evaluation; evaluation questionnaire' },
    ],
    featuresTitle: 'What makes it different',
    features: [
      { title: 'Mentors from both countries', text: 'Two mentors from Slovenia bring digital communication, media literacy and content development. Two from Croatia bring youth work, non-formal education and civic competences.' },
      { title: 'Influencers as guest lecturers', text: 'Two creators who run large public pages with counter-narratives and satirical commentary share how activist communication, audience building and authentic expression work in practice.' },
      { title: 'Intensive + long-term', text: 'A 4-day Boot Camp for the basics, then 6 months of mentoring for depth, continuity and actually producing content. It ends in independent action, not only education.' },
      { title: 'A Discord community', text: 'Post drafts, get comments from mentors and peers, improve your work and publish it.' },
      { title: 'DIY over budget', text: 'Vlogs, podcasts, explainers, live streams, satire, vox pop… Relevant communication needs a clear message, creativity, authenticity and responsibility, not expensive production.' },
      { title: 'Inclusive by design', text: 'Inclusive language, subtitles, accessible formats and responsible representation of different social groups.' },
    ],
    durationTitle: 'Timeline',
    duration: [
      { activity: 'Promotion, applications and inclusive selection', when: 'Before the Boot Camp' },
      { activity: 'Videoactivism Academy Boot Camp', when: '4 days' },
      { activity: 'Online mentoring meetings', when: 'About once a month' },
      { activity: 'Work on your own content between meetings', when: 'Continuously over 6 months' },
      { activity: 'Guest lectures and exchange of good practices', when: 'During Boot Camp and mentoring' },
      { activity: 'Publishing content and collecting feedback', when: 'During mentoring' },
      { activity: 'Final reflection and Youthpass', when: 'At the end of mentoring' },
    ],
    materialsTitle: 'Teaching materials',
    materials: [
      { name: 'Boot Camp and mentoring curriculum', form: 'Document' },
      { name: 'Workshop plans for thematic modules', form: 'Lesson plans' },
      { name: 'Presentations for thematic modules', form: 'Presentations' },
      { name: 'Worksheet for analysing narratives, message design and counter-narratives', form: 'Worksheet' },
      { name: 'Good practices in digital activism', form: 'Videos / case studies' },
      { name: 'Basic vertical video and sound editing', form: 'Short guide / video' },
      { name: 'Online mentoring platform', form: 'Discord' },
      { name: 'Evaluation questionnaires', form: 'Online forms' },
      { name: 'Self-reflection and Youthpass forms', form: 'Forms' },
    ],
    evaluationTitle: 'Evaluation',
    evaluation: [
      'During the Boot Camp, facilitators run a short oral reflection after each module on the content, methods, understanding, group work and usefulness. At the end, everyone fills in a questionnaire on organisation, mentors, group dynamics, methods and content, including a self-assessment of their skills.',
      'During the six months of mentoring, evaluation is continuous: self-reflection, mentor feedback and peer comments on Discord. Mentors follow involvement, content quality, growing independence and readiness for further engagement, and adapt the mentoring when needed.',
      'At the end comes a final evaluation and the Youthpass process, in which participants recognise, name and document their competences. All feedback is used to improve the curriculum, lesson plans and materials for future editions.',
    ],
  },
  about: {
    title: 'About',
    lead: 'The Videoactivism Academy is a joint programme of two organisations from Slovenia and Croatia, co-funded by the European Union.',
    partners: [
      { name: 'Danes je nov dan', country: 'Slovenia', text: 'Institute for other studies. Builds digital tools and campaigns for a more democratic and transparent society, and makes political video and satire for social media.', logo: 'djnd-logo.png', url: 'https://danesjenovdan.si' },
      { name: 'Udruga Delta', country: 'Croatia', text: 'An association from Rijeka working on youth work, non-formal education and the development of civic competences.', logo: 'delta-logo.png', url: 'https://www.udruga-delta.hr' },
    ],
    peopleTitle: 'People',
    people: [
      { title: '4 mentors', text: 'Two from Slovenia (digital communication, media literacy, content) and two from Croatia (youth work, non-formal education, civic competences).' },
      { title: '2 guest influencers', text: 'Creators of public pages with large followings who make counter-narratives and satirical social commentary.' },
      { title: '20 participants', text: 'Ten from Slovenia and ten from Croatia, aged 18–30.' },
    ],
    reuseTitle: 'Use this curriculum',
    reuse: 'The programme is built to be adapted: to smaller groups, a single country, school classes or existing youth groups. The lesson plans on this site are written for facilitators. Take them, adapt them to your local context and run them.',
  },
};

const sl: SiteCopy = {
  hero: {
    kicker: 'Poročilo o projektu in odprt kurikul',
    pitch: '20 mladih iz Slovenije in Hrvaške se je naučilo ustvarjati videe, ki se upirajo sovražnemu govoru, polarizaciji in dezinformacijam. Takole je potekalo in tako ga lahko izvede tudi vaša organizacija.',
    facts: ['20 udeležencev', 'SI + HR', '4-dnevni bootcamp', '6 mesecev mentorstva', 'Zaključni dogodek'],
    report: 'Kako je potekalo',
    curriculum: 'Uporabi kurikul',
  },
  forYou: {
    title: 'Kdo je sodeloval',
    items: [
      '20 mladih med 18. in 30. letom, deset iz Slovenije in deset iz Hrvaške',
      'Nekateri že aktivni v nevladnih organizacijah, pobudah in študentskih skupinah, drugi šele na začetku',
      'Iz mest in s podeželja, z različnimi ozadji, identitetami in izkušnjami',
      'Vsi z željo, da z videom prispevajo k pozitivnim družbenim spremembam',
    ],
  },
  phases: {
    title: 'Kako je potekalo',
    items: [
      {
        label: '1. faza',
        title: 'Bootcamp',
        when: '4 dni, v živo',
        text: 'Skupina je štiri dni preživela na delavnicah, predavanjih, pogovorih in praktičnem delu z mentorji in gostujočimi vplivneži ter razvila prve ideje za digitalne protinarative.',
        points: ['Aktivno državljanstvo in evropske vrednote', 'Sovražni govor, preverjanje dejstev, prebunking', 'Oblikovanje sporočil', 'Video in zvočna produkcija'],
      },
      {
        label: '2. faza',
        title: 'Mentorstvo',
        when: '6 mesecev, na spletu',
        text: 'Mesečna spletna srečanja, skupnost na Discordu, gostujoča predavanja in stalno delo na lastnih vsebinah. Udeleženci so delili osnutke, dobivali povratne informacije, izboljševali videe in jih objavljali.',
        points: ['Mesečna mentorska srečanja', 'Povratne informacije na Discordu', 'Gostujoča predavanja in dobre prakse', 'Objava lastnih videov'],
      },
      {
        label: '3. faza',
        title: 'Zaključni dogodek',
        when: '1 dan, v živo',
        text: 'Udeleženci so se znova srečali v živo na zaključnih nagovorih, evalvaciji in refleksiji. Motivacijski govori gostujočih predavateljev, izkušenih videoaktivistov.',
      },
    ],
    end: { title: 'Youthpass', text: 'Udeleženci so razmislili o tem, kaj so se naučili, in prejeli certifikate, ki poimenujejo pridobljene kompetence.' },
  },
  learn: {
    title: 'Kaj so se udeleženci naučili',
    items: [
      'Kaj pomeni digitalno aktivno državljanstvo',
      'Temeljne evropske vrednote',
      'Prepoznati sovražni govor, polarizacijo in toksične narative',
      'Narativi, protinarativi in pozitivne alternative',
      'Prebunking: razkrij manipulacijo, preden zadene',
      'Oblikovati jasno, vključujoče sporočilo za občinstvo',
      'Snemati in montirati vertikalni video in zvok',
      'Oceniti lasten napredek',
    ],
  },
  formats: {
    title: 'Formati, ki so jih preizkusili',
    lead: 'Nizkoproračunsko in DIY: jasno sporočilo, ustvarjalnost in avtentičnost so šteli več kot drag studio.',
    items: ['Vlog', 'Podkast', 'Razlagalni video', 'Prenos v živo', 'Politična satira', 'Vox pop', 'Dialog', 'Rant', 'Skeč'],
  },
  modules: {
    title: 'Odprt kurikul',
    lead: 'Učne priprave, ki smo jih uporabili na bootcampu, so prosto na voljo mladinskim organizacijam, šolam in nevladnim organizacijam za samostojno izvedbo.',
    points: [
      { title: 'Pripravljeno za izvedbo', text: 'Vsak modul je 90-minutna delavnica s potekom po korakih, vprašanji za pogovor in skupinskimi aktivnostmi.' },
      { title: 'Enostavno prilagodljivo', text: 'Krajše in daljše različice ter primeri, ki jih lahko zamenjate s primeri iz svoje države.' },
      { title: 'Preizkušeno z mladimi', text: 'Razvito in izvedeno z 20 udeleženci iz Slovenije in Hrvaške.' },
    ],
  },
  interested: {
    title: 'Vas program zanima?',
    lead: 'Izvedite ga sami ali pa povabite ljudi, ki so ga ustvarili.',
    options: [
      { title: 'Uporabite kurikul sami', text: 'Vzemite učne priprave, jih prilagodite svoji skupini in module izvedite samostojno. Prosto za neformalno izobraževanje.', button: 'Prebrskaj kurikul' },
      { title: 'Naša ekipa ga izvede z vami', text: 'Naša izkušena ekipa iz Danes je nov dan in Delte lahko za vašo organizacijo pripravi, vodi in mentorira podoben program, od posamezne delavnice do celotnega bootcampa z mentorstvom.', button: 'Pišite nam' },
    ],
  },
  program: {
    title: 'Program',
    lead: 'Program neformalnega izobraževanja o digitalnem aktivnem državljanstvu, medijski pismenosti in video protinarativih.',
    description: [
      'Akademija videoaktivizma mladim med 18. in 30. letom omogoča, da pridobijo znanje, veščine in kompetence za aktivno, odgovorno in ustvarjalno sodelovanje v digitalnih prostorih. Osredotoča se na digitalno aktivno državljanstvo, medijsko pismenost in sposobnost ustvarjanja pozitivnih digitalnih protinarativov proti sovražnemu govoru, družbeni polarizaciji, dezinformacijam in izključujočim narativom.',
      'Udeleženci spoznajo evropske vrednote, oblike državljanske participacije, metode kritičnega in aktivističnega spletnega komuniciranja ter praktična orodja za ustvarjanje vsebin. Poudarek je na vsebinah za družbena omrežja, predvsem vertikalnem videu, in na sporočilih, ki krepijo demokracijo, pravno državo, vključenost, raznolikost, solidarnost in trajnost.',
      'Metodologija združuje neformalno izobraževanje, izkustveno učenje, projektno delo, sodelovalno učenje in mentorstvo.',
    ],
    objectivesTitle: 'Cilji',
    objectives: [
      'Spodbuditi in opolnomočiti mlade za aktivno in odgovorno delovanje v digitalnem prostoru',
      'Razviti državljanske, socialne, digitalne in medijske kompetence ter povezati mlade z vrstniki, mentorji, vplivneži in organizacijami civilne družbe iz različnih okolij',
      'Predstaviti evropske vrednote: demokracijo, pravno državo, človekove pravice, vključenost, raznolikost, solidarnost in trajnost',
      'Usposobiti mlade, da prepoznajo sovražni govor, polarizacijo, ekstremistične narative in dezinformacije ter se nanje odzovejo s preverjanjem dejstev, prebunkingom in odgovorno komunikacijo',
      'Razviti praktične veščine snemanja ter video in zvočne montaže za družbena omrežja',
      'Spodbujati ustvarjalno izražanje, javno zagovorništvo in nadaljnje državljansko udejstvovanje',
    ],
    targetTitle: 'Komu je namenjen',
    target: [
      'Mladim med 18. in 30. letom iz Slovenije in Hrvaške, ki že ustvarjajo ali želijo ustvarjati družbenokritične, državljanske in aktivistične digitalne vsebine. To vključuje mlade iz nevladnih organizacij, državljanskih pobud, neformalnih, študentskih ali mladinskih aktivističnih skupin ter tiste brez izkušenj, ki se želijo vključiti.',
      'Udeleženci so izbrani prek javnega poziva. Posebej vabimo mlade s podeželja, z različno izobrazbo, različnih spolnih identitet in usmerjenosti, LGBTQIA+ mlade, pripadnike manjšin in mlade z manj priložnostmi.',
      'Program ali njegove dele je mogoče prilagoditi tudi za šolske razrede, obstoječe mladinske skupine ali skupine iz ene države.',
    ],
    outcomesTitle: 'Učni izidi',
    outcomesLead: 'Osem stvari, ki jih udeleženci znajo na koncu, in kako pridemo do njih.',
    outcomes: [
      { outcome: 'Pojasniti koncept digitalnega aktivnega državljanstva', content: 'Aktivno državljanstvo; digitalno državljanstvo; spletna in nespletna participacija; vloga mladih in civilne družbe v demokraciji', methods: 'Delavnica; vodeno odkrivanje; pogovor; delo na primerih; skupinsko delo', evaluation: 'Ustna refleksija; samoevalvacija' },
      { outcome: 'Pojasniti temeljne evropske vrednote', content: 'Demokracija; pravna država; človekove pravice; vključenost; raznolikost; solidarnost; trajnost', methods: 'Interaktivno predavanje; skupinsko delo; analiza primerov; pogovor', evaluation: 'Kviz; skupinska predstavitev; samoocena razumevanja' },
      { outcome: 'Prepoznati sovražni govor, polarizacijo in negativne digitalne narative', content: 'Sovražni govor; polarizacija; ekstremistični in populistični narativi; spletna radikalizacija; dinamika družbenih omrežij', methods: 'Analiza primerov z omrežij; vodeni pogovor; skupinsko delo; mapiranje narativov', evaluation: 'Analiza primera; skupinska predstavitev; komentarji mentorja' },
      { outcome: 'Razlikovati med narativi, protinarativi in pozitivnimi alternativnimi narativi', content: 'Digitalni narativi; protinarativi; pozitivni narativi; družbeno odgovorna komunikacija', methods: 'Delavnica; analiza dobrih praks; delo na primerih; skupinsko delo', evaluation: 'Izdelan protinarativ; skupinska povratna informacija' },
      { outcome: 'Pojasniti in uporabiti prebunking', content: 'Manipulativni vzorci; preventivno razkrivanje dezinformacij; prebunking sporočila', methods: 'Delo na primerih; vodeno odkrivanje; praktična naloga; pogovor', evaluation: 'Izdelano prebunking sporočilo; povratna informacija mentorja' },
      { outcome: 'Oblikovati jasen, vključujoč in občinstvu prilagojen protinarativ', content: 'Ciljno občinstvo; ključno sporočilo; ton; pripovedovanje; humor; čustva; argumentacija; poziv k dejanju; tema in problem; cilj; format; scenarij; načrt objav', methods: 'Viharjenje možganov; delavnica; delo v parih; analiza kampanj; vrstniška povratna informacija; mentorirano individualno in skupinsko delo', evaluation: 'Oris sporočila; koncept vsebine; predstavitev ideje; povratna informacija skupine in mentorja' },
      { outcome: 'Posneti in zmontirati osnovno video ali avdiovizualno vsebino', content: 'Vertikalni video; kadriranje; osvetlitev; zvok; osnovna montaža; podnapisi; ritem; prilagoditev platformam', methods: 'Praktična delavnica; demonstracija; delo z opremo; individualno in skupinsko delo', evaluation: 'Poskusna vsebina; tehnična in vsebinska povratna informacija' },
      { outcome: 'Oceniti lasten razvoj in pridobljene kompetence', content: 'Samoocena; proces Youthpass; osebni načrt nadaljnjega udejstvovanja; refleksija o učenju', methods: 'Refleksivni pogovor; evalvacijski vprašalnik; individualna samoocena', evaluation: 'Youthpass refleksija; končna samoevalvacija; evalvacijski vprašalnik' },
    ],
    featuresTitle: 'Kaj ga dela drugačnega',
    features: [
      { title: 'Mentorji iz obeh držav', text: 'Dva mentorja iz Slovenije prinašata znanje o digitalni komunikaciji, medijski pismenosti in razvoju vsebin, dva iz Hrvaške pa izkušnje z mladinskim delom, neformalnim izobraževanjem in državljanskimi kompetencami.' },
      { title: 'Vplivneži kot gostujoči predavatelji', text: 'Dva ustvarjalca, ki vodita velike javne strani s protinarativi in satiričnim komentarjem, delita, kako aktivistična komunikacija, gradnja občinstva in avtentično izražanje delujejo v praksi.' },
      { title: 'Intenzivno + dolgoročno', text: '4-dnevni bootcamp za osnove, nato 6 mesecev mentorstva za poglobitev, kontinuiteto in dejansko ustvarjanje vsebin. Konča se s samostojnim delovanjem, ne le z izobraževanjem.' },
      { title: 'Skupnost na Discordu', text: 'Objavi osnutke, dobi komentarje mentorjev in vrstnikov, izboljšaj svoje delo in ga objavi.' },
      { title: 'DIY namesto proračuna', text: 'Vlogi, podkasti, razlagalni videi, prenosi v živo, satira, vox pop … Relevantna komunikacija potrebuje jasno sporočilo, ustvarjalnost, avtentičnost in odgovornost, ne drage produkcije.' },
      { title: 'Vključujoče po zasnovi', text: 'Vključujoč jezik, podnapisi, dostopni formati in odgovorno prikazovanje različnih družbenih skupin.' },
    ],
    durationTitle: 'Časovnica',
    duration: [
      { activity: 'Promocija, prijave in vključujoča izbira udeležencev', when: 'Pred bootcampom' },
      { activity: 'Bootcamp Akademije videoaktivizma', when: '4 dni' },
      { activity: 'Spletna mentorska srečanja', when: 'Približno enkrat na mesec' },
      { activity: 'Delo na lastnih vsebinah med srečanji', when: 'Ves čas, 6 mesecev' },
      { activity: 'Gostujoča predavanja in izmenjava dobrih praks', when: 'Med bootcampom in mentorstvom' },
      { activity: 'Objava vsebin in zbiranje odzivov', when: 'Med mentorstvom' },
      { activity: 'Končna refleksija in Youthpass', when: 'Ob koncu mentorstva' },
    ],
    materialsTitle: 'Učna gradiva',
    materials: [
      { name: 'Kurikul bootcampa in mentorstva', form: 'Dokument' },
      { name: 'Načrti delavnic za tematske module', form: 'Učne priprave' },
      { name: 'Predstavitve tematskih modulov', form: 'Predstavitve' },
      { name: 'Delovni list za analizo narativov, oblikovanje sporočil in protinarativov', form: 'Delovni list' },
      { name: 'Dobre prakse digitalnega aktivizma', form: 'Videi / študije primerov' },
      { name: 'Osnove montaže vertikalnega videa in zvoka', form: 'Kratek vodnik / video' },
      { name: 'Spletna platforma za mentorstvo', form: 'Discord' },
      { name: 'Evalvacijski vprašalniki', form: 'Spletni obrazci' },
      { name: 'Obrazci za samorefleksijo in Youthpass', form: 'Obrazci' },
    ],
    evaluationTitle: 'Evalvacija',
    evaluation: [
      'Med bootcampom izvajalci po vsakem modulu izpeljejo kratko ustno refleksijo o vsebini, metodah, razumevanju, skupinskem delu in uporabnosti. Na koncu vsi izpolnijo vprašalnik o organizaciji, mentorjih, skupinski dinamiki, metodah in vsebini, vključno s samooceno veščin.',
      'Med šestmesečnim mentorstvom evalvacija poteka sproti: samorefleksija, povratne informacije mentorjev in komentarji vrstnikov na Discordu. Mentorji spremljajo vključenost, kakovost vsebin, samostojnost in pripravljenost na nadaljnje udejstvovanje ter po potrebi prilagodijo mentorstvo.',
      'Na koncu sledita končna evalvacija in proces Youthpass, v katerem udeleženci prepoznajo, poimenujejo in dokumentirajo svoje kompetence. Vse povratne informacije uporabimo za izboljšanje kurikula, učnih priprav in gradiv za prihodnje izvedbe.',
    ],
  },
  about: {
    title: 'O nas',
    lead: 'Akademija videoaktivizma je skupni program dveh organizacij iz Slovenije in Hrvaške, ki ga sofinancira Evropska unija.',
    partners: [
      { name: 'Danes je nov dan', country: 'Slovenija', text: 'Inštitut za druga vprašanja. Razvija digitalna orodja in kampanje za bolj demokratično in pregledno družbo ter ustvarja politične videe in satiro za družbena omrežja.', logo: 'djnd-logo.png', url: 'https://danesjenovdan.si' },
      { name: 'Udruga Delta', country: 'Hrvaška', text: 'Združenje z Reke, ki se ukvarja z mladinskim delom, neformalnim izobraževanjem in razvojem državljanskih kompetenc.', logo: 'delta-logo.png', url: 'https://www.udruga-delta.hr' },
    ],
    peopleTitle: 'Ljudje',
    people: [
      { title: '4 mentorji', text: 'Dva iz Slovenije (digitalna komunikacija, medijska pismenost, vsebine) in dva iz Hrvaške (mladinsko delo, neformalno izobraževanje, državljanske kompetence).' },
      { title: '2 gostujoča vplivneža', text: 'Ustvarjalca javnih strani z velikim številom sledilcev, ki ustvarjata protinarative in satirični družbeni komentar.' },
      { title: '20 udeležencev', text: 'Deset iz Slovenije in deset iz Hrvaške, starih 18–30 let.' },
    ],
    reuseTitle: 'Uporabi ta kurikul',
    reuse: 'Program je zasnovan za prilagajanje: manjšim skupinam, eni državi, šolskim razredom ali obstoječim mladinskim skupinam. Učne priprave na tej strani so napisane za izvajalce. Vzemi jih, prilagodi svojemu okolju in jih izpelji.',
  },
};

const hr: SiteCopy = {
  hero: {
    kicker: 'Izvještaj o projektu i otvoreni kurikul',
    pitch: '20 mladih iz Hrvatske i Slovenije naučilo je stvarati videe koji se suprotstavljaju govoru mržnje, polarizaciji i dezinformacijama. Evo kako je to izgledalo i kako ga može provesti i vaša organizacija.',
    facts: ['20 sudionika', 'HR + SI', '4-dnevni bootcamp', '6 mjeseci mentorstva', 'Završni događaj'],
    report: 'Kako je bilo',
    curriculum: 'Koristi kurikul',
  },
  forYou: {
    title: 'Tko je sudjelovao',
    items: [
      '20 mladih od 18 do 30 godina, desetero iz Hrvatske i desetero iz Slovenije',
      'Neki već aktivni u udrugama, inicijativama i studentskim grupama, a neki tek na početku',
      'Iz gradova i ruralnih područja, različitih pozadina, identiteta i iskustava',
      'Svi sa željom da videom pridonesu pozitivnim društvenim promjenama',
    ],
  },
  phases: {
    title: 'Kako je bilo',
    items: [
      {
        label: '1. faza',
        title: 'Bootcamp',
        when: '4 dana, uživo',
        text: 'Grupa je četiri dana provela na radionicama, predavanjima, raspravama i praktičnom radu s mentorima i gostujućim influencerima te razvila prve ideje za digitalne protunarative.',
        points: ['Aktivno građanstvo i europske vrijednosti', 'Govor mržnje, provjera činjenica, prebunking', 'Oblikovanje poruka', 'Video i zvučna produkcija'],
      },
      {
        label: '2. faza',
        title: 'Mentorstvo',
        when: '6 mjeseci, online',
        text: 'Mjesečni online susreti, zajednica na Discordu, gostujuća predavanja i stalni rad na vlastitim sadržajima. Sudionici su dijelili skice, dobivali povratne informacije, poboljšavali videe i objavljivali ih.',
        points: ['Mjesečni mentorski susreti', 'Povratne informacije na Discordu', 'Gostujuća predavanja i dobre prakse', 'Objava vlastitih videa'],
      },
      {
        label: '3. faza',
        title: 'Završni događaj',
        when: '1 dan, uživo',
        text: 'Sudionici su se ponovno okupili uživo na završnim obraćanjima, evaluaciji i refleksiji. Motivacijski govori gostujućih predavača, iskusnih videoaktivista.',
      },
    ],
    end: { title: 'Youthpass', text: 'Sudionici su promislili o onome što su naučili i dobili certifikate koji imenuju stečene kompetencije.' },
  },
  learn: {
    title: 'Što su sudionici naučili',
    items: [
      'Što znači digitalno aktivno građanstvo',
      'Temeljne europske vrijednosti',
      'Prepoznati govor mržnje, polarizaciju i toksične narative',
      'Narativi, protunarativi i pozitivne alternative',
      'Prebunking: razotkrij manipulaciju prije nego što pogodi',
      'Oblikovati jasnu, uključivu poruku za publiku',
      'Snimati i montirati vertikalni video i zvuk',
      'Procijeniti vlastiti napredak',
    ],
  },
  formats: {
    title: 'Formati koje su isprobali',
    lead: 'Niskobudžetno i DIY: jasna poruka, kreativnost i autentičnost značili su više od skupog studija.',
    items: ['Vlog', 'Podcast', 'Explainer', 'Prijenos uživo', 'Politička satira', 'Vox pop', 'Dijalog', 'Rant', 'Skeč'],
  },
  modules: {
    title: 'Otvoreni kurikul',
    lead: 'Planovi radionica koje smo koristili na bootcampu, slobodno dostupni udrugama mladih, školama i organizacijama civilnog društva za samostalnu provedbu.',
    points: [
      { title: 'Spremno za provedbu', text: 'Svaki modul je radionica od 90 minuta s tijekom korak po korak, pitanjima za raspravu i grupnim aktivnostima.' },
      { title: 'Lako prilagodljivo', text: 'Kraće i duže verzije te primjeri koje možete zamijeniti slučajevima iz vlastite zemlje.' },
      { title: 'Isprobano s mladima', text: 'Razvijeno i provedeno s 20 sudionika iz Hrvatske i Slovenije.' },
    ],
  },
  interested: {
    title: 'Zanima vas program?',
    lead: 'Provedite ga sami ili pozovite ljude koji su ga osmislili.',
    options: [
      { title: 'Koristite kurikul sami', text: 'Uzmite planove radionica, prilagodite ih svojoj grupi i samostalno provedite module. Slobodno za neformalno obrazovanje.', button: 'Pregledaj kurikul' },
      { title: 'Naš tim ga provodi s vama', text: 'Naš iskusni tim iz Danes je nov dan i Delte može za vašu organizaciju pripremiti, voditi i mentorirati sličan program, od jedne radionice do cijelog bootcampa s mentorstvom.', button: 'Javite nam se' },
    ],
  },
  program: {
    title: 'Program',
    lead: 'Program neformalnog obrazovanja o digitalnom aktivnom građanstvu, medijskoj pismenosti i video protunarativima.',
    description: [
      'Akademija videoaktivizma mladima od 18 do 30 godina omogućuje stjecanje znanja, vještina i kompetencija za aktivno, odgovorno i kreativno sudjelovanje u digitalnim prostorima. Fokus je na digitalnom aktivnom građanstvu, medijskoj pismenosti i sposobnosti stvaranja pozitivnih digitalnih protunarativa protiv govora mržnje, društvene polarizacije, dezinformacija i isključujućih narativa.',
      'Sudionici upoznaju europske vrijednosti, oblike građanskog sudjelovanja, metode kritičke i aktivističke online komunikacije te praktične alate za stvaranje sadržaja. Naglasak je na sadržajima za društvene mreže, posebno vertikalnom videu, i na porukama koje promiču demokraciju, vladavinu prava, uključivost, raznolikost, solidarnost i održivost.',
      'Metodologija spaja neformalno obrazovanje, iskustveno učenje, projektni rad, suradničko učenje i mentorstvo.',
    ],
    objectivesTitle: 'Ciljevi',
    objectives: [
      'Potaknuti i osnažiti mlade na aktivno i odgovorno djelovanje u digitalnom prostoru',
      'Razviti građanske, socijalne, digitalne i medijske kompetencije te povezati mlade s vršnjacima, mentorima, influencerima i organizacijama civilnog društva iz različitih konteksta',
      'Upoznati mlade s europskim vrijednostima: demokracijom, vladavinom prava, ljudskim pravima, uključivošću, raznolikošću, solidarnošću i održivošću',
      'Osposobiti mlade da prepoznaju govor mržnje, polarizaciju, ekstremističke narative i dezinformacije te na njih odgovore provjerom činjenica, prebunkingom i odgovornom komunikacijom',
      'Razviti praktične vještine snimanja te video i zvučne montaže za društvene mreže',
      'Poticati kreativno izražavanje, javno zagovaranje i daljnji građanski angažman',
    ],
    targetTitle: 'Kome je namijenjen',
    target: [
      'Mladima od 18 do 30 godina iz Hrvatske i Slovenije koji već stvaraju ili žele stvarati društveno kritičke, građanske i aktivističke digitalne sadržaje. To uključuje mlade iz udruga, građanskih inicijativa, neformalnih, studentskih ili omladinskih aktivističkih grupa te one bez iskustva koji se žele uključiti.',
      'Sudionici se biraju putem javnog poziva. Posebno pozivamo mlade iz ruralnih područja, različitog obrazovanja, različitih rodnih identiteta i seksualnih orijentacija, LGBTQIA+ mlade, pripadnike manjina i mlade s manje mogućnosti.',
      'Program ili njegovi dijelovi mogu se prilagoditi i za školske razrede, postojeće grupe mladih ili grupe iz jedne zemlje.',
    ],
    outcomesTitle: 'Ishodi učenja',
    outcomesLead: 'Osam stvari koje sudionici znaju na kraju, i kako do njih dolazimo.',
    outcomes: [
      { outcome: 'Objasniti koncept digitalnog aktivnog građanstva', content: 'Aktivno građanstvo; digitalno građanstvo; online i offline sudjelovanje; uloga mladih i civilnog društva u demokraciji', methods: 'Radionica; vođeno otkrivanje; rasprava; rad na primjerima; grupni rad', evaluation: 'Usmena refleksija; samoevaluacija' },
      { outcome: 'Objasniti temeljne europske vrijednosti', content: 'Demokracija; vladavina prava; ljudska prava; uključivost; raznolikost; solidarnost; održivost', methods: 'Interaktivno predavanje; grupni rad; analiza slučajeva; rasprava', evaluation: 'Kviz; grupna prezentacija; samoprocjena razumijevanja' },
      { outcome: 'Prepoznati govor mržnje, polarizaciju i negativne digitalne narative', content: 'Govor mržnje; polarizacija; ekstremistički i populistički narativi; online radikalizacija; dinamika društvenih mreža', methods: 'Analiza primjera s mreža; vođena rasprava; grupni rad; mapiranje narativa', evaluation: 'Analiza slučaja; grupna prezentacija; komentari mentora' },
      { outcome: 'Razlikovati narative, protunarative i pozitivne alternativne narative', content: 'Digitalni narativi; protunarativi; pozitivni narativi; društveno odgovorna komunikacija', methods: 'Radionica; analiza dobrih praksi; rad na primjerima; grupni rad', evaluation: 'Razrađen protunarativ; grupna povratna informacija' },
      { outcome: 'Objasniti i primijeniti prebunking', content: 'Manipulativni obrasci; preventivno razotkrivanje dezinformacija; prebunking poruke', methods: 'Rad na primjerima; vođeno otkrivanje; praktični zadatak; rasprava', evaluation: 'Razrađena prebunking poruka; povratna informacija mentora' },
      { outcome: 'Oblikovati jasan, uključiv i publici prilagođen protunarativ', content: 'Ciljana publika; ključna poruka; ton; pripovijedanje; humor; emocije; argumentacija; poziv na akciju; tema i problem; cilj; format; scenarij; plan objave', methods: 'Brainstorming; radionica; rad u paru; analiza kampanja; vršnjačka povratna informacija; mentorirani individualni i grupni rad', evaluation: 'Nacrt poruke; koncept sadržaja; prezentacija ideje; povratna informacija grupe i mentora' },
      { outcome: 'Snimiti i montirati osnovni video ili audiovizualni sadržaj', content: 'Vertikalni video; kadriranje; rasvjeta; zvuk; osnovna montaža; titlovi; ritam; prilagodba platformama', methods: 'Praktična radionica; demonstracija; rad s opremom; individualni i grupni rad', evaluation: 'Probni sadržaj; tehnička i sadržajna povratna informacija' },
      { outcome: 'Procijeniti vlastiti razvoj i stečene kompetencije', content: 'Samoprocjena; Youthpass proces; osobni plan daljnjeg angažmana; refleksija o učenju', methods: 'Refleksivni razgovor; evaluacijski upitnik; individualna samoprocjena', evaluation: 'Youthpass refleksija; završna samoevaluacija; evaluacijski upitnik' },
    ],
    featuresTitle: 'Po čemu je drugačiji',
    features: [
      { title: 'Mentori iz obje zemlje', text: 'Dvoje mentora iz Slovenije donosi znanje o digitalnoj komunikaciji, medijskoj pismenosti i razvoju sadržaja, a dvoje iz Hrvatske iskustvo u radu s mladima, neformalnom obrazovanju i građanskim kompetencijama.' },
      { title: 'Influenceri kao gostujući predavači', text: 'Dvoje kreatora koji vode velike javne stranice s protunarativima i satiričnim komentarima dijele kako aktivistička komunikacija, izgradnja publike i autentično izražavanje funkcioniraju u praksi.' },
      { title: 'Intenzivno + dugoročno', text: '4-dnevni bootcamp za osnove, zatim 6 mjeseci mentorstva za produbljivanje, kontinuitet i stvarnu produkciju sadržaja. Završava samostalnim djelovanjem, ne samo obrazovanjem.' },
      { title: 'Zajednica na Discordu', text: 'Objavi skice, dobij komentare mentora i vršnjaka, poboljšaj svoj rad i objavi ga.' },
      { title: 'DIY umjesto budžeta', text: 'Vlogovi, podcasti, explaineri, prijenosi uživo, satira, vox pop… Relevantna komunikacija treba jasnu poruku, kreativnost, autentičnost i odgovornost, ne skupu produkciju.' },
      { title: 'Uključivo od početka', text: 'Uključiv jezik, titlovi, pristupačni formati i odgovorno prikazivanje različitih društvenih skupina.' },
    ],
    durationTitle: 'Vremenska crta',
    duration: [
      { activity: 'Promocija, prijave i uključiv odabir sudionika', when: 'Prije bootcampa' },
      { activity: 'Bootcamp Akademije videoaktivizma', when: '4 dana' },
      { activity: 'Online mentorski susreti', when: 'Otprilike jednom mjesečno' },
      { activity: 'Rad na vlastitim sadržajima između susreta', when: 'Kontinuirano, 6 mjeseci' },
      { activity: 'Gostujuća predavanja i razmjena dobrih praksi', when: 'Tijekom bootcampa i mentorstva' },
      { activity: 'Objava sadržaja i prikupljanje povratnih informacija', when: 'Tijekom mentorstva' },
      { activity: 'Završna refleksija i Youthpass', when: 'Na kraju mentorstva' },
    ],
    materialsTitle: 'Nastavni materijali',
    materials: [
      { name: 'Kurikul bootcampa i mentorstva', form: 'Dokument' },
      { name: 'Planovi radionica za tematske module', form: 'Planovi radionica' },
      { name: 'Prezentacije tematskih modula', form: 'Prezentacije' },
      { name: 'Radni list za analizu narativa, oblikovanje poruka i protunarativa', form: 'Radni list' },
      { name: 'Dobre prakse digitalnog aktivizma', form: 'Videi / studije slučaja' },
      { name: 'Osnove montaže vertikalnog videa i zvuka', form: 'Kratki vodič / video' },
      { name: 'Online platforma za mentorstvo', form: 'Discord' },
      { name: 'Evaluacijski upitnici', form: 'Online obrasci' },
      { name: 'Obrasci za samorefleksiju i Youthpass', form: 'Obrasci' },
    ],
    evaluationTitle: 'Evaluacija',
    evaluation: [
      'Tijekom bootcampa voditelji nakon svakog modula provode kratku usmenu refleksiju o sadržaju, metodama, razumijevanju, grupnom radu i korisnosti. Na kraju svi ispunjavaju upitnik o organizaciji, mentorima, grupnoj dinamici, metodama i sadržaju, uključujući samoprocjenu vještina.',
      'Tijekom šest mjeseci mentorstva evaluacija je kontinuirana: samorefleksija, povratne informacije mentora i komentari vršnjaka na Discordu. Mentori prate uključenost, kvalitetu sadržaja, samostalnost i spremnost na daljnji angažman te po potrebi prilagođavaju mentorstvo.',
      'Na kraju slijede završna evaluacija i Youthpass proces u kojem sudionici prepoznaju, imenuju i dokumentiraju svoje kompetencije. Sve povratne informacije koristimo za poboljšanje kurikula, planova radionica i materijala za buduća izdanja.',
    ],
  },
  about: {
    title: 'O nama',
    lead: 'Akademija videoaktivizma zajednički je program dviju organizacija iz Hrvatske i Slovenije, a sufinancira ga Europska unija.',
    partners: [
      { name: 'Danes je nov dan', country: 'Slovenija', text: 'Institut za druga pitanja. Razvija digitalne alate i kampanje za demokratičnije i transparentnije društvo te stvara političke videe i satiru za društvene mreže.', logo: 'djnd-logo.png', url: 'https://danesjenovdan.si' },
      { name: 'Udruga Delta', country: 'Hrvatska', text: 'Udruga iz Rijeke koja se bavi radom s mladima, neformalnim obrazovanjem i razvojem građanskih kompetencija.', logo: 'delta-logo.png', url: 'https://www.udruga-delta.hr' },
    ],
    peopleTitle: 'Ljudi',
    people: [
      { title: '4 mentora', text: 'Dvoje iz Slovenije (digitalna komunikacija, medijska pismenost, sadržaji) i dvoje iz Hrvatske (rad s mladima, neformalno obrazovanje, građanske kompetencije).' },
      { title: '2 gostujuća influencera', text: 'Kreatori javnih stranica s velikim brojem pratitelja koji stvaraju protunarative i satirični društveni komentar.' },
      { title: '20 sudionika', text: 'Deset iz Hrvatske i deset iz Slovenije, u dobi od 18 do 30 godina.' },
    ],
    reuseTitle: 'Koristi ovaj kurikul',
    reuse: 'Program je osmišljen za prilagodbu: manjim grupama, jednoj zemlji, školskim razredima ili postojećim grupama mladih. Planovi radionica na ovoj stranici pisani su za voditelje. Uzmi ih, prilagodi svom kontekstu i provedi ih.',
  },
};

export const site: Record<Lang, SiteCopy> = { en, sl, hr };
