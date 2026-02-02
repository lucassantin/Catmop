import React, { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "@/data/products";

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  getTotal: () => number;
  isInQuote: (productId: string) => boolean;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearQuote = useCallback(() => {
    setItems([]);
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const isInQuote = useCallback((productId: string) => {
    return items.some((item) => item.product.id === productId);
  }, [items]);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        getTotal,
        isInQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
};
