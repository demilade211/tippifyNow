'use client'

import React from 'react'
import styled from 'styled-components';

const Features = () => {
    return (
        <Con>
            <HeadCon>
                <h1>Features</h1>
            </HeadCon>
            <GridCon>
                <div className='con'>
                    <div className='top flex justify-center'>
                        <img className="img" src="/images/pages/home/img1.png" alt="img" />
                    </div>
                    <div className='bottom'>
                        <h2>Bank Grade Security</h2>
                        <p>Trust Tippify with your transactions. Our bank-grade security ensures your money is safe and sound</p>
                    </div>
                </div>
                <div className='con'>
                    <div className='top flex justify-center'>
                        <img className="img" src="/images/pages/home/img2.png" alt="img" />
                    </div>
                    <div className='bottom'>
                        <h2>Personalized Features</h2>
                        <p>Make Tippify yours. Personalize settings, notification preferences, and explore a tailored tipping journey.</p>
                    </div>
                </div>
                <div className='con'>
                    <div className='top flex justify-center'>
                        <img className="img" src="/images/pages/home/img3.png" alt="img" />
                    </div>
                    <div className='bottom'>
                        <h2>Instant Notifications</h2>
                        <p>Receive real-time notifications for received tips, ensuring you never miss a moment of appreciation. Stay connected with instant updates on your tipping activity.</p>
                    </div>
                </div>
            </GridCon>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;   
  @media (max-width: 1200px) { 
  }
`;

const HeadCon = styled.section`  
  width: 100%;    
  padding: 19px 51px;
  background: linear-gradient(90deg, #568319 38.02%, rgba(255, 255, 255, 0.00) 88.36%);
  margin-bottom:30px;
  @media (max-width: 1200px) { 

  }
  h1{
    color: #FFF;
    font-family: "Big Shoulders Display";
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 20px;
    }
  }
`;

const GridCon = styled.section`  
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap:20px;
  justify-content: center;
  row-gap: 30px;
  @media (max-width: 1100px) { 
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) { 
    grid-template-columns: 100%;
    padding: 20px;
  }
  .con{
    height: 680px;
    border-radius: 50px; 
    @media (max-width: 1100px) { 
        height: auto;
    }
    .top{
        height: 60%;
        display: flex;
        justify-content: center;
        background: #F0F1F6;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    .bottom{ 
        height: 40%;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background: url('/images/pages/home/bbg.png') center no-repeat;
        padding: 30px; 
        h2{
            color: #FFF;
            font-family: "Big Shoulders Display";
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom:30px;
            text-align: center;
            @media (max-width: 1100px) { 
                font-size:18px;
            }
        }
        p{
            color: #FFF;
            text-align: center;
            font-family: Poppins;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2px;
            @media (max-width: 1100px) { 
                font-size:12px;
            }
        }

    }
  }
`;

export default Features