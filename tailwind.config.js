module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '5.5':"0.313rem",
        '3.0':"0.188rem",
        '280':"17.5rem",
        '130':"8.125rem",
        '100':"6.25rem",
        '70':"70rem",
        '90':"90vh"
      },
      colors:{
        "primary":{
          "900":"#635bff",
        },
        "secondary":{
          '50':"#3a3a3a",
          '100':"#CFD7DF",
          '200':"#f3f7fad3",
          '300':"#425466",
          '400':"#3f51b5",
          '500':"#111439",
          '700':"#adbdcc",
          '800':"#425466",
          '900':"#0a2540"
        },
        
      },
      fontSize:{
        "11":"0.688rem"
      },
      backgroundColor:{
        'background-colors': "rgba(208,109,203,.3)"
      },
      borderRadius:{
        '40':"2.5rem",
        '5':'0.313rem',
        '4':'0.25rem'
      },
      boxShadow: {
        '3xl': '0px 0px 3px -1px rgba(0,0,0,0.54)',
      }
    },
  },
  plugins: [],
}