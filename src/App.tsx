import { Fragment, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Card } from './components/card';

function App() {
  const [data, setData] = useState<any>([])
  const [isLoading , setLoading]=useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const fetchApi = async () =>{
    try {
      setLoading(true)
      const {data} = await axios('https://randomuser.me/api')
      const {results} = data
      setData(results)
      setLoading(false)
    } catch (error:any) {
      setLoading(false)
      setErrorMsg('Oh no! there is probem to load data')
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchApi()
  },[])

  const handleClick = ()=>{
    fetchApi()
  }

  const renderNoData = ():JSX.Element => {
    let text = 'Loading...';
    if(errorMsg) text=errorMsg
    return <p>{text}</p>
  }

  return (
    <div className="App">
      <button className='button' onClick={handleClick}>Refresh</button>
      {
       data.length > 0  ?  data.map((e:any) => {
        return (
          <Fragment key={e.id.value}>
            <Card 
              isLoading={isLoading}
              name={e.name}
              email={e.email}
            />
          </Fragment>
        )
       }) 
       :
       renderNoData()
      }

    </div>
  );
}

export default App;
