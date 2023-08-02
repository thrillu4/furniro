import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/AppRoutes'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className='container'>
      <Header/>
    <AppRoutes/>
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default App
