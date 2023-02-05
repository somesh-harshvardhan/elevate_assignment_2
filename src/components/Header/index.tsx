import useResponsive from '@/src/hooks/useResponsive'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import ActionBar from './ActionBar'
import {RiCloseFill} from 'react-icons/ri'
const Container = styled.header`
width: 80vw;
margin: auto;
`
const QuickLinks = styled.div`
 padding: 8px 0 16px;
 background: var(--matte-primary);
 display: flex;
 align-items: center;
 justify-content: center;
 column-gap: 1rem;
 clip-path: polygon(0 0,100% 0,98% 100%,2% 100%);
 @media screen and (max-width : 768px){
    display: none;
 }
`
const ListItem=styled.li`
list-style: none;
color: white;
cursor: pointer;
a{
color: inherit;
text-decoration: none;
}
`
const Logo = styled.div`
 font-weight: 900;
 text-align: center;
 font-size: 3rem;
 /* color: white; */
 margin: 1rem 0;
 @media screen and (max-width : 768px){
  margin-top : 0;
 }
`
const QuickLinksMobile = styled.div<{sideBarActive : boolean}>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--matte-primary);
  top: 0;
  left: 0;
  z-index: 90000;
  transform: ${props=>props.sideBarActive ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform ease-out .2s;
  div{
    text-align: end;
    padding: 20px;
  }
  ul{
    text-decoration: none;
    color: white;
  }
  li{
    text-align: center;
    margin: 2rem auto;
    font-size: 1.3rem;
  }
`
const Sidebar = (props : any)=>{
  const {quickLinks,sideBarActive,setSidebarActive} = props;
  
  return <QuickLinksMobile sideBarActive={sideBarActive}>
         <div onClick={()=>setSidebarActive(false)}><RiCloseFill size={40} color={"white"}/></div>
         <ul>
          {
            quickLinks.map((link : string)=><li key={link}>{link}</li>)
          }
         </ul>
      </QuickLinksMobile>
}
const Header= () => {
   const quickLinks = ["Best Sellers","Gift Ideas","New Releases","Today's Deals","Customer Services"]
   const {isMobile} =  useResponsive();
   const [sidebarActive,setSidebarActive] = useState(false);
  return (
    <Container>
     {!isMobile ? <QuickLinks>
      {
        quickLinks.map(link=><ListItem key={link}><Link href={"#"}>{link}</Link></ListItem>)
      }
     </QuickLinks> : <Sidebar quickLinks={quickLinks} sideBarActive={sidebarActive} setSidebarActive={setSidebarActive}/>}
     <Logo>Eflyer</Logo>
     <ActionBar setSideBarActive={setSidebarActive}/>
    </Container>
  )
}

export default Header