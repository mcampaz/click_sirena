import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

const MainLayout = ({children}) => {
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default MainLayout;