import React from 'react'
import Article from '../components/article'
import Layout from '../components/layout'

const Trombose = () => {
    return(
        <Layout>
            <Article headLine="Hier kommt jetzt mal ein langer Artikel" >
                <p>
                Dieser konnte nur so lange abgedeckt werden, wie noch Rest-Insulin 
                produziert wurde – danach führte ein dauerhaft überhöhter Blutzuckerspiegel 
                zu einer Übersäuerung des Körpers und bedeutete für betroffene Patienten letztlich das 
                </p>
                <h3>Hier steht eine Zwischenüberschrift</h3>
                <p>
                Todesurteil. Heutzutage gehört die intensivierte Insulintherapie zum Alltag von Menschen 
                mit Typ-1-Diabetes und einigen Typ-2-Diabetikern. Intensivierte Insulintherapie bedeutet, 
                dass sowohl der Grundumsatz an Insulin, als auch das Mahlzeiten-Insulin mittels Spritze, 
                Pen oder Insulinpumpe zugeführt werden müssen. Fortschritte in der Medizintechnik machen ein i
                mmer effektiveres Diabetesmanagement möglich. Der Grundstein dafür wurde im Jahr 1916 gelegt, 
                als es dem rumänischen Physiologen Nicolae Paulescu gelang, die Wirkung von Insulin bei Hunden 
                nachzuweisen. Er gewann einen Extrakt aus Bauchspeicheldrüsen von Schlachttieren, den er Pankrein 
                nannte, und behandelte damit kurzzeitig erfolgreich an Diabetes erkrankte Hunde. Er publizierte s
                eine Erkenntnisse im Jahr 1921. 
                </p>
            </Article>
        </Layout>
    )
}

export default Trombose