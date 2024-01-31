'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import Title from './subComponents/Title';
import Questions from './subComponents/Questions';

const Faq = () => {
  return (
    <AppLayout>
      <Con> 
        <Title/>
        <Questions/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Faq