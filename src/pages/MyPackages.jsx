import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import ScrollToTopButton from "./ScrollToTopButton";
import { motion } from "motion/react"
import Menu from "./Menu";
import './Modal.css'

const ManageMyPackages = () => {
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);



    useEffect(() => {
        if (!user?.email) return;
        fetch(`https://chill-and-travel-server.vercel.app/tourPackages?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setPackages(data))
            .catch((err) => console.error(err));
    }, [user]);


    // Handle delete
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You won’t be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirm.isConfirmed) {
            try {
                const res = await fetch(`https://chill-and-travel-server.vercel.app/tourPackages/${id}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    setPackages((prev) => prev.filter((pkg) => pkg._id !== id));
                    Swal.fire("Deleted!", "Your package has been deleted.", "success");
                } else {
                    Swal.fire("Error!", "Failed to delete package.", "error");
                }
            } catch (error) {
                console.error(error);
                Swal.fire("Error!", "Something went wrong.", "error");
            }
        }
    };

    // Handle update (basic placeholder — can open modal instead)
    // const handleUpdate = (id) => {

    //     setShowModal(true);
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle back">
            <ScrollToTopButton />
            <Menu />

            <div className="p-5 md:p-10">
                <h1 className="text-3xl font-bold mb-6 text-center">Manage My Packages</h1>

                {packages.length === 0 ? (
                    <p className="text-center text-gray-600">No packages found.</p>
                ) : (
                    <div className="overflow-x-auto rounded-lg">
                        <table className="table-xs md:table-md xl:table-lg w-full dark-toggle text-center tableContainer">
                            <thead className="tableHeader">
                                <tr>
                                    <th>Tour</th>
                                    <th>Image</th>
                                    <th>Duration</th>
                                    <th>Price</th>
                                    <th>Departure</th>
                                    <th>Destination</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.map((pkg) => (
                                    <tr key={pkg._id} className="tableRow">
                                        <td className="font-semibold">{pkg.tour_name}</td>
                                        <td className="">
                                            <img src={pkg.image} alt="Tour" className="w-16 h-16 object-cover rounded-lg inline-block" />
                                        </td>
                                        <td>{pkg.duration}</td>
                                        <td>${pkg.price}</td>
                                        <td>{pkg.departure_location}</td>
                                        <td>{pkg.destination}</td>
                                        <td className="flex gap-2 justify-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedPackage(pkg); // pkg = current row’s package
                                                    setShowModal(true);
                                                }}
                                                className="btn btn-sm rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white border-0"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(pkg._id)}
                                                className="btn btn-sm rounded-xl font-semibold bg-gradient-to-r from-red-500 to-pink-400 hover:from-red-600 hover:to-pink-500 text-white border-0"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 dark-toggle modaal overflow-y-auto">
                    <div
                        className="bg-gradient-to-br from-sky-50 via-blue-100 to-sky-200 dark-toggle banner rounded-xl shadow-2xl w-full max-w-lg p-6  mt-70 lg:mt-40 mb-5"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
                            ✏️ Update Package
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                const form = e.target;
                                const updatedPackage = {
                                    tour_name: form.tour_name.value,
                                    duration: form.duration.value,
                                    price: form.price.value,
                                    departure_location: form.departure_location.value,
                                    destination: form.destination.value,
                                    package_details: form.package_details.value,
                                    contact_no: form.contact_no.value,
                                    image: form.image.value,
                                };

                                fetch(`https://chill-and-travel-server.vercel.app/tourPackages/${selectedPackage._id}`, {
                                    method: "PATCH",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(updatedPackage),
                                })
                                    .then((res) => res.json())
                                    .then((data) => {
                                        if (data.modifiedCount > 0) {
                                            Swal.fire({
                                                position: "top-end",
                                                icon: "success",
                                                title: "Package updated successfully",
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            // refresh the list
                                            setPackages((prev) =>
                                                prev.map((pkg) =>
                                                    pkg._id === selectedPackage._id ? { ...pkg, ...updatedPackage } : pkg
                                                )
                                            );
                                            setShowModal(false);
                                        } else {
                                            Swal.fire({
                                                title: "No changes were made"
                                            });
                                        }
                                    })
                                    .catch((err) => console.error(err));
                            }}
                            className="space-y-4"
                        >
                            {/* Input fields */}
                            {/* Tour Name */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Tour Name</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPackage?.tour_name}
                                    name="tour_name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* IMage URL */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Image URL</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPackage?.image}
                                    name="image"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Duration</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPackage?.duration}
                                    name="duration"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Price ($)</label>
                                <input
                                    type="number"
                                    defaultValue={selectedPackage?.price}
                                    name="price"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Departure Location */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Departure Location</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPackage?.departure_location}
                                    name="departure_location"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Destination */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Destination</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPackage?.destination}
                                    name="destination"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Contact Number */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Contact No.</label>
                                <input
                                    type="text"
                                    defaultValue={selectedPackage?.contact_no}
                                    name="contact_no"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Package Details */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Package Details</label>
                                <textarea
                                    defaultValue={selectedPackage?.package_details}
                                    name="package_details"
                                    className="textarea textarea-bordered w-full"
                                    rows={3}
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-6 py-2 rounded-xl font-semibold bg-white text-red-500 border border-red-300 hover:bg-red-500 hover:text-white transition cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-md cursor-pointer"
                                >
                                    Save Changes
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }


        </div >
    );
};

export default ManageMyPackages;
