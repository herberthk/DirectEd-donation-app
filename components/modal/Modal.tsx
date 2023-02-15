import React, { FC, forwardRef, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 font-bold"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface TitleProps {
  id: string;
  children?: ReactNode;
  onClose: () => void;
}

const ModalTitle: FC<TitleProps> = ({ id, onClose, children, ...rest }) => {
  return (
    <DialogTitle id={id} sx={{ m: 0, p: 2 }} {...rest}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

/**
 * Sizes of the modal
 */
type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

interface ModalProps {
  /**
   * Controls open state of the modal default `false`
   */
  isOpen: boolean;
  /**
   * Close the modal
   */
  handleClose: () => void;
  /**
   * Title pf the modal
   */
  title?: ReactNode;
  /**
   * Contents of the modal
   */
  children: ReactNode;
  /**
   * Footer of the modal
   */
  footer?: ReactNode;
  /**
   * aria label of the modal
   */
  ariaLabel?: string;
  /**
   * Size of the modal
   */
  size: Sizes;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  handleClose,
  children,
  footer,
  ariaLabel,
  title,
  size,
}) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby={ariaLabel}
        open={isOpen}
        maxWidth={size}
        TransitionComponent={Transition}
      >
        {title && (
          <ModalTitle id="customized-dialog-title" onClose={handleClose}>
            {title}
          </ModalTitle>
        )}

        <DialogContent dividers>{children}</DialogContent>
        {footer && <DialogActions>{footer}</DialogActions>}
      </BootstrapDialog>
    </div>
  );
};
