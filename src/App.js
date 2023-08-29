import React, { useState } from "react";
import "./App.css"
function App() {
  const box = [
    {  label: "Apple", checked: false },
    {  label: "Kiwi", checked: false },
    {  label: "Cherry", checked: false },
    {  label: "Mango", checked: false },
    {  label: "Watermelon", checked: false },
    {  label: "Berry", checked: false }

  ]
  const [final, setFinal] = useState(box);
  const [newfruit,setNew]=useState();

  const setlist = (e) => {
    let label = e?.label;
    var checked = e?.checked;
    let arr = final
    arr.map((ele) => {
      if (ele.label === label) {
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
  const pushto=()=>{
    var box = final
    box.push(newfruit);
    console.log(box);
    setFinal(box)
  }
  return (
    <div className="App">
      <input onChange={(e)=>(setNew({label:e.target.value,checked:false}))}/>
      <button onClick={pushto}>add</button>
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
