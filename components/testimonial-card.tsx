export default function TestimonialCard({
  name,
  location,
  quote,
  image,
}: {
  name: string
  location: string
  quote: string
  image: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img src={image || "/placeholder.svg"} alt={name} className="w-16 h-16 rounded-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <blockquote className="italic text-gray-700 border-l-4 border-rose-200 pl-4">"{quote}"</blockquote>
    </div>
  )
}
