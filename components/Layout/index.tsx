import Header from '../Head'

type Props = {
 children: JSX.Element 
}

export default function Layout({ children }: Props) {
 return (
  <>
   <Header/>
   <div style={{padding: '44px 44px'}}>
    <div style={{marginBottom: '72px'}}>
     <h1 
      style={{ color: '#f1b', fontSize: '64px' }}
     >
      DAILY NOTES
     </h1>
    </div>
    <main style={{fontFamily: '"Nunito", sans-serif'}}>{children}</main>
    <footer>
     <div style={{ color: '#FF5722', marginTop: '26px'}}>PROJECTED BY KIM / <a href="https://github.com/kimfrana/Daily-Notes">github.com/kimfrana/Daily-Notes</a></div>
    </footer>

   </div>
  </>
 )
}