import {Container, Typography} from '@mui/material';
import Page from '../components/Page';


export default function Students(props) {
  
  return (
    <Page title={props.title}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 0 }}>
        <span style={{color : props.theme.text}}>   Page under construction</span>
        </Typography>
      </Container>
    </Page>
  );
}
