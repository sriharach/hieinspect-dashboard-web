// libs
import React, { forwardRef } from 'react';
import styles from './BoxFileUpload.module.scss';
import clsx from 'clsx';

// components
import { HeroDeleteIcon, HeroUploadMinimalisticIcon } from '@/components/assets/icons/hero';
import { BoxFileUploadProps } from './BoxFileUpload.type';

const BoxFileUpload = forwardRef<HTMLInputElement, BoxFileUploadProps>(
  ({ onClick, onChanageBoxFile, onRemoveCoverfile, title, checkPreview, readonlySrc }, ref) => {
    return (
      <div
        aria-label="box-upload"
        className={clsx(styles['box-file-upload'], {
          'relative !cursor-auto': checkPreview,
        })}
        onClick={onClick}
      >
        {checkPreview ? (
          <>
            <img
              draggable={false}
              src={readonlySrc}
              alt="preview"
              className="w-full h-full shadow-md rounded-md object-contain"
            />
            <HeroDeleteIcon
              width={25}
              role="button"
              className="absolute bottom-1 right-1 text-red-600"
              onClick={() => onRemoveCoverfile?.(readonlySrc!)}
            />
          </>
        ) : (
          <>
            <div className={styles['box-file-upload-content']}>
              <HeroUploadMinimalisticIcon />
              <span>{title}</span>
            </div>
            <input
              id="box-upload"
              hidden
              ref={ref}
              type="file"
              onChange={onChanageBoxFile}
              accept="image/*"
            />
          </>
        )}
      </div>
    );
  },
);

BoxFileUpload.displayName = 'BoxFileUpload';
export default BoxFileUpload;
