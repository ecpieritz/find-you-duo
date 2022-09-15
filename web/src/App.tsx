import './styles/main.css'
import fdLogo from './assets/img/fd__logo.png'
import fdApex from './assets/img/fd-img__apex.png'
import fdDbd from './assets/img/fd-img__dbd.png'
import fdDota from './assets/img/fd-img__dota.png'
import fdFortnite from './assets/img/fd-img__fortnite.png'
import fdLol from './assets/img/fd-img__lol.png'
import fdValorant from './assets/img/fd-img__valorant.png'

function App() {
  return <div className='max-w-[1344px] mx-auto flex flex-col items-center my-10'>
    <img src={fdLogo} alt="eSports logo" />
    <h1 className='text-6xl text-white font-black mt-10'>Seu <span className='bg-fd-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

    <div className='grid grid-cols-6 gap-6 mt-16'>
      <a href="">
        <img src={fdApex} alt="" />
      </a>
      <a href="">
        <img src={fdDbd} alt="" />
      </a>
      <a href="">
        <img src={fdDota} alt="" />
      </a>
      <a href="">
        <img src={fdFortnite} alt="" />
      </a>
      <a href="">
        <img src={fdLol} alt="" />
      </a>
      <a href="">
        <img src={fdValorant} alt="" />
      </a>
    </div>
  </div>
}

export default App
