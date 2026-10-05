import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Stories() {
  const [stories,setStories]=useState([]);
  const navigate=useNavigate();
  let tot=10;
  useEffect(()=>{
    if(stories.length>0){
      tot=stories[stories.length-1].id
    }
    fetch('http://localhost:3000/story')
    .then(data=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className='flex items-center gap-3 my-1 mt-3'>
        <div className='hidden'>
          {tot=stories.length}
        </div>
        {stories.length > 0 ? 
        (stories.map((stor)=>(
          <div className='flex flex-col items-center justify-center' key={stor.id} onClick={()=>{navigate(`/story/${stor.id}/${tot}`)}}>
            <div className="p-0.5 rounded-full bg-linear-to-tr from-yellow-500 via-red-500 to-purple-600 inline-block">
               <img className='rounded-full w-10 h-10'src={stor.avatar} alt='Stories'/>
            </div>
            <p className='w-12 truncate'>{stor.username}</p>
          </div>
        ))):(
          <div>
            <p>Hello Storyyy</p>
          </div>
        )}
    </div>
  )
}

export default Stories
