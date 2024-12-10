
import { RecipesDetails } from '@/components/models/RecipeDetails'
import { RecipesServices } from '@/components/services/RecipesServices';
import React from 'react'

const RecipeDetails: React.FC<RecipesDetails> = async ({ params }) => {
  const { id } = await params;

  const { data }: { data: RecipesDetails } = await RecipesServices.getRecipesDetails({ id });

  return (
    <div>
      <div className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 p-14 shadow-lg mx-auto ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-snug tracking-wide font-serif capitalize">
          {data.title.replace(/\b\w/g, (char) => char.toUpperCase())}
        </h1>
      </div>





      <header className='container mx-auto px-4 mt-16'>
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-2 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{data.title}</h2>

              {/* <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">{data.summary}</p> */}
              <div className='mt-4'>
                {
                  data?.diets.map((items, idx) => <li key={idx}>{items}</li>)
                }
              </div>
              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div
              className="w-full h-full bg-cover"
              style={{
                backgroundImage:
                  `url('${data.image}')`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>

        </div>
      </header>
    </div >
  )
}

export default RecipeDetails;
