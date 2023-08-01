import { useDroppable } from '@dnd-kit/core';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,

  };


  return (
    <div ref={setNodeRef} className='dropable' >
      {props.children}
    </div>
  );
}


export default Droppable