import api from "./api";

export async function obtenerPosts() {
  const respuesta = await api.get("/posts");
  return respuesta.data;
}

export async function crearPost(post) {
  const respuesta = await api.post("/posts", post);
  return respuesta.data;
}

export async function eliminarPostApi(id) {
  const respuesta = await api.delete(`/posts/${id}`);
  return respuesta.data;
}
