import JobCard from '@/components/atoms/job-card'
import Formulario from '@/components/atoms/job-form'
import McMenu from '@/components/molecules/mc-menu'
import Header from '@/components/organism/header'
import { Footer } from '@/components/organism/sections/footer'
import React from 'react'

type Props = {}

export default function JobForms({}: Props) {
  return (
    <div>
       <Header
        menu={<McMenu></McMenu>}
        className="bg-black"
        logo="/images/McLogo.svg"
        iconColor="text-white"
      />
      <Formulario></Formulario>
      <Footer mctekk></Footer>
    </div>
  )
}