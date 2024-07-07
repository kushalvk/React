import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [SpeCarecterAllowed, setSpeCarecterAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

// 'useCallback' hook to run Every Change

  const PasswordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz"

    if (NumberAllowed) str += "0123456789"
    if (SpeCarecterAllowed) str += "!@#$%^&*()_-+=~`{}[]<>?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, NumberAllowed, SpeCarecterAllowed, setPassword])

  const copyPasswordClipbord = useCallback(() => {
    // this is user to select the elment when you click on copy
    passwordRef.current?.select()

    // if you select in range
    // passwordRef.current?.setSelectionRange(0, 3);

    // to copy a value of particular elemenet 
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  // 'useEffect' hook to run Every Change ans when "reload"
  useEffect(() => {
    PasswordGenerator()
  }, [length, NumberAllowed, SpeCarecterAllowed, PasswordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 py-2">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordClipbord} className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={SpeCarecterAllowed}
              id="characterInput"
              onChange={() => { setSpeCarecterAllowed((prev) => !prev) }}
            />
            <label htmlFor="characterInput">Charecter</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
