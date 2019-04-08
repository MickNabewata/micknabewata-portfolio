import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    card : {
      [theme.breakpoints.up('md')]:{
        width : `calc(-${theme.spacing.unit + 8}px + ${100 / 3}%)`
      },
      [theme.breakpoints.down('sm')]:{
        width : 'calc(-12px + 100%)'
      },
      margin : theme.spacing.unit,
      float : 'left',
      height : '193px'
    },
    skillName : {
      width : '70%',
      display : 'inline-block'
    },
    stars : {
    },
    star : {
      fontSize : '13px'
    },
    skill : {
      margin : '5px'
    },
    skillLink : {
      margin: 0,
      fontSize : '13px',
      minWidth : 'auto',
      lineHeight : 'normal',
      textDecoration : 'underline'
    },
    skillText : {
      margin: 0,
      fontSize : '13px',
      minWidth : 'auto',
      lineHeight : 'normal',
      padding : '6px 8px'
    }
  });

export default styles;