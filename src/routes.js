import {useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import Students from './pages/Students'

export default function Router(props) {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout theme={props.theme}
      setTheme={props.setTheme}/>,
      children: [
        { path: '/', element: <DashboardApp  theme={props.theme}
        setTheme={props.setTheme} />},
        { path: 'dashboard', element: <DashboardApp  theme={props.theme}
        setTheme={props.setTheme}/> },
        { path: 'students', element: <Students title='students'  theme={props.theme}
        setTheme={props.setTheme}/> },
        { path: 'teachers', element: <Students title='teachers'  theme={props.theme}
        setTheme={props.setTheme}/>},
        { path: 'notice', element: <Students title='notice'  theme={props.theme}
        setTheme={props.setTheme}/>},
        { path: 'attendence', element: <Students title='attendence' theme={props.theme}
        setTheme={props.setTheme}/> },
        { path: 'exam', element: <Students title='exam'  theme={props.theme}
        setTheme={props.setTheme}/> },
        { path: 'setting', element: <Students title='setting'  theme={props.theme}
        setTheme={props.setTheme}/>},
      ],
    },
  ]);
}
