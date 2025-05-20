import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("email Id is required"),
  password: Yup.string()
    .min(8, "Password must be 8 digits long")
    .required("Password is required."),
});

type LoginType = Yup.InferType<typeof loginSchema>;

export type { LoginType };
