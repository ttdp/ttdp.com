import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sidebar = {
  title: 'My name is TIAN TONG',
  description:
    'I share my learning here.',
  archives: [
    { title: 'November 2023', url: '#' },
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
  ],
};

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="TIAN TONG DEVELOP" />
        <main>
          <Grid container spacing={5} sx={{ mt: 0 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            <Main title="Blog" />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="" />
    </ThemeProvider>
  );
}
