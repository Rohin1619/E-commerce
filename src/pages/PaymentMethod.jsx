import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const PaymentMethod = () => {

    const digitalpay = [
        {
            label: 'Esewa',
            Image:'Esewa.jpg'
        },
        {
            label:'Khalti',
            Image: 'Khalti.jpg'
        },
        {
            label:'Bank',
            Image: 'Bank.jpg'
        }
    ]
    
    const [selectedDigitalPay, setSelectedDigitalPay] = useState(null);
    const [modalControl, setModalControl] = useState(false);

    const handleClickOpen = (pay) => {
        setSelectedDigitalPay(pay);
        setModalControl(!modalControl)
    };

    const handleClose = () => {
        setSelectedDigitalPay(null);
        setModalControl(!modalControl)
    };

    return (
        <>
            <Typography variant='h3'>Your Subtotal is </Typography>
            <Box>
                <Typography variant='h6'>Choose your payment method!</Typography>
                { digitalpay.map((pay) => (
                    <Button key={ pay.label } onClick={ () => handleClickOpen(pay) }>{ pay.label }</Button>
                )) }
            </Box>
            <Dialog onClose={ handleClose } open={ modalControl }>
                <DialogTitle sx={ { m: 0, p: 2 } }>{ selectedDigitalPay?.label }</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={ handleClose }
                    sx={ {
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    } }
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    { selectedDigitalPay && (
                        <img src={ `/${selectedDigitalPay.Image}` } alt={ selectedDigitalPay.label } />
                    ) }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PaymentMethod