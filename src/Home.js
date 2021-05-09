import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

function Home( { handleLogout } ) {
    const [todoInput , setTodoInput] = useState("");


    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout} >Logout😑</button>
            </nav>

            <div className="center">
            <h1>TO DO LIST</h1>

            <TextField 
                id="standard-basic" 
                label="New Task" 
                value={todoInput}
                onChange={ e => setTodoInput(e.target.value)}
                />
            </div>
        </section>
    )
}

export default Home;
