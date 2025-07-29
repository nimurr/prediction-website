'use client'
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Page = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted review:', { rating, reviewText });
        // Close modal and reset
        setModalOpen(false);
        setRating(0);
        setReviewText('');
    };

    return (
        <div className="contiainer mx-auto pb-10 px-4">
            {/* Header */}
            <div className="mb-6">
                <h2 className=" font-semibold  text-gray-500 my-10"><span className='text-[#4c1d95]'>Home</span> &gt; Reviews</h2>
                <div className="flex items-center gap-3">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                        alt="casino"
                        className="w-12 h-12"
                    />
                    <div>
                        <h1 className="text-xl font-bold">Yeet Casino</h1>
                        <p className="text-sm text-gray-500">100% up to $500 + 50 Spins</p>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, expedita vitae voluptas, odio ut itaque fugiat fugit debitis ipsum non distinctio ullam sunt explicabo, quidem esse dolorum commodi qui dignissimos! Nesciunt fugiat mollitia non, provident autem ipsum dolor eligendi animi odit nisi exercitationem ex delectus deleniti dicta nemo earum accusamus veritatis soluta, est corrupti voluptas cumque dolore repellat a. Provident expedita eum eius praesentium veritatis illo neque, est reiciendis fugiat dignissimos ipsam vero ad itaque repellendus et. Ducimus eius explicabo rem fugit, vero id tenetur fugiat dolore.</p>
                <br />
                <p> Optio, aliquam cum molestias eveniet asperiores nam sunt odit nostrum similique, quo ratione molestiae officia nulla qui, incidunt eius soluta? Repellat sapiente ratione iusto et, molestias maiores id facilis sunt temporibus placeat aliquid commodi. Quae nesciunt, quod facere enim soluta ex ut vitae aut officia excepturi. Tempore laborum, possimus quibusdam quasi labore dolor, minima, dignissimos omnis asperiores ullam velit voluptatem similique mollitia veritatis harum animi quis exercitationem necessitatibus iste. Nostrum cum corporis quia quis provident, repudiandae voluptate iste ab explicabo optio, est quod ad! Beatae deleniti eum expedita ea repellat! Explicabo, laudantium asperiores. Minus cupiditate at incidunt consequuntur maxime vitae tenetur possimus esse labore aperiam? Nesciunt facilis nostrum sunt expedita, ullam sapiente consequatur.</p>
            </div>

            {/* Review Summary */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-lg font-medium">4.5</span>
                    <span className="text-gray-600">(149 Reviews)</span>
                </div>
                <button
                    onClick={toggleModal}
                    className="bg-gradient-to-tl cursor-pointer from-[#4c1d95] to-[#a878f1] text-white px-4 py-3 rounded-full hover:bg-purple-700"
                >
                    Write a review
                </button>
            </div>

            {/* Review List */}
            <div className="space-y-4">
                {/* Review Card */}
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded">
                        <div>
                            <img
                                className="w-8 rounded-full mb-2"
                                src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                                alt="user"
                            />
                        </div>
                        <div className="flex justify-between mb-2">
                            <div className="font-semibold">Grace Carey</div>
                            <div className="text-sm text-gray-400">24 January, 2023</div>
                        </div>
                        <div className="flex items-center mb-1">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <FaStar key={idx} className="text-yellow-400 mr-1" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-700">
                            I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier...
                        </p>
                    </div>
                ))}


                {/* More review cards here... */}
            </div>

            <div className=" mt-6">
                <button className="bg-gradient-to-tl cursor-pointer from-[#4c1d95] to-[#a878f1] text-white px-8 py-3 rounded-full hover:bg-purple-700">
                    View More
                </button>
            </div>

            {/* Review Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
                        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Star Selection */}
                            <div className="flex mb-4">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <FaStar
                                        key={idx}
                                        className={`text-2xl cursor-pointer transition ${(hoverRating || rating) > idx
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                        onMouseEnter={() => setHoverRating(idx + 1)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(idx + 1)}
                                    />
                                ))}
                            </div>

                            {/* Review Textarea */}
                            <textarea
                                rows="5"
                                placeholder="Enter your review..."
                                className="w-full border rounded p-2 mb-4"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                required
                            />

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-4 cursor-pointer py-2 border rounded text-gray-700 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 cursor-pointer bg-purple-600 text-white rounded hover:bg-purple-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
