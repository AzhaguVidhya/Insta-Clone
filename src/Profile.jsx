import axios from 'axios';
import {useState,useEffect} from 'react';
function Profile() {
    const [profile,setProfile]=useState(null);
    const [followers,setFollowers]=useState([]);
    const[unFollowed,setUnFollowed]=useState(0);
    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then((data)=>{setProfile(data.data)})
        .catch(err=>console.log(err));
        axios.get('http://localhost:3000/followers')
        .then(data=>{setFollowers(data.data)})
        .catch(err=>console.log(err))
    },[unFollowed])
    function HandleOnChange(e)
    {
        setProfile(pre=>({
            ...pre,
            [e.target.name]:e.target.value
        }))
    }
  const handleUpdate=async()=>{
       axios.put(`http://localhost:3000/profile/${profile.id}`,profile)
      .then(console.log("Updated"))
      .catch(err=>console.log(err)); 
    }
  const handleUnFollow=async(id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then(alert("Unfollowed"))
    .then(setUnFollowed(!unFollowed))
    .catch(err=>console.log(err));
  }
  return (
    <div className='flex flex-col'>
      {profile  ? (
        <div className='flex flex-col items-center gap-3 m-auto' key={profile.id}>
            <img className='rounded-full w-10 h-10' src={profile.avatar} alt='profile_image'/>
            <h6>{profile.username}</h6>
            <input type='text' value={profile.username} name='username' onChange={HandleOnChange} className='border px-16 py-2' />
            <input type='text' value={profile.avatar} name='avatar' onChange={HandleOnChange} className='border px-16 py-2' />
            <button className='border-b-blue-700 text-white bg-blue-800 px-3 py-2 rounded-sm' onClick={handleUpdate}>Update</button>
        </div>
      ):(
        <div>Loadoohh Loading....</div>
      )}
      {followers.length>0 ? 
        (followers.map(follow=>(
          <div className='flex gap-3 m-1 items-center justify-start' key={follow.id} >
            <img className='rounded-full w-10 h-10' src={follow.avatar} alt='follower_img'/>
            <p className='min-w-30'>{follow.username}</p>
            <button onClick={()=>{handleUnFollow(follow.id)}} className='border-b-blue-700 text-white bg-blue-600 px-3 py-2 rounded-sm'>UnFollow</button>
          </div>
        ))
      ):(
          <div>Loading.....</div>
        )}
    </div>
  )
}

export default Profile
