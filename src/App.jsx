import { useState } from "react";

const puzzles = [
  {
    id: 1,
    question: "Puzzle 1: Warm-up 😊\nWhat is 10 + 15?",
    answer: "25",
    message: "Level 1 cleared! Tum to real topper ho 🔥",
  },
  {
    id: 2,
    question:
      "Puzzle 2: Riddle Time 🧠\nI have keys but no doors. I have space but no rooms. What am I?",
    answer: "keyboard",
    message: "Sahi jawab! Logic sharp hai tumhara ✨",
  },
  {
    id: 3,
    question:
      "Puzzle 3: Observation 👀\nIn the word TOPPER, how many P's are there?",
    answer: "2",
    message: "Great! Observation skills on point 😄",
  },
  {
    id: 4,
    question:
      "Final Puzzle ❤️\nType one word that Nishant thinks defines you best:",
    answer: "chotu",
    message: "Perfect! Now get ready for the final surprise 🎁",
  },
];

export default function BirthdayPuzzleApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [unlockedMessages, setUnlockedMessages] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  const currentPuzzle = puzzles[currentIndex];

  const handleCheckAnswer = () => {
    const userAns = input.trim().toLowerCase();
    const correctAns = currentPuzzle.answer.trim().toLowerCase();

    if (!userAns) {
      setError("Pehle answer likho 😄");
      return;
    }

    if (userAns === correctAns) {
      setError("");
      setUnlockedMessages((prev) => [
        ...prev,
        { id: currentPuzzle.id, text: currentPuzzle.message },
      ]);

      if (currentIndex === puzzles.length - 1) {
        setShowFinal(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setInput("");
      }
    } else {
      setError("Wrong! Thoda aur socho topper 😉");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCheckAnswer();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #0a1f44, #1b3e7a, #87cefa)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "rgba(0,30,60,0.85)",
          borderRadius: "20px",
          padding: "25px",
          border: "3px solid white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          🎁 Blue Themed Birthday Puzzle App
        </h1>

        {!showFinal ? (
          <>
            <h3>Puzzle {currentIndex + 1}</h3>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "rgba(255,255,255,0.1)",
                padding: "12px",
                borderRadius: "10px",
                border: "2px solid white",
                marginTop: "10px",
              }}
            >
              {currentPuzzle.question}
            </pre>

            <input
              type="text"
              placeholder="Type your answer..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "12px",
                border: "2px solid skyblue",
                background: "rgba(255,255,255,0.2)",
                color: "white",
              }}
            />

            {error && (
              <div style={{ marginTop: "8px", color: "#ffcccc" }}>{error}</div>
            )}

            <button
              onClick={handleCheckAnswer}
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "12px",
                borderRadius: "15px",
                border: "2px solid white",
                background: "linear-gradient(135deg, #4da6ff, #003d80)",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Submit Answer ✔
            </button>

            <div style={{ marginTop: "20px" }}>
              {unlockedMessages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "1px solid white",
                    marginBottom: "10px",
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              fontSize: "1.2rem",
              fontFamily: "monospace",
              background: "black",
              color: "#00ffea",
              border: "3px solid #00d4ff",
              borderRadius: "15px",
            }}
          >
            <style>{`
              @keyframes glitch {
                0% { text-shadow: 2px 2px #00f, -2px -2px #0ff; }
                50% { text-shadow: -2px 2px #0ff, 2px -2px #00f; }
                100% { text-shadow: 2px -2px #0ff, -2px 2px #00f; }
              }
              @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
              }
              @keyframes blink {
                50% { border-color: transparent; }
              }
            `}</style>

            <h2 style={{ animation: "glitch 1s infinite" }}>
              DECRYPTING FINAL PUZZLE...
            </h2>

            <p
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRight: "3px solid #00eaff",
                display: "inline-block",
                animation:
                  "typing 3s steps(30), blink .5s step-end infinite alternate",
                marginTop: "15px",
              }}
            >
              ACCESS GRANTED...
            </p>

            <p
              style={{
                marginTop: "20px",
                fontSize: "1.3rem",
                color: "#00eaff",
                animation: "glitch 1.5s infinite",
              }}
            >
              ✔ IDENTITY MATCHED: TOPPER
            </p>

            <p style={{ marginTop: "10px" }}>
              SYSTEM MESSAGE:
              <br />
              <strong style={{ color: "#00faff", fontSize: "1.4rem" }}>
                HAPPY BIRTHDAY, GENIUS 🎉💙
              </strong>
            </p>

            <p style={{ marginTop: "15px", opacity: 0.8 }}>
              — From Nishant (Your Anonymous System Admin 😎)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
