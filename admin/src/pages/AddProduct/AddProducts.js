import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating ,setRating] = useState("");
  const navigate = useNavigate()


  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("rating", rating)
      formData.append("price", price);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:8000/api/products/upload",
        formData
      );
      alert("product added successfully");
      setTimeout(() => {
        navigate("/products")
      }, 1000);
    } catch (error) {
      alert("error");
      // Handle errors
      console.error("Error:", error);
    }
  };


  return (
    <section>
      <div className="flex items-center justify-center px-4 sm:px-6 sm:py-16 lg:px-8 w-[86vw]">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Admin Dashboard
          </h2>
          <form
            method="POST"
            className="mt-8"
            onSubmit={handleAddProduct}
            encType="multipart/form-data"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="foodName"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Product Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Product Name"
                    id="ProductName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <p className="mt-1 text-xs text-gray-500">
                    *This field is required
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Category{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  ></input>
                  <p className="mt-1 text-xs text-gray-500">
                    *This field is required
                  </p>
                </div>
              </div>
              {/* <div>
                <label
                  htmlFor="foodType"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Food Tags{" "}
                </label>
                <div className="mt-2">
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="veg"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("veg")}
                      className="mr-2"
                    />
                    veg
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="non-veg"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("non-veg")}
                      className="mr-2"
                    />
                    non-veg
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="drinks"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("drinks")}
                      className="mr-2"
                    />
                    drinks
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="popular"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("popular")}
                      className="mr-2"
                    />
                    popular
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="sales"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("sales")}
                      className="mr-2"
                    />
                    sales
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="top"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("top")}
                      className="mr-2"
                    />
                    top
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value="new"
                      onChange={handleCheckboxChange}
                      checked={selectedCheckboxes.includes("new")}
                      className="mr-2"
                    />
                    new
                  </label>
                </div>
              </div> */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Description{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                  <p className="mt-1 text-xs text-gray-500">
                    *This field is required
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="price"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Price{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                  <p className="mt-1 text-xs text-gray-500">
                    *This field is required
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="price"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Ratings{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="rating"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  ></input>
                  <p className="mt-1 text-xs text-gray-500">
                    *This field is required
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="image"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Image{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    accept="image/*"
                    id="image"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    // onChange={convertToBase64}
                  ></input>
                  <p className="mt-1 text-xs text-gray-500">
                    *This field is required
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={handleAddProduct}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Add new product <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddProducts;
