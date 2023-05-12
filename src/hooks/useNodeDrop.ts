import produce from 'immer';
import { useRecoilState, useSetRecoilState } from 'recoil';
import dragState from 'src/recoil/dragState';
import nodeState from 'src/recoil/nodeState';

const useNodeDrop = () => {
  const [dragNodeId, setDragNodeId] = useRecoilState(dragState);
  const setNode = useSetRecoilState(nodeState);

  const handleNodeDrop = (e: DragEvent) => {
    const parentElement = (e.target as HTMLElement).closest('.node');
    const newParentId = parentElement?.id;

    if (!dragNodeId || !newParentId) {
      setDragNodeId(null);
      return;
    }

    setNode((prevNodes) =>
      produce(prevNodes, (draft) => {
        const originParentId = draft[dragNodeId].parentId;

        if (newParentId === originParentId) {
          return draft;
        }
        // 기존 부모 노드 children 배열 업데이트
        draft[originParentId].children = draft[originParentId].children.filter(
          (id) => id !== dragNodeId,
        );

        // 새 부모 노드 설정
        draft[dragNodeId].parentId = newParentId;
        draft[newParentId].children.push(dragNodeId);

        return draft;
      }),
    );

    setDragNodeId(null);
  };

  return handleNodeDrop;
};

export default useNodeDrop;
