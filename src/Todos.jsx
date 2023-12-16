import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import { doGet } from './servis'
import { useEffect } from 'react'

const Todos = () => {

  const [Todos, setTodos] = useState([])

  async function getTodos() {
    await doGet('/todos').then((res) => setTodos(res.data))
  }




  useEffect(() => {
    getTodos()
  }, [])






  return (
    <div>
      <h2 className='text-center text-light my-5'>Todos</h2>
      {
        Todos.map((item, index) => <Todo key={index} item={item} />)
      }
    </div>
  )
}

export default Todos