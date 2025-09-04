import React from "react";

const dishes = [
  { name: "Gujarati Thali / ગુજરાતી થાળી", price: "₹250" },
  { name: "Punjabi Paneer Butter Masala / પંજાબી પનીર બટર મસાલા", price: "₹180" },
  { name: "South Indian Dosa / દક્ષિણ ભારતીય ડોસા", price: "₹120" },
  { name: "Chinese Noodles / ચાઇનીઝ નૂડલ્સ", price: "₹150" },
  { name: "Fafda-Jalebi / ફાફડા-જલેબી", price: "₹100" },
  { name: "Ice Cream / આઈસક્રીમ", price: "₹80" },
];

function Menu() {
  return (
    <section id="menu" className="p-10 bg-yellow-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Menu / અમારી મેનુ</h2>
      <div className="max-w-2xl mx-auto">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-300 py-2 text-lg"
          >
            <span>{dish.name}</span>
            <span className="font-semibold">{dish.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;