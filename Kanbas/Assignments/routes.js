//kanbas-node-server-app/Kanbas/Assignments/routes.js

import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  // get specific assignment
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  // create a new assignment
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.json(newAssignment);
  });

  // uodate a specific assignment
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    if (updatedAssignment) {
      res.json(updatedAssignment);
    } else {
      res.status(404).send({ message: "Assignment not found" });
    }
  });

  // delete a specific assignment
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const success = assignmentsDao.deleteAssignment(assignmentId);
    if (success) {
      res.sendStatus(204);
    } else {
      res.status(404).send({ message: "Assignment not found" });
    }
  });
}
