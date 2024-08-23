/* to get the sevsitive data(related to the firebase) from .env file and store it in variable(collect them in an obj) and exportet again to another files */
export const firebaseConfig={
 apiKey:import.meta.env.VITE_apiKey,
 authDomain: import.meta.env.VITE_authDomain,
 ProjectId: import.meta.env.VITE_ProjectId,
 storageBucket: import.meta.env.VITE_storageBucket,
 messagingSenderId: import.meta.env.VITE_messagingSenderId,
 appId:import.meta.env.VITE_appId,

}