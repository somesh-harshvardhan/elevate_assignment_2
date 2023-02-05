import React, { useCallback, useEffect, useState } from 'react'

const useResponsive = () => {
  const [screenWidth,setScreenWidth] = useState(0);
  const [isMobile,setIsMobile] = useState(false);

  useEffect(()=>{
   const handler = ()=>{
     setScreenWidth(window.innerWidth)
   }
   setScreenWidth(window.innerWidth)
   window.addEventListener("resize",handler);

   return ()=>window.removeEventListener("resize",handler);
  },[]);
  useEffect(()=>{
   if(screenWidth < 768) setIsMobile(true);
   else setIsMobile(false);
  },[screenWidth])

  return {screenWidth,isMobile};
}

export default useResponsive