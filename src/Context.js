import React, {useState} from "react"
const Context = React.createContext() 


function ContextProvider({children}) {
  const [isEditorMin, setIsEditorMin] = useState(true)
  const [isPreviewerMin, IsPreviewerMin] = useState(true)
  const [editorValue, setEditorValue] = useState("")
  

  return (
    <Context.Provider value={{isEditorMin, isPreviewerMin, setIsEditorMin, IsPreviewerMin, editorValue, setEditorValue}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}