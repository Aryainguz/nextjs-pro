"use client"
import React from 'react'

const Layout = ({children,route1,route2}:any) => {
  const [isSideBar,setIsSideBar] = React.useState(true)
  const toggle = () => {
    setIsSideBar(!isSideBar)
  }
  return (
    <>
   {children}
   <button style={{marginTop:'20px',padding:'10px',backgroundColor:'blue',color:'white',border:'none'}}
   onClick={toggle}
   >Toggle Sidebar</button>
   <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
   { isSideBar ? 
      <div style={{width:'45%',border:'1px solid #ccc',padding:'10px',backgroundColor:"purple"}}>
         {route1}
      </div> :
      <div style={{width:'45%',border:'1px solid #ccc',padding:'10px',backgroundColor:"green"}}>
         {route2}
    </div>}
      </div>
   </>
  )
}

export default Layout