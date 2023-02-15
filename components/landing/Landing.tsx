import { ButtonLink, Modal, Scholarship } from "../";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { scholarshipData } from "../../util/scholarshipPools";
import React from "react";
import { useTranslation } from "react-i18next";

const Title = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  text-transform: capitalize;
  color: #2b3035;
  text-align: center;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 640px) {
    font-size: 32px;
    line-height: 43px;
  }
`;
interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalFooter = () => {
  return (
    <ButtonLink
      to=""
      text="Learn More"
      backgroundColor="accent2"
      textColor="text-primary"
      rounded={false}
      otherClasses="mx-auto my-4"
    />
  );
};

/**
 * Shows when the user first visited the app
 */
const WelcomeModal: FC<Props> = ({ handleClose, isOpen }) => {
  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      title={<p className="text-center">How to donate</p>}
      size="xs"
      footer={<ModalFooter />}
    >
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Typography>
    </Modal>
  );
};

export const Landing = () => {
  const { t } = useTranslation("", { useSuspense: false });
  // const [isOpen, setIsOpen] = useState(true);
  // const [afterOpen, setAfterOpen] = useState(false);
  // Closes the initial modal and opens the popup that shows start connecting
  // const handleClose = () => {
  //   setIsOpen(false);
  //   setAfterOpen(true);
  // };
  //  closes the popup
  // const closeAlert = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setAfterOpen(false);
  // };
  return (
    <div className="mt-4">
      <Title> {t("scholarship_pools")}</Title>
      {/* <PopoverAlert handleClose={closeAlert} isOpen={afterOpen} status="info">
        <div className="flex flex-col space-y-3 px-4">
          <p className="medium-text text-center text-xl font-bold">
            Start by connecting your wallet{" "}
          </p>
          <p className="text-xl">
            Need help? follow
            <Link href="" className="underline">
              this link
            </Link>
          </p>
        </div>
      </PopoverAlert>
      <WelcomeModal handleClose={handleClose} isOpen={isOpen} /> */}
      <Grid container>
        {scholarshipData.map((s) => (
          <Grid item sm={6} key={s.id}>
            <Scholarship
              daysLeft={s.daysLeft}
              moneyToFundNextScholarship={s.moneyToFundNextScholarship}
              peopleDonated={s.peopleDonated}
              remainingNamingRights={s.remainingNamingRights}
              scholarshipFinished={s.scholarshipFinished}
              schoolName={s.schoolName}
              to={s.to}
              imageAltText={s.imageAltText}
              imageUrl={s.imageUrl}
              progress={s.progress}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
