import { Router } from "express";
import { sendMailController } from "./useCases/SendEmail";
import { sendMailToListController } from "./useCases/SendEmailToList";

const router = Router();

router.post('/send-email', (req, res) => {
  return sendMailController.handle(req, res)
})

router.post('/send-email-list', (req, res) => {
  return sendMailToListController.handle(req, res)
})

export { router };