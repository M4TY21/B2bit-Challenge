import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string().email("E-mail invalido").required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Senha muito curta"),
});
