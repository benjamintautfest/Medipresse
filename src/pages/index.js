import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Article from '../components/article'


export default function Home() {
  return (
  <div>
    <Layout>
    <h1>This is the Homepage</h1>
    <p>Check it out motherfucker</p>
    <Article headLine="Lorem Ipsum oder wat wees icke">
      <p>
        Hier steht jetzt der Text von dem Artikel, der nur als 
        Komponente exisitiert und ich weiß nich was.
      </p> 
    </Article>
    <Article headLine="Irgend ein anderen">
      <p>
        Alter, ich bin schon ziemlich begeistert, dass das einfach so funktioniert.Diggi
      </p> 
    </Article>
    </Layout> 
  </div>
  )
}
