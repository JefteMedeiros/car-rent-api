import { response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

//Path declarado em server.ts
categoriesRoutes.post("/create", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if(categoryAlreadyExists) {
    return res.status(400).json({error: "Category already exists!"})
  }

  categoriesRepository.create({name, description})

  return res.status(201).send();
});

categoriesRoutes.get("/retrieve", (req, res) => {
  const list = categoriesRepository.list()
  return res.status(200).json(list)
})

export { categoriesRoutes };
