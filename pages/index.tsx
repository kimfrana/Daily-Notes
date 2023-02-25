import { Button } from "@material-ui/core";
import { useRouter } from 'next/router';

export default function App() {
  const router = useRouter()
  return (
    <div 
    style={{height:'100vh', minWidth:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{margin: '22px'}}>
        <h1 style={{color: 'white', fontSize: '42px'}}>SIMPLIFY</h1>
        <h1 style={{color: 'white', fontSize: '42px'}}>YOUR LIFE</h1>
        <h1 style={{color: 'white', fontSize: '42px'}}>WITH</h1>
        <h1 style={{color: 'white', fontSize: '52px', color: '#f1b'}}>DAILY NOTES.</h1>
      </div>
      <Button 
      style={{  border: 'solid 3px #C147E9', color: 'white', fontSize: '28px', width: '302px', marginTop: '22px', cursor: 'pointer'}}
      onClick={() => router.push('/home')}
      >
         Start Now
      </Button>
    </div>
  )
}
