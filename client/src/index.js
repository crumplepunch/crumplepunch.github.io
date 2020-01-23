import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './index.scss'
import { Home } from './scenes'
import { JournalEntry } from './components'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/journal'>
        <JournalEntry />
      </Route>

      <Route path='/'>
        <Home theme='theme-01' />
      </Route>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
