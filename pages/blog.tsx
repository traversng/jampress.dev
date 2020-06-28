import { InferGetStaticPropsType } from 'next'

type Post = string[]

export const getStaticProps = async () => {
  const posts: Post = ['a', 'b', 'c']

  return {
    props: {
      posts
    },
  }
}

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("Blog -> posts", posts)
  // will resolve posts to type Post[]
  return (
    <h1>Blog</h1>
  )
}

export default Blog
