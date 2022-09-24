import Navbar from './Navbar'
import Content from './Content'
import LinkList from './LinkList'
import Notes from './Notes'

const Body = () => {
  return (
    <main className="row j-space-b wth-85 ms-auto hgh-100">
      <div className="col wth-30">
        <Navbar />
      </div>
      <div className="col wth-100">
        <Content />
      </div>
      <div className="col gap-2 wth-30">
        <LinkList />
        <Notes />
      </div>
    </main>
  )
}

export default Body
