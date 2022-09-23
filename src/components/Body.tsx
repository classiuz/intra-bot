import Navbar from './Navbar'
import Content from './Content'
import LinkList from './LinkList'
import Notes from './Notes'

const Body = () => {
  return (
    <main className="row j-space-b wth-95 gap-3 ms-auto">
      <div className="col wth-25">
        <Navbar />
      </div>
      <div className="col wth-100">
        <Content />
      </div>
      <div className="col gap-2 wth-25">
        <LinkList />
        <Notes />
      </div>
    </main>
  )
}

export default Body
