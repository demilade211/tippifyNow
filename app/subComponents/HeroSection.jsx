'use client'

import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Con>
      <Left>
        <h1 className='mb-8'>Tippify, Your Gateway<br /> to Effortless Tipping</h1>
        <p className='sub mb-8'>
          Elevate your tipping experience with Tippify - the app
          designed to redefine how you send and receive tips. Discover
          a world where transactions are not just transactions;
          they're moments of connection, appreciation, and support.
        </p>
        <div className='flex mb-8'>
          <div className='mr-5'>
            <img className="" src="/images/pages/home/ps.png" alt="img" />
          </div>
          <div>
            <img className="" src="/images/pages/home/as.png" alt="img" />
          </div>
        </div>
        <div className='comm-con flex items-center mb-8'>
          <div className='left mr-3'>
            <h2>Join</h2>
            <p>Our Community</p>
          </div>
          <div>
            <img className="" src="/images/pages/home/comm.png" alt="img" />
          </div>
        </div>
      </Left>
      <Right>
        <img className="mt-5" src="/images/pages/home/rightImg.png" alt="img" />
      </Right>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  display: flex;
  background: #0B0606; 
  @media (max-width: 1200px) { 
    flex-direction: column-reverse;
    height: auto;
  }
`;

const Left = styled.div`  
  width: 50%;   
  padding-left :120px;  
  padding-top:80px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  @media (max-width: 1200px) { 
    width: 100%;
    padding: 30px;
  } 
  h1{
    color: #FFF;
    font-family: "Big Shoulders Display";
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 30px;
    }
  }
  .sub{
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 12px;
    }
  }
  .comm-con{
    h2{
        color: #FFF;
        font-family: "Big Shoulders Display";
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media (max-width: 1200px) { 
            font-size: 30px;
        }
    }
    p{
        color: #FFF;
        font-family: "Big Shoulders Display";
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        white-space:nowrap;
        @media (max-width: 1200px) { 
            font-size: 16px;
        }
    }
  }
`;

const Right = styled.div`  
  width: 50%; 
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

export default HeroSection