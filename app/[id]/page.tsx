
import { notFound} from "next/navigation"
import prisma from "@/database";

interface VehiclePageProps {
    params: {
        id: string,
    }
}

//due to learning prisma at the same time, I have not used the api supplied. I know it's not optimal or secure.
export default async function VehicleInfo({ 
    params: { id } } : VehiclePageProps
) {
    const vehicle = await prisma.vehicle.findUnique({where: { id: parseInt(id)}})
    if (!vehicle) notFound();
    return (
    <>
    <div className="pl-32 pt-10">
        <a href="/" className="bg-blue-800 hover:bg-blue-500 text-white py-2 px-4 rounded-full">Go Back</a>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover" src={vehicle.url_image} alt="Product Image" />
                    </div>
                    <div className="flex -mx-2 mb-4">
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.make}</h3>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{vehicle.model}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Year: {vehicle.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Fuel Type: {vehicle.fuel_type}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Mileage: {vehicle.mileage}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Transmission: {vehicle.transmission}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">£{vehicle.price}</span>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Car Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
    )

}