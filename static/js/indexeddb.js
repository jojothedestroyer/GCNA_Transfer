// const modelNames = ['Worker', 'Farmer', 'DriedA', 'DriedB', 'FloatA', 'FloatB', 'Quaility', 'visit', 'In-House-Drying', 'Dispatch-Of-Dried-Nutmeg', 'Dispatch-Of-Green', 'Cracking-Summary', 'Floation-Summary', 'Package-Ciontrol', 'Editors', 'Labour-support', 'Training-support', 'land-info', 'Land-Tenur', 'Nutmeg-Trees', 'Nutmeg-Variety', 'Other-Crops', 'Coconut-Trees', 'Citrus-Mango-Trees', 'Other-Spices-Trees', 'Other-Seasoning-Trees', 'Other-Crops-Cultivated', 'Condition', 'Nutmeg-Land', 'Nutmeg-Frequency', 'Potential-Risks', 'Road-Access', 'Food-Safety-and-Quality', 'Farm-Water-Source', 'Farm-House', 'inspector-symmary', 'Policy','Sanitation-A','Sanitation-B','Sanitation-C','Cracking_Schedule','Assorting_Log',
// 'Extractor_Log',
// 'Fumigation_Log','Shelves'];

// function deleteDatabase() {
//     return new Promise((resolve, reject) => {
//         const request = indexedDB.deleteDatabase('GCNA');

//         request.onsuccess = function () {
//             resolve();
//         };

//         request.onerror = function (event) {
//             reject(event.target.error);
//         };
//     });
// }

// function openIndexedDBConnection() {
//     return new Promise((resolve, reject) => {
//         const request = indexedDB.open('GCNA', 2);

//         request.onupgradeneeded = function (event) {
//             const db = event.target.result;
//             modelNames.forEach(modelName => {
//                 if (!db.objectStoreNames.contains(modelName)) {
//                     db.createObjectStore(modelName, { keyPath: 'id' });
//                 }
//             });
//         };

//         request.onsuccess = function (event) {
//             resolve(event.target.result);
//         };

//         request.onerror = function (event) {
//             reject(event.target.error);
//         };
//     });
// }

// function fetchDataAndStore(db, modelName) {
//     return new Promise((resolve, reject) => {
//         fetch(`/api/${modelName}/`)
//             .then(response => response.json())
//             .then(data => {
//                 const transaction = db.transaction(modelName, 'readwrite');
//                 const objectStore = transaction.objectStore(modelName);
//                 data.forEach(item => {
//                     objectStore.put(item);
//                 });

//                 transaction.oncomplete = function () {
//                     resolve();
//                 };
//             })
//             .catch(error => {
//                 console.error('Error fetching data for model:', modelName, error);
//                 reject(error);
//             });
//     });
// }

// deleteDatabase()
//     .then(() => openIndexedDBConnection())
//     .then(db => Promise.all(modelNames.map(modelName => fetchDataAndStore(db, modelName))))
//     .then(() => console.log('All models stored successfully.'))
//     .catch(error => console.error('Error storing models:', error));










// // , 'Policy/<int:id>
// const modelNames = ['Worker', 'Farmer', 'DriedA', 'DriedB', 'FloatA', 'FloatB', 'Quaility', 'visit', 'In-House-Drying', 'Dispatch-Of-Dried-Nutmeg', 'Dispatch-Of-Green', 'Cracking-Summary', 'Floation-Summary', 'Package-Ciontrol', 'Editors', 'Labour-support', 'Training-support', 'land-info', 'Land-Tenur', 'Nutmeg-Trees', 'Nutmeg-Variety', 'Other-Crops', 'Coconut-Trees', 'Citrus-Mango-Trees', 'Other-Spices-Trees', 'Other-Seasoning-Trees', 'Other-Crops-Cultivated', 'Condition', 'Nutmeg-Land', 'Nutmeg-Frequency', 'Potential-Risks', 'Road-Access', 'Food-Safety-and-Quality', 'Farm-Water-Source', 'Farm-House', 'inspector-symmary', 'Policy','Sanitation-A','Sanitation-B','Sanitation-C','Cracking_Schedule','Assorting_Log',
// 'Extractor_Log',
// 'Fumigation_Log','Shelves'];


// function deleteDatabase(dbName) {
//     return new Promise((resolve, reject) => {
//         const request = indexedDB.deleteDatabase(dbName);


//         request.onsuccess = function () {
//             resolve();
//         };


//         request.onerror = function (event) {
//             reject(event.target.error);
//         };
//     });
// }


// function openIndexedDBConnection(dbName) {
//     return new Promise((resolve, reject) => {
//         const request = indexedDB.open(dbName, 2);


//         request.onupgradeneeded = function (event) {
//             const db = event.target.result;
//             modelNames.forEach(modelName => {
//                 db.createObjectStore(modelName, { keyPath: 'id' });
//             });
//         };


//         request.onsuccess = function (event) {
//             resolve(event.target.result);
//         };


//         request.onerror = function (event) {
//             reject(event.target.error);
//         };
//     });
// }


// function fetchDataAndStore(db, modelName) {
//     return new Promise((resolve, reject) => {
//         fetch(`/api/${modelName}/`)
//             .then(response => response.json())
//             .then(data => {
//                 const transaction = db.transaction(modelName, 'readwrite');
//                 const objectStore = transaction.objectStore(modelName);
//                 data.forEach(item => {
//                     objectStore.put(item);
//                 });


//                 transaction.oncomplete = function () {
//                     resolve();
//                 };
//             })
//             .catch(error => {
//                 console.error('Error fetching data for model:', modelName, error);
//                 reject(error);
//             });
//     });
// }


// // Create "GCNA" database
// const gcnaDBName = 'GCNA';


// deleteDatabase(gcnaDBName)
//     .then(() => openIndexedDBConnection(gcnaDBName))
//     .then(db => Promise.all(modelNames.map(modelName => fetchDataAndStore(db, modelName))))
//     .then(() => console.log(`Database "${gcnaDBName}" created successfully with data.`))
//     .catch(error => console.error(`Error creating database "${gcnaDBName}":`, error));


// // Create "DELETED" database
// const deletedDBName = 'DELETED';


// deleteDatabase(deletedDBName)
//     .then(() => openIndexedDBConnection(deletedDBName))
//     .then(db => {
//         // Close the connection to "DELETED" to ensure it is created with empty object stores
//         db.close();
//         console.log(`Database "${deletedDBName}" created successfully with empty object stores.`);
//     })
//     .catch(error => console.error(`Error creating database "${deletedDBName}":`, error));



//indexeddb.js

const modelNames = ['Worker', 'Farmer', 'DriedA', 'DriedB', 'FloatA', 'FloatB', 'Quaility', 'visit', 'In-House-Drying', 'Dispatch-Of-Dried-Nutmeg', 'Dispatch-Of-Green', 'Cracking-Summary', 'Floation-Summary', 'Package-Ciontrol', 'Editors', 'Labour-support', 'Training-support', 'land-info', 'Land-Tenur', 'Nutmeg-Trees', 'Nutmeg-Variety', 'Other-Crops', 'Coconut-Trees', 'Citrus-Mango-Trees', 'Other-Spices-Trees', 'Other-Seasoning-Trees', 'Other-Crops-Cultivated', 'Condition', 'Nutmeg-Land', 'Nutmeg-Frequency', 'Potential-Risks', 'Road-Access', 'Food-Safety-and-Quality', 'Farm-Water-Source', 'Farm-House', 'inspector-symmary', 'Policy','Sanitation-A','Sanitation-B','Sanitation-C','Cracking_Schedule','Assorting_Log',
'Extractor_Log',
'Fumigation_Log','Shelves','W_Shelves','M_Shelves','W_Shelves_Dried','M_Shelves_Dried','Vehicle_Inspection','Final_Weight_Inspection','Final_Weight_Inspection_fields','Dispatch_Of_Dried_Nutmeg_Rec','Dispatch_Of_Green_Nutmeg_Rec','Mace_Dispatched','Mace_Purchase','Mace_Dispatched_Rec'];



function deleteDatabase(dbName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(dbName);


        request.onsuccess = function () {
            resolve();
        };


        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}


function openIndexedDBConnection(dbName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 2);


        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            modelNames.forEach(modelName => {
                db.createObjectStore(modelName, { keyPath: 'id' });
            });
        };


        request.onsuccess = function (event) {
            resolve(event.target.result);
        };


        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}


function fetchDataAndStore(db, modelName) {
    return new Promise((resolve, reject) => {
        fetch(`/api/${modelName}/`)
            .then(response => response.json())
            .then(data => {
                const transaction = db.transaction(modelName, 'readwrite');
                const objectStore = transaction.objectStore(modelName);
                data.forEach(item => {
                    objectStore.put(item);
                });


                transaction.oncomplete = function () {
                    resolve();
                };
            })
            .catch(error => {
                console.error('Error fetching data for model:', modelName, error);
                reject(error);
            });
    });
}


// Create "GCNA" database
const gcnaDBName = 'GCNA';


deleteDatabase(gcnaDBName)
    .then(() => openIndexedDBConnection(gcnaDBName))
    .then(db => Promise.all(modelNames.map(modelName => fetchDataAndStore(db, modelName))))
    .then(() => console.log(`Database "${gcnaDBName}" created successfully with data.`))
    .catch(error => console.error(`Error creating database "${gcnaDBName}":`, error));


// Create "DELETED" database
const deletedDBName = 'DELETED';


deleteDatabase(deletedDBName)
    .then(() => openIndexedDBConnection(deletedDBName))
    .then(db => {
        // Close the connection to "DELETED" to ensure it is created with empty object stores
        db.close();
        console.log(`Database "${deletedDBName}" created successfully with empty object stores.`);
    })
    .catch(error => console.error(`Error creating database "${deletedDBName}":`, error));
