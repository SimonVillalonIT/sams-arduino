import { Footer, Header } from 'components/LandingPage/organisms'
import Loader from 'components/Loader/Loader'
import React, { PropsWithChildren } from 'react'

function layout({ children }: PropsWithChildren) {
  return (
    <Loader>
      <Header />
      {children}
      <Footer />
    </Loader>
  )
}

export default layout
