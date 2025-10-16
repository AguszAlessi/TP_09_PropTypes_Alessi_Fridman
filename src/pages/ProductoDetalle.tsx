import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductoDetalle.css';
import CardProducto from '../components/CardProducto';
import { Product } from '../types';
import axios from 'axios';

export default function ProductoDetalle() {
  const [producto, setProducto] = useState<Product | null>(null);
  const [relacionados, setRelacionados] = useState<Product[]>([]);
  const { idProducto } = useParams<{ idProducto: string }>();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProducto}`)
      .then(response => setProducto(response.data))
      .catch(error => console.error('Error al cargar producto:', error));
  }, [idProducto]);
  
  useEffect(() => {
    if (!producto?.category) return;
  
    axios.get(`https://dummyjson.com/products/category/${producto.category}`)
      .then(response => {
        const productos = response.data.products.filter((p: Product) => p.id !== producto.id);
        const seleccionados = [];
        const usados = new Set();
  
        while (seleccionados.length < 4 && usados.size < productos.length) {
          const idx = Math.floor(Math.random() * productos.length);
          if (!usados.has(idx)) {
            usados.add(idx);
            seleccionados.push(productos[idx]);
          }
        }
  
        setRelacionados(seleccionados);
      })
      .catch(error => console.error('Error al cargar productos relacionados:', error));
  }, [producto]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <>
      <div className="producto-detalle">
        <div className="detalle-contenido">
          <div className="detalle-imagen">
            <img src={producto.thumbnail} alt={producto.title} />
          </div>
          <div className="detalle-info">
            <h1>{producto.title}</h1>
            <p className="descripcion">{producto.description}</p>
            <p className="precio">${producto.price}</p>
            <p className="stock">Stock: {producto.stock}</p>
            <p className="rating">⭐ {producto.rating} / 5</p>
            <button className="btn-comprar">Añadir al carrito</button>
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <section className="relacionados">
          <h2>Productos que te pueden interesar</h2>
          <div className="grid">
            {relacionados.map(prod => (
              <CardProducto key={prod.id} producto={prod} />
            ))}
          </div>
        </section>
      )}
    
    </>
  );
}
