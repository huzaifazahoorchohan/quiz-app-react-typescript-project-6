import React from 'react';
import { cardProps } from '../Types/Type';


export const QuestionCard: React.FC<cardProps> = ({ question, options, onnext, num, queslength }) => {
    return (
        <div className="container-fluid">
            <h6>Question No . {num+1} out of {queslength} </h6>
            <h5>{question}</h5>
            <div className = "quiz-option">
                {options.map((opt, indx)=>{
                    return <button key = {indx} value = {opt} onClick = {()=>onnext(opt)} >{opt}</button>
                })}
            </div>
        </div>
    )
};