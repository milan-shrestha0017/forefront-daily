import Layout from '../components/Layout'
import Header from '../components/Header'
import List from '../components/List'
import FfContent from '../components/FfContent'

export default function Home() {
  return (
    <Layout pageTitle = "ForeFront Daily Picks">
      <Header />
      <List />
      <FfContent />
    </Layout>
  )
}
