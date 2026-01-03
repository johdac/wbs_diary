import { useEffect, useState } from "react";
import { IconLibrary } from "./core/IconLibrary";
import { Dock } from "./ui/Dock";
import { Diary } from "./ui/Diary";
import { Form } from "./ui/Form";

function App() {
  /**
   * We use "lazy initialization" with useState by passing a function instead of a value.
   * JavaScript evaluates function arguments on every render, but when the argument is a
   * function, it is only passed by reference and not executed.
   *
   * React detects this and calls the function exactly once on the initial render to
   * compute the initial state. On subsequent renders, the function is ignored and the
   * existing state value is reused.
   */
  const [data, setData] = useState(() => {
    const storageData = localStorage.getItem("data");
    return storageData
      ? JSON.parse(storageData)
      : {
          lastEntry: null,
          entries: [],
        };
  });

  useEffect(() => {
    console.log("Saving data to local storage");
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <IconLibrary />
      <Form data={data} setData={setData} />
      <Diary entries={data.entries ? data.entries : []} />
      <Dock data={data} />
    </>
  );
}

export default App;
