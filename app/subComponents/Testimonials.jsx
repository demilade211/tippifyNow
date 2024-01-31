'use client'

import React from 'react'
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <Con>
      <Left>
        <h1 className='mb-10'>Customer Testimonials</h1>
        <p className='sub'>Don't just take our word for it.
          Hear what our users have to say
          about the Tippify revolution!"
        </p>
      </Left>
      <Right>
        <div className='testi-card'>
          <div className='img'>
            <img className="" src="/images/pages/home/cimg1.png" alt="img" />
          </div>
          <p className='testi'>
            “Don't just take our word for it. Hear what our users have to say about
            the Tippify revolution!"
          </p>
          <div className='name'>
            <p >
              Micheal B Richard
            </p>
          </div>
        </div>
        <div className='testi-card'>
          <div className='img'>
            <img className="" src="/images/pages/home/cimg2.png" alt="img" />
          </div>
          <p className='testi'>
            “Don't just take our word for it. Hear what our users have to say about
            the Tippify revolution!"
          </p>
          <div className='name'>
            <p >
              Micheal B Richard
            </p>
          </div>
        </div>
        <div className='testi-card'>
          <div className='img'>
            <img className="" src="/images/pages/home/cimg1.png" alt="img" />
          </div>
          <p className='testi'>
            “Don't just take our word for it. Hear what our users have to say about
            the Tippify revolution!"
          </p>
          <div className='name'>
            <p >
              Micheal B Richard
            </p>
          </div>
        </div>
      </Right>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;    
  display: flex;
  padding: 30px 0;
  @media (max-width: 1200px) { 
    flex-direction: column; 
    padding: 30px 10px;
  } 
`;

const Left = styled.div`  
  width: 45%;    
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  @media (max-width: 1200px) { 
    width: 100%;
    padding: 30px;
    align-items: center;
  } 
  h1{
    color: rgba(41, 45, 50, 0.83); 
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
  width: 55%; 
  height: 100%; 
  display:flex; 
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 30px;
  border-radius: 50px 0px 0px 50px;
  background: #FFF8B6;
  overflow-x:scroll;
  background: url('/images/pages/home/tbg.png') center no-repeat;
  background-size: cover; 
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
  .testi-card{
    min-width: 290px; 
    padding: 39px 18px 38px 28px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(10px);
    margin-right:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img{
      width: 100px;
      height: 100px;
      margin-bottom:20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .testi{
      color: #000;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
      margin-bottom:15px;
    }
    .name{
      width: 100%;
      display: flex;
      justify-content: flex-end; 
      p{
        color: rgba(41, 45, 50, 0.83);
        text-align: right;
        font-family: "Big Shoulders Display";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  } 

`;

export default Testimonials