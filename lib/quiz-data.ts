export type TraitId =
  | "slimy"      // Слизкость
  | "greed"      // Жадность
  | "deceit"     // Коварство
  | "laziness"   // Лень
  | "annoyance"  // Надоедливость
  | "ugliness";  // Внешняя отталкиваность (Вн)

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
    id: "cockroach",
    name: "Таракан",
    description: "Вездесущий выживальщик, который копошится в ваших продуктах и разносит заразу. Его хитиновый панцирь и длинные усы вызывают инстинктивное отвращение, а способность жить без головы неделями — настоящий кошмар.",
    traits: "Выживаемость, нечистоплотность",
    image: "https://loremflickr.com/800/800/cockroach,insect/all",
    traitWeights: { greed: 4, annoyance: 5, ugliness: 4, deceit: 3 },
  },
  {
    id: "maggot",
    name: "Личинка мясной мухи (Опарыш)",
    description: "Белая, извивающаяся масса, пирующая на разлагающейся плоти. У них нет глаз, только ротовые крючья, которыми они вгрызаются в гниль, превращая всё вокруг в зловонную жижу.",
    traits: "Трупоедство, слизистость",
    image: "https://loremflickr.com/800/800/maggot,larva/all",
    traitWeights: { slimy: 5, ugliness: 5, laziness: 2, greed: 4 },
  },
  {
    id: "flea",
    name: "Человеческая блоха",
    description: "Крошечный вампир, способный прыгать на огромные расстояния. Она пьет вашу кровь, оставляя зудящие следы, и может переносить смертельно опасные болезни.",
    traits: "Паразитизм, навязчивость",
    image: "https://loremflickr.com/800/800/flea,parasite/all",
    traitWeights: { annoyance: 5, greed: 5, deceit: 3 },
  },
  {
    id: "bed-bug",
    name: "Постельный клоп",
    description: "Ночной кошмар, который прячется в складках вашего матраса. Он выходит охотиться, когда вы спите, высасывая кровь и превращая ваш отдых в паранойю.",
    traits: "Скрытность, кровососание",
    image: "https://loremflickr.com/800/800/bedbug,insect/all",
    traitWeights: { deceit: 5, annoyance: 5, greed: 4 },
  },
  {
    id: "louse",
    name: "Вошь",
    description: "Мелкий паразит, цепляющийся за волосы и кожу. Вызывает нестерпимый зуд и чувство глубокой брезгливости одним своим присутствием.",
    traits: "Паразитизм, зуд",
    image: "https://loremflickr.com/800/800/louse,parasite/all",
    traitWeights: { annoyance: 5, greed: 4, ugliness: 3 },
  },
  {
    id: "tsetse",
    name: "Муха цеце",
    description: "Переносчик сонной болезни, чей укус может стать роковым. Она выглядит как обычная муха, но её намерения куда более зловещи.",
    traits: "Опасность, назойливость",
    image: "https://loremflickr.com/800/800/tsetse,fly/all",
    traitWeights: { annoyance: 4, deceit: 4, ugliness: 3 },
  },
  {
    id: "botfly",
    name: "Овод (личинка)",
    description: "Один из самых жутких паразитов: его личинка живет и растет прямо под вашей кожей, питаясь вашей плотью и проделывая отверстия для дыхания.",
    traits: "Внутренний паразит, ужас",
    image: "https://loremflickr.com/800/800/botfly,larva/all",
    traitWeights: { ugliness: 5, slimy: 4, greed: 5, deceit: 4 },
  },
  {
    id: "toxic-caterpillar",
    name: "Ядовитая гусеница моли",
    description: "Пушистая на вид, но смертоносная при прикосновении. Её волоски — это крошечные иглы с ядом, вызывающие жуткую боль и воспаление.",
    traits: "Обманчивость, токсичность",
    image: "https://loremflickr.com/800/800/caterpillar,toxic/all",
    traitWeights: { deceit: 5, annoyance: 4, ugliness: 3 },
  },
  {
    id: "giant-water-bug",
    name: "Гигантский водяной клоп",
    description: "Хищник, способный убить добычу вдвое больше себя. Его укус считается одним из самых болезненных среди насекомых, а вид — пугающим.",
    traits: "Агрессия, сила",
    image: "https://loremflickr.com/800/800/waterbug,giant/all",
    traitWeights: { annoyance: 4, ugliness: 5, greed: 3 },
  },
  {
    id: "colorado-beetle",
    name: "Колорадский жук",
    description: "Проклятие любого огородника. Ненасытный вредитель, уничтожающий урожай с поразительной скоростью и устойчивостью к ядам.",
    traits: "Ненасытность, вредительство",
    image: "https://loremflickr.com/800/800/coloradobeetle/all",
    traitWeights: { greed: 5, annoyance: 5, laziness: 2 },
  },
  {
    id: "locust",
    name: "Саранча",
    description: "Живое облако разрушения. Когда они собираются в стаю, они пожирают всё зеленое на своем пути, оставляя после себя пустыню.",
    traits: "Прожорливость, массовость",
    image: "https://loremflickr.com/800/800/locust,swarm/all",
    traitWeights: { greed: 5, annoyance: 4, laziness: 1 },
  },
  {
    id: "cricket",
    name: "Сверчок",
    description: "Его навязчивое стрекотание может свести с ума, а привычка неожиданно прыгать прямо в лицо вызывает шок и отвращение.",
    traits: "Навязчивость, внезапность",
    image: "https://loremflickr.com/800/800/cricket,insect/all",
    traitWeights: { annoyance: 5, deceit: 3, laziness: 2 },
  },
  {
    id: "thief-ant",
    name: "Муравей-вор",
    description: "Крошечный вредитель, который проникает в любые щели. Он ворует вашу еду и размножается с невероятной скоростью, становясь хозяином в вашем доме.",
    traits: "Воровство, вездесущность",
    image: "https://loremflickr.com/800/800/ant,small/all",
    traitWeights: { greed: 5, deceit: 4, annoyance: 4 },
  },
  {
    id: "termite",
    name: "Термит",
    description: "Тихий разрушитель. Он годами подтачивает стены вашего дома изнутри, превращая дерево в труху, пока здание не рухнет.",
    traits: "Скрытное разрушение",
    image: "https://loremflickr.com/800/800/termite/all",
    traitWeights: { deceit: 5, greed: 4, laziness: 1 },
  },
  {
    id: "burying-beetle",
    name: "Жук-могильщик",
    description: "Санитар леса с мрачной специализацией. Он закапывает трупы животных в землю, чтобы обеспечить едой своих личинок, копошась в гнили.",
    traits: "Трупоедство, инстинкт",
    image: "https://loremflickr.com/800/800/beetle,grave/all",
    traitWeights: { ugliness: 5, greed: 3, slimy: 3 },
  },
  {
    id: "clothes-moth",
    name: "Платяная моль",
    description: "Вредитель, который превращает вашу любимую одежду в решето. Её личинки скрытно поедают шерсть и шелк, оставляя после себя только дыры.",
    traits: "Порча имущества, скрытность",
    image: "https://loremflickr.com/800/800/moth,clothes/all",
    traitWeights: { greed: 4, deceit: 5, annoyance: 4 },
  },
  {
    id: "mosquito",
    name: "Комариная самка",
    description: "Самый опасный убийца в истории человечества. Её писк предвещает укус, зуд и риск заражения смертельными болезнями.",
    traits: "Кровососание, назойливость",
    image: "https://loremflickr.com/800/800/mosquito/all",
    traitWeights: { annoyance: 5, greed: 4, deceit: 3 },
  },
  {
    id: "midge",
    name: "Мошка (гнус)",
    description: "Крошечные, но нещадные. Они нападают целыми тучами, забиваясь в глаза и уши, и оставляя после себя болезненные отеки.",
    traits: "Агрессия стаи, навязчивость",
    image: "https://loremflickr.com/800/800/midge,gnus/all",
    traitWeights: { annoyance: 5, ugliness: 2, greed: 3 },
  },
  {
    id: "cat-flea",
    name: "Кошачья блоха",
    description: "Бич домашних питомцев и их владельцев. Быстро размножается и делает жизнь невыносимой из-за постоянных укусов и зуда.",
    traits: "Паразитизм, прыгучесть",
    image: "https://loremflickr.com/800/800/catflea/all",
    traitWeights: { annoyance: 5, greed: 4, deceit: 2 },
  },
  {
    id: "sand-flea",
    name: "Песчаная блоха",
    description: "Кошмар тропических пляжей. Она зарывается под кожу ваших стоп, где раздувается от яиц, вызывая гнойные воспаления.",
    traits: "Подкожный паразит",
    image: "https://loremflickr.com/800/800/sandflea/all",
    traitWeights: { ugliness: 5, annoyance: 4, greed: 5 },
  },
  {
    id: "scabies-mite",
    name: "Чесоточный зудень",
    description: "Микроскопический клещ, который прогрызает ходы в вашей коже. Результат — нестерпимый зуд, который усиливается по ночам.",
    traits: "Внутрикожный паразит",
    image: "https://loremflickr.com/800/800/scabies,mite/all",
    traitWeights: { annoyance: 5, slimy: 3, deceit: 4 },
  },
  {
    id: "slug",
    name: "Виноградный слизень",
    description: "Огромный кусок скользкой плоти без раковины. Оставляет за собой блестящий след слизи и пожирает всё на своем пути.",
    traits: "Слизистость, прожорливость",
    image: "https://loremflickr.com/800/800/slug,slimy/all",
    traitWeights: { slimy: 5, laziness: 4, ugliness: 4 },
  },
  {
    id: "house-centipede",
    name: "Сороконожка (скутигера)",
    description: "Многоногое существо, которое невероятно быстро бегает по стенам. Её вид вызывает панический ужас, хотя она охотится на других насекомых.",
    traits: "Скорость, пугающий вид",
    image: "https://loremflickr.com/800/800/centipede,insect/all",
    traitWeights: { ugliness: 5, deceit: 3, annoyance: 4 },
  },
  {
    id: "woodlouse",
    name: "Мокрица",
    description: "Существо, любящее сырость и тьму. Копошится под камнями и в гнилой древесине, напоминая маленького бронированного пришельца.",
    traits: "Влаголюбивость, скрытность",
    image: "https://loremflickr.com/800/800/woodlouse/all",
    traitWeights: { slimy: 3, ugliness: 4, laziness: 3 },
  },
  {
    id: "cellar-spider",
    name: "Паук-сенокосец",
    description: "Длинноногое создание, застывшее в углу потолка. Его тонкие лапы и хаотичная паутина создают ощущение запущенности и страха.",
    traits: "Тонкость, неподвижность",
    image: "https://loremflickr.com/800/800/spider,longlegs/all",
    traitWeights: { laziness: 4, ugliness: 3, deceit: 3 },
  },
  {
    id: "tarantula",
    name: "Паук-птицеед",
    description: "Огромный, волосатый и пугающий. Один его вид заставляет сердце биться чаще, а мощные хелицеры готовы вонзиться в добычу.",
    traits: "Размер, арахнофобия",
    image: "https://loremflickr.com/800/800/tarantula,spider/all",
    traitWeights: { ugliness: 5, greed: 3, annoyance: 3 },
  },
  {
    id: "black-widow",
    name: "Черная вдова",
    description: "Смертоносная элегантность. Маленький паук с красным пятном, чей яд вызывает мучительные боли и может убить.",
    traits: "Ядовитость, коварство",
    image: "https://loremflickr.com/800/800/blackwidow,spider/all",
    traitWeights: { deceit: 5, greed: 2, ugliness: 3 },
  },
  {
    id: "karakurt",
    name: "Каракурт",
    description: "Степной убийца. Его укус почти не чувствуется, но последствия наступают быстро и могут быть фатальными без помощи.",
    traits: "Скрытая угроза",
    image: "https://loremflickr.com/800/800/karakurt,spider/all",
    traitWeights: { deceit: 5, greed: 3, annoyance: 2 },
  },
  {
    id: "scorpion",
    name: "Скорпион",
    description: "Древний хищник с ядовитым жалом на хвосте. Его бронированное тело и мощные клешни внушают первобытный страх.",
    traits: "Агрессия, защита",
    image: "https://loremflickr.com/800/800/scorpion/all",
    traitWeights: { annoyance: 4, deceit: 4, ugliness: 4 },
  },
  {
    id: "camel-spider",
    name: "Сольпуга (фаланга)",
    description: "Невероятно быстрое и агрессивное существо, которое выглядит как помесь паука и скорпиона. Может больно укусить и напугать до смерти.",
    traits: "Скорость, ярость",
    image: "https://loremflickr.com/800/800/solifugae,camelspider/all",
    traitWeights: { annoyance: 5, ugliness: 5, greed: 3 },
  },
  {
    id: "tick",
    name: "Энцефалитный клещ",
    description: "Маленький паразит, который поджидает в траве. Его укус может превратить вашу жизнь в борьбу за выживание из-за опасных вирусов.",
    traits: "Скрытность, опасность",
    image: "https://loremflickr.com/800/800/tick,parasite/all",
    traitWeights: { deceit: 5, greed: 5, annoyance: 4 },
  },
  {
    id: "dust-mite",
    name: "Ковровый клещ",
    description: "Микроскопический сосед, живущий в вашей постели и коврах. Питается частичками вашей кожи и вызывает аллергию у миллионов.",
    traits: "Микроскопичность, аллерген",
    image: "https://loremflickr.com/800/800/dustmite/all",
    traitWeights: { laziness: 4, ugliness: 5, slimy: 2 },
  },
  {
    id: "demodex",
    name: "Зудень демодекс",
    description: "Клещ, который живет прямо в порах вашей кожи, особенно на лице. Он питается кожным салом и размножается, пока вы спите.",
    traits: "Лицевой паразит",
    image: "https://loremflickr.com/800/800/demodex,skin/all",
    traitWeights: { slimy: 4, ugliness: 4, deceit: 4 },
  },
  {
    id: "lamprey",
    name: "Минога",
    description: "Рыба-паразит с круглой присоской вместо рта, усеянной рядами острых зубов. Она впивается в жертву и высасывает из неё все соки.",
    traits: "Кровососание, уродство",
    image: "https://loremflickr.com/800/800/lamprey/all",
    traitWeights: { ugliness: 5, greed: 5, slimy: 4 },
  },
  {
    id: "cymothoa",
    name: "Азиатский карповый жук (паразит)",
    description: "Жуткое ракообразное, которое съедает язык рыбы и занимает его место, становясь живым протезом и воруя еду у хозяина.",
    traits: "Замещение, паразитизм",
    image: "https://loremflickr.com/800/800/parasite,fish/all",
    traitWeights: { deceit: 5, greed: 5, ugliness: 4 },
  },
  {
    id: "candiru",
    name: "Кандиру",
    description: "Крошечный сомик, который, по легендам, может проникнуть в мочеиспускательный канал человека, привлеченный запахом аммиака.",
    traits: "Проникновение, ужас",
    image: "https://loremflickr.com/800/800/candiru,fish/all",
    traitWeights: { deceit: 5, greed: 4, annoyance: 5 },
  },
  {
    id: "hagfish",
    name: "Рыба-ведьма (миксина)",
    description: "Выделяет литры густой слизи, когда чувствует угрозу. Она может завязываться узлом, чтобы очиститься и поедать добычу изнутри.",
    traits: "Слизистость, падальщик",
    image: "https://loremflickr.com/800/800/hagfish,slimy/all",
    traitWeights: { slimy: 5, ugliness: 5, greed: 3 },
  },
  {
    id: "stingray",
    name: "Гигантский хвостокол",
    description: "Огромный плоский диск, скрытый в речном иле. Его хвост вооружен зазубренным ядовитым шипом, способным нанести смертельный удар.",
    traits: "Скрытая мощь, яд",
    image: "https://loremflickr.com/800/800/stingray,giant/all",
    traitWeights: { deceit: 4, annoyance: 3, ugliness: 3 },
  },
  {
    id: "anglerfish",
    name: "Морской черт (удильщик)",
    description: "Глубоководный монстр с огромной пастью и светящейся удочкой. Самцы срастаются с самками, превращаясь в вечных паразитов.",
    traits: "Коварство, уродство",
    image: "https://loremflickr.com/800/800/anglerfish/all",
    traitWeights: { deceit: 5, ugliness: 5, greed: 4 },
  },
  {
    id: "golomyanka",
    name: "Голомянка",
    description: "Прозрачная рыба из глубин Байкала, которая почти наполовину состоит из жира. На солнце она буквально тает, превращаясь в пятно.",
    traits: "Прозрачность, жирность",
    image: "https://loremflickr.com/800/800/fish,transparent/all",
    traitWeights: { slimy: 4, ugliness: 3, laziness: 5 },
  },
  {
    id: "tapeworm",
    name: "Ремнец (ленточный червь)",
    description: "Паразит, который живет в кишечнике рыб, раздувая их живот до предела. Он делает хозяина легкой добычей для птиц, чтобы продолжить цикл.",
    traits: "Манипуляция, рост",
    image: "https://loremflickr.com/800/800/worm,parasite/all",
    traitWeights: { greed: 5, slimy: 4, deceit: 4 },
  },
  {
    id: "leech",
    name: "Пиявка",
    description: "Скользкий червь, жаждущий вашей крови. Она незаметно присасывается и впрыскивает ферменты, не дающие крови сворачиваться.",
    traits: "Кровососание, слизь",
    image: "https://loremflickr.com/800/800/leech,slimy/all",
    traitWeights: { slimy: 5, greed: 5, annoyance: 4 },
  },
  {
    id: "planaria",
    name: "Планария",
    description: "Плоский червь с невероятной способностью к регенерации. Разрежьте её на части — и каждая превратится в нового червя.",
    traits: "Живучесть, примитивность",
    image: "https://loremflickr.com/800/800/planaria,worm/all",
    traitWeights: { slimy: 4, laziness: 3, ugliness: 3 },
  },
  {
    id: "anemone",
    name: "Актиния",
    description: "Живой цветок с ядовитыми щупальцами. Она выглядит красиво, но горе тому, кто коснется её смертоносных стрекательных клеток.",
    traits: "Ложная красота, яд",
    image: "https://loremflickr.com/800/800/anemone,sea/all",
    traitWeights: { deceit: 4, annoyance: 3, slimy: 3 },
  },
  {
    id: "sealouse",
    name: "Морская вошь",
    description: "Паразитическое ракообразное, которое буквально объедает рыбу живьем, оставляя на ней глубокие язвы и раны.",
    traits: "Паразитизм, поедание",
    image: "https://loremflickr.com/800/800/sealouse/all",
    traitWeights: { greed: 5, annoyance: 4, ugliness: 4 },
  },
  {
    id: "giant-snail",
    name: "Африканская улитка",
    description: "Огромный моллюск, который может переносить опасных паразитов и уничтожать целые сады своим ненасытным аппетитом.",
    traits: "Размер, слизь",
    image: "https://loremflickr.com/800/800/snail,giant/all",
    traitWeights: { slimy: 5, greed: 4, laziness: 3 },
  },
  {
    id: "vampire-squid",
    name: "Кальмар-вампир",
    description: "Существо из бездны с перепонками между щупальцами, напоминающими плащ. Его глаза светятся жутким светом в вечной тьме.",
    traits: "Глубоководный ужас",
    image: "https://loremflickr.com/800/800/vampiresquid/all",
    traitWeights: { ugliness: 5, deceit: 4, greed: 3 },
  },
  {
    id: "blobfish",
    name: "Рыба-капля",
    description: "Признана самым уродливым существом на планете. Её студенистое тело выглядит как грустное человеческое лицо, потерявшее форму.",
    traits: "Уродство, апатия",
    image: "https://loremflickr.com/800/800/blobfish/all",
    traitWeights: { ugliness: 5, laziness: 5, slimy: 3 },
  },
  {
    id: "viperfish",
    name: "Саблезуб (рыба-гадюка)",
    description: "Обладает зубами настолько длинными, что они не помещаются во рту. Она выглядит как оживший кошмар из самых темных глубин.",
    traits: "Зубастость, хищник",
    image: "https://loremflickr.com/800/800/viperfish/all",
    traitWeights: { ugliness: 5, greed: 4, deceit: 4 },
  },
  {
    id: "ascaris",
    name: "Аскарида человеческая",
    description: "Крупный круглый червь, который может вырасти до 40 см в вашем кишечнике, вызывая боли и интоксикацию.",
    traits: "Внутренний паразит",
    image: "https://loremflickr.com/800/800/ascaris,worm/all",
    traitWeights: { greed: 5, slimy: 4, ugliness: 4 },
  },
  {
    id: "pinworm",
    name: "Острица",
    description: "Маленькие белые черви, вызывающие сильный зуд по ночам. Они легко передаются и могут заразить всю семью.",
    traits: "Навязчивость, зуд",
    image: "https://loremflickr.com/800/800/pinworm/all",
    traitWeights: { annoyance: 5, deceit: 3, greed: 3 },
  },
  {
    id: "bull-tapeworm",
    name: "Бычий цепень (солитер)",
    description: "Гигантский паразит, который может жить в человеке десятилетиями, достигая 10 метров в длину и поглощая все питательные вещества.",
    traits: "Ненасытность, длина",
    image: "https://loremflickr.com/800/800/tapeworm,long/all",
    traitWeights: { greed: 5, slimy: 3, ugliness: 5 },
  },
  {
    id: "echinococcus",
    name: "Эхинококк",
    description: "Опасный паразит, образующий в печени или легких огромные кисты, наполненные личинками. Может быть смертельно опасен.",
    traits: "Скрытая угроза, кисты",
    image: "https://loremflickr.com/800/800/echinococcus/all",
    traitWeights: { deceit: 5, ugliness: 4, greed: 4 },
  },
  {
    id: "trichinella",
    name: "Трихинелла",
    description: "Крошечный червь, попадающий в организм с плохо прожаренным мясом. Его личинки поселяются прямо в мышцах, вызывая жуткие боли.",
    traits: "Мышечный паразит",
    image: "https://loremflickr.com/800/800/trichinella/all",
    traitWeights: { greed: 4, deceit: 5, annoyance: 3 },
  },
  {
    id: "filaria",
    name: "Филярия",
    description: "Нитевидный червь, который забивает лимфатические сосуды, вызывая ужасные отеки конечностей — так называемую 'слоновую болезнь'.",
    traits: "Отечность, паразитизм",
    image: "https://loremflickr.com/800/800/filaria,worm/all",
    traitWeights: { ugliness: 5, greed: 4, deceit: 4 },
  },
  {
    id: "leucochloridium",
    name: "Лейкохлоридий парадоксальный",
    description: "Паразит, превращающий улитку в зомби. Он проникает в её усики, делая их похожими на аппетитных гусениц, чтобы привлечь птиц.",
    traits: "Манипуляция мозгом",
    image: "https://loremflickr.com/800/800/leucochloridium/all",
    traitWeights: { deceit: 5, slimy: 5, ugliness: 4 },
  },
  {
    id: "horsehair-worm",
    name: "Волосатик (конский волос)",
    description: "Тонкий, длинный червь, который живет в воде. Существует миф, что он может проникнуть в кожу человека, но на деле он паразитирует на насекомых.",
    traits: "Нитевидность, легенды",
    image: "https://loremflickr.com/800/800/horsehairworm/all",
    traitWeights: { slimy: 4, ugliness: 3, deceit: 2 },
  },
  {
    id: "guinea-worm",
    name: "Ришта",
    description: "Ужасающий подкожный червь. Чтобы его извлечь, приходится неделями наматывать его на палочку по несколько сантиметров в день.",
    traits: "Мучительность, паразит",
    image: "https://loremflickr.com/800/800/guineaworm/all",
    traitWeights: { ugliness: 5, annoyance: 5, greed: 4 },
  },
  {
    id: "toxoplasma",
    name: "Токсоплазма",
    description: "Простейшее, которое заставляет мышей терять страх перед кошками. Считается, что оно может влиять и на поведение людей.",
    traits: "Контроль разума",
    image: "https://loremflickr.com/800/800/toxoplasma/all",
    traitWeights: { deceit: 5, laziness: 2, greed: 3 },
  },
  {
    id: "naegleria",
    name: "Амёба-мозгоед",
    description: "Микроскопический убийца из теплых водоемов. Попадает в нос и проникает в мозг, вызывая практически неизлечимое воспаление.",
    traits: "Смертельная невидимость",
    image: "https://loremflickr.com/800/800/amoeba,scary/all",
    traitWeights: { deceit: 5, greed: 5, ugliness: 5 },
  },
  {
    id: "giardia",
    name: "Лямблия",
    description: "Микроскопический паразит, поселяющийся в тонком кишечнике. Вызывает расстройства пищеварения и общее истощение организма.",
    traits: "Кишечный вредитель",
    image: "https://loremflickr.com/800/800/giardia/all",
    traitWeights: { greed: 4, slimy: 3, annoyance: 4 },
  },
  {
    id: "plasmodium",
    name: "Малярийный плазмодий",
    description: "Виновник миллионов смертей. Этот паразит разрушает эритроциты в крови, вызывая приступы тяжелой лихорадки.",
    traits: "Разрушитель крови",
    image: "https://loremflickr.com/800/800/plasmodium/all",
    traitWeights: { greed: 5, deceit: 4, annoyance: 3 },
  },
  {
    id: "whipworm",
    name: "Власоглав",
    description: "Червь, который буквально 'прошивает' слизистую оболочку кишечника своим тонким передним концом, питаясь кровью.",
    traits: "Кровопийца, скрытность",
    image: "https://loremflickr.com/800/800/whipworm/all",
    traitWeights: { greed: 5, slimy: 4, ugliness: 4 },
  },
  {
    id: "hookworm",
    name: "Анкилостома",
    description: "Паразит с острыми зубами, которыми он цепляется за стенки кишечника. Может проникать в организм даже через неповрежденную кожу стоп.",
    traits: "Зубастый паразит",
    image: "https://loremflickr.com/800/800/hookworm/all",
    traitWeights: { greed: 5, deceit: 4, ugliness: 4 },
  },
  {
    id: "earthworm",
    name: "Дождевой червь",
    description: "Хотя он полезен для почвы, его скользкое, извивающееся тело вызывает у многих инстинктивную брезгливость и желание отвернуться.",
    traits: "Слизистость, извивание",
    image: "https://loremflickr.com/800/800/earthworm/all",
    traitWeights: { slimy: 5, laziness: 3, ugliness: 3 },
  },
  {
    id: "surinam-toad",
    name: "Пипа суринамская",
    description: "Жаба, у которой на спине образуются дырки, где развиваются её детеныши. Зрелище, способное вызвать трипофобию у любого.",
    traits: "Жуткое размножение",
    image: "https://loremflickr.com/800/800/toad,surinam/all",
    traitWeights: { ugliness: 5, slimy: 4, annoyance: 3 },
  },
  {
    id: "horned-frog",
    name: "Рогатая жаба",
    description: "Толстая, агрессивная жаба с огромным ртом. Она пытается проглотить всё, что движется, даже если добыча больше неё самой.",
    traits: "Прожорливость, рога",
    image: "https://loremflickr.com/800/800/hornedfrog/all",
    traitWeights: { greed: 5, ugliness: 4, annoyance: 3 },
  },
  {
    id: "skink",
    name: "Сцинк",
    description: "Ящерица с гладкой, блестящей чешуей и часто короткими лапками, из-за чего она напоминает змею. Вызывает неприятные ассоциации.",
    traits: "Змееподобность, гладкость",
    image: "https://loremflickr.com/800/800/skink/all",
    traitWeights: { slimy: 3, deceit: 3, ugliness: 2 },
  },
  {
    id: "chameleon",
    name: "Хамелеон",
    description: "Мастер маскировки с вращающимися глазами и длинным липким языком. Его непредсказуемость и странный вид пугают некоторых людей.",
    traits: "Маскировка, странность",
    image: "https://loremflickr.com/800/800/chameleon/all",
    traitWeights: { deceit: 5, laziness: 3, annoyance: 2 },
  },
  {
    id: "viper",
    name: "Гадюка",
    description: "Хладнокровная убийца с зигзагообразным узором. Её ядовитый укус и неподвижный взгляд — воплощение опасности.",
    traits: "Ядовитость, холодность",
    image: "https://loremflickr.com/800/800/viper,snake/all",
    traitWeights: { deceit: 5, annoyance: 4, greed: 2 },
  },
  {
    id: "horned-viper",
    name: "Айетола (рогатая гадюка)",
    description: "Змея с рожками над глазами, скрывающаяся в песках. Она нападает молниеносно, не оставляя жертве шансов на спасение.",
    traits: "Песчаная маскировка",
    image: "https://loremflickr.com/800/800/hornedviper/all",
    traitWeights: { deceit: 5, ugliness: 4, annoyance: 3 },
  },
  {
    id: "tokay-gecko",
    name: "Геккон токи",
    description: "Издает громкие, пугающие звуки в ночи и славится своим мертвым хватом — если он вцепится, разжать челюсти будет непросто.",
    traits: "Шумность, цепкость",
    image: "https://loremflickr.com/800/800/tokaygecko/all",
    traitWeights: { annoyance: 5, deceit: 3, ugliness: 3 },
  },
  {
    id: "salamander",
    name: "Саламандра",
    description: "Ярко окрашенное земноводное, кожа которого покрыта ядовитой слизью. В древности её считали порождением огня.",
    traits: "Слизистость, токсичность",
    image: "https://loremflickr.com/800/800/salamander/all",
    traitWeights: { slimy: 5, deceit: 3, ugliness: 3 },
  },
  {
    id: "scolopendra",
    name: "Гигантская сколопендра",
    description: "Огромная многоножка, способная охотиться на птиц и летучих мышей. Её ядовитые челюсти и множество быстрых ног — чистый кошмар.",
    traits: "Агрессия, многоногость",
    image: "https://loremflickr.com/800/800/scolopendra/all",
    traitWeights: { ugliness: 5, annoyance: 5, greed: 4 },
  },
  {
    id: "earwig",
    name: "Двухвостка (вилохвостка)",
    description: "Насекомое с устрашающими клешнями на конце брюшка. Существует миф, что они могут залезть в ухо, что добавляет им мерзости.",
    traits: "Клешни, мифы",
    image: "https://loremflickr.com/800/800/earwig/all",
    traitWeights: { annoyance: 4, ugliness: 4, deceit: 3 },
  },
  {
    id: "bearded-dragon",
    name: "Бородатая агама",
    description: "Ящерица с колючими чешуйками, которые при раздувании напоминают бороду. Её суровый вид и чешуйчатая кожа вызывают трепет.",
    traits: "Колючесть, грозный вид",
    image: "https://loremflickr.com/800/800/beardeddragon/all",
    traitWeights: { ugliness: 4, laziness: 3, annoyance: 2 },
  },
  {
    id: "rat",
    name: "Крыса (пасюк)",
    description: "Символ нечистот и болезней. Умный, но грязный грызун, который живет в канализации и может прогрызть даже бетон.",
    traits: "Живучесть, зараза",
    image: "https://loremflickr.com/800/800/rat,sewer/all",
    traitWeights: { greed: 5, deceit: 4, annoyance: 4 },
  },
  {
    id: "mouse",
    name: "Мышь",
    description: "Маленький воришка, который портит ваши запасы еды и оставляет повсюду свои экскременты. Её шорохи в темноте раздражают.",
    traits: "Воровство, плодовитость",
    image: "https://loremflickr.com/800/800/mouse,house/all",
    traitWeights: { greed: 4, annoyance: 4, deceit: 3 },
  },
  {
    id: "vampire-bat",
    name: "Летучая мышь (вампир)",
    description: "Единственное млекопитающее, питающееся исключительно кровью. Она незаметно подлетает к спящим животным и делает надрез.",
    traits: "Кровососание, полет",
    image: "https://loremflickr.com/800/800/vampirebat/all",
    traitWeights: { deceit: 5, greed: 4, ugliness: 4 },
  },
  {
    id: "shrew",
    name: "Землеройка",
    description: "Маленькое существо с бешеным метаболизмом. Она вынуждена есть постоянно, и её слюна ядовита для мелкой добычи.",
    traits: "Ненасытность, яд",
    image: "https://loremflickr.com/800/800/shrew/all",
    traitWeights: { greed: 5, annoyance: 3, laziness: 0 },
  },
  {
    id: "tasmanian-devil",
    name: "Тасманский дьявол",
    description: "Издает леденящие душу крики и обладает невероятно мощными челюстями. Его агрессивный нрав оправдывает название.",
    traits: "Ярость, вопли",
    image: "https://loremflickr.com/800/800/tasmaniandevil/all",
    traitWeights: { annoyance: 5, greed: 4, ugliness: 4 },
  },
  {
    id: "meerkat",
    name: "Сурикат",
    description: "Хотя они кажутся милыми, их жесткая социальная иерархия и привычка стоять столбиком, высматривая опасность, кажутся странными.",
    traits: "Бдительность, социальность",
    image: "https://loremflickr.com/800/800/meerkat/all",
    traitWeights: { annoyance: 2, greed: 2, deceit: 3 },
  },
  {
    id: "naked-mole-rat",
    name: "Голый землекоп",
    description: "Сморщенное, розовое и совершенно лишенное шерсти существо. Живет под землей и напоминает оживший кусок сырого мяса.",
    traits: "Уродство, долголетие",
    image: "https://loremflickr.com/800/800/nakedmolerat/all",
    traitWeights: { ugliness: 5, laziness: 2, slimy: 1 },
  },
  {
    id: "platypus",
    name: "Утконос",
    description: "Странный гибрид с клювом утки и хвостом бобра. У самцов есть ядовитые шпоры, что делает это существо еще более причудливым.",
    traits: "Странность, яд",
    image: "https://loremflickr.com/800/800/platypus/all",
    traitWeights: { ugliness: 3, deceit: 3, annoyance: 2 },
  },
  {
    id: "warthog",
    name: "Бородавочник",
    description: "Дикий кабан с уродливыми наростами на морде и торчащими клыками. Он не отличается красотой, но очень вынослив.",
    traits: "Уродство, сила",
    image: "https://loremflickr.com/800/800/warthog/all",
    traitWeights: { ugliness: 5, greed: 3, annoyance: 3 },
  },
  {
    id: "hyena",
    name: "Гиена",
    description: "Трусливый и в то же время наглый падальщик. Её жуткий смех над останками жертв — один из самых неприятных звуков в природе.",
    traits: "Падальщик, смех",
    image: "https://loremflickr.com/800/800/hyena/all",
    traitWeights: { greed: 5, deceit: 4, annoyance: 4 },
  },
  {
    id: "jackal",
    name: "Шакал",
    description: "Хитрый и осторожный зверь, который всегда ищет возможность поживиться за чужой счет, следуя за более сильными хищниками.",
    traits: "Хитрость, воровство",
    image: "https://loremflickr.com/800/800/jackal/all",
    traitWeights: { deceit: 5, greed: 5, laziness: 2 },
  },
  {
    id: "opossum",
    name: "Опоссум",
    description: "Мастер притворяться мертвым, выделяя при этом зловонный запах. Его оскаленная пасть и голый хвост вызывают неприязнь.",
    traits: "Притворство, запах",
    image: "https://loremflickr.com/800/800/opossum/all",
    traitWeights: { deceit: 5, ugliness: 4, laziness: 3 },
  },
  {
    id: "rhino-lizard",
    name: "Носороговая ящерица",
    description: "Массивная ящерица с наростами на носу, напоминающими рога. Её чешуйчатая броня и тяжелый взгляд внушают страх.",
    traits: "Бронированность, вид",
    image: "https://loremflickr.com/800/800/lizard,rhino/all",
    traitWeights: { ugliness: 4, laziness: 4, greed: 2 },
  },
  {
    id: "aye-aye",
    name: "Ай-ай (руконожка)",
    description: "Ночной примат с огромными глазами и одним аномально длинным пальцем, которым он выковыривает личинок из-под коры деревьев.",
    traits: "Ночной ужас, палец",
    image: "https://loremflickr.com/800/800/ayeaye/all",
    traitWeights: { ugliness: 5, deceit: 4, annoyance: 3 },
  },
  {
    id: "star-nosed-mole",
    name: "Звездонос",
    description: "Крот, у которого на носу 22 розовых щупальца, постоянно находящихся в движении. Выглядит как пришелец из другого мира.",
    traits: "Щупальца на носу",
    image: "https://loremflickr.com/800/800/starnosedmole/all",
    traitWeights: { ugliness: 5, slimy: 3, laziness: 2 },
  },
  {
    id: "vulture",
    name: "Гриф",
    description: "Птица, которая кружит над умирающими, ожидая своего пира. Её голая шея и любовь к разлагающемуся мясу вызывают отвращение.",
    traits: "Падальщик, смерть",
    image: "https://loremflickr.com/800/800/vulture/all",
    traitWeights: { greed: 5, ugliness: 4, laziness: 3 },
  },
  {
    id: "marabou",
    name: "Марабу",
    description: "Огромный аист с лысой головой и массивным клювом. Его часто называют птицей-гробовщиком за мрачный вид и пищевые привычки.",
    traits: "Мрачность, падаль",
    image: "https://loremflickr.com/800/800/marabou/all",
    traitWeights: { ugliness: 5, greed: 4, laziness: 3 },
  },
  {
    id: "ibis",
    name: "Ибис",
    description: "В городах превратился в 'помойную птицу', копающуюся в мусорных баках. Его длинный загнутый клюв теперь ассоциируется с отходами.",
    traits: "Мусорщик, наглость",
    image: "https://loremflickr.com/800/800/ibis,trash/all",
    traitWeights: { greed: 4, annoyance: 4, ugliness: 3 },
  },
  {
    id: "crow",
    name: "Ворона",
    description: "Слишком умная для своего вида птица, часто ассоциирующаяся со смертью и дурными предзнаменованиями. Её карканье полно зловещего смысла.",
    traits: "Интеллект, мрачность",
    image: "https://loremflickr.com/800/800/crow/all",
    traitWeights: { deceit: 5, annoyance: 4, greed: 3 },
  },
  {
    id: "ostrich",
    name: "Страус",
    description: "Огромная птица с безумными глазами и мощными ногами, способными убить льва. Его агрессия и глупый вид — странное сочетание.",
    traits: "Агрессия, глупость",
    image: "https://loremflickr.com/800/800/ostrich/all",
    traitWeights: { annoyance: 4, ugliness: 3, greed: 2 },
  },
  {
    id: "tardigrade",
    name: "Тихоходка",
    description: "Микроскопический 'водяной медведь', которого невозможно убить. Под микроскопом он выглядит как мешковатое, многоногое нечто.",
    traits: "Неубиваемость, вид",
    image: "https://loremflickr.com/800/800/tardigrade/all",
    traitWeights: { laziness: 5, ugliness: 3, deceit: 2 },
  },
  {
    id: "lingulatida",
    name: "Лингулят (языковый червь)",
    description: "Паразит, который живет в дыхательных путях и пазухах животных и людей, питаясь кровью и слизью.",
    traits: "Внутренний паразит",
    image: "https://loremflickr.com/800/800/parasite,scary/all",
    traitWeights: { slimy: 5, greed: 5, ugliness: 5 },
  },
  {
    id: "influenza",
    name: "Вирус гриппа",
    description: "Невидимый враг, который заставляет ваше тело страдать. Он захватывает ваши клетки и превращает их в фабрики по производству новых вирусов.",
    traits: "Зараза, невидимость",
    image: "https://loremflickr.com/800/800/virus,microscope/all",
    traitWeights: { deceit: 5, annoyance: 5, greed: 5 },
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Как вы относитесь к чужому успеху?",
    answers: [
      { text: "Искренне радуюсь", traitWeights: { greed: 0 } },
      { text: "Завидую молча", traitWeights: { greed: 1 } },
      { text: "Ищу подвох или недостатки", traitWeights: { deceit: 1, annoyance: 1 } },
      { text: "Считаю, что всё куплено", traitWeights: { greed: 2, annoyance: 1 } },
    ],
  },
  {
    id: 2,
    question: "Ваш идеальный способ провести выходной?",
    answers: [
      { text: "Весь день в кровати", traitWeights: { laziness: 3 } },
      { text: "Генеральная уборка", traitWeights: { ugliness: 0, laziness: 0 } },
      { text: "Поход в гости", traitWeights: { annoyance: 1 } },
      { text: "Придумывание схем заработка", traitWeights: { greed: 3 } },
    ],
  },
  {
    id: 3,
    question: "Что вы сделаете, если найдете кошелек?",
    answers: [
      { text: "Верну владельцу", traitWeights: { greed: 0, deceit: 0 } },
      { text: "Оставлю себе", traitWeights: { greed: 3, deceit: 1 } },
      { text: "Заберу деньги, кошелек выкину", traitWeights: { greed: 3, deceit: 2 } },
      { text: "Пройду мимо", traitWeights: { laziness: 1 } },
    ],
  },
  {
    id: 4,
    question: "Ваше отношение к личной гигиене?",
    answers: [
      { text: "Принимаю душ дважды в день", traitWeights: { slimy: 0, ugliness: 0 } },
      { text: "Моюсь по праздникам", traitWeights: { slimy: 2, ugliness: 2 } },
      { text: "Считаю, что естественный запах — лучший", traitWeights: { slimy: 3, ugliness: 3 } },
      { text: "Иногда забываю почистить зубы", traitWeights: { slimy: 1, ugliness: 1 } },
    ],
  },
  {
    id: 5,
    question: "Как вы ведете себя в споре?",
    answers: [
      { text: "Спокойно аргументирую", traitWeights: { annoyance: 0 } },
      { text: "Перехожу на личности", traitWeights: { annoyance: 3 } },
      { text: "Соглашаюсь, но остаюсь при своем", traitWeights: { deceit: 2 } },
      { text: "Ухожу от разговора", traitWeights: { laziness: 1 } },
    ],
  },
  {
    id: 6,
    question: "Как вы относитесь к правилам в обществе?",
    answers: [
      { text: "Всегда соблюдаю их", traitWeights: { deceit: 0 } },
      { text: "Соблюдаю только те, что мне выгодны", traitWeights: { greed: 2, deceit: 1 } },
      { text: "Ищу лазейки, чтобы обойти их", traitWeights: { deceit: 3, slimy: 2 } },
      { text: "Правила? Я их даже не читал", traitWeights: { laziness: 3, annoyance: 2 } },
    ],
  },
  {
    id: 7,
    question: "Ваш идеальный вечер?",
    answers: [
      { text: "Активный отдых или учеба", traitWeights: { laziness: 0 } },
      { text: "Просто лежать и ничего не делать", traitWeights: { laziness: 3 } },
      { text: "В шумной компании, где я в центре внимания", traitWeights: { annoyance: 2 } },
      { text: "Планировать, как захватить мир (или хотя бы премию)", traitWeights: { deceit: 2, greed: 3 } },
    ],
  },
  {
    id: 8,
    question: "Что вы чувствуете, когда видите чужой успех?",
    answers: [
      { text: "Искреннюю радость за человека", traitWeights: { greed: 0 } },
      { text: "Легкую зависть, которая мотивирует", traitWeights: { greed: 1 } },
      { text: "Раздражение, почему не я?", traitWeights: { greed: 3, annoyance: 1 } },
      { text: "Начинаю искать недостатки в его успехе", traitWeights: { deceit: 2, annoyance: 2 } },
    ],
  },
  {
    id: 9,
    question: "Как вы описываете свою внешность?",
    answers: [
      { text: "Красавец/Красавица", traitWeights: { ugliness: 0 } },
      { text: "Обычный человек", traitWeights: { ugliness: 1 } },
      { text: "Своеобразная и пугающая", traitWeights: { ugliness: 3 } },
      { text: "Главное — что внутри (а внутри мрак)", traitWeights: { ugliness: 2, deceit: 2 } },
    ],
  },
  {
    id: 10,
    question: "Если бы вы были суперзлодеем, какая была бы ваша цель?",
    answers: [
      { text: "Мировое господство", traitWeights: { greed: 3, deceit: 2 } },
      { text: "Просто мелко пакостить всем вокруг", traitWeights: { annoyance: 3, deceit: 1 } },
      { text: "Жить в роскоши и ничего не делать", traitWeights: { laziness: 3, greed: 2 } },
      { text: "Стать самым страшным и отвратительным", traitWeights: { ugliness: 3, slimy: 2 } },
    ],
  }
];

export function calculateResult(answers: Record<number, number>): Creature {
  const userTraits: Record<TraitId, number> = {} as Record<TraitId, number>;

  // 1. Собираем суммарные веса черт пользователя на основе ответов
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const question = quizQuestions.find((q) => q.id === Number(questionId));
    if (question) {
      const answer = question.answers[answerIndex];
      if (answer) {
        Object.entries(answer.traitWeights).forEach(([trait, weight]) => {
          const traitId = trait as TraitId;
          userTraits[traitId] = (userTraits[traitId] || 0) + (weight || 0);
        });
      }
    }
  });

  // Вспомогательная функция для расчета косинусного сходства между двумя векторами весов
  const getSimilarity = (
    vecA: Partial<Record<TraitId, number>>,
    vecB: Partial<Record<TraitId, number>>
  ) => {
    const allTraits = Array.from(new Set([...Object.keys(vecA), ...Object.keys(vecB)])) as TraitId[];
    
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    allTraits.forEach((trait) => {
      const valA = vecA[trait] || 0;
      const valB = vecB[trait] || 0;
      dotProduct += valA * valB;
      magnitudeA += valA * valA;
      magnitudeB += valB * valB;
    });

    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);

    if (magnitudeA === 0 || magnitudeB === 0) return 0;
    return dotProduct / (magnitudeA * magnitudeB);
  };

  // 2. Сравниваем профиль пользователя с каждым существом
  let bestMatch = creatures[0];
  let maxSimilarity = -1;

  creatures.forEach((creature) => {
    const similarity = getSimilarity(userTraits, creature.traitWeights);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = creature;
    }
  });

  return bestMatch;
}
