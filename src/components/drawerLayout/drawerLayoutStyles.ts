import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 240;

const styles = (theme : Theme) => 
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width:'100%',
      },
      backgroundImage : 'url("/appBar.png")'
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title:{
      [theme.breakpoints.up('md')]: {
        margin : '0 auto',
        fontSize : 30
      },
      [theme.breakpoints.down('sm')]: {
        fontSize : 20
      },
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      zIndex : 0
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit,
    },
    linkItem : {
      backgroundColor : theme.palette.primary.light
    },
    linkText : {
      fontSize : 14
    }
  });

export default styles;