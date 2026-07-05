/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'border-grey': '#e5e5e5',
        'surface-white': '#ffffff',
        'foreground-black': '#1a1a1a',
        'muted-text': '#6b6b6b',
        'primary-action': '#1a1a1a',
      },
      fontFamily: {
        display: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Chivo Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        hero: ['331px', { lineHeight: '297.9px', letterSpacing: '-6.62px', fontWeight: '500' }],
        'display-xl': ['72px', { lineHeight: '75.6px', fontWeight: '400' }],
        'display-lg': ['48px', { lineHeight: '60px', fontWeight: '300' }],
        'heading-md': ['36px', { lineHeight: '40px', fontWeight: '400' }],
        'heading-sm': ['30px', { lineHeight: '30px', fontWeight: '300' }],
        subheading: ['24px', { lineHeight: '32px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '29.25px', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '1.4px', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '1.2px', fontWeight: '400' }],
        'caption-xs': ['11px', { lineHeight: '17.6px', letterSpacing: '0.55px', fontWeight: '400' }],
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        64: '64px',
        80: '80px',
        96: '96px',
        128: '128px',
      },
      borderRadius: {
        sm: '8px',
        base: '0.5rem',
        md: '16px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
