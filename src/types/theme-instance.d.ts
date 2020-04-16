/**
 * Created by machao on 2020/4/15.
 */

export declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        background: string;
        palette?: {
            type: string
        };
        status: {
            danger: string;
        };
    }
    
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        background: string;
        palette?: {
            type: string
        };
        // background2: string;
        status?: {
            danger?: string;
        };
    }
}
