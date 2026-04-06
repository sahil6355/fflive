"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const allQuestions = [
  {
    id: 1,
    question: "Who directed The Shape of Water?",
    options: [
      "Guillermo del Toro",
      "Alejandro González Iñárritu",
      "Alfonso Cuarón",
      "Pedro Almodóvar",
    ],
    correct: "Guillermo del Toro",
  },
  {
    id: 2,
    question: "Which planet is known as Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    id: 3,
    question: "What is capital of India?",
    options: ["Delhi", "Mumbai", "Surat", "Ahmedabad"],
    correct: "Delhi",
  },
  {
    id: 4,
    question: "React is developed by?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correct: "Facebook",
  },
  {
    id: 5,
    question: "Next.js framework is used for?",
    options: ["React", "Vue", "Angular", "Laravel"],
    correct: "React",
  },
  {
    id: 6,
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
];

export default function QuizPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const randomTwo = [...allQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    setQuestions(randomTwo);
  }, []);

  // ✅ Show ad then redirect
  const goToResultWithAd = () => {
    if (typeof window !== "undefined" && window.ads) {
      window.ads.showStartAd(() => {
        router.push("/result");
      });
    } else {
      router.push("/result");
    }
  };

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    const isCorrect = option === questions[current].correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        // ✅ last question ad show
        goToResultWithAd();
      }
    }, 500);
  };

  if (!questions.length) return null;

  const currentQuestion = questions[current];

  return (
    <div className="question_box">
      <div className="question_number">
        {current + 1}/{questions.length} Question
      </div>

      <div className="question_list d-flex align-items-center justify-content-center pb-1">
        <h4 className="question_text_full">{currentQuestion.question}</h4>
      </div>

      <div className="option_list">
        <div className="grid grid-cols-2 gap-3">
          {currentQuestion.options.map((option, index) => {
            let className = "question";

            if (selected) {
              if (option === currentQuestion.correct) {
                className += " correct";
              } else if (option === selected) {
                className += " wrong";
              }
            }

            return (
              <div key={index} className={className}>
                <button onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}