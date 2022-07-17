import { ReactNode } from "react"
import S from './publicidade.module.scss'

interface PublicidadeProps {
  children: ReactNode
}

export function Publicidade({ children }: PublicidadeProps) {
  return (
    <div className={S.container}>
      {children}
    </div>
  )
}