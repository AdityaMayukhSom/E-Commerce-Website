module.exports = {
    mode: 'jit',
    content: ['./public/*.{html,js}', './*.{html,js}', './src/components/*.{html,js}'],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px'
            // => @media (min-width: 1536px) { ... }
        },

        extend: {
            screens: {
                sl: '880px', //Sligtly Large
                sltlg: '950px', //still less than large
                llg: '1100px' //Larger Than Large
            },
            fontSize: {
                '7xl': '4.5rem',
                '8xl': '1rem'
            }
        }
    }
};
