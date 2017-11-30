// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDr7v9cFWb9kM38DiHggv4adIxrrhA3RoA",
    authDomain: "angulardb-fbfcd.firebaseapp.com",
    databaseURL: "https://angulardb-fbfcd.firebaseio.com",
    projectId: "angulardb-fbfcd",
    storageBucket: "angulardb-fbfcd.appspot.com",
    messagingSenderId: "286151433358"
  }
};
