import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  // estado
  // crear la funcion envioDelFormulario
  // crear la funcion del handleChange

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", contraseña: "", confirmar: "" },
    onSubmit: (data) => {
      console.log("se envia");
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este Campo Es Obligatorio")
        .min(5, "minimo 5")
        .max(15, "maximo 15"),
      email: Yup.string()
        .email("Ingresar Email")
        .required("Este Campo Es Obligatorio"),
      contraseña: Yup.string()
        .required("Este Campo Es Obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "Debe Contener Mayuscula"
        ),
      confirmar: Yup.string()
        .required("Este Campo Es Obligatorio")
        .oneOf([Yup.ref("contraseña")], "Las Contraseñas No Coinciden"),
    }),
    validateOnChange: false,
  });

  //   console.log(values);
  console.log(errors); // {email: "dsadsa", nombre:"dsa"} - {}
  console.log(errors.nombre); // ---> undefined | texto

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      {/* {errors.nombre && <span> {errors.nombre}</span>} */}
      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="text"
        label="contraseña"
        name="contraseña"
        onChange={handleChange}
        error={errors.contraseña ? true : false}
        helperText={errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="text"
        label="confirmar"
        onChange={handleChange}
        name="confirmar"
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />
      {values.nombre === "delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Direccion"
          onChange={handleChange}
          name="confirmar"
        />
      )}
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
