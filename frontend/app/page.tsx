'use client'

import { useState, useEffect } from 'react'

export default function Home(){

const [screen,setScreen]=useState('signup')
const [user,setUser]=useState('')
const [pass,setPass]=useState('')
const [savedUser,setSavedUser]=useState('')
const [savedPass,setSavedPass]=useState('')
const [loggedIn,setLoggedIn]=useState(false)

const [task,setTask]=useState('')
const [todos,setTodos]=useState<string[]>([])

useEffect(()=>{

const storedUser=localStorage.getItem('user')
const storedPass=localStorage.getItem('pass')
const storedTodos=localStorage.getItem('todos')

if(storedUser){
setSavedUser(storedUser)
setScreen('login')
}

if(storedPass){
setSavedPass(storedPass)
}

if(storedTodos){
setTodos(JSON.parse(storedTodos))
}

},[])

function signupHandler(){

if(!user || !pass){
alert('Enter username and password')
return
}

localStorage.setItem('user',user)
localStorage.setItem('pass',pass)

setSavedUser(user)
setSavedPass(pass)

alert('Signup successful')
setScreen('login')
}

function loginHandler(){

if(user===savedUser && pass===savedPass){
setLoggedIn(true)
}
else{
alert('Wrong login')
}

}

function addTask(){

if(!task) return

const updated=[...todos,task]

setTodos(updated)
localStorage.setItem(
'todos',
JSON.stringify(updated)
)

setTask('')
}

function deleteTask(index:number){

const updated=
todos.filter((_,i)=>i!==index)

setTodos(updated)

localStorage.setItem(
'todos',
JSON.stringify(updated)
)
}

function logout(){
setLoggedIn(false)
}

if(!loggedIn){

if(screen==='signup'){
return(
<div style={{padding:40}}>
<h1>Signup</h1>

<input
placeholder='Username'
value={user}
onChange={(e)=>setUser(e.target.value)}
/>

<br/><br/>

<input
type='password'
placeholder='Password'
value={pass}
onChange={(e)=>setPass(e.target.value)}
/>

<br/><br/>

<button onClick={signupHandler}>
Signup
</button>

<br/><br/>

<button onClick={()=>setScreen('login')}>
Go To Login
</button>

</div>
)
}

return(
<div style={{padding:40}}>
<h1>Login</h1>

<input
placeholder='Username'
value={user}
onChange={(e)=>setUser(e.target.value)}
/>

<br/><br/>

<input
type='password'
placeholder='Password'
value={pass}
onChange={(e)=>setPass(e.target.value)}
/>

<br/><br/>

<button onClick={loginHandler}>
Login
</button>

<br/><br/>

<button onClick={()=>setScreen('signup')}>
Back To Signup
</button>

</div>
)
}

return(
<div style={{padding:40}}>
<h1>Todo App</h1>

<input
value={task}
placeholder='Add task'
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTask}>
Add
</button>

<button
onClick={logout}
style={{marginLeft:'10px'}}
>
Logout
</button>

<br/><br/>

{todos.map((t,i)=>(
<div key={i}>

{t}

<button
onClick={()=>deleteTask(i)}
style={{marginLeft:'10px'}}
>
Delete
</button>

</div>
))}

</div>
)

}