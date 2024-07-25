// Importing React
import React from 'react'

import ChaiAurCodeText from '../components/ChaiAurCodeText'
import ChaiAurCodeIcon from '../components/ChaiAurCodeIcon'
import batchesData from "../data/batches_data.json"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Creating Component for Batches Page having the Data Table
function BatchesDataTable() {
    return (
        <main className='h-screen bg-[#E2BBE9]'>

            {/* Chai Aur Code Text Component */}
            <ChaiAurCodeText extraClasses='text-[#444B79]' />

            {/* Main Card for the Form */}
            <div className='batches-card h-50 bg-white flex flex-col justify-center w-11/12 p-10 my-20 rounded-2xl mx-auto'>
                <div className="text-md !text-left font-bold text-3xl">Batches</div>
                <div className="text-md !text-left font-normal mt-3 text-[#BFBFBF] text-xl">Create learner's batch and share information at the same time.</div>

                <div className="batches-form my-10 !rounded-2xl">
                    {/* <table className="border border-[#F2F2F2] table-auto w-full rounded-2xl divide-x">
                        <thead>
                            <tr className='text-[#4B4747] font-bold  bg-[#F2F2F2] '>
                                <th className='text-left !py-4 !px-2 !rounded-tl-lg'>Title</th>
                                <th className='text-left !py-4 !px-2'>Start Date</th>
                                <th className='text-left !py-4 !px-2'>End Date</th>
                                <th className='text-left !py-4 !px-2'>Price</th>
                                <th className='text-left !py-4 !px-2'>Validity/Expiry</th>
                                <th className='text-left !py-4 !px-2 !rounded-tr-lg'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                batchesData && batchesData.map((batchRecord) => (
                                    <tr className='p-2 w-full grid grid-cols-6 divide-x'>
                                        <td className='text-left py-2 px-1'>
                                            <div className="flex flex-row gap-2 items-center">
                                                <img src={batchRecord.image} alt="Image" className='h-[60px] w-[106px]' />
                                                {batchRecord.title}
                                            </div>
                                        </td>
                                        <td className='block text-left py-2 px-1'>{batchRecord.startDate}</td>
                                        <td className='block text-left py-2 px-1'>{batchRecord.endDate}</td>
                                        <td className='block text-left py-2 px-1'>{batchRecord.price}</td>
                                        <td className='block text-left py-2 px-1'>{batchRecord.validityInDays}</td>
                                        <td className='block text-left py-2 px-1'>{batchRecord.isPublished}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> */}

                    <table class="min-w-full bg-white border-gray-200">
                        <thead className=''>
                            <tr class="w-full bg-gray-100 border-2 border-black border-b text-[#4B4747] rounded-t-2xl">
                                <th class="py-2 px-4 text-left rounded-tl-lg">Title</th>
                                <th class="py-2 px-4 text-left border-2 border-[black]">Start Date</th>
                                <th class="py-2 px-4 text-left border-2 border-[black]">End Date</th>
                                <th class="py-2 px-4 text-left border-2 border-[black]">Price</th>
                                <th class="py-2 px-4 text-left border-2 border-[black]">Validity/Expiry</th>
                                <th class="py-2 px-4 text-left !rounded-tr-2xl">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="">
                                <td class="py-2 px-4 border-r border-gray-200 flex items-center">
                                    <img src="/batches-thumbnails/sql_basics_course.png" alt="SQL Course" class="w-12 h-12 mr-4" />
                                    <span>SQL Basics To Advanced Mastery Course</span>
                                </td>
                                <td class="py-2 px-4 border-r border-gray-200">20 Jul 2024</td>
                                <td class="py-2 px-4 border-r border-gray-200">28 Jul 2024</td>
                                <td class="py-2 px-4 border-r border-gray-200">₹ 0</td>
                                <td class="py-2 px-4 border-r border-gray-200">180 days</td>
                                <td class="py-2 px-4 border-r border-gray-200">
                                    <span class="bg-green-200 text-green-800 py-1 px-3 rounded-full text-sm">Published</span>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="py-2 px-4 border-r border-gray-200 flex items-center">
                                    <img src="/batches-thumbnails/30_days_js.png" alt="JavaScript Challenge" class="w-12 h-12 mr-4" />
                                    <span>30 Days Of Javascript Challenge</span>
                                </td>
                                <td class="py-2 px-4 border-r border-gray-200">13 Jul 2024</td>
                                <td class="py-2 px-4 border-r border-gray-200">12 Aug 2024</td>
                                <td class="py-2 px-4 border-r border-gray-200">₹ 0</td>
                                <td class="py-2 px-4 border-r border-gray-200">33 days</td>
                                <td class="py-2 px-4 border-r border-gray-200">
                                    <span class="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">Unpublished</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-r border-gray-200 flex items-center">
                                    <img src="/batches-thumbnails/interview_preparations_js_2.png" alt="Interview Prep" class="w-12 h-12 mr-4" />
                                    <span>Interview Preparation With Javascript 2.0</span>
                                </td>
                                <td class="py-2 px-4 border-r border-gray-200">02 Aug 2024</td>
                                <td class="py-2 px-4 border-r border-gray-200">15 Sep 2024</td>
                                <td class="py-2 px-4 border-r border-gray-200">₹ 10,000</td>
                                <td class="py-2 px-4 border-r border-gray-200">365 days</td>
                                <td class="py-2 px-4 border-r border-gray-200">
                                    <span class="bg-green-200 text-green-800 py-1 px-3 rounded-full text-sm">Published</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <ChaiAurCodeIcon />
            </div>
        </main>
    )
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exporting BatchesDataTable Component
export default BatchesDataTable