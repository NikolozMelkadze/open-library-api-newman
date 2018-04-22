var newman = require('newman'); // require newman in your project
// Reference to newman API: https://github.com/postmanlabs/newman#api-reference
newman.run({
    globals:        require('../JSONs/Globals/openLibrary.postman_globals.json'     ),  // Remember Globals, Environments and Collections
    environment:    require('../JSONs/Environments/OL-PROD.postman_environment.json'   ),  // are Auto-Generated exported via Postman GUI
    collection:     require('../JSONs/Collections/OpenLibrary.postman_collection.json'    ),
    
    reporters: ['html','junit','cli'],
    reporter: { junit : { export : './reports/OL-API-TESTS_report.xml' },
                html :  { export : './reports/OL-API-TESTS_report.html' }},

    insecure:       true,
    iterationCount: 1,
}).on('start', function(err, args) { // on start of run, log to console
    console.log('Running collection...');
}).on('done', function(err, summary) {
    if (err || summary.error)
        console.error('Collection run encountered an error.');
    else
        console.log('Collection run completed.');
});