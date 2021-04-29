import React, {useState, useContext} from "react"
import {Context} from "../../Context"

function EditorPreviwerOptions({title, styles}) {
  const {isEditorMin, isPreviewerMin, setIsEditorMin, IsPreviewerMin} = useContext(Context)
  const [isMax, setIsMax] = useState(false)

  const maxMinToggler = () => {
    setIsMax(!isMax)
    if(title === "Editor") {
      setIsEditorMin(isMax)
    } else {
      IsPreviewerMin(isMax)
    }
  }

  const isMaxOrMinIcon = isMax 
    ? <i className="min fas fa-compress-arrows-alt" onClick={() => maxMinToggler()} ></i>
    : <i className="max far fa-window-maximize" onClick={() => maxMinToggler()} ></i>

  return (
    <div className="editor-previwer-options" style={styles.border}>
      <h2 className="heading" style={title === "Editor" ? styles.fontFamilyEditor : styles.fontFamilyPreviewer}>{title}</h2>
      {isMaxOrMinIcon}
      <i className="drag far fa-compass" style={!isEditorMin || !isPreviewerMin ? {display: "none"} : null}></i>
    </div>
  )
}

export default EditorPreviwerOptions

