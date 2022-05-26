import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';
import VenturaAE86 from '../../public/Image/VENTURA-AE86.svg';
import { AE86Wrapper ,Wrapper404 } from './page404.styled';
const Page404 = () => {
  return (
    <Wrapper404>
      <h1 style={{ color: '#222' }}>
        404{' '}
        <span
          style={{
            display: 'inline-block',
            position: 'relative',
            height: '100%',
            width: 1,
            backgroundColor: '#222',
            margin: '0 5px 0 5px',
          }}
        />{' '}
        Page Not Found
      </h1>

      <AE86Wrapper>
        <div>
          <Image
            src={VenturaAE86}
            priority={true}
            layout='responsive'
            quality={100}
            alt='Toyota Corolla AE86 Ventura'
          />
        </div>
      </AE86Wrapper>

      <h2
        style={{
          color: '#222',
          opacity: 0.8,
          fontFamily: 'sans-serif',
          fontSize: 14,
        }}
      >
        <span style={{cursor:'pointer'}}onClick={()=>router.back()}>BACK </span>
      </h2>
    </Wrapper404>
  );
};

export default Page404;
