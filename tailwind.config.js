module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    theme: {

        extend: {
            container: {
                screens: {
                    md: '768px',
                    lg: '976px',
                    xl: '1440px',
                },
            },
            lineHeight: {
                h1: "60px",
                m_h1: "36px",
            },
            fontSize: {
                h1: "52px",
                m_h1: "30px",
            },
            maxHeight: {
                'white': "var(--mh)"
            },
            width: {
                left: "585px",
                full_with_border: "90vw"
            },
            screens: {
                osm: { max: '767px', min: '0px' }, //only on small breakpoint
                sm: '320px', //all logic from max width till 320px
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                'dark': "var(--backgroundblack)",
                'g550': "var(--g550)",
                "desc": "var(--g550)",
            },
            borderRadius: {
                'lg': '12px',
            }
        }

    },
    plugins: [],
}