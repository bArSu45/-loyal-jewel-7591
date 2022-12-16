import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  Select,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

import styles from "./Products.module.css";

const InitialData = {
  name: "",
  image: "",
  brand: "",
  expire: "",
  price:"",
  discountPrice: "",
  inStock: "",
  qty: "",
};

export default function Products() {
  const [ItemData, setItemData] = useState(InitialData);

  const handleSubmit = (e) => {
    
  };
  const handleChange = (e) => {const { name, value } = e.target;
    setItemData({ ...ItemData, [name]:value})
  };

  return (
    <div className={styles.ProductContainer}>
      <Flex justifyContent="space-between" gap="20px">
        <Box border="1px solid black" p="10px" textAlign="center" color="white">
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              value={ItemData.name}
              type="Text"
              placeholder="Enter Product Details"
              mt="15px"
              color="white"
              onChange={handleChange}
            />
            <Input
              name="image"
              mt="15px"
              type="file"
              placeholder="Choose Image"
              onChange={handleChange}
            />
            <Input
              name="brand"
              value={ItemData.brand}
              type="text"
              placeholder="Enter Product Brand"
              mt="15px"
              onChange={handleChange}
            />

            <Input
              name="qty"
              value={ItemData.qty}
              type="number"
              placeholder="Quantity"
              mt="5px"
              onChange={handleChange}
            />
            <Select
              mt="15px"
              value={ItemData.inStock}
              onChange={handleChange}
              color="black"
            >
              <option>Select Stock</option>
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </Select>
            <Input
              name="price"
              type="Number"
              placeholder="Enter Product Price"
              mt="15px"
              value={ItemData.price}
              onChange={handleChange}
            />
            <Button mt="15px" colorScheme="pink">
              Submit
            </Button>
          </form>
        </Box>
        <Box border="1px solid black" p="10px" textAlign="center" color="white">
          <Image
            src={
              ItemData.image
                ? ItemData.image
                : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18519a5aeeb%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18519a5aeeb%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            }
          />
          <Text mt="15px">{ItemData.name ? ItemData.name : "Title"}</Text>
          <Text mt="15px">Brand: {ItemData.brand ? ItemData.brand : ""}</Text>
          <Text mt="15px">Qty: {ItemData.qty ? ItemData.qty : ""}</Text>
          <Text mt="15px">Price: {ItemData.price ? ItemData.price : 0}</Text>
          <Text mt="15px">
            Stock: {ItemData.inStock ? "Available" : " Out of Stock"}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
