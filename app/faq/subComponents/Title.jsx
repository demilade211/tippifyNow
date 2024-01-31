'use client'

import styled from 'styled-components';

const Title = () => {
    return (
        <Con>
            <div>
                <h1 className='pc'>Frequently Asked <br/>Questions</h1>
                <h1 className='mobile'>FAQ</h1>
                <p>Having Problems? Contact us. </p>
            </div>
        </Con>
    )
}

const Con = styled.div`  
  width: 100%;
  height:70vh ;
  background: #0B0606;
  padding:70px 150px;
  display: flex;
  align-items: flex-end;
  margin-bottom:30px;
  background: url('/images/pages/faq/fbg.png') center no-repeat;
  background-size: cover; 
  @media (max-width: 1200px) {  
    padding: 30px;
    height:40vh ;
  } 
  .mobile{
    display: none;
    @media (max-width: 1200px) {  
      display: flex;
    } 
  }
  .pc{ 
    @media (max-width: 1200px) {  
      display: none;
    } 
  }
  h1{
    color: #457D58;
    font-family: "Big Shoulders Display";
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    @media (max-width: 1200px) {  
        font-size: 25px;
    } 
  }
  p{
    color: #FFF;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 1200px) {  
        font-size: 12px;
    }
  }
`;

export default Title