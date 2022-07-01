import { Grid, Container, Typography} from '@mui/material';
import Calendar from '../components/Calendar';
import "react-circular-progressbar/dist/styles.css";

import {NewsData} from "../_mock/NewsData"
import Page from '../components/Page';
import Table from '../sections/@dashboard/app/StudentsList';
import {AppRecentUpdate,AppWidgetSummary,AnalyticsWidget} from '../sections/@dashboard/app';
import "../assets/style.css"

export default function DashboardApp(props) {

  const data =  NewsData

  return (
    <Page title="Dashboard" >
      <Container maxWidth="xl">
        <Typography variant="h3" >
         <span style={{color : props.theme.text}}>Dashboard</span>  
        </Typography>
        <Calendar/>
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary theme ={props.theme} title="Total  number of student"  total={"25,024"} bg={"#7380ec"} percentage="100" icon={'fa6-solid:people-group'} date={"06-14-2022"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary theme ={props.theme} title="Passed/Failed" total={"20,019"}  percentage="81" icon={'icon-park-outline:good-two'} bg= {"#ff7782"}date={"15-05-2021"}  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary theme ={props.theme} title="Accepted suggestions"  total={31} bg={"#41f1b6"}  percentage="44" icon={'ic:baseline-construction'}  date={"3 hours ago"} />
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography variant="h4" style={{marginBottom:"5px",marginLeft:"10px"}}>
          <span style={{color : props.theme.text}}> Recent Updates</span>
        </Typography>
        <AppRecentUpdate theme ={props.theme} list={data}/>
          </Grid>

          <Grid item xs={12} sm={12} md={9} >
          <Typography variant="h4" style={{marginBottom:"10px",marginLeft:"10px"}}>
          <span style={{color : props.theme.text}}> Students list</span>    
        </Typography>
            <Table  theme ={props.theme}/>
          </Grid>
        
           <Grid item xs={12} md={3} >
          <Typography variant="h4" style={{marginBottom:"10px",marginLeft:"10px"}}>
          <span style={{color : props.theme.text}}> Analytics</span>
        </Typography>
        <AnalyticsWidget theme={props.theme} style={{marginBottom:"10px"}} title="Student number"  total="+39%" number={3849}bg={"#7380ec"} icon={'fa6-solid:people-group'} date={"Last year"} color={"green"}/>
        <AnalyticsWidget theme={props.theme} style={{marginBottom:"10px"}}  title="Failed Student "  total="-17%"  number={1205} bg={"#7380ec"} icon={'material-symbols:sms-failed'} date={"Last year"} color={"red"}/>
        <AnalyticsWidget  theme={props.theme} style={{marginBottom:"10px"}} title="New Ideas" total="+25%"  number={14}bg={"#7380ec"} icon={'icons8:idea'} date={"Last year"} color={"green"}/>
          </Grid> 
        </Grid>
      </Container>
    </Page>
  );
}





