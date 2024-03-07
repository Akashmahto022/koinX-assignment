import React from 'react'
import Section from '../section/Section'
import { employe } from '../data'
import Person from './Person'

const Team = () => {
  return (
    <div className='mt-6 w-[850px] max-sm:w-[340px]'>
      <Section heading={"Team"}>
          <div className="py-4">
            <p className="font-sans	font-semibold text-gray-700 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ex, voluptatem sit doloremque odio odit officia debitis ullam
              provident commodi inventore quidem voluptas illum
              quas explicabo.
            </p>
            <div >
                {
                    employe.map((item)=>(
                        <div key={item.id} className="bg-sky-100 rounded-md">
                        <Person personImage={item.image} personName={item.name} personDesignation={item.designation} description={item.description}/>
                        </div>
                    ))
                }
            </div>
          </div>
        </Section>
    </div>
  )
}

export default Team
