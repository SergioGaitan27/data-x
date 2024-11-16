'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox, Input, Button, Accordion, AccordionItem, RadioGroup, Radio } from "@nextui-org/react";
import { BoxIcon } from '@/app/components/boxIcon';
import { IProduct } from '@/types/product';
import NumericInput from '@/app/components/ui/NumericInput';

const ProductForm: React.FC = () => {
  const { 
    control, 
    watch, 
    setValue, 
    handleSubmit,
    reset 
  } = useForm<IProduct>({
    defaultValues: {
      boxCode: '',
      productCode: '',
      name: '',
      piecesPerBox: 0,
      cost: 0,
      price1: 0,
      price1MinQty: 1,
      price2: 0,
      price2MinQty: 3,
      price3: 0,
      price3MinQty: 0,
      imageUrl: 'https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl',
      category: 'SIN CATEGORIA'
    }
  });

  const boxCode = watch('boxCode');
  const piecesPerBox = watch('piecesPerBox');
  const [isBoxCodeChecked, setIsBoxCodeChecked] = useState<boolean>(true);
  const [isBoxPiecesChecked, setIsBoxPiecesChecked] = useState<boolean>(true);

  useEffect(() => {
    if (isBoxCodeChecked && boxCode) {
      setValue('productCode', boxCode.toUpperCase());
    }else{
      setValue('productCode', '');
    }
  }, [boxCode, isBoxCodeChecked, setValue]);

  useEffect(() => {
    if (isBoxPiecesChecked && piecesPerBox) {
      setValue('price3MinQty', piecesPerBox);
    }
  }, [piecesPerBox, isBoxPiecesChecked, setValue]);

  const onSubmit = (data: IProduct): void => {
    console.log(data);
  };

  const handleBoxCodeCheckChange = (checked: boolean) => {
    setIsBoxCodeChecked(checked);
    if (!checked) {
      setValue('productCode', watch('productCode'));
    } else if (boxCode) {
      setValue('productCode', boxCode.toUpperCase());
    }
  };

  const handleBoxPiecesCheckChange = (checked: boolean) => {
    setIsBoxPiecesChecked(checked);
    if (!checked) {
      setValue('price3MinQty', watch('price3MinQty'));
    } else if (piecesPerBox) {
      setValue('price3MinQty', piecesPerBox);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Datos del producto">
          <div className="flex flex-col gap-4">
            <Controller
              name="boxCode"
              control={control}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label="Código de la caja"
                  labelPlacement="outside"
                  type="text"
                  variant="underlined"
                  isRequired
                  isClearable
                  value={field.value?.toUpperCase() || ''}
                  onClear={() => field.onChange('')}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />

            <Controller
              name="productCode"
              control={control}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label="Código del producto"
                  labelPlacement="outside"
                  type="text"
                  variant="underlined"
                  isRequired
                  value={field.value?.toUpperCase() || ''}
                  isReadOnly={isBoxCodeChecked}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                  endContent={
                    <Checkbox
                      isSelected={isBoxCodeChecked}
                      onValueChange={handleBoxCodeCheckChange}
                      size="lg"
                      color="warning"
                      radius="sm"
                      icon={<BoxIcon />}
                    >!</Checkbox>
                  }
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label="Nombre del producto"
                  labelPlacement="outside"
                  type="text"
                  variant="underlined"
                  isRequired
                  value={field.value?.toUpperCase() || ''}
                  onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />

            <Controller
              name="piecesPerBox"
              control={control}
              rules={{ 
                required: 'Este campo es requerido',
                min: { value: 1, message: 'Debe ser mayor a 0' }
              }}
              render={({ field, fieldState: { error } }) => (
                <NumericInput
                  field={field}
                  label="Piezas por caja"
                  error={error}
                  isRequired={true}
                />
              )}
            />

            <Controller
              name="cost"
              control={control}
              rules={{ min: { value: 0, message: 'No puede ser negativo' } }}
              render={({ field, fieldState: { error } }) => (
                <NumericInput
                  field={field}
                  label="Costo"
                  error={error}
                />
              )}
            />

            <Controller
              name="imageUrl"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="URL de la imagen"
                  labelPlacement="outside"
                  type="url"
                  variant="underlined"
                  value={field.value?.toString() || 'https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl'}
                  onFocusChange={(isFocused) => {
                    if (isFocused) {
                      setTimeout(() => {
                        const input = document.querySelector(`input[name="${field.name}"]`) as HTMLInputElement;
                        if (input) input.select();
                      }, 0);
                    }
                  }}
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field, fieldState: { error } }) => (
                <RadioGroup 
                  {...field}
                  label="Categoría" 
                  name="category" 
                  value={field.value} 
                  size="sm"
                  defaultValue="SIN CATEGORIA"
                  onChange={field.onChange}>
                  <Radio value="PAPELERIA">PAPELERÍA</Radio>
                  <Radio value="NAVIDAD">NAVIDAD</Radio>
                  <Radio value="SIN CATEGORIA">SIN CATEGORÍA</Radio>
                </RadioGroup>
              )}
            />
          </div>
        </AccordionItem>

        <AccordionItem key="2" aria-label="Accordion 2" title="Costos y precios">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Controller
                name="price1"
                control={control}
                rules={{ min: { value: 0, message: 'No puede ser negativo' } }}
                render={({ field, fieldState: { error } }) => (
                  <NumericInput
                  field={field}
                  label="Precio Menudeo"
                  error={error}
                />
                )}
              />

              <Controller
                name="price1MinQty"
                control={control}
                rules={{ min: { value: 1, message: 'Debe ser mayor a 0' } }}
                render={({ field, fieldState: { error } }) => (
                  <NumericInput
                  field={field}
                  label="A partir de"
                  error={error}
                />
                )}
              />
            </div>

            <div className="flex gap-4">
              <Controller
                name="price2"
                control={control}
                rules={{ min: { value: 0, message: 'No puede ser negativo' } }}
                render={({ field, fieldState: { error } }) => (
                  <NumericInput
                  field={field}
                  label="Precio Mayoreo"
                  error={error}
                />
                )}
              />

              <Controller
                name="price2MinQty"
                control={control}
                rules={{ min: { value: 1, message: 'Debe ser mayor a 0' } }}
                render={({ field, fieldState: { error } }) => (
                  <NumericInput
                  field={field}
                  label="A partir de"
                  error={error}
                />
                )}
              />
            </div>

            <div className="flex gap-4">
              <Controller
                name="price3"
                control={control}
                rules={{ min: { value: 0, message: 'No puede ser negativo' } }}
                render={({ field, fieldState: { error } }) => (
                  <NumericInput
                  field={field}
                  label="Precio Caja"
                  error={error}
                />
                )}
              />

              <Controller
                name="price3MinQty"
                control={control}
                rules={{ min: { value: 1, message: 'Debe ser mayor a 0' } }}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    value={field.value?.toString() || ''}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    label="A partir de"
                    labelPlacement="outside"
                    type="number"
                    variant="underlined"
                    isReadOnly={isBoxPiecesChecked}
                    isInvalid={!!error}
                    errorMessage={error?.message}
                    onFocusChange={(isFocused) => {
                      if (isFocused && !isBoxPiecesChecked) {
                        setTimeout(() => {
                          const input = document.querySelector(`input[name="${field.name}"]`) as HTMLInputElement;
                          if (input) input.select();
                        }, 0);
                      }
                    }}
                    endContent={
                      <Checkbox
                        isSelected={isBoxPiecesChecked}
                        onValueChange={handleBoxPiecesCheckChange}
                        size="lg"
                        color="warning"
                        radius="sm"
                        icon={<BoxIcon />}
                      >!</Checkbox>
                    }
                  />
                )}
              />
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-center p-4 gap-4">
        <Button size="md" color="primary" type="submit">
          Registrar producto
        </Button>
        <Button size="md" color="success" type="button" onClick={() => reset()}>
          Limpiar
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;