import { useRecoilValue } from "recoil";
import Layout from '../components/Layout';
import { CardNote } from '../components/card';
import { AddCard } from '../components/formAddCard';
import { cardList } from '../states/state/atom';

export default function App() {
 
 const listCardNotes = useRecoilValue(cardList); 

 return (
  <>
  <Layout>
    <div style={{ display: 'flex', flexDirection: 'column', padding: '44px 44px' }}>
     <div>
      <div>
       <div style={{ display: 'grid', gap: '22px 0px', gridTemplateColumns: 'auto auto auto auto auto', padding: '60px', background: '#2D4059', borderRadius: '4px'}}>
        {
          listCardNotes.length !== 0 ? (
           listCardNotes.map(({title, content}, index ) => (
            <CardNote title={title} description={content} key={index} index={index} />
            ))
          ): (
           <h1 style={{width: '372px', height: '332px', color: 'white'}}>No card registered</h1>
          )
        }
       </div>
      </div>
     </div>
     <AddCard />
    </div>
  </Layout>
  </>

 )
}
