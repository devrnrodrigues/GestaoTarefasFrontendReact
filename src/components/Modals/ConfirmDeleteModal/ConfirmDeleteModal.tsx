import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalFooter,
    SubmitButton,
    CancelButton
} from './ConfirmDeleteModal.styles';

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Excluir Meta",
    message = "Tem certeza que deseja excluir esta meta? Esta ação não poderá ser desfeita."
}) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
        >
            <ModalContainer
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
            >
                <ModalHeader>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                            background: '#fef2f2',
                            border: '1px solid #fecaca',
                            color: '#dc2626',
                            padding: '8px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <ModalTitle>{title}</ModalTitle>
                            <p>{message}</p>
                        </div>
                    </div>
                    <CloseButton onClick={onClose} type="button">
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>

                <ModalFooter style={{ borderTop: 'none', marginTop: '10px', paddingTop: '0' }}>
                    <CancelButton type="button" onClick={onClose}>
                        Cancelar
                    </CancelButton>
                    <SubmitButton 
                        type="button" 
                        onClick={onConfirm}
                        style={{
                            background: 'linear-gradient(135deg, #991b1b 0%, #b91c1c 50%, #7f1d1d 100%)',
                            boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.2)'
                        }}
                    >
                        Sim, Excluir
                    </SubmitButton>
                </ModalFooter>
            </ModalContainer>
        </ModalOverlay>
    );
};