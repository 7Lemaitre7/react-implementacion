import GestorPosts from "./components/GestorPosts";

function App() {
  return (
    <main className="container">
      <h1>Laboratorio React: Hooks y Axios</h1>
      <p className="descripcion">
        Aplicación práctica para consultar, crear y eliminar publicaciones usando React, Hooks y Axios.
      </p>

      <GestorPosts />
    </main>
  );
}

export default App;
