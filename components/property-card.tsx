"use client"

import { motion } from "framer-motion"
import { MapPin, BedDouble, Bath, Home } from "lucide-react"

interface Property {
  id: number
  type: string
  titleTh: string
  titleEn: string
  location: string
  price: string
  beds: number
  baths: number
  size: string
  image: string
  tags: string[]
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.titleTh}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-slate-900 shadow-sm">
          {property.type}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 text-2xl font-bold text-slate-950">{property.price}</div>
        <h3 className="text-lg font-bold text-slate-900">{property.titleTh}</h3>
        <p className="mt-1 text-sm text-slate-500">{property.titleEn}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <MapPin className="h-4 w-4" /> {property.location}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-700">
          <div className="rounded-2xl bg-slate-50 p-3">
            <BedDouble className="mb-1 h-4 w-4" /> {property.beds} ห้องนอน
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <Bath className="mb-1 h-4 w-4" /> {property.baths} ห้องน้ำ
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <Home className="mb-1 h-4 w-4" /> {property.size}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-5 w-full rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800">
          ดูรายละเอียด / View Details
        </button>
      </div>
    </motion.div>
  )
}
