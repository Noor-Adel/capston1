import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { AiTwotoneCalendar } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const Blog = () => {
  return (
    <>
      <section className='courses'>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
            A Comprehensive Educational and Entertaining Experience
<br />
            </h1>
            <span className='text-sm mt-8block'>Our platform offers a blend of in-person and online courses, providing a flexible learning experience. In-person classes foster direct interaction, while online courses offer convenience and engaging content.

Give your child the best of both worlds. Join us today</span>
          </div>
        </div>
      </section>
    </>
  )
}