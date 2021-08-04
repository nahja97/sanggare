import React, { useLayoutEffect, FC, useEffect } from "react"
import styles from "../../styles/DefaultLayout.module.css"
import Menubar from "../menubar"
import Sidebar from "../sidebar"

// eslint-disable-next-line @typescript-eslint/ban-types
const Default: FC<{}> = ({ children }) => {
  return <>
    <Menubar/>
    <main className={styles.default_page}>
      <Sidebar/>
      {children}
    </main>
  </>
  
}

export default Default
