import React, {useState, useContext} from "react"

import {Context} from ".././Context"

import EditorPreviwerOptions from "./sub-components/EditorPreviwerOptions"
import FadeIn from "../renderedComponents/FadeIn"

function Editor() {
  const {isEditorMin, isPreviewerMin, editorValue, setEditorValue} = useContext(Context)
  
  const handleChange = (event) => {
    const {value} = event.target
    setEditorValue(value)
  }
  
  const maximize = isEditorMin ? "editor-wrapper--minimize " : "editor-previewer-wrapper--maximize"
  const isMin = !isPreviewerMin ? {display: "none"} : null
  
  return (
    <FadeIn>
      {
        (fadeInEditorAndPreviewer, styles) => ( 
            <div className={`editor-wrapper ${fadeInEditorAndPreviewer} ${maximize}`} style={isMin}>
              <EditorPreviwerOptions styles={styles} title="Editor" />
              <textarea onChange={handleChange} value={editorValue} name="textarea" className="editor" rows="50"></textarea>
            </div>
          )
      }
    </FadeIn>
  )
}

export default Editor