import { useFormik } from "formik";
import * as Yup from "yup";

const mainContainer = {
  width: "50%",
  display: "flex",
  rowGap: "10px",
  flexDirection: "column",
};
const information = {
  display: "flex",
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("This field is required")
        .max(12, "Field must have 12 characters"),
      lastName: Yup.string()
        .required("This field is required")
        .max(12, "Field must have 12 characters"),
    }),
    onSubmit: (values) => {
      console.log("hello", values);
    },
  });
  return (
    <main style={mainContainer}>
      <article style={information}>
        <div style={{ flexGrow: 1 }}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            style={{ width: "100%" }}
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            style={{ width: "100%" }}
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </div>
      </article>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" name="phoneNumer" id="phoneNumber" />
      </div>
      <button type="button" onClick={() => console.log(formik.values)}>
        handle Submit
      </button>
    </main>
  );
};

export default SignupForm;
