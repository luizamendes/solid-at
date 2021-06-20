import { Router } from "express";
import { createUserController, readAllUsersController, readUserController } from "./useCases";

const router = Router();

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users', (req, res) => {
  return readUserController.handle(req, res)
})

router.get('/all-users', (req, res) => {
  return readAllUsersController.handle(req, res)
})

export { router };