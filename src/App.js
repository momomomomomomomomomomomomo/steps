import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const handlePrevious = function () {
    setStep((step) => (step > 1 ? step - 1 : step));
  };
  const handleNext = function () {
    setStep((step) => (step < messages.length ? step + 1 : step));
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        Step {step}: {messages[step - 1]}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
