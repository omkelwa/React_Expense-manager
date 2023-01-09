import { useEffect, useState } from "react"

function Form ({saveTranstions, edit, updateTransactions}){
  const [text , setText] = useState()
  const [amount, setAmount] = useState() 
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(edit.isEdit){
      updateTransactions(edit.transtions.id, text, amount)
    }
    else{
      saveTranstions(text, amount)
    }
    setText("")
    setAmount("")
  }

  useEffect(()=>{
    setText(edit.transtions.text)
    setAmount(edit.transtions.amount)
  },[edit])
    return (
        <>
        <form id="form" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-3">
                      <input value={text} type="text" placeholder="Enter your Transction Here" className="form-control shadow-sm p-2 bg-body rounded" required onChange={(e)=>setText(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <input value={amount} type="text" className="form-control shadow-sm p-2 bg-body rounded" placeholder="Enter Amout Here" required onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary  w-100 " id="save-btn">Save<i className="bi bi-file-earmark-arrow-down ms-2"></i> </button>

                  </form>
        </>
    )
}

export default Form