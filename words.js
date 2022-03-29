const wordList = [
    ['sweep', 'to move, especially quickly and powerfully'],
    ['crack', 'to break something so that it does not separate, but very thin lines appear on its surface, or to become broken in this way'],
    ['enemy', 'a country, or the armed forces of a country, that is at war with another country'],    
['enemy',	'a person who hates or opposes another person and tries to harm them or stop them from doing something'],
['obviously',	'in a way that is easy to understand or see'],
['pretend',	'to behave as if something is true when you know that it is not, especially in order to deceive people or as a game'],
['convinced',	'certain'],
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
['roar', 'with sth	to express an emotion, such as laughter or anger, noisily'],
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
['slip',	'to slide by accident and fall or almost fall']
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

/*
const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');


speakEl.addEventListener('click', speakText);




  
function speakText() {
  
  window.speechSynthesis.cancel();

 
  let text = wordList[count][0];
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const lastVoice = voices[1]; // заменить голос
  utterance.voice = lastVoice;
  utterance.rate = 0.5;        //скорость
  
 
  window.speechSynthesis.speak(utterance);
}*/

const textEl = document.getElementById('text');
const voiceInEl = document.getElementById('voice');
const pitchInEl = document.getElementById('pitch');
const rateInEl = document.getElementById('rate');
const volumeInEl = document.getElementById('volume');
const pitchOutEl = document.querySelector('output[for="pitch"]');
const rateOutEl = document.querySelector('output[for="rate"]');
const volumeOutEl = document.querySelector('output[for="volume"]');
const speakEl = document.getElementById('speak');

// add UI event handlers
pitchInEl.addEventListener('change', updateOutputs);
rateInEl.addEventListener('change', updateOutputs);
volumeInEl.addEventListener('change', updateOutputs);
speakEl.addEventListener('click', speakText);

// update voices immediately and whenever they are loaded
updateVoices();
window.speechSynthesis.onvoiceschanged = updateVoices;

function updateOutputs() {
  // display current values of all range inputs
  pitchOutEl.textContent = pitchInEl.value;
  rateOutEl.textContent = rateInEl.value;
  volumeOutEl.textContent = volumeInEl.value;
}

function updateVoices() {
  // add an option for each available voice that isn't already added
  window.speechSynthesis.getVoices().forEach(voice => {
    const isAlreadyAdded = [...voiceInEl.options].some(option => option.value === voice.voiceURI);
    if (!isAlreadyAdded) {
      const option = new Option(voice.name, voice.voiceURI, voice.default, voice.default);
      voiceInEl.add(option);
    }
  });
}

function speakText() {
  // stop any speaking in progress
  window.speechSynthesis.cancel();

  // create new utterance with all the properties
  const text = wordList[count][0];
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
  utterance.pitch = pitchInEl.value;
  utterance.rate = rateInEl.value;
  utterance.volume = volumeInEl.value;
  
  // speak that utterance
  window.speechSynthesis.speak(utterance);
}


const setting = document.querySelector('.setting');
const properties = document.querySelector('.properties');
 

setting.addEventListener('click', () => {
    
    properties.style.display === 'none'? properties.style.display = 'block': properties.style.display = 'none';
})