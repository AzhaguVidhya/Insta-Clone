import {useParams,Link,useNavigate} from 'react-router-dom' 
import {useState,useEffect} from 'react' 
import { ArrowRight,ArrowLeft } from 'lucide-react';
 function ViewStory()
 {
   const {id,tot}=useParams(); 
   const [story,setStory]=useState(null); 
   const navigate=useNavigate(); 
   useEffect(()=>{ 
    fetch(`http://localhost:3000/story/${id}`) 
      .then(data=>data.json()) 
      .then(data=>setStory(data)) 
      .catch(err=>console.log(err)) 
    },[id]); 
    if (id > tot || id<=0)
        { 
          navigate('/'); 
        } 
      return ( 
        <div> 
          {story ? <div className=' flex justify-self-center items-center gap-5'> 
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><ArrowLeft/></Link> 
              <img className='h-screen w-150' src={story.image}/> 
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><ArrowRight/></Link>
                </div> 
          : "NUll Number"}
        </div> 
) } 
export default ViewStory