import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    card : {
      [theme.breakpoints.up('md')]:{
        minWidth : '300px',
        maxWidth : 'calc((100% - ' + theme.spacing.unit * 6 + 'px) / 3)'
      },
      [theme.breakpoints.down('sm')]:{
        width : '100%'
      },
      margin : theme.spacing.unit,
      float : 'left',
      height : '580px'
    },
    media : {
      height : '100px'
    },
    cardSection : {
      marginTop : '10px'
    },
    filterButton : {
      margin: 0,
      fontSize : '13px',
      minWidth : 'auto',
      lineHeight : 'normal',
      textDecoration : 'underline'
    },
    noMarginTop : {
      marginTop : '5px !important'
    }
  });

export default styles;