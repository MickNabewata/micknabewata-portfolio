import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { callbackify } from 'util';

const styles = (theme : Theme) => 
  createStyles({
    card : {
      [theme.breakpoints.up('md')]:{
        maxWidth : 'calc((100% - ' + theme.spacing.unit * 6 + 'px) / 3)'
      },
      [theme.breakpoints.down('sm')]:{
        width : '100%',
        maxWidth : 'calc(100%)',
      },
      margin : theme.spacing.unit,
      float : 'left'
    },
    media : {
      height : 140
    },
    cardButton : {
      backgroundColor : theme.palette.primary.main,
      color : theme.palette.text.secondary
    }
  });

export default styles;