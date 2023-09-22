import { ChangeEvent, useState } from 'react'
import { data } from './constants'
import styles from './home.module.css'
import IData from './interfaces'

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>('')
  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSubmit = (): void => {
    if(!title?.length) return
    const newData = {
      title,
      id: new Date().getTime(),
      description: 'description'
    }
    setArr([...arr, newData])
    setTitle('')
  }

  const deleteItem = (id: number) => {
    const newData = arr.filter(item => item.id !== id)
    setArr(newData)
  }

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <input placeholder='Enter todo' value={title} onChange={changeHandler} className={styles.input} />
      <button onClick={handleSubmit} className={styles.button}>Add Todo</button>

      <div className={styles.card}>
        {arr.map(item => (
          <div key={item.id} className={styles.cardItem}>
            <p>{item.title}</p>
            <button onClick={() => deleteItem(item.id)} className={styles.delBtn}>DEL</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App