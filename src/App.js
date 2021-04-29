import React from "react";

import Intro from "./components/Intro"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"

function App () {
  
  return (
    <div className={`editor-previewer-wrapper`}>
      <Intro />
      <Editor />
      <Previewer />
    </div>
  )
}

export default App