// Shared Firebase Service Module for NST 5th Sem Notes
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCGLTpL9bn6V6Kc1vhXEFpNpfXcEiiE34",
  authDomain: "nst-tracker.firebaseapp.com",
  projectId: "nst-tracker",
  storageBucket: "nst-tracker.firebasestorage.app",
  messagingSenderId: "807619975988",
  appId: "1:807619975988:web:9b71e314ef49a88f2b6361",
  measurementId: "G-6G9H09QLC8",
  databaseURL: "https://nst-tracker-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, get };

const channel = new BroadcastChannel('nst_portal_sync');

// Listen for Realtime Portal Assignments with LocalStorage fallback & BroadcastChannel sync
export function listenPortalAssignments(callback) {
  const assignmentsRef = ref(db, 'portal_assignments');
  
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

  onValue(assignmentsRef, (snapshot) => {
    const data = snapshot.val();
    const list = data ? Object.values(data) : [];
    localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
    callback(list);
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

  const qRef = ref(db, 'portal_assignments/' + questionObj.id);
  return set(qRef, questionObj).catch(err => console.warn('Firebase sync deferred:', err));
}

// Delete a Portal Assignment
export function removePortalAssignment(id) {
  const localData = localStorage.getItem('nst_portal_assignments');
  let list = localData ? JSON.parse(localData) : [];
  list = list.filter(q => q.id !== id);
  localStorage.setItem('nst_portal_assignments', JSON.stringify(list));
  channel.postMessage(list);

  const qRef = ref(db, 'portal_assignments/' + id);
  return set(qRef, null).catch(err => console.warn('Firebase sync deferred:', err));
}

// Listen for Realtime Lecture Checklists
export function listenChecklistProgress(callback) {
  const progressRef = ref(db, 'checklist_progress');
  onValue(progressRef, (snapshot) => {
    const data = snapshot.val() || {};
    callback(data);
  });
}

// Toggle or Set a Lecture Completion status
export function setChecklistProgress(lectureId, isCompleted) {
  const itemRef = ref(db, 'checklist_progress/' + lectureId);
  return set(itemRef, isCompleted);
}
