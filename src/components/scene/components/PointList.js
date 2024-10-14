import Point from './Points';

function PointList({ points, onPointClick }) {
   return (
      <>
         {points.map((point, index) => (
            <Point
               key={index}
               position={point.position}
               type={point.type}
               data={point.data}
               onClick={() => onPointClick(point.data.id)}
            />
         ))}
      </>
   );
}

export default PointList;
