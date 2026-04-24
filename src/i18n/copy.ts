export type Lang = 'en' | 'fr' | 'ar';
export type Dir = 'ltr' | 'rtl';

export interface HeroTone {
  eyebrow: { ar: string; latin: string };
  h1Parts: [string, string, string, string];
  sub: string;
}

export interface RedLineItem {
  tag: string;
  verb: string;
  bold: string;
  rest: string;
  why: string;
}

export interface PillarItem {
  n: string;
  t: string;
  d: string;
}

export interface MethodRow {
  code: string;
  name: string;
  used: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Copy {
  dir: Dir;
  langLabel: string;
  langLabelFull: string;
  hero: { direct: HeroTone };
  pillars: {
    eyebrow: string;
    h2Lines: [string, string, string];
    lede: string;
    items: PillarItem[];
  };
  redLines: {
    eyebrow: string;
    h2Parts: [string, string, string, string];
    lede: string;
    signatureCaption: string;
    signatureLine: string;
    items: RedLineItem[];
  };
  screens: {
    eyebrow: string;
    h2: string;
    lede: string;
    bullets: string[];
  };
  method: {
    eyebrow: string;
    h2Parts: [string, string, string, string];
    lede: string;
    fajr: string;
    isha: string;
    rows: MethodRow[];
  };
  faq: {
    eyebrow: string;
    h2: string;
    items: FaqItem[];
  };
  verse: {
    citation: string;
    quote: { before: string; em: string; after: string };
    translit: { before: string; em: string };
    etymLabel: string;
    etymBody: string;
  };
  cta: { h2: string; sub: string };
  footer: { tag: string; privacy: string; terms: string };
  badges: { playEyebrow: string; playName: string; iosEyebrow: string; iosName: string };
}

export const CALC_ANGLES: Record<string, { fajr: string; isha: string }> = {
  MWL:     { fajr: '18°',    isha: '17°'     },
  ISNA:    { fajr: '15°',    isha: '15°'     },
  EGYPT:   { fajr: '19.5°',  isha: '17.5°'  },
  MAKKAH:  { fajr: '18.5°',  isha: '+90 min' },
  KARACHI: { fajr: '18°',    isha: '18°'     },
};

const EN: Copy = {
  dir: 'ltr',
  langLabel: 'EN',
  langLabelFull: 'English',
  hero: {
    direct: {
      eyebrow: { ar: 'نِدَاء', latin: 'nidā · the call' },
      h1Parts: ['No ads', 'between ', 'you', ' and your salat.'],
      sub: 'No ads. No noise. No judgment. Offline-first, fiqh-transparent, and nothing ever leaves your phone.',
    },
  },
  pillars: {
    eyebrow: 'Three pillars',
    h2Lines: ['Reliable.', 'Serene.', 'Respectful.'],
    lede: 'Every prayer app keeps adding things. We keep removing them. nida does three things — and does each one with the precision the act of prayer deserves.',
    items: [
      { n: '01', t: 'Reliable',   d: 'The Athan fires on time. Every time. Offline calculation, validated against reference sources. A minute off can mean a missed prayer.' },
      { n: '02', t: 'Serene',     d: 'No clutter. No dark patterns. No streaks built to create anxiety. Whether you pray five times a day or you\u2019re finding your way back \u2014 nida meets you where you are.' },
      { n: '03', t: 'Respectful', d: 'Your ibadah is sacred. So is your data. Nothing leaves the device. No accounts, no analytics, no ad networks.' },
    ],
  },
  redLines: {
    eyebrow: 'Our promise',
    h2Parts: ['Three things', 'we will ', 'never', ' do.'],
    lede: 'Not for growth. Not for investors. Not \u201cjust this once\u201d. These are not features \u2014 they are the foundation. If any of them breaks, nida is no longer nida.',
    signatureCaption: 'A contract with every user.',
    signatureLine: '\u2014 Signed, the nida team.',
    items: [
      { tag: 'No ads',     verb: 'Never', bold: 'ads',              rest: 'between you and your salat.',           why: 'Your prayer screen is not ad space. Ever.' },
      { tag: 'No cloud',   verb: 'Never', bold: 'off-device data.', rest: 'No telemetry. No accounts. No servers.', why: 'The safest data is data that never leaves your phone.' },
      { tag: 'No paywall', verb: 'Never', bold: 'paywalled',        rest: 'prayer times, qibla, or athan.',         why: 'Ibadah is free. Forever. No \u201cpremium tier\u201d.' },
    ],
  },
  screens: {
    eyebrow: 'Inside the app',
    h2: 'Quiet by design.',
    lede: 'A home screen that answers the one question that matters \u2014 when is the next prayer? Then it gets out of your way.',
    bullets: [
      'Next prayer \u00b7 live countdown',
      'Qibla compass \u00b7 figure-eight calibration',
      'Prayer tracking \u00b7 100% on-device',
      '10+ calculation methods, each one explained',
      '7 languages \u00b7 EN · FR · AR · TR · ID · UR · BN',
    ],
  },
  method: {
    eyebrow: 'Calculation method',
    h2Parts: ['Where scholars agree, we follow.', 'Where they differ, ', 'you choose', '.'],
    lede: 'Most apps list ten methods without context. We explain each one \u2014 who uses it, why it exists \u2014 so you can pray with certainty.',
    fajr: 'Fajr',
    isha: 'Isha',
    rows: [
      { code: 'MWL',     name: 'Muslim World League',              used: 'Europe, Far East, parts of US' },
      { code: 'ISNA',    name: 'Islamic Society of North America', used: 'North America' },
      { code: 'EGYPT',   name: 'Egyptian General Authority',       used: 'Africa, Syria, Lebanon, Malaysia' },
      { code: 'MAKKAH',  name: 'Umm al-Qura, Makkah',             used: 'Arabian Peninsula' },
      { code: 'KARACHI', name: 'University of Islamic Sciences',   used: 'Pakistan, Bangladesh, India' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    h2: 'Things people ask.',
    items: [
      { q: 'Is it really free?',               a: 'Yes. Free forever. No ads, no paywall, no \u201cpremium tier\u201d. Once traction grows, we\u2019ll add a voluntary donation model with a public cost dashboard \u2014 you\u2019ll know exactly where every dirham goes.' },
      { q: 'Does it work offline?',            a: 'Yes. Calculation runs 100% on the device. No internet required once installed. Travel to any timezone \u2014 it keeps working.' },
      { q: 'What about my privacy?',           a: 'Nothing leaves your phone. No telemetry, no analytics, no accounts, no ad networks. The safest data is data that never exists on a server.' },
      { q: 'iOS \u2014 when?',                 a: 'The iOS build is in progress. Sign up below (your email stays private) to know when it ships.' },
      { q: 'Why not just use an existing app?', a: 'Because a prayer app\u2019s only job is to help you pray on time. nida does one thing \u2014 without ads, without tracking, and without judgment.' },
      { q: 'Who is behind nida?',             a: 'A small independent team. No VCs. No investors. No growth targets. Just a commitment to do one thing right.' },
    ],
  },
  verse: {
    citation: 'Surah Maryam \u00b7 19:3',
    quote: { before: 'When he called his Lord with a ', em: 'secret', after: ' call.' },
    translit: { before: '\u2014 nid\u0101\u02bban ', em: 'khafiyy\u0101' },
    etymLabel: 'Nid\u0101\u02bc',
    etymBody: 'The call. A private one, made in a whisper \u2014 not for the crowd, but for the One who hears.',
  },
  cta: { h2: 'Answer the call.', sub: 'Free. Forever. No ads. No tracking.' },
  footer: { tag: 'Made for the Ummah', privacy: 'Privacy', terms: 'Terms' },
  badges: { playEyebrow: 'Get it on', playName: 'Google Play', iosEyebrow: 'iOS', iosName: 'Coming soon' },
};

const FR: Copy = {
  dir: 'ltr',
  langLabel: 'FR',
  langLabelFull: 'Français',
  hero: {
    direct: {
      eyebrow: { ar: 'نِدَاء', latin: 'nidā · l\u2019appel' },
      h1Parts: ['Aucune pub', 'entre ', 'toi', ' et ta salat.'],
      sub: 'Aucune pub. Aucun bruit. Aucun jugement. Hors-ligne d\u2019abord, transparent sur le fiqh, et rien ne quitte jamais ton téléphone.',
    },
  },
  pillars: {
    eyebrow: 'Trois piliers',
    h2Lines: ['Fiable.', 'Serein.', 'Respectueux.'],
    lede: 'Les autres applis de prière ne font qu\u2019ajouter. Nous, on retire. nida fait trois choses — et les fait avec la précision que l\u2019acte de prière mérite.',
    items: [
      { n: '01', t: 'Fiable',      d: 'L\u2019Athan sonne à l\u2019heure. À chaque fois. Calcul hors-ligne, validé contre des sources de référence. Une minute de retard, c\u2019est parfois une prière manquée.' },
      { n: '02', t: 'Serein',      d: 'Pas d\u2019encombrement. Pas de dark patterns. Pas de séries quotidiennes conçues pour créer de l\u2019anxiété. Que tu pries cinq fois par jour ou que tu retrouves le chemin \u2014 nida te rejoint là où tu en es.' },
      { n: '03', t: 'Respectueux', d: 'Ton ibadah est sacrée. Tes données aussi. Rien ne sort du téléphone. Pas de compte, pas d\u2019analytics, pas de régie publicitaire.' },
    ],
  },
  redLines: {
    eyebrow: 'Notre promesse',
    h2Parts: ['Trois choses', 'que nous ne ferons ', 'jamais', '.'],
    lede: 'Pas pour la croissance. Pas pour les investisseurs. Pas \u00ab\u00a0juste cette fois\u00a0\u00bb. Ce ne sont pas des fonctionnalités — c\u2019est la fondation. Si l\u2019une d\u2019elles cède, nida n\u2019est plus nida.',
    signatureCaption: 'Un contrat avec chaque utilisateur.',
    signatureLine: '\u2014 Signé, l\u2019équipe nida.',
    items: [
      { tag: 'Aucune pub',    verb: 'Jamais',  bold: 'de publicité',             rest: 'entre toi et ta salat.',                            why: 'Ton écran de prière n\u2019est pas un espace publicitaire. Jamais.' },
      { tag: 'Aucun cloud',   verb: 'Jamais',  bold: 'de données dans le cloud.', rest: 'Pas de télémétrie. Pas de comptes. Pas de serveurs.', why: 'Les données les plus sûres sont celles qui ne quittent jamais ton téléphone.' },
      { tag: 'Aucun paywall', verb: 'Jamais',  bold: 'de version payante',        rest: 'des horaires, de la qibla ou de l\u2019Athan.',       why: 'L\u2019ibadah est libre. Pour toujours. Pas de \u00ab\u00a0formule premium\u00a0\u00bb.' },
    ],
  },
  screens: {
    eyebrow: 'À l\u2019intérieur de l\u2019app',
    h2: 'Silencieuse par design.',
    lede: 'Un écran d\u2019accueil qui répond à la seule question qui compte — à quelle heure la prochaine prière ? Puis il s\u2019efface.',
    bullets: [
      'Prochaine prière \u00b7 compte à rebours en direct',
      'Boussole qibla \u00b7 calibration en huit',
      'Suivi des prières \u00b7 100\u00a0% sur l\u2019appareil',
      '10+ méthodes de calcul, chacune expliquée',
      '7 langues \u00b7 EN · FR · AR · TR · ID · UR · BN',
    ],
  },
  method: {
    eyebrow: 'Méthode de calcul',
    h2Parts: ['Là où les savants s\u2019accordent, on suit.', 'Là où ils diffèrent, ', 'c\u2019est toi qui choisis', '.'],
    lede: 'La plupart des applis listent dix méthodes sans contexte. Nous, on explique chacune — qui l\u2019utilise, pourquoi elle existe — pour que tu pries avec certitude.',
    fajr: 'Fajr',
    isha: 'Isha',
    rows: [
      { code: 'MWL',     name: 'Ligue Islamique Mondiale',               used: 'Europe, Extrême-Orient, certaines régions des USA' },
      { code: 'ISNA',    name: 'Société Islamique d\u2019Amérique du Nord', used: 'Amérique du Nord' },
      { code: 'EGYPT',   name: 'Autorité Générale Égyptienne',            used: 'Afrique, Syrie, Liban, Malaisie' },
      { code: 'MAKKAH',  name: 'Umm al-Qura, La Mecque',                  used: 'Péninsule arabique' },
      { code: 'KARACHI', name: 'Université des Sciences Islamiques',      used: 'Pakistan, Bangladesh, Inde' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    h2: 'Ce qu\u2019on nous demande.',
    items: [
      { q: 'C\u2019est vraiment gratuit\u00a0?',                  a: 'Oui. Gratuit pour toujours. Pas de pub, pas de paywall, pas de \u00ab\u00a0formule premium\u00a0\u00bb. Quand la communauté grandira, nous ajouterons un don volontaire avec un tableau de bord public des coûts — tu sauras exactement où va chaque dirham.' },
      { q: 'Ça marche hors-ligne\u00a0?',                       a: 'Oui. Le calcul tourne 100\u00a0% sur ton téléphone. Aucune connexion requise une fois l\u2019app installée. Tu voyages où tu veux — ça continue de marcher.' },
      { q: 'Et ma vie privée\u00a0?',                            a: 'Rien ne quitte ton téléphone. Pas de télémétrie, pas d\u2019analytics, pas de compte, pas de régie publicitaire. Les données les plus sûres sont celles qui n\u2019existent sur aucun serveur.' },
      { q: 'iOS — c\u2019est pour quand\u00a0?',                 a: 'La version iOS est en cours. Inscris-toi ci-dessous (ton email reste privé) pour être averti·e quand elle sort.' },
      { q: 'Pourquoi pas utiliser une appli existante\u00a0?',   a: 'Parce qu\u2019une appli de prière a un seul rôle\u00a0: t\u2019aider à prier à l\u2019heure. nida fait une chose \u2014 sans pub, sans tracking, sans jugement.' },
      { q: 'Qui est derrière nida\u00a0?',                      a: 'Une petite équipe indépendante. Pas de VC. Pas d\u2019investisseurs. Pas d\u2019objectifs de croissance. Juste l\u2019engagement de bien faire une seule chose.' },
    ],
  },
  verse: {
    citation: 'Sourate Maryam \u00b7 19:3',
    quote: { before: 'Lorsqu\u2019il invoqua son Seigneur d\u2019une invocation ', em: 'secrète', after: '.' },
    translit: { before: '\u2014 nid\u0101\u02bban ', em: 'khafiyy\u0101' },
    etymLabel: 'Nid\u0101\u02bc',
    etymBody: 'L\u2019appel. Privé, murmuré — non pas pour la foule, mais pour Celui qui entend.',
  },
  cta: { h2: 'Réponds à l\u2019appel.', sub: 'Gratuit. Pour toujours. Aucune pub. Aucun tracking.' },
  footer: { tag: 'Fait pour la Oumma', privacy: 'Confidentialité', terms: 'Conditions' },
  badges: { playEyebrow: 'Télécharger sur', playName: 'Google Play', iosEyebrow: 'iOS', iosName: 'Bientôt' },
};

const AR: Copy = {
  dir: 'rtl',
  langLabel: 'عربي',
  langLabelFull: 'العربية',
  hero: {
    direct: {
      eyebrow: { ar: 'نِدَاء', latin: 'nidā' },
      h1Parts: ['لا إعلانات', 'بين', 'ك', ' وبين صلاتك.'],
      sub: 'لا إعلانات. لا ضجيج. لا أحكام. يعمل دون إنترنت، شفّاف في الفقه، ولا شيء يغادر هاتفك.',
    },
  },
  pillars: {
    eyebrow: 'ثلاث ركائز',
    h2Lines: ['موثوق.', 'هادئ.', 'محترم.'],
    lede: 'كل تطبيقات الصلاة لا تكفّ عن الإضافة. نحن لا نكفّ عن الحذف. «ندا» يفعل ثلاثة أشياء فقط — بالدقّة التي تستحقّها الصلاة.',
    items: [
      { n: '٠١', t: 'موثوق', d: 'يُشغَّل الأذان في وقته. في كلّ مرّة. حسابٌ يتمّ محليًّا دون اتّصال، مُتحقَّق منه مقابل المصادر المرجعيّة. دقيقة واحدة قد تعني صلاةً فاتت.' },
      { n: '٠٢', t: 'هادئ',  d: 'لا فوضى. لا حِيَل تصميميّة خادعة. لا سلاسل يوميّة مصنوعة لتوليد القلق. سواء كنتَ تصلي خمس مرّات يوميًّا أو تعود إلى الصلاة من جديد \u2014 «ندا» يلتقيك حيث أنت.' },
      { n: '٠٣', t: 'محترم', d: 'عبادتك مقدّسة. وبياناتك كذلك. لا شيء يغادر الجهاز. لا حسابات، لا تحليلات، لا شبكات إعلانيّة.' },
    ],
  },
  redLines: {
    eyebrow: 'وعدنا',
    h2Parts: ['ثلاثة أشياء', 'لن نفعلها ', 'أبدًا', '.'],
    lede: 'لا من أجل النموّ. لا من أجل المستثمرين. ولا «هذه المرّة فقط». هذه ليست ميزات — بل هي الأساس. إن انكسر واحد منها، لم يَعُد «ندا» هو «ندا».',
    signatureCaption: 'عقدٌ مع كلّ مستخدم.',
    signatureLine: '— توقيع: فريق ندا.',
    items: [
      { tag: 'لا إعلانات', verb: 'لن نضع',  bold: 'إعلانًا',             rest: 'بينك وبين صلاتك، أبدًا.',               why: 'شاشة صلاتك ليست مساحةً إعلانيّة. أبدًا.' },
      { tag: 'لا سحابة',   verb: 'لن نُرسل', bold: 'بياناتك خارج الجهاز.', rest: 'لا تحليلات. لا حسابات. لا خوادم.',     why: 'أكثر البيانات أمانًا هي التي لا تغادر هاتفك.' },
      { tag: 'لا اشتراك',  verb: 'لن نضع',  bold: 'جدارًا ماليًّا',        rest: 'أمام المواقيت أو القبلة أو الأذان.',  why: 'العبادة مجانيّة. إلى الأبد. بلا «نسخة مميّزة».' },
    ],
  },
  screens: {
    eyebrow: 'داخل التطبيق',
    h2: 'هادئ بالتصميم.',
    lede: 'شاشةٌ رئيسيّةٌ تُجيب عن السؤال الوحيد الذي يهمّ — متى الصلاة القادمة؟ ثم تبتعد عن طريقك.',
    bullets: [
      'الصلاة القادمة · عدٌّ تنازليٌّ حيّ',
      'بوصلة القِبلة · معايرة الرقم ثمانية',
      'متابعة الصلوات · ١٠٠٪ على الجهاز',
      'أكثر من ١٠ طرق حساب، كلٌّ منها مشروحة',
      '٧ لغات · EN · FR · AR · TR · ID · UR · BN',
    ],
  },
  method: {
    eyebrow: 'طريقة الحساب',
    h2Parts: ['حيث يتّفق العلماء، نتبع.', 'وحيث يختلفون، ', 'الاختيار لك', '.'],
    lede: 'معظم التطبيقات تُعدِّد عشر طرق دون سياق. نحن نشرح كلّ واحدة — من يستخدمها، ولماذا وُجدت — لتُصلّي عن يقين.',
    fajr: 'الفجر',
    isha: 'العشاء',
    rows: [
      { code: 'MWL',     name: 'رابطة العالم الإسلاميّ',                used: 'أوروبا، الشرق الأقصى، أجزاء من الولايات المتّحدة' },
      { code: 'ISNA',    name: 'الجمعيّة الإسلاميّة لأمريكا الشماليّة', used: 'أمريكا الشماليّة' },
      { code: 'EGYPT',   name: 'الهيئة المصريّة العامّة',               used: 'إفريقيا، سوريا، لبنان، ماليزيا' },
      { code: 'MAKKAH',  name: 'أمّ القرى، مكّة المكرّمة',              used: 'شبه الجزيرة العربيّة' },
      { code: 'KARACHI', name: 'جامعة العلوم الإسلاميّة',               used: 'باكستان، بنغلاديش، الهند' },
    ],
  },
  faq: {
    eyebrow: 'أسئلة',
    h2: 'ما يسألنا الناس.',
    items: [
      { q: 'هل هو مجانيّ فعلًا؟',           a: 'نعم. مجّانيّ إلى الأبد. لا إعلانات، لا جدار ماليّ، لا «نسخة مميّزة». حين تكبر القاعدة، سنُضيف نموذج تبرّع طوعيّ مع لوحة تكاليف علنيّة — ستعرف تمامًا إلى أين يذهب كلّ درهم.' },
      { q: 'هل يعمل دون إنترنت؟',            a: 'نعم. الحساب يتمّ ١٠٠٪ على جهازك. لا حاجة إلى اتّصال بعد التثبيت. سافر إلى أيّ منطقة زمنيّة — ويستمرّ في العمل.' },
      { q: 'وماذا عن خصوصيّتي؟',             a: 'لا شيء يغادر هاتفك. لا تحليلات، لا متابعة، لا حسابات، لا شبكات إعلانيّة. أكثر البيانات أمانًا هي التي لا وجود لها على أيّ خادم.' },
      { q: 'متى تصدر نسخة iOS؟',             a: 'نسخة iOS قيد العمل. سجّل بريدك أدناه (يبقى خاصًّا) لتُعلَم حين تُطلَق.' },
      { q: 'لِمَ لا نستخدم تطبيقًا موجودًا؟', a: 'لأنّ وظيفة تطبيق الصلاة واحدة: أن يُعينك على الصلاة في وقتها. «ندا» يفعل شيئًا واحدًا \u2014 بلا إعلانات، بلا تتبّع، بلا أحكام.' },
      { q: 'من يقف خلف «ندا»؟',              a: 'فريقٌ صغيرٌ مستقلّ. لا رأس مال مخاطر. لا مستثمرين. لا أهداف نموّ. فقط التزامٌ بأن نُتقن شيئًا واحدًا.' },
    ],
  },
  verse: {
    citation: 'سورة مريم · ١٩:٣',
    quote: { before: '﴿إِذْ نَادَىٰ رَبَّهُ نِدَاءً ', em: 'خَفِيًّا', after: '﴾' },
    translit: { before: '\u2014 nid\u0101\u02bban ', em: 'khafiyy\u0101' },
    etymLabel: 'نِدَاء',
    etymBody: 'النداء. خاصٌّ، يُقال همسًا — ليس للجمع، بل لمن يسمع.',
  },
  cta: { h2: 'لبِّ النداء.', sub: 'مجّانيّ. إلى الأبد. لا إعلانات. لا تتبّع.' },
  footer: { tag: 'صُنع للأمّة', privacy: 'الخصوصيّة', terms: 'الشروط' },
  badges: { playEyebrow: 'حمِّله من', playName: 'Google Play', iosEyebrow: 'iOS', iosName: 'قريبًا' },
};

export const COPY: Record<Lang, Copy> = { en: EN, fr: FR, ar: AR };
