const wordList = [
    ['sweep', 'to move, especially quickly and powerfully'],
    ['crack', 'to break something so that it does not separate, but very thin lines appear on its surface, or to become broken in this way'],      
['enemy',	'a person who hates or opposes another person and tries to harm them or stop them from doing something'],
['obviously',	'in a way that is easy to understand or see'],
['pretend',	'to behave as if something is true when you know that it is not, especially in order to deceive people or as a game'],
['convinced',	'completely certain about something'],
['relive', 'to remember clearly an experience that happened in the past'],
['dunno',	'short form of I don\'t know'],
['magnificent',	'very good, beautiful, or deserving to be admired'],
['eerie',	'strange in a frightening and mysterious way'],
['thought',	'past simple and past participle of think'],
['though',	'but'],
['cheat',	'to behave in a dishonest way in order to get what you want'],
['disgusting',	'extremely unpleasant or unacceptable'],
['obvious',	'easy to see, recognize, or understand'],
['rage', '(a period of) extreme or violent anger'],
['roar with sth', 'to express an emotion, such as laughter or anger, noisily'],
['roar',	'to make a long, loud, deep sound'],
['rare',	'not common or frequent; very unusual'],
['yell',	'to shout something or make a loud noise, usually when you are angry, in pain, or excited'],
['glimpse',	'an occasion when you see something or someone for a very short time'],
['swoop',	'to move very quickly and easily through the air, especially down from a high position in order to attack'],
['indeed',	'really or certainly, often used to emphasize something'],
['backward',	'not advanced'],
['doorknob',	'a round handle that you turn to open a door'],
['nightmare',	'a very upsetting or frightening dream'],
['sleeve',	'the part of a piece of clothing that covers some or all of the arm'],
['snarl',	'(especially of dogs) to make a deep, rough sound while showing the teeth, usually in anger or (of people) to speak or say something angrily and forcefully'],
['moan',	'to make a long, low sound of pain, suffering, or another strong emotion'],
['assemble',	'to make something by joining separate parts'],
['assemble',	'to come together in a single place or bring parts together in a single group'],
['struggle',	'to experience difficulty and make a very great effort in order to do something'],
['borrow',	'to get or receive something from someone with the intention of giving it back after a period of time'],
['ruin',	'to spoil or destroy something completely'],
['adorable',	'charming, attractive, and easily loved'],
['blink',	'When you blink, you close and then open your eyes quickly once or several times, and when an eye blinks, it does this'],
['limp',	'to walk slowly and with difficulty because of having an injured or painful leg or foot'],
['gullible',	'easily deceived or tricked, and too willing to believe everything that other people say'],
['otherwise',	'used after an order or suggestion to show what the result will be if you do not follow that order or suggestion'],
['care',	'the process of protecting someone or something and providing what that person or thing needs'],
['scallywag',	'someone, especially a child, who has behaved badly but who is still liked'],
['journal',	'a serious magazine or newspaper that is published regularly about a particular subject'],
['journal',	'a written record of what you have done each day, sometimes including your private thoughts and feelings'],
['goodness',	'the personal quality of being morally good'],
['at issue', 'most important in what is being discussed'],
['issue',	'a subject or problem that people are thinking and talking about'],
['at least',	'used to reduce the effect of a statement'],
['come up with sth',	'to suggest or think of an idea or plan'],
['so far',	'at this particular time'],
['whole',	'complete or not divided'],
['make a difference',	'to improve a situation'],
['moderate',	'neither small nor large in size, amount, degree, or strength'],
['vigorous',	'very forceful or energetic'],
['employ',	'to have someone work or do a job for you and pay them for it'],
['engage',	'to employ someone'],
['reduce',	'to become or to make something become smaller in size, amount, degree, importance, etc'],
['seal',	'a large mammal that eats fish and lives partly in the sea and partly on land or ice'],
['lean',	'to (cause to) slope in one direction, or to move the top part of the body in a particular direction'],
['irresistible',	'impossible to refuse, oppose, or avoid because it is too pleasant, attractive, or strong'],
['behold',	'to see or look at someone or something'],
['quit',	'to stop doing something or leave a job or a place'],
['increase',	'to (make something) become larger in amount or size'],
['drum up sth',	'to try to increase business activity or get support for something'],
['beware',	'used to warn someone to be very careful about something or someone'],
['discourse',	'communication in speech or writing'],
['conversation',	'(a) talk between two or more people in which thoughts, feelings, and ideas are expressed, questions are asked and answered, or news and information is exchanged'],
['require',	'to need something or make something necessary'],
['flow',	'(especially of liquids, gases, or electricity) to move in one direction, especially continuously and easily'],
['upset',	'to make someone worried, unhappy, or angry'],
['slightly',	'a little'],
['distinguish',	'to notice or understand the difference between two things, or to make one person or thing seem different from another'],
['throughout',	'in every part, or during the whole period of time'],
['whereas',	'compared with the fact that; but'],
['precisely',	'exactly'],
['convenient',	'suitable for your purposes and needs and causing the least difficulty'],
['complaining',	'the act of saying that something is wrong or not satisfactory'],
['merely',	'used to emphasize that you mean exactly what you are saying and nothing more'],
['fairness', 'the quality of treating people equally or in a way that is right or reasonable'],
['justice',	'behaviour or treatment that is fair and morally correct'],
['poll',	'a study in which people are asked for their opinions about a subject or person'],
['probe',	'to try to discover information that other people do not want you to know, by asking questions carefully and not directly'],
['riddle',	'a type of question that describes something in a difficult and confusing way and has a clever or funny answer, often asked as a game'],
['threat',	'a suggestion that something unpleasant or violent will happen, especially if a particular action or order is not followed'],
['keen',	'very interested, eager, or wanting (to do) something very much'],
['terrified',	'very frightened'],
['calm',	'without hurried movement or noise'],
['irritated',	'annoyed'],
['reject',	'to refuse to accept, use, or believe something or someone'],
['full stop',	'the symbol . used in writing at the end of a sentence or at the end of the short form of a word'],
['refuse',	'to say that you will not do or accept something'],
['hurt',	'to feel pain in a part of your body, or to injure someone or cause them pain'],
['apologize',	'to tell someone that you are sorry for having done something that has caused problems or unhappiness for them'],
['lad',	'a boy or young man'],
['bite',	'to use your teeth to cut into something or someone'],
['pout',	'to push the lower lip forward to show you are annoyed, or to push both lips forward in a sexually attractive way'],
['chase',	'to hurry after someone or something in order to catch him, her, or it'],
['I beg your pardon',	'a polite way of saying "I am sorry" or "Could you repeat what you just said?"'],
['advisable',	'If something is advisable, it will avoid problems if you do it'],
['dishonest',	'not honest'],
['orphanage', 'a home for children whose parents are dead or unable to care for them'],
['case',	'a particular situation or example of something'],
['slip',	'to slide by accident and fall or almost fall'],
['a regret', 'сожаление'],
['fearfully', 'страшно'],
['a loony', 'полоумный'],
['a plank', 'доска'],
['illiterate', 'неграмотный'],
['a climber', 'альпинист'],
['completely', 'полностью'],
['goodly', 'красивый'],
['a crutch', 'опора'], 
['a syllable', 'слог'],
['a torture', 'пытка'],
['run out of', 'израсходовать'],
['typical of', 'типичный для'],
['at least', 'по крайней мере'],
['the other side', 'другая жизнь'],
['be at someone\'s feet', 'быть у чьих-то ног'],
['be supposed to','быть должным (сделать что-либо)'],
['they say', 'говорят'],
['go over', 'обсуждать'],
['take for granted', 'принимать как должное'],
['throw on', 'надевать'], 
['so far', 'на сегодняшний момент'], 
['lose touch', 'потерять связь'], 
['a rake', 'грабли'],

['peculiar',
'своеобразный'],

['to patch',
'латать'],

['to bewitch',
'заколдовывать'],

['mainly',
'главным образом'],

['to lead',
'приводить'],

['youth',
'молодость'],

['young',
'молодой'],

['a yard',
'двор'],
['in the middle of',
'посреди'],
['fish out of water',
'не в своей тарелке'],
['leave to chance',
'предоставить дело случаю'],
['nothing but',
'only.'],
['long for',
'тосковать'],
['ergo',
'следовательно'],
['run into',
'натыкаться'],
['be here to stay',
'войти во всеобщее употребление'],
['check out',
'выселяться'],
['turn on',
'включать'],
['look after',
'присматривать'],
['an egis',
'защита'],
['used to',
'раньше'],
['be off',
'удаляться'],
['break up',
'разрывать отношения'],
['stay on',
'оставаться'],
['be supposed to',
'быть должным (сделать что-либо)'],
['not half',
'совсем не'],
['break down',
'ломаться'],
['this way',
'таким образом'],
['watch out',
'быть осторожным'],
['a tyre',
'шина'],
['tabby',
'полосатый'],
['out there',
'где-то там'],
['check in',
'регистрироваться'],
['write down',
'записывать'],
['work out',
'тренироваться'],
['get along with',
'ладить'],
['fall apart',
'разваливаться на части'],
['look up',
'искать'],
['a coiner', 'фальшивомонетчик'],
['on and on', 'снова и снова'],
['To abolish',	'Отменять, уничтожать, упразднять'],
['To approve',	'Утвердить, одобрить'],
['To boast',	'Гордиться, хвастаться'],
['To contribute',	'Жертвовать, вносить свой вклад'],
['To deliver',	'Доставлять, поставлять, приносить'],
['To descend',	'Спуститься, сходить, снизойти'],
['To concentrate',	'Сосредотачиваться'],
['To distract',	'Отвлечь, отвлекать'],
['To torture',	'Мучить, терзать'],
['To confuse',	'Путать, запутать, сбить с толку'],
['To abandon',	'Покинуть, бросить, оставить'],
['To escape',	'Совершить побег, убежать, сбежать'],
['To distribute',	'Распространять, распределить'],
['To elaborate',	'Разрабатывать, прорабатывать'],
['To construct',	'Строить, построить'],
['To humiliate',	'Унижать'],
['To maintain',	'Поддерживать'],
['To squeeze', 'Сжимать, выжимать, сжать'],
['To delegate',	'Делегировать, посылать'],
['To transfer',	'Передавать, перечислять'],
['To employ',	'Нанимать, использовать, работать'],
['To catch','Поймать, ловить'],
['To commit',	'Совершить, зафиксировать, поручить'],
['To arrange',	'Организовать, устроить'],
['To implement',	'Внедрить, реализовать, осуществить'],
['To insulate',	'Ограждать'],
['To encourage',	'Стимулировать'],
['To foster',	'Поощрять'],
['To boost',	'Повышать'],
['To optimize',	'Оптимизировать'],
['To rank',	'Ранжировать'],
['To identify',	'Определить, идентифицировать'],
['To empower',	'Наделить полномочиями, расширять'],
['To ensure',	'Обеспечить, убедить, гарантировать'],
['To accomplish',	'Выполнить, завершить, осуществить'],
['To customize',	'Настроить, сделать'],
['To localize',	'Локализовать, определить'],
['To tailor',	'Приспособить'],
['To validate',	'Удостоверять'],
['To reserve','Резервировать'],
['To estimate',	'Оценивать'],
['To consulate',	'Консультировать'],
['To regard', 'Рассматривать, учитывать, относиться'],
['To indicate',	'Указывать, обозначать, показывать'],
['To unify',	'Объединять'],
['To digitalize',	'Оцифровать, перевести в online-формат'],
['To expose',	'Подвергать'],
['To idealize',	'Идеализировать'],
['To navigate',	'Ориентироваться'],
['To sustain',	'Выдерживать'],
['To constrain',	'Сдерживать'],
['To evade',	'Обойти'],
['To purchase',	'Приобретать'],
['To earn',	'Зарабатывать'],
['To make sure',	'Убедиться'],
['To prototype',	'Создать протопит, план'],
['To endeavour',	'Стремиться'],
['To blend',	'Смешивать'],
['To prioritize',	'Расставить приоритеты'],
['To mitigate',	'Смягчать, принимать'],
['To emphasize',	'Подчеркнуть, придать акцент'],
['To observe',	'Наблюдать, замечать'],
['To evolve',	'Развиваться, расти, проявляться'],
['To incentivize',	'Стимулировать, побуждать'],
['To respond',	'Реагировать, отвечать'],
['To connect',	'Соединить'],
['To command',	'Командовать',]
['To check-out',	'Проверить, ,оформить'],
['To extend',	'Продлить, расширить, увеличить'],
['To retain',	'Оставить, удержать, сохранить'],
['To exhibit',	'Показывать'],
['To invent',	'Изобретать'],
['To abridge',	'Ограничивать'],
['To self-express',	'Самовыражаться'],
['To neglect',	'Пренебрегать'],
['To negotiate',	'Договариваться, вести переговоры'],
['To upgrade',	'Повышать, улучшать'],
['To renew',	'Обновить'],
['To specialize',	'Специализироваться'],
['To balance',	'Уравновешивать'],
['To absorb',	'Поглощать'],
['To overwhelm',	'Переполнять'],
['To align',	'Выравнивать'],
['To withdraw',	'Отстраниться'],
['To whistle',	'Свистеть'],
['To suspect',	'Подозревать'],
['To surrender',	'Сдаваться'],
['To depend on',	'Зависеть от'],
['To correct',	'Исправлять'],
['To define',	'Определить'],
['To visualize',	'Визуализировать'],
['To design',	'Проектировать'],
['To minimize',	'Минимизировать'],
['To disturb',	'Нарушить, беспокоить'],
['To integrate',	'Интегрировать'],
['To exchange',	'Обменивать, менять'],
['Toorganize',	'Организовать'],
['To collaborate',	'Сотрудничать'],
['To embed',	'Встраивать'],
['To generate',	'Генерировать'], 
['addiction',	'Зависимость, пристрастие']
['amateur',	'Любитель'],
['ambivalence',	'Нерешительность'], 
['commission',	'Комиссия, поручение, заказчик'],
['confidence', 'Доверие, уверенность, достоверность'],
['craving',	'Желание, тяга, стремление, жажда'],
['district',	'Район'],
['evidence',	'Доказательство, признак, факт'],
['honesty',	'Честность'],
['circumstance',	'Обстоятельство, случай, событие'],
['kindness',	'Доброта'],
['justice',	'Справедливость'],
['disgust','	Отвращение, брезгливость'],
['А suggestion',	'Предложение, суждение, идея'],
['А nobility',	'Благородство, достоинство'],
['commotion',	'Суета'],
['adherence',	'Приверженность'],
['devotion',	'Преданность'],
['enticement',	'Приманка, соблазн, заманивание'],
['attractiveness',	'Привлекательность'],
['freedom-loving',	'Свободолюбие'],
['rebel',	'Бунтарь'],
['influence',	'Влияние'],
['sway',	'Колебание'],
['willpower',	'Сила воли'],
['inequality',	'Неравенство']

/*
'А violence'	Насилие, жестокость
'А bullying'	Издевательство, травля
'А godliness'	Благочестие, бодрость
'А compassion'	Сострадание
'inclusivity	Инклюзивность'
'А reciprocity'	Взаимность, обоюдность
'friskiness	Игривость', раскованность, живость
'fervor	Пылкость', задор, рвение
'А youth'	Молодежь, юноша, молодость
'adolescence	Подростковый' возраст, отрочество
'А prerequisite'	Предпосылка, условие
'fortune	Судьба', удача, желание, успех
'А Stubbornness'	Упрямость
'disappointment'	Разочарование
'distancing'	Дистанцирование
'isolation'	Изоляция
'self-care'	Забота о себе
'medication'	Лекарство
'celebration'	Мероприятие
'physician'	Врач, доктор, терапевт
'treatment'	Лечение
'improvement'	Улучшение
'symptom'	Симптом
'dismay'	Огорчение
'cancellation'	Отмена
'suspiciousness'	Подозрительность
'escalation'	Обострение, эскалация
'proceeding'	Разбирательство
'awareness'	Осознание
'responsibility'	Ответственность
'aftermath'	Последствие
'weakness'	Слабость
'rivalry'	Соперничество, противостояние
'restlessness'	Беспокойство
'uncertainty'	Неуверенность, неопределенность
'stress' resistance	Стрессоустойчивость
'conscience'	Совесть
'А mindfulness'	Внимательность, мышление, осознанность
'protection'	Защита, протекция
'referral'	Направление
'hopelessness'	Безнадежность
'reliability'	Надежность
'verification'	Проверка
'self-isolation'	Самоизоляция
'А provocation' Провокация
'prevention'	Профилактика
'side effect'	Побочный эффект
'vaccination'	Вакцинация
'immunization'	Иммунизация
'contradiction'	Противоречие
'emotion'	Эмоция
'disagreement'	Разногласие
'misunderstanding'	Недоразумение, недопонимание
'negotiation'	Переговоры
'downfall'	Падение, упадок, крах, понижение
'А setback'	Неудача, провал
'А bad luck'	Невезение, несчастье
'depression'	Депрессия
'А solitude'	Одиночество
'А self-blame'	Самобичевание
'А disorder'	Расстройство, разлад
'А instability'	Нестабильность
'А challenge'	Вызов, сложность
'А sustainability'	Устойчивость, жизнеспособность
'duration'	Продолжительность
'А luckiness'	Удачливость, везение
'А fluke'Случайность, шанс
'А winning'	Выигрыш, победа, завоевание
'lottery'	Лотерея
'destination'	Предназначение
'advantage'	Преимущество
'win'-win	Победа, выигрыш
'condition'	Условие, обстоятельство, состояние
'contest'	Соревнование, борьба, конкурс
'А humbleness'	Смирение, скромность, покорность
'А fearlessness'	Бесстрашие
'А hardening'	Закалка, твердость
'А buoyancy'	Оживленность, жизнелюбие
'А cheerfulness'	Жизнерадостность, веселость
'А hospitality'	Гостеприимство, радушие
'А pessimism'	Пессимизм
'А morale'	Мораль, дух, нрав, мужество
'А wisdom'	Мудрость
'А proficiency'	Мастерство, умение, квалификация
'applicant'	Претендент, соискать, заявитель
'А decisiveness'	Решительность
'А loophole'	Лазейка, дыра
'А frustration'	Фрустрация, разочарование
'А knowledge'	Знание, познание
'А decision-making'	Принятие решения
'alacrity'	Аккуратность, активность, стремительность
'extremity'	Крайность, упорство, чрезмерность
'А background'	Фон, предпосылка
'А preparatory'	Подготовка
'Arrogant'	Высокомерный, заносчивый
'Civilian'	Гражданский
'Commercial'	Коммерческий
'Convenient'	Удобный
'Creative'	Креативный, творческий
'Naughty'	Озорной, шаловливый
'Stationary'	Стационарный
'Valuable'	Ценный
'Significant'	Значительный, существенный
'Foremost'	Передовой, основной, главный
'Recent'	Недавний
'Updated'	Обновленный
'Operational'	Оперативный, рабочий, действующий
'Intuitive'	Интуитивно понятный, интуитивный
'Essential'	Существенный, важный
'Numerous'	Многочисленный
'Compliant'	Соответствующий
'Straightforward'	Прямой, прямолинейный
'Understandable'	Понятный, доступный
'Uncompromising'	Беспрекословный
'Distinguished'	Выдающийся, уважаемый, отличительный
'Separate'	Отдельный
'Outstanding'	Незаурядный
'Principal'	Принципиальный, главный
'Leading'	Ведущий, лидирующий
'Cognitive'	Когнитивный, познавательный
'Cutting-edge'	Современный, новейший
'Precise'	Точный, четкий
'Unmatched'	Неповторимый, непревзойденный
'Reasonable'	Разумный, целесообразный
'Fundamental'	Основополагающий
'Brilliant'	Блестящий, гениальный
'Inflexible'	Несгибаемый, непогрешимый
'Crucial'	Решающий, критический, важный
'Contemporary'	Современный, актуальный
'Duplicated'	Дублированный
'Tedious'	Утомительный, кропотливый, надоедливый
'Multiple'	Множественный, многочисленный
'Individual'	Личный, индивидуальный
'Fitting'	Подходящий
'Monotonous'	Монотонный, однообразный
'Ruthless'	Бесчеловечный
'Multi'-channel	Многоканальный
'Astonishing'	Удивительный, изумительный
'Ambitious'	Амбициозный, честолюбивый
'Captivating'	Захватывающий, завораживающий
'Profound'	Глубокомысленный
'Qualified'	Квалифицированный
'Remarkable'	Замечательный, примечательный, выдающийся
'Additional'	Дополнительный
'Burning'	Горящий, жгучий
'Unassuming'	Непритязательный
'Meaningful'	Значимый, осмысленный
'Private'	Личный, частный
'Careful'	Бережный, осторожный
'Obscure'	Наблюдательный, непонятный
'Accomplished'	Состоятельный, успешный, достигнутый
'Ridiculous'	Нелепый, смешной
'Contemptuous'	Презрительный
'Fashionable'	Модный
'Invariably'	Неизменно
'Intermittently'	Иногда
'Infrequently'	Редко
'Predominantly'	Постоянно
'Elsewhere'	Где-нибудь
'Scarcely'	Едва
'Otherwise'	Иначе
'Quickly'	Быстро
'Quietly'	Спокойно, тихо
'Moreover'	Более того
'Nevertheless'	Тем не менее
'Somewhat'	До некоторой степени
'Cheerfully'	Весело
'Clumsily'	Неуклюже
'In vain'	Напрасно
'At once'	Немедленно
'Casually'	Случайно
'Since that'	С тех пор
'By all means'	Во что бы то ни стало
'Readily'	'Охотно'
'Outside'	'Снаружи'
'Besides'	Кроме того
'Once'	'Однажды'
'However'	Однако, как бы ни
'Yet'	Еще, до сих пор
'Foolishly'	Глупо, по глупости
'Clearly'	'Очевидно'
'Actually'	В общем, вообще-то
'Completely'	Совершенно, абсолютно
'Extremely'	'Безумно'
'Nearby'	Рядом, неподалеку
'Unmistakable'	'Безошибочно'
'Accurately'	'Точно'
'Definitely'	'Абсолютно'
'Relentlessly'	'Безостановочно'
'Incredibly'	Невероятно, очень, неимоверно
'Decidedly'	'Решительно'
'Firmly'	'Уверенно'
'Carelessly'	'Беспечно'
['Nevertheless',	'Тем не менее']

*/
]

const wordRu = document.querySelector('.word_ru');
const wordEn = document.querySelector('.word_en');
const memoryCard = document.querySelector('.memory-card');
let count = 0;

function translate() {
    wordEn.style.display === 'block'? wordEn.style.display = 'none': wordEn.style.display = 'block';
    wordRu.style.display === 'none'? wordRu.style.display = 'block':wordRu.style.display = 'none';    
}

memoryCard.addEventListener('click', translate);


const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const numbersWord = document.querySelector('.numbersWord');

function nextWord() {  
    wordEn.style.display = 'block';
    wordRu.style.display = 'none'; 
    count++;  
    if(count == wordList.length ) {
        count = 0;   
    }
    
    numbersWord.innerHTML = `<p>${count + 1} out of ${wordList.length}</p>`;
    wordEn.innerHTML = `<p>${wordList[count][0]}</p>`;
    wordRu.innerHTML = `<p>${wordList[count][1]}</p>`;  
  
}

function prevWord() {
    wordEn.style.display = 'block';
    wordRu.style.display = 'none';  
    count--;      
    if(count < 0 ) {   
    count = wordList.length - 1;  
    numbersWord.innerHTML = `<p>${count +1} out of ${wordList.length}</p>`;       
    wordEn.innerHTML = `<p>${wordList[count][0]}</p>`;
    wordRu.innerHTML = `<p>${wordList[count][1]}</p>`;  
    count = wordList.length - 1; 
 
    }    
    numbersWord.innerHTML = `<p>${count +1} out of ${wordList.length}</p>`;       
    wordEn.innerHTML = `<p>${wordList[count][0]}</p>`;
    wordRu.innerHTML = `<p>${wordList[count][1]}</p>`;    
    
}



next.addEventListener('click', nextWord);
prev.addEventListener('click', prevWord);



const textEl = document.getElementById('text');
const voiceInEl = document.getElementById('voice');
const pitchInEl = document.getElementById('pitch');
const rateInEl = document.getElementById('rate');
const volumeInEl = document.getElementById('volume');
const pitchOutEl = document.querySelector('output[for="pitch"]');
const rateOutEl = document.querySelector('output[for="rate"]');
const volumeOutEl = document.querySelector('output[for="volume"]');
const speakEl = document.getElementById('speak');


pitchInEl.addEventListener('change', updateOutputs);
rateInEl.addEventListener('change', updateOutputs);
volumeInEl.addEventListener('change', updateOutputs);
speakEl.addEventListener('click', speakText);


updateVoices();
window.speechSynthesis.onvoiceschanged = updateVoices;

function updateOutputs() {
 
  pitchOutEl.textContent = pitchInEl.value;
  rateOutEl.textContent = rateInEl.value;
  volumeOutEl.textContent = volumeInEl.value;
}

function updateVoices() {
  
  window.speechSynthesis.getVoices().forEach(voice => {
    const isAlreadyAdded = [...voiceInEl.options].some(option => option.value === voice.voiceURI);
    if (!isAlreadyAdded) {
      const option = new Option(voice.name, voice.voiceURI, voice.default, voice.default);
      voiceInEl.add(option);
    }
  });
}

function speakText() {
  
  window.speechSynthesis.cancel();

  
  const text = wordList[count][0];
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
  utterance.pitch = pitchInEl.value;
  utterance.rate = rateInEl.value;
  utterance.volume = volumeInEl.value;
  
 
  window.speechSynthesis.speak(utterance);
}


const setting = document.querySelector('.setting');
const properties = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
 

setting.addEventListener('click', () => {
    
    properties.style.display === 'none'? properties.style.display = 'block': properties.style.display = 'none';
    overlay.style.display === 'none'? overlay.style.display = 'block': overlay.style.display = 'none';
});


close.addEventListener('click', () => {
  properties.style.display = 'none';
    overlay.style.display = 'none';
});