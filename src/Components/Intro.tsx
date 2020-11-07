import React, { useState } from 'react';

type introProps = {
    onselect: Function,
}

export const Intro: React.FC<introProps> = ({onselect}) => {
    let onEnter = (event: any) => {
        event.preventDefault()
        onselect(name)
    }
    let [name, setName] = useState<String>("");
    return (
        <div className="intro">
            <h1 className="intro-quiz" >QUIZ APP</h1>
            <form className="intro-form" onSubmit = {onEnter} >
                <input required type="text" onChange = {(e: any)=>setName(e.target.value)} className="form-control" placeholder="Enter your name..." />
                <button>ENTER</button>
            </form>
        </div>
    )
};
