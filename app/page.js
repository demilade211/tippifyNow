'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from './subComponents/HeroSection';
import Why from './subComponents/Why';

const Home = () => {
  return (
    <AppLayout>
      <Con>
        <HeroSection />
        <Why/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Home