import React from 'react'

function Footer() {
    const footerPin={
           position:'fixed',
           bottom:0,
           width:'100%'
    }
  return (
    <>
    
     <footer className="bg-body-tertiary text-center" style={footerPin}>
  <div className="text-center p-3" style={{backgroundColor:'#0000000d'}}>
    © 2024 Copyright:
    <a className="text-body" href="/">TextUtil.com</a>
  </div>
</footer>

</>
  )
}

export default Footer