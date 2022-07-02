import React from 'react'


const Layout = ({children}) => {
  return (
      < >  
        {/* style={{display:'flex'}} */}
        {/* <div className='temp-video'><img src='./assets/video.png' /></div> */}
        <div style={{minHeight: "85vh"}}>{children}</div>
        {/* <SideBar/> */}
      </>
    
  )
}

export default Layout