'use client'

import {useState} from 'react'

export default function Home(){

const [isLogin,setIsLogin]=useState(true)
const [loggedIn,setLoggedIn]=useState(false)

const [username,setUsername]=useState('')
const [password,setPassword]=useState('')

const [savedUser,setSavedUser]=useState('')
const [savedPass,setSavedPass]=useState('')

const [task,setTask]=useState('')
const [todos,setTodos]=useState<string[]>([])

function signup(){

if(!username || !password){
alert('Fill all fields')
return
}

setSavedUser(username)
setSavedPass(password)

alert('Signup Successful')
setIsLogin(true)
}

function login(){

if(
username===savedUser &&
password===savedPass
){
setLoggedIn(true)
}
else{
alert('Invalid login')
}
}

function addTodo(){
if(task==='') return
setTodos([...todos,task])
setTask('')
}

function deleteTodo(i:number){
setTodos(todos.filter((_,index)=>index!==i))
}

if(!loggedIn){

if(isLogin){
return(
<div style={{padding:'40px'}}>
<h1>Login</h1>

<input
placeholder='Username'
onChange={(e)=>setUsername(e.target.value)}
/>

<br/><br/>

<input
type='password'
placeholder='Password'
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={login}>
Login
</button>

<br/><br/>

<button onClick={()=>setIsLogin(false)}>
Signup Instead
</button>

</div>
)
}

return(
<div style={{padding:'40px'}}>
<h1>Signup</h1>

<input
placeholder='Username'
onChange={(e)=>setUsername(e.target.value)}
/>

<br/><br/>

<input
type='password'
placeholder='Password'
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={signup}>
Signup
</button>

<br/><br/>

<button onClick={()=>setIsLogin(true)}>
Back To Login
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
placeholder='Add task'
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