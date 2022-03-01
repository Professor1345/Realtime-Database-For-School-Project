import React from 'react'

const ProfileCard = ({name,mat, school, dept, img}) => {
  return (
  <div className="p-4 rounded-lg sm:shadow-lg w-full ">
    <div className="flex flex-col justify-center items-center w-full  mx-auto  bg-white space-y-2 p-2 ">
      <div className="flex items-center justify-center">

    <img src={img} className="rounded-full h-16 w-16" />
      </div>
      <ul className="list-none flex flex-col space-y-2 align-center justify-center ">
        <li className="mx-auto">Name: {name}</li>
        <li className="mx-auto">Mat No: {mat}</li>
        <li className="mx-auto">Dept: {dept}</li>
        <li className="mx-auto">School: {school}</li>
      </ul>

  </div>
  </div>
  )
}

export default ProfileCard