import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "MobileFlashcards:Decks";

/**
 * Get's all the decks of flashcards.
 * Using an async data approach with dummy data. Could mature to REST API later.
 */
export async function fetchAllDecks() {
  // TEMP: Clear async storage so always using dummy data
  //const keys = await AsyncStorage.getAllKeys();
  //await  AsyncStorage.multiRemove(keys);

  // Get all the decks from AsyncStorage. If there aren't any then use the dummy data
  // as the default set of decks.
  let decksJson = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  AsyncStorage.clear();
  if (decksJson !== null) {
    return JSON.parse(decksJson);
  } else {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  }
}

// --------------------------------------------------------------------------------

const dummyData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
      {
        question: "what is Component ?",
        answer:
          "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
      {
        question: "what is Constructor method ?",
        answer:
          "The constructor() method is a special method for creating and initializing objects created within a class.",
      },
      {
        question: "What is Scope?",
        answer: "Scope determines the accessibility (visibility) of variables.",
      },
      {
        question: "What is hoisting ?",
        answer:
          "Hoisting is JavaScript's default behavior of moving declarations to the top. ",
      },
    ],
  },
};
