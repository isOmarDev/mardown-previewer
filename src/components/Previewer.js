import React, {useContext} from "react"

import {Context} from ".././Context"

import EditorPreviwerOptions from "./sub-components/EditorPreviwerOptions"
import FadeIn from "../renderedComponents/FadeIn"

// markdown parser
const renderer = new marked.Renderer();

function Previewer() {
  const {isPreviewerMin, isEditorMin, editorValue} = useContext(Context)
  const maximize = isPreviewerMin ? "previewer-wrapper--minimize" : "editor-previewer-wrapper--maximize"

  return ( 
    <FadeIn>
       {(fadeInEditorAndPreviewer, styles) => (
          <div  className={`previewer-wrapper ${fadeInEditorAndPreviewer} ${maximize}`} style={!isEditorMin ? {display: "none"} : null}>
            <EditorPreviwerOptions styles={styles} title="Previewer" />
            <div className="previewer" 
                dangerouslySetInnerHTML={{
                  __html: marked(editorValue, { renderer: renderer })
                }}>
            </div>
          </div>
        )
      }
    </FadeIn>
  )
}

export default Previewer