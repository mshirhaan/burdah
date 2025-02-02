import styles from "./BurdaContainer.module.css";

import BurdaPara from "../BurdaPara/BurdaPara";
import BurdaPlayer from "../BurdaPlayer/BurdaPlayer";
import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import chaptersData from "../../../assets/chapters.json";
import chapterNumsAudioMapData from "../../../assets/chapterNumsAudioMap.json";

interface ChapterNumsAudioMap {
  [chapterNumber: string]: string;
}

interface Chapter {
  id: number;
  arabicLines: string[];
  englishLines: string[];
  audioStart: number;
  audioEnd: number;
}

interface ChaptersData {
  [chapterNumber: string]: Chapter[];
}

const chapters: ChaptersData = {
  "1": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 11,
    },
    {
      id: 1,
      arabicLines: [
        "اَلْحَمْدُ لِلّٰهِ مُنْشِي الْخَلْقِ مِنْ عَدَمِ",
        "ثُمَ الصَّلَاةُ عَلى الْمُخْتَارِ فِي الْقِدَمِ",
      ],
      englishLines: [
        "Praise be to Allah, Originator of Creation from non-existence",
        "Then prayers be upon the one chosen since pre-eternity",
      ],
      audioStart: 16.8,
      audioEnd: 32.87,
    },
    {
      id: 2,
      arabicLines: [
        "أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ",
        "مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ",
      ],
      englishLines: [
        "Is it from remembering neighbors at Dhū Salam",
        "That you shed tears admixed with blood from your eyes?",
      ],
      audioStart: 33.5,
      audioEnd: 49,
    },
    {
      id: 3,
      arabicLines: [
        "أَمْ هَبَّتِ الرِّيحُ مِنْ تِلْقَاءِ كَاظِمَةٍ",
        "وَأَوْمَضَ البَرْقُ فِي الظَّلْمَاءِ مِنْ إِضَمِ",
      ],
      englishLines: [
        "Or because wind has blown from the direction of Kāẓima",
        "And lightning has flashed in the dark of Iḍam?",
      ],
      audioStart: 49.7,
      audioEnd: 65.7,
    },
    {
      id: 4,
      arabicLines: [
        "فَمَا لِعَيْنَيْكَ إِنْ قُلْتَ اكْفُفَا هَمَتَا",
        "وَمَا لِقَلْبِكَ إِنْ قُلْتَ اسْتَفِقْ يَهِمِ",
      ],
      englishLines: [
        "So what ails your eyes that when you tell them ‘stop’, they continue to weep still more?",
        "And what ails your heart that when you bid it awake, it wanders further in distraction?",
      ],
      audioStart: 66,
      audioEnd: 81,
    },
    {
      id: 5,
      arabicLines: [
        "أَيَحْسَبُ الصَّبُّ أَنَّ الحُبَّ مُنْكَتِمٌ",
        "مَا بَيْنَ مُنْسَجِمٍ مِنْهُ وَمُضْطَرِمِ",
      ],
      englishLines: [
        "Does the lovelorn man think that love can be hidden",
        "Behind a torrent from his [eyes], or a heart’s raging fire?",
      ],
      audioStart: 82,
      audioEnd: 97,
    },
    {
      id: 6,
      arabicLines: [
        "لَوْلاَ الهَوَى لَمْ تَرِقْ دَمْعًا عَلَى طَلَلٍ",
        "وَلاَ أَرِقْتَ لِذِكْرِ البَانِ وَالْعَلَمِ",
      ],
      englishLines: [
        "But for passion, you would not shed tears at an abandoned camp,",
        "Or lie awake at night recalling the fragrant willow or the mountain;",
      ],
      audioStart: 97.7,
      audioEnd: 113,
    },
    {
      id: 7,
      arabicLines: [
        "فَكَيْفَ تُنْكِرُ حُبًّا بَعْدَمَا شَهِدَتْ",
        "بِهِ عَلَيْكَ عُدُولُ الدَّمْعِ وَالسَّقَمِ",
      ],
      englishLines: [
        "So how can you deny this love when tears and sickness,",
        "truthful witnesses, have testified to it against you?",
      ],
      audioStart: 129,
      audioEnd: 141.6,
    },
    {
      id: 8,
      arabicLines: [
        "وَأَثْبَتَ الوَجْدُ خَطَّيْ عَبْرَةٍ وَضَنىً",
        "مِثْلَ البَهَارِ عَلَى خَدَّيْكَ وَالعَنَمِ",
      ],
      englishLines: [
        "Lovesickness has etched two lines, of tears and gauntness,",
        "Upon your cheeks, like yellow spice and red ʿanam",
      ],
      audioStart: 142.3,
      audioEnd: 157.34,
    },
    {
      id: 9,
      arabicLines: [
        "نَعَمْ سَرَى طَيْفُ مَنْ أَهْوَى فَأَرَّقَنِي",
        "وَالحُبُّ يَعْتَرِضُ اللَّذَّاتَ بِالأَلَمِ",
      ],
      englishLines: [
        "Yes, my beloved’s apparition came to me and denied me sleep,",
        "For love always opposes pleasures with pain!",
      ],
      audioStart: 157.6,
      audioEnd: 203.5,
    },
    {
      id: 10,
      arabicLines: [
        "يَا لاَئِمِي فِي الهَوَى العُذْرِيِّ مَعْذِرَةً",
        "مِنِّي إِلَيْكَ وَلَوْ أَنْصَفْتَ لَمْ تَلُمِ",
      ],
      englishLines: [
        "O you who blame me for this chaste love, pardon me!",
        "But had you judged fairly, you would not have blamed me.",
      ],
      audioStart: 218.5,
      audioEnd: 225,
    },
    {
      id: 11,
      arabicLines: [
        "عَدَتْكَ حَالِي لاَ سِرِّي بِمُسْتَتِرٍ",
        "عَنِ الْوُشَاةِ وَلاَ دَائِي بِمُنْحَسِمِ",
      ],
      englishLines: [
        "May you be spared my condition! My secret cannot be concealed",
        "From detractors, nor is there any cure for my ailment!",
      ],
      audioStart: 225.9,
      audioEnd: 233,
    },
    {
      id: 12,
      arabicLines: [
        "مَحَّضْتَنِي النُصْحَ لَكِنْ لَسْتُ أَسْمَعُهُ",
        "إِنَّ المُحِبَّ عَنْ العُذَّالِ فِي صَمَمِ",
      ],
      englishLines: [
        "You have given me sincere advice, but I cannot hear it;",
        "A lover’s ears are deaf to the reproaches of critics.",
      ],
      audioStart: 233.2,
      audioEnd: 240.44,
    },
    {
      id: 13,
      arabicLines: [
        "إِنِّي اتَّهَمْتُ نَصِيحَ الشَّيْبِ فِي عَذَليِ",
        "وَالشَّيْبُ أَبْعَدُ فِي نُصْحِ عَنِ التُّهَمِ",
      ],
      englishLines: [
        "I hold suspect even the advice of my own grey hairs,",
        "Even though their advice is far from deception.",
      ],
      audioStart: 240.6,
      audioEnd: 246.3,
    },
  ],
  "2": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 14.76,
    },
    {
      id: 1,
      arabicLines: [
        "فَإِنَّ أَمَّارَتيِ بِالسُّوءِ مَا اتَّعَظَتْ",
        "مِنْ جَهْلِهَا بِنَذِيرِ الشَّيْبِ وَالهَرَمِ",
      ],
      englishLines: [
        "Because of its ignorance, my ill-commanding ego has paid no heed",
        "To the warner of grey hair and approaching old age;",
      ],
      audioStart: 15.1,
      audioEnd: 29.55,
    },
    {
      id: 2,
      arabicLines: [
        "وَلاَ أَعَدَّتْ مِنَ الفِعْلِ الجَمِيلِ قِرَى",
        "ضَيْفٍ أَلَمَّ بِرَأْسِي غَيْرَ مُحْتَشِمِ",
      ],
      englishLines: [
        "Nor has it prepared good deeds in welcome",
        "For an unannounced guest who has settled on my head.",
      ],
      audioStart: 29.9,
      audioEnd: 44.3,
    },
    {
      id: 3,
      arabicLines: [
        "لَوْ كُنْتُ أَعْلَمُ أَنِّي مَا أُوَقِّرُهُ",
        "كَتَمْتُ سِرًّا بَدَاليِ مَنْهُ بِالكَتَمِ",
      ],
      englishLines: [
        "Had I realized, I would not have honored it;",
        "I would have used [black] katam-dye to hide what it showed.",
      ],
      audioStart: 44.6,
      audioEnd: 51.66,
    },
    {
      id: 4,
      arabicLines: [
        "مَنْ لِي بِرَدِّ جِمَاحٍ مِنْ غَوَايَتِهَا",
        "كَمَا يُرَدُّ جِمَاحُ الخَيْلِ بِاللُّجُمِ",
      ],
      englishLines: [
        "Who will help me restrain my bolting ego from its wilfulness",
        "As a rebellious horse may be restrained with reins?",
      ],
      audioStart: 51.9,
      audioEnd: 58.92,
    },
    {
      id: 5,
      arabicLines: [
        "فَلاَ تَرُمْ بِالمَعَاصِي كَسْرَ شَهْوَتِهَا",
        "إِنَّ الطَّعَامَ يُقَوِّي شَهْوَةَ النَّهِمِ",
      ],
      englishLines: [
        "Do not try to thwart unlawful desires by satisfying them,",
        "For food only increases a glutton’s desires.",
      ],
      audioStart: 59.1,
      audioEnd: 66.14,
    },
    {
      id: 6,
      arabicLines: [
        "وَالنَّفْسُ كَالطِّفِلِ إِنْ تُهْمِلْهُ شَبَّ عَلَى",
        "حُبِّ الرَّضَاعِ وَإِنْ تَفْطِمْهُ يَنْفَطِمِ",
      ],
      englishLines: [
        "The ego is like a child: neglect it and it will grow up loving",
        "To suckle; but if you wean it, it will be weaned.",
      ],
      audioStart: 66.3,
      audioEnd: 73.31,
    },
    {
      id: 7,
      arabicLines: [
        "فَاصْرِفْ هَوَاهَا وَحَاذِرْ أَنْ تُوَلِّيَهُ",
        "إِنَّ الهَوَى مَا تَوَلَّى يُصْمِ أَوْ يَصِمِ",
      ],
      englishLines: [
        "Divert its vain desires and beware of giving it power,",
        "For vain desires pollute or destroy whatever they control.",
      ],
      audioStart: 73.5,
      audioEnd: 80.96,
    },
    {
      id: 8,
      arabicLines: [
        "وَرَاعِهَا وَهِيَ فِي الأَعْمَالِ سَائِمَةٌ",
        "وَإِنْ هِيَ اسْتَحْلَتِ المَرْعَى فَلاَ تُسِمِ",
      ],
      englishLines: [
        "Guard it as it grazes in the field of actions;",
        "And should it find the grazing sweet, do not let it roam.",
      ],
      audioStart: 95.4,
      audioEnd: 109.84,
    },
    {
      id: 9,
      arabicLines: [
        "كَمْ حَسَّنَتْ لَذَّةً لِلْمَرْءِ قَاتِلَةً",
        "مِنْ حَيْثُ لَمْ يَدْرِ أَنَّ السُّمَّ فِي الدَّسَمِ",
      ],
      englishLines: [
        "How often it has found delight in something fatal,",
        "For [one] cannot tell that there is poison in the fat!",
      ],
      audioStart: 110,
      audioEnd: 124.43,
    },
    {
      id: 10,
      arabicLines: [
        "وَاخْشَ الدَّسَائِسَ مِنْ جُوعٍ وَمِنْ شِبَعٍ",
        "فَرُبَّ مَخْمَصَةٍ شَرُّ مِنَ التُّخَمِ",
      ],
      englishLines: [
        "Beware of the snares of hunger and of satiety,",
        "Being hungry at times can be worse than gorging oneself!",
      ],
      audioStart: 124.7,
      audioEnd: 138.97,
    },
    {
      id: 11,
      arabicLines: [
        "وَاسْتَفْرِغِ الدَّمْعَ مِنْ عَيْنٍ قَدِ امْتَلَأَتْ",
        "مِنَ المَحَارِمِ وَالزَّمْ حِمْيَةَ النَّدَمِ",
      ],
      englishLines: [
        "Empty out the tears from an eye that has filled itself up",
        "With forbidden sights. Maintain a strict diet of remorse.",
      ],
      audioStart: 139.1,
      audioEnd: 153.06,
    },
    {
      id: 12,
      arabicLines: [
        "وَخَالِفِ النَّفْسَ وَالشَّيْطَانَ وَاعْصِهِمَا",
        "وَإِنْ هُمَا مَحَضَاكَ النُّصْحَ فَاتَّهِمِ",
      ],
      englishLines: [
        "Oppose the self and Satan and disobey them;",
        "If they offer you advice, be suspicious of them.",
      ],
      audioStart: 153.3,
      audioEnd: 167,
    },
    {
      id: 13,
      arabicLines: [
        "وَلاَ تُطِعْ مِنْهُمَا خَصْمًا وَلاَ حَكَمًا",
        "فَأَنْتَ تَعْرِفُ كَيْدَ الخَصْمِ وَالحَكَمِ",
      ],
      englishLines: [
        "Obey neither of them, whether they oppose or give judgment,",
        "For you know the wiles of opponent and judge.",
      ],
      audioStart: 181.65,
      audioEnd: 195,
    },
    {
      id: 14,
      arabicLines: [
        "أَسْتَغْفِرُ اللهَ مِنْ قَوْلٍ بِلاَ عَمَلٍ",
        "لَقَدْ نَسَبْتُ بِهِ نَسْلاً لِذِي عُقُمِ",
      ],
      englishLines: [
        "I seek Allah’s forgiveness for words bereft of deeds,",
        "As by them I attributed progeny to a sterile man.",
      ],
      audioStart: 195.6,
      audioEnd: 209.3,
    },
    {
      id: 15,
      arabicLines: [
        "أَمَرْتُكَ الخَيْرَ لَكِنْ مَا ائْتَمَرْتُ بِهِ",
        "وَمَا اسْتَقَمْتُ فَمَا قَوْلِيِ لَكَ اسْتَقِمِ",
      ],
      englishLines: [
        "I enjoined goodness upon you while failing to heed the same.",
        "I was not upright, so what use is my enjoining uprightness?",
      ],
      audioStart: 209.5,
      audioEnd: 222.98,
    },
    {
      id: 16,
      arabicLines: [
        "وَلاَ تَزَوَّدْتُ قَبْلَ المَوْتِ نَافِلَةً",
        "وَلَمْ أُصَلِّ سِوَى فَرْضٍ وَلَمْ أَصُمِ",
      ],
      englishLines: [
        "I have not gathered provisions of voluntary prayers before death,",
        "Or prayed and fasted beyond what is obligatory.",
      ],
      audioStart: 223.1,
      audioEnd: 236,
    },
  ],
  "3": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 13.58,
    },
    {
      id: 1,
      arabicLines: [
        "ظَلَمْتُ سُنَّةَ مَنْ أَحْيَا الظَّلاَمَ إِلَى",
        "أَنِ اشْتَكَتْ قَدَمَاهُ الضُّرَّ مِنْ وَرَمِ",
      ],
      englishLines: [
        "I have wronged the Sunna of him who enlivened the dark nights",
        "By praying till his feet complained of painful swelling.",
      ],
      audioStart: 13.75,
      audioEnd: 27,
    },
    {
      id: 2,
      arabicLines: [
        "وَشَدَّ مِنْ سَغَبٍ أَحْشَاءَهُ وَطَوَى",
        "تَحْتَ الحِجَارَةِ كَشْحًا مُتْرَفَ الأَدَمِ",
      ],
      englishLines: [
        "He placed a stone over his belly and soft skin,",
        "Tightening a belt over it to diminish the hunger pangs.",
      ],
      audioStart: 27.5,
      audioEnd: 40.84,
    },
    {
      id: 3,
      arabicLines: [
        "وَرَاوَدَتْهُ الجِبَالُ الشُّمُّ مِنْ ذَهَبٍ",
        "عَنْ نَفْسِهِ فَأَرَاهَا أَيَّمَا شَمَمِ",
      ],
      englishLines: [
        "Lofty mountains tried, to tempt him with turning to gold,",
        "But he showed them the height of his own loftiness!",
      ],
      audioStart: 41.1,
      audioEnd: 54.4,
    },
    {
      id: 4,
      arabicLines: [
        "وَأَكَّدَتْ زُهْدَهُ فِيهَا ضَرُورَتُهُ",
        "إِنَّ الضَّرُورَةَ لاَ تَعْدُو عَلَى العِصَمِ",
      ],
      englishLines: [
        "His dire neediness only strengthened his detachment;",
        "neediness like his never leads to transgression.",
      ],
      audioStart: 54.7,
      audioEnd: 68.07,
    },
    {
      id: 5,
      arabicLines: [
        "وَكَيْفَ تَدْعُو إِلَى الدُّنْيَا ضَرُورَةُ مَنْ",
        "لَوْلاَهُ لَمْ تُخْرَجِ الدُّنْيَا مِنَ العَدَمِ",
      ],
      englishLines: [
        "How could need tempt him with worldliness, when but for him",
        "The world would not have emerged from non-existence?",
      ],
      audioStart: 68.25,
      audioEnd: 81.92,
    },
    {
      id: 6,
      arabicLines: [
        "مُحَمَّدٌ سَيِّدُ الكَوْنَيْنِ وَالثَّقَلَيْـ",
        "ـنِ وَالفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ",
      ],
      englishLines: [
        "Muhammad is the master of both abodes, of both kinds,",
        "And both classes [of people]: Arabs and non-Arabs.",
      ],
      audioStart: 95.75,
      audioEnd: 136.34,
    },
    {
      id: 7,
      arabicLines: [
        "نَبِيُّنَا الآمِرُ النَّاهِي فَلاَ أَحَدٌ",
        "أَبَرَّ فِي قَوْلِ لاَ مِنْهُ وَلاَ نَعَمِ",
      ],
      englishLines: [
        "Our Prophet, who commands and who forbids;",
        "None is more true than him in saying “yes” or “no”.",
      ],
      audioStart: 150,
      audioEnd: 163.45,
    },
    {
      id: 8,
      arabicLines: [
        "هُوَ الحَبِيبُ الذِّي تُرْجَى شَفَاعَتُهُ",
        "لِكُلِّ هَوْلٍ مِنَ الأَهْوَالِ مُقْتَحَمِ",
      ],
      englishLines: [
        "He is the Beloved whose intercession is hoped for,",
        "Victorious over every terror and disaster.",
      ],
      audioStart: 163.7,
      audioEnd: 203.89,
    },
    {
      id: 9,
      arabicLines: [
        "دَعَا إِلَى اللهِ فَالْمُسْتَمْسِكُونَ بِهِ",
        "مُسْتَمْسِكُونَ بِحَبْلٍ غَيْرِ مُنْفَصِمِ",
      ],
      englishLines: [
        "He called [people] to Allah, so those who hold fast to him",
        "Are holding fast to a rope that never shall break.",
      ],
      audioStart: 217.7,
      audioEnd: 230.79,
    },
    {
      id: 10,
      arabicLines: [
        "فَاقَ النَبِيّينَ فِي خَلْقٍ وَفِي خُلُقٍ",
        "وَلَمْ يُدَانُوهُ فِي عِلْمٍ وَلاَ كَرَمِ",
      ],
      englishLines: [
        "He excelled the other Prophets in form and qualities;",
        "Their knowledge and nobility did not come near his.",
      ],
      audioStart: 231,
      audioEnd: 244.3,
    },
    {
      id: 11,
      arabicLines: [
        "وَكُلُّهُمْ مِنْ رَسُولِ اللهِ مُلْتَمِسٌ",
        "غَرْفًا مِنَ البَحْرِ أَوْ رَشْفًا مِنَ الدِّيَمِ",
      ],
      englishLines: [
        "They all seek something from Allah’s Emissary –",
        "handfuls from the sea, or small sips of drizzle.",
      ],
      audioStart: 244.3,
      audioEnd: 257.43,
    },
    {
      id: 12,
      arabicLines: [
        "وَوَاقِفُونَ لَدَيْهِ عِنْدَ حَدِّهِمِ",
        "مِنْ نُقْطَةِ العِلْمِ أَوْ مِنْ شَكْلَةِ الحِكَمِ",
      ],
      englishLines: [
        "They all stand before him, observing their limits;",
        "Dots to his knowledge, or vowel-marks to his wisdom.",
      ],
      audioStart: 257.7,
      audioEnd: 270.77,
    },
    {
      id: 13,
      arabicLines: [
        "فَهْوَ الذِّي تَمَّ مَعْنَاهُ وَصُورَتُهُ",
        "ثُمَّ اصْطَفَاهُ حَبِيبًا بَارِئُ النَّسَمِ",
      ],
      englishLines: [
        "It is he whose meaning and form attained perfection",
        "Then the Maker of Souls chose him for His beloved.",
      ],
      audioStart: 271,
      audioEnd: 283.9,
    },
    {
      id: 14,
      arabicLines: [
        "مُنَزَّهٌ عَنْ شَرِيكٍ فِي مَحَاسِنِهِ",
        "فَجَوْهَرُ الحُسْنِ  فِيهِ غَيْرُ مُنْقَسِمِ",
      ],
      englishLines: [
        "Exalted above having a rival in his perfections;",
        "In him is the undivided essence of beauty.",
      ],
      audioStart: 297.8,
      audioEnd: 310.96,
    },
    {
      id: 15,
      arabicLines: [
        "دَعْ مَا ادَّعَتْهُ النَّصَارَى فِي نَبِيِّهِمِ",
        "وَاحْكُمْ بِمَا شِئْتَ مَدْحًا فِيهِ وَاحْتَكِمِ",
      ],
      englishLines: [
        "Eschew the claim Christians have made for their Prophet.",
        "Then say in his praise what you will, but wisely!",
      ],
      audioStart: 311.1,
      audioEnd: 324.31,
    },
    {
      id: 16,
      arabicLines: [
        "وَانْسُبْ إِلَى ذَاتِهِ مَا شِئْتَ مِنْ شَرَفٍ",
        "وَانْسُبْ إِلَى قَدْرِهِ مَا شِئْتَ مِنْ عِظَمِ",
      ],
      englishLines: [
        "Ascribe whatever honour you will to his essence,",
        "And ascribe what greatness you will to his worth;",
      ],
      audioStart: 324.5,
      audioEnd: 337.62,
    },
    {
      id: 17,
      arabicLines: [
        "فَإِنَّ فَضْلَ رَسُولِ اللهِ لَيْسَ لَهُ",
        "حَدٌّ  فَيُعْرِبَ عَنْهُ نَاطِقٌ بِفَمِ",
      ],
      englishLines: [
        "For the worth of Allah’s Emissary has no limit",
        "That could be expressed by a human mouth.",
      ],
      audioStart: 337.9,
      audioEnd: 350.1,
    },
    {
      id: 18,
      arabicLines: [
        "لَوْ نَاسَبَتْ قَدْرَهُ آيَاتُهُ عِظَمًا",
        "أَحْيَا اسْمُهُ حِينَ يُدْعَى دَارِسَ الرِّمَمِ",
      ],
      englishLines: [
        "If his miracles were commensurate with his greatness,",
        "The mere mention of his name would give life to dry bones.",
      ],
      audioStart: 364.5,
      audioEnd: 377.71,
    },
    {
      id: 19,
      arabicLines: [
        "لَمْ يَمْتَحِنَّا بِمَا تَعْيَا الْعُقُولُ بِهِ",
        "حِرْصًا عَلَيْنَا فَلَمْ نَرْتَبْ وَلَمْ نَهِمْ",
      ],
      englishLines: [
        "He did not try us with things that confound the mind",
        "Out of concern for us, so we neither doubted nor strayed.",
      ],
      audioStart: 377.8,
      audioEnd: 390.9,
    },
    {
      id: 20,
      arabicLines: [
        "أَعْيَا الوَرَى فَهْمُ مَعْنَاهُ فَلَيْسَ يُرَى",
        "فِي القُرْبِ وَالْبُعْدِ فِيهِ غَيْرُ مُنْفَحِمِ",
      ],
      englishLines: [
        "Man’s mind is exhausted trying to understand his meaning;",
        "All of them, near or far, appear as if dumbstruck.",
      ],
      audioStart: 391.2,
      audioEnd: 404.35,
    },
    {
      id: 21,
      arabicLines: [
        "كَالشَّمْسِ تَظْهَرُ لِلْعَيْنَيْنِ مِنْ بُعُدٍ",
        "صَغِيرَةً وَتُكِلُّ الطَّرْفَ مِنْ أَمَمِ",
      ],
      englishLines: [
        "He is like the sun: small to the eye when seen from afar,",
        "But dazzling to the sight when seen close up.",
      ],
      audioStart: 404.5,
      audioEnd: 417,
    },
    {
      id: 22,
      arabicLines: [
        "وَكَيْفَ يُدْرِكُ فِي الدُّنْيَا حَقِيقَتَهُ",
        "قَوْمٌ نِيَامٌ تَسَلَّوْا عَنْهُ بِالحُلُمِ",
      ],
      englishLines: [
        "How can his reality be grasped in this world",
        "By sleeping folk, distracted from him by dreams?",
      ],
      audioStart: 417.7,
      audioEnd: 430.55,
    },
    {
      id: 23,
      arabicLines: [
        "فَمَبْلَغُ العِلْمِ فِيهِ أَنَّهُ بَشَرٌ",
        "وَأَنَّهُ خَيْرُ خَلْقِ اللهِ كُلِّهِمِ",
      ],
      englishLines: [
        "The extent of our knowledge is that he is a mortal –",
        "And that he is the best of Allah’s creation!",
      ],
      audioStart: 444.1,
      audioEnd: 482.79,
    },
    {
      id: 24,
      arabicLines: [
        "وَكُلُّ آيٍ أَتَى الرُّسُلُ الكِرَامُ بِهَا",
        "فَإِنَّمَا اتَّصَلَتْ مِنْ نُوِرِهِ بِهِمِ",
      ],
      englishLines: [
        "Every miracle produced by the noble Emissaries",
        "Came to them by virtue of his light alone",
      ],
      audioStart: 496.4,
      audioEnd: 509.19,
    },
    {
      id: 25,
      arabicLines: [
        "فَإِنَّهُ شَمْسُ فَضْلٍ هُمْ كَوَاكِبُهَا",
        "يُظْهِرْنَ أَنْوَارَهاَ لِلنَّاسِ فِي الظُّلَمِ",
      ],
      englishLines: [
        "For he is the sun of virtue, and they are its planets;",
        "They display its lights to mankind in the darkness.",
      ],
      audioStart: 509.35,
      audioEnd: 522.02,
    },
    {
      id: 26,
      arabicLines: [
        "أَكْرِمْ بِخَلْقِ نَبِيٍ زَانَهُ خُلُقٌ",
        "بِالحُسْنِ مُشْتَمِلٍ بِالبِشْرِ مُتَّسِمِ",
      ],
      englishLines: [
        "How noble the qualities of a Prophet beautified by such traits:",
        "Full of beauty, and marked by smiles and good cheer!",
      ],
      audioStart: 522.1,
      audioEnd: 534.71,
    },
    {
      id: 27,
      arabicLines: [
        "كَالزَّهْرِ فِي تَرَفٍ وَالبَدْرِ فِي شَرَفٍ",
        "وَالبَحْرِ فِي كَرَمٍ وَالدَّهْرِ فِي هِمَمِ",
      ],
      englishLines: [
        "Like flowers in delicate beauty, like the full moon in honour;",
        "like the sea in generosity, like time in persistence.",
      ],
      audioStart: 535,
      audioEnd: 547.76,
    },
    {
      id: 28,
      arabicLines: [
        "كَأَنَّه وَهْوَ فَرْدٌ مِنْ جَلاَلَتِهِ",
        "فِي عَسْكَرٍ حِينَ تَلْقَاهُ وَفِي حَشَمِ",
      ],
      englishLines: [
        "So majestic was his presence that even when alone",
        "he appeared surrounded by a large army and retinue.",
      ],
      audioStart: 547.9,
      audioEnd: 560.77,
    },
    {
      id: 29,
      arabicLines: [
        "كَأَنَّمَا اللُّؤْلُؤْ المَكْنُونُ فِي صَدَفٍ",
        "مِنْ مَعْدِنَيْ مَنْطِقٍ مِنْهُ وَمُبْتَسِمِ",
      ],
      englishLines: [
        "It is as if precious hidden pearls, sparkling from their shells,",
        "came from the treasure-mine of his speech and smile.",
      ],
      audioStart: 560.85,
      audioEnd: 573.65,
    },
    {
      id: 30,
      arabicLines: [
        "لاَ طِيبَ يَعْدِلُ تُرْبًا ضَمَّ أَعْظُمَهُ",
        "طُوبىَ لِمُنْتَشِقٍ مِنْهُ وَمُلْتَمِسِمِ",
      ],
      englishLines: [
        "No fragrance equals the dust embraced by his sandals;",
        "Blessed is the earth that was kissed by his lips!",
      ],
      audioStart: 573.8,
      audioEnd: 586.4,
    },
  ],
  "4": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 12.92,
    },
    {
      id: 1,
      arabicLines: [
        "أَبَانَ مَوْلِدُهُ عَنْ طِيبِ عُنْصُرِهِ",
        "يَا طِيبَ مُبْتَدَإٍ مِنْهُ وَمُخْتَتَمِ",
      ],
      englishLines: [
        "His birth made the purity of his pedigree evident;",
        "O how pure were his beginning and his end!",
      ],
      audioStart: 13.1,
      audioEnd: 21.76,
    },
    {
      id: 2,
      arabicLines: [
        "يَوْمٌ تَفَرَّسَ فِيهِ الفُرْسُ أَنَّهُمُ",
        "قَدْ أُنْذِرُوا بِحُلُولِ البُؤْسِ وَالنِّقَمِ",
      ],
      englishLines: [
        "On that day the Persians intuited that they",
        "Had been warned of looming misery and retribution.",
      ],
      audioStart: 22,
      audioEnd: 30.06,
    },
    {
      id: 3,
      arabicLines: [
        "وَبَاتَ إِيوَانُ كِسْرَى وَهُوَ مُنْصَدِعٌ",
        "كَشَمْلِ أَصْحَابِ كِسْرَى غَيْرَ مُلْتَئِمِ",
      ],
      englishLines: [
        "That night the throne room of Khusraw became cracked,",
        "Khusraw’s people, too, crumbled, never to be restored.",
      ],
      audioStart: 30.4,
      audioEnd: 38,
    },
    {
      id: 4,
      arabicLines: [
        "وَالنَّارُ خَامِدَةُ الأَنْفَاسِ مِنْ أَسَفٍ",
        "عَلَيْهِ وَالنَّهْرُ سَاهِي العَيْنِ مِنْ سَدَمِ",
      ],
      englishLines: [
        "The sacred fire, grief-stricken, breathed its last,",
        "And the river [Euphrates] dried up out of worry.",
      ],
      audioStart: 38.5,
      audioEnd: 46.47,
    },
    {
      id: 5,
      arabicLines: [
        "وَسَاءَ سَاوَةَ أَنْ غَاضَتْ بُحَيْرَتُهَا",
        "وَرُدَّ وَارِدُهَا بِالغَيْظِ حِينَ ظَمِي",
      ],
      englishLines: [
        "Sāʾa was saddened by its lake drying up;",
        "The thirsty who went to drink there came back in a rage!",
      ],
      audioStart: 46.65,
      audioEnd: 54.49,
    },
    {
      id: 6,
      arabicLines: [
        "كَأَنَّ بِالنَّارِ مَا بِالمَاءِ مِنْ بَلَلٍ",
        "حُزْنًا وَبِالمَاءِ مَا بِالنَّارِ مِنْ ضَرَمِ",
      ],
      englishLines: [
        "As if the fire, from sorrow, took on the water’s wetness",
        "And water assumed the fire’s quality of blazing.",
      ],
      audioStart: 54.66,
      audioEnd: 62.63,
    },
    {
      id: 7,
      arabicLines: [
        "وَالجِنُّ تَهْتِفُ وَالأَنْوَارُ سَاطِعَةٌ",
        "وَالحَّقُ يَظْهَرُ مِنْ مَعْنىً وَمِنْ كَلِمِ",
      ],
      englishLines: [
        "There were jinn calling out, and dazzling lights",
        "As truth was manifested in both word and reality.",
      ],
      audioStart: 62.68,
      audioEnd: 70.5,
    },
    {
      id: 8,
      arabicLines: [
        "عَمُوا وَصَمُّوا فَإِعْلاَنُ البَشَائِرِ لَمْ",
        "يُسْمَعْ وَبَارِقَةُ الإِنْذَارِ لَمْ تُشَمِ",
      ],
      englishLines: [
        "They were blind and deaf, so the glad tidings proclaimed",
        "Went unheard, and the warning lightning-flash was not seen.",
      ],
      audioStart: 78.85,
      audioEnd: 86.72,
    },
    {
      id: 9,
      arabicLines: [
        "مِنْ بَعْدِ مَا أَخْبَرَ الأَقْوَامَ كَاهِنُهُمْ",
        "بِأَنَّ دِينَهُمُ المُعْوَجَّ لَمْ يَقُمِ",
      ],
      englishLines: [
        "Even after the soothsayers had informed their peoples",
        "That their crooked religion would not endure,",
      ],
      audioStart: 86.8,
      audioEnd: 94.52,
    },
    {
      id: 10,
      arabicLines: [
        "وَبَعْدَمَا عَايَنُوا فِي الأُفْقِ مِنْ شُهُبٍ",
        "مُنْقَضَّةٍ وَفْقَ مَا فِي الأَرْضَ مِنْ صَنَمِ",
      ],
      englishLines: [
        "And even after their eyes saw meteors on the horizon",
        "Plunging downwards, as idols were toppled on earth;",
      ],
      audioStart: 94.75,
      audioEnd: 102.34,
    },
    {
      id: 11,
      arabicLines: [
        "حَتَّى غَدَا عَنْ طَرِيقِ الْوَحْيِ مُنْهَزِمٌ",
        "مِنَ الشَّيَاطِينِ يَقْفُوا إِثْرَ مُنْهَزِمِ",
      ],
      englishLines: [
        "Until devils, routed, from the path of revelation,",
        "Fled in the wake of those who had been overpowered.",
      ],
      audioStart: 102.55,
      audioEnd: 110.17,
    },
    {
      id: 12,
      arabicLines: [
        "كَأَنَّهُمْ هَرَبًا أَبْطَالُ أَبْرَهَةٍ",
        "أَوْ عَسْكَرٍ بِالحَصَى مِنْ رَاحَتَيْهِ رُمِي",
      ],
      englishLines: [
        "Fleeing like the brave warriors of Abraha",
        "Or the army pelted by pebbles thrown by his hand,",
      ],
      audioStart: 110.3,
      audioEnd: 117.88,
    },
    {
      id: 13,
      arabicLines: [
        "نَبْذًا بِهِ بَعْدَ تَسْبِيحٍ بِبَطْنِهِمَا",
        "نَبْذَ المُسَبِّحِ مِنْ أَحْشَاءِ مُلْتَقِمِ",
      ],
      englishLines: [
        "Cast by him after glorifying Allah in the palm of his hand,",
        "As he who glorified his Lord was cast from the whale.",
      ],
      audioStart: 118.1,
      audioEnd: 125.71,
    },
  ],
  "5": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 7.69,
    },
    {
      id: 1,
      arabicLines: [
        "جَاءَتْ لِدَعْوَتِهِ الأَشْجَارُ سَاجِدَةً",
        "تَمْشِي إِلَيْهِ عَلَى سَاقٍ بِلاَ قَدَمِ",
      ],
      englishLines: [
        "Trees came prostrating to him when he called,",
        "Walking towards him on trunks without feet",
      ],
      audioStart: 7.9,
      audioEnd: 15.32,
    },
    {
      id: 2,
      arabicLines: [
        "كَأَنَّمَا سَطَرَتْ سَطْرًا لِمَا كَتَبَتْ",
        "فُرُوعُهَا مِنْ بَدِيعِ الْخَطِّ بِاللَّقَمِ",
      ],
      englishLines: [
        "As though they had inscribed lines of splendid calligraphy",
        "With their branches along the path.",
      ],
      audioStart: 15.4,
      audioEnd: 22.5,
    },
    {
      id: 3,
      arabicLines: [
        "مِثْلَ الغَمَامَةِ أَنَّى سَارَ سَائِرَةً",
        "تَقِيهِ حَرَّ وَطِيسٍ لِلْهَجِيرِ حَمِي",
      ],
      englishLines: [
        "Like the cloud that hovered over him wherever he went,",
        "Shielding him from the intense oven of the midday heat.",
      ],
      audioStart: 22.6,
      audioEnd: 29.73,
    },
    {
      id: 4,
      arabicLines: [
        "أَقْسَمْتُ بِالْقَمَرِ المُنْشَقِّ إِنَّ لَهُ",
        "مِنْ قَلْبِهِ نِسْبَةً مَبْرُورَةَ القَسَمِ",
      ],
      englishLines: [
        "I swear by the [Lord of the] moon that was split in two",
        "a true oath: it has truly a connection with his heart.",
      ],
      audioStart: 29.9,
      audioEnd: 36.72,
    },
    {
      id: 5,
      arabicLines: [
        "وَمَا حَوَى الغَارُ مِنْ خَيْرٍ وَمِنْ كَرَمِ",
        "وَكُلُّ طَرْفٍ مِنَ الكُفَّارِ عَنْهُ عَمِي",
      ],
      englishLines: [
        "And by the goodness and nobility contained in the cave",
        "While the disbelievers’ every glance was blind to him.",
      ],
      audioStart: 36.9,
      audioEnd: 43.75,
    },
    {
      id: 6,
      arabicLines: [
        "فَالصِّدْقُ فِي الغَارِ وَالصِّدِّيقُ لَمْ يَرِمَا",
        "وَهُمْ يَقُولُونَ مَا بِالْغَارِ مِنْ أَرِمِ",
      ],
      englishLines: [
        "Truthfulness and the True One in the cave wavered not",
        "While they said ‘No one who breathes is in the cave!’",
      ],
      audioStart: 43.9,
      audioEnd: 50.75,
    },
    {
      id: 7,
      arabicLines: [
        "ظَنُّوا الحَمَامَ وَظَنُّوا الْعَنْكَبُوتَ عَلَى",
        "خَيْرِ الْبَرِيَّةِ لَمْ تَنْسُجْ وَلَمْ تَحُمِ",
      ],
      englishLines: [
        "They supposed that a dove would never perch,",
        "Or a spider would spin its web, for the Best of Creation",
      ],
      audioStart: 50.9,
      audioEnd: 57.62,
    },
    {
      id: 8,
      arabicLines: [
        "وِقَايَةُ اللهِ أَغْنَتْ عَنْ مُضَاعَفَةٍ",
        "مِنَ الدُّرُوعِ وَعَنْ عَالٍ مِنَ الأُطُمِ",
      ],
      englishLines: [
        "Their protection by Allah absolved them of need",
        "for additional armour or for lofty fortresses.",
      ],
      audioStart: 57.8,
      audioEnd: 64.51,
    },
    {
      id: 9,
      arabicLines: [
        "مَا سَامَنِي الدَّهْرُ ضَيْمًا وَاسْتَجَرْتُ بِهِ",
        "إِلاَّ وَنِلْتُ جِوَارًا مِنْهُ لَمْ يُضَمِ",
      ],
      englishLines: [
        "Never, when fate oppressed me, have I sought refuge in him",
        "but that I found sanctuary with him and was oppressed no more.",
      ],
      audioStart: 64.7,
      audioEnd: 71.2,
    },
    {
      id: 10,
      arabicLines: [
        "وَلاَ الْتَمَسْتُ غِنَى الدَّارَيْنِ مِنْ يَدِهِ",
        "إِلاَّ اسْتَلَمْتُ النَّدَى مِنْ خَيْرِ مُسْتَلَمِ",
      ],
      englishLines: [
        "And never have I sought wealth in both worlds from his hand",
        "Without receiving largesse from the best of givers.",
      ],
      audioStart: 71.45,
      audioEnd: 77.91,
    },
    {
      id: 11,
      arabicLines: [
        "لاَ تُنْكِرِ الْوَحْيَ مِنْ رُؤْيَاهُ إِنَّ لَهُ",
        "قَلْبًا إِذَا نَامَتِ العَيْنَانِ لَمْ يَنَمِ",
      ],
      englishLines: [
        "Do not deny the revelations he received in his dreams;",
        "For though his eyes slept, he had a heart that slept not.",
      ],
      audioStart: 84.9,
      audioEnd: 91,
    },
    {
      id: 12,
      arabicLines: [
        "وَذَاكَ حِينَ بُلُوغٍ مِنْ نُبَوَّتِهِ",
        "فَلَيْسَ يُنْكَرُ فِيهِ حَالُ مُحْتَلِمِ",
      ],
      englishLines: [
        "That was when he attained his Prophetic status;",
        "the night dreams of mature men cannot be denied!",
      ],
      audioStart: 91.6,
      audioEnd: 98.27,
    },
    {
      id: 13,
      arabicLines: [
        "تَبَارَكَ اللهُ مَا وَحَيٌ بِمُكْتَسَبٍ",
        "وَلاَ نَبيُّ عَلَى غَيْبٍ بِمُتَّهَمِ",
      ],
      englishLines: [
        "Blessed is Allah! Revelation is not something acquired!",
        "Nor can a Prophet’s knowledge of the Unseen be deemed suspect.",
      ],
      audioStart: 98.3,
      audioEnd: 104.84,
    },
    {
      id: 14,
      arabicLines: [
        "كَمْ أَبْرَأَتْ وَصِبًا بِاللَّمْسِ رَاحَتُهُ",
        "وَأَطْلَقَتْ أَرِبًا مِنْ رِبْقَةِ اللَّمَمِ",
      ],
      englishLines: [
        "How many sick people were healed by the touch of his hand;",
        "how many released from the tight knots of madness!",
      ],
      audioStart: 105,
      audioEnd: 111.42,
    },
    {
      id: 15,
      arabicLines: [
        "وَأَحْيَتِ السَّنَةَ الشَّهْبَاءَ دَعْوَتُهُ",
        "حَتَّى حَكَتْ غُرَّةً فِي الأَعْصُرِ الدُّهُمِ",
      ],
      englishLines: [
        "His supplication brought life to a grey year [of drought] –",
        "Marked it out from dark years like [a horse’s] white blaze.",
      ],
      audioStart: 111.55,
      audioEnd: 118.14,
    },
    {
      id: 16,
      arabicLines: [
        "بِعَارضٍ جَادَ أَوْ خِلْتَ البِطَاحَ بِهَا",
        "سَيْبًا مِنَ اليَمِّ أَوْ سَيْلاً مِنَ العَرِمِ",
      ],
      englishLines: [
        "With generous rainclouds, so much that you would have thought",
        "That the valleys flowed with sea water or the flood of ʿArim.",
      ],
      audioStart: 118.2,
      audioEnd: 124.81,
    },
  ],
  "6": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 6,
    },
    {
      id: 1,
      arabicLines: [
        "دَعْنِي وَوَصْفِي آيَاتٍ لَهُ ظَهَرَتْ",
        "ظُهُورَ نَارِ القِرَى لَيْلاً عَلَى عَلَمِ",
      ],
      englishLines: [
        "Let me describe to you the signs that were manifested for him,",
        "Visible like the village beacons lit atop hills at night.",
      ],
      audioStart: 6.25,
      audioEnd: 19.54,
    },
    {
      id: 2,
      arabicLines: [
        "فَالدُّرُّ يَزْدَادُ حُسْنًا وَهْوَ مُنْتَظِمٌ",
        "وَلَيْسَ يَنْقُصُ قَدْرًا غَيْرَ مُنْتَظِمِ",
      ],
      englishLines: [
        "Though a pearl is more lovely when strung [with others],",
        "Its value is not diminished when alone and unstrung.",
      ],
      audioStart: 19.7,
      audioEnd: 32.9,
    },
    {
      id: 3,
      arabicLines: [
        "فَمَا تَطَاوُلُ آمَالِ المَديحِ إِلَى",
        "مَا فِيهِ مِنْ كَرَمِ الأَخْلاَقِ وَالشِّيَمِ",
      ],
      englishLines: [
        "To what hope can the giver of praise aspire",
        "Of doing justice to his noble qualities and traits?",
      ],
      audioStart: 33.1,
      audioEnd: 46.66,
    },
    {
      id: 4,
      arabicLines: [
        "آيَاتُ حَقٍّ مِنَ الرَّحْمَانِ مُحْدَثَةٌ",
        "قَدِيمَةٌ صِفَةُ المَوْصُوفِ بِالقِدَمِ",
      ],
      englishLines: [
        "Signs of truth from the All-Merciful—revealed within time",
        "Yet pre-eternal; the attribute of Him who is pre-eternal.",
      ],
      audioStart: 46.7,
      audioEnd: 60,
    },
    {
      id: 5,
      arabicLines: [
        "لَمْ تَقْتَرِنْ بِزَمِانٍ وَهْيَ تُخْبِرُنَا",
        "عَنْ المَعَادِ وَعَنْ عَادٍ وَعَنْ إِرَمِ",
      ],
      englishLines: [
        "They are not connected with time, yet they inform us",
        "About the Resurrection, and about ʿĪd and Iram.",
      ],
      audioStart: 60.15,
      audioEnd: 73.46,
    },
    {
      id: 6,
      arabicLines: [
        "دَامَتْ لَدَيْنَا فَفَاقَتْ كُلَّ مُعْجِزَةٍ",
        "مِنَ النَّبِيِّينَ إِذْ جَاءَتْ وَلَمْ تَدُمِ",
      ],
      englishLines: [
        "They remained with us, thus surpassing every miracle",
        "Of the other Prophets, which came but did not last.",
      ],
      audioStart: 73.5,
      audioEnd: 86.71,
    },
    {
      id: 7,
      arabicLines: [
        "مُحْكَّمَاتٌ فَمَا تُبْقِيْنَ مِنْ شُبَهٍ",
        "لِذِي شِقَاقٍ وَمَا تَبْغِيْنَ مِنْ حَكَمِ",
      ],
      englishLines: [
        "Unequivocal verses leaving no doubt to remain",
        "in dissenters, and requiring no arbiter.",
      ],
      audioStart: 100.45,
      audioEnd: 106.8,
    },
    {
      id: 8,
      arabicLines: [
        "مَا حُورِبَتْ قَطُّ إِلاَّ عَادَ مِنْ حَرَبٍ",
        "أَعْدَى الأَعَادِي إِلَيْهَا مُلْقِيَ السَّلَمِ",
      ],
      englishLines: [
        "No implacable foe has attacked them",
        "But that he retreated from battle and sued for peace.",
      ],
      audioStart: 106.9,
      audioEnd: 113.27,
    },
    {
      id: 9,
      arabicLines: [
        "رَدَّتْ بَلاَغَتُهَا دَعْوَى مُعَارِضِهَا",
        "رَدَّ الغَيُورِ يَدَ الجَانِي عَنِ الْحُرَمِ",
      ],
      englishLines: [
        "Their sheer eloquence refutes the claim of their opponent,",
        "As a jealous man wards off an assailant’s hand from his wife.",
      ],
      audioStart: 113.4,
      audioEnd: 119,
    },
    {
      id: 10,
      arabicLines: [
        "لَهَا مَعَانٍ كَمَوْجِ البَحْرِ فِي مَدَدٍ",
        "وَفَوْقَ جَوْهَرِهِ فِي الْحُسْنِ وَالقِيَمِ",
      ],
      englishLines: [
        "They contain meanings like the sea’s bountiful waves,",
        "And surpass the sea’s jewels in beauty and value.",
      ],
      audioStart: 119.4,
      audioEnd: 132.45,
    },
    {
      id: 11,
      arabicLines: [
        "فَمَا تُعَدُّ وَلاَ تُحْصَى عَجَائِبُهَا",
        "وَلاَ تُسَامُ عَلَى الإِكْثَارِ بِالسَّأَمِ",
      ],
      englishLines: [
        "Their marvels can neither be counted nor numbered,",
        "And frequent repetition never gives rise to tedium.",
      ],
      audioStart: 132.5,
      audioEnd: 145.49,
    },
    {
      id: 12,
      arabicLines: [
        "قَرَّتْ بِهَا عَيْنُ قَارِيْهَا فَقُلْتُ لَهُ",
        "لَقَدْ ظَفِرْتَ بِحَبْلِ اللهِ فَاعْتَصِمِ",
      ],
      englishLines: [
        "They delighted the one who recited them, so I told him,",
        "‘You have the Rope of Allah, so hold fast to it!’",
      ],
      audioStart: 145.6,
      audioEnd: 158.49,
    },
    {
      id: 13,
      arabicLines: [
        "إِنْ تَتْلُهَا خِيفَةً مِنْ حَرَّ نَارِ لَظَى",
        "أَطْفَأْتَ حَرِّ لَظَىَ مِنْ وِرْدِهَا الشَّبِمِ",
      ],
      englishLines: [
        "If you recite them out of fear of a blazing fire’s heat",
        "from their cool wells they will quench the blazing heat",
      ],
      audioStart: 158.6,
      audioEnd: 171.58,
    },
    {
      id: 14,
      arabicLines: [
        "كَأَنَّهَا الحَوْضُ تَبْيَضُّ الوُجُوهُ بِهِ",
        "مِنَ العُصَاةِ وَقَدْ جَاءُوهُ كَالحُمَمِ",
      ],
      englishLines: [
        "Like the Pool, they brighten the faces of the sinful,",
        "Though they had come to it as black as charcoal.",
      ],
      audioStart: 171.7,
      audioEnd: 184.57,
    },
    {
      id: 15,
      arabicLines: [
        "وَكَالصِّرَاطِ وَكَالمِيزَانِ مَعْدِلَةً",
        "فَالقِسْطُ مِنْ غَيْرِهَا فِي النَّاسِ لَمْ يَقُمِ",
      ],
      englishLines: [
        "Like the Traverse and like Scales in justice;",
        "True justice amongst men cannot be upheld from any other source.",
      ],
      audioStart: 184.65,
      audioEnd: 197.47,
    },
    {
      id: 16,
      arabicLines: [
        "لاَ تَعْجَبَنْ لِحَسُودٍ رَاحَ يُنْكِرُهَا",
        "تَجَاهُلاً وَهْوَ عَيْنُ الحَاذِقِ الفَهِمِ",
      ],
      englishLines: [
        "Do not be amazed at an envious person who denies them",
        "Feigning ignorance, though he has perception and understanding.",
      ],
      audioStart: 197.6,
      audioEnd: 210.59,
    },
    {
      id: 17,
      arabicLines: [
        "قَدْ تُنْكِرُ الْعَيْنُ ضَوْءَ الشَّمْسِ مِنْ رَمَدٍ",
        "وَيُنْكِرُ الفَمُ طَعْمَ المَاءِ مِنْ سَقَمِ",
      ],
      englishLines: [
        "For the eye, when inflamed, may be averse to the sun’s light;",
        "And the mouth, when ailing, may loathe water’s taste.",
      ],
      audioStart: 210.7,
      audioEnd: 223.7,
    },
  ],
  "7": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 12.89,
    },
    {
      id: 1,
      arabicLines: [
        "يَا خَيْرَ مَنْ يَمَّمَ العّافُونَ سَاحَتَهُ",
        "سَعْيًا وَفَوْقَ مُتُونِ الأَيْنُقِ الرُّسُمِ",
      ],
      englishLines: [
        "O best of those to whose courtyard seekers turn to",
        "Hastening on foot or the backs of strong camels!",
      ],
      audioStart: 13.3,
      audioEnd: 23.11,
    },
    {
      id: 2,
      arabicLines: [
        "وَمَنْ هُوَ الآيَةُ الكُبْرَى لِمُعْتَبِرٍ",
        "وَمَنْ هُوَ النِّعْمَةُ العُظْمَى لِمُغْتَنِمِ",
      ],
      englishLines: [
        "O Greatest Sign for those who contemplate!",
        "O Supreme Grace for those who seek to gain!",
      ],
      audioStart: 33,
      audioEnd: 42.44,
    },
    {
      id: 3,
      arabicLines: [
        "سَرَيْتَ مِنْ حَرَمٍ لَيْلاً إِلَى حَرَمٍ",
        "كَمَا سَرَى البَدْرُ فِي دَاجٍ مِنَ الظُّلَمِ",
      ],
      englishLines: [
        "You journeyed by night, from Sanctuary to Sanctuary",
        "as the full moon travels through the pitch black sky.",
      ],
      audioStart: 42.65,
      audioEnd: 52,
    },
    {
      id: 4,
      arabicLines: [
        "وَبِتَّ تَرْقَى إِلَى أَنْ نِلْتَ مَنْزِلَةً",
        "مِنْ قَابِ قَوْسَيْنِ لَمْ تُدْرَكْ وَلَمْ تُرَمِ",
      ],
      englishLines: [
        "That night you ascended till you reached a station",
        "Of Two Bows’ Length—one never attained or hoped for!",
      ],
      audioStart: 52.2,
      audioEnd: 61.56,
    },
    {
      id: 5,
      arabicLines: [
        "وَقَدَّمَتْكَ جَمِيعُ الأَنْبِيَاءِ بِهَا",
        "وَالرُّسْلِ تَقْدِيمَ مَخْدُومٍ عَلَى خَدَمِ",
      ],
      englishLines: [
        "There all the Prophets and Emissaries gave you precedence,",
        "As a master is given precedence by those who serve him.",
      ],
      audioStart: 61.7,
      audioEnd: 70.97,
    },
    {
      id: 6,
      arabicLines: [
        "وَأَنْتَ تَخْتَرِقُ السَّبْعَ الطِّبَاقَ بِهِمْ",
        "فِي مَوْكِبٍ كُنْتَ فِيهِ الصَّاحِبَ العَلَمِ",
      ],
      englishLines: [
        "You traversed the seven heavens with them [behind you]",
        "In a procession wherein you were the standard-bearer.",
      ],
      audioStart: 71.1,
      audioEnd: 80.47,
    },
    {
      id: 7,
      arabicLines: [
        "حَتَّى إِذَا لَمْ تَدَعْ شَأْوًا لِمُسْتَبِقٍ",
        "مِنَ الدُّنُوِّ وَلاَ مَرْقَى لِمُسْتَنِمِ",
      ],
      englishLines: [
        "Until your proximity left no space for the avid seeker,",
        "Nor any higher summit for one seeking elevation.",
      ],
      audioStart: 80.55,
      audioEnd: 89.9,
    },
    {
      id: 8,
      arabicLines: [
        "خَفَضْتَ كُلَّ مَقَامٍ بِالإِضَافَةٍ إِذْ",
        "نُودِيْتَ بِالرَّفْعِ مِثْلَ المُفْرَدِ العَلَمِ",
      ],
      englishLines: [
        "You surpassed all other stations in comparison",
        "When acclaimed on high as ‘The Matchless and Eminent’–",
      ],
      audioStart: 99.3,
      audioEnd: 108.47,
    },
    {
      id: 9,
      arabicLines: [
        "كَيْمَا تَفُوزَ بِوَصْلٍ أَيِّ مُسْتَتِرٍ",
        "عَنْ العُيُونِ وَسِرٍّ أَيِّ مُكْتَتَمِ",
      ],
      englishLines: [
        "So that you might triumph through a tryst hidden",
        "From sight. How hidden a secret that was!",
      ],
      audioStart: 108.6,
      audioEnd: 117.67,
    },
    {
      id: 10,
      arabicLines: [
        "فَحُزْتَ كُلَّ فَخَارٍ غَيْرَ مُشْتَرَكٍ",
        "وَجُزْتَ كُلَّ مَقَامٍ غَيْرَ مُزْدَحَمِ",
      ],
      englishLines: [
        "So you received every glory without rival",
        "And gained every station alone, unbeset.",
      ],
      audioStart: 117.8,
      audioEnd: 126.88,
    },
    {
      id: 11,
      arabicLines: [
        "وَجَلَّ مِقْدَارُ مَا وُلِّيتَ مِنْ رُتَبٍ",
        "وَعَزَّ إِدْرَاكُ مَا أُولِيْتَ مِنْ نِعَمِ",
      ],
      englishLines: [
        "How glorious is the worth of the ranks you were given",
        "How difficult it is to grasp the graces conferred!",
      ],
      audioStart: 126.9,
      audioEnd: 135.91,
    },
    {
      id: 12,
      arabicLines: [
        "بُشْرَى لَنَا مَعْشَرَ الإِسْلَامِ إِنَّ لَنَا",
        "مِنَ العِنَايَةِ رُكْنًا غَيْرَ مُنْهَدِمِ",
      ],
      englishLines: [
        "Glad tidings for us, O people of Islam,",
        "For we have an indestructible pillar of divine care.",
      ],
      audioStart: 136,
      audioEnd: 145.11,
    },
    {
      id: 13,
      arabicLines: [
        "لَمَّا دَعَا اللهُ دَاعِينَا لِطَاعَتِهِ",
        "بِأَكْرَمِ الرُّسْلِ كُنَّا أَكْرَمَ الأُمَمِ",
      ],
      englishLines: [
        "When Allah named the one who called us to obey Him",
        "The Noblest of Emissaries, we became the noblest of nations!",
      ],
      audioStart: 145.25,
      audioEnd: 154.4,
    },
  ],
  "8": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 9.18,
    },
    {
      id: 1,
      arabicLines: [
        "رَاعَتْ قُلُوبَ الْعِدَا أَنْبَاءُ بِعْثَتِهِ",
        "كَنَبْأَةٍ أَجْفَلَتْ غُفْلاً مِنَ الْغَنَمِ",
      ],
      englishLines: [
        "The news of his being sent had cast fear into the hearts of foes",
        "as heedless sheep are startled by sudden noise.",
      ],
      audioStart: 9.55,
      audioEnd: 18.30,
    },
    {
      id: 2,
      arabicLines: [
        "مَا زَالَ يَلْقَاهُمُ فِي كُلِّ مُعْتَرَكٍ",
        "حَتَّى حَكَوْا بِالْقَنَا لَحْمًا عَلَى وَضَمِ",
      ],
      englishLines: [
        "He continued to meet them on every battleground",
        "Until spears cut them, like meat on a butcher’s block.",
      ],
      audioStart: 18.35,
      audioEnd: 27,
    },
    {
      id: 3,
      arabicLines: [
        "وَدُّوا الفِرَارَ فَكَادُوا يَغْبِطُونَ بِهِ",
        "أَشْلاَءَ شَالَتْ مَعَ الْعِقْبَانِ وَالرَّخَمِ",
      ],
      englishLines: [
        "They longed to flee, almost jealous of",
        "The dead flesh carried off by hawks and vultures.",
      ],
      audioStart:27.15,
      audioEnd: 35.95,
    },
    {
      id: 4,
      arabicLines: [
        "تَمْضِي اللَّيَالِي وَلاَ يَدْرُونَ عِدَّتَهَا",
        "مَا لَمْ تَكُنْ مِنْ لَيَالِي الأَشْهُرِ الْحُرُمِ",
      ],
      englishLines: [
        "The nights passed with them unaware of their number,",
        "Apart from the nights of the Sacred Months.",
      ],
      audioStart: 36,
      audioEnd: 44.74,
    },
    {
      id: 5,
      arabicLines: [
        "كَأَنَّمَا الدِّينُ ضَيْفٌ حَلَّ سَاحَتَهُمْ",
        "بِكُلِّ قَرْمٍ إِلَى لَحْمِ العِدَا قَرِمِ",
      ],
      englishLines: [
        "As if the religion were a guest that had arrived at their courtyard,",
        "With every honoured chieftain eager for the flesh of their foes.",
      ],
      audioStart:44.8,
      audioEnd: 53.47,
    },
    {
      id: 6,
      arabicLines: [
        "يَجُرُّ بَحْرَ خَمِيسٍ فَوْقَ سَابِحَةٍ",
        "يَرْمِى بِمَوْجٍ مِنَ الأَبْطَالِ مُلْتَطِمِ",
      ],
      englishLines: [
        "Bringing forth a sea of soldiers on swift steeds,",
        "Tossing wave upon wave of onrushing heroes.",
      ],
      audioStart:53.6,
      audioEnd: 62.23,
    },
    {
      id: 7,
      arabicLines: [
        "مِنْ كُلِّ مُنْتَدَبٍ لِلهِ مُحْتَسِبٍ",
        "يَسْطُو بِمُسْتَأْصِلٍ لِلكُفْرِ مُصْطَلِمِ",
      ],
      englishLines: [
        "All responding to Allah’s call and anticipating reward,",
        "Boldly charging on, and uprooting disbelief.",
      ],
      audioStart: 62.35,
      audioEnd: 71.11,
    },
    {
      id: 8,
      arabicLines: [
        "حَتىَّ غَدَتْ مِلَّةُ الإِسْلاَمِ وَهْيَ بِهِمْ",
        "مِنْ بَعْدِ غُرْبَتِهَا مَوْصُولَةَ الرَّحِمِ",
      ],
      englishLines: [
        "Until the religion of Islam was, through them,",
        "Reunited in kinship after being in exile.",
      ],
      audioStart: 71.15,
      audioEnd: 79.87,
    },
    {
      id: 9,
      arabicLines: [
        "مَكْفُولَةً أَبَدًا مِنْهُمْ بِخَيْرِ أَبٍ",
        "وَخَيْرِ بَعْلٍ فَلَمْ تَيْتَمْ وَلَمْ تَئِمِ",
      ],
      englishLines: [
        "Forever protected from [foes] by the best of fathers and husbands,",
        "So that she was no longer an orphan or a widow.",
      ],
      audioStart:88.69,
      audioEnd: 97.24,
    },
    {
      id: 10,
      arabicLines: [
        "هُمُ الجِبَالُ فَسَلْ عَنْهُمْ مُصَادِمَهُمْ",
        "مَاذَا رَأَى مِنْهُمُ فِي كُلِّ مُصْطَدَمِ",
      ],
      englishLines: [
        "They were mountains! Ask those who came to blows with them",
        "What they saw from them on every field of battle.",
      ],
      audioStart: 97.48,
      audioEnd: 106.1,
    },
    {
      id: 11,
      arabicLines: [
        "وَسَلْ حُنَيْنًا وَسَلْ بَدْرًا وَسَلْ أُحُدًا",
        "فُصُولَ حَتْفٍ لَهُمْ أَدْهَى مِنَ الوَخَمِ",
      ],
      englishLines: [
        "Ask Ḥunayn, ask Badr, ask Uḥud—",
        "Seasons of death, more disastrous for them than the plague!",
      ],
      audioStart: 106.18,
      audioEnd: 114.77,
    },
    {
      id: 12,
      arabicLines: [
        "المُصْدِرِي البِيضِ حُمْرًا بَعْدَ مَا وَرَدَتْ",
        "مِنَ العِدَا كُلَّ مُسْوَدٍّ مِنَ اللِّمَمِ",
      ],
      englishLines: [
        "White swords returned, dripping red after taking drink",
        "From beneath the black heads of all their enemies.",
      ],
      audioStart: 114.8,
      audioEnd: 123.32,
    },
    {
      id: 13,
      arabicLines: [
        "وَالكَاتِبِينَ بِسُمْرِ الخَطِّ مَا تَرَكَتْ",
        "أَقْلاَمُهُمْ حَرْفَ جِسْمٍ غَيْرَ مُنَعَجِمِ",
      ],
      englishLines: [
        "Like scribes with wielded spears for pens,",
        "Leaving no letter of a body unmarked with dots.",
      ],
      audioStart: 132.12,
      audioEnd: 140.5,
    },
    {
      id: 14,
      arabicLines: [
        "شَاكِي السِّلاَحِ لَهُمْ سِيمَا تُمَيِّزُهُمْ",
        "وَالوَرْدُ يَمْتَازُ بِالسِّيمَا عَنِ السَّلَمِ",
      ],
      englishLines: [
        "Well-armed, they were distinguished by a clear sign,",
        "as a rose differs from an acacia tree in its features.",
      ],
      audioStart: 140.66,
      audioEnd: 149.20,
    },
    {
      id: 15,
      arabicLines: [
        "تُهْدِي إِلَيْكَ رِيَاحُ النَّصْرِ نَشْرَهُمُ",
        "فَتَحْسَبُ الزَّهْرَ فِي الأَكْمَامِ كُلَّ كَمِي",
      ],
      englishLines: [
        "The winds of victory bring you their scent as a gift;",
        "You would think each armed hero a flower in bud!",
      ],
      audioStart: 149.25,
      audioEnd: 157.62,
    },
    {
      id: 16,
      arabicLines: [
        "كَأَنَّهُمْ فِي ظُهُورِ الخَيْلِ نَبْتُ رُبًا",
        "مِنْ شِدَّةِ الحَزْمِ لاَ مِنْ شِدَّةِ الحُزُمِ",
      ],
      englishLines: [
        "As if, riding their steeds, they were flowers on a hill-top",
        "Held firm not by strong stirrups, but by strength of resolve.",
      ],
      audioStart: 157.7,
      audioEnd: 166,
    },
    {
      id: 17,
      arabicLines: [
        "طَارَتْ قُلُوبُ العِدَا مِنْ بَأْسِهِمْ فَرَقًا",
        "فَمَا تُفَرِّقُ بَيْنَ البَهْمِ وَالبُهُمِ",
      ],
      englishLines: [
        "Their forceful onslaught so put their foes’ hearts to flight",
        "that you could not have told a herd from a warrior.",
      ],
      audioStart: 166.15,
      audioEnd: 174.58,
    },
    {
      id: 18,
      arabicLines: [
        "وَمَنْ تَكُنْ بِرَسُولِ اللهِ نُصْرَتُهُ",
        "إِنْ تَلْقَهُ الأُسْدُ فِي آجَامِهَا تَجِمِ",
      ],
      englishLines: [
        "For the one whose help comes from the Emissary of Allah",
        "Even lions finding him in their dens will be loth to face him.",
      ],
      audioStart:183,
      audioEnd: 144.41,
    },
    {
      id: 19,
      arabicLines: [
        "وَلَنْ تَرَى مِنْ وَليٍّ غَيْرِ مُنْتَصِرٍ",
        "بِهِ وَلاَ مِنْ عَدُوٍّ غَيْرِ مُنْقَصِمِ",
      ],
      englishLines: [
        "You will not see one saint who is not victorious through him;",
        "Or a single foe of his who is not dealt mortal blows.",
      ],
      audioStart: 265.15,
      audioEnd: 284.96,
    },
    {
      id: 20,
      arabicLines: [
        "أَحَلَّ أُمَّتَهُ فِي حِرْزِ مِلَّتِهِ",
        "كَاللَّيْثِ حَلَّ مَعَ الأَشْبَالِ فِي أَجَمِ",
      ],
      englishLines: [
        "He gave his nation sanctuary in the stronghold of his faith,",
        "As a lion settles in with its cubs in a thicket.",
      ],
      audioStart: 285.5,
      audioEnd: 305.51,
    },
    {
      id: 21,
      arabicLines: [
        "كَمْ جَدَّلَتْ كَلِمَاتُ اللهِ مِنْ جَدَلٍ",
        "فِيهِ وَكَمْ خَصَمَ البُرْهَانُ مِنْ خَصِمِ",
      ],
      englishLines: [
        "How often have Allah’s words felled his opponents,",
        "And how often the Qur’an has defeated its enemies!",
      ],
      audioStart: 305.7,
      audioEnd: 325.52,
    },
    {
      id: 22,
      arabicLines: [
        "كَفَاكَ بِالْعِلْمِ فِي الأُمِّيِّ مُعْجِزَةً",
        "فِي الجَاهِلِيَّةِ وَالتَّأْدِيبِ فِي اليُتُمِ",
      ],
      englishLines: [
        "The erudition of an unlettered one is miracle enough",
        "in an Age of Ignorance, as is an orphan’s education.",
      ],
      audioStart: 325.9,
      audioEnd: 345.58,
    },
  ],
  "9": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 0,
      audioEnd: 19.87,
    },
    {
      id: 1,
      arabicLines: [
        "خَدَمْتُهُ بِمَدِيحٍ أَسْتَقِيلُ بِهِ",
        "ذُنُوبَ عُمْرٍ مَضَى فِي الشِّعْرِ وَالخِدَمِ",
      ],
      englishLines: [
        "By this eulogy I have served him, seeking absolution",
        "For the sins of a life spent in poetry and patronage.",
      ],
      audioStart: 20,
      audioEnd: 37.65,
    },
    {
      id: 2,
      arabicLines: [
        "إِذْ قَلَّدَانِيَ مَا تُخْشَى عَوَاقِبُهُ",
        "كَأَنَّنِي بِهِمَا هَدْىٌ مِنَ النَّعَمِ",
      ],
      englishLines: [
        "For these two have yoked me, with consequences I fear;",
        "as if I were, on their account, a ritual lamb for slaughter.",
      ],
      audioStart: 37.8,
      audioEnd: 54.84,
    },
    {
      id: 3,
      arabicLines: [
        "أَطَعْتُ غَيَّ الصِّبَا فِي الحَالَتَيْنِ وَمَا",
        "حَصَلْتُ إِلاَّ عَلَى الآثَامِ وَالنَّدَمِ",
      ],
      englishLines: [
        "In both I obeyed the reckless folly of youth,",
        "And gained nothing except sins and regrets.",
      ],
      audioStart: 55.1,
      audioEnd: 72.17,
    },
    {
      id: 4,
      arabicLines: [
        "فَيَا خَسَارَةَ نَفْسٍ فِي تِجَارَتِهَا",
        "لَمْ تَشْتَرِ الدِّينَ بِالدُّنْيَا وَلَمْ تَسُمِ",
      ],
      englishLines: [
        "Alas, what abject loss for a soul in its transaction!",
        "It did not buy the Next World at the price of this – or even try to!",
      ],
      audioStart: 72.25,
      audioEnd: 89.06,
    },
    {
      id: 5,
      arabicLines: [
        "وَمَنْ يَبِعْ آجِلاً مِنْهُ بِعَاجِلِهِ",
        "يَبِنْ لَهُ الْغَبْنُ فِي بَيْعٍ وَفِي سَلَمِ",
      ],
      englishLines: [
        "Anyone who sells the Hereafter for the ephemeral",
        "Will be cheated in their present and future transactions.",
      ],
      audioStart: 106.15,
      audioEnd: 122.71,
    },
    {
      id: 6,
      arabicLines: [
        "إِنْ آتِ ذَنْبًا فَمَا عَهْدِي بِمُنْتَقِضٍ",
        "مَنَ النَّبِيِّ وَلاَ حَبْلِي بِمُنْصَرِمِ",
      ],
      englishLines: [
        "I have sinned, yet my pledge to the Prophet is unbroken;",
        "Nor has the rope binding me to him been severed.",
      ],
      audioStart: 122.9,
      audioEnd: 139.43,
    },
    {
      id: 7,
      arabicLines: [
        "فَإِنَّ لِي ذِمَّةً مِنْهُ بِتَسْمِيَتِيِ",
        "مُحَمَّداً وَهْوَ أَوْفَى الخَلْقِ بِالذِّمَمِ",
      ],
      englishLines: [
        "For I have a protective covenant with him owing to my name—",
        "Muḥammad—and he is the most loyal of mankind to covenants.",
      ],
      audioStart: 139.5,
      audioEnd: 147.31,
    },
    {
      id: 8,
      arabicLines: [
        "إِنْ لَمْ يَكُنْ فِي مَعَادِي آخِذًا بِيَدِي",
        "فَضْلاً وَإِلاَّ فَقُلْ يَا زَلَّةَ القَدَمِ",
      ],
      englishLines: [
        "If, in the Hereafter, he does not take me by the hand",
        "From pure grace, what a terrible slip of the foot!",
      ],
      audioStart: 147.4,
      audioEnd: 155.18,
    },
    {
      id: 9,
      arabicLines: [
        "حَاشَاهُ أَنْ يَحْرِمَ الرَّاجِي مَكَارِمَهُ",
        "أَوْ يَرْجِعَ الجَارُ مِنْهُ غَيْرَ مُحْتَرَمِ",
      ],
      englishLines: [
        "Far be it for him to deprive one hopeful of his generous gifts,",
        "Or for a neighbour to turn back without being honoured by him!",
      ],
      audioStart: 155.4,
      audioEnd: 163,
    },
    {
      id: 10,
      arabicLines: [
        "وَمُنْذُ أَلْزَمْتُ أَفْكَارِي مَدَائِحَهُ",
        "وَجَدْتُهُ لِخَلاَصِي خَيْرَ مُلْتَزِمِ",
      ],
      englishLines: [
        "Ever since I have focused my thoughts on his praises,",
        "I have found him the one most committed to my salvation.",
      ],
      audioStart: 163.25,
      audioEnd: 179.42,
    },
    {
      id: 11,
      arabicLines: [
        "وَلَنْ يَفُوتَ الغِنَى مِنْهُ يَدًا تَرِبَتْ",
        "إِنَّ الحَيَا يُنْبِتَ الأَزْهَارَ فِي الأَكَمِ",
      ],
      englishLines: [
        "His wealth will not overlook a dusty, needy hand;",
        "For showers cause flowers to bloom on hill-tops.",
      ],
      audioStart: 179.5,
      audioEnd: 195.37,
    },
    {
      id: 12,
      arabicLines: [
        "وَلَمْ أُرِدْ زَهْرَةَ الدُّنْيَا الَّتيِ اقْتَطَفَتْ",
        "يَدَا زُهَيْرٍ بِمَا أَثْنَى عَلَى هَرِمِ",
      ],
      englishLines: [
        "I sought not the flowers of this world",
        "Which Zuhayr picked for his praise of Harim.",
      ],
      audioStart: 195.5,
      audioEnd: 211,
    },
  ],
  "10": [
    {
      id: 0,
      arabicLines: [
        "مَوْلاَىَ صَلِّ وَسَلِّمْ دَائِمًا اَبَدًا",
        "عَلَى حَبِيْبِيكَ خَيْرٍ الْخَلْقِ كُلِّهِمِ",
      ],
      englishLines: [
        "My Master, descend peace and blessings continuously and eternally (non-existence)",
        "On Your Beloved, the Best of All Creation",
      ],
      audioStart: 21.1,
      audioEnd: 41.65,
    },
    {
      id: 1,
      arabicLines: [
        "يَا أَكْرَمَ الخَلْقِ مَالَي مَنْ أَلُوذُ بِهِ",
        "سِوَاكَ عِنْدَ حُلُولِ الحَادِثِ العَمِمِ",
      ],
      englishLines: [
        "O Noblest of Creation, whose protection can I seek",
        "But yours, when the Universal Event comes to pass?",
      ],
      audioStart: 0,
      audioEnd: 21.21,
    },
    {
      id: 2,
      arabicLines: [
        "وَلَنْ يَضِيقَ رَسُولَ اللهِ جَاهُكَ بيِ",
        "إِذَا الكَرِيمُ تَجَلَّى بِاسْمِ مُنْتَقِمِ",
      ],
      englishLines: [
        "O Emissary of Allah, your rank will not be diminished",
        "By me when the Generous One appears, named as the Avenger.",
      ],
      audioStart: 41.7,
      audioEnd: 62.33,
    },
    {
      id: 3,
      arabicLines: [
        "فَإِنَّ مِنْ جُودِكَ الدُّنْيَا وَضَرَّتَهَا",
        "وَمِنْ عُلُومِكَ عِلْمَ اللَّوْحِ وَالقَلَمِ",
      ],
      englishLines: [
        "For this world and its companion the Next come from your bounty,",
        "And part of what you know is knowledge of the Tablet and Pen.",
      ],
      audioStart: 62.35,
      audioEnd: 82.82,
    },
    {
      id: 4,
      arabicLines: [
        "يَا نَفْسُ لاَ تَقْنَطِي مِنْ زَلَّةٍ عَظُمَتْ",
        "إَنَّ الكَبَائِرَ فِي الغُفْرَانِ كَاللَّمَمِ",
      ],
      englishLines: [
        "O soul, despair not over a fault that is immense;",
        "Enormities, with divine forgiveness, are like minor errors.",
      ],
      audioStart: 82.85,
      audioEnd: 102.78,
    },
    {
      id: 5,
      arabicLines: [
        "لَعَلَّ رَحْمَةَ رَبِّي حِينَ يَقْسِمُهَا",
        "تَأْتِي عَلَى حَسَبِ العِصْيَانِ فِي الْقِسَمِ",
      ],
      englishLines: [
        "Perchance my Lord’s mercy, when He apportions it,",
        "Will be distributed in accordance with the measure of sins.",
      ],
      audioStart: 103,
      audioEnd: 123,
    },
    {
      id: 6,
      arabicLines: [
        "يَا رَبِّ وَاجْعَلْ رَجَائِي غَيْرَ مُنْعَكِسٍ",
        "لَدَيْكَ وَاجْعَلْ حِسَابِي غَيْرَ مُنْخَرِمِ",
      ],
      englishLines: [
        "O my Lord, let not my hope in You be overturned",
        "And do not make my account devoid of value.",
      ],
      audioStart: 123.15,
      audioEnd: 143.33,
    },
    {
      id: 7,
      arabicLines: [
        "وَالْطُفْ بِعَبْدِكَ فِي الدَّارَيْنِ إِنَّ لَهُ",
        "صَبْرًا مَتَى تَدْعُهُ الأَهْوَالُ يَنْهَزِمِ",
      ],
      englishLines: [
        "Be gentle with Your servant in this life and the Next;",
        "For his patience flees when he is visited by terrors.",
      ],
      audioStart: 163.35,
      audioEnd: 183.43,
    },
    {
      id: 8,
      arabicLines: [
        "وَأْذَنْ لِسُحْبِ صَلاَةٍ مِنْكَ دَائِمَةٍ",
        "عَلَى النَّبِيِّ بِمُنْهَلٍّ وَمُنْسَجِمِ",
      ],
      englishLines: [
        "And may clouds of Your blessings rain down constantly",
        "Upon the Prophet, pouring down in abundance.",
      ],
      audioStart: 183.45,
      audioEnd: 203.8,
    },
    {
      id: 9,
      arabicLines: [
        "مَا رَنَّحَتْ عَذَبَاتِ الْبَانِ رِيحُ صَبًا",
        "وَأَطْرَبَ الْعِيسَ حَادِي الْعِيسِ بِالنَّغَمِ",
      ],
      englishLines: [
        "For as long as the east wind stirs the branches of willows,",
        "And camel-drivers bring joy to their camels with melody.",
      ],
      audioStart: 203.85,
      audioEnd: 224.10,
    },
    {
      id: 10,
      arabicLines: [
        "ثُمَّ الرِّضَا عَنْ أَبِي بَكْرٍ وَعَنْ عُمَرٍ",
        "وَعَنْ عَلِيٍّ وَعَنْ عُثْمَانَ ذِي الْكَرَمِ",
      ],
      englishLines: [
        "Then extend Your good-pleasure to Abū Bakr and to ʿUmar",
        "And to ‘Ali, and to ʿUthmān, the generous",
      ],
      audioStart: 244.55,
      audioEnd: 264.68,
    },
    {
      id: 11,
      arabicLines: [
        "سَعْدٍ سَعِيدٍ زُبَيْرِ طَلْحَةٍ وَأَبِى",
       "عُبَيْدَةٍ وَابْن عَوْفٍ عَاشِرِ الْكَرَمِ"
      ],
      englishLines: [
        "Then extend Your good-pleasure to Abū Bakr and to ʿUmar",
        "And to ‘Ali, and to ʿUthmān, the generous",
      ],
      audioStart: 264.95,
      audioEnd: 285.05,
    },
    {
      id: 12,
      arabicLines: [
        "وَالآلِ وَالصَّحْبِ ثُمَّ التَابِعِيَن فَهُمْ",
        "أَهْلُ التُّقَى وَالنَّقَا وَالحِلْمِ وَالْكَرَمِ",
      ],
      englishLines: [
        "And to the Family and the Companions, and then the Followers—the people of Godfearingness,",
        "purity, forbearance and generosity.",
      ],
      audioStart: 285.1,
      audioEnd: 211.64,
    },
    {
      id: 13,
      arabicLines: [
        "يِا رَبِّ بِالمُصْطَفَى بَلِّغْ مَقَاصِدَنَا",
        "وَاغْفِرْ لَنَا مَا مَضَى يَا وَاسِعَ الكَرَمِ",
      ],
      englishLines: [
        "O Lord, by the Chosen One, allow us to attain our hopes",
        "And forgive us for what has gone past, O Vastly Generous.",
      ],
      audioStart: 285,
      audioEnd: 325.27,
    },
    {
      id: 14,
      arabicLines: [
        "وَاغْفِرْ إِلَهِي لِكُلِ المُسْلِمِينَ بِمَا",
        "يَتْلُونَ فِي المَسْجِدِ الأَقْصَى وَفِي الحَرَمِ",
      ],
      englishLines: [
        "And forgive, O God, all of the Muslims, by virtue",
        "Of what they recite in the Furthest Mosque [al-Aqṣā] and the Sacrosanct Mosque [al-Ḥaram]",
      ],
      audioStart: 344.6,
      audioEnd: 365.52,
    },
    {
      id: 15,
      arabicLines: [
        "بِجَاهِ مَنْ بَيْتَهُ فِي طَيْبَةٍ حَرَمٌ",
        "وَاسْمُهُ قَسَمٌ مِنْ أَعْظَمِ الْقَسَمِ",
      ],
      englishLines: [
        "By the rank of him whose house is a sanctum in Ṭayba [Medina]",
        "And whose name is an oath—from the greatest of oaths!",
      ],
      audioStart: 365.75,
      audioEnd: 386.52,
    },
    {
      id: 16,
      arabicLines: [
        "وَهَذِهِ بُرْدَةُ المُخْتَارِ قَدْ خُتِمَتْ",
        "وَالحَمْدُ للهِ فِي بَدْءٍ وَفِي خَتَمِ",
      ],
      englishLines: [
        "This Burda Ode of the Chosen One is thus complete",
        "And all praise is due to Allah in its beginning and its end.",
      ],
      audioStart: 407.9,
      audioEnd: 428.43,
    },
    {
      id: 17,
      arabicLines: [
        "أَبْيَاتُهَا قَدْ أَتَتْ سِتِّينَ مَعْ مِائَةٍ",
        "فَرِّجْ بِهَا كَرْبَنَا يَا وَاسِعَ الْكَرَمِ",
      ],
      englishLines: [
        "Its couplets—numbering one hundred and sixty—have come;",
        "Relieve us our difficulties by them, O Vastly Generous!",
      ],
      audioStart: 386.9,
      audioEnd: 407.61,
    },
  ],
};
const chapterNumsAudioMap: ChapterNumsAudioMap = {
  "1": "https://drive.google.com/uc?export=download&id=103yDEpQEcjeMsvUjw7SSebHdXNTNerSf",
  "2": "https://drive.google.com/uc?export=download&id=1QKTdBZ3bZNeobJYS0HVZ80pqOEtwv_ll",
  "3": "https://drive.google.com/uc?export=download&id=1ll5v4wz4TXUjrVjX2c3eDJMPdwZ5AEFE",
  "4": "https://drive.google.com/uc?export=download&id=1vPKpX3XGTpc6z0tWWjKtqiHcIh6GbBeB",
  "5": "https://drive.google.com/uc?export=download&id=1edn3ejiZ1D9BoFTNCusj1DWWJfSzff7o",
  "6": "https://drive.google.com/uc?export=download&id=1dOpfy1yFqhLCs-ywNgPYrlF3rrqZmEA0",
  "7": "https://drive.google.com/uc?export=download&id=1vnlbmfA3oSoW2OW8J0daUnD5xszKE9pJ",
  "8": "https://drive.google.com/uc?export=download&id=1XH4GLOYeuLQFobIOq5BdnZiesvYZ-K8t",
  "9": "https://drive.google.com/uc?export=download&id=1ptWNqL-FZFqhQilDLNt0PuA61BZe3mBd",
  "10": "https://drive.google.com/uc?export=download&id=1llED32vpWkP7GNfASzGDtaNlB5Ntnk58",
};

// const chapterNumsAudioMap: ChapterNumsAudioMap = {
//   "1": "https://drive.google.com/uc?export=download&id=185kt_a7uMnThYztR84_pHN4xYXWdbZWu",
//   "2": "https://drive.google.com/uc?export=download&id=1xE6jJ4YIjnugdCvPIKlzN0-zoL6ySsxQ",
//   "3": "https://drive.google.com/uc?export=download&id=1NRC7Nx6OWR3Wz2JvPLSI32PetVSqtDI6",
//   "4": "https://drive.google.com/uc?export=download&id=1tQrPtR-b7EQ5fZbFyoqq2rXms08a82Ea",
//   "5": "https://drive.google.com/uc?export=download&id=1oeCINdZnx1pZ3NRZZNVaCRQ2kOxrvBdl",
//   "6": "https://drive.google.com/uc?export=download&id=1tseaojT5L2x0JRCZTCEatkGC7PrwC4kg",
//   "7": "https://drive.google.com/uc?export=download&id=1GQZcTCCtWCE-iCjdxtfYsFRoiJ6xrfR0",
//   "8": "https://drive.google.com/uc?export=download&id=16E9JGw2xaJQu3eYsgGyuvbdSoEcRnUMg",
//   "9": "https://drive.google.com/uc?export=download&id=1W8vn35ZcIYC_Bzir3Wifz5kEvQZ7Vz9v",
//   "10": "https://drive.google.com/uc?export=download&id=1XU8xLtqLfeywZEtn2C2r6lv_NVatHQjU",
// };

const BurdaContainer = () => {
  const { chapterId } = useParams<{ chapterId: string | undefined }>();
  const isChapterAllowed =
    chapterId && Object.keys(chapterNumsAudioMap).includes(chapterId);

  if (!isChapterAllowed) {
    return <h1>Page not found</h1>;
  }

  const audioUrl = chapterNumsAudioMap[chapterId];

  const [audioTime, setAudioTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSetAudioTime = (timeInSeconds: number) => {
    setAudioTime(timeInSeconds);
  };

  const handleSetAudioRefTime = (timeInSeconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = timeInSeconds;
    }
  };

  const togglePlay = (flag: boolean) => {
    if (audioRef.current) {
      if (flag == true) {
        audioRef.current.play();
        setIsPlaying(true);
        return;
      }
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.container}>
      {chapters[chapterId].map((para: any) => (
        <BurdaPara
          para={para}
          setPlaybackTime={handleSetAudioRefTime}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          currentTime={audioTime}
          key={para.id}
        />
      ))}
      {+chapterId < 10 ? (
        <Link
          to={"/chapters/" + (+chapterId + 1)}
          style={{
            marginTop: "40px",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Next Chapter {+chapterId + 1}
          <FaArrowRight />
        </Link>
      ) : null}
      <BurdaPlayer
        setPlaybackTime={handleSetAudioTime}
        currentTime={audioTime}
        audioRef={audioRef}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        audioUrl={audioUrl}
      />
    </div>
  );
};

export default BurdaContainer;
