
import { useState } from 'react'
import './App.css'

function App() {

const [value ,setvalue]=useState('')
const [result , setresult] =useState('')
  return (
    <>
      <div className='calculator'>
    <div className='main'>
    <div className="main1">
    <div className='output'>
        <div className='previous'>{value}</div>
        <div className='current'>{result}</div>
  </div>  
<button onClick={()=>setvalue('',setresult(''))} className='span-two'>AC</button>
<button onClick={()=>setresult(result.slice(0,-1))}>Del</button>
<button onClick={()=>setvalue( result+value+'/',setresult(''))}>/</button>
<button onClick={()=>setresult(result+7)}>7</button>
<button onClick={()=>setresult(result+8)}>8</button>
<button  onClick={()=>setresult(result+9)}>9</button>
<button onClick={()=>setvalue( result+value+'*',setresult(''))}>*</button>
<button onClick={()=>setresult(result+4)}>4</button>
<button onClick={()=>setresult(result+5)}>5</button>
<button onClick={()=>setresult(result+6)}>6</button>
<button onClick={()=>setvalue( value+result+'+',setresult(''))}>+</button>
<button onClick={()=>setresult(result+1)}>1</button>
<button onClick={()=>setresult(result+2)}>2</button>
<button onClick={()=>setresult(result+3)}>3</button>
<button onClick={()=>setvalue( result+value+'-',setresult(''))}>-</button>
<button onClick={()=>setresult(result+0)}>0</button>
<button onClick={()=>setresult(result+'.')}>.</button>
<button onClick={()=>setresult(eval(value+result),setvalue(''),)} className='span-two'>=</button>
</div>
</div>

    </div>
    </>
  )
}

export default App
