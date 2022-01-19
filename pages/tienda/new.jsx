// React Js
import { useState } from "react";

// Next JS
import { useRouter } from "next/router";

// Firebase
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

// Components
import {
  Form,
  FormFileWrapper,
  FormInput,
  FormInputFile,
  FormInputSubmit,
  FormLabelFile,
  FormTextArea,
  FormTitle,
  FormWrapper,
} from "../../components/Form/styles";
import Layout from "../../components/Layout";
import uploadImages from "utils/uploadImages";
import addPost from "utils/addPost";
import ProductCategories from "components/ProductCategories";

const initialForm = {
  title: "",
  price: "",
  description: "",
  file: {},
};

const newProduct = () => {
  const [form, setForm] = useState(initialForm);
  const [productCategories, setProductCategories] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const user = useAuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return null;

    if (form) {
      setLoading(true);

      uploadImages(form.file)
        .then(async (urls) => {
          let imgFormated = [];
          for (let i = 0; i < form.file.length; i++) {
            imgFormated.push({
              name: form.file[i].name,
              url: urls[i],
            });
          }

          const productPosted = await addPost(
            form,
            imgFormated,
            productCategories,
            user
          );
          setLoading(false);
          router.push(`/tienda/${productPosted.id}`);
        })
        .catch((err) => {
          setLoading(false);
          alert("Error al subir imagenes");
          router.push("/tienda");
          console.log(err);
        });
    }
  };

  const getCategories = (categories) => setProductCategories(categories);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (e.target.type === "file") {
      console.log(e.target.files);
      setForm({
        ...form,
        file: e.target.files,
      });
    }
  };

  if (loading) return <h1>Cargando...</h1>;

  return (
    <Layout>
      <FormWrapper>
        <FormTitle>Publicar</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormInput
            placeholder="Titulo"
            name="title"
            required
            onBlur={handleChange}
          />
          <FormInput
            name="price"
            placeholder="Precio"
            type="number"
            required
            onBlur={handleChange}
          />
          <FormTextArea
            name="description"
            placeholder="Descripción"
            required
            onBlur={handleChange}
          />
          <FormFileWrapper>
            <FormLabelFile htmlfor="files">File</FormLabelFile>
            <FormInputFile
              type="file"
              id="files"
              name="files"
              onChange={handleChange}
              accept="image/*"
              required
              multiple
            />
          </FormFileWrapper>
          <ProductCategories getCategories={getCategories} />
          <FormInputSubmit type="submit" value="Publicar" />
        </Form>
      </FormWrapper>
    </Layout>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(newProduct);
