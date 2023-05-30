
import { MainContextProvider } from '../contexts/MainContext'
import MainPageView from './MainPageView'
const MainPage = () => {
  return (
    <MainContextProvider>
      <MainPageView/>
    </MainContextProvider>
  )
}

export default MainPage