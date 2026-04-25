'use client'

import { useState } from 'react'

export default function Home() {

const [loggedIn,setLoggedIn]=useState(false)

const [user,setUser]=useState('')
const [pass,setPass]=useState('')

const [task,setTask]=useState('')
const [todos,setTodos]=useState([])

function signup(){

if(!user || !pass){
alert('Fill all fields')
return
}

localStorage.setItem(
'user',
user
)

localStorage.setItem(
'pass',
pass
)

alert('Signup successful')
}

function login(){

const savedUser=
localStorage.getItem('user')

const savedPass=
localStorage.getItem('pass')

if(
user===savedUser &&
pass===savedPass
){
setLoggedIn(true)
}
else{
alert('Wrong login')
}

}

function addTodo(){

if(!task) return

setTodos([...todos,task])

setTask('')
}

function deleteTodo(index){

setTodos(
todos.filter(
(_,i)=>i!==index
)
)

}

if(!loggedIn){
return(
<div style={{padding:40}}>

<h1>Signup / Login</h1>

<input
placeholder="Username"
value={user}
onChange={(e)=>setUser(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={pass}
onChange={(e)=>setPass(e.target.value)}
/>

<br/><br/>

<button onClick={signup}>
Signup
</button>

<button
onClick={login}
style={{marginLeft:10}}
>
Login
</button>

</div>
)
}

return(
<div style={{padding:40}}>

<h1>Todo App</h1>

<input
value={task}
placeholder="Add task"
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
style={{marginLeft:10}}
>
Delete
</button>

</div>
))}

</div>
)

}