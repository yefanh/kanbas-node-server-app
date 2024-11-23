//kanbas-node-server-app/Lab5/WorkingWithObjects.js
const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};

const module = {
  id: "CS101",
  name: "Introduction to Computer Science",
  description: "Learn the basics of Computer Science",
  course: "Undergraduate",
};

export default function WorkingWithObjects(app) {
  
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // 返回模块对象
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  // 返回模块名称
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

  // 更新模块名称
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });

  // 更新模块描述
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  });

  // 更新 assignment 的分数
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore);
    res.json(assignment);
  });

  // 更新 assignment 的完成状态
  app.get("/lab5/assignment/completed/:isCompleted", (req, res) => {
    const { isCompleted } = req.params;
    assignment.completed = isCompleted === "true";
    res.json(assignment);
  });


};
