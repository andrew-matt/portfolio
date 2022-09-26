import style from './App.module.scss'
import {Header} from './header/Header'
import {Main} from './main/Main'
import {Skills} from './skills/Skills'
import {Projects} from './projects/Projects'
import {Contacts} from './contacts/Contacts'
import {Footer} from './footer/Footer'
import {Freelance} from './freelance/Freelance'

function App() {
  return (
      <div className={style.App}>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Freelance/>
        <Contacts/>
        <Footer/>
      </div>
  )
}

export default App
