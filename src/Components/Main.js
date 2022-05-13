import React,{useState} from 'react'
import '../Main.css';


function Main() {

    const [result, setResult] = useState('')
    const [allowDot, setAllowDot] = useState(true)

    const userClick = (e) =>{
        if (e.target.value === '.') {
            setAllowDot(false);
        }
        else if (e.target.value === '/' || e.target.value === '*' || e.target.value === '+' || e.target.value === '-' ) {
            setAllowDot(true);
        }
        setResult(result.concat(e.target.value));
    }   

    const calculateValue = () => {
        setAllowDot(true);
        var display = result.replace(/^0+/,'')
        console.log(display);
        setResult(eval(display).toString());
    }

    const handleBackspace = () =>{
        setResult(result.slice(0, -1));
    }

    const cleardata = () => {
        setAllowDot(true);
        setResult('');
    }

  return (
    <div>
      <h1 className='mainHeading text-center my-5'>Calculator</h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 inputDiv">
                    <input type="text" name='calculator' className='inputField' value={result}/>
                </div>
            </div>
            <div className="row">       
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={7} onClick={userClick} >7</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={8} onClick={userClick} >8</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={9} onClick={userClick} >9</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button  className='btn btn-block w-100 btnIcon' value={'/'} onClick={userClick} >/</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={4} onClick={userClick} >4</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={5} onClick={userClick} >5</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={6} onClick={userClick} >6</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button  className='btn btn-block w-100 btnIcon' value={'*'} onClick={userClick} >X</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={1} onClick={userClick} >1</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={2} onClick={userClick} >2</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={3} onClick={userClick} >3</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button  className='btn btn-block w-100 btnIcon' value={'+'} onClick={userClick} >+</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={'.'} onClick={userClick} disabled={!allowDot}>.</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnNumber' value={0} onClick={userClick} >0</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button name='equal' className='btn btn-block w-100 btnNumber'  onClick={calculateValue}>=</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button  className='btn btn-block w-100 btnIcon' value={'-'} onClick={userClick} >-</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9 numberDiv ">
                    <button name='clear' className='btn btn-block w-100 btnClear' onClick={cleardata}>Clear</button>
                </div>
                <div className="col-sm-3 numberDiv ">
                    <button className='btn btn-block w-100 btnClear' onClick={handleBackspace}>C</button>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Main
