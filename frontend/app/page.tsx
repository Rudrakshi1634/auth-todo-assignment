'use client'

import {useState} from 'react'

export default function Home(){

const [isLogin,setIsLogin]=useState(true)

const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

async function signup(){

const res=await fetch(
'http://localhost:1337/api/auth/local/register',
{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
username,
email,
password
})
}
)

const data=await res.json()

if(data.jwt){
alert('Signup Success. Now Login.')
setIsLogin(true)
}else{
alert(JSON.stringify(data))
}
}

async function login(){

const res=await fetch(
'http://localhost:1337/api/auth/local',
{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
identifier:username,
password
})
}
)

const data=await res.json()

if(data.jwt){
alert('Login success')
}else{
alert('Login failed')
}
}

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
Go To Signup
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
placeholder='Email'
onChange={(e)=>setEmail(e.target.value)}
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