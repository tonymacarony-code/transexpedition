module.exports = {
    content: ['./src/*.html', './src/partials/*.html', './src/js/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            colors: {
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                gray: {
                    50: '#FAFAFA',
                    100: '#F0F0F0',
                    200: '#BABABA',
                    300: '#797979',
                    400: '#808080',
                    500: '#414141',
                    600: '#3C3C3C',
                    700: '#323338',
                    800: '#181818',
                    900: '#141414',
                },
                darkgrey: {
                    700: '#242529',
                    800: '#1B1C20',
                },
                yellow: {
                    100: '#FFE03C',
                    200: '#FCD60E',
                    300: '#EFC900',
                    400: '#D7C983',
                },
            },
            fontFamily: {
                primary: ['Montserrat'],
            },
            fontSize: {
                // Heading-tags

                //mobile
                'lg-h1': ['38px', '46px'], //this can be use as text-lg-h1
                'lg-h2': ['26px', '42px'],
                'lg-h3': ['20px', '30px'],
                'lg-h4': ['18px', '24px'],

                // desktop

                h1: ['64px', '80px'],
                h2: ['46px', '66px'],
                h3: ['30px', '42px'],
                h4: ['22px', '30px'],

                // Body

                //mobile

                'lg-lg': ['18px', '26px'],
                'lg-base': ['16px', '24px'],
                'lg-sm': ['15px', '24px'],
                'lg-xs': ['12px', '18px'],

                // desktop
                lg: ['18px', '26px'],
                base: ['16px', '24px'],
                sm: ['14px', '20px'],
                xs: ['12px', '18px'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
