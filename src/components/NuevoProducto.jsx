import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions de redux
import { crearNuevoProducto } from "../Redux/actions/productosAction";

const NuevoProducto = () => {
  //Utilizar useDispacth y te crea una función
  const dispatch = useDispatch();

  //manda a llamar el actio de productoAction
  const agregarProducto = () => dispatch(crearNuevoProducto());

  //Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario

    //si no hay errores

    //Crea el nuevo producto
    agregarProducto();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                {" "}
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
