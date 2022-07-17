import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Content } from ".."
import api from "../../services/api"



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
  return <h1>Post</h1>
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