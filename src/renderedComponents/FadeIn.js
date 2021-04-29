import React, {useState, useEffect} from "react"

function FadeIn (props) {

  const [fadeInEditorAndPreviewer, setFadeInEditorAndPreviewer] = useState("")
  const [styles] = useState({
    border: {border: "3px solid #20344F"}, 
    fontFamilyEditor: {fontFamily: "'Space Mono', monospace"},
    fontFamilyPreviewer: {fontFamily: "'Lobster', cursive"}
  })

  useEffect(() => {
    setTimeout(() => {
      setFadeInEditorAndPreviewer("editor-previewer-wrapper--fadeIn")
    }, 3300);
  }, [])  
    
  return (
    <>
      {
        props.children(fadeInEditorAndPreviewer, styles)
      }
    </>
  )
}

export default FadeIn