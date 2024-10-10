import images from '../assets/images';
const initialData = [
   {
      id: 0,
      url: images.house,
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
      url: images.outside,
      points: [
         {
            type: 'gate',
            position: [15, 0, 0],
            data: {
                title:'house',
               id: 0,
            },
         },
         {
            type: 'gate',
            position: [-15, 0, 0],
            data: {
                title:'snow',
               id: 2,
            },
         },
      ],
   },
   {
      id: 2,
      url: images.snow,
      points: [
         {
            type: 'gate',
            position: [10, 0, -15],
            data: {
                title:'outside',
               id: 1,
            },
         },
      ],
   },
];

export { initialData };
