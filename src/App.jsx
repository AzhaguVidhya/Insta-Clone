import Feed from './Feed'
import SideBar from './SideBar'
import Suggestion from './Suggestion'
function App()
    {
        return(
            <>
            <div className='flex h-screen justify-center w-screen text-center'>
            <div className='flex-1/5'><SideBar/></div>
            <div className='flex-1/2'><Feed/></div>
            <div className='flex-1/3'><Suggestion/></div></div>
            </>
        )
    }
export default App