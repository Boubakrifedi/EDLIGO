import Iconify from '../../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon('ic:baseline-dashboard'),
  },
  {
    title: 'students',
    path: '/students',
    icon: getIcon('ic:baseline-face'),
  },
  {
    title: 'teachers',
    path: '/teachers',
    icon: getIcon('ic:round-people'),
  },
  {
    title: 'notice',
    path: '/notice',
    icon: getIcon('dashicons:email'),
    number:"26"
  },
  {
    title: 'attendence',
    path: '/attendence',
    icon: getIcon('icon-park-solid:distribute-vertically'),
  },
  {
    title: 'exam',
    path: '/exam',
    icon: getIcon('bi:file-earmark-check-fill'),
  },
  {
    title: 'account setting',
    path: '/setting',
    icon: getIcon('ci:settings-filled'),
  },
];

export default navConfig;
