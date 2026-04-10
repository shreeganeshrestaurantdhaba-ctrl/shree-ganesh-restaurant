// validation.ts
import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(2).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  message: Yup.string().min(10).required("Message is required"),
});