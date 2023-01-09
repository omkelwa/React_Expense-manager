import { useState } from "react"
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import TransctionEntry from "./Components/TranstionsEntry";
import BalanceCards from "./Components/BalanceCards";


function App() {
  const [transtions , setTranstions] = useState([])

  const [edit, setEdit] = useState({
    transtions:{},
    isEdit:false
  })

  const saveTranstions = (text, amount)=>{
    const newTranstions = {
      id:crypto.randomUUID(),
      text:text,
      amount:parseInt(amount)
    }
    setTranstions([...transtions, newTranstions])
  }

  const deleteTransactions = (id)=>{
      setTranstions(transtions.filter((item)=>item.id !== id))
  }
  const editTranstions = (transtions)=>{
    setEdit({transtions:transtions, isEdit:true})
    

  }
  
const updateTransactions = (id, text, amount)=>{
setTranstions(transtions.map(item=>item.id === id ? {id:id, text:text, amount:parseInt(amount)} : item ))
setEdit({
  transtions:{},
  isEdit:false
})
}
  return (
    <>
    <div className="cotainer">
        <Navbar/>
          <div className="mini-container d-flex ">
            <div className=" ms-3 mt-3 bg-dark pt-5 text-center d-flex justify-content-center shadow-lg p-3 mb-5 bg-body rounded" id="input">
                <Form saveTranstions={saveTranstions} updateTransactions={updateTransactions} edit={edit} />
            </div>
            <BalanceCards transtions={transtions} />
          
    </div>
    <TransctionEntry transtions={transtions} deleteTransactions={deleteTransactions} editTranstions={editTranstions}  />
    </div>
    </>
  );
}

export default App;
