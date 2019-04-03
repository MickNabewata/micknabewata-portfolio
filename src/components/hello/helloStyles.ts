import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    title : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 30
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 40
      },
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    },
    hello : {
      [theme.breakpoints.down('sm')] : {
        fontSize : 15
      },
      [theme.breakpoints.up('md')] : {
        fontSize : 20
      },
    }
  });

export default styles;