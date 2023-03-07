import styles from './page.module.css'
import React from 'react'

const Template = ({children}: {
    children: React.ReactNode
}) => {
    return <main className={styles.main}>{children}</main>;
}

export default Template