import './App.css'
import Card from './components/Card';

function App() {

  // let myObj={
  //   name: 'Muthuprabha',
  //   age: 22,
  //   address: {
  //     city: 'Veerasigamani',
  //     state: 'Tamilnadu',
  //     country: 'India'
  //   }
  // }
  // let newArr= [1,2,3,4,5,6,7,8,9,0]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username={"Prabha"} />
      {/* <Card username={"Prabha"} myArr={newArr} /> */}
      <Card username={'Raj'} post={'Staff Engg.'} />
      <Card />
      <Card /> 
    </>
  )
}

export default App
