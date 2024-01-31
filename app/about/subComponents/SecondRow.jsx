'use client'

import styled from 'styled-components';

const SecondRow = () => {
    return (
        <Con>
            <div className='inner'> 
                <h1>Finally, Recieve Tips without Hassle </h1>
                <p className='sub'>At Tippify, we believe that every transaction has the potential to create a connection, to express gratitude, and to build a community bound by generosity. </p>
                <div className='stats-con'>
                    <div className='stats'>
                        <h2>700k+</h2>
                        <p>Users</p>
                    </div>
                    <div className='stats'>
                        <h2>4000+</h2>
                        <p>New Users a day</p>
                    </div>
                    <div className='stats'>
                        <h2>40,000</h2>
                        <p>Transaction Per Day</p>
                    </div>
                    <div className='stats'>
                        <h2>$5.1M</h2>
                        <p>Amount Raised</p>
                    </div>
                </div>  
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%; 
    padding:30px; 
    @media (max-width: 1200px) {  
        padding: 10px;
    }
    .inner{
        width: 100%;  
        border-radius: 50px;
        background: #FFF8B6;
        padding: 80px 100px;
        @media (max-width: 1200px) { 
            flex-direction: column-reverse;
            height: auto;
            padding: 40px;
        }
        h1{
            color: #0A0B09;
            font-family: "Big Shoulders Display";
            font-size: 60px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-align: center;
            margin-bottom:40px;
            @media (max-width: 1200px) {  
                font-size: 30px;
            } 
        }
        .sub{
            color: #0A0B09;
            text-align: center;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-bottom:60px;
            @media (max-width: 1200px) {  
                font-size: 14px;
            } 
        }
        .stats-con{
            width: 100%;
            justify-content: space-around;
            display: flex;
            flex-wrap:wrap;
            @media (max-width: 1200px) {  
                display: grid;
                justify-content: center;
                grid-template-columns: 1fr 1fr;
                row-gap: 30px;
            } 
            .stats{
                h2{
                    color: #0A0B09;
                    font-family: "Big Shoulders Display";
                    font-size: 50px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    text-align: center;
                    @media (max-width: 1200px) {  
                        font-size: 25px;
                    } 
                }
                p{
                    color: #0A0B09;
                    text-align: center;
                    font-family: "Big Shoulders Display";
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    @media (max-width: 1200px) {  
                        font-size: 14px;
                    } 
                }
            }
        }

    }
`;

export default SecondRow