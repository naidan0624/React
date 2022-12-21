import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Col, Row } from "antd";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BsCheckLg } from "react-icons/bs";
import { Modal } from "antd";



const svgs = [
  {
    svg: (
      <svg width={100} viewBox="0 0 32 32">
        <path
          d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
          style={{ fill: "white" }}
        />
      </svg>
    ),
    btnColor: "red",
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" width={100}>
        <path
          d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
          style={{ fill: "white" }}
        />
      </svg>
    ),
    btnColor: " blue",
  },
  {
    svg: (
      <svg width={100} viewBox="0 0 32 32">
        <path
          d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
          style={{ fill: "white" }}
        />
      </svg>
    ),
    btnColor: "yellow",
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" width={100}>
        <path d="M7,7 L25,7 L25,25 L7,25 L7,7 Z" style={{ fill: "white" }} />
      </svg>
    ),
    btnColor: " green",
  },
];

export default function KahootGame() {
  const [kahootGame, setKahootGame] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isAnswered, setIsAnswered] = useState("");
  const [key, setKey] = useState(0);

  const [scoreHandler, setScoreHandler] = useState(0);
  const playing = useRef();
  useEffect(() => {
    fetchKahoot();
    playing.current.play();
  }, []);
  const fetchKahoot = () => {
    Math.random();
    axios
      .get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
      .then((res) => {
        if (res.status === 200)
          setKahootGame(
            res.data.results.map((q, idx) => {
              return {
                id: idx + 1,
                question: q.question,
                answers: [
                  { answer: q.correct_answer, iscorrect: true },
                  ...q.incorrect_answers.map((incorrect) => {
                    return {
                      answer: incorrect,
                      iscorrect: false,
                    };
                  }),
                ].sort(() => {
                  if (Math.random() < 0.5) return 1;
                  else {
                    return -1;
                  }
                }),
              };
            })
          );
      });
  };
  
  return (
    
    <div
      className="kahoot-big-container"
      style={{
        backgroundImage: `url(https://images-cdn.kahoot.it/acf73135-050e-4126-b172-d0dbb436012e?auto=webp?auto=webp&width=1800)`,
      }}
    >
      <div className="kahoot-number-slide">
        {kahootGame[current]?.id} of {kahootGame.length}
      </div>
      <div className="kahoot-top-container">
        <div className="kahoot-question-context">
          {kahootGame[current]?.question}
        </div>
      </div>

      <div
        className="kahoot-answer-box"
        style={{
          background: isAnswered
            ? isAnswered === "green"
              ? "green"
              : "red"
            : "",
        }}
      >
        {isAnswered === "green" ? "Correct, Good Job" : ""}
        {isAnswered === "red" ? "Wrong, Nothing is easy" : ""}
      </div>
  
      <div className="kahoot-next-button">
        {!isAnswered && (
          <div className="kahoot-clock">
            <CountdownCircleTimer
              key={key}
              isPlaying={!isAnswered ? true : false}
              duration={30}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[30, 20, 10, 5]}
              onComplete={() => {
                setIsAnswered("red");
                return { shouldRepeat: false, delay: 0 };
              }}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        )}
        {isAnswered && (
          <button
            onClick={() => {
              setCurrent((current) => {
                return current < kahootGame.length - 1 ? current + 1 : 0;
              });
              setKey((prevKey) => prevKey + 1);
              setIsAnswered("");
            }}
            style={{
              fontSize: "20px",
              backgroundColor: "white",
              color: "black",
              width: "150px",
              height: "40px",
            }}
          >
            Next
          </button>
        )}
      </div>
      <div className="kahoot-answer-selection">
        <Row gutter={[20, 15]}>
          {kahootGame[current]?.answers?.map((option, idx) => {
            return (
              <Col span={12}>
                <fieldset
                  disabled={isAnswered  && isAnswered === 'red' ? true : false}
                  style={{
                    background: isAnswered
                      ? option.iscorrect
                        ? "green"
                        : "red"
                      : svgs[idx].btnColor,
                  }}
                  onClick={() => {
                    setIsAnswered(option.iscorrect ? "green" : "red");
                    const score = scoreHandler + (option.iscorrect ? 1 : 0);
                    setScoreHandler(score);

                    if (current === kahootGame.length - 1) {
                      Modal.success({
                        content: ` ${score} correct answers of the ${kahootGame.length} questions! `,
                      
                      });
                    }
                  }}
                  className="kahoot-button"
                >
                  <div className="kahoot-icon">
                    {svgs[idx].svg}
                    <span> {option.answer} </span>

                    <span style={{ fontSize: "40px" }}>
                      {isAnswered && (!option.iscorrect ? "X" : <BsCheckLg />)}
                      {key === kahootGame.length}
                    </span>
                  </div>
                </fieldset>
              </Col>
            );
          })}
        </Row>
        <audio ref={playing}>
            <source src="https://joeybabcock.me/blog/wp-content/uploads/2019/05/lobby-classic-game.mp3">
            </source>
        </audio>
       
      </div>
      {/* <pre>{JSON.stringify(kahootGame, null, 2)}</pre> */}
    </div>
  );
}
