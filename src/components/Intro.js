import React, {useState, useEffect} from "react"

function Intro() {
  const [fadeInIntro, setFadeInIntro] = useState("") 
  const [fadeOutIntro, setFadeOutIntro] = useState("") 

  useEffect(() =>{
    setFadeInIntro("intro-wrapper--fadeIn")
    setTimeout(() => {
      setFadeInIntro("")
      setFadeOutIntro("intro-wrapper--fadeOut")
    }, 3000);
  }, [])

  return (
    <div className={`intro-wrapper ${fadeInIntro} ${fadeOutIntro}`}>
      <h1><span style={{display: "block", fontFamily: "'Space Mono', monospace"}}>Markdown</span> Previewer</h1>
    </div>
  )
}

export default Intro
