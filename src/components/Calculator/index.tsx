import { useHandler } from "../../hooks/HandleContext";

import "./styles.scss";

export function Calculator() {
  // Getting the components from the useContext
  const {
    result,
    operator,
    number,
    numberHandler,
    memoryHandler,
    operationHandler,
  } = useHandler();

  return (
    <main className="contentContainer">
      <div>
        <header>CALCULATOR</header>

        {/* Calculator Display */}
        <div className="valuesDisplay">
          <p>
            {result} {operator}
          </p>
          <p>{number}</p>
        </div>

        {/* Calculator Buttons */}
        <div className="buttonsContainer">
          <button disabled></button>
          <button className="buttonOperator" onClick={memoryHandler}>
            CE
          </button>
          <button className="buttonOperator" onClick={memoryHandler}>
            C
          </button>
          <button className="buttonOperator" onClick={memoryHandler}>
            Back
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            1
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            2
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            3
          </button>
          <button className="buttonOperator" onClick={operationHandler}>
            /
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            4
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            5
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            6
          </button>
          <button className="buttonOperator" onClick={operationHandler}>
            *
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            7
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            8
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            9
          </button>
          <button className="buttonOperator" onClick={operationHandler}>
            -
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            0
          </button>
          <button className="buttonNumber" onClick={numberHandler}>
            .
          </button>
          <button className="buttonOperator" onClick={operationHandler}>
            =
          </button>
          <button className="buttonOperator" onClick={operationHandler}>
            +
          </button>
        </div>
      </div>
    </main>
  );
}
