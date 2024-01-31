'use client'

import styled from 'styled-components';

const Title = () => {
    return (
        <Con>
            <div>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    fringilla sodales convallis non, dictum nec lorem.
                </p>
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
  @media (max-width: 1200px) {  
    padding: 30px;
    height:40vh ;
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