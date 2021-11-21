import React,{useState} from 'react'

function Hookcounterb() {
    const[name,setName]=useState({firstname:'',lastname:''})
    return (
        <div>
            <form>
                <input value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}></input>
                <input value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}></input>
                <h4>First name is {name.firstname}</h4>
                <h4>Last name is {name.lastname}</h4>
                <h5>{JSON.stringify(name)}</h5>
            </form>
        </div>
    )
}

export default Hookcounterb
