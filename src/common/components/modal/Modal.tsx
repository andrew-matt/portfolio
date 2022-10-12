import { FC, ReactNode, useCallback, useEffect } from 'react';

import style from './Modal.module.scss';

import { setShow } from 'common/components/modal/modal-reducer';
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks';

type ModalPropsType = {
  children: ReactNode;
};

export const Modal: FC<ModalPropsType> = ({ children }) => {
  const dispatch = useAppDispatch();

  const show = useAppSelector(state => state.modal.show);

  const closeOnEscapeKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        dispatch(setShow(false));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <div
      className={`${style.modal} ${show && style.modalShow}`}
      onMouseDown={() => dispatch(setShow(false))}
      role="presentation"
    >
      <div className={style.container}>
        <div
          className={style.modalContent}
          onMouseDown={e => e.stopPropagation()}
          role="presentation"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
