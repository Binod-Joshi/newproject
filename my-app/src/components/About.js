import React  from 'react'

export default function About(props) {
    // const [myStyle,setMyState]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle={
      color:props.mode==='dark'?'white':'#292929',
      backgroundColor:props.mode==='dark'?'#292929':'white',
      
    }


  return (
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#292929'}}>
        <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
           <div className="accordion-item" style={myStyle}>
             <h2 className="accordion-header" id="headingOne">
               <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <strong>Analyse your text</strong>
               </button>
             </h2>
             <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
               <div className="accordion-body " style={myStyle}>
               Text analysis (TA) is a machine learning technique used to automatically
                extract valuable insights from unstructured text data
               </div>
             </div>
           </div>
           <div className="accordion-item" style={myStyle}>
             <h2 className="accordion-header" id="headingTwo">
               <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 <strong>Free to use</strong>
               </button>
             </h2>
             <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
               <div className="accordion-body" style={myStyle}>
               Search through thousands of royalty free text on my-app text.
               </div>
             </div>
           </div>
           <div className="accordion-item" style={myStyle}>
             <h2 className="accordion-header" id="headingThree">
               <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser compatible</strong> 
               </button>
             </h2>
             <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
               <div className="accordion-body" style={myStyle}>
               The term browser compatibility refers to the ability of a certain website to appear fully 
               functional on different browsers that are available in the market.
               </div>
             </div>
           </div>
         </div>
         
    </div>
  )
}
