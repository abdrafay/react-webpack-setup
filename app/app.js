import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

function App(){
     return <div>Checking React</div>
}

ReactDOM.render(<App />, document.getElementById("app"))

// Accept Hot Reload
if(module.hot){
     module.hot.accept()
}