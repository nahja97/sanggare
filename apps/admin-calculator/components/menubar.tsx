import { useEffect, useState } from "react"
import { useAuth, createApolloClient } from '../lib/auth.js'
import { useRouter } from 'next/router'
import {
  gql,
} from '@apollo/client'
import styles from "../styles/Menubar.module.css"



function Menubar() {
    const { isSignedIn, signOut } = useAuth()
    const router = useRouter()
    const client = createApolloClient()

    function logout() {
        signOut()
    }

    useEffect(() => {
        if (!isSignedIn()) {
            router.push('/auth/login')
        }
    }, [])
    return <>
        <header className={styles.container}>
            <a className={styles.btn_logout} onClick={logout}>Logout</a>
        </header>
    </>
}
export default Menubar