import React from 'react'

const Destination = (props) => {
  let obj={

    tempUrl:"https://images.wallpaperscraft.com/image/single/mountains_trees_snow_887330_1280x720.jpg",
    tempDesc:"Ayubia National Park or City Forest National Park was a national park located in Srinagar, Jammu and Kashmir, India. It covered an area of 9.07 km2. Notified in 1986, the name of the park commemorated the Indian ornithologist Salim Ali. The park was converted into the Royal Springs Golf Course, Srinagar between 1998 and 2001 by Farooq Abdullah, the then Chief Minister of Jammu & Kashmir.His interest in Golf is very well known and encouraged him for the Golf course project next to Ecologically fragile Dal Lake.",
    tempName:"Ayubia National Park",
    tempUrl:"https://images.wallpaperscraft.com/image/single/mountains_trees_snow_887330_1280x720.jpg"
  }
  const wikipediaExtracts = props?.wikipedia_extracts || {};
  return (
    <div>
      <div className="card h-100 rounded-0 shadow" >
  <img src={props.preview?props.preview.source:obj.tempUrl} className="card-img-top rounded-0 destinationImg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title overflow-hidden" style={{height: "50px"}}>{props.name||obj.tempName}</h5>
    <p className="card-text overflow-hidden" style={{height: "92px"}}>{wikipediaExtracts.text || obj.tempDesc}</p>
    <a href={props.wikipedia||obj.tempUrl} target="_blank" className="btn btn-info">Explore More</a>
  </div>
</div>
    </div>
  )
}

export default Destination
