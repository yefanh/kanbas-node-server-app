//kanbas-node-server-app/Kanbas/Courses/model.js
import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("CourseModel", schema);
export default model;