import React from 'react';
import {useState} from 'react';

function TodoForm ({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput ('')
    }

    const handleKeyPress = (e) => {
        if(e.key ==='Enter'){
            handleSubmit(e)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введіть значення'
                />

            </form>
            <button>Зберегти</button>
        </div>
    );
};

export default TodoForm;