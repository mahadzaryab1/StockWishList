import React, { useCallback, useState } from 'react';
import {
    Button,
    Modal,
    TextField,
    Form,
    FormLayout,
    ChoiceList,
    DropZone,
    Stack,
    Thumbnail,
    Caption
} from '@shopify/polaris';
import { NoteMinor } from '@shopify/polaris-icons';

const AddFormComponent = () => {
    const [active, setActive] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [stockTicker, setStockTicker] = useState('');
    const [stockExchange, setStockExchange] = useState(['NYSE']);
    const [reason, setReason] = useState('');
    const [file, setFile] = useState();

    const handleChange = useCallback(
        () => {
            setActive(!active)
            setCompanyName('');
            setStockTicker('');
            setStockExchange(['NYSE']);
            setReason('');
            setFile(null);
        }, [active]
    );

    const handleSubmit = () => {
        console.log({ companyName, stockTicker, stockExchange, reason, file });
        handleChange();
    }

    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(file => acceptedFiles[0]), []);

    const validImageTypes = ['image/jpeg', 'image/png'];

    const fileUpload = !file && <DropZone.FileUpload />;
    const uploadedFile = file && (
        <Stack>
            <Thumbnail
                size="small"
                alt={file.name}
                source={
                    validImageTypes.indexOf(file.type) > 0
                        ? window.URL.createObjectURL(file)
                        : NoteMinor
                }
            />
            <div>
                {file.name} <Caption>{file.size} bytes</Caption>
            </div>
        </Stack>
    );
    const activator = <Button onClick={handleChange}>Add a Stock</Button>;

    return (
        <div>
            <Modal
                activator={activator}
                open={active}
                onClose={handleChange}
                title="Add a Stock to your Wishlist!"
                primaryAction={{
                    content: 'Add Stock',
                    onAction: handleSubmit,
                    disabled:
                        companyName.length === 0 ||
                        stockTicker.length === 0 ||
                        reason.length === 0 ||
                        !file
                }}
                secondaryActions={[
                    {
                        content: 'Exit',
                        onAction: handleChange,
                    },
                ]}
            >
                <Modal.Section>
                    <Form noValidate={true}>
                        <FormLayout.Group>
                            <TextField
                                type="text"
                                label="Company Name"
                                value={companyName}
                                onChange={(newValue) => { setCompanyName(newValue) }}
                                error={companyName.length > 0 ? false : "Company name is required"} />
                            <TextField
                                type="text"
                                label="Stock Ticker"
                                value={stockTicker}
                                onChange={(newValue) => { setStockTicker(newValue) }}
                                error={stockTicker.length > 0 ? false : "Stock ticker is required"} />
                        </FormLayout.Group>
                        <FormLayout.Group>
                            <ChoiceList
                                title="Stock Exchange"
                                choices={[
                                    { label: 'NYSE', value: 'NYSE' },
                                    { label: 'NASDAQ', value: 'NASDAQ' },
                                    { label: 'TSE', value: 'TSE' },
                                ]}
                                selected={stockExchange}
                                onChange={(newValue) => { setStockExchange(newValue) }}
                            />
                        </FormLayout.Group>
                        <FormLayout.Group>
                            <TextField
                                label="Why do you want to invest in this company? (150 Characters Limit)"
                                value={reason}
                                onChange={(newValue) => { setReason(newValue) }}
                                multiline={3}
                                maxLength={150}
                                showCharacterCount
                                error={reason.length > 0 ? false : "A description of the investment is required"}
                            />
                        </FormLayout.Group>
                        <FormLayout.Group>
                            <DropZone
                                allowMultiple={false}
                                onDrop={handleDropZoneDrop}
                                label="Upload an image of the company's logo"
                                type="image"
                            >
                                {uploadedFile}
                                {fileUpload}
                            </DropZone>
                        </FormLayout.Group>
                    </Form>
                </Modal.Section>
            </Modal>
        </div>
    );
}

export default AddFormComponent;