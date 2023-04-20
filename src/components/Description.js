import backgroundImg from "../background.jpg"

const Description = () => {
  
  return (
    <div className='d-flex justify-content-center align-items-center description'>
      <img src={backgroundImg} alt="" className='bgImg'/>
      <h1 className='desc-text'>
      Welcome to Matours
        </h1>
    </div>
  )
}

export default Description
