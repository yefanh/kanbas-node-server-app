// src/Kanbas/Database/courses.d.ts
declare module "./courses.js" {
  const value: {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
    description: string;
  }[];
  export default value;
}
