'use client';

// libs
import React from 'react';
import { Input, Select, SelectItem } from '@heroui/react';
import clsx from 'clsx';

// components
import Layout from '@/components/modules/layouts/Layout';
import Button from '@/components/nextui/Button/Button';
import { HeroDeleteIcon, HeroUploadMinimalisticIcon } from '@/components/assets/icons/hero';

import styles from './modify.module.scss';
import useModityHouse from '../controllers/useModityHouse';
import BoxFileUpload from '@/components/modules/BoxFileUpload/BoxFileUpload';

const Modify = () => {
  const {
    categories,
    realitys,
    inputUploadRef,
    boxUploadRef,
    imageSrcs,
    imageSrcCoverImg,
    isLoading,
    errors,
    control,
    Controller,
    handleCancelModify,
    handleSubmitForm,
    onUploadFile,
    onBoxUploadFile,
    onChanageFile,
    onChanageBoxFile,
    onRemoveFile,
    onRemoveCoverfile,
  } = useModityHouse();

  return (
    <Layout>
      <form className={styles['modify']} onSubmit={handleSubmitForm}>
        <BoxFileUpload
          title="อัปโหลดรูปโครงการ"
          checkPreview={!!imageSrcCoverImg?.base64}
          readonlySrc={imageSrcCoverImg?.base64}
          ref={boxUploadRef}
          onRemoveCoverfile={(filename) => onRemoveCoverfile(filename)}
          onChanageBoxFile={onChanageBoxFile}
          onClick={onBoxUploadFile}
        />
        <div className={styles['modify-input-form-wrapper']}>
          <Controller
            control={control}
            name="category_house_id"
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  label="Select category house (optional)"
                  selectedKeys={[field.value as string]}
                >
                  {categories.map((category) => (
                    <SelectItem color="primary" key={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </Select>
              );
            }}
          />
          <Controller
            control={control}
            name="realitys_id"
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  label="Select reality house (optional)"
                  selectedKeys={[field.value as string]}
                >
                  {realitys.map((reality) => (
                    <SelectItem color="primary" key={reality.id}>
                      {reality.name}
                    </SelectItem>
                  ))}
                </Select>
              );
            }}
          />
          <Controller
            control={control}
            name="name"
            rules={{ required: { value: true, message: 'Request!' } }}
            render={({ field }) => {
              return (
                <Input
                  {...field}
                  label="House name"
                  errorMessage={errors.name?.message}
                  isInvalid={!!errors.name?.message}
                />
              );
            }}
          />
          {imageSrcs.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 min-h-[120px]">
              {imageSrcs.map((src, index) => {
                return (
                  <div key={index} className="relative w-32 h-32 md:w-[160px] md:h-[160px]">
                    <img
                      src={src.base64}
                      alt="preview"
                      className="w-full h-full shadow-md rounded-md object-cover"
                    />
                    <HeroDeleteIcon
                      width={25}
                      role="button"
                      className="absolute bottom-1 right-1 text-red-600"
                      onClick={() => onRemoveFile(index, src.fileName)}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {imageSrcs.length >= Number(process.env.AMOUNT_LIMIT_IMAGE) ? null : (
            <div
              className="border border-gray-300 rounded-2xl p-4 text-center max-w-[120px] cursor-pointer"
              onClick={onUploadFile}
            >
              <strong className="text-sm">Upload</strong>
            </div>
          )}
          <div className="grid space-y-1 text-sm">
            <span className="text-orange-500">
              ** รูปภาพขนาดไม่เกิน {process.env.AMOUNT_LIMIT_IMAGE} **
            </span>
            <span>
              จำนวนรูปภาพที่อัพโหลดได้ {Number(process.env.AMOUNT_LIMIT_IMAGE) - imageSrcs.length}
            </span>
          </div>

          <div className={styles['modify-content-button']}>
            <Button fullWidth color="primary" isLoading={isLoading} type="submit">
              Submit
            </Button>
            <Button fullWidth color="primary" variant="ghost" onPress={handleCancelModify}>
              Cancel
            </Button>
          </div>
        </div>
      </form>

      <input
        id="input-upload"
        multiple
        hidden
        ref={inputUploadRef}
        type="file"
        onChange={onChanageFile}
        accept="image/*"
      />
    </Layout>
  );
};

export default Modify;
