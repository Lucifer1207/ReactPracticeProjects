import { useState } from "react"

function App() {
  const [color,changeColor]=useState("olive");


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >
        <div className="fixed flex flex-wrap justify-center top-5 inset-x-0 px-0" >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 top-0 rounded-3xl" >
            <button onClick={()=>changeColor("red")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"red"}} >Red</button>
            <button onClick={()=>changeColor("green")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"green"}} >Green</button>
            <button onClick={()=>changeColor("blue")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"blue"}} >Blue</button>
            <button onClick={()=>changeColor("burlywood")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"burlywood"}} >Burly</button>
            <button onClick={()=>changeColor("black")} className="outline-none px-4 py-1 rounded-3xl shadow-lg" style={{backgroundColor:"black", border:"2px solid olive", color:"olive"}} >Black</button>
            <button onClick={()=>changeColor("orange")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"orange"}} >Orange</button>
            <button onClick={()=>changeColor("yellow")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"yellow"}} >Yellow</button>
            <button onClick={()=>changeColor("indigo")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"indigo"}} >Indigo</button>
            <button onClick={()=>changeColor("grey")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"grey"}} >Grey</button>
            <button onClick={()=>changeColor("pink")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"pink"}} >Pink</button>
            <button onClick={()=>changeColor("lavender")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"lavender"}} >Lavender</button>
            <button onClick={()=>changeColor("white")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"white"}} >White</button>
            <button onClick={()=>changeColor("maroon")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"maroon"}} >Maroon</button>
            <button onClick={()=>changeColor("peru")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"peru"}} >Peru</button>
            <button onClick={()=>changeColor("peachpuff")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"peachpuff"}} >Peach</button>
            <button onClick={()=>changeColor("lime")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor:"lime"}} >Lime</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
