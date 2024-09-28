
import { PrismaClient, Vehicle, Prisma } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient()
//didn't use the api calls due to learning Prisma as I went, which I struggled with. I know it is not optimal to do.
export async function getVehicles(){
	const vehicles = await prisma.vehicle.findMany();
	return vehicles;
}
export default async function Home() {
	const vehicles = await getVehicles();

	return (
		<div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 items-center sm:items-start">
				{vehicles.map((vehicle) => {
					return(
						<>
							<div className="mx-auto mt-11 w-80 transform rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
								<Link href={`${vehicle.id}`} key={vehicle.id}>
								{/* Added a url_image to the database to show an image of the car */}
								<img className="h-48 w-full object-cover object-center" src={vehicle.url_image} />
								<div className="p4">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{vehicle.make}</h5>
									<h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{vehicle.model}</h4>
									<div className="flex items-center">
										<p className="mr-2 text-lg font-semibold text-gray-900">{vehicle.year}</p>
										<p className="mr-2 text-lg font-semibold text-gray-900">£{vehicle.price}</p>
									</div>
								</div>
								</Link>
							</div>
						</>
						
					)
				})}
			</main>
		</div>
	);
}
