import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from '../components/CardProducto';
import { Product } from '../types';
import './Productos.css';
import axios from 'axios';

export default function Productos() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const { idCategoria } = useParams<{ idCategoria?: string }>();

  useEffect(() => {
    setPage(1);
  }, [idCategoria]);

  useEffect(() => {
    const skip = (page - 1) * 20;
    const baseUrl = idCategoria
      ? `https://dummyjson.com/products/category/${idCategoria}`
      : 'https://dummyjson.com/products';
    
    const params = {
      limit: 20,
      skip: skip
    };
  
    axios.get(baseUrl, { params })
      .then(response => {
        const data = response.data;
        setProductos(data.products || []);
        setTotal(data.total || (data.products ? data.products.length : 0));
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setProductos([]);
        setTotal(0);
      });
  }, [idCategoria, page]);

  const totalPages = Math.ceil(total / 20) || 1;

  return (
    <div className="productos">
      <h2>Productos</h2>
 
      <h3 className='titulo'>{idCategoria}</h3>

      <div className="grid">
        {productos.map(prod => (
          <CardProducto key={prod.id} producto={prod} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="paginacion">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
            <button
              key={num}
              className={num === page ? 'activo' : ''}
              onClick={() => setPage(num)}>
              {num}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

