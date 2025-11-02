import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/useThemeStore.js'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { theme } = useThemeStore();
  return (
      <div data-theme={theme} className="min-h-screen bg-base-200">
        <Header />

        <main className='p-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </main>

        <Toaster />
      </div>
    
  )
}

export default App