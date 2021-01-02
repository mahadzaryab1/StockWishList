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
import { projectStorage } from '../firebase/config';
import axios from 'axios';

const AddFormComponent = ({ setLoadingGrid }) => {
    // state variable indicating if the grid is active or not
    const [active, setActive] = useState(false);

    // state variable holding the company name
    const [companyName, setCompanyName] = useState('');

    // state variable holding the stock ticker
    const [stockTicker, setStockTicker] = useState('');

    // state variable holding the stock exchange 
    const [stockExchange, setStockExchange] = useState(['NYSE']);

    // state variable holding the due-diligence of the company
    const [reason, setReason] = useState('');

    // state variable containing an image of the company's logo
    const [file, setFile] = useState();

    // state variable indicating if the primary action is 
    // in a loading state
    const [loading, setLoading] = useState(false);

    // variable holding the valid image types
    const validImageTypes = ['image/jpeg', 'image/png'];

    /**
     * A function which sets the state when a file
     * is uploaded
     */
    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(file => acceptedFiles[0]), []);

    /**
     * Reset states when user enters or exists the
     * form
     */
    const handleChange = useCallback(
        () => {
            setActive(!active)
            setCompanyName('');
            setStockTicker('');
            setStockExchange(['NYSE']);
            setReason('');
            setFile(null);
            setLoading(false);
        }, [active]
    );

    /**
     * A function which handles the button submit on 
     * the form
     */
    const handleSubmit = () => {
        // set button loading state
        setLoading(true);

        // create reference to image in firebase storage
        const storageRef = projectStorage.ref(file.name);

        // add the file to firebase 
        storageRef.put(file).then(() => {
            // obtain the download URl
            storageRef.getDownloadURL().then(imageUrl => {
                // send API request containing stock information 
                // and the download image URL 
                const request = {
                    companyName,
                    stockExchange: stockExchange[0],
                    stockTicker,
                    imageUrl,
                    reason
                }
                axios.post('/api/wishlist', request).then(() => {
                    // reset states
                    handleChange();
                    // reload grid to reflect new state
                    setLoadingGrid(true);
                });
            });
        });
    }

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
                        !file,
                    loading: loading
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