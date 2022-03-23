import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import './App.css';
import NavBar from './componenets/NavBar';
import MainSearch from './componenets/MainSearch';
import Slide from './componenets/Slide';
import MyInfo from './componenets/MyInfo';
import NewPosts from './componenets/NewPosts';
import PerfumeOfTheMonth from './componenets/PerfumeOfTheMonth';
import NewSales from './componenets/NewSales';



const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const usestyles=makeStyles({
  cluster:{
    display: 'flex',
    flexDirection:"row",
  }
})

function App(){
  const classes=usestyles();
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <br/>
        <MainSearch/>
        <div className={classes.cluster}>
          <Slide/>
          <MyInfo/>
        </div>
        <br/><br/>
        <div className={classes.cluster}>
          <NewPosts/>
          <PerfumeOfTheMonth/>
        </div>
        <br/><br/>
        <NewSales/>
        <br/>

      </ThemeProvider>
    </div>
  )
}
export default App;