'use client'

import styled from 'styled-components';

const ThirdRow = () => {
  return (
    <Con>
      <TabCon>
        <Tab className='active'>
          <p>Our Mission</p>
        </Tab>
        <Tab>
          <p>Our Vision</p>
        </Tab>
        <Tab>
          <p>Our Goals</p>
        </Tab>
      </TabCon>
      <div className='content'>
        <div className='left mb-5 md:mb-0'>
          <h1>Our Mission</h1>
        </div>
        <div className='right'>
          <p>At Tippify, our mission is to cultivate a culture of meaningful
            connections through seamless financial interactions. We aspire to
            empower individuals to express appreciation, support, and gratitude
            effortlessly. Through cutting-edge technology and a commitment to
            user-centric design, we aim to transform each transaction into a
            moment of connection, fostering a global community bonded by shared
            values of generosity and mutual support.
          </p>
        </div>
      </div>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%; 
  padding:80px;   
  @media (max-width: 1200px) {  
    padding: 30px;
  }
  .content{
    display: flex;
    align-items: center;
    height: 366px;
    padding:80px;  
    border-radius: 20px;
    background: #F0F1F6; 
    @media (max-width: 1200px) { 
      flex-direction: column; 
      padding: 20px;
      height: auto;
    }
    .left{
      width: 30%;
      @media (max-width: 1200px) { 
        width: 100%;
      }
      h1{
        color: #61941B;
        font-family: "Big Shoulders Display";
        font-size: 78px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media (max-width: 1200px) {  
          font-size: 25px;
          text-align: center;
        }
      }
    }
    .right{
      width: 70%;
      @media (max-width: 1200px) { 
        width: 100%;
      }
      p{
        color: #0A0B09;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 1200px) {  
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
`;

const TabCon = styled.div`  
  width: 100%; 
  padding:10px;   
  border-radius: 20px;
  border: 3px solid #F0F1F6;
  background: #F0F1F6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom:30px;
`;

const Tab = styled.div`  
  padding: 22px 0px;
  border-radius: 10px 0px 0px 10px; 
  display: flex;
  justify-content: center;
  cursor: pointer;
  p{
    color: #0A0B09;
    text-align: center;
    font-family: "Big Shoulders Display";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1200px) {  
      font-size: 16px;
    }
  }
  &.active{
    background: #61941B;
    p{
      color: #FFF; 
    }
  }
`;

export default ThirdRow