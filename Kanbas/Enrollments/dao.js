//kanbas-node-server-app/Kanbas/Enrollments/dao.js

import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}

export function isUserEnrolledInCourse(userId, courseId) {
  return Database.enrollments.some(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
}

export function findCoursesForUser(userId) {
  const courseIds = Database.enrollments
    .filter((enrollment) => enrollment.user === userId)
    .map((enrollment) => enrollment.course);
  return Database.courses.filter((course) => courseIds.includes(course._id));
}
