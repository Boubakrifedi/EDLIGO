import PropTypes from 'prop-types';
import { Box, Stack, Card,Typography, Avatar } from '@mui/material';

AppRecentUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppRecentUpdate({ title, subheader, list,theme, ...other }) {
  return (
    <Card style={{backgroundColor : theme.projectCard}} {...other}>
        <Stack sx={{ p: 1 }}>
          {list.map((news) => (
            <NewsItem key={news.name}  theme={theme} news={news} />
          ))}
        </Stack>
    </Card>
  );
}

NewsItem.propTypes = {
    news: PropTypes.shape({
    name: PropTypes.string,
    newss: PropTypes.string,
    date:  PropTypes.string,
  }),
};

function NewsItem({ news , theme}) {
  const { newss,  name,date , avatar } = news;

  return (
    <Stack  direction="row"  spacing={1} style={{margin:"10px 0"}}>
      <Avatar  alt={name} src={avatar} sx={{ width: 35, height: 35, borderRadius: 5 ,marginTop:"5%"}} />
      <Box>
        <Typography>
        <span style={{color : theme.text ,fontWeight:"bold" , fontSize:"12px"}}>{name}</span> <span style={{color : theme.text, fontSize:"11px"}}>{newss}</span>
        </Typography>
        <Typography variant="caption" sx={{ pr: 3, color: 'text.secondary' }}>
        <span style={{color : theme.secondaryText , fontSize:"10px"}}>{date}</span>
      </Typography>
      </Box>
    </Stack>
  );
}
