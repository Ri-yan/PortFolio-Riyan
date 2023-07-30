import SkillCard from './SkillCard';
import {SkillData} from './SkillData';
import styled from 'styled-components'

const SkillList = () => {
  return (
    <Skilllist>
        <h2>Skills & Abilities</h2>
    <div className='list'>
      {
        SkillData.map((val, i) => {
          return (
            <SkillCard
              key={i}
              id={val.id}
              name={val.name}
              link={val.link}
              />
          );
        })
      }
    </div>
    </Skilllist>
  )
}

export default SkillList

const Skilllist = styled.div`
background: #3c63e87d;
padding: 10px;
padding-top: 3em;
padding-bottom: 3em;
.list{
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 2rem;
    justify-content: center;
    padding: 2em 1em;
    background: #00000080;
    border-radius: 15px;
}
@media screen and (max-width:960px) {
.list{
        margin: 1em 0.5em;
        padding: 2em 9px;
        gap: 0.1em;
    }
  }
  h2{
    font-family: 'MuseoModerno',cursive;
  font-weight: 600;
  }
`
