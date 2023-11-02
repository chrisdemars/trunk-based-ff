import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  FFContextProvider,
  useFeatureFlag,
  useFeatureFlags
} from '@harnessio/ff-react-client-sdk'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
