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
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={fdApex} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-fd-gradient-grid absolute bottom-0 left-0 right-0 '>
          <strong className='font-bold text-white block'>Apex</strong>
          <span className='text-zinc-300 text-sm'>4 anúncios</span>
        </div>
      </a>

      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={fdDbd} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-fd-gradient-grid absolute bottom-0 left-0 right-0 '>
          <strong className='font-bold text-white block'>Dead by Daylight</strong>
          <span className='text-zinc-300 text-sm'>4 anúncios</span>
        </div>
      </a>

      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={fdDota} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-fd-gradient-grid absolute bottom-0 left-0 right-0 '>
          <strong className='font-bold text-white block'>Dota</strong>
          <span className='text-zinc-300 text-sm'>4 anúncios</span>
        </div>
      </a>

      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={fdFortnite} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-fd-gradient-grid absolute bottom-0 left-0 right-0 '>
          <strong className='font-bold text-white block'>Fortnite</strong>
          <span className='text-zinc-300 text-sm'>4 anúncios</span>
        </div>
      </a>

      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={fdLol} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-fd-gradient-grid absolute bottom-0 left-0 right-0 '>
          <strong className='font-bold text-white block'>League of Legends</strong>
          <span className='text-zinc-300 text-sm'>4 anúncios</span>
        </div>
      </a>

      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={fdValorant} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-fd-gradient-grid absolute bottom-0 left-0 right-0 '>
          <strong className='font-bold text-white block'>Valorant</strong>
          <span className='text-zinc-300 text-sm'>4 anúncios</span>
        </div>
      </a>

    </div>
  </div>
}

export default App
