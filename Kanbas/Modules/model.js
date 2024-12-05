//kanbas-node-server-app/Kanbas/Modules/model.js
import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ModuleModel", schema);
export default model;