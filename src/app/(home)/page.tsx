import { css, cx } from '../../../styled-system/css';
import { josefinSans } from '../layout';

export default async function Home() {
  // const images = await fetchHomepageImages();
  // const url = images[0].homepageImages[0].asset._ref

  return (
    <div
      className={cx(
        css({
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          minHeight: '100%',
          minWidth: '1024px',
          height: 'auto',
          bgImage: `url(https://cdn.sanity.io/images/zszt8ra7/production/e8b1bcb69f9221ce797cdd7406decfc49e908e1c-1200x800.webp)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          // '&:after': {
          //   content: '',
          //   position: 'fixed',
          //   top: 0,
          //   right: 0,
          //   bottom: 0,
          //   left: 0,
          //   backgroundColor: 'rgba(0,0,0,.35)'
          // }
        }),
        josefinSans.className
      )}
    >
      <div className={cx(css({ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }), josefinSans.className)}>
        <div>
          <p className={css({ fontSize: '16px', fontWeight: 'bold', letterSpacing: '7px' })}>FRAMED EMOTIONAL MEMORIES</p>
          <h1 className={cx(css({ fontSize: '70px', fontWeight: 'bold', marginTop: '40px' }))}>CLICKT</h1>
          <h3 className={css({ fontSize: '16px', fontWeight: '400', letterSpacing: '4px', mt: '24px', maxWidth: '300px', margin: 'auto' })}>PHOTOGRAPHY & VIDEO EST. 2010</h3>
        </div>
      </div>

      <div className={css({ position: 'absolute', bottom: 30, left: 50, fontSize: '16px', fontWeight: '400', letterSpacing: '2.4px' })}>
        <p>CLICKT © All Rights Reserved 2023</p>
      </div>
    </div>
  )
}
