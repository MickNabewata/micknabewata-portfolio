import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    card : {
      [theme.breakpoints.up('md')]:{
        width : `calc(-${theme.spacing.unit + 8}px + ${100 / 3}%)`,
        height : '580px'
      },
      [theme.breakpoints.down('sm')]:{
        width : 'calc(-12px + 100%)',
        height : 'auto'
      },
      margin : theme.spacing.unit,
      float : 'left'
    },
    media : {
      height : '100px',
      backgroundPosition : 'center top'
    },
    cardSection : {
      marginTop : '10px'
    },
    filterButton : {
      margin: 0,
      fontSize : '13px',
      minWidth : 'auto',
      lineHeight : 'normal'
    },
    noMarginTop : {
      marginTop : '5px !important'
    },
    skillDialogContent : {
      paddingLeft : '24px',
      paddingRight : '24px',
      paddingBottom: '24px'
    }
  });

export default styles;