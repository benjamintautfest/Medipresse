import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Article from '../components/article'



export default function Home() {
  return (
  <div>
    <Layout>
    <h1>Medifresse</h1>
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
        Lorem
      </p> 
    </Article>
    <Article headLine="Hier kommt der dritte Artikel">
      <p>
        Wie soll das denn allse immer weitergehen mit diesem ewigen Getippe und immer noch ein Wort und
        noch ein Wort. Ich weiß einfach nicht, was der ganze Scheiß eigentlich soll. Und das ist immer noch 
        nicht genug, denn hier sollte nun mehr stehen. und hier gibts <Link to="/trombose">mehr</Link>
      </p> 
    </Article>
    </Layout> 
  </div>
  )
}
