import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

const Home = () => {
  const navigate = useNavigate()
  // const [userData, setUserData] = useState({})

  const callHomePage = async () =>{
    try{
        const response = await fetch('/about',{
          method:'GET',
          headers:{
            Accept:'application/json',
            "Content-Type":'application/json'
          },
          credentials:'include'
        });

        const data = await response.json();
        // setUserData(data);
        console.log(data);

        if(!response.status === 200){
          console.log('error')
          const error = new Error(response.error)
          throw error
        }
      

    }
    catch(err){
      navigate('/login')
      console.log(err)
    }
  }

  useEffect(() => {

    callHomePage()

  },[])
  return (
    <div className='Home' method="GET">
        <LeftComponent/>
        <RightComponent 
        name={'Jayant'} 
        avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcw8FvW1xxUM1FjCa9eRR2mnaXUBe7mAqreb5zal386CuIJ9T2_7mVZNsj1WeavWkJDA&usqp=CAU'}
        />
    </div>
  )
}

export default Home