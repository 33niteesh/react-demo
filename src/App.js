import React, { useState } from "react";
import "./App.css"
function App() {
  const box = [
    { name: "A", label: "Apple", checked: false },
    { name: "B", label: "Kiwi", checked: false },
    { name: "C", label: "Cherry", checked: false },
    { name: "D", label: "Mango", checked: false },
    { name: "E", label: "Watermelon", checked: false },
    { name: "F", label: "Berry", checked: false }

  ]
  const [final, setFinal] = useState(box);
  const setlist = (e) => {
    let name = e?.name;
    var checked = e?.checked;
    let arr = final
    arr.map((ele) => {
      if (ele.name === name) {
        ele.checked = !checked
      }
    })
    setFinal([...arr])
  }
  const done = () =>{
    const array = []
    final.map(ele=>{
      if(ele.checked===true){
        array.push(ele.label)
      }
    })
    alert(array)
  }
  return (
    <div className="App">
      {
        final?.map((checkbox,key) => {   
          return (
            <p className="main" key={key}>
              <input type="checkbox" checked={checkbox.checked} className={checkbox.checked ? "input":"noinput"} onChange={() => setlist(checkbox)}  /><label className="label">{!checkbox.checked ? checkbox.label : <s>{checkbox.label}</s>}</label>
            </p>
          )
        })
      }
      <button onClick={() => { done() }}>done</button>
    </div>
  );
}

export default App;
