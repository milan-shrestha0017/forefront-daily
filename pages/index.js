import Layout from './Layout'
import Header from './Header'
import List from './List'
import FfContent from './FfContent'

export default function Home() {
  return (
    <Layout pageTitle = "ForeFront Daily Picks">
      <Header />
      <List />
      <FfContent />
    </Layout>
  )
}
