
import { Equipment, RecipesDetails } from '@/components/models/RecipeDetails'
import { RecipesServices } from '@/components/services/RecipesServices';
import React from 'react'

const RecipeDetails: React.FC<RecipesDetails> = async ({ params }) => {
  const { id } = await params;

  const { data }: { data: RecipesDetails } = await RecipesServices.getRecipesDetails({ id });


  const equipment: Equipment[] = [];

  if (data?.analyzedInstructions?.length > 0) {
    data.analyzedInstructions.forEach(instruction => {
      instruction?.steps?.forEach(step => {
        step?.equipment?.forEach(equip => {
          equipment.push({
            id: equip.id,
            name: equip.name,
            image: equip.image,
            localizedName: equip.localizedName
          });
        });
      });
    });
  }


  // console.log(equipment);


  return (
    <div className='container mx-auto px-4 '>

      <header className='mt-16'>
        <div className="flex-row-reverse lg:flex">

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

          <div className="flex items-center justify-center w-full px-2 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{data.title}</h2>

              <p
                className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base"
                dangerouslySetInnerHTML={{ __html: data.summary }}
              ></p>

              <div className='flex flex-wrap gap-4 mt-8'>
                <p className='p-2 border rounded bg-blue-100'><span className='font-semibold'>Recipe Score:</span> {Math.round(data.spoonacularScore)}%</p>
                <p className='p-2 border rounded bg-green-100'><span className='font-semibold'>Ready In:</span> {Math.round(data.readyInMinutes)} Minutes</p>
                <p className='p-2 border rounded bg-yellow-100'><span className='font-semibold'>Health Score:</span> {Math.round(data.healthScore)}%</p>
              </div>



            </div>
          </div>

        </div>
      </header>
      <hr />
      <div className='mt-16 mb-8'>
        <h1 className='text-2xl mb-16 font-semibold'>List of Recipe Ingredients</h1>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4'>
          {
            data?.extendedIngredients.map((item) => <div key={item.id} className="flex flex-col items-center justify-center w-full max-w-[150px] max-h-[150px]  mx-auto">
              <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{ backgroundImage: `url(https://spoonacular.com/cdn/ingredients_100x100/${item.image})` }}
              ></div>
              <h2 className='font-semibold mt-2'>{item.name}</h2>
            </div>)
          }
        </div>
      </div>
      <hr />
      <div className='mb-8 mt-16'>
        <h2 className='font-semibold text-2xl'>Overview of Instructions and Equipment</h2>
        <div className='flex mt-10'>
          <div className='w-1/2 flex flex-col space-y-2 '>
            <h2 className='text-lg font-semibold mb-4 uppercase'>Equipment</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {equipment.map((item) => (
                <div className="border p-2 text-center" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-md mb-1"
                  />
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className='w-1/2 pl-4'>
            <h2 className='text-lg font-semibold mb-4 uppercase'>Instruction</h2>
            <p
              className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base"
              dangerouslySetInnerHTML={{ __html: data.instructions }}
            ></p>
          </div>
        </div>
      </div>

    </div >
  )
}
export default RecipeDetails;

