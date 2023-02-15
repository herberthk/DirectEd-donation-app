import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton/IconButton";
import { CloseIcon } from "./Modal";

type TransitionProps = Omit<SlideProps, "direction">;

const TransitionUp = (props: TransitionProps) => (
  <Slide {...props} direction="up" />
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * Shows the status of the the popup
 */
type Status = "success" | "error" | "warning" | "info";

interface Props {
  /**
   * Controls open state of the popup
   */
  isOpen: boolean;
  /**
   * Closes the popup
   */
  // eslint-disable-next-line no-unused-vars
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  /**
   * Status of the popup default `null`
   */
  status?: Status;
  /**
   * React node that shows popup contents
   */
  children: React.ReactNode;
}

export const PopoverAlert: React.FC<Props> = ({
  handleClose,
  isOpen,
  status,
  children,
}) => {
  /**
   * Shows close button if status is not provided
   */
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon />
    </IconButton>
  );
  /**
   * Render popup with status
   */
  if (status) {
    return (
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        TransitionComponent={TransitionUp}
      >
        <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
          {children}
        </Alert>
      </Snackbar>
    );
  }
  return (
    <Snackbar
      action={action}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      TransitionComponent={TransitionUp}
      message={children}
    />
  );
};
