import firebaseConfig from "./firebaseConfig"

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()
db.settings({
    timestampsInSnapshots : true
})
export default {
    auth,db
}