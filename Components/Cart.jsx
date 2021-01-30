import { connect } from 'react-redux'
import React, { Component } from 'react'
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

class Cart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <React.Fragment>
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
                        <TableRow>
                        <TableCell component="th" scope="row">
                            ბანანი
                        </TableCell>
                        <TableCell align="right">12</TableCell>
                        <TableCell align="right">
                        <Button variant="contained" color="primary" onClick={() => console.log("action")}>
                            კალათაში დამატება
                        </Button>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart)
