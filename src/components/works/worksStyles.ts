import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    filters : {
      marginBottom : '20px'
    },
    filter : {
      marginRight : '20px'
    },
    addFilterButton : {
      [theme.breakpoints.up('sm')] : {
        marginLeft : '20px',
        verticalAlign : 'bottom'
      },
      [theme.breakpoints.down('xs')] : {
        marginTop : '20px',
        display : 'block'
      }
    }
  });

export default styles;