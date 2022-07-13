import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

//Path declarado em server.ts
categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category();
  
  Object.assign(category, {
    name,
    description,
    date: new Date(),
  })

  categories.push(category);

  return res.status(201).json(categories);
});

export { categoriesRoutes };
