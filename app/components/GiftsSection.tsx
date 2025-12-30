"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Modal } from "./Modal";

export function GiftsSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-8">
            <Gift size={36} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-6">
            Regalos
          </h2>

          {/* Text */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
            ¡Tu presencia es el mejor regalo!<br />
            Pero si deseas tener un detalle conmigo, lo recibiré con mucho cariño.
          </p>

          {/* Button */}
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-full font-medium uppercase tracking-wider text-sm hover:bg-accent hover:text-white transition-colors"
          >
            Lluvia de Sobres
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Lluvia de Sobres"
      >
        <div className="text-center">
          <div className="bg-accent/5 p-6 rounded-xl mb-6">
            <p className="text-gray-600 leading-relaxed">
              Habrá un buzón especial en la entrada del salón donde podrás depositar tu sobre.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-serif font-bold text-gray-800 mb-4">Transferencia Bancaria</h4>
            <ul className="space-y-3 text-left text-gray-600 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-400">Nombre:</span>
                <span className="font-medium">Juan Pérez</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">CBU:</span>
                <span className="font-mono text-xs">0000000000000000000000</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Alias:</span>
                <span className="font-medium">MIS.XV.AÑOS</span>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-accent text-sm italic">
            ¡Gracias por tu cariño! ♡
          </p>
        </div>
      </Modal>
    </section>
  );
}
