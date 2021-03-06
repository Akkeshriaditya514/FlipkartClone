import { Badge, Box, Button, makeStyles, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    login : {
        background : '#FFFFFF',
        color : '#2874f0',
        textTransform : 'none',
        fontWeight : 600,
        borderRadius : 2,
        padding : '5px 40px',
        boxShadow : 'none'
    },
    wrapper : {
        margin : '0 7% 0 auto',
        display : 'flex',
        '&>*' :{
            marginRight : 50,
            alignItems:'center',
            textDecoration : 'none',
            color : '#fff'
        }
    },
        container : {
            display : 'flex'
        }
})

const HeaderButtons = () => {
    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
           <Link><Button variant="contained" className={classes.login} >Login</Button></Link>
           <Link><Typography style={{marginTop : 5}}>More</Typography></Link>
        <Link to='/cart' className={classes.container}>
            <Badge badgeContent={2} color="secondary" >
                <ShoppingCart />
            </Badge>
        <Typography style={{marginLeft : 10}}>Cart</Typography>
        </Link>
        </Box>
    )
}

export default HeaderButtons
