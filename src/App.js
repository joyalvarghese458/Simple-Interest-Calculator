import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

    const [interest,setInterest] = useState(0)
    const [principle,setPrinciple] = useState(0)
    const [rate,setRate] = useState(0)
    const [year,setYear] = useState(0)
    const [isPrinciple ,setIsPrinciple] =useState(true)
    const [isRate ,setIsRate] =useState(true)
    const [isYear ,setIsYear] =useState(true)

    const getValidate = (e)=>{
      const {name , value} = e.target
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name==='principle'){
          setPrinciple(value)
        setIsPrinciple(true)}
        else if(name==='rate'){
          setRate(value)
          setIsRate(true)
        }
        else if(name==='year'){
          setYear(value)
          setIsYear(true)
        }
      }else{
       if(name==='principle'){ setPrinciple(value)
        setIsPrinciple(false)}
        else if(name==='rate'){
          setRate(value)
          setIsRate(false)
        }
        else if(name==='year'){
          setYear(value)
          setIsYear(false)
        }
      }
      
      
    }
     const handleCalculate =(e)=>{
      e.preventDefault()
      if(!principle || !rate || !year){
      
        alert('fill the form')
      }else{
        setInterest(principle*rate*year/100)
        
      }
     }
     const handleReset = (e)=>{
      setInterest(0)
      setPrinciple(0)
      setRate(0)
      setYear(0)
      setIsPrinciple(true)
      setIsRate(true)
      setIsYear(true)
     }
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>simple interest App</h1>
        <p>Calculate Simple Interst App</p>
        <div className='d-flex justify-content-center align-items-center w-100 bg-warning flex-column rounded'>
          <h1>₹ { ' ' } {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name='principle' onChange={(e)=>getValidate(e)} value={principle || ''}  className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
          {!isPrinciple &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>
          }


          <div className='mb-3'>
          <TextField name='rate' value={rate || ''}  className='w-100' id="outlined-basic" label="Rate of Interest  (p.a) %" variant="outlined" onChange={(e)=>getValidate(e)} />
          </div>
          {!isRate &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>
          }

          <div className='mb-3'>
          <TextField name='year' value={year || ''} onChange={(e)=>getValidate(e)}  className='w-100' id="outlined-basic" label="Year (yr)" variant="outlined" />
          </div>
          {!isYear &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>
          }

          <Stack className='mt-5' direction="row" spacing={2}>
          <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-succes' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'200px',height:'50px'}}  variant="outlined">Reset</Button>
          </Stack>
        </form>
        </div>
    </div>
  );
}

export default App;
