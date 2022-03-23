import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import './App.css';
import Tab from './componenets/SearchPage/Tab';
import NavBar from './componenets/MainPage/NavBar';
import CommonArea from './componenets/CommonArea/SearchBar';
import MainSearch from './componenets/MainPage/MainSearch';
import PerfumeResult from './componenets/PerfumeResultPage/PerfumeResult';
// import Slide from './componenets/MainPage/Slide';
// import MyInfo from './componenets/MainPage/MyInfo';
// import NewPosts from './componenets/MainPage/NewPosts';
// import PerfumeOfTheMonth from './componenets/MainPage/PerfumeOfTheMonth';
// import NewSales from './componenets/MainPage/NewSales';



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
  },
  title:{
    fontWeight:400,
    fontSize:40,
    marginLeft:"40px",
    marginRight:"20px",
    marginTop:"20px",
    marginBottom:"10px"
  }
})

function App(){
  const classes=usestyles();
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <div className={classes.cluster}>
          <h className={classes.title}>향카이브</h>
          <NavBar/>
        </div>

        <div className={classes.cluster}>
          <PerfumeResult/>
        </div>
        <br/>
        

      </ThemeProvider>
    </div>
  )
}
export default App;