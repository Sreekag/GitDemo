//just usedd some defines translations 
export function translationAdapter(message, language) {
  try {
    if (!message.trim()) {
      throw new Error("⚠️ Please enter a message."); // Handle empty input
    }

    const dictionary = {
      "hello! how are you?": "bonjour! comment ça va?",
      "i'm good, thanks!": "je vais bien, merci!",
      "what are you doing?": "que fais-tu?",
      "i'm learning react!": "j'apprends react!",
      "good morning!": "bonjour!",
      "see you later!": "à plus tard!",
      "thank you!": "merci!",
      "yes": "oui",
      "no": "non",
      "hello": "hola",
    };

    const normalizedMessage = message.toLowerCase().trim();
    // error handling for the words that are not in defined dictionary
    if (language === "French") {
      return dictionary[normalizedMessage] || `⚠️ No translation found for "${message}".`;
    } else {
      const reversedDictionary = Object.fromEntries(
        Object.entries(dictionary).map(([key, value]) => [value, key])
      );
      return reversedDictionary[normalizedMessage] || `⚠️ Traduction non disponible pour "${message}".`;
    }
  } catch (error) {
    console.error("Translation Error:", error.message);
    return "⚠️ An error occurred during translation.";
  }
}
