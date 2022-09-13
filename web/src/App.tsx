import './styles/main.css'
import fdLogo from './assets/img/fd__logo.png'

function App() {
  return <div className='max-w-[1344px] mx-auto flex flex-col items-center my-10'>
    <img src={fdLogo} alt="eSports logo" />
    <h1 className='text-6xl text-white font-black mt-10'>Seu <span className='bg-fd-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>
  </div>
}

export default App
