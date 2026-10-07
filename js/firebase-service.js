// Shared Firebase Service Module for NST 5th Sem Notes (Cloud Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Single source-of-truth Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBz7RcccbfXgW0AlBue_2thQxO1xZWM0ok",
  authDomain: "th-sem-9acab.firebaseapp.com",
  projectId: "th-sem-9acab",
  storageBucket: "th-sem-9acab.firebasestorage.app",
  messagingSenderId: "1091172769980",
  appId: "1:1091172769980:web:df9aa611acf9a5761e70b9",
  measurementId: "G-V8PLSE7WT1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

const channel = new BroadcastChannel('nst_portal_sync');

// ── Portal Assignments ────────────────────────────────────────────────────────

export function listenPortalAssignments(callback) {
  const localData = localStorage.getItem('nst_portal_assignments');
  if (localData) {
    try { callback(JSON.parse(localData)); } catch(e) { callback([]); }
  } else {
    callback([]);
  }

  channel.onmessage = (event) => {
    if (event.data && Array.isArray(event.data)) callback(event.data);
  };

  window.addEventListener('storage', (e) => {
    if (e.key === 'nst_portal_assignments' && e.newValue) {
      try { callback(JSON.parse(e.newValue)); } catch(err) {}
    }
  });

  const assignmentsCol = collection(db, 'portal_assignments');
  onSnapshot(assignmentsCol, (snapshot) => {
    const list = [];
    snapshot.forEach(docSnap => list.push({ id: docSnap.id, ...docSnap.data() }));

    if (list.length > 0) {
      localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
      callback(list);
    } else {
      const local = localStorage.getItem('nst_portal_assignments');
      let localList = [];
      if (local) { try { localList = JSON.parse(local); } catch(e) {} }
      if (localList.length > 0) {
        localList.forEach(q => setDoc(doc(db, 'portal_assignments', q.id), q));
        callback(localList);
      } else {
        localStorage.setItem('nst_portal_assignments', JSON.stringify([]));
        callback([]);
      }
    }
  }, (err) => console.warn('Firestore assignments listener error:', err));
}

export function savePortalAssignment(questionObj) {
  const localData = localStorage.getItem('nst_portal_assignments');
  let list = localData ? JSON.parse(localData) : [];
  const idx = list.findIndex(q => q.id === questionObj.id);
  if (idx >= 0) list[idx] = questionObj; else list.push(questionObj);
  localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
  channel.postMessage(list);
  return setDoc(doc(db, 'portal_assignments', questionObj.id), questionObj)
    .catch(err => console.warn('Firestore sync error:', err));
}

export function removePortalAssignment(id) {
  const localData = localStorage.getItem('nst_portal_assignments');
  let list = localData ? JSON.parse(localData) : [];
  list = list.filter(q => q.id !== id);
  localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
  channel.postMessage(list);
  return deleteDoc(doc(db, 'portal_assignments', id))
    .catch(err => console.warn('Firestore delete error:', err));
}

// ── Lecture Checklist Progress ────────────────────────────────────────────────

export function listenChecklistProgress(callback) {
  const local = localStorage.getItem('nst_checklist_progress');
  if (local) { try { callback(JSON.parse(local)); } catch(e) {} }

  onSnapshot(collection(db, 'checklist_progress'), (snapshot) => {
    const data = {};
    snapshot.forEach(docSnap => {
      data[docSnap.id] = docSnap.data().completed || false;
    });
    localStorage.setItem('nst_checklist_progress', JSON.stringify(data));
    callback(data);
  }, (err) => console.warn('Firestore checklist listener error:', err));
}

export function setChecklistProgress(lectureId, isCompleted) {
  const local = localStorage.getItem('nst_checklist_progress');
  let data = local ? JSON.parse(local) : {};
  data[lectureId] = isCompleted;
  localStorage.setItem('nst_checklist_progress', JSON.stringify(data));
  return setDoc(doc(db, 'checklist_progress', lectureId), { completed: isCompleted })
    .catch(err => console.warn('Firestore checklist sync error:', err));
}

// ── Quiz Progress (Practice Labs) ────────────────────────────────────────────

/**
 * Load quiz progress for a given subject from Firestore.
 * @param {string} subject  e.g. 'aml', 'dl', 'mca', 'cn'
 * @returns {Promise<object>} appState object
 */
export async function loadQuizProgress(subject) {
  try {
    const snap = await getDoc(doc(db, 'quiz_progress', subject));
    if (snap.exists()) return snap.data();
  } catch(e) {
    console.warn('Firestore quiz load error:', e);
  }
  return {};
}

/**
 * Save quiz progress for a given subject to Firestore.
 * @param {string} subject  e.g. 'aml', 'dl', 'mca', 'cn'
 * @param {object} state    appState object
 */
export function saveQuizProgress(subject, state) {
  return setDoc(doc(db, 'quiz_progress', subject), state)
    .catch(err => console.warn('Firestore quiz save error:', err));
}
