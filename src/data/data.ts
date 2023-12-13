type Data = {
  id: number;
  question: string;
  answers: { option: string; isCorrect: boolean }[];
}[];

const questionsData: Data = [
  {
    id: 1,
    question: "Which sentence is grammatically correct?",
    answers: [
      { option: "I goed to the store yesterday", isCorrect: false },
      { option: "I went to the store yesterday.", isCorrect: true },
    ],
  },
  {
    id: 2,
    question: "which word is a pronoun?",
    answers: [
      { option: "House", isCorrect: false },
      { option: "He", isCorrect: true },
    ],
  },
  {
    id: 3,
    question:
      'Choose the correct form of the verb to complete the sentence: "She _____ to the party last night."',
    answers: [
      { option: "Goed", isCorrect: false },
      { option: "Went", isCorrect: true },
    ],
  },
  {
    id: 4,
    question: "Which sentence contains a subject-verb agreement error?",
    answers: [
      { option: "The dogs barks loudly.", isCorrect: false },
      { option: "The dogs bark loudly.", isCorrect: true },
    ],
  },

  {
    id: 5,
    question:
      'Choose the correct possessive form of the noun: "The car belongs to John."',
    answers: [
      { option: "Johns'.", isCorrect: false },
      { option: "John's.", isCorrect: true },
    ],
  },

  {
    id: 6,
    question: "Which sentence is punctuated correctly?",
    answers: [
      {
        option: "I love to swim, play tennis and ride bikes",
        isCorrect: false,
      },
      {
        option: "I love to swim, play tennis, and ride bikes.",
        isCorrect: true,
      },
    ],
  },

  {
    id: 7,
    question:
      'Choose the correct word to complete the sentence: "I have _____ apples."',
    answers: [
      { option: "Much", isCorrect: false },
      { option: "Many", isCorrect: true },
    ],
  },

  {
    id: 8,
    question: "Which sentence is in the passive voice",
    answers: [
      { option: "The cat chased the mouse", isCorrect: false },
      { option: "The mouse was chased by the cat.", isCorrect: true },
    ],
  },

  {
    id: 9,
    question:
      'Choose the correct form of the adjective to complete the sentence: "This is the _____ day of my life."',
    answers: [
      { option: "Good", isCorrect: false },
      { option: "Best", isCorrect: true },
    ],
  },

  {
    id: 10,
    question: "Which word is a conjunction?",
    answers: [
      { option: "Quick", isCorrect: false },
      { option: "And", isCorrect: true },
    ],
  },
];

export default questionsData;

// Choose the correct form of the verb to complete the sentence: "They _____ to the movies last night."
//       a) Goed
//       b) Went

// Which sentence contains a comma splice?
//       a) I like to swim in the ocean, and I enjoy hiking in the mountains.
//       b) I like to swim in the ocean, I enjoy hiking in the mountains.

// Choose the correct word to complete the sentence: "I am _____ tired to go out tonight."
//       a) To
//       b) Too

// Which sentence is grammatically correct?
//        a) Their going to the party too.
//        b) They're going to the party too.

// Choose the correct form of the verb to complete the sentence: "He _____ his homework before dinner."
//        a) Did
//        b) Does
