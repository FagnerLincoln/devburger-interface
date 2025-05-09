
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { api } from "../../../services/api";
import { formatPrice } from '../../../utils/formatPrice'
import { Container, ProductImage, EditButton, } from "./styles";
import { Pencil } from "@phosphor-icons/react/dist/ssr";
import { CheckCircle } from '@phosphor-icons/react';
import { XCircle } from "@phosphor-icons/react";
import { useNavigate, } from "react-router-dom";

export function Products() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    async function loadProducts() {
      const { data } = await api.get('/products');
      

      console.log(data);
      setProducts(data);

    }

    loadProducts();

  }, []);


  function isOffer(offer) {

    if (offer) {
      return <CheckCircle color="#80ff00" size='28'  />;

    } else {
      return <XCircle  color="#d10000" size='28' />;
    }

  };

  function editProduct(product){
    navigate('/admin/editar-produto', { state: {product}});
   }

 //function editProduct(product) {
  //navigate(`/admin/editar-produto/${product.id}`);
// }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center">
                  <ProductImage src={product.url} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editProduct(product)}>
                    <Pencil />
                  </EditButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}