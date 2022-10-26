import React from "react";
import { Typography, Box } from "@mui/material";
import Customer from "./Customer";

const CustomersGoldList = (props) => {
  return (
    <>
      <header position="fixed" width="100%" left="0" top="0" height="80px">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          color="#1C143A"
          fontFamily="cursive"
        >
          Gold Customers
        </Typography>
      </header>

      <Box
        component="span"
        sx={{
          display: "grid",
          mx: "2px",
          columnGap: 2,
          rowGap: 4,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        margin="0"
        padding="0"
        padding-top="80px"
        line-height="1.5em"
      >
        {props.items.map((item) => {
          return (
            <>
              <Customer
                _id={item._id}
                username={item.username}
                name={item.name}
                address={item.address}
                birthdate={item.birthdate}
                email={item.email}
                accounts={item.birthdate}
              />
            </>
          );
        })}
      </Box>
    </>
  );
};

export default CustomersGoldList;
