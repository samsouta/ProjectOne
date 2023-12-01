import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressForm } from '../../context/checkOutSlice';
import { red } from '@mui/material/colors';
import { stateContext } from '../../context/stateContext';

export default function AddressForm() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [address1, setAddress1] = React.useState('')
  const [address2, setAddress2] = React.useState('')
  const [city, setCity] = React.useState('')
  const [region, setRegion] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const {errReq, setErrReq} = React.useContext(stateContext)
  const dispatch = useDispatch();
  const checkboxHandle = ()=>{
    setCheckbox(!checkbox)
    if(checkbox){
      setErrReq(false)
      dispatch(getAddressForm({addressDone: 0}))
    }else {
      if(firstName === '' && address1 === '' && address2 === '' && city === '' && region === '' && zipCode === '' && country === ''   ){
        setErrReq(true)
      }{
        dispatch(getAddressForm({addressDone: 1,addressData:{firstName,lastName,address1,address2,city,region,zipCode,country}}))
      }
    }
  }
  return (
    <div className='' >
      <h1 className=' text-q font-medium text-2xl'>
        Shipping address
      </h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              error={errReq}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              label="First name"
              className=' text-q font-thin'
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
              error={errReq}
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={errReq}
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              error={errReq}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              error={errReq}
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              error={errReq}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              error={errReq}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
            error={errReq}
              control={<Checkbox color="secondary" name="saveAddress" onChange={()=> checkboxHandle()} checked={checkbox} value={checkbox} />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
    </div>
  );
}
