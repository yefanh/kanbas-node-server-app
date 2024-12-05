// Kanbas/Assignments/dao.js
import assignmentModel from "./model.js";

// create assignment
export async function createAssignment(assignment) {
  delete assignment._id;
  return assignmentModel.create(assignment);
}

// find all assignments
export async function findAssignmentsForCourse(courseId) {
  return assignmentModel.find({ course: courseId });
}

// update assignment
export async function updateAssignment(assignmentId, assignmentUpdates) {
  return assignmentModel.findByIdAndUpdate(
    assignmentId,
    { $set: assignmentUpdates },
    { new: true }
  );
}

// delete assignment
export async function deleteAssignment(assignmentId) {
  return assignmentModel.deleteOne({ _id: assignmentId });
}
