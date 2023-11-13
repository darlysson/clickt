import { josefinSans } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import { css, cx } from '../../styled-system/css'
import { container, flex } from '../../styled-system/patterns'

export default function Navbar() {
  const links = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Portfolio',
      url: '/portfolio'
    },
    {
      label: 'About us',
      url: '/about'
    },
    {
      label: 'Contact',
      url: '/contact'
    },
    {
      label: 'Clients',
      url: '/clients'
    }
  ]

  return (
    <header className={cx(container({ maxWidth: '1400px' }), css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2, py: '1.5rem' }))}>
      <Link href="/">
        <Image src="/logo.webp" alt="Clickt Logo" width={100} height={30} />
      </Link>

      <ul className={flex({ gap: '30px', direction: 'row' })}>
        {links.map(link => {
          return (
            <li key={link.label} className={cx(josefinSans.className, css({ py: '25px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#FFF' }))}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
