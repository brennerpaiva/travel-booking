import { prisma } from "@/lib/prisma";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecomendedTrips";
import TripSearch from "./components/TripSearch";

export default async function Home() {
  const trips = await prisma.trip.findMany();
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips trips={trips} />
    </div>
  );
}
