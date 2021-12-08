import logo from './logo.svg';
import './App.css';
// import { IconName } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from 'react';


function App() {
  const [plusClick, setPlusClick] = useState(false)
  const [creditPlusClick, setCreditPlusClick] = useState(false)
  const [debitValue, setTotalDebitValue]=useState(0)
  const [creditValue, setTotalCreditValue]=useState(0)
  const [equality, setEquality] = useState(false)

  const onDebitPlusClick = () => {
    setPlusClick(true)
    const debitArray=[]
    debitArray.push(debitValue)
  }

  const calculate = () => {
    setTotalDebitValue(676)
    setTotalCreditValue(676)
    if (debitValue === creditValue){
      setEquality(true)
    }

  }
  const onSave = () => {
    
  }


  return (
    <div style={{margin:20, backgroundColor:"lightgrey"}}>
          <div style={{display: 'flex', flexDirection:"row", justifyContent:"centre", alignItems:"centre"}}>

      
                <div style={{display: 'flex', flexDirection:"row", margin:10}}>
                    <p style={{textDecoration:"underline"}}>Entry No: 32156</p>
                </div>
                <div style={{display: 'flex', flexDirection:"row", margin:25}}>
                    <label style={{textDecoration:"underline", marginRight:"5px"}}>Attach File
                    <input type="file" /></label>
                </div>
                <div style={{display: 'flex', flexDirection:"row", margin:25}}>
                    <label style={{textDecoration:"underline"}}>Pick date
                    <FaCalendarAlt/></label>
                </div>
                <div style={{display: 'flex', flexDirection:"row", margin:25, justifyContent:"centre", alignItems:"centre"}}>
                    <label style={{textDecoration:"underline"}}>Transfer Type
                    <input type="checkbox"
                        defaultChecked={false}
                    /></label>
                </div>
          </div>

          <div style={{display:"flex", flexDirection:"row",backgroundColor:"white", 
          borderWidth:5, borderColor:"black"}}>

            <div style={{marginLeft:30, marginTop:10}}>
              <FaPlusCircle color="green" size={20} onClick={onDebitPlusClick}/>
            </div>
            <div style={{margin:5, padding:5}}>
              <select name="Account" id="selectList">
                <option value="Account">Account</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
              </select>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="number"  placeholder="Debit" onChange={calculate} style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5,textDecoration:"underline"}}>
              <input type="number" value="0" placeholder="Credit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="text" placeholder="Description" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{marginLeft:30, marginTop:10}}>
              <FaMinusCircle color="red" size={20}/>
            </div>
          </div>

          {plusClick ? <div style={{display:"flex", flexDirection:"row",backgroundColor:"white", 
          borderWidth:5, borderColor:"black"}}>

            <div style={{marginLeft:30, marginTop:10}}>
              <FaPlusCircle color="green" size={20} onClick={onDebitPlusClick}/>
            </div>
            <div style={{margin:5, padding:5}}>
              <select name="Account" id="selectList">
                <option value="Account" >Account</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
              </select>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="number" placeholder="Debit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5,textDecoration:"underline"}}>
              <input type="number" value="0" placeholder="Credit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="text" placeholder="Description" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{marginLeft:30, marginTop:10}}>
              <FaMinusCircle color="red" size={20}/>
            </div>
          </div> : ""}


          <div style={{display:"flex", flexDirection:"row",backgroundColor:"white", 
          borderWidth:5, borderColor:"black"}}>

            <div style={{marginLeft:50, marginTop:10}}>
              <FaPlusCircle color="red" size={20} onClick={() => setCreditPlusClick(true)}/>
            </div>
            <div style={{margin:5, padding:5}}>
              <select name="Account" id="selectList">
                <option value="Account">Account</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
              </select>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="number" value="0" placeholder="Debit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5,textDecoration:"underline"}}>
              <input type="number" placeholder="Credit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="text" placeholder="Description" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{marginLeft:30, marginTop:10}}>
              <FaMinusCircle color="red" size={20}/>
            </div>
          </div>

          {creditPlusClick ? <div style={{display:"flex", flexDirection:"row",backgroundColor:"white", 
          borderWidth:5, borderColor:"black"}}>

            <div style={{marginLeft:50, marginTop:10}}>
              <FaPlusCircle color="red" size={20} onClick={() => setCreditPlusClick(true)}/>
            </div>
            <div style={{margin:5, padding:5}}>
              <select name="Account" id="selectList">
                <option value="Account">Account</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
              </select>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="number" value="0" placeholder="Debit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5,textDecoration:"underline"}}>
              <input type="number" placeholder="Credit" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{margin:5, padding:5, textDecoration:"underline"}}>
              <input type="text" placeholder="Description" style={{border:'none',borderBottom:"1px solid lightgrey"}}/>
            </div>
            <div style={{marginLeft:30, marginTop:10}}>
              <FaMinusCircle color="red" size={20}/>
            </div>
          </div> : ""}

          <div style={{margin:20, display:"flex", flexDirection:"row", margin:20 }}>
            <button style={{backgroundColor:"#dcdcdc", margin:10, border:"none", width:"150px", height:"50px"}} onClick={onSave} disabled={!equality}>Save</button>
            <p style={{backgroundColor:"#90EE90", size:20, width:"10%", marginRight:10, padding:10}}>{debitValue}</p>
            <p style={{backgroundColor:"#ffcccb", size:20, width:"10%", marginRight:10,padding:10 }}>{creditValue}</p>
          </div>
    </div>
  );
}

export default App;
