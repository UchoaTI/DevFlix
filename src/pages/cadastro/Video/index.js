/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonBlack from '../../../components/ButtonBlack';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);
  const { handleChange, values, clearForm } = useForm({
    titulo: 'Título Padrão',
    url: 'https://www.youtube.com/watch?v=c8mVlakBESE',
    categoria: 'Tec',
  });
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => setCategorias(categoriasFromServer));
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();

    const categoriaEncontrada = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.insert({
      titulo: values,
      url: values.url,
      categoriaId: categoriaEncontrada.id,
    })
      .then(() => {
        clearForm(values);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>
      <form onSubmit={onSubmitHandler}>

        <FormField
          id="titulo"
          label="Título"
          value={values.titulo}
          onChangeHandler={handleChange}
        />

        <FormField
          id="url"
          label="URL"
          value={values.url}
          onChangeHandler={handleChange}
        />

        <FormField
          id="categoria"
          label="Categoria"
          value={values.categoria}
          suggestions={categoryTitles}
          onChangeHandler={handleChange}
        />

        <ButtonBlack type="submit">
          Cadastrar
        </ButtonBlack>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
