'use client';
import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { BeerStyles } from '@/constants/beerStyles';
import BeerCard, { type BeerCardProps } from '../BeerCard/beerCard';
import { BeerLogos } from '@/constants/beerLogos';

export default function NewBeerModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [beerCard, setBeerCard] = useState<BeerCardProps>({
    title: '',
    logo: '/img/beers/tent.svg',
    width: 210,
    height: 180,
    fontSize: 40,
  });
  const buttonLabel = 'New Beer';
  const modalTitle = 'Create New Beer';
  const cancelLabel = 'Cancel';
  const saveLabel = 'Save';
  const buildLogoLabel = 'Build Beer Card';

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        {buttonLabel}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <Formik initialValues={{ name: '', style: '' }} onSubmit={() => {}}>
              <Form>
                <ModalHeader className="flex flex-col gap-1">{modalTitle}</ModalHeader>
                <ModalBody>
                  <Input
                    onChange={(input) => {
                      setBeerCard({ ...beerCard, title: input.target.value });
                    }}
                    id="name"
                    type="text"
                    label="Beer Name"
                    isRequired
                  />
                  <Autocomplete
                    id="style"
                    placeholder="Select a beer style"
                    label="Style"
                    defaultItems={BeerStyles}
                    isRequired
                  >
                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                  </Autocomplete>
                  <p>{buildLogoLabel}</p>
                  <BeerCardWrapper>
                    <BeerCard key={beerCard.title} {...beerCard} />
                  </BeerCardWrapper>
                  <Autocomplete
                    id="imagePath"
                    placeholder="Select a logo"
                    label="Logo"
                    defaultItems={BeerLogos}
                    selectedKey={beerCard.logo}
                    isRequired
                    onSelectionChange={(input) => {
                      setBeerCard({ ...beerCard, logo: input?.toString() ?? '' });
                    }}
                  >
                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                  </Autocomplete>
                  <Input
                    onChange={(input) => {
                      setBeerCard({ ...beerCard, title: input.target.value });
                    }}
                    id="imageWidth"
                    type="number"
                    label="Logo Width"
                    value={`${beerCard.width}`}
                    isRequired
                  />
                  <Input
                    onChange={(input) => {
                      setBeerCard({ ...beerCard, title: input.target.value });
                    }}
                    id="imageHeight"
                    type="number"
                    label="Logo Height"
                    value={`${beerCard.height}`}
                    isRequired
                  />
                  <Input
                    onChange={(input) => {
                      setBeerCard({ ...beerCard, title: input.target.value });
                    }}
                    id="titleFontSize"
                    type="number"
                    label="Title Font Size"
                    value={`${beerCard.fontSize}`}
                    isRequired
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    {cancelLabel}
                  </Button>
                  <Button type="submit" color="primary">
                    {saveLabel}
                  </Button>
                </ModalFooter>
              </Form>
            </Formik>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const BeerCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
