'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import Title from './subComponents/Title';
import SecondRow from './subComponents/SecondRow';
import ThirdRow from './subComponents/ThirdRow';
import FourthRow from './subComponents/FourthRow';

const About = () => {
  return (
    <AppLayout>
      <Con>
        <Title/>
        <SecondRow/>
        <ThirdRow/>
        <FourthRow/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default About