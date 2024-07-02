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

export default function PaymentManagement() {
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
            Payment Management
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
        <Button
          onClick={handleAddProduct}
          className="bg-brandPrimary text-white hover:bg-neutralDGray"
        >
          Make Payment
        </Button>
      </div>

      <div className="overflow-x-auto pt-10">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Bill No</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Available Quantity</Table.HeadCell>
            <Table.HeadCell>Unit price</Table.HeadCell>
            <Table.HeadCell>Total Price</Table.HeadCell>
            <Table.HeadCell>Paid Amount</Table.HeadCell>
            <Table.HeadCell>Balance Amount</Table.HeadCell>
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
                brand: "Janet",
                category: "Makeup",
                unitsize: "50",
                price: "2999.00",
                description: "1000.00",
                description: "1000.00",
              },
              {
                id: 2,
                code: "M00002",
                name: "BB cream",
                brand: "Janet",
                category: "Makeup",
                unitsize: "50",
                price: "2999.00",
                description: "1000.00",
              },
              {
                id: 3,
                code: "M00003",
                name: "BB cream",
                brand: "Janet",
                category: "Makeup",
                unitsize: "50",
                price: "2999.00",
                description: "1000.00",
              },
              {
                id: 4,
                code: "M00004",
                name: "BB cream",
                brand: "Janet",
                category: "Makeup",
                unitsize: "50",
                price: "2999.00",
                description: "1000.00",
              },
              {
                id: 5,
                code: "M00005",
                name: "BB cream",
                brand: "Janet",
                category: "Makeup",
                unitsize: "50",
                price: "2999.00",
                description: "1000.00",
              },
              {
                id: 6,
                code: "M00006",
                name: "BB cream",
                brand: "Janet",
                category: "Makeup",
                unitsize: "50",
                price: "2999.00",
                description: "1000.00",
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
                <Table.Cell>{product.brand}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.unitsize}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </a>
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

      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>
          {currentProduct ? "Edit Product" : "Add Product"}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <div className="flex">
                  <Label
                    htmlFor="productCode"
                    value="Product Code"
                    className="mb-2 block flex"
                  />
                  <span className="text-red-500 font-bold ml-1">* </span>
                </div>
                <TextInput
                  id="productCode"
                  name="productCode"
                  type="text"
                  placeholder="Enter product code"
                  required
                  shadow
                  value={formik.values.productCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.productCode && formik.errors.productCode ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.productCode}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="flex">
                  <Label
                    htmlFor="productName"
                    value="Product Name"
                    className="mb-2 block"
                  />
                  <span className="text-red-500 font-bold ml-1">* </span>
                </div>

                <TextInput
                  id="productName"
                  name="productName"
                  type="text"
                  placeholder="Enter product name"
                  required
                  shadow
                  value={formik.values.productName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.productName && formik.errors.productName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.productName}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="flex">
                  <Label
                    htmlFor="productBrand"
                    value="Brand Name"
                    className="mb-2 block"
                  />
                  <span className="text-red-500 font-bold ml-1">* </span>
                </div>
                <TextInput
                  id="productBrand"
                  name="productBrand"
                  type="text"
                  placeholder="Enter brand name"
                  required
                  shadow
                  value={formik.values.productBrand}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.productBrand && formik.errors.productBrand ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.productBrand}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="flex">
                  <Label
                    htmlFor="category"
                    value="Category"
                    className="mb-2 block"
                  />
                  <span className="text-red-500 font-bold ml-1">* </span>
                </div>
                <TextInput
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Enter category"
                  required
                  shadow
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.category && formik.errors.category ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.category}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="flex">
                  <Label
                    htmlFor="unitsize"
                    value="Unit Size"
                    className="mb-2 block"
                  />
                  <span className="text-red-500 font-bold ml-1">* </span>
                </div>
                <TextInput
                  id="unitsize"
                  name="unitsize"
                  type="text"
                  placeholder="Enter unit size"
                  required
                  shadow
                  value={formik.values.unitsize}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.unitsize && formik.errors.unitsize ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.unitsize}
                  </div>
                ) : null}
              </div>
              <div>
                <div className="flex">
                  <Label htmlFor="price" value="Price" className="mb-2 block" />
                  <span className="text-red-500 font-bold ml-1">* </span>
                </div>
                <TextInput
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Enter price"
                  required
                  shadow
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.price}
                  </div>
                ) : null}
              </div>
              <div>
                <Label
                  htmlFor="description"
                  value="Description"
                  className="mb-2 block"
                />
                <TextInput
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Enter description"
                  required
                  shadow
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="col-span-2 flex justify-end space-x-2">
                <Button className="bg-brandPrimary" type="submit">
                  {currentProduct ? "Save Changes" : "Add Product"}
                </Button>
                <Button color="gray" onClick={closeModal}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
