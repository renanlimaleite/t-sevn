import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Content } from ".."
import api from "../../services/api"
import { Header } from "../components/Header/header"
import { Publicidade } from "../components/Publicidade/publicidade"

import S from './style.module.scss'


interface PostProps {
  data: {
    id: number
    type: string
    categorie: string
    title: string
    content: Content[]
  }
}

const Posts: NextPage<PostProps> = (props) => { 
  const { id, content, categorie, title, type } = props.data
  console.log(id, content, categorie, title, type)
  return (
    <>
      <Header back={true}>
        <h1>SEVN NEWS</h1>
      </Header>
      <main className={S.content}>
        <strong>{categorie.toUpperCase()}</strong>
        <h1 className={S.title}>{title}</h1>
        {!!content.length && content.map((cont => (
          <>
            <p>{cont.resume}</p>
            <strong className={S.date}>{cont.date}</strong>
            <Publicidade>
              <h2>Publicidade</h2>
            </Publicidade>
            <p className={S.text}>{cont.text}</p>
          </>
        )))}
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const [main, secondary] = await Promise.all([api.get('/news'), api.get('/news/secondary')]) 

  const getIds = [...main.data, ...secondary.data]

  const paths = getIds.map((page) => {
    return {
      params: {
        id: page.id
      }
    }
  })
  
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx?.params?.id
  const { data } = await api.get(`/news/${id}`)
  console.log(data)
  return {
    props: {
      data
    }
  }
}

export default Posts