import React from 'react'

function Total(props) {
    console.log(props)
  return (
    <>
        <div className=" bg-#1f2937-100 pt-20 text-white">
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="mt-6 h-full rounded-lg border text-white bg-gray-700 p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">$ {props.total}</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </>
  )
}

export default Total