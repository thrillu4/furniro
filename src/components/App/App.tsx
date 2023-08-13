import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/AppRoutes'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className='mx-auto max-w-[310px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1260px] 2xl:max-w-[1440px]'>
      <Header/>
        <AppRoutes/>
        <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default App
