import { useState } from "react";
import { translationAdapter } from "../adapters/translationAdapter";

export default function Chat() {
  const [englishMessage, setEnglishMessage] = useState("");
  const [frenchMessage, setFrenchMessage] = useState("");
  const [translatedMessage, setTranslatedMessage] = useState("");

  const handleEnglishSend = () => {
    const translation = translationAdapter(englishMessage, "French");
    setTranslatedMessage(translation);
  };

  const handleFrenchSend = () => {
    const translation = translationAdapter(frenchMessage, "English");
    setTranslatedMessage(translation);
  };

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Chat Adapter</h2>

      <div className="mb-3">
        <h3 className="font-semibold">English Speaker</h3>
        <input
          type="text"
          value={englishMessage}
          onChange={(e) => setEnglishMessage(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Type in English..."
        />
        <button onClick={handleEnglishSend} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>

      <div className="mb-3">
        <h3 className="font-semibold">French Speaker</h3>
        <input
          type="text"
          value={frenchMessage}
          onChange={(e) => setFrenchMessage(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Tapez en français..."
        />
        <button onClick={handleFrenchSend} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
          Envoyer
        </button>
      </div>

      <div className="mt-4 p-3 bg-white rounded shadow">
        <h3 className="font-semibold">Translated Message</h3>
        <p className="text-lg">{translatedMessage}</p>
      </div>
    </div>
  );
}
