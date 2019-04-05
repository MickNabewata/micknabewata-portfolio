import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { callbackify } from 'util';

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
      height : '640px'
    },
    media : {
      height : 100
    },
    cardContent : {
      height : '480px'
    },
    cardSection : {
      marginTop : '10px'
    }
  });

export default styles;