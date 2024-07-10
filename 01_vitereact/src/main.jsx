// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// not work
// function MyApp() {
//     return (
//         <div>
//             <h1>Custome App !</h1>
//         </div>
//     )
// }

// not work
// const ReactElement = { 
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = ( // not work
//     <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const anotherUser = "VK";

const ReactElement = React.createElement( // fixed sysntex by React (Works) all elements are complsry
    'a',
    {href: 'http://google.com', target: '_blenk'},
    'click to go google ',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    ReactElement
  
)
