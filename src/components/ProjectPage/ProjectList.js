import {useState,useMemo} from 'react'
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import Pro from '../../data/project'
import { Col,Row,Container,Button } from 'react-bootstrap'
import Pagination from '../Pagination';
let PageSize = 6;
const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Pro.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [filter, setFilter] = useState("all")
  return (
    <Projectlist>
        <Row className="my-3 ms-0">
          <Container>
            <Button
              disabled={filter === "all" ? true : false}
              onClick={() => {
                setFilter("all");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              All
            </Button>
            <Button
              disabled={filter === "web" ? true : false}
              onClick={() => {
                setFilter("web");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              Web
            </Button>
            <Button
              disabled={filter === "python" ? true : false}
              onClick={() => {
                setFilter("python");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              Python
            </Button>
            <Button
              disabled={filter === "java" ? true : false}
              onClick={() => {
                setFilter("java");
              }}
              className="me-2 filter"
              style={{ borderRadius: "3em" }}
            >
              Java
            </Button>
          </Container>
        </Row>
        <Col className="list">
            {filter === "all"
            ? 
              Pro.map(i => {
                return <ProjectCard key={i.id} liveLink={i.live_link} codeLink={i.code_link} discription={i.discription} name={i.name} preview={i.preview}/>
              }):
              Pro.filter((d) => {
                return d.type === filter;
              }).map(i => {
                return <ProjectCard key={i.id} liveLink={i.live_link} codeLink={i.code_link} discription={i.discription} name={i.name} preview={i.preview}/>
              })
            }
        </Col>
        {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={Pro.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
    </Projectlist>
  )
}

export default ProjectList

const Projectlist=styled.div`
background: #ffffff;
padding: 15px;
padding-bottom: 3em;
.list{
     display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 2rem;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
}
.list::-webkit-scrollbar {
  width: 8px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}
.pagination-bar {
  width: 100%;
  display: flex;
  justify-content: center;
}

`