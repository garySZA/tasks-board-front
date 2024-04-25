import { ToastContainer } from 'react-toastify';
import { AppRouter } from './router';
import { AppTheme } from './theme';

import 'react-toastify/dist/ReactToastify.css';
import { Toast } from './toast';

export const TasksBoardApp = () => {
  return (
    <AppTheme>
      <Toast>
        <AppRouter />
      </Toast>
    </AppTheme>
  )
}
