import { Router } from "express";
import { sendMailController } from "./useCases/SendEmail";

const router = Router();

router.post('/send-email', (req, res) => {
  return sendMailController.handle(req, res)
})

export { router };