'use client'

import {useState} from 'react'

export default function Home(){

const [loggedIn,setLoggedIn]=useState(false)
const [identifier,setIdentifier]=useState('')
const [password,setPassword]=useState('')

const [task,setTask]=useState('')
const [todos,setTodos]=useState<string[]>([])

async function loginUser(){

const res=await fetch(
'http://localhost:1337/api/auth/local',
{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
identifier,
password
})
}
)

const data=await res.json()

if(data.jwt){
setLoggedIn(true)
}
else{
alert('Login failed')
}
}

function addTodo(){
if(task==='') return
setTodos([...todos,task])
setTask('')
}

if(!loggedIn){
return(
<div style={{padding:'40px'}}>
<h1>Login</h1>

<input
placeholder='Username'
onChange={(e)=>setIdentifier(e.target.value)}
/>

<br/><br/>

<input
type='password'
placeholder='Password'
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={loginUser}>
Login
</button>
</div>
)
}

return(
<div style={{padding:'40px'}}>
<h1>Todo Dashboard</h1>

<input
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder='New Task'
/>

<button onClick={addTodo}>
Add
</button>

{todos.map((todo,index)=>(
<div key={index}>
{todo}
</div>
))}

</div>
)
}