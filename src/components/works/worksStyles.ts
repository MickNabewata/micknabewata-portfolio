import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    fields : {
      marginLeft : '10px',
      marginBottom : '20px'
    },
    field : {
      marginRight : '20px'
    },
    addFilterButton : {
      [theme.breakpoints.up('md')] : {
        marginLeft : '20px',
        verticalAlign : 'bottom'
      },
      [theme.breakpoints.down('sm')] : {
        marginTop : '20px',
        display : 'block'
      }
    },
    filters : {

    },
    filterButton : {
      margin: theme.spacing.unit,
    },
    filterIcon : {
      marginLeft: theme.spacing.unit,
    },
    contents : {

    },
    noResults : {
      marginTop : '20px'
    }
  });

export default styles;