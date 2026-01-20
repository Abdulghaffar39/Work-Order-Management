import react from 'react'
import { Route, Routes } from 'react-router';
import SignupForm from './Containers/Signup/Signup';
import LoginForm from './Containers/Login/Login';
import Admin from './Containers/Admin/Admin';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import BrushZoom from './Containers/BrushZoom/BrushZoom';
import SyncTooltip from './Containers/BrushZoom/BrushZoom';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<SignupForm theme={theme} />} />
          <Route path='/login' element={<LoginForm theme={theme} />} />
          <Route path='/admin' element={<Admin theme={theme} />} />
          <Route path='/syncTooltip' element={<SyncTooltip />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
