import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Zealous Grotesque Moose</title>
        <meta property="og:title" content="Zealous Grotesque Moose" />
      </Helmet>
    </div>
  )
}

export default Home
