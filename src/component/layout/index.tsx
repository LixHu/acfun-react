import React from "react"
import { Navbar } from "@/component/navbar"
import { Footer } from "@/component/footer"


interface ILayoutInter extends NComponent.ILayoutData {
  children: React.ReactNode
}

export function Layout(props: ILayoutInter) {
  const { children, title, menuList } = props
  return (
    <>
      <Navbar title={title} menuList={menuList}/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}