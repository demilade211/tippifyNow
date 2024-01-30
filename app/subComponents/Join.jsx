'use client'

import React from 'react'
import styled from 'styled-components';

const Join = () => {
    return (
        <Con>
            <div className='inner'>
                <Left>
                    <div className='mb-14'><img className="" src="/images/pages/home/joinIcon.svg" alt="img" /></div>
                    <h1 className='mb-7'>Join the Tippify <br/>Revolution!</h1>
                    <p className='sub mb-7'>
                        Ready to transform your tipping experience?
                        Join Tippify today and discover a world of seamless,
                        secure, and personalized transactions.
                    </p>
                    <div>
                        <BlackButton>Download Tippify</BlackButton>
                    </div>

                </Left>
                <Right>
                    <img className="" src="/images/pages/home/joinImg.png" alt="img" />
                </Right>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;   
    padding: 30px;
    .inner{
        width: 100%; 
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.30); 
        backdrop-filter: blur(50px);
        padding: 21px 0px 21px 135px;
        display: flex;
        @media (max-width: 1200px) { 
            flex-direction: column-reverse;
            height: auto;
            padding: 30px;
        }
    }
`;

const Left = styled.div`  
  width: 40%;    
  display: flex;
  flex-direction: column;
  justify-content: center; 
  @media (max-width: 1200px) { 
    width: 100%;
    padding: 30px;
    align-items: center;
  } 
  h1{
    color: #000;
    font-family: "Big Shoulders Display";
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 20px;
        text-align: center;
    }
  }
  .sub{
    color: #000;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.2px;
    @media (max-width: 1200px) { 
        font-size: 12px;
        text-align: center;
    }
  } 
`;

const Right = styled.div`  
  width: 60%; 
  height: 100%; 
  display:flex;
  justify-content: center;
  align-items: flex-end;
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 100px 50px;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
`;

const BlackButton = styled.button`  
    padding: 20px 80px; 
    border:none;
    border-radius: 20px;
    background: #000;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-family: "Big Shoulders Display";
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 2.5px;
    cursor:pointer;
    outline:none;
    @media (max-width: 600px) { 
        font-size: 12px;
        padding:20px 40px;
    }
    &:hover {
        background: none; /* Remove background color on hover */
        border: 2px solid #000; /* Add border on hover */
        color: #000; /* Text color on hover */
        transition: 200ms ease-in;
    } 
`;

export default Join