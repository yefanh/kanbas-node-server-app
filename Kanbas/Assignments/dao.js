//kanbas-node-server-app/Kanbas/Assignments/dao.js

import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const index = assignments.findIndex((a) => a._id === assignmentId);
  if (index !== -1) {
    Database.assignments[index] = { ...assignments[index], ...assignmentUpdates };
    return Database.assignments[index];
  }
  return null;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  const initialLength = assignments.length;
  Database.assignments = assignments.filter((a) => a._id !== assignmentId);
  return Database.assignments.length < initialLength;
}
