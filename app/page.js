'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from './subComponents/HeroSection';

const Home = () => {
  return (
    <AppLayout>
      <Con>
        <HeroSection />
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Home