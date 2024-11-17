"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Table, 
  TableHeader, 
  TableColumn,
TableBody, 
TableRow,
TableCell,
getKeyValue
} from "@nextui-org/react";
import Image from "next/image";


const ProductCard = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const list = [
    {
      title: "Orange",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl",
      price: "$12.20",
    },
  ];

  const rows = [
    {
      key: "1",
      prices: "Precio Caja",
      qty: "1",
    },
    {
      key: "2",
      prices: "Precio Mayoreo",
      qty: "3",
    },
    {
      key: "3",
      prices: "Precio Menudeo",
      qty: "100",
    },
  ];
  
  const columns = [
    {
      key: "prices",
      label: "Precios",
    },
    {
      key: "qty",
      label: "A partir de",
    },
  ];

  const handleCardPress = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 mx-4 justify-center max-w-screen-lg mx-auto px-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => handleCardPress()}
            className="flex-grow basis-[150px] max-w-[200px]"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                width={100}
                height={180}
                alt={item.title}
                className="w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500 text-success-400">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        backdrop="blur"
        className="p-4"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col items-center">
            <h2 className="text-large font-bold">
              Titulo
            </h2>
          </ModalHeader>
          <ModalBody className="flex flex-col">
            <div className="flex justify-center">
                <Image
                  width={200}
                  height={200}
                  alt="Product Image"
                  className="object-cover rounded-lg"
                  src="https://drive.google.com/uc?id=1BIFRUajlGUDqbNoNvsyIxuDPWbZ3YSEl"
                />
            </div>
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column.key}
                            className="text-center text-sm"
                        >
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => (
                                <TableCell
                                    className="text-center"
                                >
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

          </ModalBody>
          <ModalFooter className="flex justify-center">
            <Button color="primary" onPress={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
