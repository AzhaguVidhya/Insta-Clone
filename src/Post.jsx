import {useState,useEffect} from 'react'
import {Heart,MessageSquareText,Send} from 'lucide-react'
function Post() {
    const [post,setPost]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:3000/posts")
            .then(data=>data.json())
            .then((data)=>{setPost(data)})
            .catch(err=>console.log(err))
        },1000)
    },[])
return (
    <div className='flex items-center justify-center'>
        {post.length > 0 ? (
            <div>
                {post.map(pos=>(
                    <div key={pos.id}> 
                        <div>
                        <div className='flex gap-3 items-center my-5'>
                            <img className='rounded-full w-10'src={pos.avatar}/>
                                <span>{pos.username}</span></div>
                        </div>
                        <img className='w-100 h-100 my-3' src={pos.image} alt='post'/>
                        <div className='flex m-auto'>
                            <div className='flex items-center gap-3 mx-3'><Heart/><span>Like</span></div>
                        <div className='flex items-center gap-3 mx-3'><MessageSquareText/><span>Comment</span></div>
                        <div className='flex items-center gap-3 mx-3'><Send/><span>Share</span></div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <b>{pos.likes} Likes</b>
                            <p>{pos.caption}</p>
                        </div>
                    </div>
                ))} 
                </div>   
        ):(
            <div>Loading Post...</div>
        )}
       
    </div>
  )
}
//  npx json-server --watch src\data\db.json --port 3000 --static ./data
export default Post
