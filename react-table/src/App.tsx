import './App.css'
import Collapsible from './components/Collapsible'
import Form from './components/Form'
import VirtualTable from './components/VirtualTable'


function App() {

  console.log('render...')

  return (
    <>
    <Collapsible title='Добавить запись'>
      <Form/>
    </Collapsible>
    <VirtualTable/>
    </>
  )
}

export default App
