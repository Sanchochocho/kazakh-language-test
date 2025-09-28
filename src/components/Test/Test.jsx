import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router";
import "./Test.css";

const Test = ({ quiz }) => {
    const [fio, setFio] = useState("");
    const [group, setGroup] = useState("");
    const [start, setStart] = useState(false);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [allTests, setAllTests] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("testResults");
        if (saved) {
            setAllTests(JSON.parse(saved));
        }
    }, []);

    const handleAnswer = (qIndex, option) => {
        setAnswers({
            ...answers,
            [qIndex]: option,
        });
    };

    const finishTest = () => {
        let correctCount = 0;

        quiz.forEach((q, index) => {
            const userAnswer = answers[index];
            if (userAnswer && userAnswer === q.correct) {
                correctCount++;
            }
        });
        const data = {
            fio,
            group,
            correct: correctCount,
            total: quiz.length,
            date: new Date().toLocaleString()
        };
        const updatedTests = [...allTests, data];
        setAllTests(updatedTests);
        localStorage.setItem("testResults", JSON.stringify(updatedTests));

        setResult(data);
    };

    return (
        <>
            {!start && <Header />}
            {!start ? (
                <div className="regist">
                    <h1 className="form_title">Тест тапсыру</h1>
                    <input
                        type="text"
                        placeholder="Толық аты-жөні..."
                        onChange={(e) => setFio(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Толық топтын аты..."
                        onChange={(e) => setGroup(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            if (fio.trim() && group.trim()) {
                                setStart(true);
                            } else {
                                alert("Барлық өрістерді толтырыңыз!");
                            }
                        }}
                    >Тест бастау</button>
                </div>
            ) : result ? (
                <div className="result">
                    <h2>Нәтиже</h2>
                    <p>Аты-жөн: {result.fio}</p>
                    <p>Топ: {result.group}</p>
                    <p>
                        Дұрыс жауаптар: {result.correct}/{result.total}
                    </p>
                    <Link to={"/"} className="return_main">Негізгі</Link>
                </div>
            ) : (
                <div className="test_container">
                    <h2>Тест</h2>
                    {quiz.map((q, idx) => (
                        <div key={idx} className="question_block">
                            <h3>{q.question}</h3>
                            {q.options.map((opt, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name={`question-${idx}`}
                                        value={opt}
                                        onChange={() => handleAnswer(idx, opt)}
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button onClick={finishTest}>Аяқтау</button>
                </div>
            )}
        </>
    );
};

export default Test;
