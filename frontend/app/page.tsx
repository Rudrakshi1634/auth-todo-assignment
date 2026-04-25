'use client'

import {useState} from 'react'

export default function Home(){

const [task,setTask]=useState('')
const [todos,setTodos]=useState<string[]>([])

function addTodo(){

if(task==='') return

setTodos([...todos,task])
setTask('')
}

function deleteTodo(index:number){

const newTodos=
todos.filter((_,i)=>i!==index)

setTodos(newTodos)
}

return(
<div style={{padding:'40px'}}>

<h1>Todo Dashboard</h1>

<input
value={task}
placeholder='Add Task'
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTodo}>
Add
</button>

<br/><br/>

{todos.map((todo,index)=>(

<div key={index}>

{todo}

<button
onClick={()=>deleteTodo(index)}
style={{marginLeft:'10px'}}
>
Delete
</button>

</div>

))}

</div>
)
}