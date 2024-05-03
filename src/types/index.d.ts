import { globalTheme } from '../variables'

declare module '*.module.scss'

// Declare the new property on the global `Window` interface
declare global {
  interface Window {
    globalTheme: {
      colors: {
        primary: {
          main: string
          light: string
        }
        secondary: {
          main: string
          light: string
        }
        error: {
          main: string
          light: string
        }
        info: {
          main: string
          light: string
        }
        blue: {
          main: string
          light: string
        }
        red: {
          main: string
          light: string
        }
        yellow: {
          main: string
          light: string
        }
        green: {
          main: string
          light: string
        }
        orange: {
          main: string
          light: string
        }
        purple: {
          main: string
          light: string
        }
        gray: {
          main: string
          light: string
        }
        black: {
          main: string
          light: string
        }
      }
    }
  }
}
