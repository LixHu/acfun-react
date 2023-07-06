import React from "react"
import { Navbar } from "@/component/navbar"
import { Footer } from "@/component/footer"

interface layoutParamInter {
  children: React.ReactNode
}

export function Layout({ children }: layoutParamInter) {
  return (
    <>
      <Navbar title="你猜猜" menuList={[]}/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}