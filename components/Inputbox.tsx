import React from 'react'

const Inputbox = () => {
    const [list, setList] = React.useState<string[]>([])
    const [textVal, setTextVal] = React.useState<string>("")
    const handleSubmit = () => {
        setList([...list, textVal]);
        setTextVal("");
    }
  return (
    <div>
      <input type="text" value={textVal} onChange={(e)=>(setTextVal(e.target.value))} name="" test-id="input-box" className=' w-xl border rounded-l-full'></input>
      <button onClick={handleSubmit} className='border border-l-0 rounded-r-full p-2 bg-blue-500'>Submit</button>
      {list.length > 0 && list.map((item, index) => (
        <p className="m-2" key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Inputbox
