import images from '../assets/images';
import { create } from 'zustand';

const initialData = [
   {
      id: 0,
      title: 'Luxury Apartment',
      description: 'Description 1',
      url: images.house,
      src: 'https://cdn.prod.website-files.com/642eb1cd0c43434bc3ab7314/6564f0795c3e1cf2e85b5b1f_eg.avif',
      points: [
         {
            type: 'popup',
            position: [498.2310375663341, 16.791770205834336, -21.165189931694698],
            data: {
               title: 'Sân vườn',
               description: 'Đây là cửa hàng',
            },
         },
      ],
   },
   {
      id: 1,
      title: 'Residential House',
      description: 'Description 2',
      url: images.outside,
      src: 'https://cdn.prod.website-files.com/642eb1cd0c43434bc3ab7314/6564f0795c3e1cf2e85b5b1f_eg.avif',
      points: [
         {
            type: 'gate',
            position: [498.2310375663341, 16.791770205834336, -21.165189931694698],
            data: {
               title: 'house',
               id: 0,
            },
         },
         {
            type: 'gate',
            position: [-498.2310375663341, 16.791770205834336, -21.165189931694698],
            data: {
               title: 'snow',
               id: 2,
            },
         },
      ],
   },
   {
      id: 2,
      title: 'Modern Apartment',
      description: 'Description 3',
      url: images.snow,
      src: 'https://cdn.prod.website-files.com/642eb1cd0c43434bc3ab7314/6564f0795c3e1cf2e85b5b1f_eg.avif',
      points: [
         {
            type: 'gate',
            position: [498.2310375663341, 16.791770205834336, -21.165189931694698],
            data: {
               title: 'outside',
               id: 1,
            },
         },
      ],
   },
];

const useStore = create((set) => ({
   data: initialData,

   addPoint: (id, point) =>
      set((state) => ({
         data: state.data.map((item) => (item.id === id ? { ...item, points: [...item.points, point] } : item)),
      })),

   // Function to add a new item
   addItem: (newItem) =>
      set((state) => ({
         data: [...state.data, newItem],
      })),

   // Function to update an item by id
   updateItem: (id, updatedItem) =>
      set((state) => ({
         data: state.data.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
      })),

   // Function to delete an item by id
   deleteItem: (id) =>
      set((state) => ({
         data: state.data.filter((item) => item.id !== id),
      })),
}));

export { initialData };
