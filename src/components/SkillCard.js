import styled from 'styled-components'

const SkillCard = ({name,link}) => {
  return (
    <Skill>
    <div className='ServiceCard'>
    <img className='service-logo' alt='not available' src={link} />
     <h4 className='service-name'>{name}</h4>
    <span className='service-line'></span>
 </div>
 </Skill>
  )
}

export default SkillCard

const Skill = styled.div`
    .ServiceCard{
    background: linear-gradient(192deg, rgb(3, 4, 18), rgb(57, 4, 4));
    padding: 10px;
    margin: 5px;
    box-shadow: 0px 0px 5px 2px;
    height: 130px;
    width: 130px;
    display: flex;
    flex-direction: column;
    border-radius: 0.7rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}
.ServiceCard:hover {
    background: linear-gradient(192deg,rgb(57, 4, 4) , rgb(3, 4, 18));
    transition: all  ease;
   }
.service-logo{
    height: 50px;
    width: 50px;
}
.ServiceCard:hover .service-logo{
    transform: scale(0.9);
    transition: all 0.5s ease;
}
.service-content{
    color: white;
    display: flex;
    flex-direction: column;
}
.service-line{
    border: 1.2px solid white;
    display: flex;
    width: 45px;
    background: white;
    border-radius: 5px;
}
.ServiceCard:hover .service-line{
    transform: translateY(-22px);
    transition: all 0.5s ease;
}
.service-name{
    color: white;
    text-align: center;
    font-weight: 500;
}
.ServiceCard:hover .service-name{
    transform: translateY(22px);
    transition: all 0.5s ease;
}
@media screen and (max-width:960px) {
    .ServiceCard{
        height: 135px;
        width: 120px;
    }
    .service-logo{
        height: 60px;
        width: 60px;
    }
    .services-cover-para {
        font-size: 1.1em;
        padding: 20px;
    }
}
@media screen and (max-width:960px) {
   
    .ServiceCard{
        height: 100px;
        width: 90px;
    }
    .service-logo{
        height: 30px;
        width: 30px;
    }
    .service-name{
    margin-top: 5px;
    font-size:small;
}
}
`