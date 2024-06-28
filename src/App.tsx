import React, { useRef, useState } from 'react'
import './App.css'
import { Records } from './components/records/Records'
import { IForm } from './module/iForm'



export function App() {
  const [form, setForm] = useState<IForm>({
    date: '',
    way: ''
  })
  let { date, way} = form
  const recordsList = useRef<IForm[]>([]);
 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    recordsList.current.find(i => i.date == form.date)
    ? recordsList.current.map(i => i.date == form.date ? i.way=String(Number(i.way)+Number(form.way)) : i)
    : recordsList.current.push(form)
    recordsList.current.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    setForm((prevForm) => ({
      ...prevForm, date: '', way: ''
    }))
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm, [name]: value
    }))
  }
  const handleClick = (event: React.MouseEvent<HTMLImageElement> & { target: HTMLImageElement}) => {
    recordsList.current = recordsList.current.filter(item => item.date != event.target.id)
    setForm((prevForm) => ({...prevForm}))
  }

  return (
    <>
    <form className='form-input' onSubmit={handleSubmit}>
      <div className='form-field'>
        <label htmlFor="date">Дата (дд.мм.гг)</label>
        <input name='date' type="date" className='input' value={date} onChange={handleNameChange}/>
      </div>
      <div className='form-field'>
        <label htmlFor="way">Пройдено км</label>
        <input name='way' type="number" className='input' value={way} onChange={handleNameChange}/>
      </div>
      <button className='button'>OK</button>
    </form>
    <div className='records-title'>
      <h4>Дата (дд.мм.гг)</h4>
      <h4>Пройдено км</h4>
      <h4>Действия</h4>
    </div>
    <ul className='records-field'>
      {recordsList.current.map((c:IForm, i:number) => (
        <li className='record' key={i}>
          {<Records item={c}/>}
          <div>
            <img src="src/png/icons8-edit-26.png" alt="" />
            <img id={c.date} src="src/png/icons8-delete-30.png" alt="" onClick={handleClick}/>
          </div>
        </li>))}
    </ul>
    </>
  )
}
