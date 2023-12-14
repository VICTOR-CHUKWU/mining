import * as yup from "yup";

const messageFormSchema = yup
    .object()
    .shape({
        firstName: yup
            .string()
            .required("First name is required")
            .min(3, "First name should be at least 3 letters"),

        lastName: yup
            .string()
            .required("Last name is required")
            .min(3, "Last name should be at least 3 letters"),
        email: yup.string().required("Email is required"),
        phoneNumber: yup.string().required("Phone number is required"),
        message: yup
            .string()
            .min(5, "Enter a valid message")
            .required("Message is required"),
    })
    .required();

export {
    messageFormSchema
}