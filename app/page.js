'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from './subComponents/HeroSection';
import Why from './subComponents/Why';
import Features from './subComponents/Features';
import Join from './subComponents/Join';
import Testimonials from './subComponents/Testimonials';

const Home = () => {
  return (
    <AppLayout>
      <Con>
        <HeroSection />
        <Why/>
        <Features/>
        <Join/>
        <Testimonials/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Home