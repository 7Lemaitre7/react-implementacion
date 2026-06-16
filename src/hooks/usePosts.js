import { useEffect, useState } from "react";
import { obtenerPosts, crearPost, eliminarPostApi } from "../services/postService";

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarPosts() {
      try {
        setCargando(true);
        setError(null);

        const datos = await obtenerPosts();
        setPosts(datos.slice(0, 10));
      } catch (error) {
        setError("No se pudieron cargar las publicaciones.");
      } finally {
        setCargando(false);
      }
    }

    cargarPosts();
  }, []);

  async function agregarPost(titulo, autor, contenido) {
    const nuevoPost = {
      title: titulo,
      author: autor,
      body: contenido,
      userId: 1
    };

    try {
      const postCreado = await crearPost(nuevoPost);
      setPosts((postsActuales) => [postCreado, ...postsActuales]);
    } catch (error) {
      setError("No se pudo crear la publicación.");
    }
  }

  async function eliminarPost(id) {
    try {
      await eliminarPostApi(id);
      setPosts((postsActuales) =>
        postsActuales.filter((post) => post.id !== id)
      );
    } catch (error) {
      setError("No se pudo eliminar la publicación.");
    }
  }

  return {
    posts,
    cargando,
    error,
    agregarPost,
    eliminarPost
  };
}

export default usePosts;
