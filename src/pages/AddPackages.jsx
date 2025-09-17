import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import './AddPackages.css'
import Swal from "sweetalert2";

const AddPackage = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const packageData = {
            ...data,
            guide_name: user?.displayName,
            guide_email: user?.email,
            guide_photo: user?.photoURL,
            price: parseFloat(data.price),
            duration: parseInt(data.duration),
            bookingCount: 0
        };

        try {
            const res = await fetch(
                "https://chill-and-travel-server.vercel.app/tourPackages",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(packageData),
                }
            );

            if (res.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your tour package has been created",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 dark-toggle banner flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white dark-toggle back2 shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Add a New Tour Package
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Tour Name */}
                    <div>
                        <label className="block mb-1 font-medium">Tour Name</label>
                        <input
                            {...register("tour_name", { required: true })}
                            type="text"
                            placeholder="Enter tour name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input
                            {...register("image", { required: true })}
                            type="url"
                            placeholder="https://example.com/tour.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block mb-1 font-medium">Duration (days)</label>
                        <input
                            {...register("duration", { required: true })}
                            type="number"
                            min="1"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Departure Location */}
                    <div>
                        <label className="block mb-1 font-medium">Departure Location</label>
                        <input
                            {...register("departure_location", { required: true })}
                            type="text"
                            placeholder="e.g., Dhaka"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Destination */}
                    <div>
                        <label className="block mb-1 font-medium">Destination</label>
                        <input
                            {...register("destination", { required: true })}
                            type="text"
                            placeholder="e.g., Cox's Bazar"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block mb-1 font-medium">Price (BTD)</label>
                        <input
                            {...register("price", { required: true })}
                            type="number"
                            min="1"
                            placeholder="e.g., 10000"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Departure Date */}
                    <div>
                        <label className="block mb-1 font-medium">Departure Date</label>
                        <input
                            {...register("departure_date", { required: true })}
                            type="date"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Contact No */}
                    <div>
                        <label className="block mb-1 font-medium">Contact Number</label>
                        <input
                            {...register("contact_no", { required: true })}
                            type="tel"
                            placeholder="+8801XXXXXXXXX"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Package Details */}
                    <div>
                        <label className="block mb-1 font-medium">Package Details</label>
                        <textarea
                            {...register("package_details", { required: true })}
                            rows="4"
                            placeholder="Write package description..."
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;
