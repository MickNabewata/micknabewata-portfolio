import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme : Theme) => 
  createStyles({
    title : {
      fontFamily : 'Montserrat,' + theme.typography.fontFamily
    }
  });

export default styles;