'use client'

import styled from 'styled-components';

let ques = [
    {
        question: "What is Tippify?",
        answer: ""
    },
    {
        question: "How does Tippify Work?",
        answer: ""
    },
    {
        question: "Is Tippify Secure",
        answer: ""
    },
    {
        question: "Can I use Tippify Internationally?",
        answer: ""
    },
    {
        question: "Are there any fees for using Tipify?",
        answer: ""
    },
    {
        question: "What makes Tippify different?",
        answer: ""
    },
    {
        question: "Can I customize my tipping profile on Tippify?",
        answer: ""
    },
    {
        question: "How can I get support if I have issues with Tippify?",
        answer: ""
    },
    {
        question: "How can I get support if I have issues with Tippify?",
        answer: ""
    },
    {
        question: "Is my Information private on Tippify?",
        answer: ""
    },

]

const Questions = () => {
    return (
        <Con>
            {ques.map((val, index) => (
                <Question key={index + 1} className={`${index===0 && "begin"}`}>
                    <div className='top flex items-center justify-between'>
                        <div className='flex items-center'>
                            <p className='num mr-9'>{index + 1}.</p>
                            <p className='ques'>{val.question}</p>
                        </div>
                        <div>
                            <img className="" src="/images/pages/faq/up.svg" alt="img" />
                        </div>
                    </div>
                </Question>
            ))}
        </Con>
    )
}

const Con = styled.div`  
  width: 100%; 
  padding:70px;  
  @media (max-width: 1200px) {  
    padding: 30px; 
  }   
`;

const Question = styled.div`  
    width: 100%;   
    border-bottom: 1px solid #FFF; 
    background: rgba(0, 0, 0, 0.13);  
    padding: 30px;
    .top{
        p{
            color: #0A0B09;
            font-family: "Big Shoulders Display";
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            @media (max-width: 1200px) { 
                font-size: 16px; 
            }
        }
    }
    &.begin{
        border-radius: 20px 20px 0px 0px;
    }
`;

export default Questions