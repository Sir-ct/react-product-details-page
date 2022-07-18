import { useState , useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Watch from './components/Watch'
import details from '../productdata'
import Feature from './components/Feature'

function App() {
  const [watchStyle, setWatchStyle] = useState("")
  const [watchUrl, setWatchUrl] = useState("")
  const [feature, setFeature] = useState("")

  
  let watchDetails = details.colorOptions.map((item, index) => {
    return(<Watch key={index} wstyle={watchStyle} img={item.imageUrl} name={item.styleName} onclick = {selectWatch}/>)
  })
  
  let features = details.featureList.map((item, index)=>{
    return(<Feature feat={item} statefeat={feature} onclick={toggleFeature}/>)
  })

  function selectWatch(style, img){
    setWatchStyle(style)
    setWatchUrl(img)
  }

  function toggleFeature(feat){
    setFeature(feat)
  }

  return (
   <>
    <Header />
    <div className="main-section">
    <div className="main-display">
      {watchUrl && <img src={watchUrl} alt="current-product" />}
    </div>

    <div className="details-display">
      <h1 className="title">
        {details.title}
      </h1>
      <p className="details">
        {details.description}
      </p>
      
      <section>
      <h2>select color</h2>
      <div className="color-select">
       {watchDetails}
      </div>
      </section>

     <section>
      <h2>Features</h2>
     <div className="features">
        {features}
      </div>
     </section>

     <div className="buy-btn">
      Buy Now
     </div>
    </div>

    </div>
   </>
  )
}

export default App
