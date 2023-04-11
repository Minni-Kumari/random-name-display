import { Fragment, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Card } from './components/card';

function App() {
  const [data, setData] = useState<any>([])
  const [isLoading , setLoading]=useState(false)
  const fetchApi = async () =>{
    try {
      setLoading(true)
      const {data} = await axios('https://randomuser.me/api')
      const {results} = data
      setData(results)
      setLoading(false)
    } catch (error) {
      console.log({error})
    }
  }

  useEffect(()=>{
    fetchApi()
  },[])

  const handleClick = ()=>{
    fetchApi()
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
       (<p>Loading...</p>)
      }

    </div>
  );
}

export default App;
