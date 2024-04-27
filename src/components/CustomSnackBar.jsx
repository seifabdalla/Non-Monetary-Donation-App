import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import propTypes from 'prop-types';
import React from 'react';
import {Slide} from "@mui/material";




export default function CustomSnackBar({message,severity,setIsFinished}) {

    const [state, setState] = React.useState({
        open: true,
        Transition: Slide,
    });

    const handleClose = () => {
        setState({
            open: false,
        });
        setIsFinished(true)
    };


    return (
        <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="I love snacks"
            autoHideDuration={1200}
            anchorOrigin= {{vertical : 'bottom' , horizontal: 'center'}}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

CustomSnackBar.propTypes = {
    message: propTypes.string,
    severity: propTypes.string || null,
    setIsFinished : propTypes.func
}

CustomSnackBar.defaultProps = {
    message: "",
    severity: "success",
}