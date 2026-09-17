// Shared Firebase Service Module for NST 5th Sem Notes (Cloud Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCGLTpL9bn6V6Kc1vhXEFpNpfXcEiiE34",
  authDomain: "nst-tracker.firebaseapp.com",
  projectId: "nst-tracker",
  storageBucket: "nst-tracker.firebasestorage.app",
  messagingSenderId: "807619975988",
  appId: "1:807619975988:web:9b71e314ef49a88f2b6361",
  measurementId: "G-6G9H09QLC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

const channel = new BroadcastChannel('nst_portal_sync');

// Listen for Realtime Portal Assignments with LocalStorage fallback & BroadcastChannel sync
export function listenPortalAssignments(callback) {
  // First load from localStorage for immediate visual sync
  const localData = localStorage.getItem('nst_portal_assignments');
  if (localData) {
    try {
      callback(JSON.parse(localData));
    } catch(e) {
      callback([]);
    }
  } else {
    callback([]);
  }

  // Cross-Tab BroadcastChannel Listener
  channel.onmessage = (event) => {
    if (event.data && Array.isArray(event.data)) {
      callback(event.data);
    }
  };

  // Cross-Tab Sync via Window Storage Event fallback
  window.addEventListener('storage', (e) => {
    if (e.key === 'nst_portal_assignments' && e.newValue) {
      try {
        callback(JSON.parse(e.newValue));
      } catch(err) {}
    }
  });

  // Realtime Cloud Firestore Listener
  const assignmentsCol = collection(db, 'portal_assignments');
  onSnapshot(assignmentsCol, (snapshot) => {
    const list = [];
    snapshot.forEach(docSnap => {
      list.push({ id: docSnap.id, ...docSnap.data() });
    });

    if (list.length > 0) {
      localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
      callback(list);
    } else {
      // If Firestore cloud collection is empty, check if there are locally stored questions to seed to Firestore
      const local = localStorage.getItem('nst_portal_assignments');
      let localList = [];
      if (local) {
        try { localList = JSON.parse(local); } catch(e) {}
      }
      if (localList.length > 0) {
        localList.forEach(q => {
          setDoc(doc(db, 'portal_assignments', q.id), q);
        });
        callback(localList);
      } else {
        localStorage.setItem('nst_portal_assignments', JSON.stringify([]));
        callback([]);
      }
    }
  }, (err) => {
    console.warn('Firestore assignments listener error:', err);
  });
}

// Save or Update a single Portal Assignment
export function savePortalAssignment(questionObj) {
  const localData = localStorage.getItem('nst_portal_assignments');
  let list = localData ? JSON.parse(localData) : [];
  const existingIdx = list.findIndex(q => q.id === questionObj.id);
  if (existingIdx >= 0) {
    list[existingIdx] = questionObj;
  } else {
    list.push(questionObj);
  }
  localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
  channel.postMessage(list);

  const docRef = doc(db, 'portal_assignments', questionObj.id);
  return setDoc(docRef, questionObj).catch(err => console.warn('Firestore sync error:', err));
}

// Delete a Portal Assignment
export function removePortalAssignment(id) {
  const localData = localStorage.getItem('nst_portal_assignments');
  let list = localData ? JSON.parse(localData) : [];
  list = list.filter(q => q.id !== id);
  localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
  channel.postMessage(list);

  const docRef = doc(db, 'portal_assignments', id);
  return deleteDoc(docRef).catch(err => console.warn('Firestore delete error:', err));
}

// Listen for Realtime Lecture Checklists
export function listenChecklistProgress(callback) {
  const local = localStorage.getItem('nst_checklist_progress');
  if (local) {
    try { callback(JSON.parse(local)); } catch(e) {}
  }

  const checklistCol = collection(db, 'checklist_progress');
  onSnapshot(checklistCol, (snapshot) => {
    const data = {};
    snapshot.forEach(docSnap => {
      const d = docSnap.data();
      data[docSnap.id] = d.completed || false;
    });
    localStorage.setItem('nst_checklist_progress', JSON.stringify(data));
    callback(data);
  }, (err) => {
    console.warn('Firestore checklist listener error:', err);
  });
}

// Toggle or Set a Lecture Completion status
export function setChecklistProgress(lectureId, isCompleted) {
  const local = localStorage.getItem('nst_checklist_progress');
  let data = local ? JSON.parse(local) : {};
  data[lectureId] = isCompleted;
  localStorage.setItem('nst_checklist_progress', JSON.stringify(data));

  const docRef = doc(db, 'checklist_progress', lectureId);
  return setDoc(docRef, { completed: isCompleted }).catch(err => console.warn('Firestore checklist sync error:', err));
}
