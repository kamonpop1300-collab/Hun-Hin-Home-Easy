"use client"

import { useMemo, useState } from "react"
import {
  Search,
  MapPin,
  Home,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  HeartHandshake,
  Menu,
  X,
} from "lucide-react"
import { motion } from "framer-motion"
import { PropertyCard } from "@/components/property-card"

const properties = [
  {
    id: 1,
    type: "ขาย",
    titleTh: "พูลวิลล่าหรู ใกล้ทะเล เหมาะพักอาศัยและลงทุน",
    titleEn: "Luxury pool villa near the beach",
    location: "หัวหิน, ประจวบคีรีขันธ์",
    price: "฿12,900,000",
    beds: 4,
    baths: 5,
    size: "420 ตร.ม.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    tags: ["ใกล้ทะเล", "สระว่ายน้ำ", "พร้อมเข้าอยู่"],
  },
  {
    id: 2,
    type: "เช่า",
    titleTh: "บ้านเดี่ยวตกแต่งครบ ใกล้โรงเรียนนานาชาติ",
    titleEn: "Fully furnished family home",
    location: "เขาตะเกียบ, หัวหิน",
    price: "฿65,000 / เดือน",
    beds: 3,
    baths: 3,
    size: "280 ตร.ม.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1600&auto=format&fit=crop",
    tags: ["ครอบครัว", "เฟอร์ครบ", "เดินทางสะดวก"],
  },
  {
    id: 3,
    type: "ขาย",
    titleTh: "คอนโดวิวเมือง ใกล้รถไฟฟ้า เหมาะชาวต่างชาติ",
    titleEn: "City view condo near BTS/MRT",
    location: "ตัวเมืองหัวหิน",
    price: "฿7,500,000",
    beds: 2,
    baths: 2,
    size: "86 ตร.ม.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    tags: ["ใกล้รถไฟฟ้า", "วิวเมือง", "ลงทุนปล่อยเช่า"],
  },
]

const features = [
  { Icon: ShieldCheck, th: "เชื่อถือได้", en: "Trusted service" },
  { Icon: Globe2, th: "ไทย + อังกฤษ", en: "Thai & English" },
  { Icon: HeartHandshake, th: "ดูแลครบ", en: "Full guidance" },
  { Icon: MessageCircle, th: "ติดต่อเร็ว", en: "Easy contact" },
]

const steps = [
  "เลือกทำเลที่เหมาะกับการอยู่จริงหรือการลงทุน",
  "ตรวจสอบเอกสาร ราคา และค่าใช้จ่ายก่อนตัดสินใจ",
  "นัดชมบ้านออนไลน์หรือชมบ้านจริงได้",
  "ช่วยประสานงานจนถึงวันโอนหรือวันเข้าอยู่",
]

export default function ThaiPropertyWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState("")
  const filtered = useMemo(
    () =>
      properties.filter((p) =>
        `${p.titleTh} ${p.titleEn} ${p.location}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">
                Hua Hin Home Easy
              </div>
              <div className="text-xs text-slate-500">
                อสังหาง่าย ๆ สำหรับทุกคน / Simple Property Guide
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-emerald-600 transition-colors">
              หน้าแรก
            </a>
            <a href="#properties" className="hover:text-emerald-600 transition-colors">
              บ้านขาย/เช่า
            </a>
            <a href="#guide" className="hover:text-emerald-600 transition-colors">
              คำแนะนำ
            </a>
            <a href="#sell" className="hover:text-emerald-600 transition-colors">
              ฝากขาย
            </a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">
              ติดต่อ
            </a>
          </nav>
          <button className="hidden rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700 transition-colors md:block">
            LINE / WhatsApp
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t bg-white px-4 py-4 md:hidden">
            <div className="grid gap-3 text-sm font-medium">
              <a href="#home">หน้าแรก</a>
              <a href="#properties">บ้านขาย/เช่า</a>
              <a href="#guide">คำแนะนำ</a>
              <a href="#sell">ฝากขาย</a>
              <a href="#contact">ติดต่อ</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2200&auto=format&fit=crop"
            alt="Luxury villa"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
              ไทยหลัก อังกฤษเสริม เหมาะกับลูกค้าต่างชาติ
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl text-balance">
              ค้นหาบ้านที่ใช่ในหัวหิน แบบเข้าใจง่าย
            </h1>
            <p className="mt-5 text-lg text-white/85">
              Find your perfect home in Hua Hin with clear advice, friendly
              service, and easy contact every step of the way.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#properties"
                className="rounded-2xl bg-white px-6 py-4 text-center font-bold text-slate-950 hover:bg-slate-100 transition-colors"
              >
                ดูบ้านทั้งหมด / View Properties
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-emerald-600 px-6 py-4 text-center font-bold text-white hover:bg-emerald-700 transition-colors"
              >
                ติดต่อเรา / Contact Agent
              </a>
            </div>
          </motion.div>

          {/* Search Box */}
          <div className="mt-10 max-w-5xl rounded-3xl bg-white p-4 shadow-2xl">
            <div className="grid gap-3 md:grid-cols-[1fr_180px_180px_140px]">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ค้นหาทำเล เช่น หัวหิน เขาตะเกียบ แบล็คเมาน์เทน"
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <select className="rounded-2xl bg-slate-50 px-4 py-3 outline-none">
                <option>ทุกประเภท</option>
                <option>ขาย</option>
                <option>เช่า</option>
              </select>
              <select className="rounded-2xl bg-slate-50 px-4 py-3 outline-none">
                <option>ทุกงบประมาณ</option>
                <option>ต่ำกว่า 5 ล้าน</option>
                <option>5-10 ล้าน</option>
                <option>10 ล้านขึ้นไป</option>
              </select>
              <button className="rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white hover:bg-slate-800 transition-colors">
                ค้นหา
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {features.map(({ Icon, th, en }) => (
          <div
            key={th}
            className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
          >
            <Icon className="mb-3 h-7 w-7 text-emerald-600" />
            <div className="font-bold">{th}</div>
            <div className="text-sm text-slate-500">{en}</div>
          </div>
        ))}
      </section>

      {/* Properties Section */}
      <section
        id="properties"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-semibold text-emerald-700">
              รายการแนะนำ / Featured Properties
            </p>
            <h2 className="mt-2 text-3xl font-black">
              บ้านขายและบ้านเช่าที่คัดมาแล้ว
            </h2>
            <p className="mt-2 text-slate-600">
              ข้อมูลสั้น ชัดเจน พร้อมติดต่อทันที
            </p>
          </div>
          <button className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors">
            ดูทั้งหมด / See All
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-semibold text-emerald-700">
              คำแนะนำสำหรับลูกค้า / Buyer Guide
            </p>
            <h2 className="mt-2 text-3xl font-black">
              ทำให้การซื้อ เช่า และลงทุนในไทยง่ายขึ้น
            </h2>
            <p className="mt-4 text-slate-600">
              เราอธิบายขั้นตอนแบบง่าย ไม่ซับซ้อน
              เหมาะทั้งคนไทยและชาวต่างชาติที่ต้องการบ้านในประเทศไทย
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((item, i) => (
              <div key={item} className="flex gap-4 rounded-3xl bg-slate-50 p-5">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
                <div>
                  <div className="font-bold">ขั้นตอนที่ {i + 1}</div>
                  <div className="text-slate-600">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Section */}
      <section
        id="sell"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold text-amber-300">
                ฝากขาย / List Your Property
              </p>
              <h2 className="mt-2 text-3xl font-black">
                มีบ้าน คอนโด หรือที่ดิน ต้องการขายหรือปล่อยเช่า?
              </h2>
              <p className="mt-4 text-white/75">
                ส่งข้อมูลมาให้เรา เราช่วยจัดทำประกาศ รูปภาพ รายละเอียด 2 ภาษา
                และช่วยหาลูกค้าที่เหมาะสม
              </p>
            </div>
            <form className="grid gap-3 rounded-3xl bg-white p-5 text-slate-900">
              <input
                className="rounded-2xl bg-slate-50 px-4 py-3 outline-none"
                placeholder="ชื่อ / Name"
              />
              <input
                className="rounded-2xl bg-slate-50 px-4 py-3 outline-none"
                placeholder="เบอร์โทร หรือ LINE"
              />
              <input
                className="rounded-2xl bg-slate-50 px-4 py-3 outline-none"
                placeholder="ประเภททรัพย์ เช่น บ้าน คอนโด ที่ดิน"
              />
              <button
                type="button"
                className="rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700 transition-colors"
              >
                ส่งข้อมูล / Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black">ติดต่อเราง่าย ๆ / Easy Contact</h2>
            <p className="mt-3 text-slate-600">
              ตอบเร็ว ให้คำแนะนำชัดเจน นัดชมบ้านได้ทั้งออนไลน์และหน้างาน
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="#"
              className="rounded-3xl bg-emerald-50 p-6 text-center ring-1 ring-emerald-100 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="mx-auto mb-3 h-8 w-8 text-emerald-700" />
              <div className="font-bold">LINE / WhatsApp</div>
              <div className="text-sm text-slate-600">คลิกเพื่อคุยกับเรา</div>
            </a>
            <a
              href="#"
              className="rounded-3xl bg-slate-50 p-6 text-center ring-1 ring-slate-200 hover:bg-slate-100 transition-colors"
            >
              <Phone className="mx-auto mb-3 h-8 w-8" />
              <div className="font-bold">โทรศัพท์</div>
              <div className="text-sm text-slate-600">08X-XXX-XXXX</div>
            </a>
            <a
              href="#"
              className="rounded-3xl bg-slate-50 p-6 text-center ring-1 ring-slate-200 hover:bg-slate-100 transition-colors"
            >
              <Mail className="mx-auto mb-3 h-8 w-8" />
              <div className="font-bold">Email</div>
              <div className="text-sm text-slate-600">hello@thaihomeeasy.com</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="font-black">Hua Hin Home Easy</div>
            <div className="text-sm text-white/60">
              อสังหาหัวหิน เข้าใจง่าย สำหรับลูกค้าไทยและต่างชาติ
            </div>
          </div>
          <div className="text-sm text-white/60">
            © 2026 Hua Hin Home Easy. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-600 px-5 py-4 font-bold text-white shadow-2xl hover:bg-emerald-700 transition-colors"
      >
        แชทเลย
      </a>
    </div>
  )
}
