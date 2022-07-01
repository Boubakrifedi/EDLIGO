import Iconify from '../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} style={{color:"#2065D1"}}/>;
export const TableData= [
  {
     name:'kenneth Bennet',
     departement:'C1',
     status:'passed', 
     phonenumber:'553-5320 x6518',
     color:"green",
     icon: getIcon('akar-icons:link-out'),
  },{
     name:'Juniper Barnes',
     departement: 'B1',
     status:'passed',     
     phonenumber: '205.536.4244',
     color:"green",
     icon: getIcon('akar-icons:link-out'),
     },{
     name:'Landon Norris',
     departement: 'A3',
     status:'failed', 
     phonenumber: '+21626254789',
     color:"red",
     icon: getIcon('akar-icons:link-out'),
     },{
     name:'Zion Floyd',
     departement: 'A3',
     status:'passed', 
     phonenumber:'+1-636-573-6288',
     color:"green",
     icon: getIcon('akar-icons:link-out'),
 },{
     name:'Kyrie Ward',
     departement:'D1',
     status:'passed', 
     phonenumber: '(662)891-1335',
     color:"green",
     icon: getIcon('akar-icons:link-out'),
 },{
     name:'Alicia Cooper',
     departement:'A1',
     status:'failed', 
     phonenumber: '828-40-7121',
     color:"red",
     icon: getIcon('akar-icons:link-out'),
 },
 ];


 export const TableHead = [
  { id: 'name', label: 'Student Name'},
  { id: 'Department', label: 'Department' },
  { id: 'phone', label: 'Phone Number'},
  { id: 'status', label: 'Status' },
  { id: 'icon', label: '' },
];

