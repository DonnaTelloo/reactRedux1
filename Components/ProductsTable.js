import {
    Button
  } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    useDispatch,
    useSelector
  } from 'react-redux'
import {
  orderProduct,
} from '../Redux/Store/Actions'


const ProductsTable = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.STORE);

    // const handleOrder = (item) => {
    //   dispatch(orderProduct())
    // }
    
    return (
        <TableContainer component={Paper} style={{
            width: '50%'
          }}>
          <Table aria-label="simple table">
            <TableHead style={{
              background: 'black',
            }}>
              <TableRow>
                <TableCell style={{
                  color: "#FFF"
                }}>პროდუქტი</TableCell>
                <TableCell align="right" style={{
                  color: "#FFF"
                }}>რაოდენობა</TableCell>
                <TableCell align="right" style={{
                  color: "#FFF"
                }}>მოქმედება</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  data.products.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">
                        <Button variant="contained" color="primary" onClick={() => console.log("orderProducts")}>
                          კალათაში დამატება
                        </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })
                }
            </TableBody>
          </Table>
        </TableContainer>
    )
}

export default ProductsTable