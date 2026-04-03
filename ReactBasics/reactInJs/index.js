function Header({name}){
return (
    <h1> Welcome to Indian Election Commission "{name}"</h1>
)
}

function Main(){
  return (
    <h1>This is information about us</h1>
  )
}

function Footer(){
  return (
    <h3>Thanks for Visiting our Website</h3>
  )
}

function App(){
  return (<>
  <Header name="Divanshu Saini"></Header>
<Main></Main>
<Footer></Footer>
  </>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);