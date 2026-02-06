export type TraitId =
  | "parasite"
  | "slimy"
  | "ugly"
  | "resilient"
  | "aggressive"
  | "sneaky"
  | "social"
  | "loner"
  | "nocturnal"
  | "toxic"
  | "scavenger"
  | "underground";

export type Creature = {
  id: string;
  name: string;
  description: string;
  traits: string;
  image: string;
  traitWeights: Partial<Record<TraitId, number>>;
};

export type QuizQuestion = {
  id: number;
  question: string;
  answers: {
    text: string;
    traitWeights: Partial<Record<TraitId, number>>;
  }[];
};

export const creatures: Creature[] = [
  {
    id: "tapeworm",
    name: "Ленточный червь (Tapeworm)",
    description: "Это омерзительный паразит, который годами живет в вашем кишечнике, присосавшись к стенкам мощными присосками и крючьями. Он не имеет собственной пищеварительной системы — он просто впитывает полупереваренную пищу хозяина всей поверхностью своего членистого, склизкого тела, достигая 12 метров в длину. Каждая его часть способна производить тысячи яиц, которые выходят наружу вместе с вашими экскрементами.",
    traits: "Паразитизм, скрытность, выносливость",
    image: "https://loremflickr.com/800/800/parasite,worm,scary/all",
    traitWeights: { parasite: 5, sneaky: 4, loner: 3, underground: 2 },
  },
  {
    id: "hagfish",
    name: "Миксина (Hagfish)",
    description: "Настоящее исчадие морских глубин, напоминающее живой кусок слизи. У миксины нет челюстей, зато есть рот-терка, которым она вгрызается в плоть еще живых или умирающих рыб, выедая их изнутри. В случае опасности она выделяет литры густой, удушающей слизи, которая забивает жабры хищников. Она может завязываться узлом, чтобы очиститься от собственного гноя и остатков разлагающейся пищи.",
    traits: "Слизистость, выносливость, падальщик",
    image: "https://loremflickr.com/800/800/hagfish,slimy,monster/all",
    traitWeights: { slimy: 5, resilient: 4, scavenger: 5, ugly: 3 },
  },
  {
    id: "blobfish",
    name: "Рыба-капля (Blobfish)",
    description: "Бесформенная, студенистая масса, признанная самым уродливым существом в мире. Её тело — это рыхлый кисель с плотностью чуть меньше воды, что позволяет ей пассивно дрейфовать, заглатывая всё съедобное, что проплывает мимо её унылой морды. Извлеченная на поверхность, она превращается в бесформенный розовый мешок, напоминающий разлагающийся холодец.",
    traits: "Уродливость, пассивность, глубоководность",
    image: "https://loremflickr.com/800/800/blobfish,ugly,fish/all",
    traitWeights: { ugly: 5, resilient: 4, loner: 3 },
  },
  {
    id: "honey-badger",
    name: "Медоед (Honey Badger)",
    description: "Безумный агрессор с толстой, зловонной кожей, которую не прокусывают даже львы. Медоед не знает страха не из-за храбрости, а из-за патологической ярости. Он разрывает гнезда ядовитых змей, заживо поедая их, пока яд временно парализует его. Это существо не брезгует ничем, нападая на гениталии крупных животных, чтобы обескровить жертву в самой грязной драке.",
    traits: "Агрессивность, стойкость, пофигизм",
    image: "https://loremflickr.com/800/800/honeybadger,aggressive,animal/all",
    traitWeights: { aggressive: 5, resilient: 5, loner: 4 },
  },
  {
    id: "tardigrade",
    name: "Тихоходка (Tardigrade)",
    description: "Микроскопическое чудовище, которое невозможно уничтожить. Она выживает в жидком азоте, в вакууме космоса и под смертельными дозами радиации, превращаясь в сухую, безжизненную мумию, а затем «оживая» вновь. Её неуязвимость пугает: это существо будет существовать даже тогда, когда всё живое на планете погибнет, продолжая медленно копошиться в пыли своими когтистыми лапами.",
    traits: "Неуязвимость, микроскопичность, терпение",
    image: "https://loremflickr.com/800/800/tardigrade,microscopic,alien/all",
    traitWeights: { resilient: 5, loner: 2, underground: 2 },
  },
  {
    id: "naked-mole-rat",
    name: "Голый землекоп (Naked Mole Rat)",
    description: "Слепое, сморщенное существо, лишенное шерсти и болевых рецепторов. Они живут в душных, зловонных подземных туннелях, где царит жесткая иерархия во главе с огромной маткой. Голые землекопы поедают собственные фекалии для улучшения пищеварения и годами живут в темноте, напоминая ожившие куски сырого, розового мяса с торчащими огромными зубами.",
    traits: "Социальность, долголетие, подземный житель",
    image: "https://loremflickr.com/800/800/nakedmolerat,ugly,rat/all",
    traitWeights: { social: 5, underground: 5, ugly: 4, resilient: 4 },
  },
  {
    id: "hyena",
    name: "Гиена (Hyena)",
    description: "Коварный хищник с самыми мощными челюстями, способными дробить кости до состояния муки. Гиены не просто убивают — они часто начинают поедать жертву живьем, пока та еще в сознании. Их жуткий «хохот» разносится в ночи над трупами, а социальный строй основан на жесточайшем доминировании. Это животное ассоциируется с трусостью и падалью, хотя на деле оно — эффективная машина для перемалывания плоти.",
    traits: "Социальность, агрессивность, падальщик",
    image: "https://loremflickr.com/800/800/hyena,scary,predator/all",
    traitWeights: { social: 4, aggressive: 4, scavenger: 5, nocturnal: 3 },
  },
  {
    id: "anglerfish",
    name: "Удильщик (Anglerfish)",
    description: "Монстр из вечной тьмы океана. Самки удильщиков обладают огромной пастью с игольчатыми зубами и светящейся приманкой из гниющих бактерий. Но самое мерзкое — это их размножение: крошечный самец впивается в тело самки, буквально срастаясь с ней кожей и кровеносной системой. Он постепенно дегенерирует, превращаясь в вечного паразита-придатка, который нужен только для оплодотворения.",
    traits: "Хитрость, одиночество, глубоководность",
    image: "https://loremflickr.com/800/800/anglerfish,deepsea,monster/all",
    traitWeights: { sneaky: 5, loner: 5, ugly: 4, nocturnal: 4 },
  },
  {
    id: "wasp",
    name: "Оса-наездник (Parasitoid Wasp)",
    description: "Живое воплощение кошмара. Эта оса парализует жертву (например, паука или гусеницу) и откладывает яйца прямо внутрь её тела. Вылупившиеся личинки начинают медленно поедать хозяина заживо, сознательно оставляя жизненно важные органы напоследок, чтобы мясо оставалось свежим как можно дольше. Жертва медленно умирает изнутри, превращаясь в пустую оболочку.",
    traits: "Паразитизм, точность, агрессивность",
    image: "https://loremflickr.com/800/800/parasitoidwasp,insect,scary/all",
    traitWeights: { parasite: 5, aggressive: 4, sneaky: 4 },
  },
  {
    id: "raccoon",
    name: "Енот (Raccoon)",
    description: "Наглый ночной мусорщик, чьи ловкие лапы напоминают человеческие руки. Еноты — переносчики бешенства и паразитов, которые копошатся в гниющих отходах, разнося заразу. Они могут быть агрессивными и жестокими, используя свою хитрость, чтобы проникать в дома и уничтожать всё на своем пути. Их милая внешность — лишь маска для вороватого и нечистоплотного вредителя.",
    traits: "Хитрость, ночной образ жизни, находчивость",
    image: "https://loremflickr.com/800/800/raccoon,trash,nocturnal/all",
    traitWeights: { sneaky: 4, nocturnal: 5, scavenger: 4, social: 3 },
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Вы нашли кошелек с крупной суммой денег на пустой улице. Ваши действия?",
    answers: [
      { text: "Заберу себе, это подарок судьбы. Всем везет по-разному.", traitWeights: { parasite: 4, sneaky: 2 } },
      { text: "Попробую найти владельца, это правильно.", traitWeights: { social: 3, resilient: 1 } },
      { text: "Оставлю на месте, не хочу ввязываться в лишние проблемы.", traitWeights: { loner: 3, sneaky: 1 } },
      { text: "Посмотрю, нет ли камер, и если нет — заберу.", traitWeights: { sneaky: 4, nocturnal: 1 } },
    ],
  },
  {
    id: 2,
    question: "Коллега/знакомый постоянно просит вас о мелких одолжениях, ничего не давая взамен. Что вы чувствуете?",
    answers: [
      { text: "Раздражение. Я прямо скажу ему всё, что думаю.", traitWeights: { aggressive: 4 } },
      { text: "Ничего, я сам использую людей так же.", traitWeights: { parasite: 5 } },
      { text: "Мне трудно отказать, я просто терплю.", traitWeights: { slimy: 3, resilient: 2 } },
      { text: "Я начну игнорировать его и уйду в тень.", traitWeights: { loner: 4, sneaky: 2 } },
    ],
  },
  {
    id: 3,
    question: "Как вы ведете себя в конфликтной ситуации?",
    answers: [
      { text: "Атакую первым, лучшая защита — это нападение.", traitWeights: { aggressive: 5 } },
      { text: "Пытаюсь манипулировать ситуацией из-за кулис.", traitWeights: { sneaky: 5, parasite: 2 } },
      { text: "Стараюсь сгладить углы, становлюсь 'скользким'.", traitWeights: { slimy: 5, social: 1 } },
      { text: "Просто ухожу, мне плевать на чужое мнение.", traitWeights: { loner: 4, resilient: 2 } },
    ],
  },
  {
    id: 4,
    question: "Какое из этих описаний успеха вам ближе?",
    answers: [
      { text: "Власть и доминирование над окружающими.", traitWeights: { aggressive: 4, social: 2 } },
      { text: "Выживание там, где другие сдались.", traitWeights: { resilient: 5, underground: 2 } },
      { text: "Возможность жить за счет системы или других.", traitWeights: { parasite: 5, scavenger: 2 } },
      { text: "Полная изоляция от общества и его правил.", traitWeights: { loner: 5, nocturnal: 1 } },
    ],
  },
  {
    id: 5,
    question: "Ваше отношение к критике вашей внешности или поведения?",
    answers: [
      { text: "Я знаю, что я уродлив/странен, и мне это нравится.", traitWeights: { ugly: 5, resilient: 1 } },
      { text: "Вспыхиваю от ярости, никто не смеет меня судить.", traitWeights: { aggressive: 4 } },
      { text: "Мне абсолютно всё равно на мнение 'светлых' людей.", traitWeights: { resilient: 4, ugly: 2 } },
      { text: "Я подстроюсь под их ожидания, чтобы потом использовать это.", traitWeights: { sneaky: 4, slimy: 2 } },
    ],
  },
  {
    id: 6,
    question: "Где вы чувствуете себя в наибольшей безопасности?",
    answers: [
      { text: "В темноте, где меня никто не видит.", traitWeights: { nocturnal: 5, sneaky: 2 } },
      { text: "В толпе, где я могу затеряться.", traitWeights: { social: 3, sneaky: 3 } },
      { text: "Глубоко в своем 'логове' (дома, под одеялом).", traitWeights: { underground: 5, loner: 2 } },
      { text: "Там, где есть сильный покровитель, за которым можно спрятаться.", traitWeights: { parasite: 4, social: 2 } },
    ],
  },
  {
    id: 7,
    question: "Что вы сделаете, если увидите, как кто-то совершает ошибку?",
    answers: [
      { text: "Воспользуюсь этим в своих интересах.", traitWeights: { scavenger: 5, parasite: 2 } },
      { text: "Громко высмею его при всех.", traitWeights: { aggressive: 3, ugly: 2 } },
      { text: "Пройду мимо, это не мое дело.", traitWeights: { loner: 4 } },
      { text: "Подожду, пока последствия станут хуже, и посмотрю.", traitWeights: { sneaky: 3, nocturnal: 2 } },
    ],
  },
  {
    id: 8,
    question: "Ваш идеальный способ получения желаемого?",
    answers: [
      { text: "Грубая сила и напор.", traitWeights: { aggressive: 5 } },
      { text: "Хитроумный план и обман.", traitWeights: { sneaky: 5 } },
      { text: "Терпеливое ожидание, пока всё само придет в руки (или сгниет).", traitWeights: { scavenger: 4, resilient: 3 } },
      { text: "Присосаться к тому, у кого это уже есть.", traitWeights: { parasite: 5 } },
    ],
  },
  {
    id: 9,
    question: "Как вы относитесь к правилам и законам?",
    answers: [
      { text: "Они созданы, чтобы их нарушать.", traitWeights: { aggressive: 3, sneaky: 2 } },
      { text: "Они для слабых, я живу по своим правилам.", traitWeights: { loner: 3, resilient: 2 } },
      { text: "Я нахожу в них лазейки для себя.", traitWeights: { slimy: 4, sneaky: 3 } },
      { text: "Я соблюдаю их только тогда, когда за мной смотрят.", traitWeights: { sneaky: 4, nocturnal: 1 } },
    ],
  },
  {
    id: 10,
    question: "Какое чувство вы испытываете чаще всего?",
    answers: [
      { text: "Голод (до ресурсов, внимания или еды).", traitWeights: { scavenger: 4, parasite: 3 } },
      { text: "Раздражение на окружающую глупость.", traitWeights: { aggressive: 3, loner: 2 } },
      { text: "Желание спрятаться от всего мира.", traitWeights: { underground: 4, loner: 3 } },
      { text: "Удовлетворение от своей неуязвимости.", traitWeights: { resilient: 5, toxic: 2 } },
    ],
  }
];

export function calculateResult(answers: Record<number, number>): Creature {
  const scores: Record<string, number> = {};

  // Initialize scores for all creatures
  creatures.forEach((creature) => {
    scores[creature.id] = 0;
  });

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const question = quizQuestions.find((q) => q.id === Number(questionId));
    if (question) {
      const answer = question.answers[answerIndex];
      if (answer) {
        Object.entries(answer.traitWeights).forEach(([trait, weight]) => {
          creatures.forEach((creature) => {
            if (creature.traitWeights[trait as TraitId]) {
              scores[creature.id] += (weight || 0) * (creature.traitWeights[trait as TraitId] || 0);
            }
          });
        });
      }
    }
  });

  // Find the creature with the highest score
  let bestMatch = creatures[0];
  let maxScore = -1;

  Object.entries(scores).forEach(([creatureId, score]) => {
    if (score > maxScore) {
      maxScore = score;
      const found = creatures.find((c) => c.id === creatureId);
      if (found) bestMatch = found;
    }
  });

  return bestMatch;
}
