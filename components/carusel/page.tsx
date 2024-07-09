import React from 'react';
import { Carousel } from 'antd';
import Container from '../container/page';
import './style.css';
import Image from 'next/image';
import Img from '../../images/Mask group.png';

const App: React.FC = () => (
  <>
    <Container>
      <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden custom-carousel h-auto'>
        <div>
          <div className='carousel relative'>
            <Image src={Img} alt='Carousel Image' className=''/>
          </div>
        </div>
        <div>
          <div className='carousel relative'>
            <Image src={Img} alt='Carousel Image' className=''/>
          </div>
        </div>
        <div>
          <div className='carousel relative'>
            <Image src={Img} alt='Carousel Image' className=''/>
          </div>
        </div>
      </Carousel>
    </Container>
  </>
);

export default App;
