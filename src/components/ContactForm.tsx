// import { useEffect, useState, type FormEvent } from "react";
// import { Send, CheckCircle, AlertCircle } from "lucide-react";
// import emailjs from "@emailjs/browser";

// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
// const TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN!;
// const TEMPLATE_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY!;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

// type FormStatus = "idle" | "loading" | "success" | "error";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [formStatus, setFormStatus] = useState<FormStatus>("idle");
//   const [formError, setFormError] = useState("");

//   // ✅ auto reset success state safely
//   useEffect(() => {
//     if (formStatus !== "success") return;

//     const timer = setTimeout(() => {
//       setFormStatus("idle");
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [formStatus]);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (formStatus === "loading") return;

//     setFormError("");

//     const cleaned = {
//       name: formData.name.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       message: formData.message.trim(),
//     };

//     // Validation
//     if (!cleaned.name || cleaned.name.length < 2) {
//       return setFormError("Enter valid name");
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(cleaned.email)) {
//       return setFormError("Please enter a valid email address");
//     }

//     // Optional phone validation
//     if (cleaned.phone && !/^(\+91|0)?[6-9]\d{9}$/.test(cleaned.phone)) {
//       return setFormError("Enter valid phone number");
//     }

//     if (cleaned.message.length < 10) {
//       return setFormError("Message must be at least 10 characters");
//     }

//     setFormStatus("loading");

//     const templateParams = {
//       name: cleaned.name,
//       email: cleaned.email,
//       phone: cleaned.phone,
//       message: cleaned.message,
//     };
//     try {
//       // Admin mail
//       await emailjs.send(
//         SERVICE_ID, // your service ID
//         TEMPLATE_ADMIN, // admin template ID
//         templateParams,
//         PUBLIC_KEY, // public key
//       );

//       // Auto reply
//       await emailjs.send(
//         SERVICE_ID, // service ID
//         TEMPLATE_REPLY, // auto reply template ID
//         formData,
//         PUBLIC_KEY, // public key
//       );
//  setTimeout(() => {
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });

//     setFormStatus("success");
//   }, 1000);
//     } catch (err) {
//       console.error("EmailJS Error:", err);
//       setFormStatus("error");
//       setFormError("Something went wrong. Please try again.");
//     }
//   };

//   console.log("forms", formStatus);

//   if (formStatus === "success") {
//     return (
//       <div className="bg-green-100 border border-green-200 rounded-2xl p-8 text-center">
//         <CheckCircle size={40} className="text-green-dark mx-auto mb-4" />
//         <h3 className="font-heading text-xl text-green-dark mb-2">
//           Message Sent!
//         </h3>
//         <p className="text-text-light">
//           Thank you for reaching out. We will get back to you soon!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {formError && (
//         <div className="error_mess flex gap-2 items-center">
//           <AlertCircle size={16} />
//           {formError}
//         </div>
//       )}

//       <div>
//         <label className="inputLabel">Your Name *</label>
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="input shadow-none rounded-xl"
//           //   required
//         />
//       </div>

//       <div>
//         <label className="inputLabel">Email Address *</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="input shadow-none rounded-xl"
//           //   required
//         />
//       </div>

//       <div>
//         <label className="inputLabel">Phone Number</label>
//         <input
//           type="tel"
//           placeholder="Enter 10-digit phone number"
//           value={formData.phone}
//           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//           className="input shadow-none rounded-xl"
//         />
//       </div>

//       <div>
//         <label className="inputLabel">Message</label>
//         <textarea
//           placeholder="Write your message here..."
//           rows={5}
//           value={formData.message}
//           onChange={(e) =>
//             setFormData({ ...formData, message: e.target.value })
//           }
//           className="input shadow-none rounded-xl"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={formStatus === "loading"}
//         className="btn btn-primary flex-center gap-2 w-full rounded-xl"
//       >
//         {formStatus === "loading" ? (
//           <>
//             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//             Sending...
//           </>
//         ) : (
//           <>
//             <Send size={18} />
//             Send Message
//           </>
//         )}
//       </button>
//     </form>
//   );
// }

import { ChangeEvent, FormEvent,  useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contactSchema } from "@/utils/validation";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN!;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

// Type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = async (): Promise<boolean> => {
    try {
      await contactSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const newErrors: Partial<FormData> = {};

      err.inner.forEach((e: any) => {
        newErrors[e.path as keyof FormData] = e.message;
      });

      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) return;

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      setStatus("loading");

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ADMIN,
        formRef.current,
        PUBLIC_KEY,
      );

      setStatus("success");
      setStatusMessage("Message Sent!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Message Failed to Send!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Success UI
  if (status === "success") {
    return (
      <div className="bg-green-100 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle size={40} className="text-green-dark mx-auto mb-4" />
        <h3 className="font-heading text-xl text-green-dark mb-2">
          Message Sent!
        </h3>
        <p className="text-text-light">
          Thank you for reaching out. We will get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {/* Global Error */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-shake">
          <AlertCircle size={18} className="shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="inputLabel" htmlFor="name">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Enter Your Name"
          onChange={handleChange}
          value={formData.name}
          className="input shadow-none rounded-xl"
        />
        {errors.name && <p className="text-red-500 mt-1 pl-2 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="inputLabel">Email Address *</label>
        <input
          type="email"
          autoComplete="email"
          id="email"
          name="email"
          placeholder=" Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input shadow-none rounded-xl"
        />
        {errors.email && <p className="text-red-500 mt-1 pl-2 text-sm">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="inputLabel">Phone Number</label>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          id="phone"
          placeholder="Enter 10-digit phone number"
          value={formData.phone}
          onChange={handleChange}
          className="input shadow-none rounded-xl"
        />
        {errors.phone && <p className="text-red-500 mt-1 pl-2 text-sm">{errors.phone}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="inputLabel">Message *</label>
        <textarea
          name="message"
          id="message"
          autoComplete="message"
          placeholder="Write your message here..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="input shadow-none rounded-xl"
        />
        {errors.message && <p className="text-red-500 mt-1 pl-2 text-sm">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary flex-center gap-2 w-full rounded-xl"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
