//fichier qui permet de mesurer et de collecter les principales métriques de performance de l'application

const reportWebVitals = (onPerfEntry) => {
   if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(
         ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry)
            getFID(onPerfEntry)
            getFCP(onPerfEntry)
            getLCP(onPerfEntry)
            getTTFB(onPerfEntry)
         },
      )
   }
}

export default reportWebVitals
