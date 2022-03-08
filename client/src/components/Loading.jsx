import { CgSpinnerTwoAlt } from 'react-icons/cg';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-translucent-black z-30">
      <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-50">
        <div className="text-sky-500 text-8xl animate-spin">
          <CgSpinnerTwoAlt />
        </div>
      </div>
    </div>
  );
};

export default Loading;
