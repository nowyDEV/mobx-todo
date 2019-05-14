import * as React from 'react'
import { render } from 'react-dom'
import { Observer } from 'mobx-react'
import DankState from './store'
import Header from './components/header'
import Browser from './components/browser'
import Creator from './components/creator'
import Filters from './components/filters'
import GlobalStyles from './styles/global'
import { AppContainer, AppWrapper } from './styles'

export const Store = React.createContext()

function App() {
  const dankState = new DankState()
  const handleFilterChange = filter => {
    dankState.setFilter(filter)
  }

  return (
    <Observer>
      {() => (
        <React.Fragment>
          <GlobalStyles />
          <AppWrapper>
            <AppContainer>
              <Header />
              <Filters onChange={handleFilterChange} />
              <Store.Provider value={dankState}>
                <Browser items={dankState.todoItems} />
                <Creator />
              </Store.Provider>
            </AppContainer>
          </AppWrapper>
        </React.Fragment>
      )}
    </Observer>
  )
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
