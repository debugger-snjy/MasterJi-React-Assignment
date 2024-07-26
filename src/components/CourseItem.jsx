import { GripVertical } from 'lucide-react'
import React from 'react'

function CourseItem({ courseData }) {
    return (
        <div className="flex flex-row gap-2 items-center justify-between mx-auto w-9/12">
            <div className="text-black font-bold text-xl flex flex-row items-center gap-2">
                <GripVertical className='inline mr-2' />
                <img src={courseData.image} className='h-[75px] w-[133px]' /> {courseData.title}
            </div>
            <div className="text-black font-bold text-xl">{courseData.price === 0 ? "Free" : `Rs ${courseData.price}`}</div>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{courseData.courseType}</span>
        </div>
    )
}

export default CourseItem