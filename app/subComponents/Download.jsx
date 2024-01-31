'use client'

import React from 'react'
import styled from 'styled-components';

const Download = () => {
  return (
    <Con>
      <div className='inner'>
        <Left>
          <h1>
            What are you waiting for?<br />
            Download the Tippify App<br />
            & get started now!
          </h1>
        </Left>
        <Right>
          <h2>Download the Tippify App accross all<br/>  platforms</h2>
          <div className='flex justify-center flex-col md:flex-row'>
            <div className=' md:mr-3 mb-4'>
              <p>Get it on</p>
              <div className='img'><img src="/images/components/fps.png" alt="img" /></div>
            </div>
            <div className=''>
              <p>Available on the</p>
              <div className='img'><img src="/images/components/fas.png" alt="img" /></div>
            </div>
          </div>
        </Right>
      </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;   
  padding: 30px;
  @media (max-width: 1200px) { 
    padding: 20px;
  }
  .inner{
    width: 100%;
    min-height: 466px; 
    border-radius: 50px;
    background: #0B0606;  
    padding:60px 60px;
    display: flex;  
    align-items:center;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) { 
      flex-direction: column;
      min-height: auto;
      padding: 30px 0;
    }
  }
`;

const Left = styled.div`  
  width:50%;
  display: flex; 
  @media (max-width: 1200px) { 
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  h1{
    color: #FFF;
    font-family: "Big Shoulders Display";
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 20px;
        text-align: center;
    }
  }
   
`;

const Right = styled.div`    
  width:40% ;
  display:flex;
  justify-content: center;
  flex-direction: column; 
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover; 
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px; 
    align-items :center ;
    .img{
      height: 40px;
      img{
        width: 100%;
        height:100%;
      }
    }
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
  h2{
    color: #FFF;
    font-family: "Big Shoulders Display";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom:30px;
    @media (max-width: 1200px) { 
      font-size: 16px;
      text-align: center;
    }
  }
  p{
    color: #FFF;
    font-family: "Big Shoulders Display";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2.5px;
    margin-bottom:20px;
    @media (max-width: 1200px) { 
      font-size: 16px;
      text-align: center;
    }
  }
  
`;

export default Download