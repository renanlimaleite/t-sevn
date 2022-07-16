import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import api from "../../services/api"

type Content = {
  date: string
  resume: string
  text: string
}

interface PostProps {
  data: {
    id: number
    content: Content[]
  }
}

const Posts: NextPage<PostProps> = (props) => { 
  const { id, content } = props.data
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
  return {
    props: {
      data
    }
  }
}

export default Posts