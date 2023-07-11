"use client"
import LandingPageTemplate from 'components/LandingPage/template/LandingPageTemplate'
import useUserStore from 'store/userStore'
import {useEffect} from "react"
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const {loggedIn} = useUserStore(state => state)
  const router = useRouter()

  useEffect(() => {
    if(loggedIn) router.push("home")
  }, [])

  return <LandingPageTemplate />
}
