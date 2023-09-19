import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor:'white'
    // })
//     const[btnText,setBtnText]=useState("Enable Dark Mode")
// const toggleStyle=()=>{
//     if(myStyle.color==='black'){
//         setMyStyle({
//          color: 'white',
//         backgroundColor:'black',
//         border:'1px solid white'
//         })
//         setBtnText('Enable Light Mode');
//     }
//     else{
//         setMyStyle({
//             color: 'black',
//             backgroundColor:'white'
//         })
//         setBtnText('Enable Dark Mode');
//     
// }
let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'

}
  return (
    <div class="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
       <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextAnalyzer analyze your text efficiently. It can convert your text from lowercase to uppercase and uppercase to lowercase, remove extra spaces, copy the text ,count the words and character in your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        TextAnalyzer is a free text analyzer that helps you to manipulate your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextAnalyzer works on any browser be it chrome , microsoft edge etc. It works on any type of text as well.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
<button onClick={toggleStyle}type="button" className="btn btn-primary">{btnText}</button>
</div> */}
    </div>
  )
}
