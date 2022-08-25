import { useState, createContext, useContext, ReactNode } from "react";

//  Typescript interface for the componentes used in creating a context
interface HandleContextData {
  result: number;
  operator: string;
  number: string;
  numberHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  memoryHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  operationHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HandleContext = createContext<HandleContextData>(
  {} as HandleContextData
);

//  Typescript interface used for the provider
interface HandleProviderProps {
  children: ReactNode;
}

//  Starting the provider function
export function HandleProvider({ children }: HandleProviderProps) {
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState("0");

  //  Function used to manage the number buttons
  function numberHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const value: string = event.currentTarget.innerHTML;

    if (number === "0") {
      if (value === ".") {
        setNumber(number + value);
      } else {
        setNumber(value);
      }
    } else {
      if (value === "." && !number.includes(".")) {
        setNumber(number + value);
      } else if (value !== ".") {
        setNumber(number + value);
      }
    }
  }

  //  Function used to manage the buttons tha clear the display
  function memoryHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const value: string = event.currentTarget.innerHTML;

    if (value === "CE") {
      setNumber("0");
    } else if (value === "C") {
      setNumber("0");
      setResult(0);
      setOperator("");
    } else if (value === "Back") {
      let newNumber = number.slice(0, -1);
      if (newNumber) {
        setNumber(newNumber);
      } else {
        setNumber("0");
      }
    }
  }

  //  Function used to manage the operators buttons
  function operationHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const value: string = event.currentTarget.innerHTML;

    if (parseFloat(number) && operator === "") {
      setResult(parseFloat(number));
    }

    if (value === "=") {
      switch (operator) {
        case "+":
          setResult(result + parseFloat(number));
          break;
        case "-":
          setResult(result - parseFloat(number));
          break;
        case "*":
          setResult(result * parseFloat(number));
          break;
        case "/":
          setResult(result / parseFloat(number));
          break;
        default:
          setResult(parseFloat(number));
      }
      setOperator("");
    } else {
      setOperator(value);
      if (result === 0) {
        setResult(parseFloat(number));
      }
    }
    setNumber("0");
  }

  return (
    <HandleContext.Provider
      value={{
        result,
        operator,
        number,
        numberHandler,
        memoryHandler,
        operationHandler,
      }}
    >
      {children}
    </HandleContext.Provider>
  );
}

export function useHandler() {
  const context = useContext(HandleContext);

  return context;
}
