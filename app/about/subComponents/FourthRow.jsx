'use client'

import styled from 'styled-components';

const FourthRow = () => {
  return (
    <Con>
      <div className='inner'>
        <Left>
          <h1 className='mb-7'>Our Team</h1>
          <p className='sub mb-7'>
            We are a resourceful team with a proven track record of building successful
            consumer and enterprise products used by millions of customers.
          </p>
          <div>
            <BlackButton>Contact the Team</BlackButton>
          </div>
        </Left>
        <Right>
          <img className="" src="/images/pages/about/people.png" alt="img" />
        </Right>
      </div>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%; 
  padding:30px;
  .inner{
    padding: 80px;
    border-radius: 50px;
    background: #030304;
    display: flex; 
    @media (max-width: 1200px) { 
        flex-direction: column-reverse;
        height: auto;
        padding: 20px;
    }
  } 
  @media (max-width: 1200px) {  
    padding: 10px;
  } 
`;

const Left = styled.div`  
  width: 50%;    
  display: flex;
  flex-direction: column;
  justify-content: center; 
  @media (max-width: 1200px) { 
    width: 100%;
    padding: 30px;
    align-items: center;
  } 
  h1{
    color: #FFF;
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
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 1200px) { 
        font-size: 12px;
        text-align: center;
    }
  } 
`;

const Right = styled.div`  
  width: 50%;  
  display:flex;
  justify-content: center;
  align-items: flex-end;
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 50px 50px;
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
    background: #61941B;
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


export default FourthRow