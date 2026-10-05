import insta from './assets/insta.png'
import {Home,Search,Heart,Compass,Video,MessageCircleHeart,SquarePlus,CircleUserRound,AtSign} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
function SideBar() {
  const navigate=useNavigate()
  return (
    <>
      <div>
          <div className='flex flex-col gap-7 mx-2'>
            <div className='absolute flex flex-col gap-7 mx-2 '>
              <img className='w-25 mt-3' src={insta} alt='image'/>
              <div className='flex items-center gap-3'><Home/><span>Home</span></div>
              <div className='flex items-center gap-3'><Search /><span>Search</span></div>
              <div className='flex items-center gap-3'><Compass/><span>Explore</span></div>
              <div className='flex items-center gap-3'><Video/><span>Reels</span></div>
              <div className='flex items-center gap-3'><MessageCircleHeart /><span>Message</span></div>
              <div className='flex items-center gap-3'><Heart/><span>Notification</span></div>
              <div className='flex items-center gap-3'><SquarePlus/><span>Create</span></div>
            </div>
            <div className='absolute bottom-0 flex flex-col mb-3 gap-5'>
              <div className='flex items-center gap-3 mb-3' onClick={()=>{navigate('/profile')}}><CircleUserRound/><span>Profie</span></div>
              <div  className='flex items-center gap-3'><AtSign/><span>Thread</span></div>
            </div>
          </div>
      </div>
    </>
  )
}
export default SideBar
