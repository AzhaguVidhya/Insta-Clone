import {useState,useEffect} from 'react'
import axios from 'axios'
function Suggestion() {
  const[profile,setProfile]=useState(null)
  const[suggest,setSuggest]=useState([])
  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:3000/profile")
        .then(res=>res.json())
        .then((data)=>{setProfile(data)})
        .catch(err=>console.log(err))
      fetch("http://localhost:3000/suggestions")
        .then(res=>res.json())
        .then((data)=>{setSuggest(data)})
        .catch(err=>console.log(err))
    },1000)
  },[])
  const handleFollow=async(id,username)=>{
    axios.post('http://localhost:3000/followers',{"id":id,"username":username})
    .then(alert('followed'))
    .catch(err=>console.log(err))
  }
  return (
    <div className='flex flex-col justify-center mt-3'> 
      <div className='flex flex-col w-80 justify-center'>
          {profile ? (
            <div className='flex items-center gap-3'>
              <img className='w-10 h-10 rounded-full' src={profile.avatar} alt='avatar'/>
              <h5>{profile.username}</h5>
              <p className='ml-13 text-sm text-blue-600 '>Switch</p>
            </div>
          ):(
            <p>Loadinggg....</p>
          )}
          <div className='flex m-2'>
            <p>Suggestted to you</p>
            <b className='ml-15'>See All</b>
          </div>
        </div>
        <div>
        {suggest.length > 0 ? (
          <div>
              {suggest.map(sug=>(
                <div key={sug.id} className='flex gap-3 items-center m-2'>
                  <img className='rounded-full w-10 h-10' src={sug.avatar}/>
                  <h5 className='min-w-20 text-start '>{sug.username}</h5>
                  
                  <a onClick={()=>{handleFollow(sug.id,sug.username)}}className='hover:bg-green-300 text-blue-600 ml-13'>Follow</a>
                </div>
              ))}
          </div>
          ):(
            <p>Loadooo loading....</p>
          )}
      </div>
    </div>
  )
}
export default Suggestion
