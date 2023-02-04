import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ActionBar from './ActionBar'

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
 @media screen and (max-width : 600px){
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
 @media screen and (max-width : 600px){
  margin-top : 0;
 }
`
const Header= () => {
    const quickLinks = ["Best Sellers","Gift Ideas","New Releases","Today's Deals","Customer Services"]
  return (
    <Container>
     <QuickLinks>
      {
        quickLinks.map(link=><ListItem key={link}><Link href={"#"}>{link}</Link></ListItem>)
      }
     </QuickLinks>
     <Logo>Eflyer</Logo>
     <ActionBar/>
    </Container>
  )
}

export default Header