// Importing React
import React, { useEffect, useRef, useState } from 'react'

import ChaiAurCodeText from '../components/ChaiAurCodeText'
import ChaiAurCodeIcon from '../components/ChaiAurCodeIcon'
import batchesData from "../data/batches_data.json"
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Creating Component for Batches Page having the Data Table
function BatchesDataTable() {

    const [searchedBatches, setSearchedBatches] = useState(batchesData);
    const [rowSize, setRowSize] = useState(10)
    const [page, setPage] = useState(1)

    const searchInputRef = useRef(null);

    const filterBatches = (searchedTitle) => {
        if (searchedTitle !== "") {
            console.log(searchedTitle)
            const filteredRecords = searchedBatches.filter((batch) => batch.title.includes(searchedTitle) > 0)
            console.log(filteredRecords)
            if (filteredRecords.length > 0) {
                setSearchedBatches(filteredRecords)
            }
            else {
                alert("No records Found for your Search")
                setSearchedBatches(batchesData)
            }
        }
        else {
            setSearchedBatches(batchesData)
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.altKey) && event.key === 'k') {
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setSearchedBatches, setRowSize, setPage]);

    return (
        <main className='lg:max-h-full h-screen bg-[#E2BBE9] p-10'>

            {/* Chai Aur Code Text Component */}
            <ChaiAurCodeText extraClasses='text-[#444B79]' />

            {/* Main Card for the Form */}
            <div className='batches-card h-50 bg-white flex flex-col justify-center w-11/12 p-10 my-20 rounded-2xl mx-auto'>
                <div className="text-md !text-left font-bold text-3xl">Batches</div>
                <div className="text-md !text-left font-normal mt-3 text-[#BFBFBF] text-xl">Create learner's batch and share information at the same time.</div>

                {/* Search Input */}
                <div className="relative my-5 rounded-md shadow-sm">
                    <input type="text" ref={searchInputRef} id="search_course" onChange={(e) => e.target.value === "" ? setSearchedBatches(batchesData) : ''} className="bg-white border border-[#BEBEBE] text-[#C8C7C7] focus:text-black text-sm rounded-lg w-3/12 p-2.5 inline" placeholder="Search by Title (alt+k or cmd+k)" required />
                    <button className="bg-[#6C6BAF] inline btn btn-blue text-white p-2 px-7 mx-3 rounded-md" onClick={() => filterBatches(document.getElementById('search_course').value)}>Search</button>
                </div>

                <div className="batches-form my-10 mt-5">
                    <table className="border border-[#8d8c8c] table-auto w-full ">
                        <thead className=''>
                            <tr className='text-[#4B4747]  font-bold bg-[#F2F2F2] border-b border-black'>
                                <th className='text-left !py-4 !px-2 border border-black'>Title</th>
                                <th className='text-left !py-4 !px-2 border border-black'>Start Date</th>
                                <th className='text-left !py-4 !px-2 border border-black'>End Date</th>
                                <th className='text-left !py-4 !px-2 border border-black'>Price</th>
                                <th className='text-left !py-4 !px-2 border border-black'>Validity/Expiry</th>
                                <th className='text-left !py-4 !px-2 border border-black '>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log("YES: ", searchedBatches.slice(((page * rowSize) - rowSize), (page * rowSize + 1)))}
                            {
                                searchedBatches && searchedBatches.slice(((page * rowSize) - rowSize), ((page * rowSize) + 1 > batchesData.length ? batchesData.length : (page * rowSize) + 1)).map((batchRecord) => (
                                    <tr className='border-[#8d8c8c]' key={batchRecord.id}>
                                        <td className='text-left p-4 border-r border-[#8d8c8c]'>
                                            <div className="flex flex-row gap-2 items-center">
                                                <img src={batchRecord.image} alt="Image" className='h-[60px] w-[106px]' />
                                                {batchRecord.title}
                                            </div>
                                        </td>
                                        <td className='text-left p-4 border-r border-[#8d8c8c]'>{batchRecord.startDate}</td>
                                        <td className='text-left p-4 border-r border-[#8d8c8c]'>{batchRecord.endDate}</td>
                                        <td className='text-left p-4 border-r border-[#8d8c8c]'>₹ {batchRecord.price}</td>
                                        <td className='text-left p-4 border-r border-[#8d8c8c]'>{batchRecord.validityInDays} days</td>
                                        <td className='text-left p-4'>
                                            {batchRecord.isPublished ?
                                                <span className="inline-flex items-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Published</span>
                                                :
                                                <span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Unpublished</span>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className='flex flex-row items-center justify-end'>
                    <div className='w-2/12'>
                        Rows Per Page
                        <select name="rowSelect" id="rowSelect" onChange={(e) => setRowSize(e.target.value)} className='mx-2 bg-gray-50 border border-[#BEBEBE] text-black text-lg rounded-sm focus:ring-blue-500 focus:border-blue-500 inline w-5/12 p-2.5'>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className='w-10'>
                        <ChevronLeft className={`mx-2 block ${page === 1 ? 'text-gray-500' : ''}`} onClick={() => page !== 1 ? setPage(page - 1) : setPage(1)} />
                    </div>
                    <div className='w-10'>
                        <ChevronRight className={`mx-2 block ${page === (batchesData / rowSize) ? ' text-gray-500' : ''}`} onClick={() => page !== (batchesData / rowSize) ? setPage(page + 1) : ''} />
                    </div>

                </div>

                <ChaiAurCodeIcon className='select-none'/>
            </div>
        </main>
    )
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exporting BatchesDataTable Component
export default BatchesDataTable