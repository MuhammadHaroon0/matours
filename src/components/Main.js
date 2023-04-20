import Destination from './Destination';
// name={item.name} img={item.preview.source} address={item.address}
const Main = ({destinationsData}) => {
  
let destinations=destinationsData.map(item=>{
  return <Destination {...item} key={item.xid}/>
})
  return (

    <div className='mainBody container my-4 text-center'>
      <h1 className='mainHead'>Top Destinations in the World</h1>
      <div className='destinations row row-cols-1 row-cols-md-3 g-4 my-1 mx-auto'>
      {destinations}
      </div>
    </div>
  )
}

export default Main
