import React, { useState } from "react";
import {
  Table,
  Button,
  TextInput,
  Label,
  Modal,
  Pagination,
} from "flowbite-react";
import { HiOutlineHome } from "react-icons/hi"; // Importing Home icon
import { useFormik } from "formik";
import * as Yup from "yup";

export default function InventoryManagement() {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);

  const onPageChange = (page) => setCurrentPage(page);

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setOpenModal(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setOpenModal(true);
  };

  const closeModal = () => {
    setCurrentProduct(null);
    setOpenModal(false);
  };

  const formik = useFormik({
    initialValues: {
      productCode: currentProduct ? currentProduct.code : "",
      productName: currentProduct ? currentProduct.name : "",
      productBrand: currentProduct ? currentProduct.brand : "",
      category: currentProduct ? currentProduct.category : "",
      unitsize: currentProduct ? currentProduct.unitsize : "",
      price: currentProduct ? currentProduct.price : "",
      description: currentProduct ? currentProduct.description : "",
    },
    validationSchema: Yup.object({
      productCode: Yup.string().required("Product code is required"),
      productName: Yup.string().required("Product name is required"),
      productBrand: Yup.string().required("Brand name is required"),
      category: Yup.string().required("Category is required"),
      unitsize: Yup.string().required("Unit size is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      closeModal();
    },
    enableReinitialize: true,
  });

  return (
    <div className="max-w-screen-xl h-screen mx-auto px-4 lg:py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <div className="mb-5 lg:mb-0 lg:mr-6">
          <h1 className="text-3xl font-bold text-logo mb-2">
            Inventory Management
          </h1>
          {/* <p className="text-lg text-gray-600">
            Manage your products efficiently and effortlessly
          </p> */}
        </div>
        <TextInput
          id="filter"
          type="text"
          placeholder="Search"
          className="w-full ml-auto mr-2 lg:w-60"
        />
      </div>

      <div className="overflow-x-auto pt-10">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Product Code</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Available Quantity</Table.HeadCell>
            <Table.HeadCell>Total Quantity</Table.HeadCell>
            <Table.HeadCell>Removed Quantity</Table.HeadCell>
            <Table.HeadCell>Product Status</Table.HeadCell>

            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {[
              {
                id: 1,
                code: "M00001",
                name: "BB cream",
                availableqty: "5",
                totalqty: "15",
                removedqty: "10",
                pstatus: "Available",
              },
              {
                id: 2,
                code: "M00001",
                name: "BB cream",
                availableqty: "5",
                totalqty: "15",
                removedqty: "10",
                pstatus: "Available",
              },
              {
                id: 3,
                code: "M00001",
                name: "BB cream",
                availableqty: "5",
                totalqty: "15",
                removedqty: "10",
                pstatus: "Available",
              },
              {
                id: 4,
                code: "M00001",
                name: "BB cream",
                availableqty: "5",
                totalqty: "15",
                removedqty: "10",
                pstatus: "Available",
              },
              {
                id: 5,
                code: "M00001",
                name: "BB cream",
                availableqty: "5",
                totalqty: "15",
                removedqty: "10",
                pstatus: "Available",
              },
              {
                id: 6,
                code: "M00001",
                name: "BB cream",
                availableqty: "5",
                totalqty: "15",
                removedqty: "10",
                pstatus: "Available",
              },
            ].map((product) => (
              <Table.Row
                key={product.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.code}
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.availableqty}</Table.Cell>
                <Table.Cell>{product.totalqty}</Table.Cell>
                <Table.Cell>{product.removedqty}</Table.Cell>
                <Table.Cell>{product.pstatus}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium px-5 text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Delete
                  </a>
                  <a
                    href="#"
                    className="font-medium  text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Print
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className="flex justify-end pt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
