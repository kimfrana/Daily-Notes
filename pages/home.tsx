import Head from 'next/head';
import { useRecoilValue } from "recoil";
import { CardNote } from '../components/card';
import { AddCard } from '../components/formAddCard';
import { cardList } from '../components/state/atom';

export default function App() {
 
 const listCardNotes = useRecoilValue(cardList); 

 return (
  <div style={{ width: '100%', height: '100%', background: 'black' }}>
   <Head>
    <title>Show Office</title>
    <meta name="description" content="Show the code app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
   </Head>
   <main style={{fontFamily: '"Nunito", sans-serif'}}>
    <div style={{ display: 'flex', flexDirection: 'column', padding: '44px 44px' }}>
     <div style={{ backgroundColor: 'black' }}>
      <div>
       <div style={{marginBottom: '72px'}}>
        <h1 
        style={{ color: '#f1b', fontSize: '64px' }}
        >
         Daily Notes
        </h1>
       </div>
       <div style={{ display: 'grid', gap: '22px 0px', gridTemplateColumns: 'auto auto auto auto auto', padding: '60px'}}>
        {
         listCardNotes.map(({title, content}, index ) => (
          <CardNote title={title} description={content} key={index} index={index} />
         ))
        }
       </div>
      </div>
     </div>
     <AddCard />
     <footer>
      <p style={{ color: '#FF0000' }}>PROJECTED BY KIM</p>
     </footer>
    </div>
   </main>
  </div>

 )
}
