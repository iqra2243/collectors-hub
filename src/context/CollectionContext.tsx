import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import type { CollectionType, Product } from '../types/product';

interface CollectionItem extends Product {
  collection: CollectionType;
}

interface CollectionContextType {
  items: CollectionItem[];
  addItem: (product: Product, collection: CollectionType) => boolean;
  removeItem: (id: string, collection: CollectionType) => void;
  moveItem: (
    id: string,
    from: CollectionType,
    to: CollectionType
  ) => void;
}

const CollectionContext = createContext<
  CollectionContextType | undefined
>(undefined);

const STORAGE_KEY = 'collectors-hub-collection';

export function CollectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CollectionItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (
    product: Product,
    collection: CollectionType
  ) => {
    const exists = items.some(
      (item) =>
        item.id === product.id && item.collection === collection
    );

    if (exists) {
      return false;
    }

    setItems((current) => [
      ...current,
      { ...product, collection },
    ]);

    return true;
  };

  const removeItem = (
    id: string,
    collection: CollectionType
  ) => {
    setItems((current) =>
      current.filter(
        (item) =>
          !(item.id === id && item.collection === collection)
      )
    );
  };

  const moveItem = (
    id: string,
    from: CollectionType,
    to: CollectionType
  ) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id && item.collection === from
          ? { ...item, collection: to }
          : item
      )
    );
  };

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      moveItem,
    }),
    [items]
  );

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const context = useContext(CollectionContext);

  if (!context) {
    throw new Error(
      'useCollection must be used within CollectionProvider'
    );
  }

  return context;
}