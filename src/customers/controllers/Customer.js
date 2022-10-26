import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Customer = (props) => {
  return (
    <Card sx={{ maxWidth: 500 }} key={props._id}>
      <CardHeader />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.username}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.address}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.birthdate}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.email}
        </Typography>
        <Typography variant="body2">{props.accounts}</Typography>
      </CardContent>
    </Card>
  );
};

export default Customer;
