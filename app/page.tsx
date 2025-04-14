'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaClock, FaPhone, FaInstagram, FaFacebook, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedMenuImage, setSelectedMenuImage] = useState('/images/cafe_menu_07.jpg');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openMenuModal = (imagePath: string) => {
    setSelectedMenuImage(imagePath);
    setIsMenuModalOpen(true);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/cafe_exterior_01.jpg"
          alt="라프텔 카페 외부"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center text-white"
          >
            <h1 className="text-7xl font-bold mb-6 tracking-tight">라프텔 카페</h1>
            <p className="text-2xl font-light tracking-wide">특별한 순간을 이곳에서</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openMenuModal('/images/cafe_menu_07.jpg')}
              className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              메뉴 보기
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Menu Modal */}
      <AnimatePresence>
        {isMenuModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsMenuModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMenuModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              >
                <FaTimes className="text-xl" />
              </button>
              <div className="relative h-[80vh]">
                <Image
                  src={selectedMenuImage}
                  alt="메뉴"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">라프텔 카페 소개</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/cafe_interior_04.jpg"
                alt="카페 내부"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-8"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                라프텔 카페는 편안한 분위기와 맛있는 음료, 그리고 특별한 경험을 제공합니다.
                우리의 카페는 당신의 일상에 작은 휴식과 즐거움을 더해줍니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-colors">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">위치</h3>
                    <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-colors">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">영업시간</h3>
                    <p className="text-gray-600">매일 10:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-colors">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">연락처</h3>
                    <p className="text-gray-600">02-123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">메뉴</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              onClick={() => openMenuModal('/images/cafe_menu_01.jpg')}
            >
              <Image
                src="/images/cafe_menu_01.jpg"
                alt="메뉴 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">시그니처 커피</h3>
                  <p className="text-gray-200">라프텔만의 특별한 블렌드</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              onClick={() => openMenuModal('/images/cafe_menu_07.jpg')}
            >
              <Image
                src="/images/cafe_menu_07.jpg"
                alt="메뉴 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">디저트</h3>
                  <p className="text-gray-200">신선한 재료로 만든 수제 디저트</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">인테리어</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[4, 5, 6, 7, 8, 9].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src={`/images/cafe_interior_0${num}.jpg`}
                  alt={`인테리어 ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">라프텔 카페</h3>
              <p className="text-gray-400">특별한 순간을 이곳에서</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/laftel_coffee/" target="_blank" rel="noopener noreferrer"  className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">영업시간</h3>
              <p className="text-gray-400">매일 10:00 - 22:00</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">연락처</h3>
              <p className="text-gray-400">010-2700-7312</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">위치</h3>
              <p className="text-gray-400">서울특별시 송파구 올림픽로 300</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 라프텔 카페. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 