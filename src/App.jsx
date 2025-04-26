import './App.css'
import Header from './assets/header.jsx'
import Box from './assets/box.jsx'
import Tag from './assets/tags.jsx'

function App() {
  const boxContainerStyle = {
    position: "absolute",
    left: "1",
    top: "15vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '80%',

  }

  return (
    <>
      <Header />
      <div style={boxContainerStyle}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <div className='tagbox'>
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
   
      </div>
    </>
  )
}

export default App