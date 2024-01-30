'use client'

import React, { useState } from 'react'
import styled from 'styled-components';

const Why = () => {
    const [active, setActive] = useState(0)
    return (
        <Con>
            <Left>
                <h1>WHY TIPPIFY?</h1>
            </Left>
            <Right>
                <div className='slider-con'>
                    <div className='active-con'>
                        <div className={`dot ${active === 0 && "active"}`}></div>
                        <div className={`dot ${active === 1 && "active"}`}></div>
                        <div className={`dot ${active === 2 && "active"}`}></div>
                    </div>
                    <div className='left-right-con'>
                        <img className="mr-3" src="/images/pages/home/left.svg" alt="img" />
                        <img className="" src="/images/pages/home/right.svg" alt="img" />
                    </div>
                    <div className='content'>
                        <div className='left'>
                            <div className='tag'>
                                <p>
                                    START TIPPING

                                </p>
                            </div>
                            <div className='second-row flex'>
                                <h2>
                                    Intuitive Interface
                                    <img className="img" src="/images/pages/home/line.svg" alt="img" />
                                    <img className="mimg" src="/images/pages/home/mline.svg" alt="img" />
                                </h2>
                            </div>
                            <p>Navigate with ease! Tippify's intuitive design ensures a
                                smooth tipping experience for everyone.
                            </p>
                        </div>
                        <div className='right'>
                            <img className="" src="/images/pages/home/simg.png" alt="img" />
                        </div>
                    </div>
                </div>
            </Right>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;  
  display: flex;
  background: #FFF; 
  padding: 50px 90px;
  overflow: hidden;
  @media (max-width: 1200px) { 
    flex-direction: column;
    padding: 10px;
  }
`;

const Left = styled.div`  
  width: 35%;    
  display: flex; 
  justify-content: center; 
  align-items: center; 
  padding: 0 100px;
  @media (max-width: 1200px) { 
    width: 100%;
    padding: 30px;
  } 
  h1{
    color: rgba(41, 45, 50, 0.83);
    text-align: center;
    font-family: "Big Shoulders Display";
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 20px;
    }
  }  
`;

const Right = styled.div`  
  width: 65%;  
  display:flex;
  justify-content: center;
  align-items: flex-end; 
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 10px;  
  } 
  .slider-con{
    width: 100%; 
    border-radius: 50px;
    background: #E7FFDE;
    padding: 0px 0px 30px 70px;
    position: relative;
    @media (max-width: 611px) { 
        padding:20px;
    }
    .active-con{
        width: 100%; 
        display:flex; 
        position:absolute;
        top:20px; 
        .dot{
            width: 13px;
            height: 13px;
            border-radius:100%;
            background-color:#FFFFFF;
            margin-right:7px;
        }
        .active{
            background-color:#457D58;
        }
    }
    .left-right-con{
        display: flex;
        position:absolute;
        bottom: 39px;
        right: 40px;
    }
    .content{
        display: flex;
        .left{
            width: 50%;
            padding:50px 0; 
            .tag{
                width: 200px;
                padding: 15px 21px 14px 21px; 
                border-radius: 20px;
                background: #FFF;
                color: #292D32;
                margin-bottom:30px;
                display: flex;
                justify-content: center;
                align-items: center;
                @media (max-width: 611px) { 
                    display: none;
                }
                p{
                    font-family: Poppins;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    text-transform: capitalize; 
                    @media (max-width: 611px) { 
                        font-size: 15px;
                    }
                }
            }
            .second-row{
                h2{ 
                    color: #457D58;
                    font-family: "Big Shoulders Display";
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-bottom:30px;
                    position:relative; 
                    img{
                        position:absolute;
                        right:0;
                        bottom:-20px;
                    }
                    .img{
                        display: block;
                        @media (max-width: 611px) { 
                            display: none;
                        }
                    }
                    .mimg{
                        display: none;
                        bottom:-10px;
                        @media (max-width: 611px) { 
                            display: block;
                        }
                    }
                    @media (max-width: 611px) { 
                        font-size: 20px;
                    }
                }
            }
            p{
                color: #292D32;
                font-family: Poppins;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-transform: capitalize;
                @media (max-width: 611px) { 
                    font-size: 10px;
                }
            }
            
        }
        .right{
            width: 50%; 
            img{
                width: 100%;
                height:100%;
            }
        }
    }
  }
`;

export default Why