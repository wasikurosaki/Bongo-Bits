import React from 'react';

const contact = () => {
    return (
                <>

                    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-[#422124] via-[#ecceb0] to-[#bd8e5f] rounded-full my-5 py-10 mx-5'>
                        <div className='italic font-serif text-5xl text-center  text-black pb-5' id='contact'>
                            Contact Us
                        </div>

                    <div className='grid grid-cols-2 w-[1000px]'>

                            <div className='px-5'>
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium text-[#000000]"
                                    >
                                    Full Name
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                            </div>
                            <div className='px-5'>
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium text-[#000000]"
                                    >
                                    Contact Number
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Ex: 017********"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                            </div>
                            <div className='px-5'>
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium text-[#000000]"
                                    >
                                    Email Address
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="abc@gmail.com"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                            </div>
                            <div className='px-5'>
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium text-[#000000]"
                                    >
                                    Address
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Road 8, Gulshan 1, Dhaka"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                            </div>
                             
                    </div>

                    </div>
                    

                </>
    );
};

export default contact;