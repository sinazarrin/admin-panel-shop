import React, { useMemo } from "react";
import {ThemeProvider as MuiThemeProvider, createTheme} from "@mui/material/styles";

type ChildrenProps = {
    children: React.ReactNode
}

const ThemeProvider = ({children}:ChildrenProps) => {
    const theme = useMemo(() => createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: '#3661EB',
            },
            secondary: {
                main: '#1E1A22',
            },
            body: {
                main: '#83879B'
            }
        },
        typography: {
            fontFamily: "YekanBakh",
        },
    }))
    return (
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    )
}

export default ThemeProvider