import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import S from './header.module.scss'

interface HeaderProps {
  back?: boolean
  children: ReactNode
}

export function Header({ children, back = false }: HeaderProps) {
  return (
    <header className={back ? S.headerBack : S.header}>
      {back &&
        <Link className={S.boxArrow} href="/">
          <a>
            <Image src="/arrow-left.svg" alt="Arrow Left" width={24} height={24} />
          </a>
        </Link>
      }
      {children}
    </header>
  )
}