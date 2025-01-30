 //just used some defined translations as of now
export function translationAdapter(message, language) {
  const dictionary = {
    "Hello! How are you?": "Bonjour! Comment ça va?",
    "I'm good, thanks!": "Je vais bien, merci!",
    "What are you doing?": "Que fais-tu?",
    "I'm learning React!": "J'apprends React!",
    "Good morning!": "Bonjour!",
    "See you later!": "À plus tard!",
    "Thank you!": "Merci!",
    "Yes": "Oui",
    "No": "Non",
    "hello": "hola"
  };
//if other words used it throws error
  if (language === "French") {
    return dictionary[message] || "Translation not available";
  } else {
    const reversedDictionary = Object.fromEntries(
      Object.entries(dictionary).map(([key, value]) => [value, key])
    );
    return reversedDictionary[message] || "Traduction non disponible";
  }
}
