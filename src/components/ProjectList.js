import {useState,useMemo} from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import Pro from '../data/project'
import { Col } from 'react-bootstrap'
import Pagination from './Pagination';
let PageSize = 6;
const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Pro.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <Projectlist>
        <h2>Highlights</h2>
        <Col className="list">
            {
              currentTableData.map((i,k)=> {
                return <ProjectCard key={k} liveLink={i.live_link} codeLink={i.code_link} discription={i.discription} name={i.name} preview={i.preview}/>
              })
            }
            {/* <ProjectCard name='Project Name' preview='https://www.projectsmart.co.uk/img/tw-project-management-word-cloud.jpg'/>
            <ProjectCard name='Project Name' preview='https://www.projectsmart.co.uk/img/tw-project-management-word-cloud.jpg'/>
            <ProjectCard name='Project Name' preview='https://www.projectsmart.co.uk/img/tw-project-management-word-cloud.jpg'/>
            <ProjectCard name='Project Name' preview='https://www.projectsmart.co.uk/img/tw-project-management-word-cloud.jpg'/>
            <ProjectCard name='Project Name' preview='https://www.projectsmart.co.uk/img/tw-project-management-word-cloud.jpg'/> */}

        </Col>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={Pro.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </Projectlist>
  )
}

export default ProjectList

const Projectlist=styled.div`
background: #a0e6ff7d;
padding: 15px;
padding-top: 3em;
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
h2{
  font-family: 'MuseoModerno',cursive;
  font-weight: 600;
}
`