'use client'

import { useState } from 'react'

export default function Home() {

const [screen,setScreen]=useState('signup')
const [user,setUser]=useState('')
const [pass,setPass]=useState('')
const [savedUser,setSavedUser]=useState('')
const [savedPass,setSavedPass]=useState('')
const [loggedIn,setLoggedIn]=useState(false)

const [task,setTask]=useState('')
const [todos,setTodos]=useState<string[]>([])

function signupHandler(){
if(!user || !pass){
alert('Enter username and password')
return
}

setSavedUser(user)
setSavedPass(pass)
alert('Signup successful. Now login.')
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
setTodos([...todos,task])
setTask('')
}

if(!loggedIn){

if(screen==='signup'){
return(
<div style={{padding:40}}>
<h1>Signup</h1>

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
placeholder="Add task"
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTask}>
Add
</button>

<br/><br/>

{todos.map((t,i)=>(
<div key={i}>
{t}
</div>
))}

</div>
)

}