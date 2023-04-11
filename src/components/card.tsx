import './index.css'

interface Props {
  name:{
    title: string
    first:string
    last: string
  }
  email:string
  isLoading: boolean
}

export const Card = (props:Props) => {
  const {name, email, isLoading} = props
  const {title, first, last} = name
  const fullName = `${title} ${first} ${last}`

  return (
    <div className='card-container'>
        {
          isLoading ? (<p>Loading...</p>) : (
            <>
              <h4>{fullName}</h4>
              <p>{email}</p>
            </>
          )
        }
    </div>
  )
}

