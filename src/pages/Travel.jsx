import React from 'react';

const Travel = () => {
    return (
        <div className='banner flex flex-col justify-center items-center text-center  bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 text-blue-500 dark-toggle py-5 md:py-10 p-2 md:p-5'>
            <section className="py-16 ">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                        Why Travel With <span className="text-sky-500">Chill & Travel?</span>
                    </h2>
                    <p className=" max-w-2xl mx-auto mb-12">
                        We’re here to make your journeys stress-free, memorable,
                        and full of experiences worth sharing.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition back dark-toggle">
                            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Expert Guides" className="w-14 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                            <p className="">
                                Travel with experienced guides who know every hidden gem.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition back dark-toggle">
                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="Custom Packages" className="w-14 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold  mb-2">Custom Packages</h3>
                            <p className="">
                                Flexible itineraries designed around your interests and pace.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition back dark-toggle">
                            <img src="https://cdn-icons-png.flaticon.com/512/1085/1085850.png" alt="Trusted Support" className="w-14 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold  mb-2">Trusted Support</h3>
                            <p className="">
                                24/7 assistance to make sure you enjoy worry-free adventures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Travel; <section className="py-16 bg-gradient-to-b from-white to-sky-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Travel With <span className="text-sky-500">Chill & Travel?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We’re here to make your journeys stress-free, memorable,
            and full of experiences worth sharing.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Expert Guides" className="w-14 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guides</h3>
                <p className="text-gray-600">
                    Travel with experienced guides who know every hidden gem.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="Custom Packages" className="w-14 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Packages</h3>
                <p className="text-gray-600">
                    Flexible itineraries designed around your interests and pace.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                <img src="https://cdn-icons-png.flaticon.com/512/1085/1085850.png" alt="Trusted Support" className="w-14 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Support</h3>
                <p className="text-gray-600">
                    24/7 assistance to make sure you enjoy worry-free adventures.
                </p>
            </div>
        </div>
    </div>
</section>
